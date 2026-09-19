import emailjs from "@emailjs/browser";
import { site } from "../data/content";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() ?? "";
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() ?? "";
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() ?? "";

export function isEmailConfigured() {
  return Boolean(serviceId && templateId && publicKey);
}

export async function sendContactEmail(input: {
  name: string;
  email: string;
  subject: string;
  message: string;
  honey?: string;
}) {
  if (input.honey?.trim()) {
    return;
  }

  if (!isEmailConfigured()) {
    throw new Error("not-configured");
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      title: input.subject || "Portfolio enquiry",
      subject: input.subject,
      name: input.name,
      email: input.email,
      from_name: input.name,
      from_email: input.email,
      user_name: input.name,
      user_email: input.email,
      reply_to: input.email,
      to_email: site.email,
      to_name: site.name,
      message: input.message,
    },
    { publicKey },
  );
}
