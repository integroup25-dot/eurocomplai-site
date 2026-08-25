/**
 * Third-party form/booking integrations.
 *
 * Booking: Microsoft Bookings (pagina condivisa "EurocomplAI Bookings",
 * mailbox EurocomplAIBookings@integroup.eu). Servizio "Riunione di 30 minuti",
 * personale Alessandro Oldani e Carlo Matera, orari Lun-Ven 9-13 / 14-18
 * (fuso orario del calendario: Europe/Rome).
 *
 * To activate Tally placeholders, set the URLs below to your Tally form URLs
 * (e.g. https://tally.so/r/AbCdEf). Until then, the placeholders render with
 * a "form in arrivo" message and a fallback email link.
 */

export const integrations = {
  bookings: {
    /** Pagina di prenotazione pubblica (link condivisibile). */
    url: "https://outlook.office.com/book/EurocomplAIBookings@integroup.eu/",
    /**
     * URL di embed così come fornito da Microsoft nello snippet "Incorpora"
     * della pagina di prenotazione. Il parametro `ismsaljsauthenabled` va
     * mantenuto senza valore: è la forma emessa da Bookings.
     */
    embedUrl:
      "https://outlook.office.com/book/EurocomplAIBookings@integroup.eu/?ismsaljsauthenabled",
  },
  tally: {
    /** Tally form URL for "Scrivici una domanda specifica". Set when ready. */
    scrivici: null as string | null,
    /** Tally form URL for "Candidati al programma early access". Set when ready. */
    earlyAccess: null as string | null,
  },
  /** Fallback contact channel when Tally forms are not yet wired. */
  fallbackEmail: "eurocomplai@integroup.eu",
} as const;

export function getBookingsEmbedUrl(): string {
  return integrations.bookings.embedUrl;
}

export function getBookingsPageUrl(): string {
  return integrations.bookings.url;
}
