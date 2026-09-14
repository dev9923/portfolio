"use client";

import { useRef, useState } from "react";
import {
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { site } from "@/data/site";

const inputClass =
  "w-full rounded-xl border border-line bg-glass px-4 py-3 text-sm text-fg placeholder:text-subtle focus:border-transparent focus:outline-none focus:ring-2 focus:ring-accent-2";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${site.email}`,
        { method: "POST", body: formData },
      );

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again later.");
      }

      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
      statusRef.current?.focus();
    }
  };

  return (
    <Section id="contact">
      <SectionHeader id="contact" eyebrow="Contact" title="Get in touch" />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="max-w-[46ch] text-[15px] leading-relaxed text-muted">
              Open to backend and platform engineering conversations. Email is
              fastest — the form goes to the same inbox.
            </p>

            <ul className="mt-8 divide-y divide-line border-y border-line">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 py-4 text-sm text-muted transition-colors hover:text-fg"
                >
                  <Mail size={16} className="text-subtle" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3 py-4 text-sm text-muted">
                <MapPin size={16} className="text-subtle" aria-hidden />
                {site.location}
              </li>
            </ul>

            <ul className="mt-6 flex items-center gap-2">
              {[
                { href: site.socials.github, label: "GitHub", Icon: Github },
                {
                  href: site.socials.linkedin,
                  label: "LinkedIn",
                  Icon: Linkedin,
                },
              ].map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line text-subtle transition-colors hover:border-line-strong hover:text-fg"
                  >
                    <Icon size={17} aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            aria-busy={isSubmitting}
            className="glass rounded-2xl p-5 sm:p-7"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact Message"
            />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="true" />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-subtle"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-subtle"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="subject"
                className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-subtle"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Backend role / collaboration"
                className={inputClass}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="message"
                className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-subtle"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What are you working on?"
                aria-describedby={error ? "contact-status" : undefined}
                className={`${inputClass} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-on-accent transition-opacity disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" aria-hidden />
                  Sending…
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle2 size={16} aria-hidden />
                  Sent
                </>
              ) : (
                <>
                  <Send size={16} aria-hidden />
                  Send message
                </>
              )}
            </button>

            <div
              id="contact-status"
              ref={statusRef}
              tabIndex={-1}
              role="status"
              aria-live="polite"
              className="mt-4 text-sm"
            >
              {isSuccess && (
                <p className="text-emerald-600 dark:text-emerald-400">
                  Message sent. I&apos;ll get back to you soon.
                </p>
              )}
              {error && <p className="text-rose-500">{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
