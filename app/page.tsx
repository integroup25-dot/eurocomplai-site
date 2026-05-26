import type { Metadata } from "next";
import Link from "next/link";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowIcon from "@/components/ArrowIcon";
import SemaphoreDots from "@/components/SemaphoreDots";
import CubeIcon from "@/components/CubeIcon";

export const metadata: Metadata = {
  title: "EurocomplAI — Compliance integrata per GDPR, NIS2, AI Act",
  description:
    "Tre normative. Un sistema che estrae, intervista, genera. Tu validi, lui lavora. EurocomplAI è il software di compliance integrata europea, costruito da chi la compliance la fa.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <TopStrip />
      <main>
        {/* HEADER + HERO (band-grid) */}
        <section className="band-grid">
          <div className="container">
            <Header ctaHref="#cta" />

            <section className="hero" id="hero">
              <div className="hero-left">
                <div className="hero-eyebrow">Compliance integrata · sulla pratica</div>
                <h1>
                  <span className="line">Tre normative.</span>
                  <span className="line">
                    Un sistema che <span className="accent">estrae, intervista, genera</span>.
                  </span>
                  <span className="line">Tu validi, lui lavora.</span>
                </h1>
                <p className="hero-sub">
                  Estrazione dai documenti, audit condotti dagli agenti, bozze pronte per la
                  validazione. Tu decidi — il resto lo fa EurocomplAI.
                </p>
                <div className="hero-ctas">
                  <a href="#cta" className="btn btn-primary">
                    Richiedi una demo
                    <ArrowIcon />
                  </a>
                  <a href="#capacita" className="btn btn-ghost">
                    Esplora il prodotto
                  </a>
                </div>
              </div>

              {/* Inspector mockup */}
              <div className="hero-right">
                <div className="agent">
                  <div className="agent-topbar" />
                  <div className="agent-floating-pill">
                    evidence: <span className="num">07/12</span>
                  </div>
                  <div className="agent-header">
                    <SemaphoreDots />
                    <div className="ide-slug">
                      inspector <span className="em">·</span> session://eurocompl-001
                    </div>
                    <div className="agent-status-live">running</div>
                  </div>
                  <div className="agent-body-inspector">
                    <div className="bubble">
                      <div className="avatar agent-av">EA</div>
                      <div className="bubble-msg agent-msg">
                        Il sistema di refertazione tratta dati sanitari ex art. 9 GDPR.
                        Conferma la base giuridica?
                      </div>
                    </div>
                    <div className="bubble user-bubble">
                      <div className="avatar user-av">MR</div>
                      <div className="bubble-msg user-msg">
                        Sì, consenso esplicito del paziente + obbligo di legge (D.Lgs. 196).
                      </div>
                    </div>
                    <div className="bubble">
                      <div className="avatar agent-av">EA</div>
                      <div className="bubble-msg agent-msg">
                        Annotato. Procedo con la classificazione AI Act — sistema ad alto
                        rischio, allegato III.
                      </div>
                    </div>
                    <div className="evidence">
                      <div className="evidence-label">Evidenze cross-mapping</div>
                      <div className="evidence-chips">
                        <span className="chip gdpr">GDPR art. 9</span>
                        <span className="chip nis2">NIS2 §21</span>
                        <span className="chip aiact">AI Act all. III</span>
                      </div>
                    </div>
                  </div>
                  <div className="agent-statusbar">
                    <span>
                      traceability: <span className="ok">on</span> · latency: 214ms
                    </span>
                    <span className="amber">agents: 4/4 active</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* IL PROBLEMA (band-deep) */}
        <section className="band-deep">
          <div className="container narrow">
            <div className="section" id="problema">
              <div className="section-eyebrow">Il problema</div>
              <h2>
                I tool di compliance sono nati per{" "}
                <span className="accent">registrare il lavoro</span>. Non per ridurlo.
              </h2>
              <div className="section-body">
                <p>
                  I GRC tradizionali chiedono di compilare: centinaia di campi, decine di
                  assessment, migliaia di ore di data entry per produrre documenti che spesso
                  non reggono.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* LE CAPACITÀ (band-grid) */}
        <section className="band-grid">
          <div className="container">
            <div className="section" id="capacita">
              <div className="section-eyebrow">Le capacità</div>
              <h2>
                Quattro capacità. <span className="accent">Una sola cascata.</span>
              </h2>
              <p className="section-sub">
                Non è un copilot incollato sopra un'interfaccia: i quattro agenti lavorano in
                cascata, ogni passaggio è tracciabile.
              </p>

              <div className="cards-grid">
                <div className="card">
                  <div className="card-glyph">
                    <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="20" y="20" width="60" height="90" rx="4" stroke="rgba(255,255,255,0.30)" strokeWidth="1.2" />
                      <line x1="32" y1="40" x2="68" y2="40" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
                      <line x1="32" y1="50" x2="68" y2="50" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
                      <line x1="32" y1="60" x2="60" y2="60" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
                      <line x1="32" y1="74" x2="68" y2="74" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
                      <line x1="32" y1="84" x2="64" y2="84" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
                      <path d="M90 65 L120 65" stroke="#FFB020" strokeWidth="1.4" strokeDasharray="3 3" />
                      <path d="M115 60 L122 65 L115 70" stroke="#FFB020" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="130" y="35" width="55" height="20" rx="3" fill="rgba(255,176,32,0.12)" stroke="#FFB020" strokeWidth="1" />
                      <rect x="130" y="60" width="55" height="20" rx="3" fill="rgba(255,176,32,0.08)" stroke="#FFB020" strokeWidth="1" />
                      <rect x="130" y="85" width="55" height="20" rx="3" fill="rgba(255,176,32,0.04)" stroke="rgba(255,176,32,0.5)" strokeWidth="1" strokeDasharray="2 2" />
                    </svg>
                  </div>
                  <div className="card-meta">
                    <span className="num">01</span>
                    <span className="sep">/</span>
                    <span>estrazione</span>
                  </div>
                  <h3>Estrazione documentale</h3>
                  <p>Legge contratti, policy e procedure. Estrae trattamenti, basi giuridiche, ruoli, sistemi AI.</p>
                </div>

                <div className="card">
                  <div className="card-glyph">
                    <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g stroke="rgba(255,255,255,0.25)" strokeWidth="1">
                        <rect x="30" y="25" width="140" height="80" rx="3" fill="none" />
                        <line x1="30" y1="45" x2="170" y2="45" />
                        <line x1="30" y1="65" x2="170" y2="65" />
                        <line x1="30" y1="85" x2="170" y2="85" />
                        <line x1="65" y1="25" x2="65" y2="105" />
                        <line x1="100" y1="25" x2="100" y2="105" />
                        <line x1="135" y1="25" x2="135" y2="105" />
                      </g>
                      <rect x="31" y="46" width="34" height="19" fill="rgba(255,176,32,0.32)" />
                      <rect x="66" y="46" width="34" height="19" fill="rgba(255,176,32,0.22)" />
                      <rect x="101" y="46" width="34" height="19" fill="rgba(255,176,32,0.10)" />
                      <rect x="31" y="66" width="34" height="19" fill="rgba(255,176,32,0.18)" />
                      <rect x="66" y="66" width="34" height="19" fill="rgba(255,176,32,0.08)" />
                      <rect x="101" y="86" width="34" height="19" fill="rgba(255,176,32,0.05)" stroke="rgba(255,176,32,0.3)" strokeDasharray="2 2" />
                      <rect x="136" y="86" width="34" height="19" fill="rgba(255,176,32,0.05)" stroke="rgba(255,176,32,0.3)" strokeDasharray="2 2" />
                    </svg>
                  </div>
                  <div className="card-meta">
                    <span className="num">02</span>
                    <span className="sep">/</span>
                    <span>pre-popolamento</span>
                  </div>
                  <h3>Pre-popolamento registri</h3>
                  <p>Carichi gli export. EurocomplAI popola trattamenti, inventario AI Act, asset NIS2 con dati reali.</p>
                </div>

                <div className="card signature">
                  <div className="card-glyph">
                    <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="75" cy="65" r="42" stroke="rgba(255,176,32,0.30)" strokeWidth="1" fill="none" />
                      <circle cx="75" cy="65" r="28" stroke="rgba(255,176,32,0.50)" strokeWidth="1" fill="none" />
                      <circle cx="75" cy="65" r="14" stroke="#FFB020" strokeWidth="1.3" fill="rgba(255,176,32,0.10)" />
                      <circle cx="75" cy="65" r="4" fill="#FFB020" />
                      <path d="M115 65 L138 50" stroke="#FFB020" strokeWidth="1.2" strokeDasharray="3 2.5" />
                      <rect x="138" y="38" width="46" height="24" rx="4" fill="rgba(255,176,32,0.08)" stroke="rgba(255,176,32,0.40)" />
                      <line x1="145" y1="48" x2="175" y2="48" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                      <line x1="145" y1="54" x2="170" y2="54" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                      <path d="M115 75 L138 90" stroke="rgba(255,255,255,0.35)" strokeWidth="1.1" strokeDasharray="3 2.5" />
                      <rect x="138" y="80" width="46" height="20" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)" />
                    </svg>
                  </div>
                  <div className="card-meta">
                    <span className="num">03</span>
                    <span className="sep">/</span>
                    <span>inspector</span>
                    <span className="badge">SIGNATURE</span>
                  </div>
                  <h3>Inspector — audit agentico</h3>
                  <p>Conduce l'intervista al key personnel. Adatta le domande, raccoglie evidenze, restituisce un report strutturato.</p>
                </div>

                <div className="card">
                  <div className="card-glyph">
                    <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="58" y="32" width="70" height="86" rx="4" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.18)" />
                      <rect x="68" y="22" width="70" height="86" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)" />
                      <rect x="78" y="12" width="70" height="96" rx="4" fill="rgba(7,10,18,0.95)" stroke="rgba(255,176,32,0.50)" />
                      <rect x="86" y="22" width="54" height="8" rx="2" fill="rgba(255,176,32,0.50)" />
                      <line x1="86" y1="42" x2="140" y2="42" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                      <line x1="86" y1="50" x2="135" y2="50" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
                      <line x1="86" y1="58" x2="140" y2="58" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
                      <line x1="86" y1="66" x2="130" y2="66" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
                      <line x1="86" y1="74" x2="138" y2="74" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
                      <line x1="86" y1="82" x2="125" y2="82" stroke="rgba(255,255,255,0.20)" strokeWidth="1" />
                      <circle cx="133" cy="98" r="6" stroke="#34D399" strokeWidth="1.2" fill="rgba(52,211,153,0.20)" />
                      <path d="M130 98 L132.5 100.5 L137 96" stroke="#34D399" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="card-meta">
                    <span className="num">04</span>
                    <span className="sep">/</span>
                    <span>generazione</span>
                  </div>
                  <h3>Generazione bozze</h3>
                  <p>DPIA, FRIA, gap analysis, classificazioni AI Act — bozze motivate e ancorate alle evidenze.</p>
                </div>
              </div>

              <div className="cascade-spacer" />

              {/* Terminal cascade */}
              <div className="cascade">
                <div className="agent">
                  <div className="agent-topbar" />
                  <div className="agent-header">
                    <SemaphoreDots />
                    <div className="ide-slug">
                      architecture <span className="em">·</span> pipeline.v1
                    </div>
                    <div className="agent-status-live">live</div>
                  </div>
                  <div className="cascade-body">
                    <div className="cascade-spine" aria-hidden="true" />

                    {[
                      { label: "agent.extract", num: "01", source: "documenti caricati", status: "traced" },
                      { label: "agent.populate", num: "02", source: "registri + anagrafiche", status: "traced" },
                      { label: "agent.inspector", num: "03", source: "interviste + probe", status: "running" },
                      { label: "agent.generate", num: "04", source: "tutte le precedenti", status: "queued" },
                    ].map((node) => (
                      <div className="cascade-node" key={node.num}>
                        <div className="avatar agent-av">
                          <CubeIcon />
                        </div>
                        <div className="cascade-text">
                          <div className="cascade-label">
                            {node.label} <span className="dim">// {node.num}</span>
                          </div>
                          <div className="cascade-source">source: {node.source}</div>
                        </div>
                        <div
                          className={`cascade-status ${node.status === "running" ? "running" : "traced"}`}
                        >
                          {node.status}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="agent-statusbar">
                    <span>
                      traceability: <span className="ok">end-to-end</span>
                    </span>
                    <span className="amber">agents: 4/4 active</span>
                  </div>
                </div>

                <p className="cascade-closer">
                  L'AI non è un'aggiunta. È il modo in cui questo software è costruito.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLIANCE INTEGRATA (band-grid, no transition) */}
        <section className="band-grid">
          <div className="container">
            <div className="section" id="compliance">
              <div className="compliance-grid">
                <div>
                  <div className="section-eyebrow">Compliance integrata</div>
                  <h2>
                    Tre normative, un sistema. <span className="accent">Per davvero.</span>
                  </h2>
                  <div className="section-body">
                    <p>
                      GDPR, NIS2 e AI Act non sono moduli separati: si sovrappongono ogni
                      giorno. Un solo asset register, valutazioni integrate, cross-mapping
                      automatico. Pronto per DGA, EHDS, CRA, Data Act.
                    </p>
                  </div>
                </div>

                <div className="cm-panel">
                  <div className="agent-topbar" />
                  <div className="agent-header">
                    <SemaphoreDots />
                    <div className="ide-slug">
                      cross-mapping <span className="em">·</span> asset register
                    </div>
                    <div className="agent-status-live">live</div>
                  </div>
                  <div className="cm-legend">
                    <span className="legend-item leg-gdpr">GDPR</span>
                    <span className="legend-item leg-nis2">NIS2</span>
                    <span className="legend-item leg-aiact">AI Act</span>
                  </div>
                  <div className="cm-body">
                    <div className="cm-row">
                      <div className="cm-row-title">Sistema AI di refertazione</div>
                      <div className="cm-row-chips">
                        <span className="chip gdpr">GDPR art. 9</span>
                        <span className="chip nis2">NIS2 §21</span>
                        <span className="chip aiact">AI Act all. III</span>
                      </div>
                    </div>
                    <div className="cm-row">
                      <div className="cm-row-title">Sorveglianza umana</div>
                      <div className="cm-row-chips">
                        <span className="chip gdpr">GDPR art. 22</span>
                        <span className="chip aiact">AI Act art. 14</span>
                      </div>
                    </div>
                    <div className="cm-row">
                      <div className="cm-row-title">Misure di sicurezza tecniche</div>
                      <div className="cm-row-chips">
                        <span className="chip gdpr">GDPR art. 32</span>
                        <span className="chip nis2">NIS2 art. 21</span>
                      </div>
                    </div>
                  </div>
                  <div className="cm-statusbar">
                    <span>3 asset · 7 obblighi · 2 overlap</span>
                    <span className="ok">+ pronto per: DGA · EHDS · CRA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* MANIFESTO (band-deep, centered) */}
        <section className="band-deep">
          <div className="container tight">
            <div className="section centered" id="manifesto">
              <div className="section-eyebrow">Perché esistiamo</div>
              <h2>
                <span className="line">Costruito da chi la compliance la fa.</span>
                <span className="line accent">
                  Per chi la deve presidiare ogni giorno.
                </span>
              </h2>
              <div className="manifesto-body">
                <p>
                  I tool delle software house li conosciamo da utilizzatori: costruiti
                  tecnicamente bene, ma da persone che la DPIA non l'hanno mai dovuta
                  difendere davanti al Garante, l'incidente non l'hanno mai dovuto notificare
                  entro le 72 ore.
                </p>
                <p>
                  Per questo EurocomplAI è costruito <strong>aperto</strong>: con metodologie
                  pronte all'uso per partire subito, e con la possibilità di caricare i vostri
                  playbook quando un metodo lo avete già.
                </p>
              </div>
              <div className="manifesto-seal" aria-hidden="true" />
            </div>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* PER CHI È PENSATO (band-grid) */}
        <section className="band-grid">
          <div className="container">
            <div className="section" id="per-chi">
              <div className="section-eyebrow">Per chi è pensato</div>
              <h2>
                Per chi la compliance <span className="accent">la mette in pratica.</span>
              </h2>

              <div className="target-row">
                <div className="target-col">
                  <svg className="target-glyph" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M1.5 8 C 4 4, 12 4, 14.5 8 C 12 12, 4 12, 1.5 8 Z" />
                    <circle className="active-fill" cx="8" cy="8" r="1.7" />
                  </svg>
                  <div className="target-eyebrow">DPO &amp; Compliance</div>
                  <h3>Smettono di trascrivere, tornano a presidiare.</h3>
                </div>
                <div className="target-col">
                  <svg className="target-glyph" viewBox="0 0 16 16" aria-hidden="true">
                    <rect x="2" y="4.5" width="9" height="9" rx="1" />
                    <rect className="active" x="5" y="2.5" width="9" height="9" rx="1" />
                  </svg>
                  <div className="target-eyebrow">Studi legali</div>
                  <h3>Industrializzano i mandati ricorrenti senza perdere qualità.</h3>
                </div>
                <div className="target-col">
                  <svg className="target-glyph" viewBox="0 0 16 16" aria-hidden="true">
                    <circle cx="8" cy="8" r="6.4" />
                    <circle cx="8" cy="8" r="3.4" />
                    <circle className="active-fill" cx="8" cy="8" r="1.3" />
                  </svg>
                  <div className="target-eyebrow">Sanità &amp; PA</div>
                  <h3>
                    Inspector audita dove il consulente non può essere fisicamente.
                  </h3>
                </div>
                <div className="target-col">
                  <svg className="target-glyph" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M13.5 2.5 V 13.5" />
                    <path
                      className="active"
                      d="M2 8 H 11 M8.5 5.5 L 11 8 L 8.5 10.5"
                    />
                  </svg>
                  <div className="target-eyebrow">Aziende private</div>
                  <h3>
                    Compliance come requisito di accesso al mercato, non costo da subire.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* CTA FINALE (band-deep amplified) */}
        <section className="band-deep amplified">
          <div className="container tight">
            <div className="section cta-final" id="cta">
              <div className="cta-final-inner">
                <div className="section-eyebrow">In action · Early access</div>
                <h2>
                  Vuoi vedere EurocomplAI <span className="accent">sul vostro caso</span>?
                </h2>
                <p className="section-sub">
                  Una demo di 30 minuti, condotta da chi fa consulenza GDPR, NIS2 e AI Act
                  tutti i giorni — non un commerciale.
                </p>
                <div className="hero-ctas">
                  <Link href="/demo/" className="btn btn-primary">
                    Prenota la demo
                    <ArrowIcon />
                  </Link>
                  <Link href="/demo/#scrivici" className="btn btn-ghost">
                    Scrivici una domanda specifica
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
