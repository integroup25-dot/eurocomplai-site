import type { Metadata } from "next";
import Link from "next/link";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowIcon from "@/components/ArrowIcon";
import SemaphoreDots from "@/components/SemaphoreDots";

export const metadata: Metadata = {
  title: "Soluzioni per la sanità",
  description:
    "GDPR, NIS2, AI Act gestiti come un sistema unico. EurocomplAI è la piattaforma di compliance europea per aziende sanitarie, IRCCS, cliniche private e enti del SSN — con la profondità che la sanità richiede.",
  alternates: { canonical: "/soluzioni/sanita/" },
};

export default function SoluzioniSanitaPage() {
  return (
    <>
      <TopStrip label="SOLUZIONI · SANITÀ &amp; IRCCS" />
      <main>
        {/* HEADER + HERO (band-grid) */}
        <section className="band-grid">
          <div className="container">
            <Header ctaHref="/demo/" />

            <section className="page-hero">
              <div className="hero-eyebrow">Soluzioni per la sanità</div>
              <h1 className="page-h1">
                In sanità, la compliance non è un'opzione. Ma può smettere di essere{" "}
                <span className="accent">il collo di bottiglia</span>.
              </h1>
              <p className="page-hero-sub">
                EurocomplAI è la piattaforma di compliance europea per aziende sanitarie,
                IRCCS, cliniche private ed enti del Servizio Sanitario. Tre regolamenti che
                si sovrappongono — GDPR, NIS2, AI Act — gestiti come un sistema unico, con
                la profondità che la sanità richiede.
              </p>

              <div className="hero-ctas" style={{ marginBottom: 8 }}>
                <a href="#cta" className="btn btn-primary">
                  Richiedi una demo per la sanità
                  <ArrowIcon />
                </a>
                <Link href="/demo/" className="btn btn-ghost">
                  Scarica la checklist AI Act per strutture sanitarie
                </Link>
              </div>

              {/* Hero triad: 3 regolamenti, una piattaforma */}
              <div
                className="hero-triad"
                aria-label="Tre fronti normativi gestiti come un sistema unico"
              >
                <div className="triad-node">
                  <span className="triad-chip gdpr">GDPR art. 9</span>
                  <span className="triad-sub">Categorie particolari</span>
                </div>
                <div className="triad-node">
                  <span className="triad-chip aiact">AI Act · alto rischio · all. III</span>
                  <span className="triad-sub">Sistemi AI clinici</span>
                </div>
                <div className="triad-node">
                  <span className="triad-chip nis2">NIS2 · soggetti essenziali</span>
                  <span className="triad-sub">Infrastruttura digitale</span>
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
              <h2 className="multi-line">
                <span className="line">
                  Dati clinici. Sistemi AI diagnostici. Infrastruttura essenziale.
                </span>
                <span className="line">
                  Tre fronti normativi{" "}
                  <span className="accent">aperti contemporaneamente</span>.
                </span>
              </h2>
              <div className="section-body">
                <p>
                  Le organizzazioni sanitarie italiane sono oggi al centro di tre
                  trasformazioni regolatorie che agiscono sullo stesso oggetto — il dato del
                  paziente, il sistema clinico, l'infrastruttura digitale — da angolazioni
                  diverse.
                </p>
                <p>
                  Il <strong>GDPR</strong> con le specificità sui dati di categoria speciale,
                  gli articoli 9 e 32, le DPIA su trattamenti su larga scala. La{" "}
                  <strong>NIS2</strong> con gli obblighi di sicurezza informatica per le
                  strutture sanitarie classificate come soggetti essenziali. L'
                  <strong>AI Act</strong> con le restrizioni sui sistemi AI in ambito clinico
                  — diagnostica per immagini, triage, supporto decisionale, sistemi
                  predittivi.
                </p>
                <p>
                  Gestire questi tre fronti separatamente è inefficiente e costoso.
                  Affrontarli senza competenza tecnica operativa è rischioso: in sanità ogni
                  gap di conformità incrocia la sicurezza del paziente. EurocomplAI li lavora
                  in modo integrato, perché nella realtà di un'azienda ospedaliera si
                  sovrappongono ogni giorno, sullo stesso sistema, sullo stesso processo.
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
                Quattro fronti aperti.{" "}
                <span className="accent">Un sistema che li tiene insieme.</span>
              </h2>
              <p className="section-sub">
                Mandati ricorrenti nelle strutture sanitarie italiane, lavorati con la stessa
                pipeline cross-normativa.
              </p>

              <div className="scenarios-grid">
                {/* Scenario 1 — DPIA su sistemi AI clinici */}
                <div className="scenario-card">
                  <div className="scenario-meta">
                    <span className="num">01</span>
                    <span className="sep">/</span>
                    <span>Scenario</span>
                  </div>
                  <h3>DPIA su sistemi AI clinici</h3>
                  <p>
                    Avete adottato o state valutando un sistema AI di diagnostica, triage o
                    supporto decisionale. L'AI Act lo classifica ad alto rischio per
                    l'Allegato III; il GDPR richiede una DPIA per categorie particolari su
                    larga scala; il Regolamento dispositivi medici si applica in parallelo.
                  </p>
                  <p>
                    EurocomplAI conduce l'audit Inspector con il responsabile clinico e il
                    referente IT, classifica il sistema rispetto all'AI Act, produce una{" "}
                    <strong>DPIA e una FRIA integrate</strong>, identifica le sovrapposizioni
                    con MDR. Il documento che il DPO presenta al Direttore Generale è uno,
                    non tre.
                  </p>
                  <div className="scenario-regs">
                    <span className="chip gdpr">GDPR art. 9 · 35</span>
                    <span className="chip aiact">AI Act all. III</span>
                    <span
                      className="chip"
                      style={{
                        color: "var(--ink-3)",
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid var(--border-1)",
                      }}
                    >
                      MDR
                    </span>
                  </div>
                </div>

                {/* Scenario 2 — NIS2 strutture sanitarie */}
                <div className="scenario-card">
                  <div className="scenario-meta">
                    <span className="num">02</span>
                    <span className="sep">/</span>
                    <span>Scenario</span>
                  </div>
                  <h3>Adeguamento NIS2 per strutture sanitarie</h3>
                  <p>
                    Aziende sanitarie pubbliche e molte strutture private rientrano tra i{" "}
                    <strong>soggetti essenziali NIS2</strong>. Valutazione del rischio cyber,
                    misure tecniche e organizzative, notifica incidenti entro 24/72 ore,
                    governance della supply chain digitale.
                  </p>
                  <p>
                    EurocomplAI costruisce il sistema, non solo il documento. Inspector
                    audita le misure con il responsabile IT, Probe somministra ai fornitori
                    critici il questionario di conformità NIS2, EurocomplAI produce la gap
                    analysis ancorata alle evidenze e il piano di adeguamento con priorità
                    motivate. Il documento per ACN è il riflesso operativo della vostra
                    organizzazione.
                  </p>
                  <div className="scenario-regs">
                    <span className="chip nis2">NIS2 art. 21</span>
                    <span className="chip nis2">NIS2 art. 23</span>
                    <span className="chip gdpr">GDPR art. 32</span>
                  </div>
                </div>

                {/* Scenario 3 — Governance AI per IRCCS */}
                <div className="scenario-card">
                  <div className="scenario-meta">
                    <span className="num">03</span>
                    <span className="sep">/</span>
                    <span>Scenario</span>
                  </div>
                  <h3>Governance dell'AI per IRCCS e centri di ricerca</h3>
                  <p>
                    La ricerca clinica con sistemi AI solleva questioni che il consenso
                    informato non risolve: validazione dei modelli, gestione del bias,
                    sorveglianza umana, sovrapposizione tra AI Act e regolamenti sulla
                    sperimentazione, ruolo del comitato etico.
                  </p>
                  <p>
                    EurocomplAI affianca i responsabili della ricerca e i comitati etici.
                    Inspector intervista il principal investigator sui singoli protocolli,
                    EurocomplAI produce le <strong>valutazioni di conformità AI Act</strong>{" "}
                    per la sperimentazione, integra il quadro GDPR sui dati di salute,
                    restituisce documentazione strutturata pronta per il parere del comitato.
                  </p>
                  <div className="scenario-regs">
                    <span className="chip aiact">AI Act art. 6 · 14</span>
                    <span className="chip gdpr">GDPR art. 9 · 89</span>
                  </div>
                </div>

                {/* Scenario 4 — DPO esterno */}
                <div className="scenario-card">
                  <div className="scenario-meta">
                    <span className="num">04</span>
                    <span className="sep">/</span>
                    <span>Scenario</span>
                  </div>
                  <h3>DPO esterno e supporto operativo continuativo</h3>
                  <p>
                    Il DPO nella sanità non è una formalità — è una funzione che deve
                    funzionare. Risposte tempestive agli interessati, gestione data breach,
                    rapporti con il Garante, audit periodici, formazione del personale.
                  </p>
                  <p>
                    EurocomplAI dà al DPO l'infrastruttura operativa per fare il proprio
                    lavoro a scala: registro vivo dai documenti caricati, monitoraggio dei
                    sistemi AI in uso e in valutazione, bozze automatiche di risposta alle
                    istanze, dashboard del rischio cross-regolazione.{" "}
                    <strong>
                      Il DPO smette di rincorrere documenti e torna a presidiare.
                    </strong>
                  </p>
                  <div className="scenario-regs">
                    <span className="chip gdpr">GDPR art. 37–39</span>
                    <span className="chip aiact">AI Act</span>
                    <span className="chip nis2">NIS2</span>
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
                Uno scenario tipico in una{" "}
                <span className="accent">azienda ospedaliera</span>.
              </h2>

              <div className="disclaimer">
                Scenario illustrativo. I primi case study reali, basati sui piloti in corso,
                saranno pubblicati nei prossimi mesi.
              </div>

              <div className="section-body" style={{ maxWidth: 880 }}>
                <p>
                  <strong>Il contesto.</strong> Un'azienda ospedaliera del SSN sta valutando
                  l'adozione di un sistema AI per il supporto alla refertazione radiologica.
                  Fornito da un vendor internazionale, già CE marked come dispositivo medico,
                  in uso in altre strutture europee.
                </p>
                <p>
                  <strong>Il problema.</strong> La Direzione Strategica chiede al DPO e al
                  responsabile IT una valutazione integrata prima dell'acquisto: DPIA,
                  classificazione AI Act, valutazione NIS2 sull'integrazione PACS, parere del
                  comitato etico, allineamento MDR.{" "}
                  <strong>
                    Cinque documenti, tre uffici, tempi previsti due-tre mesi.
                  </strong>
                </p>
              </div>

              {/* Week panel: 3 settimane */}
              <div className="week-panel">
                <div className="agent-topbar" />
                <div className="mock-header">
                  <SemaphoreDots />
                  <div className="ide-slug">
                    case <span className="em">·</span> hospital-radio-ai
                  </div>
                  <div className="agent-status-live">running</div>
                </div>

                <div className="week-grid">
                  <div className="week-col">
                    <div className="week-marker">W1</div>
                    <div className="week-eyebrow">
                      Settimana 1 · ingestione + classificazione
                    </div>
                    <h4>Documenti caricati, sistema pre-classificato.</h4>
                    <p>
                      Il responsabile IT carica documentazione tecnica, contratto vendor,
                      certificazione CE e architettura PACS. EurocomplAI estrae,
                      pre-classifica come <strong>alto rischio AI Act all. III</strong>,
                      identifica le sovrapposizioni con MDR, prepara la scheda preliminare.
                    </p>
                  </div>
                  <div className="week-col">
                    <div className="week-marker">W2</div>
                    <div className="week-eyebrow">Settimana 2 · audit Inspector</div>
                    <h4>Tre interviste condotte in parallelo.</h4>
                    <p>
                      Inspector conduce in autonomia: con il primario di Radiologia sull'uso
                      clinico e la sorveglianza medica, con il responsabile IT sulla
                      sicurezza dell'integrazione, con il responsabile del trattamento sui
                      dati paziente. Evidenze raccolte e ancorate.
                    </p>
                  </div>
                  <div className="week-col">
                    <div className="week-marker">W3</div>
                    <div className="week-eyebrow">Settimana 3 · bozze + validazione</div>
                    <h4>Pacchetto integrato per la Direzione.</h4>
                    <p>
                      EurocomplAI produce le bozze: DPIA con FRIA, gap analysis NIS2
                      sull'integrazione PACS, scheda MDR-AI Act. Il DPO rivede, il legale
                      valida, il primario approva.{" "}
                      <strong>
                        Due-tre mesi previsti, poco più di trenta giorni effettivi.
                      </strong>
                    </p>
                  </div>
                </div>

                <div className="agent-statusbar">
                  <span>
                    traceability: <span className="ok">on</span> · 3 audit · 47 evidenze
                  </span>
                  <span className="amber">cross-reg: GDPR · NIS2 · AI Act · MDR</span>
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
                Perché organizzazioni sanitarie scelgono EurocomplAI
              </div>
              <h2>
                Costruito per chi <span className="accent">non può permettersi errori</span>
                .
              </h2>

              <div className="reasons-list">
                <div className="reason-row">
                  <div className="reason-num">01</div>
                  <div className="reason-text">
                    <h4>Dati clinici trattati con il livello di cura che richiedono.</h4>
                    <p>
                      EurocomplAI non si connette ai vostri sistemi clinici interni. L'input
                      avviene per caricamento consapevole di documenti, batch strutturati,
                      risposte raccolte via Probe — sempre controllato dal vostro team.{" "}
                      <strong>
                        Il CISO non apre perimetri di sicurezza, il DPO sa esattamente cosa
                        il software sta elaborando.
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="reason-row">
                  <div className="reason-num">02</div>
                  <div className="reason-text">
                    <h4>Linguaggio sanitario nativo, non template generico.</h4>
                    <p>
                      Inspector adatta le domande al ruolo — al primario chiede del giudizio
                      clinico, all'IT dell'integrazione tecnica, al farmacista della
                      gestione dei dispositivi. Le bozze usano terminologia e motivazioni
                      che reggono in un'ispezione del Garante o di ACN.
                    </p>
                  </div>
                </div>
                <div className="reason-row">
                  <div className="reason-num">03</div>
                  <div className="reason-text">
                    <h4>Pensato per la sovrapposizione tra GDPR, NIS2, AI Act e MDR.</h4>
                    <p>
                      In sanità nessun trattamento, sistema o asset ricade sotto un solo
                      regolamento. EurocomplAI ha un'architettura cross-regolazione nativa —
                      un asset register, valutazioni integrate, cross-mapping automatico. Le
                      bozze tengono insieme i quattro fronti, invece di trattarli come
                      progetti paralleli.
                    </p>
                  </div>
                </div>
                <div className="reason-row">
                  <div className="reason-num">04</div>
                  <div className="reason-text">
                    <h4>Costruito da chi la compliance la fa, non da chi la programma.</h4>
                    <p>
                      Le bozze prodotte da EurocomplAI, le domande che pone Inspector, il
                      modo in cui struttura le valutazioni di rischio — sono la codifica
                      software di mandati consulenziali che inteGroup ha condotto in aziende
                      sanitarie e IRCCS reali. Sono il prodotto di consulenti che usano ogni
                      giorno quello che hanno costruito.
                    </p>
                  </div>
                </div>
                <div className="reason-row">
                  <div className="reason-num">05</div>
                  <div className="reason-text">
                    <h4>Le vostre metodologie, scalate dal software.</h4>
                    <p>
                      EurocomplAI arriva con metodologie pronte all'uso — DPIA, gap analysis
                      NIS2, classificazione AI Act, valutazione fornitori — costruite
                      sull'esperienza diretta di inteGroup. Ma potete caricare playbook,
                      template e schemi vostri, e il software li adotta.{" "}
                      <strong>La metodologia resta vostra. Lo strumento la scala.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ (band-grid, stessa banda, no transition) */}
            <div className="section" id="faq" style={{ paddingTop: 0 }}>
              <div className="section-eyebrow">Obiezioni e risposte</div>
              <h2>
                Le domande che ci fanno <span className="accent">più spesso</span>.
              </h2>

              <div className="faq-list">
                <details className="faq-item">
                  <summary>
                    <span>Avete clienti nel mondo sanitario di riferimento?</span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </summary>
                  <div className="faq-body">
                    <p>
                      EurocomplAI è in early access, in piloti con un gruppo selezionato di
                      partner sanitari. Le credenziali consulenziali su cui poggia sono
                      quelle di <strong>inteGroup</strong>, attiva in mandati con aziende
                      sanitarie e IRCCS. Possiamo presentarvi consulenti senior che hanno
                      condotto progetti analoghi in strutture comparabili alla vostra.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary>
                    <span>Come gestite i dati clinici dei pazienti?</span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </summary>
                  <div className="faq-body">
                    <p>
                      I dati clinici non lasciano il vostro perimetro a meno che non
                      scegliate consapevolmente di caricarli. L'input avviene per documenti
                      caricati dal vostro team o per risposte raccolte via Probe da
                      stakeholder esterni — non per connessioni automatizzate ai sistemi
                      clinici.
                    </p>
                    <p>
                      Per organizzazioni con requisiti di sovranità del dato — sanità
                      pubblica, dati genetici, ricerca su popolazioni vulnerabili — il
                      deployment{" "}
                      <strong>on-premise sull'infrastruttura del cliente</strong> è in
                      roadmap per il 2026.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary>
                    <span>Sostituisce il nostro DPO?</span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </summary>
                  <div className="faq-body">
                    <p>
                      No. EurocomplAI riduce il carico operativo del DPO — estrazione,
                      pre-popolamento, audit Inspector, bozze documentali — ma{" "}
                      <strong>il giudizio professionale resta nelle mani del DPO</strong>.
                      La nostra ipotesi è opposta a quella della sostituzione: un DPO che usa
                      EurocomplAI ha più tempo per il presidio strategico e la relazione con
                      la Direzione, non meno autonomia decisionale.
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary>
                    <span>Funziona anche per strutture sanitarie private piccole?</span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </summary>
                  <div className="faq-body">
                    <p>
                      Sì. Una clinica privata di media dimensione ha gli stessi obblighi
                      normativi di una grande azienda ospedaliera, ma senza il team
                      dedicato. EurocomplAI è particolarmente utile in questi contesti, dove
                      il DPO è esterno e buona parte del lavoro va condotta a distanza con
                      il personale interno.{" "}
                      <strong>
                        Inspector conduce gli audit dove il consulente non può essere
                        fisicamente.
                      </strong>
                    </p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary>
                    <span>Quanto costa rispetto a un GRC tradizionale?</span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </summary>
                  <div className="faq-body">
                    <p>
                      In early access lavoriamo con un modello commerciale flessibile, in
                      funzione del perimetro di copertura e del numero di sistemi gestiti.
                      Il confronto rilevante non è il costo del software in sé, ma il{" "}
                      <strong>costo totale della compliance</strong> — incluse le ore
                      consulenziali oggi necessarie. Una conversazione di 30 minuti
                      chiarisce il quadro per il vostro caso.
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
                <div className="section-eyebrow">In action · Demo per la sanità</div>
                <h2>
                  Una scadenza NIS2, una DPIA su un sistema AI,{" "}
                  <span className="accent">un mandato ricorrente</span>?
                </h2>
                <p className="section-sub">
                  Una demo di 30 minuti con qualcuno che ha gestito mandati di compliance in
                  strutture sanitarie è il modo più rapido per capire se EurocomplAI
                  funziona nel vostro contesto.
                </p>
                <div className="hero-ctas">
                  <Link href="/demo/" className="btn btn-primary">
                    Richiedi una demo per la sanità
                    <ArrowIcon />
                  </Link>
                  <Link href="/demo/" className="btn btn-ghost">
                    Scarica la checklist AI Act
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
