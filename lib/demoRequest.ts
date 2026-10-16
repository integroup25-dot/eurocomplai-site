/**
 * Richiesta demo della landing /prenota-demo/: invio alla Edge Function
 * contact-notify (repo integroup.eu), che salva il messaggio in
 * integroup_contact_messages e manda la notifica.
 *
 * Endpoint e chiave anon (pubblica per costruzione) sono costanti e non le
 * variabili NEXT_PUBLIC_SUPABASE_*: le build di anteprima di Cloudflare non
 * le hanno, e il modulo deve funzionare anche lì.
 */
const SUPABASE_URL = "https://qjlbbbbhfxagzubjyvje.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqbGJiYmJoZnhhZ3p1Ymp5dmplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMTkzODEsImV4cCI6MjA5NTg5NTM4MX0.Pkf5prSdzxuNBVoWhLATdZNyuLXgW3hfILKb1lt2D3M";

/**
 * Questionario di qualificazione, prima dei dati di contatto. Le risposte
 * viaggiano come codici con qualificationSet "eurocomplai-demo". La Edge
 * Function contact-notify ne tiene una copia per validarli e scriverli
 * nell'email di notifica, e rifiuta con un 400 i codici che non conosce: chi
 * cambia un'opzione qui deve cambiarla anche nella funzione e ripubblicarla.
 */
export const QUALIFICATION_SET = "eurocomplai-demo";

export type DemoQuestion = {
  id: string;
  domanda: string;
  opzioni: [valore: string, etichetta: string][];
};

export const DEMO_QUESTIONS: DemoQuestion[] = [
  {
    id: "need",
    domanda: "Qual è oggi il principale bisogno che vorresti risolvere con EurocomplAI?",
    opzioni: [
      ["ridurre-lavoro-manuale", "Ridurre il lavoro manuale nella gestione della compliance"],
      ["sistema-unico", "Gestire GDPR, NIS2 e AI Act in un unico sistema"],
      ["automatizzare-evidenze", "Automatizzare raccolta evidenze, registri e assessment"],
      ["audit-inspector", "Automatizzare audit e interviste con Inspector"],
      ["bozze-documentali", "Generare bozze di DPIA, FRIA, gap analysis e classificazioni"],
      ["valutare-grc", "Valutare un GRC per il nostro studio, ente o azienda"],
      ["altro", "Altro / da definire"]
    ]
  },
  {
    id: "role",
    domanda: "Qual è il tuo ruolo nel processo decisionale per l’adozione del software?",
    opzioni: [
      ["decisore", "Sono il decision maker e approvo direttamente l’acquisto"],
      ["co-decisore", "Partecipo alla decisione insieme ad altri"],
      ["referente-operativo", "Sono il referente operativo o tecnico e influenzo la scelta"],
      ["raccolta-informazioni", "Sto raccogliendo informazioni per il decision maker"]
    ]
  },
  {
    id: "revenue",
    domanda: "In quale fascia di fatturato annuo si colloca la tua organizzazione?",
    opzioni: [
      ["fino-250k", "Fino a €250.000"],
      ["250k-1m", "€250.001 – €1 milione"],
      ["1m-5m", "€1 – €5 milioni"],
      ["5m-20m", "€5 – €20 milioni"],
      ["20m-50m", "€20 – €50 milioni"],
      ["oltre-50m", "Oltre €50 milioni"],
      ["pa-non-profit", "Ente pubblico / organizzazione non profit / non applicabile"]
    ]
  },
  {
    id: "timing",
    domanda: "Quando vorresti valutare o introdurre EurocomplAI?",
    opzioni: [
      ["entro-30-giorni", "Il prima possibile / entro 30 giorni"],
      ["1-3-mesi", "Entro 1–3 mesi"],
      ["3-6-mesi", "Entro 3–6 mesi"],
      ["oltre-6-mesi", "Oltre 6 mesi"]
    ]
  }
];

export type DemoRequest = {
  name: string;
  email: string;
  company: string | null;
  message: string;
  context: string;
  sourcePage: string;
  qualification: Record<string, string>;
  /** Salvato a DB come privacy_ack: senza presa visione la funzione rifiuta l'invio. */
  privacyAck: boolean;
};

/** Invia la richiesta; lancia un errore se la funzione non risponde con un 2xx. */
export async function sendDemoRequest(req: DemoRequest): Promise<void> {
  const res = await fetch(`${SUPABASE_URL}/functions/v1/contact-notify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      name: req.name,
      email: req.email,
      company: req.company,
      message: req.message,
      context: req.context,
      sourcePage: req.sourcePage,
      qualificationSet: QUALIFICATION_SET,
      qualification: req.qualification,
      privacyAck: req.privacyAck,
    }),
  });
  if (!res.ok) throw new Error("invio fallito");
}
