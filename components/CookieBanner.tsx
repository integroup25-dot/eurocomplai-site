"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCookieConsent } from "./CookieConsentProvider";
import type { ConsentChoices } from "@/lib/cookieConsent";

const CATEGORIES: {
  key: keyof ConsentChoices;
  label: string;
  description: string;
  services: string;
  required?: boolean;
}[] = [
  {
    key: "functional" as keyof ConsentChoices,
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
    services: "Calendly (prenotazione demo), Tally (form di contatto)",
  },
];

export default function CookieBanner() {
  const { choices, ready, bannerOpen, openSettings, acceptAll, rejectAll, saveChoices } =
    useCookieConsent();
  const [expanded, setExpanded] = useState(false);
  const [local, setLocal] = useState<ConsentChoices>({ functional: false });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (bannerOpen) {
      setLocal({ functional: choices?.functional ?? false });
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
              consenso, per abilitare funzionalità come la prenotazione di demo. Puoi accettare
              tutti i cookie, rifiutare quelli non essenziali o personalizzare le tue scelte.{" "}
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
                      {cat.required ? (
                        <div className="cookie-toggle cookie-toggle--on cookie-toggle--disabled" aria-disabled="true" />
                      ) : (
                        <button
                          role="switch"
                          aria-checked={local.functional}
                          className={`cookie-toggle ${local.functional ? "cookie-toggle--on" : ""}`}
                          onClick={() => setLocal((p) => ({ ...p, functional: !p.functional }))}
                          aria-label={`${cat.label}: ${local.functional ? "attivi" : "disattivi"}`}
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
