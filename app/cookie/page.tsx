import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Informativa sull'uso dei cookie ai sensi del Provvedimento del Garante per la protezione dei dati personali dell'8 gennaio 2015 e delle Linee guida cookie del 10 giugno 2021.",
  alternates: { canonical: "/cookie/" },
  robots: { index: true, follow: true },
};

export default function CookiePage() {
  return (
    <>
      <main>
        <section className="band-grid">
          <div className="container tight">
            <div className="privacy-doc">

              <h1 className="privacy-title">Cookie Policy</h1>

              <p className="privacy-intro">
                La presente Cookie Policy è resa ai sensi dell&apos;art.&nbsp;13 del Regolamento
                (UE) 2016/679 (&ldquo;GDPR&rdquo;) e in conformità al Provvedimento del Garante
                per la protezione dei dati personali dell&apos;8&nbsp;gennaio&nbsp;2015
                (&ldquo;Provvedimento cookie&rdquo;) e alle{" "}
                <em>
                  Linee guida cookie e altri strumenti di tracciamento
                </em>{" "}
                del 10&nbsp;giugno&nbsp;2021 (doc.&nbsp;web n.&nbsp;9677876).{" "}
                Il Titolare del trattamento è{" "}
                <strong>INTEGROUP S.R.L.</strong>, Via Ippolito Nievo,&nbsp;11 –
                20145&nbsp;Milano (MI), e-mail:{" "}
                <a href="mailto:g.presepio@integroup.eu" className="privacy-link">
                  g.presepio@integroup.eu
                </a>
                . Per l&apos;informativa completa sul trattamento dei dati personali si rimanda
                alla{" "}
                <Link href="/privacy/" className="privacy-link">
                  Privacy Policy
                </Link>
                .
              </p>

              {/* 1. Cosa sono i cookie */}
              <section className="privacy-section">
                <h2 className="privacy-h2">1. Cosa sono i cookie</h2>
                <p>
                  I cookie sono piccoli file di testo che i siti web visitati dall&apos;utente
                  inviano al suo terminale (computer, tablet, smartphone), dove vengono memorizzati
                  per essere poi ritrasmessi agli stessi siti alla visita successiva. Oltre ai
                  cookie in senso stretto, rientrano nella medesima categoria anche altre
                  tecnologie analoghe quali pixel, web beacon, local storage e identificatori
                  univoci.
                </p>
                <p>
                  I cookie possono essere impostati direttamente dal sito visitato
                  (&ldquo;cookie di prima parte&rdquo;) oppure da soggetti terzi i cui servizi
                  sono integrati nel sito (&ldquo;cookie di terza parte&rdquo;).
                </p>
              </section>

              {/* 2. Classificazione */}
              <section className="privacy-section">
                <h2 className="privacy-h2">2. Classificazione dei cookie utilizzati</h2>
                <p>
                  Secondo quanto previsto dalle Linee guida del Garante del 10&nbsp;giugno&nbsp;2021,
                  i cookie si distinguono in:
                </p>
                <ul className="privacy-list">
                  <li>
                    <strong>Cookie tecnici</strong> — necessari al funzionamento del sito e
                    all&apos;erogazione del servizio richiesto dall&apos;utente. Non richiedono
                    consenso preventivo.
                  </li>
                  <li>
                    <strong>Cookie funzionali</strong> — consentono al sito di ricordare le scelte
                    effettuate dall&apos;utente o abilitano funzionalità avanzate (es. moduli,
                    widget di prenotazione). Richiedono il consenso dell&apos;utente se non
                    strettamente necessari.
                  </li>
                  <li>
                    <strong>Cookie analitici di terza parte</strong> — raccolgono informazioni
                    aggregate sull&apos;uso del sito per finalità statistiche. Richiedono il
                    consenso dell&apos;utente.
                  </li>
                  <li>
                    <strong>Cookie di profilazione / marketing</strong> — tracciano la navigazione
                    per creare profili e inviare messaggi pubblicitari. Richiedono il consenso
                    dell&apos;utente.
                  </li>
                </ul>
                <p>
                  Il presente sito utilizza esclusivamente cookie tecnici (prima parte) e cookie
                  funzionali di terza parte. Non vengono impiegati cookie analitici di terza
                  parte né cookie di profilazione o marketing.
                </p>
              </section>

              {/* 3. Cookie tecnici */}
              <section className="privacy-section">
                <h2 className="privacy-h2">3. Cookie tecnici (prima parte)</h2>
                <p>
                  I cookie tecnici sono installati automaticamente e non richiedono il consenso
                  dell&apos;utente. Sono indispensabili per garantire il corretto funzionamento
                  del sito.
                </p>
                <div className="privacy-table-wrap">
                  <table className="privacy-table">
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Finalità</th>
                        <th>Durata</th>
                        <th>Parte</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><code>ec_consent_v1</code></td>
                        <td>Local Storage</td>
                        <td>
                          Memorizza le preferenze di consenso cookie espresse
                          dall&apos;utente tramite il banner. Consente di non
                          riproporre il banner alle visite successive.
                        </td>
                        <td>Persistente (fino alla cancellazione manuale)</td>
                        <td>Prima parte</td>
                      </tr>
                      <tr>
                        <td><code>__cf_bm</code></td>
                        <td>Cookie HTTP</td>
                        <td>
                          Bot management di Cloudflare. Distingue traffico umano
                          da traffico automatizzato. Impostato automaticamente
                          dall&apos;infrastruttura di hosting.
                        </td>
                        <td>30 minuti</td>
                        <td>Prima parte / Cloudflare</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 4. Cookie funzionali */}
              <section className="privacy-section">
                <h2 className="privacy-h2">4. Cookie funzionali di terza parte</h2>
                <p>
                  I cookie funzionali di terza parte sono installati da servizi esterni integrati
                  nel sito (widget di prenotazione, form di contatto). Vengono attivati
                  <strong> solo previo consenso espresso</strong> dell&apos;utente tramite il
                  banner cookie. Il mancato consenso non pregiudica la navigazione del sito,
                  ma rende non disponibili le funzionalità associate.
                </p>

                {/* Microsoft Bookings */}
                <h3 className="cookie-h3">4.1 Microsoft Bookings (prenotazione demo)</h3>
                <p>
                  Il sito integra la pagina di prenotazione di Microsoft Bookings, servizio
                  di Microsoft Corporation (per l&apos;area SEE: Microsoft Ireland Operations
                  Limited), per consentire la prenotazione di una sessione di demo.
                  L&apos;iframe di Microsoft Bookings viene caricato solo se l&apos;utente ha
                  prestato il consenso ai cookie funzionali.
                </p>
                <div className="privacy-table-wrap">
                  <table className="privacy-table">
                    <thead>
                      <tr>
                        <th>Cookie / Storage</th>
                        <th>Finalità</th>
                        <th>Durata</th>
                        <th>Parte</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Cookie di sessione Microsoft</td>
                        <td>
                          Gestione dello stato della prenotazione, bilanciamento del carico
                          e protezione CSRF durante il flusso di booking
                        </td>
                        <td>Sessione</td>
                        <td>Terza parte (Microsoft)</td>
                      </tr>
                      <tr>
                        <td>Cookie e storage tecnici del client Bookings</td>
                        <td>
                          Memorizzazione delle scelte utente durante il flusso di
                          prenotazione (servizio, personale, fuso orario di
                          visualizzazione)
                        </td>
                        <td>Sessione / durata del flusso di prenotazione</td>
                        <td>Terza parte (Microsoft)</td>
                      </tr>
                      <tr>
                        <td>Cookie di telemetria e sicurezza Microsoft</td>
                        <td>
                          Diagnostica del servizio e prevenzione degli abusi, gestiti
                          direttamente da Microsoft e non trasmessi al Titolare del
                          presente sito
                        </td>
                        <td>Sessione / persistenti secondo policy Microsoft</td>
                        <td>Terza parte (Microsoft)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Per l&apos;elenco completo e aggiornato dei cookie impostati da Microsoft si
                  rimanda all&apos;{" "}
                  <a
                    href="https://privacy.microsoft.com/privacystatement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="privacy-link"
                  >
                    Informativa sulla privacy di Microsoft
                  </a>
                  . Eventuali trasferimenti di dati verso Paesi terzi avvengono sulla base
                  del EU-US Data Privacy Framework e, ove necessario, delle Clausole
                  Contrattuali Standard adottate dalla Commissione Europea.
                </p>

                {/* Tally */}
                <h3 className="cookie-h3">4.2 Tally (form di contatto)</h3>
                <p>
                  Il sito può integrare form realizzati tramite Tally.so per la raccolta di
                  richieste di contatto. I form vengono caricati solo se l&apos;utente ha
                  prestato il consenso ai cookie funzionali.
                </p>
                <div className="privacy-table-wrap">
                  <table className="privacy-table">
                    <thead>
                      <tr>
                        <th>Cookie / Storage</th>
                        <th>Finalità</th>
                        <th>Durata</th>
                        <th>Parte</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Cookie di sessione Tally</td>
                        <td>
                          Gestione dello stato del form, protezione CSRF, memorizzazione
                          delle risposte parziali durante la compilazione
                        </td>
                        <td>Sessione</td>
                        <td>Terza parte (Tally)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Per l&apos;elenco completo e aggiornato dei cookie impostati da Tally si rimanda
                  alla{" "}
                  <a
                    href="https://tally.so/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="privacy-link"
                  >
                    Privacy Policy di Tally
                  </a>
                  .
                </p>
              </section>

              {/* 5. Cookie non utilizzati */}
              <section className="privacy-section">
                <h2 className="privacy-h2">5. Cookie non utilizzati</h2>
                <p>
                  Il presente sito <strong>non utilizza</strong> cookie analitici di terza parte
                  (es. Google Analytics, Matomo), cookie di profilazione o marketing (es. Meta
                  Pixel, Google Ads, LinkedIn Insight Tag) né sistemi di remarketing o
                  retargeting pubblicitario.
                </p>
              </section>

              {/* 6. Base giuridica */}
              <section className="privacy-section">
                <h2 className="privacy-h2">6. Base giuridica del trattamento</h2>
                <ul className="privacy-list">
                  <li>
                    <strong>Cookie tecnici:</strong> legittimo interesse del Titolare ex
                    art.&nbsp;6, par.&nbsp;1, lett.&nbsp;f) GDPR. Non richiedono consenso ai
                    sensi delle Linee guida Garante 2021.
                  </li>
                  <li>
                    <strong>Cookie funzionali di terza parte:</strong> consenso dell&apos;utente
                    ex art.&nbsp;6, par.&nbsp;1, lett.&nbsp;a) GDPR, liberamente prestato,
                    specifico, informato e revocabile in qualsiasi momento.
                  </li>
                </ul>
              </section>

              {/* 7. Gestione preferenze */}
              <section className="privacy-section">
                <h2 className="privacy-h2">7. Come gestire le preferenze cookie</h2>

                <h3 className="cookie-h3">7.1 Tramite il banner del sito</h3>
                <p>
                  Al primo accesso al sito viene mostrato un banner che consente di accettare
                  tutti i cookie, rifiutare quelli non tecnici, o personalizzare le scelte
                  categoria per categoria. Le preferenze possono essere modificate in qualsiasi
                  momento cliccando sul pulsante <strong>&ldquo;Cookie&rdquo;</strong> presente
                  in basso a destra in ogni pagina del sito.
                </p>

                <h3 className="cookie-h3">7.2 Tramite le impostazioni del browser</h3>
                <p>
                  Ciascun browser consente di bloccare o eliminare i cookie attraverso le
                  proprie impostazioni. Di seguito i link alle istruzioni per i principali browser:
                </p>
                <ul className="privacy-list">
                  <li>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="privacy-link">
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer" className="privacy-link">
                      Mozilla Firefox
                    </a>
                  </li>
                  <li>
                    <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="privacy-link">
                      Apple Safari
                    </a>
                  </li>
                  <li>
                    <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="privacy-link">
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
                <p>
                  Si ricorda che la disabilitazione di tutti i cookie tramite il browser potrebbe
                  compromettere il corretto funzionamento di alcune funzionalità del sito.
                </p>

                <h3 className="cookie-h3">7.3 Opt-out dei servizi di terza parte</h3>
                <p>
                  In alternativa al banner, è possibile rifiutare i cookie funzionali
                  direttamente presso i siti dei fornitori terzi:
                </p>
                <ul className="privacy-list">
                  <li>
                    <strong>Microsoft:</strong>{" "}
                    <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="privacy-link">
                      privacy.microsoft.com/privacystatement
                    </a>
                  </li>
                  <li>
                    <strong>Tally:</strong>{" "}
                    <a href="https://tally.so/privacy" target="_blank" rel="noopener noreferrer" className="privacy-link">
                      tally.so/privacy
                    </a>
                  </li>
                </ul>
              </section>

              {/* 8. Diritti */}
              <section className="privacy-section">
                <h2 className="privacy-h2">8. Diritti dell&apos;interessato</h2>
                <p>
                  In relazione al trattamento dei dati effettuato tramite cookie, l&apos;utente
                  può esercitare i diritti previsti dagli artt.&nbsp;15–22 GDPR (accesso,
                  rettifica, cancellazione, limitazione, portabilità, opposizione) contattando
                  il Titolare all&apos;indirizzo{" "}
                  <a href="mailto:g.presepio@integroup.eu" className="privacy-link">
                    g.presepio@integroup.eu
                  </a>
                  . Ha inoltre il diritto di proporre reclamo all&apos;Autorità Garante per
                  la protezione dei dati personali ({" "}
                  <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="privacy-link">
                    www.garanteprivacy.it
                  </a>
                  ).
                </p>
              </section>

              {/* 9. Aggiornamenti */}
              <section className="privacy-section">
                <h2 className="privacy-h2">9. Aggiornamenti della Cookie Policy</h2>
                <p>
                  Il Titolare si riserva di aggiornare la presente Cookie Policy a seguito di
                  modifiche normative, provvedimenti del Garante o variazioni nei servizi
                  integrati nel sito. Le modifiche sostanziali verranno comunicate tramite
                  aggiornamento del banner cookie. La data dell&apos;ultima revisione è indicata
                  in calce.
                </p>
                <p className="cookie-policy-date">
                  <em>Ultima revisione: giugno 2026</em>
                </p>
              </section>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
