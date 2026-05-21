import { roadmapMonths } from "@/lib/content";
import { SectionHeader } from "./Section";
import { Reveal } from "./Reveal";

export function Roadmap() {
  return (
    <section id="roadmap" className="relative overflow-hidden py-12 md:py-20">
      <div className="container-wide relative">
        <SectionHeader
          eyebrow="Transparency & growth"
          title={
            <>
              The 6-month
              <br />
              <em>build plan.</em>
            </>
          }
          description="This practice is openly in formation. Early clients join as founding partners — and shape what this becomes."
        />

        <Reveal delay={120}>
          <div className="mt-16 pb-4 ">
            <p
              className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[clamp(5rem,18vw,12rem)] font-light whitespace-nowrap text-gold/[0.04] select-none"
              aria-hidden
            >
              GROWTH
            </p>
            <div className="relative flex flex-col gap-12 md:grid md:grid-cols-3 md:gap-0 ">
              <div className="  pointer-events-none absolute top-[2.35rem] right-0 left-0 hidden h-px bg-gradient-to-r from-gold/10 via-gold/40 to-gold/10 md:block" />
              {roadmapMonths.map((month, i) => (
                <article key={month.title} className="flex-1 px-3 md:px-4">
                  <div
                    className={`mx-auto mb-5 h-2.5 w-2.5 rounded-full border-2 md:block  ${
                      i < 2
                        ? "border-gold bg-gold shadow-[0_0_12px_rgba(194,148,58,0.45)]"
                        : "border-gold/30 bg-ash"
                    }`}
                  />
                  <p className="text-center text-[0.65rem] tracking-[0.16em] text-gold uppercase">
                    {month.label}
                  </p>
                  <h3 className="mt-3 text-center font-serif text-lg text-white">
                    {month.title}
                  </h3>
                  <ul className="mt-4 space-y-1.5">
                    {month.tasks.map((task) => (
                      <li
                        key={task}
                        className="text-center text-[14px] leading-snug text-[#aaa]"
                      >
                        {task}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
