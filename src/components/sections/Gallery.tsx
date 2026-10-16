import { ArrowUpRight, Expand } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { galleryItems } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="shell">
        <Reveal>
          <div className="gallery-heading-row">
            <SectionHeading eyebrow="Смотреть по сторонам" title={<>Лес — в деталях.<br /><em>Уют — в ощущениях.</em></>} description="Природные мотивы, тёплое дерево и детали, которые складываются в собственный тихий мир." />
            <a className="text-link" href={BRAND.twoGisGallery} target="_blank" rel="noreferrer">Все фото в 2ГИС <ArrowUpRight size={16} /></a>
          </div>
        </Reveal>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <Reveal key={item.src} delay={index * 0.06} className={`gallery-item ${item.className}`}>
              <a href={BRAND.twoGisGallery} target="_blank" rel="noreferrer" className="gallery-image-link" aria-label={`${item.label}. Открыть фотографии в 2ГИС`}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span className="gallery-expand"><Expand size={16} aria-hidden="true" /></span>
                <span className="gallery-label">{item.label}</span>
              </a>
            </Reveal>
          ))}
        </div>
        <p className="gallery-credit">Фото кофейни из публичной карточки Яндекс Карт. Ещё фотографии — в галерее 2ГИС.</p>
      </div>
    </section>
  );
}
