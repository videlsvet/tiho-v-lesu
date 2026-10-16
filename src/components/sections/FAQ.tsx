"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="shell faq-grid">
        <Reveal>
          <SectionHeading eyebrow="Перед визитом" title={<>Пара простых<br /><em>ответов.</em></>} description="Если важны точные цены или часы работы, проверьте их в актуальной карточке перед выходом." />
        </Reveal>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const expanded = activeIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <Reveal key={faq.question} delay={index * 0.03}>
                <div className={`faq-item${expanded ? " faq-item-open" : ""}`}>
                  <h3>
                    <button id={buttonId} type="button" aria-expanded={expanded} aria-controls={panelId} onClick={() => setActiveIndex(expanded ? null : index)}>
                      <span>{faq.question}</span><ChevronDown size={19} aria-hidden="true" />
                    </button>
                  </h3>
                  <div id={panelId} className="faq-answer" role="region" aria-labelledby={buttonId} hidden={!expanded}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
