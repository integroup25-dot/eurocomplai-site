/**
 * Tag Google (gtag.js) con due destinazioni, ciascuna attivata da un consenso
 * distinto del banner cookie (vedi components/CookieConsentProvider.tsx).
 * Destinazioni:
 *   - Google Ads (AW-…)         categoria "marketing"
 *   - Google Analytics 4 (G-…)  categoria "statistiche"
 *
 * Il tag NON sta nell'<head> di app/layout.tsx: lì partirebbe prima di qualunque scelta
 * dell'utente, installando cookie non tecnici senza consenso preventivo
 * (Linee guida cookie del Garante, 10 giugno 2021). Qui lo script viene
 * aggiunto alla pagina solo quando l'utente accetta almeno una delle due
 * categorie, con Consent Mode v2 impostato prima tutto su "denied" e poi
 * aggiornato categoria per categoria.
 */
const GOOGLE_ADS_ID = "AW-18468380524";
const GOOGLE_ANALYTICS_ID = "G-HZG8ZDTQTT";
/** Conversione Google Ads "Richiesta demo EurocomplAI" (azione di tipo caricamento pagina). */
const GOOGLE_ADS_DEMO_CONVERSION = `${GOOGLE_ADS_ID}/9AqKCIyK9p4dEOy-tOZE`;

let scriptLoaded = false;
const configured = new Set<string>();
// Cancellazione ritardata dei cookie revocati: va annullata se la scelta cambia di nuovo.
let pulizia: number | undefined;

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

const adsConsent = (v: string) => ({ ad_storage: v, ad_user_data: v, ad_personalization: v });
const analyticsConsent = (v: string) => ({ analytics_storage: v });

/** Cancella i cookie di prima parte il cui nome rispetta il filtro, su tutte le varianti di dominio. */
function deleteCookies(filtro: RegExp) {
  const domain = window.location.hostname.replace(/^www\./, "");
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (!filtro.test(name)) return;
    for (const d of ["", `; domain=${domain}`, `; domain=.${domain}`]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d}`;
    }
  });
}

/**
 * Allinea il tag alla scelta dell'utente. Si può chiamare a ogni cambio:
 * carica lo script al primo consenso, configura ogni destinazione una volta
 * sola e, alla revoca, riporta il consenso a "denied" e cancella i cookie di
 * prima parte di quella destinazione. Lo script già caricato non si può
 * scaricare, ma con il consenso "denied" non scrive né legge più quei cookie;
 * dalla pagina successiva, se non resta alcun consenso, non viene caricato.
 */
export function applyGoogleTagConsent({ ads, analytics }: { ads: boolean; analytics: boolean }) {
  if (typeof window === "undefined") return;
  window.clearTimeout(pulizia);
  if (!scriptLoaded && !ads && !analytics) return;

  window.dataLayer = window.dataLayer || [];
  if (!scriptLoaded) {
    window.gtag = gtag;
    gtag("consent", "default", { ...adsConsent("denied"), ...analyticsConsent("denied") });
  }
  // L'aggiornamento va prima di 'config', così il primo hit parte già col consenso giusto.
  gtag("consent", "update", {
    ...adsConsent(ads ? "granted" : "denied"),
    ...analyticsConsent(analytics ? "granted" : "denied"),
  });
  if (!scriptLoaded) {
    scriptLoaded = true;
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ads ? GOOGLE_ADS_ID : GOOGLE_ANALYTICS_ID}`;
    document.head.appendChild(script);
    gtag("js", new Date());
  }
  if (ads && !configured.has(GOOGLE_ADS_ID)) {
    configured.add(GOOGLE_ADS_ID);
    gtag("config", GOOGLE_ADS_ID);
  }
  if (analytics && !configured.has(GOOGLE_ANALYTICS_ID)) {
    configured.add(GOOGLE_ANALYTICS_ID);
    gtag("config", GOOGLE_ANALYTICS_ID);
  }
  const daCancellare = [!ads && /^_gcl_/, !analytics && /^_ga(_|$)/].filter((r): r is RegExp => Boolean(r));
  if (daCancellare.length === 0) return;
  const cancella = () => daCancellare.forEach(deleteCookies);
  cancella();
  // gtag.js elabora la coda in modo asincrono: nel frattempo la destinazione
  // revocata può riscrivere i suoi cookie. Si ripassa quando ha recepito il "denied".
  pulizia = window.setTimeout(cancella, 1500);
}

/**
 * Conversione "Richiesta demo" dopo un invio riuscito del modulo della
 * landing. Senza consenso marketing non manda nulla: niente conversione,
 * niente richiesta a Google.
 */
export function trackDemoRequestConversion({ ads, analytics }: { ads: boolean; analytics: boolean }) {
  if (typeof window === "undefined" || !ads) return;
  applyGoogleTagConsent({ ads, analytics });
  gtag("event", "conversion", { send_to: GOOGLE_ADS_DEMO_CONVERSION });
}
