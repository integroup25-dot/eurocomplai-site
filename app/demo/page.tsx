import type { Metadata } from "next";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SemaphoreDots from "@/components/SemaphoreDots";
import CalendlyInline from "@/components/CalendlyInline";
import TallyPlaceholder from "@/components/TallyPlaceholder";

export const metadata: Metadata = {
  title: "Richiedi una demo",
  description:
    "Una demo di 30 minuti con chi ha condotto mandati di compliance reali — non un account executive. Vi facciamo un'ipotesi concreta sul vostro caso.",
  alternates: { canonical: "/demo/" },
};

export default function DemoPage() {
  return (
    <>
      <TopStrip label="PAGE · DEMO & CONTATTI" />
      <main>
        {/* HEADER + HERO (band-grid) */}
        <section className="band-grid">
          <div className="container">
            <Header ctaHref="#book" ctaLabel="Prenota la demo" />

            <section className="page-hero" style={{ paddingBottom: "56px" }}>
              <div className="hero-eyebrow">Richiedi una demo</div>
              <h1 className="page-h1">
                Una demo di 30 minuti.{" "}
                <span className="accent">
                  Con chi fa il mestiere, non con un commerciale.
                </span>
              </h1>
              <p className="page-hero-sub">
                Vi parla chi ha condotto DPIA reali, gestito notifiche al Garante, classificato
                sistemi AI con il primario di radiologia. Mezz'ora per capire se EurocomplAI è
                quello che vi serve — sul vostro caso, non su una demo generica.
              </p>
            </section>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* COSA ASPETTARSI + CALENDLY (band-deep) */}
        <section className="band-deep">
          <div className="container">
            <div className="section" id="book">
              <div className="split-2col">
                {/* Cosa aspettarsi */}
                <div className="split-text">
                  <div className="section-eyebrow">Cosa aspettarsi</div>
                  <h2>
                    Trenta minuti, <span className="accent">un'ipotesi concreta</span>.
                  </h2>
                  <div className="body-block">
                    <p>
                      Niente pitch lungo. Niente slide aziendali. Mezz'ora di conversazione
                      tecnica con qualcuno che conosce il vostro settore e che alla fine vi
                      dice se EurocomplAI fa al caso vostro — anche se la risposta è no.
                    </p>
                  </div>

                  <div className="expect-list">
                    <div className="expect-item">
                      <div className="expect-num">01</div>
                      <div className="expect-text">
                        <h4>Il vostro caso, non una demo generica.</h4>
                        <p>
                          Iniziamo dai vostri scenari concreti — un mandato in corso, una
                          scadenza, un sistema AI da classificare — e vi mostriamo come
                          EurocomplAI lo affronterebbe.
                        </p>
                      </div>
                    </div>
                    <div className="expect-item">
                      <div className="expect-num">02</div>
                      <div className="expect-text">
                        <h4>Solution engineer, non sales.</h4>
                        <p>
                          Conduce la demo qualcuno che ha fatto compliance per mestiere.
                          Risponde a domande tecniche, non a domande di prezzo (per quelle c'è
                          la conversazione separata).
                        </p>
                      </div>
                    </div>
                    <div className="expect-item">
                      <div className="expect-num">03</div>
                      <div className="expect-text">
                        <h4>Un piano realistico, se ha senso.</h4>
                        <p>
                          Alla fine vi facciamo un'ipotesi: perimetro, sistemi, timeline
                          pilota. Se invece EurocomplAI non è la cosa giusta per voi, ve lo
                          diciamo.
                        </p>
                      </div>
                    </div>
                    <div className="expect-item">
                      <div className="expect-num">04</div>
                      <div className="expect-text">
                        <h4>Risposta entro 2 giorni lavorativi.</h4>
                        <p>
                          Vi ricontatta direttamente uno di noi per concordare la data — non un
                          calendario automatico, non un sales development representative.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Calendly inline embed */}
                <div className="split-mockup">
                  <div className="mock-panel" style={{ background: "var(--panel)", border: "1px solid var(--border-1)", borderRadius: "16px", overflow: "hidden" }}>
                    <div className="agent-topbar" />
                    <div className="mock-header">
                      <SemaphoreDots />
                      <div className="ide-slug">
                        booking <span className="em">·</span> calendly://integroup25/30min
                      </div>
                      <div className="agent-status-count">ready</div>
                    </div>
                    <CalendlyInline />
                    <div className="agent-statusbar">
                      <span>
                        scheduler: <span className="ok">calendly</span> · response: 2 business
                        days
                      </span>
                      <span className="amber">privacy: GDPR-compliant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* SCRIVICI + EARLY ACCESS (band-grid) */}
        <section className="band-grid">
          <div className="container">
            <div className="section" id="scrivici">
              <div className="section-eyebrow">Altri canali</div>
              <h2>
                Non vi serve un calendario? <span className="accent">Scriveteci.</span>
              </h2>
              <p className="section-sub">
                Per domande specifiche o per candidarvi al programma early access, due canali
                separati. Risposta entro 2 giorni lavorativi, sempre da noi.
              </p>

              <div className="contact-grid">
                <div id="scrivici-form">
                  <TallyPlaceholder variant="scrivici" />
                </div>
                <div id="early-access">
                  <TallyPlaceholder variant="earlyAccess" />
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
