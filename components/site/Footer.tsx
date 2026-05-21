import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gold/12 py-10">
      <div className="container-wide flex flex-col items-center justify-between gap-8 md:flex-row">
        <Link
          href="#home"
          className="font-serif text-xl tracking-wide text-parchment"
        >
          StillInvictus<span className="text-gold">.</span>
        </Link>
        <p className="text-center text-[0.7rem] tracking-[0.12em] text-smoke">
          © {new Date().getFullYear()} · Lagos, Nigeria · Independent P&C Practice
        </p>
        <nav className="flex gap-8">
          {[
            { label: "Instagram", href: "#" },
            { label: "LinkedIn", href: "#" },
            { label: "Email", href: "mailto:victor@thesceneapp.online" }
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-[0.68rem] tracking-[0.14em] text-mist uppercase transition-colors hover:text-gold"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
