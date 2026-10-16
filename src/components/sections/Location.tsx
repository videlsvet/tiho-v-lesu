import { ArrowUpRight, Clock3, MapPin, Navigation, Phone, PawPrint } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Location() {
  return (
    <section className="section location-section" id="location">
      <div className="shell">
        <Reveal>
          <SectionHeading eyebrow="Мы рядом" title={<>Найдите своё<br /><em>тихое место.</em></>} description="Заглядывайте по пути или запланируйте отдельную кофейную паузу." />
        </Reveal>
        <div className="location-grid">
          <Reveal className="location-map-wrap">
            <div className="location-map">
              <iframe
                title="Карта района кофейни «Тихо в лесу»"
                src="https://yandex.ru/map-widget/v1/?ll=82.938782%2C55.013033&z=16"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a className="map-open-link" href={BRAND.yandex} target="_blank" rel="noreferrer">Открыть карту <ArrowUpRight size={15} /></a>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="location-card">
              <span className="location-label">Адрес</span>
              <h3>Зыряновская,<br />55</h3>
              <p className="location-city">Новосибирск · вход со стороны улицы Восход</p>
              <div className="location-facts">
                <div><span className="fact-icon"><MapPin size={17} /></span><span>Метро «Речной вокзал»<small>Около 300 м по карточке Яндекс Карт</small></span></div>
                <div><span className="fact-icon"><Phone size={17} /></span><span>Связаться с кофейней<a href={BRAND.phoneHref}>{BRAND.phone}</a></span></div>
                <div><span className="fact-icon"><Clock3 size={17} /></span><span>Время работы<small>Проверьте актуальное расписание в картах</small></span></div>
                <div><span className="fact-icon"><PawPrint size={17} /></span><span>Можно с питомцем<small>Указано в карточке Яндекс Карт</small></span></div>
              </div>
              <div className="location-actions">
                <a className="button button-primary button-full" href={BRAND.yandex} target="_blank" rel="noreferrer"><Navigation size={17} /> Построить маршрут</a>
                <a className="button button-outline button-full" href={BRAND.twoGis} target="_blank" rel="noreferrer">Открыть в 2ГИС <ArrowUpRight size={16} /></a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
