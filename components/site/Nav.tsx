"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Force scroll to top on page load/refresh
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Solid shield that covers any gap above the navbar (iOS safe area, status bar, etc.) */}
      <div
        className="fixed top-0 left-0 right-0 z-[101] bg-[#0E0C0A]"
        style={{ height: "env(safe-area-inset-top, 0px)" }}
      />
      <nav
        className={`fixed left-0 right-0 w-full z-[100] flex items-center justify-between bg-[#0E0C0A] border-b border-gold/12 transition-all duration-400 ease-in-out px-[1.5rem] md:px-[3rem] ${
          scrolled ? "py-[0.9rem]" : "py-[1.2rem] md:py-[1.4rem]"
        }`}
        style={{ top: "env(safe-area-inset-top, 0px)" }}
      >
        <Link
          href="#"
          className="font-serif font-medium text-[1.15rem] tracking-[0.08em] text-parchment no-underline"
        >
          StillInvictus<span className="text-gold">.</span>
        </Link>

        <ul className="hidden md:flex gap-[2.5rem] list-none m-0 p-0">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.78rem] tracking-[0.14em] uppercase text-mist no-underline transition-colors duration-300 hover:text-gold-light"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="text-[0.75rem] tracking-[0.12em] uppercase text-ink bg-gold px-[1.4rem] py-[0.6rem] no-underline transition-all duration-300 hover:bg-gold-light"
          href="#contact"
        >
          Work With Me
        </a>
      </nav>
    </>
  );
}
