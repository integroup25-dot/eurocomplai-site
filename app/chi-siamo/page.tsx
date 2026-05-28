import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import ArrowIcon from "@/components/ArrowIcon";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "EurocomplAI è il prodotto di inteGroup, boutique di consulenza italiana. Lo abbiamo costruito perché nessun altro lo aveva fatto come serviva a noi — e quindi, presumibilmente, come serve anche a voi.",
  alternates: { canonical: "/chi-siamo/" },
};

export default function ChiSiamoPage() {
  return (
    <>
      <main>
        {/* HEADER + HERO (band-grid) */}
        <section className="band-grid">
          <div className="container">

            <section className="page-hero">
              <div className="hero-eyebrow">Chi siamo</div>
              <h1 className="page-h1">
                Consulenti, <span className="accent">non software house</span>.
                Software fatto da chi i GRC li usa.
              </h1>
              <p className="page-hero-sub">
                EurocomplAI è il prodotto di inteGroup, boutique di consulenza
                italiana. Lo abbiamo costruito perché nessun altro lo aveva fatto
                come serviva a noi — e quindi, presumibilmente, come serve anche
                a voi.
              </p>
            </section>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* DA DOVE NASCE (band-deep) */}
        <section className="band-deep">
          <div className="container narrow">
            <div className="section" id="origine">
              <div className="section-eyebrow">Da dove nasce</div>
              <h2>
                Dalla consulenza al prodotto. Stessa testa, stesso lavoro,{" "}
                <span className="accent">mandati sempre più complessi</span>.
              </h2>
              <div className="section-body">
                <p>
                  Le persone che hanno costruito EurocomplAI fanno compliance.
                  Hanno condotto DPIA prima che si chiamassero così, gestito
                  notifiche di data breach prima che il Garante avesse un
                  portale, affrontato ispezioni prima che esistesse una procedura
                  standard di risposta.
                </p>
                <p>
                  Lavoriamo dentro <strong>inteGroup</strong>, boutique di
                  consulenza italiana, con circa un centinaio di organizzazioni
                  in sanità, lifescience, PA, infrastrutture critiche e servizi
                  finanziari — centinaia di DPIA, migliaia di informative,
                  decine di incidenti, mandati con studi legali in tutto quello
                  che richiede competenza tecnico-normativa.
                </p>
                <p>
                  Abbiamo usato i GRC disponibili sul mercato — italiani e
                  internazionali — e la nostra conclusione è stata semplice:{" "}
                  <strong>
                    erano costruiti da persone che la compliance non l'hanno mai
                    fatta per mestiere
                  </strong>
                  . Si vedeva nei processi, nei template, nelle priorità,
                  nell'interfaccia.
                </p>
                <p>
                  Abbiamo aggirato il problema a lungo con macro Excel, script
                  Python, template Word, modelli proprietari sviluppati dai
                  mandati. Funzionavano, ma non scalavano. A un certo punto la
                  frustrazione è diventata abbastanza alta da costruire un tool
                  nostro. <strong>EurocomplAI è quel tool.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* PERCHÉ ABBIAMO COSTRUITO (band-grid) */}
        <section className="band-grid">
          <div className="container">
            <div className="section" id="perche">
              <div className="section-eyebrow">Perché esistiamo</div>
              <h2>
                Tre cose che abbiamo capito{" "}
                <span className="accent">facendo compliance</span>.
              </h2>

              <div className="insight-grid">
                <div className="insight-card">
                  <div className="insight-num">01</div>
                  <h3>La compliance non è data entry.</h3>
                  <p>
                    È giudizio professionale ancorato a evidenze. I tool che ti
                    fanno compilare campi non ti aiutano a fare compliance — ti
                    aiutano a documentare che hai compilato campi.{" "}
                    <strong>
                      EurocomplAI è progettato perché tu eserciti il giudizio,
                      il resto lo fa il software.
                    </strong>
                  </p>
                </div>
                <div className="insight-card">
                  <div className="insight-num">02</div>
                  <h3>
                    I regolamenti europei si moltiplicheranno, ma parlano della
                    stessa azienda.
                  </h3>
                  <p>
                    GDPR, NIS2, AI Act. E presto DGA, EHDS, CRA, Data Act.
                    Trattarli come progetti separati è inefficiente — è il{" "}
                    <em>modo di lavorare</em> che deve essere integrato, non
                    solo il software.{" "}
                    <strong>
                      EurocomplAI lo fa: un solo asset register, una sola
                      anagrafica, valutazioni cross-mappate.
                    </strong>
                  </p>
                </div>
                <div className="insight-card">
                  <div className="insight-num">03</div>
                  <h3>
                    Ogni professionista esperto ha — o vuole avere — il proprio
                    metodo.
                  </h3>
                  <p>
                    Ogni DPO senior, ogni studio legale, ogni grande
                    organizzazione ha sviluppato il proprio modo di fare
                    compliance. EurocomplAI viene preconfigurato con metodologie
                    pronte all'uso, ma è aperto al caricamento dei vostri
                    playbook.{" "}
                    <strong>
                      Vogliamo che amplifichi il vostro modo di lavorare, non
                      che lo sostituisca col nostro.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* COME LAVORIAMO (band-deep) */}
        <section className="band-deep">
          <div className="container narrow">
            <div className="section" id="metodo">
              <div className="section-eyebrow">Il metodo</div>
              <h2>
                Lavoriamo come <span className="accent">una boutique</span>, non
                come una software house.
              </h2>
              <div className="section-body">
                <p>
                  EurocomplAI non viene da product manager che intervistano
                  clienti. È costruito da chi lavora coi clienti ogni giorno,
                  decide cosa va in roadmap, e tiene la mano del prodotto col
                  team tecnico.
                </p>
              </div>

              <div className="method-block">
                <div className="method-item">
                  <h4>Le decisioni di prodotto sono decisioni consulenziali.</h4>
                  <p>
                    Quando ci chiediamo se aggiungere una feature, non ci
                    chiediamo "il mercato la vuole?". Ci chiediamo "in un
                    mandato reale, questa cosa farebbe la differenza?".{" "}
                    <strong>
                      Un filtro più selettivo, un prodotto con meno feature ma
                      più giuste.
                    </strong>
                  </p>
                </div>
                <div className="method-item">
                  <h4>Le conversazioni commerciali le facciamo noi.</h4>
                  <p>
                    Una richiesta demo non passa attraverso un account executive
                    con due settimane di prodotto. Vi parla chi ha condotto DPIA
                    reali, gestito notifiche al Garante, classificato sistemi AI
                    con il primario di radiologia.
                  </p>
                </div>
                <div className="method-item">
                  <h4>Il supporto operativo è diretto.</h4>
                  <p>
                    Quando avete un dubbio su uno scenario specifico, parlate
                    con chi quello scenario lo conosce — non con un help desk
                    che legge da un manuale.{" "}
                    <strong>
                      È un modello che non scala all'infinito: una scelta di
                      posizionamento, non un compromesso.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* EARLY ACCESS (band-grid) */}
        <section className="band-grid">
          <div className="container narrow">
            <div className="section" id="early-access">
              <div className="section-eyebrow">Early access</div>
              <h2>
                EurocomplAI è in early access con un{" "}
                <span className="accent">gruppo selezionato di partner</span>.
              </h2>
              <div className="section-body">
                <p>
                  Stiamo lavorando con un numero contenuto di organizzazioni —
                  sanità, PA, studi legali, aziende private — per affinare il
                  prodotto sui casi d'uso reali.{" "}
                  <strong>Programma selezionato ma aperto:</strong> se avete un
                  problema reale di compliance integrata e voglia di lavorare
                  con noi sul prodotto, possiamo valutare di includervi.
                </p>
                <p>
                  Non è marketing dello scarso. È una scelta che riflette il
                  modello: costruire un prodotto serio richiede tempo e
                  attenzione, e preferiamo lavorare bene con dieci
                  organizzazioni che male con cento.
                </p>
              </div>
              <Link href="/demo/" className="btn btn-primary inline-cta">
                Candidati al programma early access
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </section>

        <div className="transition" aria-hidden="true" />

        {/* INTEGROUP (band-deep) */}
        <section className="band-deep">
          <div className="container narrow">
            <div className="section" id="integroup">
              <div className="section-eyebrow">
                La consulenza dietro al prodotto
              </div>
              <h2>
                EurocomplAI è uno dei modi in cui inteGroup{" "}
                <span className="accent">fa il suo mestiere</span>.
              </h2>
              <div className="section-body">
                <p>
                  inteGroup è una{" "}
                  <strong>boutique di consulenza italiana</strong> specializzata
                  in privacy, cybersecurity e governance dell'AI, con esperienza
                  diretta nei settori a maggiore complessità regolatoria.
                </p>
                <p>
                  Continuiamo a fare consulenza ogni giorno. Mandati di
                  compliance, DPO esterno, supporto agli studi legali,
                  assistenza nelle crisi. EurocomplAI nasce da questo.{" "}
                  <strong>
                    La consulenza non è una promozione del software; è il
                    contesto dentro cui il software ha senso.
                  </strong>
                </p>
              </div>
              <a
                href="https://integroup.eu"
                target="_blank"
                rel="noopener"
                className="btn btn-ghost inline-cta"
              >
                Scopri inteGroup
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* CTA FINALE (band-deep amplified) */}
        <section className="band-deep amplified">
          <div className="container tight">
            <div className="section cta-final" id="cta">
              <div className="cta-final-inner">
                <div className="section-eyebrow">Vi siete riconosciuti?</div>
                <h2>
                  Vi siete riconosciuti{" "}
                  <span className="accent">in questa storia</span>?
                </h2>
                <p className="section-sub">
                  Se siete un DPO che ha provato troppi tool inadeguati, un
                  partner di studio legale che vuole industrializzare i mandati
                  ricorrenti, un dirigente pubblico che deve far quadrare AI
                  Act, NIS2 e GDPR — probabilmente abbiamo qualcosa di cui
                  parlare.
                </p>
                <div className="hero-ctas">
                  <Link href="/demo/" className="btn btn-primary">
                    Scrivici per una conversazione
                    <ArrowIcon />
                  </Link>
                  <Link href="/demo/" className="btn btn-ghost">
                    Richiedi una demo
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
