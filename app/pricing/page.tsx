import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import ArrowIcon from "@/components/ArrowIcon";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pricing flessibile, costruito intorno al perimetro che vi serve davvero. Niente listino nascosto, niente moduli da combinare. Una conversazione di 30 minuti.",
  alternates: { canonical: "/pricing/" },
};

export default function PricingPage() {
  return (
    <>
      <main>
        {/* HEADER + HERO (band-grid) */}
        <section className="band-grid">
          <div className="container">

            <section className="page-hero">
              <div className="hero-eyebrow">Pricing</div>
              <h1 className="page-h1">
                Niente listino pubblico.{" "}
                <span className="accent">Una conversazione di 30 minuti.</span>
              </h1>
              <p className="page-hero-sub">
                In early access lavoriamo con un modello commerciale flessibile, calibrato sul
                perimetro di copertura e sul numero di sistemi gestiti. Il confronto rilevante
                non è il prezzo del software, ma il{" "}
                <strong style={{ color: "var(--ink)", fontWeight: 500 }}>
                  costo totale della compliance
                </strong>{" "}
                — incluse le ore consulenziali e di personale interno oggi necessarie.
              </p>

              <div className="hero-ctas" style={{ marginBottom: 0 }}>
                <Link href="/demo/" className="btn btn-primary">
                  Richiedi un preventivo
                  <ArrowIcon />
                </Link>
                <Link href="/come-funziona/" className="btn btn-ghost">
                  Esplora il prodotto
                </Link>
              </div>
            </section>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* COSA DETERMINA IL PREZZO (band-deep) */}
        <section className="band-deep">
          <div className="container">
            <div className="section" id="fattori">
              <div className="section-eyebrow">Cosa determina il prezzo</div>
              <h2>
                Tre variabili che lo determinano.{" "}
                <span className="accent">Sempre prevedibili.</span>
              </h2>

              <div className="insight-grid">
                <div className="insight-card">
                  <div className="insight-num">01</div>
                  <h3>Perimetro normativo.</h3>
                  <p>
                    Quanti regolamenti dovete presidiare — GDPR, NIS2, AI Act, eventualmente
                    MDR, FRIA per PA. Più ampio il perimetro, più ampia la copertura del
                    prodotto.
                  </p>
                </div>
                <div className="insight-card">
                  <div className="insight-num">02</div>
                  <h3>Numero di sistemi gestiti.</h3>
                  <p>
                    Sistemi AI da classificare, fornitori critici, processi sotto audit, asset
                    register da popolare. Scala con la complessità della vostra organizzazione,
                    non con il numero di utenti.
                  </p>
                </div>
                <div className="insight-card">
                  <div className="insight-num">03</div>
                  <h3>Supporto e metodologie.</h3>
                  <p>
                    Onboarding, formazione, caricamento dei playbook proprietari, supporto
                    operativo continuativo. Il software è uno; il modo in cui lo accompagniamo
                    dipende da voi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINALE (band-deep amplified) */}
        <section className="band-deep amplified">
          <div className="container tight">
            <div className="section cta-final" id="cta">
              <div className="cta-final-inner">
                <div className="section-eyebrow">In action · Preventivo</div>
                <h2>
                  Una conversazione di 30 minuti chiarisce{" "}
                  <span className="accent">il quadro per il vostro caso</span>.
                </h2>
                <p className="section-sub">
                  La conduce qualcuno che ha gestito mandati di compliance reali — non un
                  account executive. Vi facciamo un'ipotesi commerciale concreta, con
                  perimetro, sistemi e modello di supporto definiti.
                </p>
                <div className="hero-ctas">
                  <Link href="/demo/" className="btn btn-primary">
                    Richiedi un preventivo
                    <ArrowIcon />
                  </Link>
                  <Link href="/demo/" className="btn btn-ghost">
                    Prenota una demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
