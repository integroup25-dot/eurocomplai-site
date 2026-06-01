import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Informativa Privacy",
  description:
    "Informativa ai sensi dell'Art. 13 del Regolamento (UE) 2016/679 – GDPR. Titolare del trattamento: INTEGROUP S.R.L.",
  alternates: { canonical: "/privacy/" },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <main>
        <section className="band-grid">
          <div className="container tight">
            <div className="privacy-doc">

              <h1 className="privacy-title">
                Informativa ai sensi dell&apos;Art.&nbsp;13 del Regolamento (UE) 2016/679 – Sito Web
              </h1>

              <p className="privacy-intro">
                Con il presente documento (&ldquo;Informativa&rdquo;) il Titolare del trattamento, come di seguito
                definito, desidera informarla sulle finalità e le modalità del trattamento dei Suoi dati personali e
                sui diritti che Le sono riconosciuti dal Regolamento (UE) 2016/679 relativo alla protezione delle
                persone fisiche, con riguardo al trattamento dei dati personali nonché alla loro libera circolazione
                (&ldquo;GDPR&rdquo;). La presente Informativa potrà essere integrata dal Titolare ove eventuali
                servizi aggiuntivi da Lei richiesti dovessero comportare ulteriori trattamenti.
              </p>

              {/* Titolare */}
              <section className="privacy-section">
                <h2 className="privacy-h2">Titolare del trattamento</h2>
                <p>
                  <strong>INTEGROUP S.R.L.</strong> con sede in Via Ippolito Nievo, 11 – 20145, Milano (MI)<br />
                  E-mail:{" "}
                  <a href="mailto:g.presepio@integroup.eu" className="privacy-link">
                    g.presepio@integroup.eu
                  </a>
                </p>
              </section>

              {/* Tipi di dati */}
              <section className="privacy-section">
                <h2 className="privacy-h2">Tipi di dati trattati</h2>
                <p>Le attività di trattamento svolte sono finalizzate all&apos;acquisizione dei seguenti dati personali:</p>
                <ul className="privacy-list">
                  <li>Dati anagrafici (es. nome, cognome, data di nascita, indirizzo);</li>
                  <li>Dati di contatto (es. telefono, e-mail);</li>
                  <li>Dati tecnici e di navigazione (es. Indirizzi IP, Nomi a Dominio dei Computer);</li>
                  <li>
                    Previo consenso dell&apos;utente, dati acquisiti da Cookie aventi funzionalità diverse dallo
                    stretto funzionamento del sito.
                  </li>
                </ul>
              </section>

              {/* Categorie interessati */}
              <section className="privacy-section">
                <h2 className="privacy-h2">Categorie di interessati</h2>
                <p>
                  Le attività di trattamento svolte sono rivolte alle seguenti categorie di interessati:{" "}
                  <strong>Utenti Web e Visitatori del Sito, Potenziali Clienti, Clienti.</strong>
                </p>
              </section>

              {/* Finalità */}
              <section className="privacy-section">
                <h2 className="privacy-h2">Finalità, Base Giuridica e Tempi di Conservazione</h2>

                <div className="privacy-table-wrap">
                  <table className="privacy-table">
                    <thead>
                      <tr>
                        <th>Finalità</th>
                        <th>Base Giuridica</th>
                        <th>Tempi di Conservazione</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>A)</strong> Il trattamento dei dati è essenziale per garantire il corretto
                          funzionamento e la fruibilità del sito da parte degli utenti. A titolo esemplificativo e non
                          esaustivo, tale attività può comprendere la gestione delle sessioni, il monitoraggio del
                          traffico finalizzato all&apos;ottimizzazione delle prestazioni del sito, la garanzia di tempi
                          di risposta adeguati e la risoluzione di eventuali errori di sistema.
                        </td>
                        <td>
                          <strong>Dati Comuni</strong><br />
                          Il trattamento è necessario per il perseguimento del legittimo interesse del titolare del
                          trattamento. Ex Art. 6, par. 1, lett. f) del GDPR.
                        </td>
                        <td>
                          Fino alla durata della sessione di navigazione o comunque per un periodo strettamente
                          necessario al perseguimento della finalità (salvo eventuali necessità di accertamento di
                          reati da parte dell&apos;autorità giudiziaria).
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>B)</strong> Il trattamento è necessario per l&apos;utilizzo di cookie e altre
                          tecnologie analoghe. Per ulteriori informazioni si veda la Cookie Policy accessibile dal
                          footer del sito.
                        </td>
                        <td>
                          <strong>Dati comuni</strong><br />
                          Per i cookie diversi da quelli tecnici e strettamente funzionali al funzionamento del sito,
                          il trattamento è basato sul consenso. Ex Art. 6, par. 1, lett. a) del GDPR.<br /><br />
                          Per ulteriori dettagli sull&apos;uso di queste tecnologie e per gestire le impostazioni
                          relative ai Cookie, si prega di consultare la Cookie Policy.
                        </td>
                        <td>
                          Per ulteriori dettagli sull&apos;uso di queste tecnologie e per gestire le impostazioni
                          relative ai Cookie, si prega di consultare la Cookie Policy.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>C)</strong> Il trattamento dei dati è necessario per l&apos;accertamento,
                          l&apos;esercizio o la difesa dei diritti del Titolare in sede giudiziaria, nonché per
                          l&apos;esercizio di azioni di recupero crediti nei confronti dell&apos;interessato.
                        </td>
                        <td>
                          <strong>Dati comuni</strong><br />
                          Perseguimento del legittimo interesse del titolare del trattamento. Ex Art. 6, par. 1,
                          lett. f) del GDPR.
                        </td>
                        <td>
                          Per tutta la durata del contenzioso, fino all&apos;esaurimento dei termini di
                          esperibilità delle azioni di impugnazione.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>D)</strong> Il trattamento è necessario per la gestione delle richieste dei diritti
                          degli interessati ai sensi degli artt. 15 e ss. del GDPR.
                        </td>
                        <td>
                          <strong>Dati comuni</strong><br />
                          Adempimento di un obbligo legale al quale è soggetto il titolare. Ex Art. 6, par. 1,
                          lett. c) del GDPR.
                        </td>
                        <td>
                          I dati saranno conservati per un massimo di 5 anni dalla richiesta (salvo contenziosi).
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Modalità */}
              <section className="privacy-section">
                <h2 className="privacy-h2">Modalità del Trattamento</h2>
                <p>Il trattamento dei dati avviene in modalità elettronica.</p>
              </section>

              {/* Trasferimento extra UE */}
              <section className="privacy-section">
                <h2 className="privacy-h2">Trasferimento dati extra UE</h2>
                <p>
                  I Dati Personali non sono oggetto di trasferimento verso Paesi terzi rispetto all&apos;Unione
                  europea e allo Spazio Economico Europeo.
                </p>
                <p>
                  Qualora tale trasferimento dovesse rendersi necessario e/o inevitabile per esigenze organizzative
                  del Titolare, si rende noto che:
                </p>
                <ul className="privacy-list">
                  <li>
                    esso avverrà esclusivamente verso Paesi nei confronti dei quali sussista una decisione di
                    adeguatezza adottata dalla Commissione Europea;
                  </li>
                  <li>
                    ove si tratti di un Paese diverso da quello di cui al punto precedente, il trasferimento dei
                    dati sarà disciplinato dalle Clausole Contrattuali Standard salva l&apos;adozione, previo
                    accordo delle Parti coinvolte, di un&apos;altra tra le misure di salvaguardia stabilite
                    dall&apos;art.&nbsp;46 del GDPR o dall&apos;applicazione di uno dei meccanismi derogatori di
                    cui all&apos;art.&nbsp;49 del GDPR.
                  </li>
                </ul>
              </section>

              {/* Destinatari */}
              <section className="privacy-section">
                <h2 className="privacy-h2">Destinatari del trattamento</h2>
                <p>
                  I dati personali possono essere condivisi con fornitori di servizi strettamente correlati e
                  funzionali alle attività del Titolare, che operano tipicamente in qualità di responsabili del
                  trattamento ai sensi dell&apos;art.&nbsp;28 del GDPR. È possibile ottenere l&apos;elenco completo
                  contattando il Titolare agli indirizzi sopra indicati.
                </p>
              </section>

              {/* Diritti */}
              <section className="privacy-section">
                <h2 className="privacy-h2">Diritti dell&apos;interessato – reclamo all&apos;autorità di controllo</h2>
                <p>
                  In relazione ai trattamenti descritti nella presente Informativa, in qualità di interessato Lei
                  potrà, alle condizioni previste dal GDPR, esercitare i diritti sanciti dagli articoli da 15 a 22
                  del GDPR e, in particolare, i seguenti diritti:
                </p>
                <ul className="privacy-list privacy-list--rights">
                  <li>
                    <strong>Diritto di accesso – articolo 15 GDPR:</strong> diritto di ottenere conferma che sia o
                    meno in corso un trattamento di dati personali che La riguardano e, in tal caso, ottenere
                    l&apos;accesso ai Suoi dati personali.
                  </li>
                  <li>
                    <strong>Diritto di rettifica – articolo 16 GDPR:</strong> diritto di ottenere, senza
                    ingiustificato ritardo, la rettifica dei dati personali inesatti che La riguardano e/o
                    l&apos;integrazione dei dati personali incompleti.
                  </li>
                  <li>
                    <strong>Diritto alla cancellazione (diritto all&apos;oblio) – articolo 17 GDPR:</strong> diritto
                    di ottenere, senza ingiustificato ritardo, la cancellazione dei dati personali che La
                    riguardano. Il diritto alla cancellazione non si applica nella misura in cui il trattamento sia
                    necessario per l&apos;adempimento di un obbligo legale o per l&apos;esecuzione di un compito
                    svolto nel pubblico interesse o per l&apos;accertamento, l&apos;esercizio o la difesa di un
                    diritto in sede giudiziaria.
                  </li>
                  <li>
                    <strong>Diritto di limitazione di trattamento – articolo 18 GDPR:</strong> diritto di ottenere
                    la limitazione del trattamento, quando: a) l&apos;interessato contesta l&apos;esattezza dei dati
                    personali; b) il trattamento è illecito e l&apos;interessato si oppone alla cancellazione dei
                    dati personali e chiede invece che ne sia limitato l&apos;utilizzo; c) i dati personali sono
                    necessari all&apos;interessato per l&apos;accertamento, l&apos;esercizio o la difesa di un
                    diritto in sede giudiziaria; d) l&apos;interessato si è opposto al trattamento in attesa della
                    verifica in merito all&apos;eventuale prevalenza dei motivi legittimi del titolare del
                    trattamento rispetto a quelli dell&apos;interessato.
                  </li>
                  <li>
                    <strong>Diritto alla portabilità dei dati – articolo 20 GDPR:</strong> diritto di ricevere, in
                    un formato strutturato, di uso comune e leggibile da un dispositivo automatico, i dati personali
                    che La riguardano forniti al Titolare e il diritto di trasmetterli a un altro titolare senza
                    impedimenti, qualora il trattamento si basi sul consenso e sia effettuato con mezzi
                    automatizzati. Inoltre, il diritto di ottenere che i Suoi dati personali siano trasmessi
                    direttamente da questo titolare ad altro titolare qualora ciò sia tecnicamente fattibile.
                  </li>
                  <li>
                    <strong>Diritto di opposizione – articolo 21 GDPR:</strong> diritto di opporsi, in qualsiasi
                    momento, al trattamento dei dati personali che La riguardano basati sulla condizione di
                    legittimità del legittimo interesse, compresa la profilazione, salvo che sussistano motivi
                    legittimi per il Titolare di continuare il trattamento che prevalgono sugli interessi, sui
                    diritti e sulle libertà dell&apos;interessato oppure per l&apos;accertamento, l&apos;esercizio o
                    la difesa di un diritto in sede giudiziaria.
                  </li>
                  <li>
                    <strong>
                      Diritto a non essere sottoposto a un processo decisionale automatizzato – articolo 22 GDPR:
                    </strong>{" "}
                    l&apos;interessato ha il diritto di non essere sottoposto a una decisione basata unicamente sul
                    trattamento automatizzato, compresa la profilazione, che produca effetti giuridici che lo
                    riguardano o che incida in modo analogo significativamente sulla sua persona, salvo che ciò sia
                    necessario per la conclusione o esecuzione di un contratto o Lei abbia rilasciato il Suo
                    consenso. In ogni caso, un processo decisionale automatizzato non potrà riguardare i Suoi dati
                    personali e Lei potrà in ogni momento ottenere l&apos;intervento umano da parte del titolare del
                    trattamento, esprimere la propria opinione e contestare la decisione.
                  </li>
                  <li>
                    <strong>Diritto di proporre reclamo</strong> all&apos;Autorità Garante per la protezione dei
                    dati personali:{" "}
                    <a
                      href="http://www.garanteprivacy.it"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="privacy-link"
                    >
                      www.garanteprivacy.it
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Revocare il consenso</strong> prestato in ogni occasione e con la stessa facilità con
                    cui è stato fornito senza pregiudicare la liceità del trattamento basata sul consenso prestato
                    prima della revoca.
                  </li>
                </ul>
                <p>
                  I diritti di cui sopra potranno essere esercitati, nei confronti del Titolare, contattando i
                  riferimenti sopra indicati. L&apos;esercizio dei Suoi diritti in qualità di interessato è gratuito
                  ai sensi dell&apos;articolo 12 GDPR. Tuttavia, nel caso di richieste manifestamente infondate o
                  eccessive, anche per la loro ripetitività, il Titolare potrebbe addebitarle un contributo spese
                  ragionevole, alla luce dei costi amministrativi sostenuti per gestire la Sua richiesta, o negare
                  la soddisfazione della sua richiesta.
                </p>
                <p>
                  La informiamo, infine, che il Titolare potrà richiedere ulteriori informazioni necessarie a
                  confermare l&apos;identità dell&apos;interessato.
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
