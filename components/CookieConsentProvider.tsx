"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { type ConsentChoices, getStoredConsent, saveConsent, logConsent } from "@/lib/cookieConsent";
import { applyGoogleTagConsent } from "@/lib/googleTag";

type CookieConsentCtx = {
  choices: ConsentChoices | null;
  ready: boolean;
  bannerOpen: boolean;
  openSettings: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  saveChoices: (c: ConsentChoices) => void;
};

const Ctx = createContext<CookieConsentCtx | null>(null);

export function useCookieConsent() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCookieConsent must be used inside CookieConsentProvider");
  return ctx;
}

export default function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [choices, setChoices] = useState<ConsentChoices | null>(null);
  const [ready, setReady] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    setChoices(stored);
    setBannerOpen(!stored);
    setReady(true);
  }, []);

  // Il tag Google segue la scelta salvata: Google Ads solo con il consenso
  // marketing, Google Analytics solo con quello alle statistiche; ciascuno si
  // spegne se l'utente lo revoca dal banner.
  const adsGranted = Boolean(choices?.marketing);
  const analyticsGranted = Boolean(choices?.analytics);
  useEffect(() => {
    applyGoogleTagConsent({ ads: adsGranted, analytics: analyticsGranted });
  }, [adsGranted, analyticsGranted]);

  const commit = useCallback((c: ConsentChoices, action: "accept_all" | "reject_all" | "custom") => {
    setChoices(c);
    saveConsent(c);
    setBannerOpen(false);
    logConsent(c, action);
  }, []);

  return (
    <Ctx.Provider
      value={{
        choices,
        ready,
        bannerOpen,
        openSettings: () => setBannerOpen(true),
        acceptAll: () => commit({ functional: true, analytics: true, marketing: true }, "accept_all"),
        rejectAll: () => commit({ functional: false, analytics: false, marketing: false }, "reject_all"),
        saveChoices: (c) => commit(c, "custom"),
      }}
    >
      {children}
    </Ctx.Provider>
  );
}
