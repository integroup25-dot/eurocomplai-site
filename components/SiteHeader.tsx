"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logomark from "./Logomark";
import ArrowIcon from "./ArrowIcon";

const SOLUZIONI = [
  { href: "/soluzioni/sanita/", label: "Sanità" },
  { href: "/soluzioni/studi-legali/", label: "Studi legali" },
  { href: "/soluzioni/pa/", label: "PA" },
  { href: "/soluzioni/aziende-private/", label: "Aziende private" },
];

function normalize(path: string): string {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export default function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const rawPath = usePathname() ?? "/";
  const pathname = normalize(rawPath);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) {
        setHidden(false);
      } else if (y > lastY.current + 5) {
        setHidden(true);
      } else if (y < lastY.current - 5) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    const target = normalize(href);
    if (target === "/") return pathname === "/";
    return pathname === target || pathname.startsWith(target + "/");
  };
  const soluzioniActive = pathname.startsWith("/soluzioni");

  return (
    <header className={`site-header ${hidden ? "is-hidden" : ""} ${menuOpen ? "menu-is-open" : ""}`}>
      <div className="site-header-inner">
        <div className="site-header-brand">
          <Logomark />
          <div className="header-payoff" aria-label="GRC: GDPR, NIS2, AI Act e altre normative europee">
            <span className="grc-label">GRC</span>
            <span className="payoff-chip gdpr">GDPR</span>
            <span className="payoff-chip nis2">NIS2</span>
            <span className="payoff-chip aiact">AI Act</span>
            <span className="payoff-plus">
              +<span aria-hidden="true">🇪🇺</span>
            </span>
          </div>
        </div>

        <nav className="site-nav" aria-label="Navigazione principale">
          <ul className="nav-links">
            <li className={isActive("/come-funziona/") ? "active" : ""}>
              <Link href="/come-funziona/">Come funziona</Link>
            </li>
            <li className={`has-submenu ${soluzioniActive ? "active" : ""}`}>
              <Link href="/soluzioni/sanita/" aria-haspopup="true">
                Soluzioni
              </Link>
              <div className="submenu" role="menu">
                {SOLUZIONI.map((s) => (
                  <Link key={s.href} href={s.href} role="menuitem">
                    {s.label}
                  </Link>
                ))}
              </div>
            </li>
            <li className={isActive("/pricing/") ? "active" : ""}>
              <Link href="/pricing/">Pricing</Link>
            </li>
            <li className={isActive("/chi-siamo/") ? "active" : ""}>
              <Link href="/chi-siamo/">Chi siamo</Link>
            </li>
          </ul>
          <Link href="/demo/" className="btn btn-primary">
            Prenota la demo
            <ArrowIcon />
          </Link>
        </nav>

        <button
          className={`burger ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <ul className="mobile-nav-links">
          <li className={isActive("/come-funziona/") ? "active" : ""}>
            <Link href="/come-funziona/">Come funziona</Link>
          </li>
          <li className={soluzioniActive ? "active" : ""}>
            <span className="mobile-section-label">Soluzioni</span>
            <ul className="mobile-submenu">
              {SOLUZIONI.map((s) => (
                <li key={s.href} className={isActive(s.href) ? "active" : ""}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className={isActive("/pricing/") ? "active" : ""}>
            <Link href="/pricing/">Pricing</Link>
          </li>
          <li className={isActive("/chi-siamo/") ? "active" : ""}>
            <Link href="/chi-siamo/">Chi siamo</Link>
          </li>
        </ul>
        <Link href="/demo/" className="btn btn-primary mobile-cta">
          Prenota la demo
          <ArrowIcon />
        </Link>
      </div>
    </header>
  );
}
