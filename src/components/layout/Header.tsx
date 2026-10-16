"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, TreePine, ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { navigation } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner shell">
        <Link className="brand" href="#top" aria-label="Тихо в лесу — на главную" onClick={closeMenu}>
          <span className="brand-mark"><TreePine size={22} strokeWidth={1.65} aria-hidden="true" /></span>
          <span className="brand-wordmark">тихо <i>в лесу</i></span>
        </Link>
        <nav id="mobile-navigation" className={`main-nav${open ? " main-nav-open" : ""}`} aria-label="Основная навигация">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="nav-mobile-route" href={BRAND.yandex} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Построить маршрут <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
        <a className="header-route" href={BRAND.yandex} target="_blank" rel="noreferrer">
          Как добраться <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}
