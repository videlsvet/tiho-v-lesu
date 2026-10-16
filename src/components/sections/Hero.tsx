import { ArrowDown, ArrowUpRight, Leaf, Sprout } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <Reveal>
            <span className="eyebrow"><span className="eyebrow-dot" />Кофейня в Новосибирске</span>
            <h1>Тише, чем<br /><em>город вокруг.</em></h1>
            <p className="hero-lead">Авторский кофе, неожиданные сочетания и маленькое место, где можно выдохнуть.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={BRAND.yandex} target="_blank" rel="noreferrer">Построить маршрут <ArrowUpRight size={17} /></a>
              <a className="button button-text" href="#menu">Посмотреть меню <ArrowDown size={16} /></a>
            </div>
            <div className="hero-note"><span className="hero-note-icon"><Leaf size={16} /></span><span>Зыряновская, 55 <i>·</i> у метро «Речной вокзал»</span></div>
          </Reveal>
        </div>
        <Reveal delay={0.12} className="hero-visual-wrap">
          <div className="hero-visual">
            <img
              className="hero-image"
              src="https://avatars.mds.yandex.net/get-altay/14296532/2a0000019b2b5792eab1c26868ffdf9ee848/XXL_height"
              alt="Стойка кофейни «Тихо в лесу» с природной росписью на стене"
              fetchPriority="high"
            />
            <div className="image-caption"><Sprout size={14} /><span>Свой маленький лес</span><span className="caption-line" /></div>
            <div className="hero-stamp" aria-label="Отметка Хорошее место 2026 в Яндекс Картах">
              <span className="stamp-top">ХОРОШЕЕ МЕСТО</span>
              <span className="stamp-year">2026</span>
              <span className="stamp-bottom">ЯНДЕКС КАРТЫ</span>
            </div>
          </div>
          <div className="hero-side-note">Кофе, который<br />помогает замедлиться.</div>
        </Reveal>
      </div>
      <div className="hero-bottom shell"><span>01 / 09</span><span className="hero-bottom-line" /><span>Листайте в своём темпе</span></div>
    </section>
  );
}
