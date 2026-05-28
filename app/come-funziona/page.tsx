import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import ArrowIcon from "@/components/ArrowIcon";
import SemaphoreDots from "@/components/SemaphoreDots";

export const metadata: Metadata = {
  title: "Come funziona",
  description:
    "Quattro agenti AI fanno il lavoro di base. Tu fai il giudizio. Estrazione, pre-popolamento, Inspector + Probe, generazione delle bozze — una pipeline cross-normativa, validata dal vostro team.",
  alternates: { canonical: "/come-funziona/" },
};

export default function ComeFunzionaPage() {
  return (
    <>
      <main>
        {/* HEADER + HERO (band-grid) */}
        <section className="band-grid">
          <div className="container">

            <section className="page-hero">
              <div className="hero-eyebrow">Come funziona EurocomplAI</div>
              <h1 className="page-h1">
                Quattro agenti AI fanno il lavoro di base.{" "}
                <span className="accent">Tu dai il giudizio.</span>
              </h1>
              <p className="page-hero-sub">
                EurocomplAI estrae le informazioni dai vostri documenti, pre-popola i
                registri a partire dai dati che decidete di caricare, conduce gli audit
                direttamente con il key personnel e con gli stakeholder esterni, e
                produce le bozze dei deliverable di compliance. Nessuna connessione ai
                vostri sistemi interni. Voi controllate cosa entra, voi prendete le
                decisioni che contano.
              </p>

              {/* 5-step flow compact */}
              <div
                className="flow-strip"
                aria-label="Flusso operativo: documenti, estrazione, inspector, bozza, validazione"
              >
                <div className="flow-step">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <path d="M14 3v6h6" />
                    </svg>
                  </div>
                  <div className="flow-label">Documenti</div>
                  <div className="flow-meta">input</div>
                </div>
                <div className="flow-step">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4 8h10" />
                      <path d="M11 5l3 3-3 3" />
                      <rect x="4" y="14" width="16" height="6" rx="1" />
                    </svg>
                  </div>
                  <div className="flow-label">Estrazione</div>
                  <div className="flow-meta">agent.extract</div>
                </div>
                <div className="flow-step active">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <div className="flow-label">Inspector</div>
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
                  <div className="flow-label">Bozza</div>
                  <div className="flow-meta">agent.generate</div>
                </div>
                <div className="flow-step">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
                    </svg>
                  </div>
                  <div className="flow-label">Validazione</div>
                  <div className="flow-meta">human</div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* COSA CAMBIA (band-deep) */}
        <section className="band-deep">
          <div className="container narrow">
            <div className="section" id="cosa-cambia">
              <div className="section-eyebrow">La visione</div>
              <h2>
                Cosa cambia rispetto a un{" "}
                <span className="accent">GRC tradizionale</span>.
              </h2>
              <p className="section-sub">
                Quattro confronti, una sola direzione: dal data entry al giudizio.
              </p>

              <div className="compare-rows">
                <div className="compare-row">
                  <div className="compare-left">
                    Compilare il registro dei trattamenti campo per campo
                  </div>
                  <div className="compare-arrow">→</div>
                  <div className="compare-right">
                    Estrarre trattamenti, basi giuridiche, ruoli, fornitori dai vostri
                    contratti.
                  </div>
                </div>
                <div className="compare-row">
                  <div className="compare-left">
                    Inserire a mano ogni fornitore, asset, sistema AI
                  </div>
                  <div className="compare-arrow">→</div>
                  <div className="compare-right">
                    Pre-popolare dalle anagrafiche dei vostri sistemi.
                  </div>
                </div>
                <div className="compare-row">
                  <div className="compare-left">
                    Mandare in Excel il questionario di valutazione fornitore
                  </div>
                  <div className="compare-arrow">→</div>
                  <div className="compare-right">
                    Somministrare via Probe, raccogliere risposte normalizzate.
                  </div>
                </div>
                <div className="compare-row">
                  <div className="compare-left">
                    Tenere tre database paralleli per GDPR, NIS2, AI Act
                  </div>
                  <div className="compare-arrow">→</div>
                  <div className="compare-right">
                    Un'unica architettura cross-normativa, valutata una volta sola.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* LE 4 CAPACITÀ (band-grid) */}
        <section className="band-grid">
          <div className="container">

            {/* 01 ESTRAZIONE — mockup dx */}
            <div className="section" id="estrazione">
              <div className="split-2col">

                <div className="split-text">
                  <div className="split-meta">
                    <span className="num">01</span>
                    <span className="sep">/</span>
                    <span>Estrazione</span>
                  </div>
                  <h2>
                    EurocomplAI legge i vostri documenti come lo farebbe{" "}
                    <span className="accent">un consulente esperto</span>.
                  </h2>
                  <div className="body-block">
                    <p>
                      Caricate i contratti con i fornitori, le procedure interne, le
                      policy esistenti, i documenti di adozione di nuovi sistemi.
                      EurocomplAI legge, classifica, estrae. Non rileva parole chiave:
                      comprende contesti.
                    </p>
                    <p>
                      Distingue un titolare da un responsabile dalla forma del rapporto
                      contrattuale. Identifica le basi giuridiche dichiarate e quelle
                      implicite. Riconosce i sistemi AI in uso anche quando il contratto
                      non li nomina come tali.
                    </p>
                  </div>
                  <div className="in-pratica">
                    <div className="in-pratica-label">In pratica</div>
                    <p>
                      Un'azienda sanitaria carica i contratti con i propri quaranta
                      fornitori IT. In poche ore EurocomplAI restituisce: catalogo dei
                      trattamenti per fornitore, ruoli GDPR, sistemi AI integrati,
                      classificazione preliminare AI Act, clausole pertinenti.
                    </p>
                  </div>
                </div>

                {/* Mockup: estrazione completata */}
                <div className="split-mockup">
                  <div className="mock-panel">
                    <div className="agent-topbar" />
                    <div className="mock-header">
                      <SemaphoreDots />
                      <div className="ide-slug">
                        extract <span className="em">·</span> ingest://sanita-001
                      </div>
                      <div className="agent-status-live">processing</div>
                    </div>

                    <div className="doc-list">
                      <div className="doc-row">
                        <div className="doc-icon">
                          <svg viewBox="0 0 24 24">
                            <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                            <path d="M14 3v6h6" />
                          </svg>
                        </div>
                        <div className="doc-meta">
                          <div className="doc-name">contratto_acme-cloud.pdf</div>
                          <div className="doc-tag">contratto · 14 pag</div>
                        </div>
                        <div className="doc-status processed">processed</div>
                      </div>
                      <div className="doc-row">
                        <div className="doc-icon">
                          <svg viewBox="0 0 24 24">
                            <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                            <path d="M14 3v6h6" />
                          </svg>
                        </div>
                        <div className="doc-meta">
                          <div className="doc-name">policy_privacy_v3.docx</div>
                          <div className="doc-tag">policy · 8 pag</div>
                        </div>
                        <div className="doc-status processed">processed</div>
                      </div>
                      <div className="doc-row">
                        <div className="doc-icon">
                          <svg viewBox="0 0 24 24">
                            <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                            <path d="M14 3v6h6" />
                          </svg>
                        </div>
                        <div className="doc-meta">
                          <div className="doc-name">procedura_DPIA_refertazione.pdf</div>
                          <div className="doc-tag">procedura · 22 pag</div>
                        </div>
                        <div className="doc-status processing">parsing</div>
                      </div>
                      <div className="doc-row">
                        <div className="doc-icon">
                          <svg viewBox="0 0 24 24">
                            <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                            <path d="M14 3v6h6" />
                          </svg>
                        </div>
                        <div className="doc-meta">
                          <div className="doc-name">vendor_beta-hosting.pdf</div>
                          <div className="doc-tag">contratto · 6 pag</div>
                        </div>
                        <div className="doc-status review">review</div>
                      </div>
                    </div>

                    <div className="mock-progress">
                      <span className="num">
                        <span className="accent">84</span>/87 documenti
                      </span>
                      <div className="bar">
                        <div className="bar-fill" style={{ width: "96.6%" }} />
                      </div>
                      <span className="num">96%</span>
                    </div>

                    <div className="extract-summary">
                      <div className="extract-summary-label">Evidenze estratte</div>
                      <div className="extract-summary-grid">
                        <div className="extract-stat">
                          <div className="stat-num">312</div>
                          <div className="stat-label">trattamenti</div>
                        </div>
                        <div className="extract-stat">
                          <div className="stat-num">47</div>
                          <div className="stat-label">sistemi AI</div>
                        </div>
                        <div className="extract-stat">
                          <div className="stat-num">23</div>
                          <div className="stat-label">trasf. extra-UE</div>
                        </div>
                      </div>
                    </div>

                    <div className="agent-statusbar">
                      <span>
                        parser: <span className="ok">contextual-v3</span> · throughput:
                        12 doc/min
                      </span>
                      <span className="amber">agents: 4/4 active</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 02 PRE-POPOLAMENTO — mockup sx */}
            <div className="section" id="pre-popolamento">
              <div className="split-2col reverse">

                <div className="split-text">
                  <div className="split-meta">
                    <span className="num">02</span>
                    <span className="sep">/</span>
                    <span>Pre-popolamento</span>
                  </div>
                  <h2>
                    I registri non si compilano. <span className="accent">Si validano.</span>
                  </h2>
                  <div className="body-block">
                    <p>
                      Il registro dei trattamenti, l'inventario dei sistemi AI, il
                      catalogo degli asset critici NIS2 non sono fogli bianchi.
                      EurocomplAI parte dai dati che già esistono nella vostra
                      organizzazione — export del registro fornitori, estratto
                      dell'inventario IT, dump della directory aziendale — e popola le
                      anagrafiche su quella base.
                    </p>
                    <p>
                      Voi caricate quello che decidete di caricare. EurocomplAI elabora,
                      normalizza, struttura. Il compliance officer revisiona, corregge i
                      casi limite, valida.
                    </p>
                  </div>

                  <h3 className="sub-h3">
                    Perché solo documenti, non integrazioni dirette
                  </h3>
                  <div className="body-block">
                    <p>
                      Per scelta progettuale, EurocomplAI non si connette via API ai
                      vostri sistemi aziendali interni. Vi chiediamo invece export
                      documentali consapevoli. Il vostro CISO non apre perimetri di
                      sicurezza a un fornitore terzo; voi controllate cosa il software
                      vede; il deployment si misura in giorni, non in mesi.
                    </p>
                  </div>

                  <div className="in-pratica">
                    <div className="in-pratica-label">In pratica</div>
                    <p>
                      Una PA locale carica procedimenti, inventario applicativi,
                      organigramma. Il registro dei trattamenti si pre-popola in coerenza
                      con la realtà operativa dell'ente. Il DPO non presenta una bozza
                      alla giunta: presenta una mappatura.
                    </p>
                  </div>
                </div>

                {/* Mockup: registry table pre-popolata */}
                <div className="split-mockup">
                  <div className="mock-panel">
                    <div className="agent-topbar" />
                    <div className="mock-header">
                      <SemaphoreDots />
                      <div className="ide-slug">
                        registry <span className="em">·</span> trattamenti.pre-popolato
                      </div>
                      <div className="agent-status-count">populated</div>
                    </div>

                    <div className="upload-bar">
                      <span className="upload-chip">registro_fornitori.xlsx</span>
                      <span className="upload-chip">inventory_IT.csv</span>
                      <span className="upload-chip pending">organigramma.pdf</span>
                    </div>

                    <div className="reg-table">
                      <div className="reg-header">
                        <span>Trattamento</span>
                        <span>Base giuridica</span>
                        <span>Stato</span>
                      </div>
                      <div className="reg-row">
                        <span className="cell">Refertazione clinica</span>
                        <span className="cell mono">art. 9 §2(h)</span>
                        <span className="reg-status validated">validato</span>
                      </div>
                      <div className="reg-row">
                        <span className="cell">Gestione fornitori IT</span>
                        <span className="cell mono">art. 6 §1(b)</span>
                        <span className="reg-status validated">validato</span>
                      </div>
                      <div className="reg-row">
                        <span className="cell">Telemedicina (sistema AI)</span>
                        <span className="cell mono">art. 9 §2(h)</span>
                        <span className="reg-status review">da rivedere</span>
                      </div>
                      <div className="reg-row">
                        <span className="cell">Screening CV con AI</span>
                        <span className="cell mono">art. 6 §1(f)</span>
                        <span className="reg-status review">da rivedere</span>
                      </div>
                      <div className="reg-row">
                        <span className="cell">Newsletter marketing</span>
                        <span className="cell mono">art. 6 §1(a)</span>
                        <span className="reg-status draft">bozza</span>
                      </div>
                      <div className="reg-row">
                        <span className="cell">Sorveglianza accessi</span>
                        <span className="cell mono">art. 6 §1(c)</span>
                        <span className="reg-status validated">validato</span>
                      </div>
                    </div>

                    <div className="agent-statusbar">
                      <span>
                        3 fonti · 47 trattamenti ·{" "}
                        <span className="ok">31 validati</span>
                      </span>
                      <span className="amber">+ 16 da rivedere</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* 03 INSPECTOR — fullwidth, agents pair */}
            <div className="section section-fullwidth" id="inspector">

              <div className="fullwidth-head">
                <div className="split-meta">
                  <span className="num">03</span>
                  <span className="sep">/</span>
                  <span>Inspector</span>
                  <span
                    style={{
                      marginLeft: "8px",
                      color: "var(--accent)",
                      fontWeight: 500,
                    }}
                  >
                    · SIGNATURE
                  </span>
                </div>
                <h2>
                  L'audit guidato dagli agenti AI,{" "}
                  <span className="accent">dentro e fuori l'organizzazione</span>.
                </h2>
                <div className="body-block">
                  <p>
                    Inspector è la capacità che differenzia EurocomplAI dagli altri GRC.
                    È l'intervistatore che oggi siede in sala con il blocco di domande,
                    scalato a tutta l'organizzazione — e oltre. Funziona in due modalità:{" "}
                    <strong>Inspector</strong> intervista direttamente il key personnel;{" "}
                    <strong>Probe</strong> somministra il questionario che avete deciso
                    voi a stakeholder esterni. Stesso chassis, body diverso.
                  </p>
                </div>
              </div>

              <div className="agents-pair">

                {/* INSPECTOR */}
                <div>
                  <div className="agent-col-label">
                    <span className="num">3.1</span>
                    <span>Con il team operativo</span>
                  </div>
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
                          Sì, consenso esplicito del paziente + obbligo di legge (D.Lgs.
                          196).
                        </div>
                      </div>
                      <div className="bubble">
                        <div className="avatar agent-av">EA</div>
                        <div className="bubble-msg agent-msg">
                          Il sistema produce decisioni semi-automatizzate? Serve clausola
                          di sorveglianza umana.
                        </div>
                      </div>
                      <div className="evidence">
                        <div className="evidence-label">
                          Evidenza estratta · cross-mapping
                        </div>
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

                {/* PROBE */}
                <div>
                  <div className="agent-col-label">
                    <span className="num">3.2</span>
                    <span>Con stakeholder esterni</span>
                  </div>
                  <div className="agent">
                    <div className="agent-topbar" />
                    <div className="agent-floating-pill">
                      responses: <span className="num">12/14</span>
                    </div>
                    <div className="agent-header">
                      <SemaphoreDots />
                      <div className="ide-slug">
                        probe <span className="em">·</span> q://art28-fornitori
                      </div>
                      <div className="agent-status-count">synced</div>
                    </div>
                    <div className="agent-body-probe">
                      <div className="probe-title">
                        Valutazione fornitori IT{" "}
                        <span className="accent">· art. 28 GDPR</span>
                      </div>

                      <div className="probe-metric">
                        <div className="big">
                          12<span className="of">/14</span>
                        </div>
                        <div className="sub">
                          risposte normalizzate ·{" "}
                          <span className="accent">2 in attesa</span>
                          <br />
                          pronte a popolare il registro fornitori
                        </div>
                      </div>

                      <div className="probe-progress">
                        <div className="fill" />
                      </div>

                      <ul className="probe-list">
                        <li className="probe-row">
                          <div className="name-block">
                            <span className="recipient">Acme Cloud S.r.l.</span>
                            <span className="meta">· R-0014</span>
                          </div>
                          <span className="probe-chip received">received</span>
                        </li>
                        <li className="probe-row">
                          <div className="name-block">
                            <span className="recipient">Beta Hosting Group</span>
                            <span className="meta">· R-0018</span>
                          </div>
                          <span className="probe-chip received">received</span>
                        </li>
                        <li className="probe-row">
                          <div className="name-block">
                            <span className="recipient">Gamma IT Services</span>
                            <span className="meta">· R-0022</span>
                          </div>
                          <span className="probe-chip pending">pending</span>
                        </li>
                        <li className="probe-row">
                          <div className="name-block">
                            <span className="recipient">Delta Manufacturing</span>
                            <span className="meta">· R-0027</span>
                          </div>
                          <span className="probe-chip received">received</span>
                        </li>
                      </ul>
                      <div className="probe-more">
                        + <span className="accent">10</span> altri destinatari
                      </div>
                    </div>
                    <div className="agent-statusbar">
                      <span>
                        channel: link · normalization:{" "}
                        <span className="amber">ready</span>
                      </span>
                      <span>q://art28-001</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Tail */}
              <div className="section-tail">
                <div>
                  <h3 className="sub-h3">Tre cose che Inspector fa diversamente</h3>
                  <div className="body-block">
                    <p>
                      Adatta le domande al ruolo dell'intervistato — non chiede a un
                      medico cosa chiederebbe a un sistemista. Riconosce le risposte che
                      richiedono follow-up tecnico e quelle che invece chiudono un punto.
                      Sa quando fermarsi a chiedere un documento di evidenza e quando una
                      dichiarazione del responsabile è sufficiente.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="in-pratica" style={{ marginTop: "38px" }}>
                    <div className="in-pratica-label">In pratica</div>
                    <p>
                      Uno studio legale segue un mandato AI Act per un'azienda con sette
                      sistemi AI e quattordici fornitori IT. In una settimana: Inspector
                      intervista i sette process owner, Probe somministra ai quattordici
                      fornitori il questionario ex art. 28 caricato dallo studio. Sul
                      tavolo: sette report di audit interno e quattordici risposte
                      normalizzate. Il partner valida e firma.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* 04 GENERAZIONE — mockup sx */}
            <div className="section" id="generazione">
              <div className="split-2col reverse">

                <div className="split-text">
                  <div className="split-meta">
                    <span className="num">04</span>
                    <span className="sep">/</span>
                    <span>Generazione</span>
                  </div>
                  <h2>
                    Le bozze dei deliverable,{" "}
                    <span className="accent">pronte per la validazione</span>.
                  </h2>
                  <div className="body-block">
                    <p>
                      DPIA, FRIA, gap analysis NIS2, classificazioni AI Act, piani di
                      adeguamento, policy interne. EurocomplAI produce la prima versione
                      completa, motivata, ancorata alle evidenze raccolte nei passaggi
                      precedenti.
                    </p>
                    <p>
                      Ogni affermazione è riconducibile a una fonte — un documento
                      estratto, un dato dal registro, una risposta raccolta da Inspector.
                      Niente contenuto inventato. Niente template generico riempito con
                      il nome dell'azienda.
                    </p>
                  </div>
                  <div className="in-pratica">
                    <div className="in-pratica-label">In pratica</div>
                    <p>
                      Un'azienda introduce uno screening CV con AI. EurocomplAI ha già
                      estratto il contratto vendor, popolato la scheda nel registro AI
                      Act, condotto Inspector con HR. Restituisce una DPIA e una FRIA
                      integrate di trenta pagine: classificazione, trattamento, rischi,
                      sorveglianza umana, sezione bias e non discriminazione,
                      cross-mapping NIS2.
                    </p>
                  </div>
                </div>

                {/* Mockup: DPIA bozza generata */}
                <div className="split-mockup">
                  <div className="mock-panel">
                    <div className="agent-topbar" />
                    <div className="mock-header">
                      <SemaphoreDots />
                      <div className="ide-slug">
                        generate <span className="em">·</span>{" "}
                        dpia.draft://hr-cv-screening
                      </div>
                      <div className="agent-status-count">draft</div>
                    </div>

                    <div className="dpia-cover">
                      <div className="dpia-head">
                        <div>
                          <div className="dpia-title">DPIA — Screening CV con AI</div>
                          <div className="dpia-sub">
                            v1.0 · 2026-05-12 · DPO_validazione_pending
                          </div>
                        </div>
                        <span className="dpia-badge">AI-Generated · da validare</span>
                      </div>

                      <ul className="dpia-index">
                        <li className="done">
                          <span className="idx">01</span>
                          <span>Inquadramento del trattamento</span>
                          <svg className="tick" viewBox="0 0 16 16">
                            <path d="M3 8.5 L7 12 L13 5" />
                          </svg>
                        </li>
                        <li className="done">
                          <span className="idx">02</span>
                          <span>Classificazione AI Act</span>
                          <svg className="tick" viewBox="0 0 16 16">
                            <path d="M3 8.5 L7 12 L13 5" />
                          </svg>
                        </li>
                        <li className="done">
                          <span className="idx">03</span>
                          <span>Analisi dei rischi</span>
                          <svg className="tick" viewBox="0 0 16 16">
                            <path d="M3 8.5 L7 12 L13 5" />
                          </svg>
                        </li>
                        <li className="done">
                          <span className="idx">04</span>
                          <span>Sorveglianza umana</span>
                          <svg className="tick" viewBox="0 0 16 16">
                            <path d="M3 8.5 L7 12 L13 5" />
                          </svg>
                        </li>
                        <li className="done">
                          <span className="idx">05</span>
                          <span>Bias e non discriminazione</span>
                          <svg className="tick" viewBox="0 0 16 16">
                            <path d="M3 8.5 L7 12 L13 5" />
                          </svg>
                        </li>
                        <li className="done">
                          <span className="idx">06</span>
                          <span>Cross-mapping NIS2</span>
                          <svg className="tick" viewBox="0 0 16 16">
                            <path d="M3 8.5 L7 12 L13 5" />
                          </svg>
                        </li>
                        <li className="pending">
                          <span className="idx">07</span>
                          <span>Misure di mitigazione (in elaborazione)</span>
                          <svg className="tick" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="3.5" />
                          </svg>
                        </li>
                        <li className="pending">
                          <span className="idx">…</span>
                          <span>+ 7 sezioni in coda</span>
                          <svg className="tick" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="3.5" />
                          </svg>
                        </li>
                      </ul>

                      <div className="dpia-foot">
                        <span className="num">
                          sezioni completate <span className="accent">12</span>/14
                        </span>
                        <div className="bar">
                          <div className="bar-fill" style={{ width: "85.7%" }} />
                        </div>
                        <span className="num">86%</span>
                      </div>
                    </div>

                    <div className="agent-statusbar">
                      <span>
                        sources: <span className="ok">312 evidenze</span> · ancorate
                      </span>
                      <span className="amber">draft v1.0</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* METODOLOGIE E PLAYBOOK — mockup dx */}
            <div className="section" id="playbook">
              <div className="split-2col">

                <div className="split-text">
                  <div className="split-meta">
                    <span>Aperto al vostro modo di lavorare</span>
                  </div>
                  <h2>
                    Il software arriva pronto. Ma è il vostro modo di lavorare{" "}
                    <span className="accent">a comandare</span>.
                  </h2>
                  <div className="body-block">
                    <p>
                      EurocomplAI è preconfigurato con metodologie operative — esecuzione
                      DPIA, FRIA, gap analysis NIS2, classificazione AI Act, valutazione
                      fornitori, gestione incidenti. Sono il riferimento di default per
                      chi parte da zero.
                    </p>
                    <p>
                      Ma sono <strong>modificabili e sostituibili</strong>. Ogni studio
                      legale, ogni DPO senior, ogni azienda strutturata ha il proprio
                      modo di condurre una DPIA, di valutare un fornitore, di documentare
                      un incidente. EurocomplAI permette di caricare playbook
                      proprietari, template personalizzati, schemi di valutazione — e li
                      adotta come riferimento operativo per estrazioni, audit e
                      generazione delle bozze.
                    </p>
                  </div>
                  <div className="in-pratica">
                    <div className="in-pratica-label">In pratica</div>
                    <p>
                      Uno studio legale ha un proprio metodo di gap analysis NIS2. Lo
                      carica in EurocomplAI: Inspector conduce gli audit secondo quel
                      metodo, le bozze usano quello schema, quella terminologia, quelle
                      priorità. <strong>Il software non impone — adotta.</strong>
                    </p>
                  </div>
                </div>

                {/* Mockup: playbook stack */}
                <div className="split-mockup">
                  <div className="mock-panel">
                    <div className="agent-topbar" />
                    <div className="mock-header">
                      <SemaphoreDots />
                      <div className="ide-slug">
                        playbooks <span className="em">·</span> ws://studio-rossi
                      </div>
                      <div className="agent-status-count">active</div>
                    </div>

                    <div className="playbook-stack">
                      <div className="playbook-card default">
                        <div className="pb-meta">
                          <span>Metodo EurocomplAI · default</span>
                        </div>
                        <div className="pb-name">
                          Gap analysis NIS2 — schema standard
                        </div>
                        <div className="pb-detail">
                          14 sezioni · 6 categorie di controllo · sostituibile
                        </div>
                      </div>
                      <div className="playbook-card active">
                        <div className="pb-meta">
                          <span>Playbook Studio Rossi</span>
                          <span className="active-tag">attivo</span>
                        </div>
                        <div className="pb-name">
                          Gap analysis NIS2 — metodo Rossi v2.3
                        </div>
                        <div className="pb-detail">
                          18 sezioni · 7 categorie · priorità rischio-impatto · adottato
                          da Inspector + agent.generate
                        </div>
                      </div>
                    </div>

                    <div className="agent-statusbar">
                      <span>
                        playbook: <span className="ok">studio-rossi-v2.3</span>
                      </span>
                      <span className="amber">propagato: 4/4 agenti</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* COMPLIANCE INTEGRATA (band-deep) */}
        <section className="band-deep">
          <div className="container">
            <div className="section" id="compliance">

              <div className="split-2col">
                <div className="split-text">
                  <div className="section-eyebrow">Compliance integrata</div>
                  <h2>
                    Tre normative, un sistema. <span className="accent">Per davvero.</span>
                  </h2>
                  <div className="body-block">
                    <p>
                      I GRC tradizionali trattano GDPR, NIS2 e AI Act come moduli
                      separati. Apri il modulo GDPR, compili il registro. Apri il modulo
                      NIS2, ricominci da zero. Apri il modulo AI Act, ripopoli per la
                      terza volta. Tre database paralleli che parlano della stessa
                      azienda.
                    </p>
                    <p>
                      EurocomplAI è costruito su un'architettura cross-regolazione
                      nativa: un asset register, un'anagrafica fornitori, una mappa dei
                      sistemi — condivisi. Le valutazioni di rischio sono integrate: una
                      DPIA che intercetta un sistema AI clinico fa partire automaticamente
                      la FRIA, segnala l'eventuale rilevanza NIS2.
                    </p>
                  </div>

                  <h3 className="sub-h3">Il cross-mapping degli obblighi</h3>
                  <div className="body-block">
                    <p>
                      Quando entra in vigore un nuovo regolamento, gli obblighi che già
                      soddisfate non ripartono da zero. Una misura tecnica per GDPR Art.
                      32 copre parte degli obblighi NIS2 §21; una sorveglianza umana
                      definita per un sistema AI ad alto rischio vale anche come
                      sorveglianza GDPR Art. 22.{" "}
                      <strong>Mappiamo le sovrapposizioni, non vi facciamo riscrivere.</strong>
                    </p>
                  </div>

                  <h3 className="sub-h3">Il futuro che sta arrivando</h3>
                  <div className="body-block">
                    <p>
                      Data Governance Act, European Health Data Space, Cyber Resilience
                      Act, Data Act, Cyber Solidarity Act. La legislazione europea
                      continuerà ad aggiungere strati. L'architettura cross-regolazione
                      paga nel tempo: ogni nuovo regolamento si innesta sul sistema
                      esistente.
                    </p>
                  </div>
                </div>

                {/* Mockup: network graph */}
                <div className="split-mockup">
                  <div className="mock-panel">
                    <div className="agent-topbar" />
                    <div className="mock-header">
                      <SemaphoreDots />
                      <div className="ide-slug">
                        cross-mapping <span className="em">·</span> graph.v1
                      </div>
                      <div className="agent-status-count">mapped</div>
                    </div>

                    <div className="network-panel">
                      <svg
                        className="network-svg"
                        viewBox="0 0 380 280"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        {/* GDPR arcs */}
                        <path d="M70 70 Q 110 100, 150 130" stroke="#A78BFA" strokeWidth="1.4" opacity="0.7" />
                        <path d="M70 70 Q 90 120, 110 200" stroke="#A78BFA" strokeWidth="1.4" opacity="0.7" />
                        <path d="M70 70 Q 140 90, 200 110" stroke="#A78BFA" strokeWidth="1.4" opacity="0.7" />
                        {/* NIS2 arcs */}
                        <path d="M310 70 Q 270 100, 220 130" stroke="#22D3EE" strokeWidth="1.4" opacity="0.7" />
                        <path d="M310 70 Q 320 130, 290 210" stroke="#22D3EE" strokeWidth="1.4" opacity="0.7" />
                        <path d="M310 70 Q 250 90, 200 110" stroke="#22D3EE" strokeWidth="1.4" opacity="0.7" />
                        {/* AI Act arcs */}
                        <path d="M190 225 Q 165 200, 150 135" stroke="#FF7B8A" strokeWidth="1.4" opacity="0.7" />
                        <path d="M190 225 Q 215 200, 220 135" stroke="#FF7B8A" strokeWidth="1.4" opacity="0.7" />
                        <path d="M190 225 Q 190 170, 200 115" stroke="#FF7B8A" strokeWidth="1.4" opacity="0.7" />
                        {/* Overlap arcs */}
                        <path d="M150 135 Q 175 122, 200 112" stroke="#FFB020" strokeWidth="1.6" opacity="0.85" />
                        <path d="M200 112 Q 210 122, 220 135" stroke="#FFB020" strokeWidth="1.6" opacity="0.85" />
                        <path d="M150 135 Q 130 165, 110 200" stroke="#FFB020" strokeWidth="1.4" opacity="0.55" />

                        {/* Regulator nodes */}
                        <g transform="translate(60,60)">
                          <circle r="20" fill="rgba(167,139,250,0.10)" stroke="#A78BFA" strokeWidth="1.4" />
                          <text x="0" y="3.5" textAnchor="middle" fontFamily="Geist Mono" fontSize="10" fill="#A78BFA" fontWeight="500">GDPR</text>
                        </g>
                        <g transform="translate(320,60)">
                          <circle r="20" fill="rgba(34,211,238,0.10)" stroke="#22D3EE" strokeWidth="1.4" />
                          <text x="0" y="3.5" textAnchor="middle" fontFamily="Geist Mono" fontSize="10" fill="#22D3EE" fontWeight="500">NIS2</text>
                        </g>
                        <g transform="translate(190,235)">
                          <circle r="22" fill="rgba(255,123,138,0.10)" stroke="#FF7B8A" strokeWidth="1.4" />
                          <text x="0" y="-2" textAnchor="middle" fontFamily="Geist Mono" fontSize="9" fill="#FF7B8A" fontWeight="500">AI</text>
                          <text x="0" y="8" textAnchor="middle" fontFamily="Geist Mono" fontSize="9" fill="#FF7B8A" fontWeight="500">Act</text>
                        </g>

                        {/* Obligation nodes */}
                        <g transform="translate(150,135)">
                          <rect x="-44" y="-12" width="88" height="24" rx="6" fill="#121828" stroke="rgba(255,255,255,0.14)" />
                          <text x="0" y="3.5" textAnchor="middle" fontFamily="Geist Mono" fontSize="9" fill="#F4F6FB">Sorveglianza umana</text>
                        </g>
                        <g transform="translate(220,135)">
                          <rect x="-42" y="-12" width="84" height="24" rx="6" fill="#121828" stroke="rgba(255,255,255,0.14)" />
                          <text x="0" y="3.5" textAnchor="middle" fontFamily="Geist Mono" fontSize="9" fill="#F4F6FB">Misure di sicurezza</text>
                        </g>
                        <g transform="translate(200,110)">
                          <rect x="-38" y="-11" width="76" height="22" rx="6" fill="rgba(255,176,32,0.10)" stroke="#FFB020" strokeWidth="1.2" />
                          <text x="0" y="3.5" textAnchor="middle" fontFamily="Geist Mono" fontSize="9" fill="#FFB020" fontWeight="500">Asset register</text>
                        </g>
                        <g transform="translate(110,200)">
                          <rect x="-30" y="-11" width="60" height="22" rx="6" fill="#121828" stroke="rgba(255,255,255,0.14)" />
                          <text x="0" y="3.5" textAnchor="middle" fontFamily="Geist Mono" fontSize="9" fill="#F4F6FB">DPIA</text>
                        </g>
                        <g transform="translate(290,210)">
                          <rect x="-44" y="-12" width="88" height="24" rx="6" fill="#121828" stroke="rgba(255,255,255,0.14)" />
                          <text x="0" y="3.5" textAnchor="middle" fontFamily="Geist Mono" fontSize="9" fill="#F4F6FB">Incident reporting</text>
                        </g>
                      </svg>

                      <div className="network-legend">
                        <span className="legend-item leg-gdpr">GDPR</span>
                        <span className="legend-item leg-nis2">NIS2</span>
                        <span className="legend-item leg-aiact">AI Act</span>
                        <span className="legend-item leg-overlap">overlap</span>
                      </div>
                    </div>

                    <div className="agent-statusbar">
                      <span>
                        5 obblighi · <span className="ok">3 overlap mappati</span>
                      </span>
                      <span className="amber">pronto per: DGA · EHDS · CRA</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* FLUSSO END-TO-END (band-grid) */}
        <section className="band-grid">
          <div className="container">
            <div className="section" id="flusso">
              <div className="section-eyebrow">Il flusso operativo</div>
              <h2>
                Come si lavora <span className="accent">dentro EurocomplAI</span>.
              </h2>
              <p className="section-sub">
                Ogni step costruisce sul precedente, e l'intervento umano cresce mano a
                mano che il giudizio diventa rilevante.
              </p>

              <div className="flow-strip detailed">
                <div className="flow-step">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <path d="M17 8l-5-5-5 5" />
                      <path d="M12 3v12" />
                    </svg>
                  </div>
                  <div className="flow-label">Ingestione</div>
                  <div className="flow-meta">01 / input</div>
                  <div className="flow-body">
                    Caricate contratti, policy, procedure, registri legacy. EurocomplAI
                    estrae e organizza.
                  </div>
                </div>
                <div className="flow-step">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M3 15h18" />
                      <path d="M9 3v18" />
                      <path d="M15 3v18" />
                    </svg>
                  </div>
                  <div className="flow-label">Pre-popolamento</div>
                  <div className="flow-meta">02 / agent.populate</div>
                  <div className="flow-body">
                    EurocomplAI popola registri, inventari, cataloghi dagli export
                    consapevoli.
                  </div>
                </div>
                <div className="flow-step active">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <div className="flow-label">Inspector + Probe</div>
                  <div className="flow-meta">03 / running</div>
                  <div className="flow-body">
                    Approfondimento: Inspector intervista internamente, Probe somministra
                    al destinatario esterno.
                  </div>
                </div>
                <div className="flow-step">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                      <path d="M14 3v6h6" />
                      <path d="M9 13h6" />
                      <path d="M9 17h6" />
                    </svg>
                  </div>
                  <div className="flow-label">Generazione bozze</div>
                  <div className="flow-meta">04 / agent.generate</div>
                  <div className="flow-body">
                    DPIA, FRIA, gap analysis, piani di adeguamento — ancorati alle
                    evidenze.
                  </div>
                </div>
                <div className="flow-step">
                  <div className="flow-icon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M8.5 12.5l2.5 2.5 4.5-5" />
                    </svg>
                  </div>
                  <div className="flow-label">Validazione</div>
                  <div className="flow-meta">05 / human</div>
                  <div className="flow-body">
                    Aprite la bozza, correggete, approfondite. È qui che il vostro
                    mestiere fa la differenza.
                  </div>
                </div>
              </div>

              <div className="flow-note">
                <strong>Tempo del vostro team.</strong> Zero nei primi due step oltre al
                caricamento dei file, zero negli intermedi finché non arriva il report o
                la bozza, pieno solo nella validazione finale.
              </div>
            </div>

            {/* ARCHITETTURA E SICUREZZA (stessa band-grid, no transition) */}
            <div
              className="section"
              id="architettura"
              style={{ paddingTop: 0 }}
            >
              <div className="section-eyebrow">Architettura e sicurezza</div>
              <h2>
                Architettura e sicurezza —{" "}
                <span className="accent">dove siamo, dove stiamo andando</span>.
              </h2>

              <div className="arch-grid">
                <div className="arch-card">
                  <div className="arch-eyebrow">Dove vivono i dati</div>
                  <h4>Cloud · data center UE</h4>
                  <p>
                    Deployment cloud su data center in Unione Europea. On-premise /
                    private cloud per chi ha requisiti di residenza o sovranità.
                  </p>
                  <div className="arch-tag">
                    <span className="status-roadmap">roadmap</span> · pilot 2026
                  </div>
                </div>
                <div className="arch-card">
                  <div className="arch-eyebrow">Modelli AI</div>
                  <h4>Nessun training sui vostri dati</h4>
                  <p>
                    I dati dei clienti non vengono usati per addestrare modelli, né i
                    nostri né di terzi. Elaborazioni AI in contesti isolati per cliente,
                    log auditabili.
                  </p>
                  <div className="arch-tag">
                    <span className="status-active">attivo</span> · documentato
                  </div>
                </div>
                <div className="arch-card">
                  <div className="arch-eyebrow">Integrazioni</div>
                  <h4>Solo upload consapevoli</h4>
                  <p>
                    Niente API verso AD, HRIS, CRM, ITSM. Input via caricamento
                    documentale + batch + Probe. API in uscita in roadmap per
                    archiviazione bozze.
                  </p>
                  <div className="arch-tag">
                    <span className="status-active">attivo</span> · by design
                  </div>
                </div>
                <div className="arch-card">
                  <div className="arch-eyebrow">Certificazioni</div>
                  <h4>ISO 27001 · SOC 2 Type II</h4>
                  <p>
                    Roadmap di certificazione in progress. Nel frattempo: architettura
                    privacy-by-design e security-by-design documentata, DPA standard per
                    early access.
                  </p>
                  <div className="arch-tag">
                    <span className="status-roadmap">roadmap</span> · 2026–2027
                  </div>
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
                <div className="section-eyebrow">In action · Demo</div>
                <h2>
                  Vuoi vedere EurocomplAI{" "}
                  <span className="accent">sul vostro caso reale</span>?
                </h2>
                <p className="section-sub">
                  Una demo di 30 minuti con uno dei nostri solution engineer è il modo
                  più rapido per capire se EurocomplAI è quello che vi serve. La conduce
                  qualcuno che ha gestito mandati di compliance reali, non un account
                  executive.
                </p>
                <div className="hero-ctas">
                  <Link href="/demo/" className="btn btn-primary">
                    Richiedi una demo
                    <ArrowIcon />
                  </Link>
                  <a href="#capacita" className="btn btn-ghost">
                    Esplora gli scenari per il tuo settore
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
