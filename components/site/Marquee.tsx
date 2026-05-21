const items = [
  "People & Culture",
  "Organisational Design",
  "Lagos, Nigeria",
  "Leadership Development",
  "Human Architecture",
  "Independent Practice",
];

export function Marquee() {
  const renderRow = (prefix: string) =>
    items.map((item, idx) => (
      <span key={`${prefix}-${item}-${idx}`} className="flex shrink-0 items-center gap-8 px-8">
        <span className="font-serif text-lg tracking-wide text-parchment/90 md:text-xl">
          {item}
        </span>
        <span className="text-gold">◆</span>
      </span>
    ));

  return (
    <div
      className="overflow-hidden border-y border-gold/15 bg-ash py-4 relative mask-fade"
      aria-hidden
    >
      <div className="marquee-track hover:[animation-play-state:paused]">
        {renderRow("a")}
        {renderRow("b")}
      </div>
    </div>
  );
}

