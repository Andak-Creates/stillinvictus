import Image from "next/image";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-[5fr_6fr] gap-[3rem] md:gap-[6rem] items-center bg-ash border-y border-gold/10 py-[4rem] px-[1.5rem] md:py-[7rem] md:px-[3rem]"
    >
      <div className="relative">
        <Reveal>
          <div className="w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[3/4] border border-gold/15 flex items-center justify-center relative overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="Victor Profile"
              fill
              className="object-cover object-center"
              priority
            />
            <span className="absolute bottom-[-1px] right-[-1px] bg-gold text-ink text-[0.65rem] tracking-[0.16em] uppercase px-[1.2rem] py-[0.7rem] font-medium z-10">
              Lagos · Nigeria
            </span>
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <Reveal>
          <div className="section-label">About the Practice</div>
          <h2 className="section-title">
            Practitioner-led.
            <br />
            <em>Passion-rooted.</em>
            <br />
            Structurally minded.
          </h2>

          <div className="text-mist text-[0.98rem] leading-[1.7] mb-[1.4rem]">
            <p className="mb-[1.4rem]">
              I did not arrive at People & Culture through a classroom. I
              arrived through{" "}
              <strong className="text-parchment font-normal">
                years of observing people
              </strong>{" "}
              — how they break under the wrong structures, how they bloom under
              the right ones, how organisations fail not from strategy but from
              the humans inside them.
            </p>
            <p className="mb-[1.4rem]">
              My foundation is{" "}
              <strong className="text-parchment font-normal">
                psychology, human behaviour, and organisational design
              </strong>{" "}
              — studied not as academic exercise but as lived practice. I bring
              to this work a depth lens shaped by Jungian thought, an
              entrepreneurial grounding from Lagos Business School, and a
              genuine hunger to build things that last.
            </p>
            <p className="mb-[1.4rem]">
              This practice is independent, intentional, and in active growth. I
              am not waiting until I am &quot;ready.&quot;{" "}
              <strong className="text-parchment font-normal">
                I am building readiness through doing.
              </strong>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] mt-[2.5rem]">
            <div className="relative overflow-hidden border border-gold/15 p-[1.4rem] bg-white/5 min-h-[7rem] flex flex-col justify-end">
              <Image
                src="/illustrations/psychology-trans.png"
                alt=""
                aria-hidden={true}
                width={130}
                height={130}
                className="absolute -bottom-4 -right-4 opacity-[0.15] object-contain pointer-events-none select-none"
              />
              <div className="relative z-10">
                <div className="text-[0.78rem] tracking-[0.1em] uppercase text-gold-light mb-[0.3rem]">
                  Psychology-Led
                </div>
                <div className="text-[0.82rem] text-[#aaa] leading-[1.5]">
                  Human behaviour as the starting point for every intervention
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden border border-gold/15 p-[1.4rem] bg-white/5 min-h-[7rem] flex flex-col justify-end">
              <Image
                src="/illustrations/structure-trans.png"
                alt=""
                aria-hidden={true}
                width={130}
                height={130}
                className="absolute -bottom-4 -right-4 opacity-[0.15] object-contain pointer-events-none select-none"
              />
              <div className="relative z-10">
                <div className="text-[0.78rem] tracking-[0.1em] uppercase text-gold-light mb-[0.3rem]">
                  Structure-First
                </div>
                <div className="text-[0.82rem] text-[#aaa] leading-[1.5]">
                  Clarity of form before execution of strategy
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden border border-gold/15 p-[1.4rem] bg-white/5 min-h-[7rem] flex flex-col justify-end">
              <Image
                src="/illustrations/context-trans.png"
                alt=""
                aria-hidden={true}
                width={130}
                height={130}
                className="absolute -bottom-4 -right-4 opacity-[0.15] object-contain pointer-events-none select-none"
              />
              <div className="relative z-10">
                <div className="text-[0.78rem] tracking-[0.1em] uppercase text-gold-light mb-[0.3rem]">
                  African Context
                </div>
                <div className="text-[0.82rem] text-[#aaa] leading-[1.5]">
                  Solutions grounded in our actual operating environment
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden border border-gold/15 p-[1.4rem] bg-white/5 min-h-[7rem] flex flex-col justify-end">
              <Image
                src="/illustrations/growth-trans.png"
                alt=""
                aria-hidden={true}
                width={130}
                height={130}
                className="absolute -bottom-4 -right-4 opacity-[0.15] object-contain pointer-events-none select-none"
              />
              <div className="relative z-10">
                <div className="text-[0.78rem] tracking-[0.1em] uppercase text-gold-light mb-[0.3rem]">
                  Growth-In-Progress
                </div>
                <div className="text-[0.82rem] text-[#aaa] leading-[1.5]">
                  A transparent, committed 6-month practice build
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
