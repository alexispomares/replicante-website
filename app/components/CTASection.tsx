"use client";

import { FadeIn } from "./FadeIn";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-[1] px-6 py-24 md:px-16 md:py-32 lg:px-24 max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-display text-3xl md:text-5xl text-white leading-[1.1]">
            Ready to see what Sofia can do for your agency?
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="mt-6 text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We&rsquo;re offering free 2-week pilots to select luxury agencies in
            Lisbon. No risk, no commitment &mdash; just results.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-heading font-semibold text-sm rounded-lg hover:bg-crystal-rose hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(212,160,176,0.25)] transition-all duration-300"
            >
              Book a 20-Minute Demo
            </a>
            <span className="text-sm text-slate-300">
              or email us at{" "}
              <a
                href="mailto:contact@replicante.eu"
                className="text-crystal-rose hover:text-crystal-blush transition-colors"
              >
                contact@replicante.eu
              </a>
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="mt-8 text-[0.78rem] text-slate-400">
            Based in Lisbon. Happy to meet at your office.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
