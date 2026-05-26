import type { Metadata } from "next";
import Link from "next/link";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowIcon from "@/components/ArrowIcon";
import SemaphoreDots from "@/components/SemaphoreDots";

export const metadata: Metadata = {
  title: "Soluzioni per le aziende",
  description:
    "EurocomplAI è la piattaforma di compliance europea per aziende private — manifatturiero, servizi, tecnologia, retail. GDPR, NIS2 e AI Act gestiti come un sistema unico, con la velocità che il business richiede e la profondità che il rischio impone.",
  alternates: { canonical: "/soluzioni/aziende-private/" },
};

export default function SoluzioniAziendePrivatePage() {
  return (
    <>
      <TopStrip label="SOLUZIONI · AZIENDE PRIVATE" />
      <main>
        {/* HEADER + HERO (band-grid) */}
        <section className="band-grid">
          <div className="container">
            <Header ctaHref="/demo/" />

            <section className="page-hero">
              <div className="hero-eyebrow">Soluzioni per le aziende</div>
              <h1 className="page-h1">
                La compliance non è più un costo. È un{" "}
                <span className="accent">requisito di accesso al mercato</span> — nei bandi,
                nei contratti B2B, in M&amp;A.
              </h1>
              <p className="page-hero-sub">
                EurocomplAI è la piattaforma di compliance europea per aziende private —
                manifatturiero, servizi, tecnologia, retail. GDPR, NIS2 e AI Act gestiti
                come un sistema unico, con la velocità che il business richiede e la
                profondità che il rischio impone.
              </p>

              <div className="hero-ctas" style={{ marginBottom: "8px" }}>
                <Link href="/demo/" className="btn btn-primary">
                  Richiedi una demo per le aziende
                  <ArrowIcon />
                </Link>
                <Link href="/demo/" className="btn btn-ghost">
                  Scarica il self-assessment AI Act per aziende
                </Link>
              </div>

              {/* Hero workflow: 3 contesti commerciali in cui la compliance è asset */}
              <div
                className="flow-strip three"
                aria-label="Tre contesti commerciali in cui la compliance è asset"
              >
                <div className="flow-step">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <path d="M14 3v6h6" />
                      <path d="M9 14h4" />
                      <path d="M9 17h6" />
                    </svg>
                  </div>
                  <div className="flow-label">Clausole contrattuali B2B</div>
                  <div className="flow-meta">enterprise · fornitura</div>
                </div>
                <div className="flow-step">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="2" y="7" width="20" height="13" rx="2" />
                      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <path d="M2 13h20" />
                    </svg>
                  </div>
                  <div className="flow-label">Due diligence in M&amp;A</div>
                  <div className="flow-meta">deal · closing</div>
                </div>
                <div className="flow-step">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  </div>
                  <div className="flow-label">Bandi e gare europee</div>
                  <div className="flow-meta">submission · scadenza</div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* IL CONTESTO CHE CONOSCIAMO (band-deep) */}
        <section className="band-deep">
          <div className="container narrow">
            <div className="section" id="contesto">
              <div className="section-eyebrow">Il contesto che conosciamo</div>
              <h2>
                Non si tratta di evitare sanzioni. Si tratta di{" "}
                <span className="accent">non perdere il mercato</span>.
              </h2>
              <div className="section-body">
                <p>
                  I grandi clienti enterprise inseriscono clausole di conformità GDPR e
                  NIS2 nei contratti di fornitura. Le pubbliche amministrazioni richiedono
                  dichiarazioni sull'AI Act nei bandi. I partner internazionali fanno due
                  diligence pre-contrattuale sulla governance dei dati. Le società di M&amp;A
                  valutano lo stato della compliance come fattore di prezzo e di condizioni
                  di chiusura.
                </p>
                <p>
                  La conformità è diventata un{" "}
                  <strong>requisito operativo del business B2B europeo</strong>. Le aziende
                  che oggi costruiscono un sistema solido di governance privacy,
                  cybersecurity e AI sono le stesse che domani vinceranno gare, accederanno
                  a fornitori enterprise, supereranno due diligence senza concessioni di
                  prezzo.
                </p>
                <p>
                  EurocomplAI lavora con le aziende su questo doppio livello: la{" "}
                  <strong>riduzione del rischio operativo</strong> nell'immediato —
                  sanzioni, data breach, incidenti — e la{" "}
                  <strong>costruzione di un asset di compliance documentabile</strong> che
                  ha valore commerciale negli anni successivi.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* GLI SCENARI (band-grid) */}
        <section className="band-grid">
          <div className="container">
            <div className="section" id="scenari">
              <div className="section-eyebrow">Gli scenari in cui interveniamo</div>
              <h2>
                Quattro fronti aperti. <span className="accent">Una sola pipeline.</span>
              </h2>
              <p className="section-sub">
                Mandati ricorrenti nel settore privato — dall'adozione AI all'incident
                response, lavorati con la stessa cura del giudizio professionale.
              </p>

              <div className="scenarios-grid">
                {/* Scenario 1 — Adozione di sistemi AI nei processi aziendali */}
                <div className="scenario-card">
                  <div className="scenario-meta">
                    <span className="num">01</span>
                    <span className="sep">/</span>
                    <span>Scenario</span>
                  </div>
                  <h3>Adozione di sistemi AI nei processi aziendali</h3>
                  <p>
                    Avete introdotto o state valutando sistemi AI in HR, customer service,
                    produzione, vendite, supply chain. L'AI Act impone obblighi distinti
                    per categoria di rischio.{" "}
                    <strong>
                      Screening CV, valutazione delle performance, scoring del credito,
                      customer support avanzato
                    </strong>{" "}
                    rientrano spesso nell'alto rischio.
                  </p>
                  <p>
                    EurocomplAI estrae dai contratti con i vendor AI che già avete,
                    classifica i sistemi rispetto all'AI Act, conduce con Inspector
                    l'audit con i responsabili di funzione, produce la documentazione di
                    conformità — DPIA integrata con FRIA, scheda di sistema, sorveglianza
                    umana, registro AI Act. Il CdA riceve un fascicolo completo, non
                    quattro documenti scollegati.
                  </p>
                  <div className="scenario-regs">
                    <span className="chip aiact">AI Act all. III</span>
                    <span className="chip gdpr">GDPR art. 35</span>
                    <span
                      className="chip"
                      style={{
                        color: "var(--ink-3)",
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid var(--border-1)",
                      }}
                    >
                      Sorveglianza umana
                    </span>
                  </div>
                </div>

                {/* Scenario 2 — NIS2 */}
                <div className="scenario-card">
                  <div className="scenario-meta">
                    <span className="num">02</span>
                    <span className="sep">/</span>
                    <span>Scenario</span>
                  </div>
                  <h3>Adeguamento NIS2 per soggetti essenziali e importanti</h3>
                  <p>
                    Molte aziende italiane rientrano nei soggetti essenziali o importanti
                    NIS2 —{" "}
                    <strong>
                      manifatturiero strategico, energia, trasporti, infrastrutture
                      digitali, servizi finanziari, fornitori critici della catena del
                      valore
                    </strong>
                    . Governance rischio cyber, misure tecniche e organizzative, notifica
                    incidenti, supply chain security.
                  </p>
                  <p>
                    EurocomplAI conduce la gap analysis a partire dai documenti che già
                    producete e identifica gli scarti rispetto agli obblighi. Probe
                    somministra ai fornitori critici il questionario di conformità, le
                    risposte alimentano la sezione supply chain del piano di adeguamento.
                    Il valore aggiunto è la <strong>velocità</strong>: arrivare pronti
                    alle ispezioni, non scoprire i gap quando l'autorità è già in azienda.
                  </p>
                  <div className="scenario-regs">
                    <span className="chip nis2">NIS2 art. 21</span>
                    <span className="chip nis2">NIS2 art. 23</span>
                    <span
                      className="chip"
                      style={{
                        color: "var(--ink-3)",
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid var(--border-1)",
                      }}
                    >
                      Supply chain
                    </span>
                  </div>
                </div>

                {/* Scenario 3 — Due diligence M&A */}
                <div className="scenario-card">
                  <div className="scenario-meta">
                    <span className="num">03</span>
                    <span className="sep">/</span>
                    <span>Scenario</span>
                  </div>
                  <h3>Due diligence di compliance in operazioni M&amp;A</h3>
                  <p>
                    In vendita, acquisizione o fusione, lo stato della compliance impatta{" "}
                    <strong>
                      direttamente la valutazione e le condizioni del deal
                    </strong>
                    . Buyer side: ricostruzione strutturata della governance dati, dei
                    sistemi AI in uso, della postura NIS2, delle pendenze con le autorità.
                    Sell side: presentazione proattiva.
                  </p>
                  <p>
                    EurocomplAI accelera entrambe le posizioni. Per il buyer struttura
                    rapidamente l'analisi del target dal virtual data room. Per il seller
                    prepara il dossier di compliance prima dell'apertura della trattativa,{" "}
                    <strong>riducendo le concessioni di prezzo</strong> durante la
                    negoziazione.
                  </p>
                  <div className="scenario-regs">
                    <span className="chip gdpr">GDPR</span>
                    <span className="chip nis2">NIS2</span>
                    <span className="chip aiact">AI Act</span>
                    <span
                      className="chip"
                      style={{
                        color: "var(--ink-3)",
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid var(--border-1)",
                      }}
                    >
                      VDR · M&amp;A
                    </span>
                  </div>
                </div>

                {/* Scenario 4 — Incident response */}
                <div className="scenario-card">
                  <div className="scenario-meta">
                    <span className="num">04</span>
                    <span className="sep">/</span>
                    <span>Scenario</span>
                  </div>
                  <h3>Incident response e gestione delle crisi</h3>
                  <p>
                    Data breach, attacco ransomware, notifica al Garante o ad ACN{" "}
                    <strong>entro 72 ore</strong>, comunicazione agli interessati. Quando
                    l'incidente accade, i tempi sono stretti, la documentazione richiesta
                    è dettagliata, le decisioni vanno prese sotto pressione.
                  </p>
                  <p>
                    EurocomplAI fornisce l'infrastruttura per rispondere in tempo:
                    estrazione rapida del contesto del trattamento coinvolto, generazione
                    delle <strong>bozze di notifica conformi</strong>, ricostruzione
                    strutturata della catena degli eventi da log e documenti.
                    Successivamente, supporta il piano di rimediazione e la documentazione
                    che evita la replica dell'incidente.
                  </p>
                  <div className="scenario-regs">
                    <span className="chip gdpr">GDPR art. 33–34</span>
                    <span className="chip nis2">NIS2 art. 23</span>
                    <span
                      className="chip"
                      style={{
                        color: "var(--ink-3)",
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid var(--border-1)",
                      }}
                    >
                      72h · post-incident
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* UNO SCENARIO IN AZIONE (band-deep) */}
        <section className="band-deep">
          <div className="container">
            <div className="section" id="azione">
              <div className="section-eyebrow">Uno scenario in azione</div>
              <h2>
                Uno scenario tipico in{" "}
                <span className="accent">un'azienda manifatturiera</span>.
              </h2>

              <div className="disclaimer">
                Scenario illustrativo. I primi case study reali, basati sui piloti in
                corso, saranno pubblicati nei prossimi mesi.
              </div>

              <div className="section-body" style={{ maxWidth: "880px" }}>
                <p>
                  <strong>Il contesto.</strong> Un'azienda manifatturiera italiana del
                  settore meccanico è stata invitata a partecipare a un bando europeo per
                  la fornitura di componenti a una commessa pubblica olandese. Il bando
                  richiede di dimostrare la conformità integrata a GDPR, NIS2 e AI Act{" "}
                  <strong>entro novanta giorni</strong> dalla scadenza submission.
                </p>
                <p>
                  <strong>Il problema.</strong> Ufficio compliance composto da una sola
                  persona, DPO esterno a part-time, responsabile IT che gestisce sia
                  infrastruttura sia sicurezza. Documentazione esistente{" "}
                  <strong>frammentaria</strong> — registro trattamenti aggiornato a tre
                  anni fa, nessuna gap NIS2, nessun inventario AI (alcuni sistemi
                  "nascosti" nei software gestionali standard).
                </p>
              </div>

              {/* Week panel: 3 fasi su 8 settimane */}
              <div className="week-panel">
                <div className="agent-topbar" />
                <div className="mock-header">
                  <SemaphoreDots />
                  <div className="ide-slug">
                    case <span className="em">·</span> manifatturiero://bando-eu-90gg
                  </div>
                  <div className="agent-status-live">running</div>
                </div>

                <div className="week-grid">
                  <div className="week-col">
                    <div className="week-marker">W1–2</div>
                    <div className="week-eyebrow">
                      Settimane 1–2 · ingestione + AI discovery
                    </div>
                    <h4>Documenti caricati, AI "nascosti" scoperti.</h4>
                    <p>
                      L'azienda carica contratti fornitori IT, vendor di software
                      gestionale, vecchio registro trattamenti, policy interne, inventario
                      applicativi. EurocomplAI estrae le informazioni rilevanti,{" "}
                      <strong>
                        identifica i sistemi AI in uso anche quelli integrati in software
                        standard
                      </strong>
                      , classifica preliminarmente la postura sui tre regolamenti.
                    </p>
                  </div>
                  <div className="week-col">
                    <div className="week-marker">W3–4</div>
                    <div className="week-eyebrow">
                      Settimane 3–4 · Inspector + Probe vendor
                    </div>
                    <h4>Sei interviste interne + fornitori critici.</h4>
                    <p>
                      Inspector conduce sei interviste asincrone in parallelo: IT, HR
                      (screening CV), produzione (manutenzione predittiva), vendite (CRM
                      con AI), DPO esterno, direttore generale. Probe somministra ai
                      fornitori IT critici e ai vendor AI il questionario art. 28 + NIS2.{" "}
                      <strong>
                        Sessioni di 30–45 minuti, nessuna riunione coordinata.
                      </strong>
                    </p>
                  </div>
                  <div className="week-col">
                    <div className="week-marker">W5–8</div>
                    <div className="week-eyebrow">
                      Settimane 5–8 · bozze + submission
                    </div>
                    <h4>Dossier integrato per la stazione appaltante.</h4>
                    <p>
                      EurocomplAI produce: registro trattamenti aggiornato, inventario AI
                      Act con classificazione, DPIA+FRIA per i sistemi ad alto rischio,
                      gap NIS2 con piano prioritizzato, dossier per la stazione
                      appaltante. L'ufficio compliance rivede, il direttore generale
                      completa con la dimensione strategica.{" "}
                      <strong>
                        Submission consegnata in tempo, qualità da grande fornitore.
                      </strong>
                    </p>
                  </div>
                </div>

                <div className="agent-statusbar">
                  <span>
                    bando: <span className="ok">90 giorni</span> · 8 settimane effettive
                  </span>
                  <span className="amber">
                    team: 1 compliance + DPO esterno + IT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* PERCHÉ SCELGONO EUROCOMPLAI (band-grid) */}
        <section className="band-grid">
          <div className="container">
            <div className="section" id="perche">
              <div className="section-eyebrow">
                Perché aziende private scelgono EurocomplAI
              </div>
              <h2>
                Costruito per chi vede la compliance come asset commerciale,{" "}
                <span className="accent">non come costo</span>.
              </h2>

              <div className="reasons-list">
                <div className="reason-row">
                  <div className="reason-num">01</div>
                  <div className="reason-text">
                    <h4>Velocità di execution senza sacrificare la qualità.</h4>
                    <p>
                      Le aziende private operano con tempi stretti — un bando ha una
                      scadenza, un cliente enterprise ha aspettative, un deal M&amp;A ha
                      una closing date. EurocomplAI{" "}
                      <strong>comprime drasticamente i tempi di esecuzione</strong> del
                      lavoro tecnico di compliance, mantenendo standard di qualità che
                      reggono di fronte alla valutazione di buyer enterprise o di gare
                      pubbliche europee.
                    </p>
                  </div>
                </div>
                <div className="reason-row">
                  <div className="reason-num">02</div>
                  <div className="reason-text">
                    <h4>Controllo del perimetro per CISO e responsabili IT.</h4>
                    <p>
                      EurocomplAI non si connette ai vostri sistemi informativi interni.
                      Input via caricamento consapevole + Probe verso stakeholder esterni.{" "}
                      <strong>
                        Nessuna apertura di perimetri di sicurezza, nessuna review tecnica
                        di mesi sui connector, nessuna obiezione del CISO.
                      </strong>{" "}
                      Il deployment in produzione si misura in giorni.
                    </p>
                  </div>
                </div>
                <div className="reason-row">
                  <div className="reason-num">03</div>
                  <div className="reason-text">
                    <h4>Linguaggio business, non solo tecnico-normativo.</h4>
                    <p>
                      Le bozze prodotte da EurocomplAI sono ancorate al contesto operativo
                      dell'azienda — quali sistemi usate, quali processi avete, quali
                      clienti enterprise servite. I deliverable parlano una lingua che{" "}
                      <strong>
                        il consiglio di amministrazione e la direzione generale possono
                        leggere e validare
                      </strong>
                      , non solo che il legale e il DPO possono interpretare.
                    </p>
                  </div>
                </div>
                <div className="reason-row">
                  <div className="reason-num">04</div>
                  <div className="reason-text">
                    <h4>Costruito da chi la compliance la fa, non da chi la programma.</h4>
                    <p>
                      Le bozze, le domande di Inspector, le valutazioni di rischio — sono
                      la codifica software di mandati consulenziali che inteGroup ha
                      condotto con aziende private italiane di varie dimensioni e
                      settori. Sono il prodotto di consulenti che usano ogni giorno quello
                      che hanno costruito, e che{" "}
                      <strong>
                        conoscono il bilanciamento tra obblighi normativi e priorità
                        commerciali
                      </strong>
                      .
                    </p>
                  </div>
                </div>
                <div className="reason-row">
                  <div className="reason-num">05</div>
                  <div className="reason-text">
                    <h4>Metodologie pronte oggi, vostre quando vorrete.</h4>
                    <p>
                      EurocomplAI parte da metodologie operative pronte all'uso — DPIA,
                      gap analysis NIS2, classificazione AI Act, valutazione fornitori.
                      Mano a mano che la vostra organizzazione sviluppa standard interni,
                      potete caricarli e farli diventare il riferimento del software.{" "}
                      <strong>Non siete vincolati a fare le cose come le facciamo noi.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ (stessa banda, no transition) */}
            <div className="section" id="faq" style={{ paddingTop: 0 }}>
              <div className="section-eyebrow">Obiezioni e risposte</div>
              <h2>
                Le domande che ci fanno <span className="accent">più spesso</span>.
              </h2>

              <div className="faq-list">
                <details className="faq-item">
                  <summary>
                    <span>Qual è il ROI rispetto a un GRC tradizionale?</span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </summary>
                  <div className="faq-body">
                    <p>
                      Il confronto rilevante non è il costo del software in sé, ma il{" "}
                      <strong>costo totale della compliance</strong> — incluse le ore
                      consulenziali e di personale interno oggi necessarie.
                    </p>
                    <p>
                      A questo si aggiunge il beneficio commerciale di una postura
                      documentabile rapidamente: accesso a gare e mercati B2B altrimenti
                      preclusi, riduzione del prezzo di concessione in M&amp;A, minor
                      rischio operativo di sanzioni e incidenti. Una conversazione di 30
                      minuti chiarisce il quadro per il vostro caso.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary>
                    <span>Come si integra con la nostra governance esistente?</span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </summary>
                  <div className="faq-body">
                    <p>
                      EurocomplAI <strong>non sostituisce la governance esistente</strong>.
                      Si inserisce come strumento operativo a supporto del DPO, del
                      compliance officer, del CISO o del legale interno, riducendo il
                      carico di lavoro tecnico-documentale e lasciando intatti i
                      meccanismi decisionali e le responsabilità organizzative. La
                      governance dei dati, dei sistemi AI e della sicurezza resta intera.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary>
                    <span>
                      Funziona per aziende multinazionali con presenza in più paesi
                      europei?
                    </span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </summary>
                  <div className="faq-body">
                    <p>
                      Sì. EurocomplAI è progettato sul{" "}
                      <strong>perimetro regolatorio europeo</strong>, quindi opera in modo
                      coerente in tutti gli Stati membri dove i tre regolamenti si
                      applicano. Per aziende con presenza in più paesi, la piattaforma
                      permette di gestire le sovrapposizioni — un trattamento condotto in
                      più paesi, un sistema AI integrato in più filiali, un'infrastruttura
                      IT condivisa — con cross-mapping automatico delle peculiarità
                      nazionali nei recepimenti.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary>
                    <span>I dati aziendali sensibili sono al sicuro?</span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </summary>
                  <div className="faq-body">
                    <p>
                      I dati dei clienti non vengono usati per addestrare modelli, né i
                      nostri né di terze parti. Le elaborazioni avvengono in{" "}
                      <strong>contesti isolati per cliente</strong>. L'input avviene per
                      documenti caricati consapevolmente dal vostro personale o per
                      risposte raccolte via Probe — non per connessione automatizzata ai
                      vostri sistemi interni.
                    </p>
                    <p>
                      Per aziende con requisiti di sovranità del dato particolarmente
                      stringenti, il deployment{" "}
                      <strong>on-premise sull'infrastruttura del cliente</strong> è in
                      roadmap per il 2026.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary>
                    <span>Quali aziende vi hanno già scelto?</span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </summary>
                  <div className="faq-body">
                    <p>
                      EurocomplAI è in early access, in piloti con un gruppo selezionato
                      di partner — incluse aziende private di vari settori e dimensioni.
                      Possiamo presentarvi conversazioni con compliance officer e DPO
                      interni che stanno valutando o testando la piattaforma. Le
                      credenziali consulenziali su cui poggia il prodotto sono quelle di{" "}
                      <strong>inteGroup</strong>, attiva in mandati con aziende italiane.
                    </p>
                  </div>
                </details>
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
                <div className="section-eyebrow">In action · Demo per le aziende</div>
                <h2>
                  Un bando da vincere, una due diligence in arrivo, un sistema AI da
                  classificare, <span className="accent">una compliance da rifare</span>?
                </h2>
                <p className="section-sub">
                  Una demo di 30 minuti con qualcuno che ha gestito mandati di compliance
                  con aziende italiane comparabili alla vostra è il modo più rapido per
                  capire se EurocomplAI funziona nel vostro contesto.
                </p>
                <div className="hero-ctas">
                  <Link href="/demo/" className="btn btn-primary">
                    Richiedi una demo per le aziende
                    <ArrowIcon />
                  </Link>
                  <Link href="/demo/" className="btn btn-ghost">
                    Scarica il self-assessment AI Act
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
