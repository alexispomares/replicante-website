"use client";

import { useState } from "react";
import { submitContactForm } from "@/lib/api";
import { FadeIn } from "../components/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const INPUT_CLS =
  "w-full px-4 py-3.5 border border-slate-200 rounded-lg text-sm bg-white text-slate-900 placeholder:text-slate-400 outline-none focus:border-crystal-rose focus:shadow-[0_0_0_3px_rgba(212,160,176,0.12)] transition-all";

const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function ContactContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agency, setAgency] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [emailTouched, setEmailTouched] = useState(false);

  const emailValid = isValidEmail(email);
  const canSubmit = status !== "loading" && emailValid && name.trim().length >= 2;
  const showEmailError = emailTouched && email.length > 0 && !emailValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitContactForm({ name, email, agency, message });
      setStatus("success");
      setName("");
      setEmail("");
      setAgency("");
      setMessage("");
      setEmailTouched(false);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <>
        <section className="relative pt-28 pb-6 md:pt-32 md:pb-10 text-center px-6">
          <div className="aurora-bg aurora-bg-sub" />
          <FadeIn>
            <h1 className="relative z-10 font-display text-5xl md:text-7xl text-slate-900">
              Book a Demo
            </h1>
          </FadeIn>
        </section>
        <section className="relative z-[1] px-6 py-12 md:px-16 md:py-16 lg:px-24 max-w-xl md:max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="w-16 h-16 rounded-full bg-verdant/10 flex items-center justify-center mx-auto mb-4">
              <svg
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-verdant"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="font-display text-2xl text-slate-900">
              Message sent
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              We&rsquo;ll be in touch within 24 hours to schedule your demo.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm text-crystal-rose hover:text-slate-700 transition-colors font-heading font-medium"
            >
              Send another &rarr;
            </button>
          </motion.div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="relative pt-28 pb-6 md:pt-32 md:pb-10 text-center px-6">
        <div className="aurora-bg aurora-bg-sub" />
        <FadeIn>
          <h1 className="relative z-10 font-display text-5xl md:text-7xl text-slate-900">
            Book a Demo
          </h1>
          <p className="relative z-10 mt-4 text-base text-slate-500 max-w-lg mx-auto">
            See Sofia in action with your own listings. Free 2-week pilot,
            no commitment.
          </p>
        </FadeIn>
      </section>

      <section className="relative z-[1] px-6 pt-8 pb-20 md:px-16 md:pt-12 md:pb-28 lg:px-24 max-w-xl md:max-w-2xl mx-auto">
        <FadeIn>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-slate-400 mb-2 block">
                Your name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className={INPUT_CLS}
                required
              />
            </div>

            <div>
              <label className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-slate-400 mb-2 block">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => { if (email.length > 0) setEmailTouched(true); }}
                placeholder="you@agency.com"
                className={`${INPUT_CLS} ${showEmailError ? "border-crystal-rose" : ""}`}
                required
              />
              <AnimatePresence>
                {showEmailError && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="text-[0.72rem] text-crystal-rose mt-1.5 px-1"
                  >
                    Please enter a valid email address
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-slate-400 mb-2 block">
                Agency / Company
              </label>
              <input
                type="text"
                value={agency}
                onChange={(e) => setAgency(e.target.value)}
                placeholder="Your agency or company name"
                className={INPUT_CLS}
              />
            </div>

            <div>
              <label className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-slate-400 mb-2 block">
                Message (optional)
              </label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your agency and what you're looking for"
                rows={4}
                className={`${INPUT_CLS} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full py-3.5 bg-slate-900 text-white font-heading font-semibold text-sm rounded-lg hover:bg-slate-700 transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Book a Demo"}
            </button>

            {status === "error" && (
              <p className="text-crystal-rose text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}

            <p className="text-center text-[0.78rem] text-slate-400 pt-2">
              Or email us directly at{" "}
              <a
                href="mailto:contact@replicante.eu"
                className="text-crystal-rose hover:text-slate-700 transition-colors"
              >
                contact@replicante.eu
              </a>
            </p>
          </form>
        </FadeIn>
      </section>
    </>
  );
}
