import { Coffee, Leaf, Sparkles, Trees } from "lucide-react";
import { benefits } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = { coffee: Coffee, trees: Trees, leaf: Leaf, sparkles: Sparkles } as const;

export function Benefits() {
  return (
    <section className="section benefits-section" id="about">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Немного тишины"
            title={<>Не просто кофе.<br /><em>Состояние.</em></>}
            description="У места есть свой характер: от необычных вкусов до деталей, которые хочется рассматривать."
          />
        </Reveal>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = icons[benefit.icon];
            return (
              <Reveal key={benefit.number} delay={index * 0.06}>
                <article className="benefit-card">
                  <div className="benefit-card-top"><span>{benefit.number}</span><span className="benefit-icon"><Icon size={22} strokeWidth={1.5} aria-hidden="true" /></span></div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
