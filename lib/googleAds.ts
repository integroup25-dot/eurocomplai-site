/**
 * Tag di Google Ads (gtag.js), caricato solo dopo il consenso alla categoria
 * "marketing" del banner cookie (vedi components/CookieConsentProvider.tsx).
 * La landing statica public/prenota-demo/index.html ha una copia di questa
 * logica in JavaScript semplice: tenerle allineate.
 *
 * Il tag NON sta nell'<head> di app/layout.tsx: lì partirebbe prima di qualunque scelta
 * dell'utente, installando cookie di marketing senza consenso preventivo
 * (Linee guida cookie del Garante, 10 giugno 2021). Qui lo script viene
 * aggiunto alla pagina solo quando l'utente accetta, con Consent Mode v2
 * impostato prima su "denied" e poi aggiornato a "granted".
 */
const GOOGLE_ADS_ID = "AW-18468380524";

let loaded = false;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// gtag.js legge l'oggetto arguments, non un array: va passato così.
const gtag: (...args: unknown[]) => void = function () {
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
};

/** Inserisce gtag.js nella pagina e concede il consenso pubblicitario. Idempotente. */
export function enableGoogleAds() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  const firstLoad = !loaded;
  if (firstLoad) {
    loaded = true;
    window.gtag = gtag;
    gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
  }
  // L'aggiornamento va prima di 'config', così il primo hit parte già col consenso.
  gtag("consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });
  if (firstLoad) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
    document.head.appendChild(script);
    gtag("js", new Date());
    gtag("config", GOOGLE_ADS_ID);
  }
}

/**
 * Revoca del consenso nella stessa pagina: blocca il tag e cancella i cookie
 * di prima parte di Google Ads. Lo script già caricato non si può scaricare,
 * ma con il consenso "denied" non scrive né legge più cookie pubblicitari;
 * dalla pagina successiva non viene più caricato affatto.
 */
export function disableGoogleAds() {
  if (typeof window === "undefined" || !loaded) return;
  gtag("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  const domain = window.location.hostname.replace(/^www\./, "");
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (!/^_gcl_/.test(name)) return;
    for (const d of ["", `; domain=${domain}`, `; domain=.${domain}`]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`;
    }
  });
}
