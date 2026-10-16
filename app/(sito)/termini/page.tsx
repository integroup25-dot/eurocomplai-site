import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termini e Condizioni",
  description:
    "Condizioni Generali di Fornitura EurocomplAI v1.1 — Integroup S.r.l., Via Ippolito Nievo 11, 20145 Milano.",
  alternates: { canonical: "/termini/" },
  robots: { index: true, follow: true },
};

export default function TerminiPage() {
  return (
    <>
      <main>
        <section className="band-grid">
          <div className="container tight">
            <div className="privacy-doc">

              <h1 className="privacy-title">Condizioni Generali di Fornitura EurocomplAI</h1>

              <p className="privacy-intro">
                <strong>Integroup S.r.l.</strong><br />
                Via Ippolito Nievo 11 — 20145 Milano (MI)<br />
                P.IVA IT14114030969 — REA MI-2762036 — PEC:{" "}
                <a href="mailto:integroup@pec.it" className="privacy-link">integroup@pec.it</a>
              </p>

              {/* Definizioni */}
              <section className="privacy-section">
                <h2 className="privacy-h2">Definizioni</h2>
                <p>Ai fini del presente Contratto si intende per:</p>
                <ul className="privacy-list termini-defs">
                  <li>
                    <strong>&ldquo;Contratto&rdquo;:</strong> il complesso formato dalle presenti
                    Condizioni Generali e dal Modulo d&apos;ordine sottoscritto dalle parti.
                  </li>
                  <li>
                    <strong>&ldquo;Modulo d&apos;ordine&rdquo;:</strong> il documento commerciale
                    allegato alle presenti Condizioni che individua il piano sottoscritto, i moduli
                    attivi, il corrispettivo, la durata e ogni altra condizione specifica del
                    rapporto.
                  </li>
                  <li>
                    <strong>&ldquo;Servizi&rdquo;:</strong> le funzionalità SaaS erogate da
                    EuroComplai tramite la Piattaforma, come specificate nel Modulo d&apos;ordine.
                  </li>
                  <li>
                    <strong>&ldquo;Cliente&rdquo;:</strong> la persona giuridica o l&apos;ente che
                    sottoscrive il Contratto nell&apos;esercizio della propria attività professionale
                    o d&apos;impresa. Le presenti Condizioni si applicano esclusivamente a rapporti
                    B2B.
                  </li>
                  <li>
                    <strong>&ldquo;Utente&rdquo;:</strong> qualsiasi persona fisica autorizzata dal
                    Cliente ad accedere alla Piattaforma nell&apos;ambito dell&apos;account del
                    Cliente.
                  </li>
                  <li>
                    <strong>&ldquo;Contenuti Cliente&rdquo;:</strong> i dati, i documenti e le
                    informazioni caricati o trasmessi dal Cliente tramite la Piattaforma.
                  </li>
                  <li>
                    <strong>&ldquo;Output AI&rdquo;:</strong> testi, documenti, analisi o
                    raccomandazioni generati dalle funzionalità di intelligenza artificiale della
                    Piattaforma a partire dai Contenuti Cliente e dal contesto fornito.
                  </li>
                  <li>
                    <strong>&ldquo;DPA&rdquo;:</strong> il Data Processing Agreement, accordo sul
                    trattamento dei dati personali ai sensi dell&apos;art.&nbsp;28 del Regolamento
                    (UE) 2016/679, allegato al Modulo d&apos;ordine.
                  </li>
                </ul>
              </section>

              {/* Art. 1 */}
              <section className="privacy-section">
                <h2 className="privacy-h2">1. Premesse</h2>
                <ol className="termini-ol">
                  <li>
                    <span className="termini-num">1.1</span> Integroup S.r.l. (P.IVA IT14114030969,
                    con sede in Via Ippolito Nievo 11, 20145 Milano, di seguito
                    &ldquo;EuroComplai&rdquo;) è una società che sviluppa e gestisce la piattaforma
                    SaaS &ldquo;EuroComplai&rdquo; per la gestione della compliance normativa con il
                    supporto di tecnologie di intelligenza artificiale (il &ldquo;Software&rdquo;),
                    accessibile tramite il sito www.eurocomplai.com (la &ldquo;Piattaforma&rdquo;).
                  </li>
                  <li>
                    <span className="termini-num">1.2</span> Il Cliente dichiara di essere
                    interessato all&apos;utilizzo del Software e di possedere le informazioni
                    necessarie per il suo utilizzo tecnico e funzionale.
                  </li>
                  <li>
                    <span className="termini-num">1.3</span> Le presenti Condizioni Generali di
                    Fornitura (le &ldquo;Condizioni&rdquo;) costituiscono parte integrante e
                    sostanziale del Modulo d&apos;ordine e, congiuntamente con esso, formano il
                    contratto di fornitura tra le parti (il &ldquo;Contratto&rdquo;).
                  </li>
                  <li>
                    <span className="termini-num">1.4</span> Con il presente Contratto le parti
                    intendono disciplinare i termini e le condizioni per la fornitura dei Servizi da
                    parte di EuroComplai in favore del Cliente.
                  </li>
                </ol>
              </section>

              {/* Art. 2 */}
              <section className="privacy-section">
                <h2 className="privacy-h2">2. Oggetto</h2>
                <ol className="termini-ol">
                  <li>
                    <span className="termini-num">2.1</span> Il presente Contratto ha per oggetto la
                    fornitura di servizi online (i &ldquo;Servizi&rdquo;) da parte di EuroComplai al
                    Cliente, erogati tramite il Software disponibile sulla Piattaforma, nei limiti e
                    secondo le modalità indicate nel Modulo d&apos;ordine.
                  </li>
                  <li>
                    <span className="termini-num">2.2</span> I framework normativi supportati dalla
                    Piattaforma, i moduli attivi, il numero di account e le condizioni commerciali
                    sono definiti nel Modulo d&apos;ordine. Qualsiasi servizio non espressamente
                    indicato deve considerarsi escluso e, ove richiesto dal Cliente, sarà oggetto di
                    specifica negoziazione.
                  </li>
                </ol>
              </section>

              {/* Art. 3 */}
              <section className="privacy-section">
                <h2 className="privacy-h2">3. Servizi e Intelligenza Artificiale</h2>
                <ol className="termini-ol">
                  <li>
                    <span className="termini-num">3.1</span> I Servizi includono, in funzione del
                    piano sottoscritto: la generazione assistita di documenti di compliance, il
                    monitoraggio normativo, lo strumento di audit strutturato (Inspector) e le
                    relative funzionalità di gestione documentale.
                  </li>
                  <li>
                    <span className="termini-num">3.2</span> La Piattaforma integra funzionalità
                    basate su modelli di linguaggio di grandi dimensioni (AI) con carattere
                    esclusivamente assistivo e consultivo. Gli output generati dall&apos;AI (di
                    seguito &ldquo;Output AI&rdquo;) non costituiscono pareri legali, consulenza
                    professionale o garanzia di conformità normativa.
                  </li>
                  <li>
                    <span className="termini-num">3.3</span> Il Cliente è consapevole che gli Output
                    AI possono contenere imprecisioni o errori. Ogni interfaccia della Piattaforma
                    che genera Output AI è accompagnata da un avviso che invita il Cliente a
                    verificare i contenuti prima di qualsiasi utilizzo. Il Cliente assume la piena
                    responsabilità per le decisioni adottate sulla base degli Output AI.
                  </li>
                  <li>
                    <span className="termini-num">3.4</span> In caso di necessità di un parere in
                    materia legale, di compliance o di altra natura professionale, il Cliente si
                    rivolgerà a un professionista qualificato.
                  </li>
                  <li>
                    <span className="termini-num">3.5</span> EuroComplai non garantisce che
                    l&apos;utilizzo della Piattaforma assicuri la conformità del Cliente a normative
                    specifiche, ivi inclusi GDPR, EU AI Act e NIS2.
                  </li>
                </ol>
              </section>

              {/* Art. 4 */}
              <section className="privacy-section">
                <h2 className="privacy-h2">4. Account e Obblighi del Cliente</h2>
                <ol className="termini-ol">
                  <li>
                    <span className="termini-num">4.1</span> Una volta accreditato il pagamento del
                    Corrispettivo, EuroComplai fornirà al Cliente le credenziali per accedere alla
                    Piattaforma secondo quanto indicato nel Modulo d&apos;ordine. Il Cliente è
                    responsabile della riservatezza delle credenziali e di tutte le attività compiute
                    tramite il proprio account.
                  </li>
                  <li>
                    <span className="termini-num">4.2</span> EuroComplai si impegna a garantire che
                    nessun soggetto diverso dal Cliente abbia accesso ai Contenuti Cliente, i quali
                    saranno utilizzati dalla Piattaforma esclusivamente ai fini dell&apos;erogazione
                    dei Servizi.
                  </li>
                  <li>
                    <span className="termini-num">4.3</span> Il Cliente si impegna a utilizzare la
                    Piattaforma esclusivamente per finalità lecite, nell&apos;ambito della propria
                    attività aziendale, e in conformità alle leggi applicabili. In particolare, il
                    Cliente non potrà: decompilare o eseguire operazioni di reverse engineering sulla
                    Piattaforma; cedere o sublicenziare l&apos;accesso a terzi; utilizzare la
                    Piattaforma per sviluppare prodotti o servizi concorrenti, anche indirettamente.
                  </li>
                  <li>
                    <span className="termini-num">4.4</span> Il Cliente è il solo responsabile
                    dell&apos;accuratezza e della liceità dei contenuti e dei dati caricati sulla
                    Piattaforma (i &ldquo;Contenuti Cliente&rdquo;) e della verifica degli Output AI
                    prima del loro utilizzo.
                  </li>
                </ol>
              </section>

              {/* Art. 5 */}
              <section className="privacy-section">
                <h2 className="privacy-h2">5. Corrispettivi</h2>
                <ol className="termini-ol">
                  <li>
                    <span className="termini-num">5.1</span> Il Cliente si impegna a corrispondere a
                    EuroComplai il corrispettivo nelle modalità e ai termini indicati nel Modulo
                    d&apos;ordine (il &ldquo;Corrispettivo&rdquo;).
                  </li>
                  <li>
                    <span className="termini-num">5.2</span> In caso di mancato pagamento del
                    Corrispettivo entro i termini previsti, EuroComplai si riserva il diritto di
                    sospendere l&apos;accesso alla Piattaforma, previa comunicazione al Cliente, e di
                    applicare gli interessi di mora ai sensi del D.Lgs. 231/2002.
                  </li>
                </ol>
              </section>

              {/* Art. 6 */}
              <section className="privacy-section">
                <h2 className="privacy-h2">6. Responsabilità</h2>
                <ol className="termini-ol">
                  <li>
                    <span className="termini-num">6.1</span> Tutte le informazioni e gli Output AI
                    disponibili sulla Piattaforma non costituiscono pareri, consulenza o suggerimenti
                    di natura legale, professionale o di compliance. Il Cliente è consapevole che, in
                    caso di necessità, dovrà rivolgersi a un professionista competente.
                  </li>
                  <li>
                    <span className="termini-num">6.2</span> EuroComplai non è responsabile per i
                    danni che dovessero derivare al Cliente da scelte e decisioni adottate in base
                    agli Output AI o alle informazioni presenti sulla Piattaforma.
                  </li>
                  <li>
                    <span className="termini-num">6.3</span> La responsabilità complessiva di
                    EuroComplai nei confronti del Cliente, per qualsiasi causa, è in ogni caso
                    limitata al totale dei corrispettivi pagati dal Cliente nei dodici mesi precedenti
                    all&apos;evento che ha dato origine alla pretesa. Sono in ogni caso esclusi i
                    danni indiretti, consequenziali, la perdita di profitti e le sanzioni irrogate da
                    autorità di vigilanza al Cliente.
                  </li>
                  <li>
                    <span className="termini-num">6.4</span> Nel caso in cui la Piattaforma presenti
                    malfunzionamenti a causa di difficoltà non imputabili a EuroComplai o in presenza
                    di rischi per la sicurezza dei Servizi, EuroComplai si riserva il diritto di
                    sospendere la fornitura dei Servizi per il tempo necessario al ripristino.
                  </li>
                </ol>
              </section>

              {/* Art. 7 */}
              <section className="privacy-section">
                <h2 className="privacy-h2">7. Proprietà Intellettuale</h2>
                <ol className="termini-ol">
                  <li>
                    <span className="termini-num">7.1</span> Il Cliente riconosce la titolarità
                    esclusiva di EuroComplai su tutti i diritti di proprietà industriale e
                    intellettuale relativi ai Servizi, al Software, alla Piattaforma, ai marchi e ai
                    segni distintivi. L&apos;utilizzo del Software è concesso al Cliente in via non
                    esclusiva, non trasferibile e limitata alle finalità del Contratto.
                  </li>
                  <li>
                    <span className="termini-num">7.2</span> I Contenuti Cliente rimangono di
                    proprietà esclusiva del Cliente. Gli Output AI generati dalla Piattaforma sulla
                    base dei Contenuti Cliente appartengono al Cliente e possono essere da questi
                    utilizzati per le proprie finalità aziendali.
                  </li>
                  <li>
                    <span className="termini-num">7.3</span> È vietato al Cliente apportare
                    modifiche, decodificare, riprodurre o copiare, integralmente o parzialmente, gli
                    elementi della Piattaforma e dei Servizi, nonché utilizzarli per sviluppare e
                    commercializzare, direttamente o indirettamente, prodotti o servizi analoghi.
                  </li>
                </ol>
              </section>

              {/* Art. 8 */}
              <section className="privacy-section">
                <h2 className="privacy-h2">8. Dati Personali e Riservatezza</h2>
                <ol className="termini-ol">
                  <li>
                    <span className="termini-num">8.1</span> Le parti si impegnano a conformarsi alla
                    normativa vigente in materia di protezione dei dati personali (D.Lgs. 196/2003 e
                    Reg. UE 2016/679). Il trattamento dei dati personali effettuato da EuroComplai
                    per conto del Cliente è disciplinato dall&apos;Accordo sul Trattamento dei Dati
                    (DPA) allegato al Modulo d&apos;ordine e dalla Privacy Policy disponibile su
                    www.eurocomplai.com.
                  </li>
                  <li>
                    <span className="termini-num">8.2</span> Le parti si impegnano a trattare con
                    riservatezza le informazioni confidenziali acquisite nell&apos;ambito del
                    Contratto, durante la sua vigenza e per i cinque anni successivi alla sua
                    cessazione.
                  </li>
                  <li>
                    <span className="termini-num">8.3</span> Il Cliente è tenuto a mantenere riservate
                    le credenziali di accesso alla Piattaforma e si assume la responsabilità per i
                    danni derivanti dalla mancata osservanza di tale obbligo.
                  </li>
                </ol>
              </section>

              {/* Art. 9 */}
              <section className="privacy-section">
                <h2 className="privacy-h2">9. Durata e Recesso</h2>
                <ol className="termini-ol">
                  <li>
                    <span className="termini-num">9.1</span> Il presente Contratto entra in vigore
                    alla data di sottoscrizione del Modulo d&apos;ordine e ha la durata ivi indicata.
                    Alla scadenza, si rinnova tacitamente per periodi uguali salvo disdetta
                    comunicata da una delle parti a mezzo PEC con il preavviso minimo indicato nel
                    Modulo d&apos;ordine.
                  </li>
                  <li>
                    <span className="termini-num">9.2</span> Ciascuna parte può risolvere il
                    Contratto con effetto immediato in presenza di un grave inadempimento
                    dell&apos;altra parte non sanato entro 15 (quindici) giorni dalla ricezione di
                    formale diffida inviata a mezzo PEC, ovvero nell&apos;ipotesi in cui una delle
                    parti sia assoggettata a procedura concorsuale, liquidazione o concordato.
                  </li>
                  <li>
                    <span className="termini-num">9.3</span> EuroComplai può recedere dal Contratto
                    per qualsiasi motivo con preavviso scritto di 60 (sessanta) giorni, con rimborso
                    della quota di Corrispettivo prepagato non ancora fruita.
                  </li>
                  <li>
                    <span className="termini-num">9.4</span> Dalla data in cui la cessazione del
                    Contratto diventa efficace, i Servizi sono interrotti e al Cliente non è più
                    consentito l&apos;accesso alla Piattaforma. Il Cliente potrà richiedere
                    l&apos;esportazione dei propri Contenuti Cliente entro 60 (sessanta) giorni dalla
                    cessazione.
                  </li>
                </ol>
              </section>

              {/* Art. 10 */}
              <section className="privacy-section">
                <h2 className="privacy-h2">10. Forza Maggiore</h2>
                <ol className="termini-ol">
                  <li>
                    <span className="termini-num">10.1</span> Per forza maggiore si intende ogni
                    evento imprevedibile, indipendente dalla volontà delle parti, al di fuori del
                    loro controllo e al quale non è possibile porre rimedio in tempi ragionevoli,
                    inclusi a titolo esemplificativo: calamità naturali, atti di guerra o terrorismo,
                    provvedimenti di autorità pubbliche, interruzioni di infrastrutture di terzi e
                    attacchi informatici di portata eccezionale.
                  </li>
                  <li>
                    <span className="termini-num">10.2</span> Al verificarsi di un evento di forza
                    maggiore, gli obblighi della parte che non possa adempiervi sono automaticamente
                    sospesi per la durata dell&apos;evento, senza penalità a suo carico. EuroComplai
                    ne darà comunicazione al Cliente entro 48 ore.
                  </li>
                  <li>
                    <span className="termini-num">10.3</span> Se l&apos;evento di forza maggiore si
                    protrae per oltre 60 (sessanta) giorni, ciascuna parte ha facoltà di recedere dal
                    Contratto senza penali, con rimborso del Corrispettivo prepagato non fruito.
                  </li>
                </ol>
              </section>

              {/* Art. 11 */}
              <section className="privacy-section">
                <h2 className="privacy-h2">11. Modifica Unilaterale e Disposizioni Varie</h2>
                <ol className="termini-ol">
                  <li>
                    <span className="termini-num">11.1</span> EuroComplai può proporre la modifica
                    unilaterale di una o più clausole delle presenti Condizioni con preavviso minimo
                    di 60 (sessanta) giorni. La modifica si intende approvata ove il Cliente non
                    receda dal Contratto entro tale termine.
                  </li>
                  <li>
                    <span className="termini-num">11.2</span> Il presente Contratto supera e
                    sostituisce qualsiasi precedente accordo, scritto o verbale, relativo al suo
                    oggetto. Le Condizioni Generali e il Modulo d&apos;ordine costituiscono
                    l&apos;intero accordo tra le parti.
                  </li>
                  <li>
                    <span className="termini-num">11.3</span> Nel caso in cui una o più clausole
                    risultino nulle, annullabili o inefficaci, la validità delle restanti non sarà
                    pregiudicata.
                  </li>
                  <li>
                    <span className="termini-num">11.4</span> Il presente Contratto non potrà essere
                    ceduto a terzi senza il preventivo consenso scritto dell&apos;altra parte.
                  </li>
                  <li>
                    <span className="termini-num">11.5</span> Le comunicazioni formali tra le parti
                    dovranno essere effettuate a mezzo PEC o raccomandata A/R. Le comunicazioni
                    ordinarie potranno avvenire via email agli indirizzi indicati nel Modulo
                    d&apos;ordine.
                  </li>
                </ol>
              </section>

              {/* Art. 12 */}
              <section className="privacy-section">
                <h2 className="privacy-h2">12. Legge Applicabile e Foro Competente</h2>
                <ol className="termini-ol">
                  <li>
                    <span className="termini-num">12.1</span> Il presente Contratto è disciplinato
                    dalla legge italiana.
                  </li>
                  <li>
                    <span className="termini-num">12.2</span> Per ogni controversia derivante dal
                    presente Contratto sarà competente in via esclusiva il Foro di Milano.
                  </li>
                </ol>
              </section>

              <p className="cookie-policy-date">
                <em>Versione 1.1</em>
              </p>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
