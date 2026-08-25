"use client";

import { useCookieConsent } from "./CookieConsentProvider";
import { getBookingsEmbedUrl, getBookingsPageUrl } from "@/lib/integrations";

type Props = Readonly<{
  height?: number;
  title?: string;
}>;

export default function BookingInline({
  height = 760,
  title = "Prenota una demo · Microsoft Bookings",
}: Props) {
  const { choices, ready, openSettings } = useCookieConsent();

  if (!ready) return <div className="booking-gate booking-gate--loading" style={{ height }} />;

  if (!choices?.functional) {
    return (
      <div className="booking-gate" style={{ minHeight: height }}>
        <div className="booking-gate-inner">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="3" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <p className="booking-gate-title">Calendario non disponibile</p>
          <p className="booking-gate-desc">
            Per caricare il calendario di prenotazione è necessario abilitare i{" "}
            <strong>cookie funzionali</strong> (Microsoft Bookings).
          </p>
          <button className="cookie-btn cookie-btn--primary" onClick={openSettings}>
            Gestisci preferenze cookie
          </button>
          <p className="booking-gate-desc">
            Preferisci non abilitarli?{" "}
            <a
              href={getBookingsPageUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="privacy-link"
            >
              Apri il calendario su Microsoft Bookings
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <iframe
      src={getBookingsEmbedUrl()}
      title={title}
      style={{
        width: "100%",
        height: `${height}px`,
        border: "1px solid var(--border-1)",
        borderRadius: "16px",
        background: "var(--bg)",
        display: "block",
      }}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}
