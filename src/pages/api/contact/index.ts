import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

const env = import.meta.env;
const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  SMTP_FROM,
  SMTP_TO,
} = env;

const parsePort = (value?: string) => {
  const num = Number(value);
  return Number.isFinite(num) && num > 0 ? num : 587;
};

export const POST: APIRoute = async ({ request }) => {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return new Response("Missing SMTP configuration.", { status: 500 });
  }

  const form = await request.formData();
  const name = String(form.get("name") || "").trim();
  const email = String(form.get("email") || "").trim();
  const message = String(form.get("message") || "").trim();
  const lang = String(form.get("lang") || "nl").trim();

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parsePort(SMTP_PORT),
    secure: false,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const from = SMTP_FROM || SMTP_USER;
  const to = SMTP_TO || SMTP_USER;

  const subject = "IDEX Praxis - Website contact";
  const text = [
    `Naam: ${name || "-"}`,
    `E-mail: ${email || "-"}`,
    "",
    message || "-",
  ].join("\n");

  await transporter.sendMail({
    from,
    to,
    replyTo: email || undefined,
    subject,
    text,
  });

  const referer = request.headers.get("referer");
  if (referer) {
    const url = new URL(referer);
    url.searchParams.set("sent", "1");
    return new Response(null, {
      status: 303,
      headers: { Location: url.toString() },
    });
  }

  return new Response(null, {
    status: 303,
    headers: { Location: `/${lang}/contact/?sent=1` },
  });
};
