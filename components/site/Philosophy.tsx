import { Reveal } from "./Reveal";

export function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 md:py-40">
      <p
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-serif text-[clamp(4rem,14vw,11rem)] leading-none font-light text-gold/[0.04] select-none"
        aria-hidden
      >
        BELIEF
      </p>
      <Reveal>
        <blockquote className="container-narrow relative text-center">
          <p className="font-serif text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.45] font-light text-parchment">
            &ldquo;You do not need a perfect CV to do meaningful people work. You
            need curiosity that will not quit, the courage to stay in difficult
            conversations, and the discipline to build — even when no one is
            watching yet.&rdquo;
          </p>
          <footer className="mt-10 eyebrow justify-center text-mist before:bg-mist/50">
            The founding belief of Invictus
          </footer>
        </blockquote>
      </Reveal>
    </section>
  );
}
