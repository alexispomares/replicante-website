"use client";

import Link from "next/link";
import EonLogo from "./EonLogo";
import EmailSignup from "./EmailSignup";

const navLinks = [
  { href: "/#product", label: "Product" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-paper px-6 pt-16 pb-28 md:px-12 md:pt-14 md:pb-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left column */}
        <div className="flex flex-col justify-between gap-8 items-center md:items-start">
          <ul className="flex flex-wrap gap-6 justify-center md:justify-start">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-heading text-[0.8rem] font-medium tracking-[0.06em] uppercase text-slate-400 hover:text-crystal-rose transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <EonLogo />
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-between gap-4 items-center md:items-end">
          <EmailSignup variant="footer" />

          <div className="flex items-center justify-between w-full">
            <a
              href="mailto:contact@replicante.eu"
              className="text-slate-400 hover:text-crystal-rose transition-colors duration-300 text-[0.78rem] font-heading"
            >
              contact@replicante.eu
            </a>
            <p className="text-[0.72rem] text-slate-400 font-mono">
              Replicante &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
