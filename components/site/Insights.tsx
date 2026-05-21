import { insights } from "@/lib/content";
import { Eyebrow } from "./Section";
import { Reveal } from "./Reveal";

export function Insights() {
  const [featured, ...rest] = insights;

  return (
    <section
      id="insights"
      className="border-t border-gold/10 bg-parchment py-24 text-ink md:py-32"
    >
      <div className="container-wide">
        <Reveal>
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow className="text-clay">Thinking</Eyebrow>
              <h2 className="heading mt-4 text-ink">
                From the <em>practitioner&apos;s desk.</em>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="group flex h-full min-h-[280px] flex-col justify-between border border-gold/25 bg-white/60 p-8 transition-shadow hover:shadow-[0_20px_60px_rgba(14,12,10,0.08)] lg:row-span-2 lg:min-h-full lg:p-10">
              <div>
                <span className="text-[0.65rem] tracking-[0.14em] text-gold uppercase">
                  {featured.tag}
                </span>
                <h3 className="mt-5 font-serif text-2xl leading-snug text-ink md:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-smoke md:text-base">
                  {featured.preview}
                </p>
              </div>
              <p className="mt-8 text-[0.7rem] tracking-[0.12em] text-mist uppercase">
                {featured.meta}
              </p>
            </article>
          </Reveal>

          <div className="flex flex-col gap-6">
            {rest.map((item, i) => (
              <Reveal key={item.title} delay={(i + 1) * 80}>
                <article className="group flex flex-1 flex-col border border-gold/20 bg-white/40 p-7 transition-all hover:border-gold/35 hover:bg-white/70">
                  <span className="text-[0.65rem] tracking-[0.14em] text-gold uppercase">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 font-serif text-xl text-ink group-hover:text-clay">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-smoke">
                    {item.preview}
                  </p>
                  <p className="mt-4 text-[0.68rem] tracking-[0.1em] text-mist uppercase">
                    {item.meta}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
