import { approachSteps } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Approach() {
  return (
    <section id="approach" className="bg-ash border-t border-gold/10 py-[4rem] px-[1.5rem] md:py-[7rem] md:px-[3rem]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-[2.5rem] md:gap-[5rem] items-start">
        
        <div className="md:sticky md:top-[8rem]">
          <Reveal>
            <div className="section-label">How I Work</div>
            <h2 className="section-title">
              A framework<br />
              built on<br />
              <em>depth first.</em>
            </h2>
            <p className="text-mist mt-[1rem] text-[0.92rem] leading-[1.8]">
              Most P&C interventions fail not from bad strategy, but from
              insufficient diagnosis. I do not build solutions before I understand
              the problem at its root.
            </p>
          </Reveal>
        </div>

        <div>
          <div className="text-mist text-[0.98rem] leading-[1.7] mb-[1.5rem]">
            <Reveal>
              <p className="mb-[1.5rem]">
                My approach is shaped by a conviction that <strong className="text-parchment font-normal">people problems are always structural problems in disguise</strong> — and that structural problems are always human problems underneath. The work requires moving between both levels with fluency.
              </p>
            </Reveal>
            <Reveal>
              <p className="mb-[1.5rem]">
                I draw on depth psychology (particularly Jungian frameworks), organisational behaviour research, and practical design thinking to craft interventions that address root causes — not just visible symptoms.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col mt-[2.5rem]">
            {approachSteps.map((step) => (
              <Reveal key={step.num}>
                <div className="grid grid-cols-[60px_1fr] gap-[1.5rem] py-[2rem] border-b border-gold/10 items-start">
                  <div className="font-serif text-[2rem] font-light text-gold/30 leading-none text-center">
                    {step.num}
                  </div>
                  <div>
                    <div className="font-serif text-[1.25rem] text-white mb-[0.4rem]">
                      {step.title}
                    </div>
                    <div className="text-[0.85rem] text-smoke leading-[1.6]">
                      {step.text}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
