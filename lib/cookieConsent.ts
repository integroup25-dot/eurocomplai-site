import { supabase } from "./supabase";

export type ConsentChoices = {
  functional: boolean;
};

export const CONSENT_KEY = "ec_consent_v1";
export const CONSENT_EVENT = "ec:consent-updated";
export const POLICY_VERSION = "1.0";
const SESSION_KEY = "ec_session_id";

export function getStoredConsent(): ConsentChoices | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentChoices;
  } catch {
    return null;
  }
}

export function saveConsent(choices: ConsentChoices): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_KEY, JSON.stringify(choices));
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

function resolveAction(choices: ConsentChoices): "accept_all" | "reject_all" | "custom" {
  if (choices.functional) return "accept_all";
  return "reject_all";
}

export async function logConsent(
  choices: ConsentChoices,
  action: "accept_all" | "reject_all" | "custom"
): Promise<void> {
  try {
    await supabase.from("consent_logs").insert({
      session_id: getOrCreateSessionId(),
      action,
      choices,
      policy_version: POLICY_VERSION,
      page_url: window.location.pathname,
      user_agent: navigator.userAgent.slice(0, 200),
    });
  } catch {
    // log silenzioso — non blocca l'UX
  }
}
