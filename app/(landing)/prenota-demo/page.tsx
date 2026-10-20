/* eslint-disable @next/next/no-img-element -- loghi e certificazioni arrivano da integroup.eu, come nella landing statica; con l'export statico next/image non li ottimizzerebbe comunque */
import type { Metadata } from "next";
import "./landing.css";
import DemoRequestForm from "./DemoRequestForm";
import LandingFooter from "./LandingFooter";
import RevealOnScroll from "./RevealOnScroll";

const TITLE = "EurocomplAI — Automatizza GDPR, NIS2 e AI Act";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description:
    "EurocomplAI estrae evidenze dai documenti, conduce audit con gli agenti e prepara bozze pronte per la validazione. Prenota una demo di EurocomplAI.",
  alternates: { canonical: "/prenota-demo/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "EurocomplAI",
    url: "/prenota-demo/",
    title: TITLE,
    description:
      "Un GRC che estrae evidenze, conduce audit e prepara bozze. Tu decidi — il resto del lavoro operativo viene gestito dal sistema.",
    images: ["/og-image.png"],
  },
  twitter: { card: "summary_large_image" },
};

const ASSET = "https://integroup.eu";
const LOGOS = [
  {src:"/assets/clients-trim/naar.webp", alt:"NAAR Bespoke Travel", height:48},
  {src:"/assets/clients-trim/gksd.webp", alt:"Gruppo GKSD", height:52},
  {src:"/assets/clients-trim/quarenghi.webp", alt:"Istituto Clinico Quarenghi", height:64},
  {src:"/assets/clients-trim/duepuntozero.webp", alt:"Duepuntozero", height:52},
  {src:"/assets/clients-trim/sebia.webp", alt:"Sebia", height:40},
  {src:"/assets/clients-trim/reconsulting.webp", alt:"Reconsulting", height:52},
  {src:"/assets/clients-trim/zucchetti.webp", alt:"Zucchetti", height:64},
  {src:"/assets/clients-trim/castello.webp", alt:"Castello SGR", height:28},
  {src:"/assets/clients-trim/fnr.webp", alt:"FNR", height:40},
  {src:"/assets/clients-trim/bto.webp", alt:"bto Relatech Group", height:52},
  {src:"/assets/clients-trim/unisr.webp", alt:"Università Vita-Salute San Raffaele", height:52},
  {src:"/assets/clients-trim/manuli.webp", alt:"Manuli Rubber Industries", height:32},
  {src:"/assets/clients-trim/hsr.webp", alt:"IRCCS Ospedale San Raffaele", height:50},
  {src:"/assets/clients-trim/gsd.webp", alt:"Gruppo Ospedaliero San Donato", height:68},
  {src:"/assets/clients-trim/hsrr.webp", alt:"H San Raffaele Resnati", height:52},
  {src:"/assets/clients-trim/cclm.webp", alt:"Casa di Cura La Madonnina", height:52},
  {src:"/assets/clients-trim/asl-campobasso.webp", alt:"ASL 3 Centro Molise Campobasso", height:52},
  {src:"/assets/clients-trim/asl-lodi.webp", alt:"ASL Lodi", height:64},
  {src:"/assets/clients-trim/fcsr.webp", alt:"Fondazione Centro San Raffaele", height:68},
  {src:"/assets/clients-trim/gsd-foundation.webp", alt:"Gruppo Ospedaliero San Donato Foundation", height:68}
];

function LogoRow({ decorative = false }: { decorative?: boolean }) {
  return (
    <div className="logo-row" aria-hidden={decorative || undefined}>
      {LOGOS.map((l) => (
        <img key={l.src} src={ASSET + l.src} alt={decorative ? "" : l.alt} style={{ height: l.height }} />
      ))}
    </div>
  );
}

/**
 * Landing degli annunci Google Ads. Ha grafica e CSS suoi (landing.css, tutto
 * sotto .lp) e non usa header né globals.css del sito; banner cookie,
 * consenso e tag Google sono quelli del sito, dal layout radice.
 */
export default function PrenotaDemoPage() {
  return (
    <div className="lp">
      {/* Con JS attivo le sezioni partono nascoste e compaiono allo scroll:
          la classe va messa prima che il contenuto venga disegnato. */}
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      <RevealOnScroll />
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
          <a className="btn btn-primary" href="#prenota-demo"><span>Prenota<span className="cta-lungo"> una demo</span></span>
            <svg className="arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </a>
        </div>
      </header>

      <section className="hero" id="prenota-demo">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <div className="hero-veil"></div>
        <div className="wrap hero-grid">
          <div>
            <div className="hero-kicker">
              <p className="eyebrow" style={{ margin: "0" }}>Compliance integrata · GDPR · NIS2 · AI Act</p>
              <span className="ea-badge">Early access</span>
            </div>
            <h1>Automatizza GDPR, NIS2 e AI Act con un GRC che lavora al posto <span className="accent">tuo</span>.</h1>
            <p className="lede" style={{ marginTop: "22px" }}>EurocomplAI estrae evidenze dai documenti, conduce audit con gli agenti e prepara bozze pronte per la validazione. Tu decidi — il resto del lavoro operativo viene gestito dal sistema.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#modulo-hero">Prenota una demo di EurocomplAI
                <svg className="arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              </a>
              <a className="btn btn-ghost" href="#come-funziona">Come funziona</a>
            </div>
            <p className="micro">Demo di 30 minuti condotta da chi fa consulenza GDPR, NIS2 e AI Act ogni giorno — non da un commerciale.</p>
            <div className="flow-strip" aria-hidden="true">
              <span className="on">Extract</span>
              <span className="on">Populate</span>
              <span className="on">Inspect</span>
              <span className="on">Generate</span>
              <span>Validate</span>
            </div>
          </div>
          <div className="form-card" id="modulo-hero">
            <h3>Prenota una demo di EurocomplAI</h3>
            <p className="form-note">Raccontaci il caso. Ti mostriamo come il GRC affronta il flusso che oggi gestisci a mano.</p>
            <DemoRequestForm n={0} source="/prenota-demo/" context="Landing EurocomplAI · richiesta demo" />
          </div>
        </div>
      </section>

      <section className="sec-light light" id="trust">
        <div className="wrap" data-reveal="">
          <p className="eyebrow">Competenza verificabile</p>
          <h2>Costruito da chi usa la compliance sul <span className="accent">campo</span>.</h2>
          <p className="lede" style={{ marginTop: "18px" }}>EurocomplAI nasce dall’esperienza operativa di inteGroup.</p>
          <div className="marquee" aria-label="Clienti inteGroup">
            <div className="ig-marquee-track">
              <LogoRow />
              <LogoRow decorative />
            </div>
          </div>
          <div className="iso-row">
            <div className="iso">
              <img src="https://integroup.eu/assets/iso/iso9001.webp" alt="ISO 9001:2015" />
              <div className="iso-name">ISO 9001<br />Qualità</div>
              <div className="iso-cert">Certificata</div>
              <div className="iso-n">n. AMER200283</div>
            </div>
            <div className="iso">
              <img src="https://integroup.eu/assets/iso/iso27001.webp" alt="ISO/IEC 27001:2022" />
              <div className="iso-name">ISO 27001<br />Sicurezza</div>
              <div className="iso-cert">Certificata</div>
              <div className="iso-n">n. AMER200284</div>
            </div>
            <div className="iso">
              <img src="https://integroup.eu/assets/iso/iso27017.webp" alt="ISO/IEC 27017:2015" />
              <div className="iso-name">ISO 27017<br />Cloud</div>
              <div className="iso-cert">Certificata</div>
              <div className="iso-n">n. AMER200290</div>
            </div>
            <div className="iso">
              <img src="https://integroup.eu/assets/iso/iso27018.webp" alt="ISO/IEC 27018:2025" />
              <div className="iso-name">ISO 27018<br />Dati personali</div>
              <div className="iso-cert">Certificata</div>
              <div className="iso-n">n. AMER200291</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-deep" id="problema">
        <div className="wrap split">
          <div data-reveal="">
            <p className="eyebrow">Il problema</p>
            <h2>I tool di compliance sono nati per registrare il lavoro. Non per <span className="accent">ridurlo</span>.</h2>
            <p className="body" style={{ marginTop: "22px" }}>I GRC tradizionali chiedono di compilare campi, assessment e registri. Il risultato è molto lavoro di data entry prima ancora che inizi la parte che richiede davvero competenza professionale.</p>
            <div className="callout">Il punto non è aggiungere un altro copilot. È ridurre il lavoro operativo che precede la decisione.</div>
          </div>
          <div data-reveal="">
            <div className="agent" aria-hidden="true">
              <div className="agent-topbar"></div>
              <div className="agent-header">
                <div className="dots"><span className="dot r"></span><span className="dot a"></span><span className="dot g"></span></div>
                <div className="ide-slug">architecture <span className="em">·</span> pipeline.v1</div>
                <div className="agent-status-live">live</div>
              </div>
              <div className="cascade-body">
                <div className="cascade-spine"></div>
                <div className="cascade-node">
                  <div className="avatar ea">01</div>
                  <div><div className="cascade-label">agent.extract <span className="dim">// 01</span></div><div className="cascade-source">source: documenti caricati</div></div>
                  <div className="cascade-status traced">traced</div>
                </div>
                <div className="cascade-node">
                  <div className="avatar ea">02</div>
                  <div><div className="cascade-label">agent.populate <span className="dim">// 02</span></div><div className="cascade-source">source: registri + anagrafiche</div></div>
                  <div className="cascade-status traced">traced</div>
                </div>
                <div className="cascade-node">
                  <div className="avatar ea">03</div>
                  <div><div className="cascade-label">agent.inspector <span className="dim">// 03</span></div><div className="cascade-source">source: interviste + probe</div></div>
                  <div className="cascade-status running">running</div>
                </div>
                <div className="cascade-node">
                  <div className="avatar ea">04</div>
                  <div><div className="cascade-label">agent.generate <span className="dim">// 04</span></div><div className="cascade-source">source: tutte le precedenti</div></div>
                  <div className="cascade-status queued">queued</div>
                </div>
              </div>
              <div className="agent-statusbar"><span>traceability: <span className="ok">end-to-end</span></span><span className="amber">agents: 4/4 active</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-dark" id="capacita">
        <div className="wrap" data-reveal="">
          <p className="eyebrow">Le 4 capacità</p>
          <h2>Un unico flusso, dalla raccolta dati alla bozza <span className="accent">finale</span>.</h2>
          <div className="grid-4">
            <article className="card">
              <div className="card-glyph">
                <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="20" y="20" width="60" height="90" rx="4" stroke="rgba(255,255,255,0.30)" strokeWidth="1.2"></rect>
                  <line x1="32" y1="40" x2="68" y2="40" stroke="rgba(255,255,255,0.20)" strokeWidth="1"></line>
                  <line x1="32" y1="50" x2="68" y2="50" stroke="rgba(255,255,255,0.20)" strokeWidth="1"></line>
                  <line x1="32" y1="60" x2="60" y2="60" stroke="rgba(255,255,255,0.20)" strokeWidth="1"></line>
                  <line x1="32" y1="74" x2="68" y2="74" stroke="rgba(255,255,255,0.20)" strokeWidth="1"></line>
                  <path d="M90 65 L120 65" stroke="#FFB020" strokeWidth="1.4" strokeDasharray="3 3"></path>
                  <path d="M115 60 L122 65 L115 70" stroke="#FFB020" strokeWidth="1.4" fill="none" strokeLinecap="round"></path>
                  <rect x="130" y="35" width="55" height="20" rx="3" fill="rgba(255,176,32,0.12)" stroke="#FFB020" strokeWidth="1"></rect>
                  <rect x="130" y="60" width="55" height="20" rx="3" fill="rgba(255,176,32,0.08)" stroke="#FFB020" strokeWidth="1"></rect>
                  <rect x="130" y="85" width="55" height="20" rx="3" fill="rgba(255,176,32,0.04)" stroke="rgba(255,176,32,0.5)" strokeWidth="1" strokeDasharray="2 2"></rect>
                </svg>
              </div>
              <div className="card-meta"><span className="num">01</span><span className="sep">/</span><span>estrazione</span></div>
              <h3>Estrazione documentale</h3>
              <p>Legge contratti, policy e procedure ed estrae trattamenti, basi giuridiche, ruoli e sistemi AI.</p>
            </article>
            <article className="card">
              <div className="card-glyph">
                <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <g stroke="rgba(255,255,255,0.25)" strokeWidth="1">
                    <rect x="30" y="25" width="140" height="80" rx="3" fill="none"></rect>
                    <line x1="30" y1="45" x2="170" y2="45"></line>
                    <line x1="30" y1="65" x2="170" y2="65"></line>
                    <line x1="30" y1="85" x2="170" y2="85"></line>
                    <line x1="65" y1="25" x2="65" y2="105"></line>
                    <line x1="100" y1="25" x2="100" y2="105"></line>
                    <line x1="135" y1="25" x2="135" y2="105"></line>
                  </g>
                  <rect x="31" y="46" width="34" height="19" fill="rgba(255,176,32,0.32)"></rect>
                  <rect x="66" y="46" width="34" height="19" fill="rgba(255,176,32,0.22)"></rect>
                  <rect x="101" y="46" width="34" height="19" fill="rgba(255,176,32,0.10)"></rect>
                  <rect x="31" y="66" width="34" height="19" fill="rgba(255,176,32,0.18)"></rect>
                </svg>
              </div>
              <div className="card-meta"><span className="num">02</span><span className="sep">/</span><span>pre-popolamento</span></div>
              <h3>Pre-popolamento registri</h3>
              <p>Utilizza gli export per popolare trattamenti, inventario AI Act e asset NIS2 con dati reali.</p>
            </article>
            <article className="card signature">
              <div className="card-glyph">
                <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="75" cy="65" r="42" stroke="rgba(255,176,32,0.30)" strokeWidth="1" fill="none"></circle>
                  <circle cx="75" cy="65" r="28" stroke="rgba(255,176,32,0.50)" strokeWidth="1" fill="none"></circle>
                  <circle cx="75" cy="65" r="14" stroke="#FFB020" strokeWidth="1.3" fill="rgba(255,176,32,0.10)"></circle>
                  <circle cx="75" cy="65" r="4" fill="#FFB020"></circle>
                  <path d="M115 65 L138 50" stroke="#FFB020" strokeWidth="1.2" strokeDasharray="3 2.5"></path>
                  <rect x="138" y="38" width="46" height="24" rx="4" fill="rgba(255,176,32,0.08)" stroke="rgba(255,176,32,0.40)"></rect>
                  <line x1="145" y1="48" x2="175" y2="48" stroke="rgba(255,255,255,0.4)" strokeWidth="1"></line>
                  <path d="M115 75 L138 90" stroke="rgba(255,255,255,0.35)" strokeWidth="1.1" strokeDasharray="3 2.5"></path>
                  <rect x="138" y="80" width="46" height="20" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)"></rect>
                </svg>
              </div>
              <div className="card-meta"><span className="num">03</span><span className="sep">/</span><span>inspector</span><span className="badge">Signature</span></div>
              <h3>Inspector: audit agentico</h3>
              <p>Conduce l’intervista al key personnel, adatta le domande, raccoglie evidenze e restituisce un report strutturato.</p>
            </article>
            <article className="card">
              <div className="card-glyph">
                <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect x="58" y="32" width="70" height="86" rx="4" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.18)"></rect>
                  <rect x="68" y="22" width="70" height="86" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)"></rect>
                  <rect x="78" y="12" width="70" height="96" rx="4" fill="rgba(7,10,18,0.95)" stroke="rgba(255,176,32,0.50)"></rect>
                  <rect x="86" y="22" width="54" height="8" rx="2" fill="rgba(255,176,32,0.50)"></rect>
                  <line x1="86" y1="42" x2="140" y2="42" stroke="rgba(255,255,255,0.25)" strokeWidth="1"></line>
                  <line x1="86" y1="50" x2="135" y2="50" stroke="rgba(255,255,255,0.20)" strokeWidth="1"></line>
                  <line x1="86" y1="58" x2="140" y2="58" stroke="rgba(255,255,255,0.20)" strokeWidth="1"></line>
                  <circle cx="133" cy="98" r="6" stroke="#34D399" strokeWidth="1.2" fill="rgba(52,211,153,0.20)"></circle>
                  <path d="M130 98 L132.5 100.5 L137 96" stroke="#34D399" strokeWidth="1.3" fill="none" strokeLinecap="round"></path>
                </svg>
              </div>
              <div className="card-meta"><span className="num">04</span><span className="sep">/</span><span>generazione</span></div>
              <h3>Generazione bozze</h3>
              <p>Prepara bozze motivate di DPIA, FRIA, gap analysis e classificazioni AI Act, ancorandole alle evidenze raccolte.</p>
            </article>
          </div>
          <div className="callout">Non è un copilot incollato sopra un’interfaccia: gli agenti lavorano in cascata e ogni passaggio è tracciabile.</div>
        </div>
      </section>

      <section className="sec-panel" id="come-funziona">
        <div className="wrap">
          <div className="split">
            <div data-reveal="">
              <p className="eyebrow">Come funziona</p>
              <h2>Raccogli, struttura e prepara la documentazione per la <span className="accent">validazione</span>.</h2>
              <p className="lede" style={{ marginTop: "18px" }}>EXTRACT → POPULATE → INSPECT → GENERATE → VALIDATE</p>
              <div className="steps">
                <div className="step">
                  <div className="num">Step 1</div>
                  <div>
                    <h3>Carica</h3>
                    <p>Documenti, procedure, contratti, export o dati già disponibili.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="num">Step 2</div>
                  <div>
                    <h3>Estrai e pre-popola</h3>
                    <p>EurocomplAI identifica le informazioni rilevanti e alimenta i registri.</p>
                  </div>
                </div>
                <div className="step" id="inspector">
                  <div className="num">Step 3</div>
                  <div>
                    <h3>Inspector</h3>
                    <p>L’agente conduce le interviste con le persone coinvolte e struttura le evidenze.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="num">Step 4</div>
                  <div>
                    <h3>Genera</h3>
                    <p>Il sistema prepara valutazioni e bozze motivate a partire dalle evidenze raccolte.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="num">Step 5</div>
                  <div>
                    <h3>Valida</h3>
                    <p>Il professionista verifica, corregge e approva.</p>
                  </div>
                </div>
              </div>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#modulo-funziona">Vedi EurocomplAI sul tuo caso
                  <svg className="arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </a>
              </div>
            </div>
            <div data-reveal="">
              <div className="agent">
                <div className="agent-topbar"></div>
                <div className="agent-header">
                  <div className="dots"><span className="dot r"></span><span className="dot a"></span><span className="dot g"></span></div>
                  <div className="ide-slug">inspector <span className="em">·</span> session://eurocompl-001</div>
                  <div className="agent-status-live">running</div>
                </div>
                <div className="agent-body">
                  <div className="bubble">
                    <div className="avatar ea">EA</div>
                    <div className="bubble-msg ea">Il sistema di refertazione tratta dati sanitari ex art. 9 GDPR. Conferma la base giuridica?</div>
                  </div>
                  <div className="bubble user">
                    <div className="avatar user">MR</div>
                    <div className="bubble-msg user">Sì, consenso esplicito del paziente + obbligo di legge (D.Lgs. 196).</div>
                  </div>
                  <div className="bubble">
                    <div className="avatar ea">EA</div>
                    <div className="bubble-msg ea">Annotato. Procedo con la classificazione AI Act — sistema ad alto rischio, allegato III.</div>
                  </div>
                  <div className="evidence">
                    <div className="evidence-label">Evidenze cross-mapping</div>
                    <div className="chips">
                      <span className="chip gdpr">GDPR art. 9</span>
                      <span className="chip nis2">NIS2 §21</span>
                      <span className="chip aiact">AI Act all. III</span>
                    </div>
                  </div>
                </div>
                <div className="agent-statusbar"><span>traceability: <span className="ok">on</span></span><span className="amber">agents: 4/4 active</span></div>
              </div>
            </div>
          </div>
          <div className="form-card" id="modulo-funziona" style={{ maxWidth: "640px", margin: "56px auto 0" }} data-reveal="">
            <h3>Vedi EurocomplAI sul tuo caso</h3>
            <p className="form-note">Demo di 30 minuti condotta da chi fa consulenza GDPR, NIS2 e AI Act ogni giorno — non da un commerciale.</p>
            <DemoRequestForm n={1} source="/prenota-demo/" context="Landing EurocomplAI · richiesta demo" />
          </div>
        </div>
      </section>

      <section className="sec-dark" id="compliance-integrata">
        <div className="wrap split">
          <div data-reveal="">
            <p className="eyebrow">Compliance integrata</p>
            <h2>Tre normative, un unico <span className="accent">sistema</span>.</h2>
            <p className="body" style={{ marginTop: "22px" }}>GDPR, NIS2 e AI Act non sono moduli separati: nella pratica si sovrappongono. EurocomplAI utilizza un asset register unico, valutazioni integrate e cross-mapping automatico per collegare le evidenze tra i diversi framework.</p>
            <ul className="points">
              <li><b>01</b> Asset register unico</li>
              <li><b>02</b> GDPR, NIS2 e AI Act collegati allo stesso asset</li>
              <li><b>03</b> Obblighi sovrapposti, visibili nello stesso flusso</li>
              <li><b>04</b> Tracciabilità end-to-end</li>
            </ul>
            <p className="note-sec">Il prodotto è indicato come pronto per estensioni verso DGA, EHDS, CRA e Data Act — in secondo piano rispetto a GDPR, NIS2 e AI Act.</p>
          </div>
          <div data-reveal="">
            <div className="agent">
              <div className="agent-topbar"></div>
              <div className="agent-header">
                <div className="dots"><span className="dot r"></span><span className="dot a"></span><span className="dot g"></span></div>
                <div className="ide-slug">cross-mapping <span className="em">·</span> asset register</div>
                <div className="agent-status-live">live</div>
              </div>
              <div className="cm-legend">
                <span className="leg-gdpr">GDPR</span>
                <span className="leg-nis2">NIS2</span>
                <span className="leg-aiact">AI Act</span>
              </div>
              <div className="cm-body">
                <div className="cm-row">
                  <div className="cm-row-title">Sistema AI di refertazione</div>
                  <div className="chips"><span className="chip gdpr">GDPR art. 9</span><span className="chip nis2">NIS2 §21</span><span className="chip aiact">AI Act all. III</span></div>
                </div>
                <div className="cm-row">
                  <div className="cm-row-title">Sorveglianza umana</div>
                  <div className="chips"><span className="chip gdpr">GDPR art. 22</span><span className="chip aiact">AI Act art. 14</span></div>
                </div>
                <div className="cm-row">
                  <div className="cm-row-title">Misure di sicurezza tecniche</div>
                  <div className="chips"><span className="chip gdpr">GDPR art. 32</span><span className="chip nis2">NIS2 art. 21</span></div>
                </div>
              </div>
              <div className="agent-statusbar"><span>asset register unico</span><span className="ok">+ DGA · EHDS · CRA · Data Act</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-panel" id="per-chi-e">
        <div className="wrap" data-reveal="">
          <p className="eyebrow">Per chi è</p>
          <h2>Costruito da chi la compliance la fa. Per chi la deve presidiare ogni <span className="accent">giorno</span>.</h2>
          <div className="target-row">
            <div className="target-col">
              <svg className="target-glyph" viewBox="0 0 16 16" aria-hidden="true"><path d="M1.5 8 C 4 4, 12 4, 14.5 8 C 12 12, 4 12, 1.5 8 Z"></path><circle className="active-fill" cx="8" cy="8" r="1.7"></circle></svg>
              <div className="target-eyebrow">DPO &amp; Compliance</div>
              <h3>Meno trascrizione. Più tempo nel presidio.</h3>
            </div>
            <div className="target-col">
              <svg className="target-glyph" viewBox="0 0 16 16" aria-hidden="true"><rect x="2" y="4.5" width="9" height="9" rx="1"></rect><rect className="active" x="5" y="2.5" width="9" height="9" rx="1"></rect></svg>
              <div className="target-eyebrow">Studi legali</div>
              <h3>Industrializza i mandati ricorrenti senza perdere qualità.</h3>
            </div>
            <div className="target-col">
              <svg className="target-glyph" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.4"></circle><circle cx="8" cy="8" r="3.4"></circle><circle className="active-fill" cx="8" cy="8" r="1.3"></circle></svg>
              <div className="target-eyebrow">Sanità &amp; PA</div>
              <h3>Inspector permette di condurre audit anche dove il consulente non può essere fisicamente.</h3>
            </div>
            <div className="target-col">
              <svg className="target-glyph" viewBox="0 0 16 16" aria-hidden="true"><path d="M13.5 2.5 V 13.5"></path><path className="active" d="M2 8 H 11 M8.5 5.5 L 11 8 L 8.5 10.5"></path></svg>
              <div className="target-eyebrow">Aziende private</div>
              <h3>La compliance diventa un requisito di accesso al mercato, non soltanto un costo da subire.</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-dark" id="perche">
        <div className="wrap" data-reveal="">
          <p className="eyebrow">Perché è diverso</p>
          <h2>Costruito da chi usa la compliance sul <span className="accent">campo</span>.</h2>
          <ul className="points" style={{ maxWidth: "52em" }}>
            <li><b>01</b> Nasce dall’esperienza operativa di inteGroup.</li>
            <li><b>02</b> Non è un semplice chatbot aggiunto a un GRC.</li>
            <li><b>03</b> Quattro agenti lavorano in cascata.</li>
            <li><b>04</b> Ogni passaggio è tracciabile.</li>
            <li><b>05</b> Metodologie pronte all’uso.</li>
            <li><b>06</b> Possibilità di caricare playbook già esistenti.</li>
          </ul>
        </div>
      </section>

      <section className="sec-panel" id="faq">
        <div className="wrap" data-reveal="">
          <p className="eyebrow">FAQ</p>
          <h2>Domande prima della <span className="accent">demo</span>.</h2>
          <div className="faq">
            <details>
              <summary>Quali normative gestisce EurocomplAI?</summary>
              <p>Il cuore attuale del prodotto integra GDPR, NIS2 e AI Act nello stesso sistema.</p>
            </details>
            <details>
              <summary>Cosa fa concretamente il software?</summary>
              <p>Estrae informazioni dai documenti, pre-popola i registri, conduce audit con Inspector e genera bozze motivate ancorate alle evidenze.</p>
            </details>
            <details>
              <summary>Chi mantiene la decisione finale?</summary>
              <p>Il modello descritto dal prodotto è chiaro: EurocomplAI estrae, intervista e genera; il professionista valida.</p>
            </details>
            <details>
              <summary>Possiamo usare le nostre metodologie?</summary>
              <p>Sì. Il sito indica metodologie pronte all’uso e la possibilità di caricare playbook già esistenti.</p>
            </details>
            <details>
              <summary>EurocomplAI è già disponibile?</summary>
              <p>Il prodotto è attualmente presentato in Early Access e la CTA principale è una demo sul caso del prospect.</p>
            </details>
          </div>
        </div>
      </section>

      <section className="sec-deep cta-band">
        <div className="wrap" data-reveal="">
          <p className="eyebrow" style={{ justifyContent: "center" }}>In action · Early access</p>
          <h2>Vuoi vedere EurocomplAI in <span className="accent">azione</span>?</h2>
          <p className="lede">In 30 minuti puoi vedere come il sistema estrae evidenze, conduce audit e prepara bozze per il flusso di compliance che oggi gestisci manualmente.</p>
          <a className="btn btn-primary" href="#prenota-demo">Prenota una demo di EurocomplAI sul tuo caso
            <svg className="arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </a>
          <p className="micro">La demo è condotta da chi lavora ogni giorno su GDPR, NIS2 e AI Act.</p>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
