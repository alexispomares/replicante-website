"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative h-svh w-full overflow-hidden bg-slate-950"
    >
      <Image
        src="/images/terrace-golden-hour.jpeg"
        alt="Luxury terrace at golden hour"
        fill
        priority
        className="object-cover opacity-[0.65]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-16 md:pb-24 md:px-[max(3rem,calc((100vw-72rem)/2+1.5rem))]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white max-w-4xl leading-[1.05] tracking-tight">
            Your buyers have questions at 2am.{" "}
            <span className="text-crystal-rose">Sofia has answers.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="mt-6 max-w-2xl"
        >
          <p className="text-lg text-white/80 leading-relaxed">
            AI-powered virtual assistants for luxury real estate firms in
            Portugal. Multilingual. Always on. Built for the Lisbon market.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 px-7 py-4 bg-white text-slate-900 font-heading font-semibold text-sm rounded-lg hover:bg-crystal-rose hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(212,160,176,0.25)] transition-all duration-300"
          >
            Book a Demo
          </a>
          <a
            href="#product"
            className="group inline-flex items-center gap-2 px-7 py-4 bg-white/[0.08] border border-white/[0.12] text-white font-heading font-semibold text-sm rounded-lg hover:bg-white/[0.15] hover:-translate-y-1 transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-6"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-white/[0.08] border border-white/[0.12] font-heading text-[0.82rem] font-semibold text-white/85">
            <span className="w-2 h-2 rounded-full bg-crystal-rose animate-pulse" />
            Porta da Frente Christie&rsquo;s reported $100M in AI-attributed
            sales
          </div>
        </motion.div>
      </div>
    </section>
  );
}
