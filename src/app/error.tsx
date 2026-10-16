"use client";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="error-screen">
      <span className="eyebrow">Что-то пошло не так</span>
      <h1>Небольшая пауза.</h1>
      <p>Не удалось загрузить страницу. Попробуйте ещё раз.</p>
      <button className="button button-primary" onClick={() => reset()}>Обновить страницу</button>
    </main>
  );
}
