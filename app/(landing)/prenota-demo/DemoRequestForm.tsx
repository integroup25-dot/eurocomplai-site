"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useCookieConsent } from "@/components/CookieConsentProvider";
import { DEMO_QUESTIONS, sendDemoRequest } from "@/lib/demoRequest";
import { trackDemoRequestConversion } from "@/lib/googleTag";

const CTA = "Prenota una demo di EurocomplAI";
const TOTALE = DEMO_QUESTIONS.length;

type Props = {
  /** Indice del modulo nella pagina: tiene distinti i nomi dei radio. */
  n: number;
  source: string;
  context: string;
};

/**
 * Richiesta demo: una domanda per schermata, poi i contatti. I passi non
 * attivi sono fieldset hidden e disabled: restano nel DOM (tornando indietro
 * le risposte non si perdono) ma non vengono validati né inviati.
 */
export default function DemoRequestForm({ n, source, context }: Props) {
  const { choices } = useCookieConsent();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [invio, setInvio] = useState(false);
  const [errore, setErrore] = useState(false);
  const [inviato, setInviato] = useState<false | "focus" | "silenzioso">(false);
  const titoli = useRef<(HTMLSpanElement | null)[]>([]);
  const focusAlTitolo = useRef(false);
  const conferma = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!focusAlTitolo.current) return;
    focusAlTitolo.current = false;
    // Il focus va sul titolo del nuovo passo: chi usa uno screen reader
    // sente subito la domanda successiva.
    titoli.current[step]?.focus();
  }, [step]);

  useEffect(() => {
    if (inviato === "focus") conferma.current?.focus();
  }, [inviato]);

  if (inviato) {
    return (
      <div>
        <div className="form-msg" role="status" tabIndex={-1} ref={conferma}>
          Grazie, richiesta inviata — ti ricontatteremo per la demo.
        </div>
      </div>
    );
  }

  const vai = (nuovo: number) => {
    focusAlTitolo.current = true;
    setStep(nuovo);
  };
  const testo = step < TOTALE ? `Domanda ${step + 1} di ${TOTALE}` : "Ultimo passo · I tuoi contatti";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (step < TOTALE) {
      if (answers[DEMO_QUESTIONS[step].id]) vai(step + 1);
      return;
    }
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) {
      // Campo honeypot compilato: probabile bot, si finge un invio riuscito.
      setInviato("silenzioso");
      return;
    }
    setInvio(true);
    try {
      await sendDemoRequest({
        name: String(fd.get("name") ?? ""),
        email: String(fd.get("email") ?? ""),
        company: String(fd.get("company") ?? "") || null,
        message: String(fd.get("message") ?? ""),
        context,
        sourcePage: source,
        qualification: answers,
        // privacy_ack a DB segue la casella: senza spunta contact-notify
        // rifiuta l'invio invece di registrare una presa visione mai data.
        privacyAck: fd.get("privacy") === "on",
      });
    } catch {
      setInvio(false);
      setErrore(true);
      return;
    }
    trackDemoRequestConversion({ ads: Boolean(choices?.marketing), analytics: Boolean(choices?.analytics) });
    setInviato("focus");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="q-progress">
          <span className="q-progress-label">{testo}</span>
          <div
            className="q-bar"
            role="progressbar"
            aria-label="Avanzamento della richiesta"
            aria-valuemin={1}
            aria-valuemax={TOTALE + 1}
            aria-valuenow={step + 1}
            aria-valuetext={testo}
          >
            <div style={{ width: `${((step + 1) / (TOTALE + 1)) * 100}%` }} />
          </div>
        </div>
        {DEMO_QUESTIONS.map((q, i) => (
          <fieldset className="q-step" key={q.id} hidden={i !== step} disabled={i !== step}>
            <legend>
              <span className="q-title" tabIndex={-1} ref={(el) => { titoli.current[i] = el; }}>
                {q.domanda}
              </span>
            </legend>
            <div className="q-options">
              {q.opzioni.map(([valore, etichetta]) => (
                <label className="q-option" key={valore}>
                  <input
                    type="radio"
                    name={`${q.id}-${n}`}
                    value={valore}
                    required
                    checked={answers[q.id] === valore}
                    onChange={() => setAnswers((a) => ({ ...a, [q.id]: valore }))}
                  />
                  <span>{etichetta}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
        <fieldset className="q-step" hidden={step !== TOTALE} disabled={step !== TOTALE}>
          <legend>
            <span className="q-title" tabIndex={-1} ref={(el) => { titoli.current[TOTALE] = el; }}>
              Come possiamo ricontattarti?
            </span>
          </legend>
          <div className="q-body">
            <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className="row">
              <input className="ig-field" type="text" name="name" required maxLength={200} autoComplete="name" placeholder="Nome e cognome" aria-label="Nome e cognome" />
              <input className="ig-field" type="email" name="email" required maxLength={200} autoComplete="email" placeholder="Email" aria-label="Email" />
            </div>
            <input className="ig-field" type="text" name="company" maxLength={200} autoComplete="organization" placeholder="Azienda (facoltativo)" aria-label="Azienda (facoltativo)" />
            <textarea className="ig-field" name="message" rows={3} maxLength={5000} placeholder="Vuoi aggiungere qualcosa sul contesto? (facoltativo)" aria-label="Contesto (facoltativo)" />
            <label className="consent">
              <input type="checkbox" name="privacy" required />
              <span>
                Ho preso visione dell&apos;<a href="https://eurocomplai.com/privacy/" target="_blank" rel="noopener">informativa privacy</a>.
              </span>
            </label>
          </div>
        </fieldset>
        {errore && (
          <div className="form-msg error" role="alert">
            Invio non riuscito. Scrivi a eurocomplai@integroup.eu oppure riprova.
          </div>
        )}
        <div className="q-actions">
          <button className="btn btn-ghost q-back" type="button" hidden={step === 0} disabled={invio} onClick={() => vai(step - 1)}>
            Indietro
          </button>
          <button className="btn btn-primary q-next" type="submit" disabled={invio || (step < TOTALE && !answers[DEMO_QUESTIONS[step].id])}>
            {invio ? "Invio…" : step < TOTALE ? "Avanti" : CTA}
          </button>
        </div>
      </form>
    </div>
  );
}
