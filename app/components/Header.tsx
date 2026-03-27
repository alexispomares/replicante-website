"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import EonLogo from "./EonLogo";

const links = [
  { href: "/#sofia-section", label: "Sofia" },
  { href: "/#how-it-works", label: "How It Works" },
  // { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
]

const DARK_SECTION_IDS = ["hero-section", "sofia-section"];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(isHome);
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0);
  const ignoreScrollUntil = useRef(0);
  const navRef = useRef<HTMLElement>(null);

  const freezeScroll = useCallback(() => {
    setVisible(true);
    ignoreScrollUntil.current = performance.now() + 2000;
  }, []);

  useEffect(() => {
    if (!isHome) setOnDark(false);

    if (window.location.hash) {
      setVisible(false);
      ignoreScrollUntil.current = performance.now() + 2000;
    }

    const onScroll = () => {
      const now = performance.now();
      const y = window.scrollY;

      if (now < ignoreScrollUntil.current) {
        lastY.current = y;
        return;
      }

      if (isHome) {
        const navBottom = navRef.current?.getBoundingClientRect().bottom ?? 64;
        const overlapping = DARK_SECTION_IDS.some((id) => {
          const el = document.getElementById(id);
          if (!el) return false;
          const r = el.getBoundingClientRect();
          return r.top < navBottom && r.bottom > 0;
        });
        setOnDark(overlapping);
      }

      if (y > 80) {
        setVisible(y < lastY.current);
      } else {
        setVisible(true);
      }
      lastY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const handleClick = useCallback((e: React.MouseEvent, href: string) => {
    freezeScroll();
    if (href.includes("#") && isHome) {
      e.preventDefault();
      const id = href.split("#")[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", `#${id}`);
      }
    }
  }, [isHome, freezeScroll]);

  const logoWhite = isHome && onDark;

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-[max(3rem,calc((100vw-72rem)/2+1.5rem))] transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <EonLogo white={logoWhite} />

      {/* Desktop pill */}
      <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full bg-slate-900/25 backdrop-blur-xl border border-warm-white/25">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={(e) => handleClick(e, l.href)}
            className="px-4 py-2 font-heading text-[0.75rem] font-medium tracking-[0.06em] uppercase text-white/80 hover:text-white hover:bg-white/[0.1] rounded-full transition-all"
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2.5 rounded-full bg-slate-900/25 backdrop-blur-xl border border-white/[0.06]"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1 w-4">
          <span className={`block h-0.5 rounded-full bg-white transition-all ${open ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`block h-0.5 rounded-full bg-white transition-all ${open ? "-rotate-45 -translate-y-[3px]" : ""}`} />
        </div>
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full right-6 mt-2 bg-slate-900/85 backdrop-blur-xl border border-white/[0.08] rounded-2xl py-3 px-2 md:hidden min-w-[180px]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={(e) => { setOpen(false); handleClick(e, l.href); }}
              className="block px-4 py-2.5 font-heading text-sm font-medium text-white/80 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
