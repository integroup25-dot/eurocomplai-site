# Landing /prenota-demo/ come pagina del sito Next.js

Data: 2026-10-16 · Stato: approvato (strada A)

## Obiettivo

La landing `/prenota-demo/` oggi è un file HTML statico (`public/prenota-demo/index.html`)
con una copia propria del banner cookie, del consenso e del tag Google. La copia va tenuta
allineata a mano con `lib/cookieConsent.ts` e `lib/googleTag.ts`, e un disallineamento non
dà errori visibili. La landing diventa una pagina del sito che usa banner, consenso e tag
del sito: un solo codice. Grafica, testi, modulo e misurazioni restano quelli di oggi.

## Vincoli

- URL invariato: `/prenota-demo/` (destinazione degli annunci Google Ads).
- Aspetto della landing invariato. Unica differenza ammessa: banner cookie e pulsante
  "Cookie" del sito al posto del banner della landing.
- Pagine del sito invariate, negli URL e nell'aspetto.
- Modulo: stesso questionario (4 domande, set `eurocomplai-demo`), stessi dati inviati a
  `contact-notify`, stessi messaggi di conferma ed errore.
- Casella obbligatoria «Ho preso visione dell'informativa privacy», senza formula di
  consenso. `privacyAck` (salvato a DB come `privacy_ack`) segue la casella: senza spunta
  il modulo non parte e la funzione rifiuta l'invio.
- Conversione Google Ads «Richiesta demo EurocomplAI»
  (`AW-18468380524/9AqKCIyK9p4dEOy-tOZE`) dopo un invio riuscito, solo con il consenso
  marketing.
- Metadati invariati: title, description, canonical, Open Graph, Twitter card.

## Architettura

Le pagine del sito e la landing hanno CSS incompatibili: stessi nomi di classe (`btn`,
`card`, `hero`, `eyebrow`, `logomark`…) con regole diverse, e `globals.css` contiene reset
globali e il preflight di Tailwind. La landing quindi non carica `globals.css`.

- `app/layout.tsx` (root): `<html>`/`<body>`, font Geist (`next/font/local`),
  `app/base.css` (token `:root` del design system, sfondo e margini di `body`,
  `scroll-behavior`), `CookieConsentProvider`, `CookieBanner`, JSON-LD, metadati di
  default. Non contiene più `SiteHeader` né `globals.css`.
- `app/(sito)/layout.tsx`: importa `../globals.css` e rende `SiteHeader` + pagina. Tutte le
  pagine attuali si spostano in `app/(sito)/`: il gruppo non compare negli URL.
- `app/(landing)/prenota-demo/`:
  - `page.tsx`: markup della landing (server component) e metadati;
  - `landing.css`: il CSS della landing con ogni selettore sotto `.lp` (nessuna fuga verso
    il resto del sito), keyframes rinominati, font tramite `var(--font-geist-sans)` e
    `var(--font-geist-mono)` invece dei file `_next/static/media/…` con nome generato;
  - `DemoRequestForm.tsx` (client): questionario, contatti, casella, invio, conversione;
  - `RevealOnScroll.tsx` (client): animazione di comparsa delle sezioni;
  - `ManageCookiesButton.tsx` (client): «Gestisci cookie» nel footer apre il banner del
    sito (`openSettings`).
- `components/CookieBanner.css`: le regole `cookie-*` escono da `globals.css` e sono
  importate da `CookieBanner.tsx`, così servono anche sulla landing. Le regole
  `booking-gate*` restano in `globals.css`.
- `lib/googleTag.ts`: nuova `trackDemoRequestConversion()`; spariscono i commenti sulla
  copia nella landing (anche in `lib/cookieConsent.ts`).
- `lib/demoRequest.ts`: endpoint di `contact-notify`, chiave anon (pubblica), set e domande
  del questionario. Restano costanti, come oggi, perché le build di anteprima Cloudflare
  non hanno le variabili `NEXT_PUBLIC_SUPABASE_*`.
- `app/not-found.tsx`: il 404 di oggi è quello predefinito di Next dentro il layout con
  l'header; tolto l'header dal layout radice, lo si rimette qui con `globals.css`.
- `public/prenota-demo/index.html` viene eliminato.

## Comportamento

- Modulo: una domanda per passo; i passi non attivi restano nel DOM come `fieldset`
  nascosti e disattivati (tornando indietro le risposte restano); «Avanti» disattivato
  finché la domanda non ha risposta; il focus va sul titolo del nuovo passo; campo
  honeypot `website` che simula un invio riuscito; durante l'invio «Invio…» e pulsanti
  disattivati; esito positivo → messaggio di conferma con focus; errore → messaggio
  sopra i pulsanti e pulsanti riattivati. Due istanze nella pagina (hero e «Come
  funziona»), indipendenti, con nomi dei radio distinti.
- Comparsa delle sezioni: come oggi, classe `js` su `<html>` aggiunta da uno script in
  linea prima del contenuto, `IntersectionObserver`, nessuna animazione con
  `prefers-reduced-motion`.
- Consenso: banner e pulsante del sito; la scelta è la stessa chiave `ec_consent_v1` del
  resto del sito; senza scelta nessun tag Google.

## Verifiche

- `next build` (export statico), `tsc --noEmit`, `next lint` puliti.
- Screenshot della landing vecchia e nuova a 1440, 820, 390 e 360 px, a pagina intera, con
  le animazioni ferme: differenze solo nell'area del banner/pulsante cookie.
- Screenshot prima/dopo di home, `/cookie/` e `/demo/` (banner aperto e chiuso):
  identici.
- Modulo, con tutte le richieste intercettate: senza spunta nessun invio; con la spunta
  un invio con dati identici alla versione statica; errore 500 → messaggio e pulsanti
  riattivati; honeypot; indietro con risposte conservate; seconda istanza indipendente.
- Consenso: nessuno script Google senza scelta; dopo «Accetta tutti» script e config
  attesi; conversione solo con consenso marketing; scelta condivisa tra landing e home;
  «Gestisci cookie» apre il banner.
- HTML generato di `/prenota-demo/`: metadati attesi.

## Fuori ambito

- L'informativa privacy di eurocomplai.com non descrive il trattamento delle richieste di
  demo (finalità, base giuridica, Supabase, Resend). Segnalato al titolare: testo da
  decidere a parte.
- Nessun cambio di grafica o di testi della landing.
