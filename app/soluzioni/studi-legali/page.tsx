import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import ArrowIcon from "@/components/ArrowIcon";
import SemaphoreDots from "@/components/SemaphoreDots";

export const metadata: Metadata = {
  title: "Soluzioni per studi legali",
  description:
    "EurocomplAI industrializza i mandati ricorrenti su GDPR, NIS2 e AI Act senza commodificare la consulenza. Più clienti seguiti dallo stesso team, output di livello partner anche sui mandati di taglia media.",
  alternates: { canonical: "/soluzioni/studi-legali/" },
};

export default function SoluzioniStudiLegaliPage() {
  return (
    <>
      <main>
        {/* HEADER + HERO (band-grid) */}
        <section className="band-grid">
          <div className="container">

            <section className="page-hero">
              <div className="hero-eyebrow">Soluzioni per studi legali</div>
              <h1 className="page-h1">
                I vostri clienti hanno problemi tecnico-normativi. Voi avete bisogno di{" "}
                <span className="accent">scalare senza perdere qualità</span>.
              </h1>
              <p className="page-hero-sub">
                EurocomplAI è la piattaforma di compliance europea che industrializza i
                mandati ricorrenti su GDPR, NIS2 e AI Act, senza commodificare la
                consulenza. Più clienti seguiti dallo stesso team, output di livello
                partner anche sui mandati di taglia media.
              </p>

              <div className="hero-ctas" style={{ marginBottom: 8 }}>
                <Link href="/demo/" className="btn btn-primary">
                  Richiedi una demo per studi legali
                  <ArrowIcon />
                </Link>
                <a href="#" className="btn btn-ghost">
                  Scarica il profilo EurocomplAI per studi legali
                </a>
              </div>

              {/* Hero workflow: 3 nodi (Mandato → Inspector + estrazione → Deliverable) */}
              <div
                className="flow-strip three"
                aria-label="Da mandato a deliverable, in una pipeline"
              >
                <div className="flow-step">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <path d="M14 3v6h6" />
                    </svg>
                  </div>
                  <div className="flow-label">Mandato in ingresso</div>
                  <div className="flow-meta">cliente · documenti</div>
                </div>
                <div className="flow-step active">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <div className="flow-label">Inspector + estrazione</div>
                  <div className="flow-meta">running</div>
                </div>
                <div className="flow-step">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <path d="M14 3v6h6" />
                      <path d="M9 14l2 2 4-4" />
                    </svg>
                  </div>
                  <div className="flow-label">Deliverable per il cliente</div>
                  <div className="flow-meta">partner · firma</div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* IL CONTESTO CHE CONOSCETE BENE (band-deep) */}
        <section className="band-deep">
          <div className="container narrow">
            <div className="section" id="contesto">
              <div className="section-eyebrow">Il contesto che conoscete bene</div>
              <h2>
                Più mandati di compliance.{" "}
                <span className="accent">Stesso tempo a disposizione.</span>
              </h2>
              <div className="section-body">
                <p>
                  I clienti arrivano con un data breach alle 23:00. Con una diffida del
                  Garante. Con un'ispezione NIS2 tra tre settimane. Con un sistema AI da
                  classificare prima del CdA di martedì.
                </p>
                <p>
                  Ogni mandato di compliance porta con sé un carico tecnico che lo studio
                  deve eseguire o supervisionare: lettura documentale, interviste a
                  management e team operativo, DPIA o FRIA, gap analysis, redazione delle
                  policy. Il know-how dello studio è in alto — nella strategia, nel
                  parere, nella relazione con il cliente. Il tempo del team è in basso —
                  nell'esecuzione di attività ripetitive che però richiedono accuratezza
                  assoluta.
                </p>
                <p>
                  EurocomplAI è progettato per quella distanza.{" "}
                  <strong>
                    Industrializza l'esecuzione, lascia allo studio il giudizio e la
                    firma.
                  </strong>{" "}
                  Permette a un partner di gestire più mandati in parallelo, di accettare
                  mandati di taglia media oggi non sostenibili, di mantenere uno standard
                  di output uniforme.
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
                Quattro mandati ricorrenti.{" "}
                <span className="accent">Una sola pipeline.</span>
              </h2>
              <p className="section-sub">
                Tipologie classiche di mandato nei medio-grandi studi italiani —
                industrializzate senza commodificare la consulenza.
              </p>

              <div className="scenarios-grid">
                {/* Scenario 1 — Mandati di adeguamento ricorrenti */}
                <div className="scenario-card">
                  <div className="scenario-meta">
                    <span className="num">01</span>
                    <span className="sep">/</span>
                    <span>Scenario</span>
                  </div>
                  <h3>Mandati di adeguamento ricorrenti</h3>
                  <p>
                    DPIA su trattamenti nuovi, classificazione AI Act per sistemi adottati
                    dal cliente, gap analysis NIS2 per aziende rientranti nei soggetti
                    essenziali, registri e policy interne.{" "}
                    <strong>Mandati identici nella struttura, diversi nel contenuto.</strong>
                  </p>
                  <p>
                    EurocomplAI estrae dai documenti consegnati dal cliente, Inspector
                    intervista il management, Probe somministra ai fornitori del cliente le
                    valutazioni ex art. 28, il sistema produce le bozze. Il team valida,
                    integra il giudizio, firma. I tempi si comprimono, la marginalità si
                    recupera.
                  </p>
                  <div className="scenario-regs">
                    <span className="chip gdpr">GDPR art. 35</span>
                    <span className="chip nis2">NIS2 art. 21</span>
                    <span className="chip aiact">AI Act all. III</span>
                  </div>
                </div>

                {/* Scenario 2 — Pareri tecnici a supporto del contenzioso */}
                <div className="scenario-card">
                  <div className="scenario-meta">
                    <span className="num">02</span>
                    <span className="sep">/</span>
                    <span>Scenario</span>
                  </div>
                  <h3>Pareri tecnici a supporto del contenzioso</h3>
                  <p>
                    Mandato difensivo — istruttoria del Garante, contestazione di
                    trattamento illecito, pretesa di responsabilità per data breach.
                    Analisi delle misure di sicurezza adottate, valutazione della
                    proporzionalità, ricostruzione della catena degli eventi.
                  </p>
                  <p>
                    EurocomplAI ricostruisce il quadro dai documenti depositati, identifica
                    punti di forza e debolezza nella postura documentabile, prepara la{" "}
                    <strong>base tecnica del parere</strong> che il legale completerà con
                    l'argomentazione giuridica. Il parere finale parla la lingua del
                    Garante perché è ancorato a evidenze, non a affermazioni generiche.
                  </p>
                  <div className="scenario-regs">
                    <span className="chip gdpr">GDPR art. 32 · 33</span>
                    <span
                      className="chip"
                      style={{
                        color: "var(--ink-3)",
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid var(--border-1)",
                      }}
                    >
                      Provv. Garante
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
                  <h3>Due diligence di compliance per operazioni M&amp;A</h3>
                  <p>
                    In un'operazione di acquisizione, vendita o fusione, lo stato della
                    compliance del target impatta valutazione e condizioni di chiusura.
                    Mandato classico, ad alto valore aggiunto, con sottostante di analisi
                    documentale massiva.
                  </p>
                  <p>
                    EurocomplAI accelera la fase di analisi: estrazione strutturata dei
                    trattamenti, dei sistemi AI in uso, della postura NIS2; identificazione
                    dei gap rispetto al benchmark settoriale; mappatura dei{" "}
                    <strong>rischi nascosti</strong>. Il report finale è ricco di dettaglio
                    supportato da evidenze documentali — in tempi compatibili con il deal
                    flow.
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
                      M&amp;A
                    </span>
                  </div>
                </div>

                {/* Scenario 4 — Formazione e supporto continuativo */}
                <div className="scenario-card">
                  <div className="scenario-meta">
                    <span className="num">04</span>
                    <span className="sep">/</span>
                    <span>Scenario</span>
                  </div>
                  <h3>Formazione e supporto operativo continuativo</h3>
                  <p>
                    Pacchetti di assistenza continuativa: DPO esterno, supporto al
                    compliance officer interno, formazione del management, audit periodici.{" "}
                    <strong>
                      Modello commerciale di valore — ma operativamente costoso da scalare.
                    </strong>
                  </p>
                  <p>
                    EurocomplAI dà allo studio l'infrastruttura per offrirli a più clienti
                    senza erodere la qualità: registro del cliente vivo e aggiornato, bozze
                    di risposta alle istanze degli interessati, audit periodici condotti da
                    Inspector, dashboard di rischio condivisa. Lo studio mantiene la
                    presenza umana dove serve — la riunione mensile, la gestione delle
                    crisi, la relazione strategica.
                  </p>
                  <div className="scenario-regs">
                    <span className="chip gdpr">DPO · GDPR art. 37–39</span>
                    <span
                      className="chip"
                      style={{
                        color: "var(--ink-3)",
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid var(--border-1)",
                      }}
                    >
                      retainer
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
                Uno scenario tipico in <span className="accent">uno studio legale</span>.
              </h2>

              <div className="disclaimer">
                Scenario illustrativo. I primi case study reali, basati sui piloti in
                corso, saranno pubblicati nei prossimi mesi.
              </div>

              <div className="section-body" style={{ maxWidth: 880 }}>
                <p>
                  <strong>Il contesto.</strong> Uno studio legale di media dimensione segue
                  un cliente manifatturiero italiano che ha vinto un bando europeo per la
                  fornitura a una commessa pubblica francese. Il bando richiede di
                  dimostrare la conformità integrata a GDPR, NIS2 e AI Act entro{" "}
                  <strong>novanta giorni</strong> dall'aggiudicazione. Il cliente non ha
                  mai affrontato i tre regolamenti in modo integrato.
                </p>
                <p>
                  <strong>Il problema.</strong> Lo studio dovrebbe condurre, in 90 giorni:
                  gap analysis sui tre regolamenti, classificazione dei sistemi AI in uso,
                  redazione policy, piano di adeguamento con priorità, dossier per la
                  stazione appaltante. Con il modello tradizionale, il mandato richiederebbe
                  un team dedicato di tre persone per tutto il periodo.
                </p>
              </div>

              {/* Week panel: 3 fasi su 8 settimane */}
              <div className="week-panel">
                <div className="agent-topbar" />
                <div className="mock-header">
                  <SemaphoreDots />
                  <div className="ide-slug">
                    case <span className="em">·</span> studio-legale://bando-eu-90gg
                  </div>
                  <div className="agent-status-live">running</div>
                </div>

                <div className="week-grid">
                  <div className="week-col">
                    <div className="week-marker">W1–2</div>
                    <div className="week-eyebrow">
                      Settimane 1–2 · ingestione + pre-classificazione
                    </div>
                    <h4>Documenti caricati, postura mappata.</h4>
                    <p>
                      Il cliente carica nello spazio dedicato i propri documenti: contratti
                      fornitori IT, policy interne, organigramma, documentazione dei
                      sistemi. EurocomplAI estrae le informazioni,{" "}
                      <strong>
                        identifica i sistemi AI in uso anche quando non dichiarati come
                        tali
                      </strong>
                      , classifica preliminarmente la postura sui tre regolamenti.
                    </p>
                  </div>
                  <div className="week-col">
                    <div className="week-marker">W3–4</div>
                    <div className="week-eyebrow">
                      Settimane 3–4 · Inspector + Probe
                    </div>
                    <h4>Interviste interne + fornitori esterni.</h4>
                    <p>
                      Inspector conduce le interviste con responsabile IT, HR, produzione e
                      direttore generale. Probe somministra ai fornitori IT critici del
                      cliente il questionario di conformità NIS2.{" "}
                      <strong>
                        Le evidenze tornano allo studio senza riunioni dirette.
                      </strong>
                    </p>
                  </div>
                  <div className="week-col">
                    <div className="week-marker">W5–8</div>
                    <div className="week-eyebrow">
                      Settimane 5–8 · bozze + dossier
                    </div>
                    <h4>Pacchetto integrato per la stazione appaltante.</h4>
                    <p>
                      EurocomplAI produce le bozze: gap analysis cross-regolazione, schede
                      AI Act, piano di adeguamento prioritizzato, dossier per la stazione
                      appaltante. Il senior rivede, il partner valida, lo studio conduce di
                      persona i passaggi strategici.{" "}
                      <strong>Dossier consegnato in tempo, commitment di team ridotto.</strong>
                    </p>
                  </div>
                </div>

                <div className="agent-statusbar">
                  <span>
                    mandato: <span className="ok">90 giorni</span> · 8 settimane effettive
                  </span>
                  <span className="amber">cross-reg: GDPR · NIS2 · AI Act</span>
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
                Perché studi legali scelgono EurocomplAI
              </div>
              <h2>
                Costruito per chi vende ore di expertise,{" "}
                <span className="accent">non ore di esecuzione</span>.
              </h2>

              <div className="reasons-list">
                <div className="reason-row">
                  <div className="reason-num">01</div>
                  <div className="reason-text">
                    <h4>
                      Riservatezza assoluta dei mandati e separazione per cliente.
                    </h4>
                    <p>
                      Ogni cliente dello studio ha il proprio spazio dati isolato dentro
                      EurocomplAI.{" "}
                      <strong>
                        Nessuna condivisione, nessuna contaminazione tra mandati.
                      </strong>{" "}
                      I dati dei clienti non vengono usati per addestrare modelli. Il
                      vostro Codice deontologico è rispettato by design.
                    </p>
                  </div>
                </div>
                <div className="reason-row">
                  <div className="reason-num">02</div>
                  <div className="reason-text">
                    <h4>
                      Linguaggio giuridico nativo, non interfaccia da compliance officer.
                    </h4>
                    <p>
                      Le bozze prodotte da EurocomplAI usano il registro che lo studio si
                      aspetta — riferimenti normativi precisi, motivazioni argomentate,
                      citazioni di provvedimenti del Garante o di sentenze pertinenti. I
                      documenti che riceve il senior associate sono il{" "}
                      <strong>punto di partenza per un mandato di studio legale</strong>,
                      non un template da personalizzare.
                    </p>
                  </div>
                </div>
                <div className="reason-row">
                  <div className="reason-num">03</div>
                  <div className="reason-text">
                    <h4>Pensato per i tre regolamenti come sistema, non come moduli.</h4>
                    <p>
                      Il valore consulenziale di uno studio sulla compliance europea è
                      proprio nel saper leggere insieme tre regolamenti che si
                      sovrappongono. EurocomplAI è costruito sulla stessa logica — un
                      asset register, cross-mapping automatico, valutazioni integrate. Le
                      bozze tengono insieme i tre fronti, riflettendo il modello mentale
                      che il vostro studio già usa.
                    </p>
                  </div>
                </div>
                <div className="reason-row">
                  <div className="reason-num">04</div>
                  <div className="reason-text">
                    <h4>
                      Costruito da chi la compliance la fa, non da chi la programma.
                    </h4>
                    <p>
                      Le bozze prodotte da EurocomplAI, le domande che pone Inspector, il
                      modo in cui struttura le valutazioni di rischio — sono la codifica
                      software di mandati consulenziali che inteGroup ha condotto a fianco
                      di studi legali italiani. Sono il prodotto di consulenti che usano
                      ogni giorno quello che hanno costruito.
                    </p>
                  </div>
                </div>
                <div className="reason-row">
                  <div className="reason-num">05</div>
                  <div className="reason-text">
                    <h4>Le vostre metodologie, scalate dal software.</h4>
                    <p>
                      EurocomplAI arriva con metodologie pronte all'uso. Ma potete
                      caricare playbook, template e schemi di valutazione vostri, e il
                      software li adotta come riferimento per estrazioni, audit Inspector
                      e Probe, generazione delle bozze.{" "}
                      <strong>La metodologia resta vostra. Lo strumento la scala.</strong>
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
                    <span>
                      Come garantite la riservatezza assoluta dei dati dei clienti?
                    </span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </summary>
                  <div className="faq-body">
                    <p>
                      I dati di ciascun mandato sono <strong>isolati per cliente</strong>.
                      EurocomplAI non aggrega, non condivide, non usa i dati per
                      addestrare modelli — né i propri né di terze parti. L'architettura è
                      progettata per separazione totale per spazio cliente, con audit log
                      delle operazioni eseguite dagli utenti dello studio.
                    </p>
                    <p>
                      Per studi che gestiscono mandati particolarmente sensibili — PA,
                      contenzioso del lavoro su dati di salute, M&amp;A con clausole di
                      confidenzialità rinforzate — il deployment{" "}
                      <strong>on-premise sull'infrastruttura dello studio</strong> è in
                      roadmap per il 2026.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary>
                    <span>
                      I deliverable prodotti hanno la qualità che il nostro studio si
                      aspetta?
                    </span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </summary>
                  <div className="faq-body">
                    <p>
                      Le bozze prodotte da EurocomplAI sono il{" "}
                      <strong>punto di partenza</strong> per il vostro lavoro, non il
                      prodotto finito. Il giudizio professionale, la valutazione
                      strategica, l'argomentazione che farà la differenza nella relazione
                      con il cliente o nel parere depositato — restano interamente nella
                      vostra responsabilità. EurocomplAI vi consegna un draft strutturato,
                      accurato e ancorato alle evidenze, che il senior associate può{" "}
                      <em>iterare</em> invece di scrivere da zero.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary>
                    <span>
                      Quanto tempo serve per integrare EurocomplAI nel nostro workflow?
                    </span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </summary>
                  <div className="faq-body">
                    <p>
                      L'onboarding di uno studio richiede{" "}
                      <strong>una o due settimane</strong>: configurazione degli spazi
                      cliente, formazione sui workflow tipici, primi mandati pilota con il
                      supporto del nostro team. Nessuna integrazione tecnica complessa con
                      i vostri sistemi — l'input avviene per caricamento documentale e
                      tramite Probe verso gli stakeholder esterni del cliente. Nessuna
                      apertura di perimetri di sicurezza, nessun coinvolgimento dell'IT
                      del cliente.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary>
                    <span>Quali studi vi hanno scelto fino a oggi?</span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </summary>
                  <div className="faq-body">
                    <p>
                      EurocomplAI è in early access, in piloti con un gruppo selezionato
                      di partner — inclusi studi legali di taglia media e specializzati.
                      Possiamo presentarvi conversazioni con managing partner che stanno
                      valutando o testando la piattaforma. Le credenziali consulenziali su
                      cui poggia il prodotto sono quelle di <strong>inteGroup</strong>,
                      attiva in mandati a fianco di studi legali italiani.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary>
                    <span>
                      Inspector è davvero capace di intervistare il management di un
                      cliente enterprise?
                    </span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </summary>
                  <div className="faq-body">
                    <p>
                      Inspector è progettato per condurre audit strutturati con personale
                      competente nel proprio dominio — responsabile IT, direttore HR,
                      responsabile di processo. Le domande sono adattate al ruolo, il
                      flusso si modifica in base alle risposte, e ogni intervista è sempre
                      disponibile in revisione dal partner dello studio prima che diventi
                      base per i deliverable.
                    </p>
                    <p>
                      <strong>
                        Inspector non sostituisce la presenza dello studio nelle riunioni
                        strategiche con il cliente.
                      </strong>{" "}
                      Lavora dove la presenza umana costa più di quanto rende — sulla
                      raccolta strutturata di evidenze operative.
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
                <div className="section-eyebrow">In action · Demo per studi legali</div>
                <h2>
                  Un mandato in corso, una scadenza di compliance per un cliente,{" "}
                  <span className="accent">un dossier di due diligence da consegnare</span>?
                </h2>
                <p className="section-sub">
                  Una demo di 30 minuti con qualcuno che ha lavorato a fianco di studi
                  legali italiani in mandati comparabili è il modo più rapido per capire
                  se EurocomplAI funziona nel vostro studio.
                </p>
                <div className="hero-ctas">
                  <Link href="/demo/" className="btn btn-primary">
                    Richiedi una demo per studi legali
                    <ArrowIcon />
                  </Link>
                  <a href="#" className="btn btn-ghost">
                    Scarica il profilo per studi legali
                  </a>
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
