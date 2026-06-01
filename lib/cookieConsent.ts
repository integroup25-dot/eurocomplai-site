export type ConsentChoices = {
  functional: boolean;
};

export const CONSENT_KEY = "ec_consent_v1";
export const CONSENT_EVENT = "ec:consent-updated";

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
