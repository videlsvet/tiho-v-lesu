import type { Metadata, Viewport } from "next";
import { BRAND } from "@/lib/constants";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const siteImage = "https://avatars.mds.yandex.net/get-altay/14296532/2a0000019b2b5792eab1c26868ffdf9ee848/XXL_height";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: "Тихо в лесу — кофейня авторских напитков в Новосибирске",
  description: "Авторский кофе, необычные сочетания и атмосфера лесного уюта. Найдите кофейню «Тихо в лесу» на Зыряновской, 55 в Новосибирске.",
  applicationName: BRAND.name,
  alternates: { canonical: siteUrl || undefined },
  openGraph: {
    title: "Тихо в лесу — кофейня авторских напитков",
    description: "Маленькая пауза среди большого города. Авторский кофе и природный уют на Зыряновской, 55.",
    type: "website",
    locale: "ru_RU",
    siteName: BRAND.name,
    images: [{ url: siteImage, alt: "Интерьер кофейни Тихо в лесу" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Тихо в лесу — кофейня авторских напитков",
    description: "Авторский кофе, необычные сочетания и атмосфера лесного уюта.",
    images: [siteImage]
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#F5F0E6",
  colorScheme: "light"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: BRAND.name,
    telephone: BRAND.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Зыряновская улица, 55",
      addressLocality: "Новосибирск",
      addressCountry: "RU"
    },
    sameAs: [BRAND.yandex, BRAND.twoGis]
  };

  return (
    <html lang="ru">
      <body>
        <a className="skip-link" href="#main-content">Перейти к содержимому</a>
        {children}
        <script id="local-business-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
