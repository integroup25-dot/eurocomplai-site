import type { Metadata } from "next";
import Link from "next/link";
import TopStrip from "@/components/TopStrip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowIcon from "@/components/ArrowIcon";
import SemaphoreDots from "@/components/SemaphoreDots";

export const metadata: Metadata = {
  title: "Soluzioni per la PA",
  description:
    "EurocomplAI è la piattaforma di compliance europea per pubbliche amministrazioni, enti locali, agenzie e enti strumentali. GDPR, NIS2 e AI Act gestiti come un sistema unico, con la profondità che il perimetro pubblico richiede.",
  alternates: { canonical: "/soluzioni/pa/" },
};

export default function SoluzioniPaPage() {
  return (
    <>
      <TopStrip label="SOLUZIONI · PA & ENTI PUBBLICI" />
      <main>
        {/* HEADER + HERO (band-grid) */}
        <section className="band-grid">
          <div className="container">
            <Header ctaHref="/demo/" />

            <section className="page-hero">
              <div className="hero-eyebrow">Soluzioni per la PA</div>
              <h1 className="page-h1">
                Nella PA, la conformità non si negozia. Ma può smettere di{" "}
                <span className="accent">consumare le risorse</span> di chi la deve garantire.
              </h1>
              <p className="page-hero-sub">
                EurocomplAI è la piattaforma di compliance europea per pubbliche amministrazioni, enti locali, agenzie ed enti strumentali. GDPR, NIS2 e AI Act gestiti come un sistema unico, con la profondità che il perimetro pubblico richiede.
              </p>

              <div className="hero-ctas" style={{ marginBottom: "8px" }}>
                <Link href="/demo/" className="btn btn-primary">
                  Richiedi una demo per la PA
                  <ArrowIcon />
                </Link>
                <a href="#" className="btn btn-ghost">Scarica la checklist FRIA per enti pubblici</a>
              </div>

              {/* Hero workflow: 3 oggetti che la PA deve presidiare */}
              <div className="flow-strip three" aria-label="Tre fronti, una sola amministrazione">
                <div className="flow-step">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1z" />
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <path d="M9 12h6" />
                      <path d="M9 16h4" />
                    </svg>
                  </div>
                  <div className="flow-label">Procedimento amministrativo</div>
                  <div className="flow-meta">istruttoria · atti</div>
                </div>
                <div className="flow-step">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="6" rx="2" />
                      <rect x="3" y="15" width="18" height="6" rx="2" />
                      <line x1="7" y1="6" x2="7" y2="6" />
                      <line x1="7" y1="18" x2="7" y2="18" />
                      <line x1="11" y1="6" x2="17" y2="6" />
                      <line x1="11" y1="18" x2="17" y2="18" />
                    </svg>
                  </div>
                  <div className="flow-label">Sistema informativo</div>
                  <div className="flow-meta">infrastruttura · IT</div>
                </div>
                <div className="flow-step">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="flow-label">Servizio al cittadino</div>
                  <div className="flow-meta">front-office · accesso</div>
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
                <span className="line">Servizi al cittadino digitalizzati. Sistemi AI nei procedimenti. Infrastrutture essenziali.</span>
                <span className="line">Tre fronti normativi, una sola amministrazione che <span className="accent">li deve presidiare</span>.</span>
              </h2>
              <div className="section-body">
                <p>Le pubbliche amministrazioni italiane gestiscono oggi una sovrapposizione regolatoria che agisce sullo stesso oggetto — il dato del cittadino, il procedimento amministrativo, l'infrastruttura digitale — secondo logiche diverse e con vincoli che il settore privato non ha.</p>
                <p>Il GDPR con l'obbligo di DPIA per i trattamenti pubblici ad alto rischio, le specificità sulle categorie particolari nei servizi sociali e sanitari, il principio di non discriminazione algoritmica. La NIS2 con la designazione degli enti pubblici come soggetti essenziali per molti servizi al cittadino, le notifiche ad ACN, gli obblighi di governance della supply chain digitale. L'AI Act con le restrizioni sui sistemi AI nei procedimenti — scoring per benefici sociali, sistemi predittivi nella sicurezza pubblica, chatbot e assistenti virtuali.</p>
                <p>A questi si aggiungono i vincoli operativi della PA: dipendenza da fornitori selezionati tramite gara, budget pluriennale che impatta i tempi di adeguamento, integrazione con sistemi consolidati e difficilmente sostituibili, <strong>responsabilità dirigenziale personale</strong> del responsabile del trattamento. EurocomplAI è progettato tenendo conto di tutto questo, non come prodotto generico adattato al pubblico.</p>
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
              <h2>Quattro fronti aperti. <span className="accent">Una sola pipeline cross-normativa.</span></h2>
              <p className="section-sub">Mandati ricorrenti nelle amministrazioni italiane, lavorati con la stessa profondità di un mandato di studio.</p>

              <div className="scenarios-grid">

                {/* Scenario 1 */}
                <div className="scenario-card">
                  <div className="scenario-meta">
                    <span className="num">01</span><span className="sep">/</span><span>Scenario</span>
                  </div>
                  <h3>FRIA su sistemi AI nei procedimenti amministrativi</h3>
                  <p>La valutazione di impatto sui diritti fondamentali è <strong>obbligatoria per i deployer pubblici</strong> che adottano sistemi AI ad alto rischio. Scoring per benefici sociali, analisi predittiva per la sicurezza, supporto decisionale ai procedimenti, gestione documentale automatica.</p>
                  <p>EurocomplAI conduce l'audit Inspector con il responsabile del procedimento e con il referente tecnico, classifica il sistema rispetto all'AI Act, produce una <strong>FRIA integrata con la DPIA GDPR</strong>, identifica le sovrapposizioni con i principi di trasparenza amministrativa e non discriminazione algoritmica.</p>
                  <div className="scenario-regs">
                    <span className="chip aiact">AI Act art. 27 (FRIA)</span>
                    <span className="chip gdpr">GDPR art. 35</span>
                    <span className="chip" style={{ color: "var(--ink-3)", background: "rgba(255,255,255,0.025)", border: "1px solid var(--border-1)" }}>Trasparenza · FOIA</span>
                  </div>
                </div>

                {/* Scenario 2 */}
                <div className="scenario-card">
                  <div className="scenario-meta">
                    <span className="num">02</span><span className="sep">/</span><span>Scenario</span>
                  </div>
                  <h3>Adeguamento NIS2 per enti pubblici come soggetti essenziali</h3>
                  <p>Enti pubblici che gestiscono servizi essenziali — sanità pubblica, trasporti, fornitura idrica, gestione rifiuti, anagrafe — rientrano tra i <strong>soggetti essenziali NIS2</strong>. Valutazione del rischio cyber, misure tecniche e organizzative, notifica ad ACN entro 24/72 ore, governance fornitori IT.</p>
                  <p>EurocomplAI parte dai documenti che la PA già produce — cataloghi applicativi, mappature procedimenti, contratti fornitori — e li traduce in una <strong>gap analysis NIS2 strutturata</strong>. Probe somministra ai fornitori IT critici il questionario di conformità. Bozze pronte per il responsabile della transizione digitale.</p>
                  <div className="scenario-regs">
                    <span className="chip nis2">NIS2 art. 21</span>
                    <span className="chip nis2">NIS2 art. 23</span>
                    <span className="chip" style={{ color: "var(--ink-3)", background: "rgba(255,255,255,0.025)", border: "1px solid var(--border-1)" }}>ACN</span>
                  </div>
                </div>

                {/* Scenario 3 */}
                <div className="scenario-card">
                  <div className="scenario-meta">
                    <span className="num">03</span><span className="sep">/</span><span>Scenario</span>
                  </div>
                  <h3>DPO esterno per enti pubblici di piccola e media dimensione</h3>
                  <p>Il DPO nella PA è una funzione obbligatoria, ma molti enti pubblici di piccola e media dimensione affidano il ruolo all'esterno. La sfida è garantire una <strong>presenza operativa reale</strong> — risposte agli interessati, gestione data breach, audit periodici, formazione — quando la presenza fisica è limitata.</p>
                  <p>EurocomplAI dà al DPO esterno l'infrastruttura per fare il proprio lavoro a distanza: registro vivo dai documenti caricati dall'ente, bozze di risposta alle istanze degli interessati, audit Inspector condotti con i responsabili di procedimento senza richiedere trasferte, dashboard di rischio condivisa con il responsabile del trattamento.</p>
                  <div className="scenario-regs">
                    <span className="chip gdpr">GDPR art. 37–39</span>
                    <span className="chip" style={{ color: "var(--ink-3)", background: "rgba(255,255,255,0.025)", border: "1px solid var(--border-1)" }}>DPO esterno</span>
                  </div>
                </div>

                {/* Scenario 4 */}
                <div className="scenario-card">
                  <div className="scenario-meta">
                    <span className="num">04</span><span className="sep">/</span><span>Scenario</span>
                  </div>
                  <h3>Governance dei sistemi AI in adozione</h3>
                  <p>Molte amministrazioni stanno valutando sistemi AI per finalità diverse — chatbot per il front-office digitale, triage delle istanze, supporto al protocollo, scoring per la valutazione dei procedimenti. Ogni adozione apre questioni sovrapposte: classificazione AI Act, FRIA, trasparenza, bias, responsabilità in caso di errore algoritmico.</p>
                  <p>EurocomplAI affianca l'amministrazione <strong>prima dell'adozione</strong>: classificazione preliminare, identificazione degli obblighi del deployer pubblico, raccolta strutturata della documentazione del fornitore, predisposizione del fascicolo decisionale. La giunta riceve un dossier integrato, non quattro pareri separati.</p>
                  <div className="scenario-regs">
                    <span className="chip aiact">AI Act all. III</span>
                    <span className="chip gdpr">GDPR</span>
                    <span className="chip" style={{ color: "var(--ink-3)", background: "rgba(255,255,255,0.025)", border: "1px solid var(--border-1)" }}>Bias · Trasparenza</span>
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
              <h2>Uno scenario tipico in <span className="accent">un'amministrazione comunale</span>.</h2>

              <div className="disclaimer">
                Scenario illustrativo. I primi case study reali, basati sui piloti in corso, saranno pubblicati nei prossimi mesi.
              </div>

              <div className="section-body" style={{ maxWidth: "880px" }}>
                <p><strong>Il contesto.</strong> Un Comune di medie dimensioni del nord Italia sta valutando l'adozione di un sistema AI per lo <strong>scoring delle richieste di accesso a benefici sociali</strong>. Il sistema viene fornito da un'azienda italiana del settore PA, è già in uso in altri comuni e dovrebbe ridurre i tempi di istruttoria.</p>
                <p><strong>Il problema.</strong> Responsabile servizi sociali, responsabile della transizione digitale e DPO esterno devono valutare l'adozione nel rispetto di AI Act (alto rischio per scoring benefici), GDPR (FRIA obbligatoria) e NIS2. <strong>Il responsabile del trattamento risponde personalmente della decisione.</strong> Tempi di gara stringenti, consiglio comunale tra sessanta giorni.</p>
              </div>

              {/* Week panel */}
              <div className="week-panel">
                <div className="agent-topbar"></div>
                <div className="mock-header">
                  <SemaphoreDots />
                  <div className="ide-slug">case <span className="em">·</span> comune://scoring-benefici-sociali</div>
                  <div className="agent-status-live">running</div>
                </div>

                <div className="week-grid">
                  <div className="week-col">
                    <div className="week-marker">W1–2</div>
                    <div className="week-eyebrow">Settimane 1–2 · ingestione + classificazione</div>
                    <h4>Documenti caricati, sistema pre-classificato.</h4>
                    <p>Il responsabile della transizione digitale carica documentazione tecnica del vendor, capitolato di gara, linee guida AgID applicabili, documentazione interna sui servizi sociali. EurocomplAI estrae, classifica come <strong>alto rischio AI Act all. III</strong>, identifica gli obblighi del deployer pubblico, prepara la scheda preliminare.</p>
                  </div>
                  <div className="week-col">
                    <div className="week-marker">W3</div>
                    <div className="week-eyebrow">Settimana 3 · Inspector + Probe vendor</div>
                    <h4>Tre interviste interne + valutazione vendor.</h4>
                    <p>Inspector intervista responsabile servizi sociali (finalità d'uso), referente IT (integrazione gestionali), responsabile ufficio statistico (qualità dati e <strong>bias rispetto a categorie protette</strong>). Probe somministra al vendor il questionario di valutazione del fornitore. Evidenze ancorate.</p>
                  </div>
                  <div className="week-col">
                    <div className="week-marker">W4–6</div>
                    <div className="week-eyebrow">Settimane 4–6 · bozze + dossier per il consiglio</div>
                    <h4>Fascicolo decisionale integrato.</h4>
                    <p>EurocomplAI produce: FRIA integrata con DPIA, valutazione di conformità al principio di non discriminazione algoritmica, gap analysis NIS2, scheda di trasparenza per il sito istituzionale. DPO rivede, responsabile del trattamento valida, avvocatura conferma. <strong>Cinque settimane effettive contro due mesi pieni.</strong></p>
                  </div>
                </div>

                <div className="agent-statusbar">
                  <span>tempo gara: <span className="ok">60 giorni</span> · 5 settimane effettive</span>
                  <span className="amber">FRIA · DPIA · gap NIS2 · trasparenza</span>
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
              <div className="section-eyebrow">Perché amministrazioni scelgono EurocomplAI</div>
              <h2>Costruito per il perimetro pubblico, <span className="accent">non per il privato adattato</span>.</h2>

              <div className="reasons-list">
                <div className="reason-row">
                  <div className="reason-num">01</div>
                  <div className="reason-text">
                    <h4>Controllo totale del perimetro dei dati.</h4>
                    <p>EurocomplAI non si connette ai vostri sistemi informativi interni. L'input avviene per caricamento consapevole di documenti da parte del personale dell'ente e per risposte raccolte via Probe. <strong>Nessuna apertura di perimetri di sicurezza, nessuna review IT che blocca il deployment per mesi.</strong> Il vostro responsabile della transizione digitale sa esattamente cosa il software sta elaborando.</p>
                  </div>
                </div>
                <div className="reason-row">
                  <div className="reason-num">02</div>
                  <div className="reason-text">
                    <h4>Linguaggio amministrativo nativo, non template aziendale.</h4>
                    <p>I template di compliance generalisti parlano la lingua del settore privato. EurocomplAI riconosce procedimenti amministrativi, unità organizzative, ruoli dirigenziali, vincoli di trasparenza FOIA e accesso civico, specificità della responsabilità del trattamento nel settore pubblico. <strong>Le bozze sono direttamente utilizzabili nei circuiti decisionali interni dell'ente.</strong></p>
                  </div>
                </div>
                <div className="reason-row">
                  <div className="reason-num">03</div>
                  <div className="reason-text">
                    <h4>Pensato per FRIA, GDPR e AI Act come quadro integrato.</h4>
                    <p>Nel settore pubblico, FRIA, DPIA e classificazione AI Act non sono documenti separati: si leggono insieme nel fascicolo decisionale che il dirigente porta in giunta. EurocomplAI è costruito su questa integrazione — un registro condiviso, valutazioni che si parlano, cross-mapping automatico delle sovrapposizioni.</p>
                  </div>
                </div>
                <div className="reason-row">
                  <div className="reason-num">04</div>
                  <div className="reason-text">
                    <h4>Costruito da chi la compliance la fa, non da chi la programma.</h4>
                    <p>Le bozze, le domande di Inspector, le valutazioni di rischio — sono la codifica software di mandati consulenziali che inteGroup ha condotto presso PA centrali e locali, aziende sanitarie pubbliche, enti strumentali. Sono il prodotto di consulenti che usano ogni giorno quello che hanno costruito, <strong>in contesti dove la responsabilità dirigenziale personale è in gioco.</strong></p>
                  </div>
                </div>
                <div className="reason-row">
                  <div className="reason-num">05</div>
                  <div className="reason-text">
                    <h4>Le vostre metodologie e linee guida AgID, scalate dal software.</h4>
                    <p>EurocomplAI arriva con metodologie pronte all'uso — DPIA, FRIA, gap analysis NIS2, classificazione AI Act, valutazione fornitori. Ma potete caricare playbook, schemi di valutazione interni e <strong>le linee guida AgID che già adottate</strong>, e il software li userà come riferimento. La metodologia resta vostra. Lo strumento la scala.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* FAQ */}
            <div className="section" id="faq" style={{ paddingTop: 0 }}>
              <div className="section-eyebrow">Obiezioni e risposte</div>
              <h2>Le domande che ci fanno <span className="accent">più spesso</span>.</h2>

              <div className="faq-list">

                <details className="faq-item">
                  <summary>
                    <span>Come si gestisce l'acquisto in regime di appalto pubblico?</span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" /></svg>
                  </summary>
                  <div className="faq-body">
                    <p>EurocomplAI può essere acquistato tramite le procedure standard previste dal <strong>Codice degli Appalti</strong>, incluso il ricorso a strumenti Consip o ad accordi quadro disponibili. Per gli enti che lo richiedono, supportiamo direttamente la preparazione della documentazione tecnica per la procedura di affidamento.</p>
                    <p>La struttura di pricing è progettata per essere <strong>prevedibile su base pluriennale</strong>, in coerenza con i vincoli di programmazione finanziaria della PA.</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary>
                    <span>Esistono soluzioni equivalenti nel mercato Consip o nei marketplace della PA?</span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" /></svg>
                  </summary>
                  <div className="faq-body">
                    <p>Nel marketplace della PA digitale e tra i fornitori Consip sono presenti diverse soluzioni di compliance, prevalentemente focalizzate sul GDPR. EurocomplAI si differenzia in due punti: la <strong>copertura integrata di GDPR, NIS2 e AI Act</strong> in un'unica piattaforma, e l'uso di agenti AI per l'audit Inspector e per la generazione delle bozze. Per organizzazioni con obblighi cross-regolazione e con sistemi AI in adozione, EurocomplAI risponde a esigenze che le piattaforme storiche non coprono.</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary>
                    <span>Come si integra con i sistemi gestionali della PA che già usiamo?</span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" /></svg>
                  </summary>
                  <div className="faq-body">
                    <p>Per scelta progettuale, EurocomplAI <strong>non si integra direttamente</strong> con i vostri sistemi gestionali — protocollo informatico, gestione documentale, sistemi di servizi sociali, anagrafe. L'input avviene per caricamento documentale di export consapevoli prodotti dal vostro personale e per risposte raccolte via Probe da fornitori e stakeholder esterni. Questo riduce drasticamente la complessità del deployment e mantiene sotto il vostro controllo cosa il software vede.</p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary>
                    <span>Funziona anche per piccoli Comuni ed enti strumentali?</span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" /></svg>
                  </summary>
                  <div className="faq-body">
                    <p>Sì. Gli enti pubblici di piccola e media dimensione hanno gli stessi obblighi normativi di una grande amministrazione, ma con risorse interne minori. EurocomplAI è particolarmente utile in questi contesti, perché permette al DPO esterno e al responsabile del trattamento di garantire la presenza operativa necessaria anche con un team interno ridotto. <strong>Inspector conduce gli audit con i responsabili di procedimento dove il consulente non può essere fisicamente presente.</strong></p>
                  </div>
                </details>

                <details className="faq-item">
                  <summary>
                    <span>Quali amministrazioni vi hanno già scelto?</span>
                    <svg className="faq-icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" /></svg>
                  </summary>
                  <div className="faq-body">
                    <p>EurocomplAI è in early access, in piloti con un gruppo selezionato di partner — inclusi enti pubblici di varia dimensione e configurazione. Possiamo presentarvi conversazioni con responsabili della transizione digitale e DPO esterni che stanno valutando o testando la piattaforma. Le credenziali consulenziali su cui poggia il prodotto sono quelle di <strong>inteGroup</strong>, attiva in mandati con la PA italiana.</p>
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
                <div className="section-eyebrow">In action · Demo per la PA</div>
                <h2>Una FRIA da redigere, un'adozione AI da valutare, <span className="accent">un adeguamento NIS2 da consegnare</span>?</h2>
                <p className="section-sub">Una demo di 30 minuti con qualcuno che ha lavorato in mandati di compliance presso pubbliche amministrazioni italiane è il modo più rapido per capire se EurocomplAI funziona nel vostro ente.</p>
                <div className="hero-ctas">
                  <Link href="/demo/" className="btn btn-primary">
                    Richiedi una demo per la PA
                    <ArrowIcon />
                  </Link>
                  <a href="#" className="btn btn-ghost">Scarica la checklist FRIA</a>
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
