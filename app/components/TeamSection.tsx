"use client";

import Image from "next/image";
import type { Person } from "@/lib/people";
import { FadeIn, StaggerChildren, StaggerItem } from "./FadeIn";

function FounderCard({ person }: { person: Person }) {
  const initials = person.name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  return (
    <div className="bg-white rounded-xl border border-slate-200/60 p-6 md:p-8">
      <div className="flex items-center gap-5 mb-5">
        {person.avatar ? (
          <Image
            src={person.avatar}
            alt={person.name}
            width={72}
            height={72}
            className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 font-heading font-bold text-base text-slate-500">
            {initials}
          </div>
        )}
        <div>
          <div className="font-heading font-semibold text-[0.95rem] text-slate-900">
            {person.name}
          </div>
          <div className="text-[0.78rem] text-slate-400 mt-0.5">
            {person.role}
          </div>
          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-crystal-rose transition-colors duration-300 inline-block mt-1.5"
            >
              <svg
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
            </a>
          )}
        </div>
      </div>
      {person.bio && (
        <p className="text-[0.82rem] text-slate-500 leading-relaxed">
          {person.bio}
        </p>
      )}
    </div>
  );
}

export default function TeamSection({ employees }: { employees: Person[] }) {
  return (
    <section id="about" className="bg-warm-white scroll-mt-24">
      <div className="px-6 py-20 md:px-16 md:py-32 lg:px-24 max-w-7xl mx-auto">
        <FadeIn>
          <span className="font-mono text-[0.65rem] font-medium tracking-[0.2em] uppercase text-crystal-rose mb-6 block">
            About us
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl text-slate-900 leading-[1.1] max-w-xl">
            Built in Lisbon, for Lisbon
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-6 text-base text-slate-500 max-w-xl leading-relaxed">
            Two founders combining AI engineering and visual production
            expertise to modernize luxury real estate. We live here. We know
            this market. We built Sofia specifically for it.
          </p>
        </FadeIn>
        <div className="mt-10 md:mt-14">
          <StaggerChildren className="grid md:grid-cols-2 gap-6">
            {employees.map((p) => (
              <StaggerItem key={p.name}>
                <FounderCard person={p} />
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
