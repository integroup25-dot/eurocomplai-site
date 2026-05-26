/**
 * Third-party form/booking integrations.
 *
 * To activate Tally placeholders, set the URLs below to your Tally form URLs
 * (e.g. https://tally.so/r/AbCdEf). Until then, the placeholders render with
 * a "form in arrivo" message and a fallback email link.
 */

export const integrations = {
  calendly: {
    /** Calendly scheduling URL for the 30-minute demo. */
    url: "https://calendly.com/integroup25/30min",
    /** Brand colors applied to the embedded scheduler (hex without #). */
    embedParams: {
      background_color: "070A12",
      text_color: "F4F6FB",
      primary_color: "FFB020",
      hide_event_type_details: "0",
      hide_gdpr_banner: "0",
    },
  },
  tally: {
    /** Tally form URL for "Scrivici una domanda specifica". Set when ready. */
    scrivici: null as string | null,
    /** Tally form URL for "Candidati al programma early access". Set when ready. */
    earlyAccess: null as string | null,
  },
  /** Fallback contact channel when Tally forms are not yet wired. */
  fallbackEmail: "info@eurocomplai.com",
} as const;

export function getCalendlyEmbedUrl(): string {
  const { url, embedParams } = integrations.calendly;
  const params = new URLSearchParams({
    embed_type: "Inline",
    embed_domain: "eurocomplai.com",
    ...embedParams,
  });
  return `${url}?${params.toString()}`;
}
