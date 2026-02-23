import { NextResponse } from "next/server";
import { transporter } from "./transporter";

if (!process.env.WEBHOOK_URL) {
  throw new Error("WEBHOOK_URL is not defined in environment variables");
}

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const { name, email, phone, message } = data;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        transporter.sendMail({
            from: "Facile. Studio <contact@facile.studio>",
            to: "contact@facile.studio",
            subject: "New email from Facile.",
            html: `
                <h2>New Email sent</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || "N/A"}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        fetch(process.env.WEBHOOK_URL!, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: `@everyone\nNew contact form submission:\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nMessage: ${message}`,
            }),
        });

        console.log("YES");
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}
