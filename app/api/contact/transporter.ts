import nodemailer from "nodemailer";

let _transporter: nodemailer.Transporter | null = null;

export function getTransporter() {
  if (_transporter) return _transporter;

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error(
      `${!process.env.SMTP_HOST ? "SMTP_HOST" : !process.env.SMTP_USER ? "SMTP_USER" : "SMTP_PASS"} is not defined in environment variables`
    );
  }

  _transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  return _transporter;
}

export function getContactMailConfig() {
  if (!process.env.SMTP_USER) {
    throw new Error("SMTP_USER is not defined in environment variables");
  }

  return {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_TO || "contact@facile.studio",
  };
}
