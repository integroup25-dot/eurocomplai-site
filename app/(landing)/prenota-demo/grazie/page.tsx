import type { Metadata } from "next";
import "../landing.css";
import LandingFooter from "../LandingFooter";

const TITLE = "Grazie — EurocomplAI";
const LINK = { color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: "3px" };

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: "Richiesta demo di EurocomplAI ricevuta.",
  alternates: { canonical: "/prenota-demo/grazie/" },
  // Pagina di arrivo dopo l'invio del modulo: non va nei risultati di ricerca.
  robots: { index: false, follow: false },
};

/**
 * Ringraziamento dopo la richiesta demo della landing /prenota-demo/.
 * Stessa grafica della landing (landing.css, tutto sotto .lp).
 */
export default function GraziePage() {
  return (
    <div className="lp">
      <header className="topbar">
        <a className="logomark lg" href="https://eurocomplai.com/" aria-label="EurocomplAI">
          <span className="bracket">[</span>eurocompl<span className="slash">/</span><span className="ai">ai</span><span className="bracket">]</span>
        </a>
        <div className="topbar-cta">
          <a className="tel" href="tel:+3902320626828">+39 02 320 626 828</a>
          <a className="btn btn-ghost btn-home" href="/">
            <svg className="back" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <svg className="casa" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 7.5L8 2.5l6 5M3.75 6.5v6.75h3v-3.5h2.5v3.5h3V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <span className="home-lungo">Torna alla home</span><span className="home-corto">Home</span>
          </a>
        </div>
      </header>

      <main className="hero">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <div className="hero-veil"></div>
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <p className="eyebrow" style={{ margin: "0 0 18px" }}>Richiesta ricevuta</p>
          <h1>Grazie, la tua richiesta di demo è <span className="accent">arrivata</span>.</h1>
          <p className="lede" style={{ marginTop: "22px" }}>
            Ti ricontatteremo a breve all&apos;indirizzo email che ci hai indicato per fissare la demo di EurocomplAI.
            Nel frattempo, se vuoi aggiungere qualcosa, scrivici a{" "}
            <a style={LINK} href="mailto:eurocomplai@integroup.eu">eurocomplai@integroup.eu</a> o chiamaci al{" "}
            <a style={LINK} href="tel:+3902320626828">+39 02 320 626 828</a>.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/come-funziona/">Scopri come funziona
              <svg className="arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </a>
            <a className="btn btn-ghost" href="/">Torna alla home</a>
          </div>
          <p className="micro">La demo dura 30 minuti ed è condotta da chi fa consulenza GDPR, NIS2 e AI Act ogni giorno.</p>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
