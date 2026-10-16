import { ArrowUpRight, Quote, Star } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { reviews } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Reviews() {
  return (
    <section className="section reviews-section" id="reviews">
      <div className="shell">
        <Reveal>
          <div className="reviews-heading-row">
            <SectionHeading eyebrow="Говорят гости" title={<>Хорошее место<br /><em>замечают.</em></>} description="Короткие фразы из отзывов гостей. Полные тексты и актуальные оценки — в Яндекс Картах." />
            <a className="button button-outline" href={BRAND.yandexReviews} target="_blank" rel="noreferrer">Читать отзывы <ArrowUpRight size={16} /></a>
          </div>
        </Reveal>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <Reveal key={review.author} delay={index * 0.07}>
              <article className="review-card">
                <div className="review-top"><Quote size={23} strokeWidth={1.5} /><span className="review-source"><Star size={13} fill="currentColor" /> {review.source}</span></div>
                <blockquote>«{review.quote}»</blockquote>
                <div className="review-bottom"><span>{review.author}</span><a href={BRAND.yandexReviews} target="_blank" rel="noreferrer" aria-label={`Читать отзывы на Яндекс Картах, цитата ${review.author}`}><ArrowUpRight size={17} /></a></div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="review-disclaimer">Цитаты приведены в сокращённом виде. Источник: публичная карточка кофейни в Яндекс Картах.</p>
      </div>
    </section>
  );
}
