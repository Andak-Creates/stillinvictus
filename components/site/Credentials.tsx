import Image from "next/image";
import { credentials } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Credentials() {
  return (
    <section className="border-t border-gold/10 bg-ash py-16 md:py-20">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow mb-10">What I bring</p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((cred, i) => (
            <Reveal key={cred.title} delay={i * 60}>
              <div className="group relative overflow-hidden border border-gold/15 hover:border-gold/35 transition-all duration-300 h-[11rem] flex flex-col bg-gradient-to-br from-white/[0.07] to-transparent">

                {/* Gold top accent strip */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold/70 via-gold/30 to-transparent" />

                {/* Background illustration */}
                <Image
                  src={cred.img}
                  alt=""
                  aria-hidden={true}
                  width={150}
                  height={150}
                  className="absolute -bottom-3 -right-3 opacity-[0.18] group-hover:opacity-[0.25] transition-opacity duration-300 object-contain pointer-events-none select-none"
                />

                {/* Content */}
                <div className="relative z-10 p-[1.6rem] flex flex-col h-full">
                  <div className="text-[0.7rem] tracking-[0.14em] uppercase text-gold mb-[0.55rem] leading-[1.5]">
                    {cred.title}
                  </div>
                  <div className="text-[0.81rem] text-[#b0b0b0] leading-[1.65]">
                    {cred.sub}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
