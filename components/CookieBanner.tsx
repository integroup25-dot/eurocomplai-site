"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCookieConsent } from "./CookieConsentProvider";
import type { ConsentChoices } from "@/lib/cookieConsent";

// Le categorie facoltative hanno una chiave in ConsentChoices; quella dei
// cookie necessari no, perché è sempre attiva.
const CATEGORIES: {
  key?: keyof ConsentChoices;
  label: string;
  description: string;
  services: string;
  required?: boolean;
}[] = [
  {
    label: "Necessari",
    description:
      "Indispensabili per il funzionamento del sito: gestione della sessione, sicurezza, preferenze di navigazione.",
    services: "Cookie di sessione, preferenze utente",
    required: true,
  },
  {
    key: "functional",
    label: "Funzionali",
    description:
      "Abilitano funzionalità avanzate come la prenotazione di demo e i form di contatto. Senza questi cookie alcune sezioni del sito non saranno disponibili.",
    services: "Microsoft Bookings (prenotazione demo), Tally (form di contatto)",
  },
  {
    key: "analytics",
    label: "Statistiche",
    description:
      "Ci dicono in forma aggregata quante persone visitano il sito, da dove arrivano e quali pagine leggono, per migliorarlo.",
    services: "Google Analytics",
  },
  {
    key: "marketing",
    label: "Marketing",
    description:
      "Misurano le conversioni delle nostre campagne pubblicitarie (per esempio una richiesta di demo arrivata da un annuncio) e consentono a Google di mostrarti nostri annunci su altri siti.",
    services: "Google Ads",
  },
];

export default function CookieBanner() {
  const { choices, ready, bannerOpen, openSettings, acceptAll, rejectAll, saveChoices } =
    useCookieConsent();
  const [expanded, setExpanded] = useState(false);
  const [local, setLocal] = useState<ConsentChoices>({ functional: false, analytics: false, marketing: false });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (bannerOpen) {
      setLocal({
        functional: choices?.functional ?? false,
        analytics: choices?.analytics ?? false,
        marketing: choices?.marketing ?? false,
      });
      setExpanded(false);
    }
  }, [bannerOpen, choices]);

  if (!mounted || !ready) return null;

  return (
    <>
      {/* ── Floating settings button (visible when banner is closed) ── */}
      {!bannerOpen && (
        <button
          className="cookie-settings-btn"
          onClick={openSettings}
          aria-label="Gestisci preferenze cookie"
        >
          <CookieIcon />
          <span>Cookie</span>
        </button>
      )}

      {/* ── Cookie Banner ── */}
      {bannerOpen && (
        <div className="cookie-overlay" role="dialog" aria-modal="true" aria-label="Preferenze cookie">
          <div className="cookie-banner">
            <div className="cookie-banner-header">
              <CookieIcon className="cookie-banner-icon" />
              <h2 className="cookie-banner-title">Preferenze cookie</h2>
            </div>

            <p className="cookie-banner-desc">
              Utilizziamo cookie per garantire il corretto funzionamento del sito e, con il tuo
              consenso, per abilitare funzionalità come la prenotazione di demo, per capire come viene
              usato il sito (Google Analytics) e per misurare le nostre campagne pubblicitarie (Google
              Ads). Puoi accettare tutti i cookie, rifiutare
              quelli non essenziali o personalizzare le tue scelte.{" "}
              <Link href="/cookie/" className="cookie-link">
                Cookie policy
              </Link>
            </p>

            {/* ── Granular toggles ── */}
            {expanded && (
              <div className="cookie-categories">
                {CATEGORIES.map((cat, i) => (
                  <div className="cookie-category" key={i}>
                    <div className="cookie-category-top">
                      <div className="cookie-category-info">
                        <span className="cookie-category-label">{cat.label}</span>
                        {cat.required && (
                          <span className="cookie-required-badge">Sempre attivi</span>
                        )}
                      </div>
                      {cat.required || !cat.key ? (
                        <div className="cookie-toggle cookie-toggle--on cookie-toggle--disabled" aria-disabled="true" />
                      ) : (
                        <CategoryToggle
                          label={cat.label}
                          on={local[cat.key]}
                          onToggle={() => {
                            const key = cat.key!;
                            setLocal((p) => ({ ...p, [key]: !p[key] }));
                          }}
                        />
                      )}
                    </div>
                    <p className="cookie-category-desc">{cat.description}</p>
                    <p className="cookie-category-services">
                      <strong>Servizi:</strong> {cat.services}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* ── Actions ── */}
            <div className="cookie-actions">
              {!expanded ? (
                <>
                  <button
                    className="cookie-btn cookie-btn--ghost"
                    onClick={() => setExpanded(true)}
                  >
                    Personalizza
                  </button>
                  <button className="cookie-btn cookie-btn--secondary" onClick={rejectAll}>
                    Solo necessari
                  </button>
                  <button className="cookie-btn cookie-btn--primary" onClick={acceptAll}>
                    Accetta tutti
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="cookie-btn cookie-btn--ghost"
                    onClick={() => setExpanded(false)}
                  >
                    Indietro
                  </button>
                  <button
                    className="cookie-btn cookie-btn--primary"
                    onClick={() => saveChoices(local)}
                  >
                    Salva preferenze
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CategoryToggle({ label, on, onToggle }: { label: string; on: boolean; onToggle: () => void }) {
  return (
    <button
      role="switch"
      aria-checked={on}
      className={`cookie-toggle ${on ? "cookie-toggle--on" : ""}`}
      onClick={onToggle}
      aria-label={`${label}: ${on ? "attivi" : "disattivi"}`}
    />
  );
}

function CookieIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="8" cy="9" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="9" cy="15" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="14" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}
