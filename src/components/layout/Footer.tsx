import { ArrowUpRight, TreePine } from "lucide-react";
import { BRAND } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-brand-block">
          <a className="brand brand-footer" href="#top">
            <span className="brand-mark"><TreePine size={22} strokeWidth={1.65} aria-hidden="true" /></span>
            <span className="brand-wordmark">тихо <i>в лесу</i></span>
          </a>
          <p>Маленькая пауза среди большого города.</p>
        </div>
        <div className="footer-column">
          <span className="footer-label">Приходите в гости</span>
          <a href={BRAND.yandex} target="_blank" rel="noreferrer">{BRAND.address}</a>
          <a href={BRAND.phoneHref}>{BRAND.phone}</a>
        </div>
        <div className="footer-column">
          <span className="footer-label">Мы на картах</span>
          <a href={BRAND.yandex} target="_blank" rel="noreferrer">Яндекс Карты <ArrowUpRight size={14} /></a>
          <a href={BRAND.twoGis} target="_blank" rel="noreferrer">2ГИС <ArrowUpRight size={14} /></a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} «Тихо в лесу»</span>
        <a href={BRAND.twoGisGallery} target="_blank" rel="noreferrer">Фотографии в 2ГИС <ArrowUpRight size={14} /></a>
        <a href="#top">Наверх ↑</a>
      </div>
    </footer>
  );
}
