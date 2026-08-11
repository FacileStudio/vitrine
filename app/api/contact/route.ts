import { NextResponse } from "next/server";
import { getContactMailConfig, getTransporter } from "./transporter";

const escapeHtml = (value: string) =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

// breaks a run of backticks so submitted content can't close the Discord
// code fence early and start formatting/pinging outside it
const escapeCodeFence = (value: string) => value.replace(/`/g, "`​");

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const { name, email, phone, message } = data;
        const { from, to } = getContactMailConfig();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        await getTransporter().sendMail({
            from: `Facile. Studio <${from}>`,
            to,
            replyTo: email,
            subject: "New email from Facile.",
            html: `
                <h2>New Email sent</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                <p><strong>Phone:</strong> ${escapeHtml(phone || "N/A")}</p>
                <p><strong>Message:</strong></p>
                <p>${escapeHtml(message)}</p>
            `,
        });

        if (process.env.WEBHOOK_URL) {
            await fetch(process.env.WEBHOOK_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // fenced as a code block so a submitted "@everyone" or markdown/mention
                    // syntax renders as literal text instead of pinging or formatting
                    content: `@everyone\nNew contact form submission:\n\`\`\`\nName: ${escapeCodeFence(name)}\nEmail: ${escapeCodeFence(email)}\nPhone: ${escapeCodeFence(phone || "N/A")}\nMessage: ${escapeCodeFence(message)}\n\`\`\``,
                    allowed_mentions: { parse: ["everyone"] },
                }),
            });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error:", error);

        const message =
            error instanceof Error && /SMTP_|Greeting never received|Connection timeout|Timeout|Invalid login|auth/i.test(error.message)
                ? error.message
                : "Server error";

        return NextResponse.json(
            { error: message },
            { status: 500 }
        );
    }
}
