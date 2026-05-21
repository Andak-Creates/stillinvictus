import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-[1.5rem] md:px-[3rem] pt-[7rem] md:pt-[8rem] pb-[3rem] md:pb-[4rem] overflow-hidden"
    >
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(194,148,58,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent,rgba(194,148,58,0.3),transparent)]" />

      <div className="flex flex-col z-10 relative">
        <div className="flex items-center gap-[0.8rem] text-[0.72rem] tracking-[0.22em] uppercase text-gold mb-[1.8rem] opacity-0 animate-[fadeUp_0.8s_0.2s_forwards] before:content-[''] before:w-[2rem] before:h-px before:bg-gold">
          People & Culture · Lagos, Nigeria
        </div>

        <div className="flex items-center gap-[1rem] bg-gold/5 border border-gold/20 p-[1rem_2rem] mb-[3rem] max-w-[560px] opacity-0 animate-[fadeUp_0.8s_0.2s_forwards]">
          <span className="w-[8px] h-[8px] rounded-full bg-gold shrink-0 animate-[customPulse_2s_infinite]" />
          <span className="text-[0.78rem] text-gold-light tracking-[0.06em]">
            Independent Practice · In Active Growth · Open to Collaboration
          </span>
        </div>

        <h1 className="font-serif text-[clamp(3rem,5.5vw,5.5rem)] font-light leading-[1.08] tracking-[-0.01em] text-white mb-[2rem] opacity-0 animate-[fadeUp_0.9s_0.35s_forwards]">
          Building{" "}
          <em className="italic text-gold-light">
            human <br className="hidden md:block" />
            architecture
          </em>{" "}
          <br className="hidden md:block" />
          from the <br className="hidden md:block" />
          inside out.
        </h1>

        <p className="text-[1rem] text-mist max-w-[420px] leading-[1.8] mb-[2.8rem] opacity-0 animate-[fadeUp_0.9s_0.5s_forwards]">
          Independent People & Culture practice rooted in the psychology of
          human behaviour, organisational design, and the quiet discipline of
          building something real — one structure at a time.
        </p>

        <div className="flex gap-[1.2rem] items-center opacity-0 animate-[fadeUp_0.9s_0.65s_forwards]">
          <Link className="btn-primary" href="#services">
            Explore Services
          </Link>
          <Link className="btn-ghost" href="#approach">
            My Approach ↓
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-start md:items-end gap-[2rem] opacity-0 animate-[fadeIn_1.2s_0.7s_forwards] mt-12 md:mt-0 z-10 relative">
        <div className="grid grid-cols-2 gap-[1.5px] w-full max-w-full md:max-w-[340px] border border-gold/15">
          <div className="bg-white/5 p-[1.8rem_1.4rem] text-center border border-gold/10">
            <span className="font-serif text-[2.4rem] font-light text-gold-light block leading-none">
              P&C
            </span>
            <span className="text-[0.68rem] tracking-[0.14em] uppercase text-smoke mt-[0.4rem] block">
              Practitioner
            </span>
          </div>
          <div className="bg-white/5 p-[1.8rem_1.4rem] text-center border border-gold/10">
            <span className="font-serif text-[2.4rem] font-light text-gold-light block leading-none">
              OD
            </span>
            <span className="text-[0.68rem] tracking-[0.14em] uppercase text-smoke mt-[0.4rem] block">
              Focus Area
            </span>
          </div>
          <div className="bg-white/5 p-[1.8rem_1.4rem] text-center border border-gold/10">
            <span className="font-serif text-[2.4rem] font-light text-gold-light block leading-none">
              LBS
            </span>
            <span className="text-[0.68rem] tracking-[0.14em] uppercase text-smoke mt-[0.4rem] block">
              Entrepreneurship
            </span>
          </div>
          <div className="bg-white/5 p-[1.8rem_1.4rem] text-center border border-gold/10">
            <span className="font-serif text-[2.4rem] font-light text-gold-light block leading-none">
              6mo
            </span>
            <span className="text-[0.68rem] tracking-[0.14em] uppercase text-smoke mt-[0.4rem] block">
              Active Roadmap
            </span>
          </div>
        </div>

        <div className="font-serif italic text-[1.1rem] text-white max-w-[300px] text-left md:text-right leading-[1.6] border-l-2 md:border-l-0 md:border-r-2 border-gold pl-[1.2rem] md:pl-0 md:pr-[1.2rem]">
          &quot;The most complex systems I have ever encountered are human ones
          — and they are also the most worth understanding.&quot;
        </div>
      </div>
    </section>
  );
}
