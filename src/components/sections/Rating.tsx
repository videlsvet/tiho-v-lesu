import { ArrowUpRight, Award, MapPinned, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function Rating() {
  return (
    <section className="rating-section">
      <div className="shell rating-shell">
        <Reveal>
          <div className="rating-intro">
            <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" />Проверяйте первоисточник</span>
            <h2>Ваше впечатление —<br /><em>главный ориентир.</em></h2>
            <p>Актуальные оценки, новые отзывы и фотографии удобнее всего смотреть в картографических сервисах.</p>
          </div>
        </Reveal>
        <div className="rating-links">
          <Reveal delay={0.08}>
            <a className="rating-link-card" href={BRAND.yandex} target="_blank" rel="noreferrer">
              <span className="rating-card-icon"><Award size={22} /></span>
              <span className="rating-card-copy"><strong>Хорошее место · 2026</strong><small>Отметка в Яндекс Картах</small></span>
              <ArrowUpRight size={18} className="rating-arrow" />
            </a>
          </Reveal>
          <Reveal delay={0.14}>
            <a className="rating-link-card" href={BRAND.yandexReviews} target="_blank" rel="noreferrer">
              <span className="rating-card-icon"><MessageCircle size={22} /></span>
              <span className="rating-card-copy"><strong>Отзывы гостей</strong><small>Читать в Яндекс Картах</small></span>
              <ArrowUpRight size={18} className="rating-arrow" />
            </a>
          </Reveal>
          <Reveal delay={0.2}>
            <a className="rating-link-card" href={BRAND.twoGis} target="_blank" rel="noreferrer">
              <span className="rating-card-icon"><MapPinned size={22} /></span>
              <span className="rating-card-copy"><strong>Карточка в 2ГИС</strong><small>Оценки, фото и как добраться</small></span>
              <ArrowUpRight size={18} className="rating-arrow" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
