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
import { disableGoogleAds, enableGoogleAds } from "@/lib/googleAds";

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

  // Il tag di Google Ads segue la scelta salvata: parte solo con il consenso
  // marketing e si spegne se l'utente lo revoca dal banner.
  const marketingGranted = Boolean(choices?.marketing);
  useEffect(() => {
    if (marketingGranted) enableGoogleAds();
    else disableGoogleAds();
  }, [marketingGranted]);

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
        acceptAll: () => commit({ functional: true, marketing: true }, "accept_all"),
        rejectAll: () => commit({ functional: false, marketing: false }, "reject_all"),
        saveChoices: (c) => commit(c, "custom"),
      }}
    >
      {children}
    </Ctx.Provider>
  );
}
