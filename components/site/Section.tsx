import { Reveal } from "./Reveal";

export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "dark",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
}) {
  const alignClass = align === "center" ? "text-center items-center" : "";
  const titleColor = theme === "light" ? "text-ink" : "text-white";
  const descColor = theme === "light" ? "text-smoke" : "text-mist";

  return (
    <Reveal>
      <header className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}>
        <Eyebrow className={theme === "light" ? "text-clay" : ""}>{eyebrow}</Eyebrow>
        <h2 className={`heading ${titleColor}`}>{title}</h2>
        {description && (
          <p className={`text-[0.98rem] leading-[1.85] ${descColor}`}>{description}</p>
        )}
      </header>
    </Reveal>
  );
}
