import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  children
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={`section-heading${light ? " section-heading-light" : ""}`}>
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
      {children}
    </div>
  );
}
