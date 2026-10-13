"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { integrations } from "@/lib/integrations";
import { DOMANDE, QUALIFICATION_SET } from "@/lib/demoQualifica";

const TOTALE = DOMANDE.length;
const CTA = "Richiedi la demo";

/**
 * Richiesta demo: le domande di lib/demoQualifica.ts, una per schermata,
 * poi i dati di contatto. Scrive su Supabase tramite la Edge Function
 * contact-notify (la stessa delle landing integroup.eu), che salva il
 * messaggio in integroup_contact_messages e invia la notifica via email.
 *
 * Accessibilità: ogni domanda è un fieldset con legend e radio nativi; al
 * cambio di passo il focus va sul titolo del nuovo passo, così chi usa uno
 * screen reader sente la domanda successiva.
 */
export default function DemoRequestForm() {
  const uid = useId();
  const [step, setStep] = useState(0); // 0..TOTALE-1 domande, TOTALE = contatti
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [privacyAck, setPrivacyAck] = useState(false);
  const [website, setWebsite] = useState(""); // honeypot: invisibile agli utenti reali
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const headingRef = useRef<HTMLElement | null>(null);
  const interagito = useRef(false);

  useEffect(() => {
    // Niente focus al primo montaggio: farebbe scorrere la pagina al caricamento.
    if (interagito.current) headingRef.current?.focus();
  }, [step, status]);

  const vai = (n: number) => {
    interagito.current = true;
    setStep(n);
  };

  if (status === "success") {
    return (
      <div role="status" className="demo-form-msg">
        <p ref={(el) => { headingRef.current = el; }} tabIndex={-1} className="demo-form-title">
          Grazie, richiesta inviata.
        </p>
        <p className="demo-form-note">
          Ti ricontatta uno di noi entro 2 giorni lavorativi per fissare la demo.
        </p>
      </div>
    );
  }

  const domanda = step < TOTALE ? DOMANDE[step] : null;
  const progresso = domanda ? `Domanda ${step + 1} di ${TOTALE}` : "Ultimo passo · I tuoi contatti";
  const sending = status === "sending";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (domanda) {
      if (answers[domanda.id]) vai(step + 1);
      return;
    }
    interagito.current = true;
    if (website) {
      // honeypot compilato: probabile bot, si finge un invio riuscito
      setStatus("success");
      return;
    }
    setStatus("sending");
    const { error } = await supabase.functions.invoke("contact-notify", {
      body: {
        name,
        email,
        company: company || null,
        message,
        context: "eurocomplai.com · richiesta demo",
        sourcePage: window.location.pathname,
        qualificationSet: QUALIFICATION_SET,
        qualification: answers,
        privacyAck: true,
      },
    });
    setStatus(error ? "error" : "success");
  }

  return (
    <form onSubmit={handleSubmit} className="demo-form">
      <div>
        <div className="demo-form-progress-label">{progresso}</div>
        <div
          className="demo-form-progress"
          role="progressbar"
          aria-label="Avanzamento della richiesta"
          aria-valuemin={1}
          aria-valuemax={TOTALE + 1}
          aria-valuenow={step + 1}
          aria-valuetext={progresso}
        >
          <div style={{ width: `${((step + 1) / (TOTALE + 1)) * 100}%` }} />
        </div>
      </div>

      {domanda ? (
        <fieldset key={domanda.id} className="demo-form-fieldset">
          <legend>
            <span ref={(el) => { headingRef.current = el; }} tabIndex={-1} className="demo-form-title">
              {domanda.domanda}
            </span>
          </legend>
          <div className="demo-form-options">
            {domanda.opzioni.map((o) => (
              <label key={o.value} className="demo-form-option">
                <input
                  type="radio"
                  name={`${uid}-${domanda.id}`}
                  value={o.value}
                  required
                  checked={answers[domanda.id] === o.value}
                  onChange={() => setAnswers((a) => ({ ...a, [domanda.id]: o.value }))}
                />
                <span>{o.label}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ) : (
        <>
          <p ref={(el) => { headingRef.current = el; }} tabIndex={-1} className="demo-form-title">
            Come possiamo ricontattarti?
          </p>
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="demo-form-hp"
          />
          <div className="demo-form-row">
            <label>
              <span className="sr-only">Nome e cognome</span>
              <input type="text" required maxLength={200} autoComplete="name" placeholder="Nome e cognome" value={name} onChange={(e) => setName(e.target.value)} className="demo-form-field" />
            </label>
            <label>
              <span className="sr-only">Email di lavoro</span>
              <input type="email" required maxLength={200} autoComplete="email" placeholder="Email di lavoro" value={email} onChange={(e) => setEmail(e.target.value)} className="demo-form-field" />
            </label>
          </div>
          <label>
            <span className="sr-only">Organizzazione</span>
            <input type="text" required maxLength={200} autoComplete="organization" placeholder="Organizzazione" value={company} onChange={(e) => setCompany(e.target.value)} className="demo-form-field" />
          </label>
          <label>
            <span className="sr-only">Contesto (facoltativo)</span>
            <textarea
              placeholder="Vuoi aggiungere qualcosa sul contesto? (facoltativo)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              maxLength={5000}
              className="demo-form-field"
            />
          </label>
          <label className="demo-form-consent">
            <input type="checkbox" required checked={privacyAck} onChange={(e) => setPrivacyAck(e.target.checked)} />
            <span>
              Ho letto l&apos;<a href="/privacy/" target="_blank" rel="noopener" className="privacy-link">informativa privacy</a> e
              acconsento al trattamento dei dati per essere ricontattato/a.
            </span>
          </label>
          {status === "error" && (
            <div role="alert" className="demo-form-error">
              Invio non riuscito. Riprova, oppure scrivi a{" "}
              <a href={`mailto:${integrations.fallbackEmail}`}>{integrations.fallbackEmail}</a>.
            </div>
          )}
        </>
      )}

      <div className="demo-form-actions">
        {step > 0 ? (
          <button type="button" onClick={() => vai(step - 1)} disabled={sending} className="btn btn-ghost">
            Indietro
          </button>
        ) : (
          <span />
        )}
        {domanda ? (
          <button type="submit" className="btn btn-primary" disabled={!answers[domanda.id]}>
            Avanti
          </button>
        ) : (
          <button type="submit" className="btn btn-primary" disabled={sending || !privacyAck}>
            {sending ? "Invio in corso…" : CTA}
          </button>
        )}
      </div>
    </form>
  );
}
