"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const update = (key: keyof FormState, value: string) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("loading");

    try {
      const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

      if (!whatsappNumber) {
        throw new Error("WhatsApp number is not configured.");
      }

      const whatsappMessage = `
*New Enquiry — 3VIEW*

*Name:* ${form.name}

*Email:* ${form.email}

*Phone:* ${form.phone || "Not provided"}

*Subject:* ${form.subject || "Not provided"}

*Message:*
${form.message}

---
This enquiry was submitted through the 3VIEW website.
      `.trim();

      // Encode message for WhatsApp
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp
      window.open(whatsappUrl, "_blank");

      // --------------------------------
      // 3. Reset form
      // --------------------------------
      setForm(initialForm);

      setStatus("success");
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");
    }
  }

  return (
    <form onSubmit={submit} className="rounded-[28px] bg-white p-6 sm:p-9">
      {/* Success Message */}
      {status === "success" && (
        <div className="mb-6 rounded-2xl border border-green-800/15 bg-green-50 p-4 text-sm text-green-800">
          Thank you. Your message has been received by 3VIEW and WhatsApp has
          been opened.
        </div>
      )}

      {/* Error Message */}
      {status === "error" && (
        <div className="mb-6 rounded-2xl border border-red-800/15 bg-red-50 p-4 text-sm text-red-800">
          We could not send your message. Please check your Firebase and
          WhatsApp configuration and try again.
        </div>
      )}

      {/* Fields */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          required
          value={form.name}
          onChange={(v) => update("name", v)}
        />

        <Field
          label="Email"
          type="email"
          required
          value={form.email}
          onChange={(v) => update("email", v)}
        />

        <Field
          label="Phone"
          type="tel"
          value={form.phone}
          onChange={(v) => update("phone", v)}
        />

        <Field
          label="Subject"
          value={form.subject}
          onChange={(v) => update("subject", v)}
        />
      </div>

      {/* Message */}
      <label className="mt-5 grid gap-2 text-sm">
        <span>Message</span>

        <textarea
          required
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us a little about your project or enquiry..."
          className="min-h-44 resize-y rounded-2xl border border-black/15 bg-[#f8f6f1] p-4 outline-none transition focus:border-black"
        />
      </label>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 disabled:opacity-50"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send message
            <ArrowUpRight size={16} />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span>
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </span>

      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-2xl border border-black/15 bg-[#f8f6f1] px-4 py-3 outline-none transition focus:border-black"
      />
    </label>
  );
}
