import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="shell">
        <Reveal>
          <div className="final-cta-card">
            <div className="final-cta-art" aria-hidden="true">
              <span className="cta-sun" />
              <span className="cta-ridge cta-ridge-one" />
              <span className="cta-ridge cta-ridge-two" />
              <span className="cta-tree cta-tree-one" />
              <span className="cta-tree cta-tree-two" />
            </div>
            <div className="final-cta-content">
              <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" />Ваше место для паузы</span>
              <h2>Загляните.<br /><em>Вам здесь рады.</em></h2>
              <p>Любимый напиток, спокойная атмосфера и немного времени для себя — на Зыряновской, 55.</p>
              <div className="final-cta-actions">
                <a className="button button-light" href={BRAND.yandex} target="_blank" rel="noreferrer">Построить маршрут <ArrowUpRight size={17} /></a>
                <a className="final-phone" href={BRAND.phoneHref}><Phone size={15} /> {BRAND.phone}</a>
              </div>
              <div className="final-address"><MapPin size={15} /> Новосибирск, Зыряновская улица, 55</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
