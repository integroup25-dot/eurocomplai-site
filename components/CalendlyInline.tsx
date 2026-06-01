"use client";

import { useCookieConsent } from "./CookieConsentProvider";
import { getCalendlyEmbedUrl } from "@/lib/integrations";

type Props = Readonly<{
  height?: number;
  title?: string;
}>;

export default function CalendlyInline({
  height = 720,
  title = "Prenota una demo · Calendly",
}: Props) {
  const { choices, ready, openSettings } = useCookieConsent();

  if (!ready) return <div className="calendly-gate calendly-gate--loading" style={{ height }} />;

  if (!choices?.functional) {
    return (
      <div className="calendly-gate" style={{ minHeight: height }}>
        <div className="calendly-gate-inner">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="3" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <p className="calendly-gate-title">Calendario non disponibile</p>
          <p className="calendly-gate-desc">
            Per caricare il calendario di prenotazione è necessario abilitare i{" "}
            <strong>cookie funzionali</strong> (Calendly).
          </p>
          <button className="cookie-btn cookie-btn--primary" onClick={openSettings}>
            Gestisci preferenze cookie
          </button>
        </div>
      </div>
    );
  }

  return (
    <iframe
      src={getCalendlyEmbedUrl()}
      title={title}
      style={{
        width: "100%",
        height: `${height}px`,
        border: "1px solid var(--border-1)",
        borderRadius: "16px",
        background: "var(--bg)",
      }}
      loading="lazy"
    />
  );
}
