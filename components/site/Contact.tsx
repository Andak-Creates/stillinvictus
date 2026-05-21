"use client";

import { useState } from "react";
import { Eyebrow } from "./Section";
import { Reveal } from "./Reveal";
import { sendContactEmail } from "@/app/actions/contact";

export function Contact() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    setErrorMessage("");

    const result = await sendContactEmail(formData);

    if (result.error) {
      setStatus("error");
      setErrorMessage(result.error);
    } else {
      setStatus("success");
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container-wide">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <h2 className="display mt-6 text-[clamp(2.5rem,5vw,4.5rem)] text-white">
                Let&apos;s build <em>something real.</em>
              </h2>
              <p className="mt-6 max-w-md text-[0.98rem] leading-[1.9] text-mist">
                Founding clients receive focused attention at preferential
                terms. The doors are open.
              </p>
              <dl className="mt-12 space-y-5">
                {[
                  { label: "Based", value: "Lagos & Benin City" },
                  { label: "Open to", value: "Remote · Hybrid · In-person" },
                  { label: "Response", value: "Within 24–48 hours" },
                ].map((row) => (
                  <div key={row.label} className="flex gap-6 text-sm">
                    <dt className="w-16 shrink-0 text-[0.62rem] tracking-[0.18em] text-gold uppercase">
                      {row.label}
                    </dt>
                    <dd className="text-mist">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={100}>
            {status === "success" ? (
              <div className="border border-gold/15 bg-ash/50 p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-parchment mb-2">
                  Message sent
                </h3>
                <p className="text-smoke text-sm">
                  Thank you for reaching out. I will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 btn-line text-mist hover:text-gold"
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form
                action={handleSubmit}
                className="border border-gold/15 bg-ash/50 p-8 md:p-10"
              >
                {[
                  {
                    label: "Full name",
                    name: "name",
                    placeholder: "Your name",
                    required: true,
                  },
                  {
                    label: "Email or WhatsApp",
                    name: "contactInfo",
                    placeholder: "How to reach you",
                    required: true,
                  },
                  {
                    label: "Organisation",
                    name: "organisation",
                    placeholder: "Where are you building?",
                    required: false,
                  },
                ].map((field) => (
                  <label key={field.label} className="mb-5 block">
                    <span className="mb-1.5 block text-[0.65rem] tracking-[0.16em] text-gold uppercase">
                      {field.label} {field.required && "*"}
                    </span>
                    <input
                      type="text"
                      name={field.name}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full border border-gold/15 bg-ink/50 px-4 py-3 text-sm text-parchment outline-none transition-colors placeholder:text-smoke focus:border-gold/50"
                    />
                  </label>
                ))}
                <label className="mb-6 block">
                  <span className="mb-1.5 block text-[0.65rem] tracking-[0.16em] text-gold uppercase">
                    What do you need? *
                  </span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me what you are working through."
                    className="w-full resize-y border border-gold/15 bg-ink/50 px-4 py-3 text-sm text-parchment outline-none transition-colors placeholder:text-smoke focus:border-gold/50"
                  />
                </label>

                {status === "error" && (
                  <p className="text-red-400 text-sm mb-4">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-gold w-full justify-center md:w-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Send message →"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
