import { supabase } from "./supabase";

export type ConsentChoices = {
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
};

export const CONSENT_KEY = "ec_consent_v1";
export const CONSENT_EVENT = "ec:consent-updated";
/**
 * Versione della Cookie policy a cui si riferisce la scelta salvata. Va
 * incrementata quando cambiano le categorie o i servizi: una scelta salvata
 * con un'altra versione (o senza versione, come quelle della 1.0) è scaduta e
 * il banner ricompare. La landing statica public/prenota-demo/index.html
 * legge la stessa chiave: aggiornare la versione anche lì.
 */
export const POLICY_VERSION = "1.1";
const SESSION_KEY = "ec_session_id";

export function getStoredConsent(): ConsentChoices | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed?.version !== POLICY_VERSION) return null;
    return {
      functional: Boolean(parsed.functional),
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
    };
  } catch {
    return null;
  }
}

export function saveConsent(choices: ConsentChoices): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_KEY, JSON.stringify({ ...choices, version: POLICY_VERSION }));
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

function getOrCreateSessionId(): string {
  let id = sessionStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export async function logConsent(
  choices: ConsentChoices,
  action: "accept_all" | "reject_all" | "custom"
): Promise<void> {
  if (!supabase) return;
  try {
    await supabase.rpc("log_consent", {
      p_session_id: getOrCreateSessionId(),
      p_action: action,
      p_choices: choices,
      p_policy_version: POLICY_VERSION,
      p_page_url: window.location.pathname,
      p_user_agent: navigator.userAgent.slice(0, 200),
    });
  } catch {
    // log silenzioso — non blocca l'UX
  }
}
