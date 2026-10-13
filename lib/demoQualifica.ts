/**
 * Questionario di qualificazione della richiesta demo (/demo/).
 *
 * Compare prima dei dati di contatto nel modulo "Richiedi una demo". Le
 * risposte viaggiano come codici (`value`) verso la Edge Function
 * contact-notify (progetto Supabase condiviso con integroup.eu) e finiscono
 * nella colonna jsonb `qualification` di integroup_contact_messages, con
 * `qualification_set` = "eurocomplai-demo".
 *
 * ATTENZIONE: la Edge Function (repo integroup.eu,
 * supabase/functions/contact-notify/index.ts) tiene una copia di codici ed
 * etichette per validarli e scriverli nell'email di notifica. Chi aggiunge o
 * rinomina un'opzione qui deve farlo anche lì e ripubblicare la funzione:
 * un codice sconosciuto viene rifiutato con un 400.
 */

export const QUALIFICATION_SET = "eurocomplai-demo";

export type Domanda = {
  id: "need" | "role" | "revenue" | "timing";
  domanda: string;
  opzioni: ReadonlyArray<{ value: string; label: string }>;
};

export const DOMANDE: ReadonlyArray<Domanda> = [
  {
    id: "need",
    domanda: "Qual è oggi il principale bisogno che vorresti risolvere con EurocomplAI?",
    opzioni: [
      { value: "ridurre-lavoro-manuale", label: "Ridurre il lavoro manuale nella gestione della compliance" },
      { value: "sistema-unico", label: "Gestire GDPR, NIS2 e AI Act in un unico sistema" },
      { value: "automatizzare-evidenze", label: "Automatizzare raccolta evidenze, registri e assessment" },
      { value: "audit-inspector", label: "Automatizzare audit e interviste con Inspector" },
      { value: "bozze-documentali", label: "Generare bozze di DPIA, FRIA, gap analysis e classificazioni" },
      { value: "valutare-grc", label: "Valutare un GRC per il nostro studio, ente o azienda" },
      { value: "altro", label: "Altro / da definire" },
    ],
  },
  {
    id: "role",
    domanda: "Qual è il tuo ruolo nel processo decisionale per l’adozione del software?",
    opzioni: [
      { value: "decisore", label: "Sono il decision maker e approvo direttamente l’acquisto" },
      { value: "co-decisore", label: "Partecipo alla decisione insieme ad altri" },
      { value: "referente-operativo", label: "Sono il referente operativo o tecnico e influenzo la scelta" },
      { value: "raccolta-informazioni", label: "Sto raccogliendo informazioni per il decision maker" },
    ],
  },
  {
    id: "revenue",
    domanda: "In quale fascia di fatturato annuo si colloca la tua organizzazione?",
    opzioni: [
      { value: "fino-250k", label: "Fino a €250.000" },
      { value: "250k-1m", label: "€250.001 – €1 milione" },
      { value: "1m-5m", label: "€1 – €5 milioni" },
      { value: "5m-20m", label: "€5 – €20 milioni" },
      { value: "20m-50m", label: "€20 – €50 milioni" },
      { value: "oltre-50m", label: "Oltre €50 milioni" },
      { value: "pa-non-profit", label: "Ente pubblico / organizzazione non profit / non applicabile" },
    ],
  },
  {
    id: "timing",
    domanda: "Quando vorresti valutare o introdurre EurocomplAI?",
    opzioni: [
      { value: "entro-30-giorni", label: "Il prima possibile / entro 30 giorni" },
      { value: "1-3-mesi", label: "Entro 1–3 mesi" },
      { value: "3-6-mesi", label: "Entro 3–6 mesi" },
      { value: "oltre-6-mesi", label: "Oltre 6 mesi" },
    ],
  },
];
