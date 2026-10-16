import Link from "next/link";

export default function NotFound() {
  return (
    <main className="error-screen">
      <span className="eyebrow">404 · Заблудились в лесу?</span>
      <h1>Такой страницы<br /><em>не нашлось.</em></h1>
      <p>Вернитесь на главную — и продолжим путь.</p>
      <Link className="button button-primary" href="/">На главную</Link>
    </main>
  );
}
