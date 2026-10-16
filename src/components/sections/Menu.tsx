import { ArrowUpRight, Bean, Coffee, CupSoda, Leaf } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { menuItems } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const menuIcons = { coffee: Coffee, citrus: CupSoda, bean: Bean, tea: Leaf } as const;

export function Menu() {
  return (
    <section className="section menu-section" id="menu">
      <div className="shell">
        <Reveal>
          <div className="menu-heading-row">
            <SectionHeading eyebrow="В меню — настроение" title={<>Есть повод<br /><em>заглянуть.</em></>} description="Начните с любимой классики или попробуйте сочетание, которого ещё не было в вашем кофейном маршруте." />
            <a className="button button-outline" href={BRAND.yandexMenu} target="_blank" rel="noreferrer">Меню в Яндекс Картах <ArrowUpRight size={16} /></a>
          </div>
        </Reveal>
        <div className="menu-grid">
          {menuItems.map((item, index) => {
            const Icon = menuIcons[item.icon];
            return (
              <Reveal key={item.name} delay={index * 0.05}>
                <article className={`menu-card menu-card-${index + 1}`}>
                  <div className="menu-art" aria-hidden="true">
                    <span className="menu-art-orbit" />
                    <span className="menu-art-ring" />
                    <Icon size={37} strokeWidth={1.15} />
                    <span className="menu-art-number">0{index + 1}</span>
                  </div>
                  <div className="menu-card-copy">
                    <span className="menu-category">{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <span className="menu-tag">{item.tag}</span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <p className="menu-disclaimer">Ассортимент и стоимость могут меняться. Актуальное меню уточняйте в карточке кофейни или на месте.</p>
      </div>
    </section>
  );
}
