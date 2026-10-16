"use client";

import { useCookieConsent } from "@/components/CookieConsentProvider";

/** «Gestisci cookie» nel footer della landing: apre il banner del sito. */
export default function ManageCookiesButton() {
  const { openSettings } = useCookieConsent();
  return (
    <button type="button" onClick={openSettings}>
      Gestisci cookie
    </button>
  );
}
