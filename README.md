# EurocomplAI — sito marketing

Sito statico (Next.js 14 + static export) per `eurocomplai.com`.
Deploy: Cloudflare Pages → repo GitHub `eurocomplai-site`.

## Stack

- **Next.js 14** (App Router, TypeScript) con `output: 'export'` → 100% statico
- **Tailwind v3** installato (preflight disabilitato; il design system custom è in `app/globals.css`)
- **Geist + Geist Mono** caricati localmente via `next/font/local` (file in `app/fonts/`)
- **Cloudflare Pages** come hosting (cartella di output: `out/`)

## Comandi

```bash
npm install            # prima volta
npm run dev            # dev server su http://localhost:3000
npm run build          # build statico → out/ (questa è la cartella che Cloudflare serve)
npm run build:assets   # rigenera favicon PNG + OG image da SVG (manual; vedi sotto)
npm run lint           # ESLint
```

## Struttura

```
site/
├── app/
│   ├── layout.tsx              # root layout + metadata + JSON-LD + fonts
│   ├── globals.css             # design system v2.0 + v2.1 delta + logomark v1.0 consolidato
│   ├── page.tsx                # Homepage
│   ├── come-funziona/page.tsx
│   ├── soluzioni/
│   │   ├── sanita/page.tsx
│   │   ├── studi-legali/page.tsx
│   │   ├── pa/page.tsx
│   │   └── aziende-private/page.tsx
│   ├── chi-siamo/page.tsx
│   ├── pricing/page.tsx
│   ├── demo/page.tsx           # include Microsoft Bookings inline + Tally placeholders
│   ├── sitemap.ts              # genera /sitemap.xml a build time
│   ├── robots.ts               # genera /robots.txt a build time
│   └── fonts/                  # Geist + Geist Mono woff
├── components/
│   ├── Logomark.tsx            # [eurocompl/ai] bracketed wordmark v1.0
│   ├── Header.tsx              # logomark + nav + CTA
│   ├── Footer.tsx
│   ├── TopStrip.tsx            # "Un prodotto di inteGroup" strip
│   ├── ArrowIcon.tsx
│   ├── SemaphoreDots.tsx
│   ├── CubeIcon.tsx
│   ├── BookingInline.tsx       # iframe Microsoft Bookings inline embed
│   └── TallyPlaceholder.tsx    # iframe Tally quando configurato, altrimenti placeholder
├── lib/
│   └── integrations.ts         # URL Microsoft Bookings + Tally — modifica qui per attivare i form
├── public/
│   ├── favicon.svg             # bracketed [/] vettoriale
│   ├── favicon-16.png
│   ├── favicon-32.png
│   ├── apple-touch-icon-180.png
│   ├── og-image.svg            # OG 1200×630 sorgente
│   ├── og-image.png            # OG rasterizzato
│   ├── _headers                # Cloudflare Pages: security + cache headers
│   └── _redirects              # Cloudflare Pages: www→apex + legacy .html → routes
├── scripts/
│   ├── build-favicons.mjs      # rigenera i 3 PNG favicon dal SVG
│   └── build-og-image.mjs      # rigenera og-image.png dal SVG
├── next.config.mjs             # output: 'export', trailingSlash: true
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Logomark (importante)

Il segno ufficiale è `[eurocompl/ai]` — **bracketed wordmark** in Geist Mono, spec in
`../logomark-spec-v1.0.md`. Il componente `<Logomark />` è la sola sorgente di verità —
non riprodurre il markup manualmente in nuove pagine, usa il componente.

```tsx
import Logomark from "@/components/Logomark";

<Logomark />                       // header default (18px)
<Logomark variant="display" />     // hero scale (clamp 36-56px)
<Logomark variant="footer" />      // 16px
<Logomark variant="strip" />       // 11px mono labels
<Logomark mono />                  // ai decade a --ink (mono dark)
<Logomark light />                 // monocromia ink-deep per fondo bianco
```

Favicon usa la variante astratta `[/]` (solo slash ambra in brackets) — file
`public/favicon.svg`.

## Form integrations

### Microsoft Bookings — già attivo
`lib/integrations.ts` → `integrations.bookings` punta alla pagina di prenotazione condivisa
`EurocomplAI Bookings` (mailbox `EurocomplAIBookings@integroup.eu`): servizio "Riunione di
30 minuti", personale Alessandro Oldani e Carlo Matera, orari Lun-Ven 9:00-13:00 e
14:00-18:00 con fuso orario del calendario impostato su Europe/Rome.

L'embed è inline su `/demo/` tramite `components/BookingInline.tsx`, dietro il gate dei
cookie funzionali. Per cambiare calendario, aggiorna `url` e `embedUrl` in
`lib/integrations.ts` copiando lo snippet dal pulsante **Incorpora** della pagina di
prenotazione in Bookings.

Bookings non supporta parametri di brand color come Calendly: l'aspetto del riquadro si
personalizza da Bookings → *Pagina di prenotazione* → *Personalizza la pagina*.

### Tally — placeholder per ora
`lib/integrations.ts` → `integrations.tally.scrivici` e `.earlyAccess` sono `null`.
Finché restano null, `/demo/` mostra delle card placeholder con un fallback email.
Per attivare i form:

1. Crea i form su [Tally](https://tally.so) ("Scrivici una domanda specifica" e
   "Candidati al programma early access")
2. Copia gli URL del tipo `https://tally.so/r/AbCdEf`
3. Apri `lib/integrations.ts` e sostituisci `null` con gli URL
4. Aggiorna anche `integrations.fallbackEmail` se diverso da quello di default

Nessun'altra modifica al codice è richiesta — il componente `<TallyPlaceholder>` cambia
automaticamente da card placeholder a iframe live quando l'URL è valorizzato.

## SEO

- Meta title/description per ogni pagina (via `export const metadata` nel page.tsx)
- Template title `"%s — EurocomplAI"` definito nel `app/layout.tsx`
- Canonical URL per pagina
- Open Graph + Twitter card configurate nel root layout (override per pagina possibile)
- JSON-LD strutturato: `Organization` (inteGroup) + `SoftwareApplication` (EurocomplAI)
- `/sitemap.xml` e `/robots.txt` generati a build time

## Asset binari (favicon, OG)

I PNG sono generati da SVG via `sharp`. Sorgenti SVG in `public/favicon.svg` e
`public/og-image.svg`. Per rigenerare i PNG dopo aver modificato un SVG:

```bash
node scripts/build-favicons.mjs   # rigenera favicon-16/32/180 PNG
node scripts/build-og-image.mjs   # rigenera og-image.png
```

## Deploy su Cloudflare Pages

1. Push del repo su GitHub: `eurocomplai-site` (questa cartella `site/` è il root del repo)
2. Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages** →
   **Connect to Git** → seleziona `eurocomplai-site`
3. Configurazione build:
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: (lascia vuoto se il repo punta a `site/`; altrimenti `site`)
4. **Save and Deploy**. Primo build: 1-3 minuti. Sito visibile su `eurocomplai.pages.dev`.
5. Per dominio custom: **Custom domains** → aggiungi `eurocomplai.com` e
   `www.eurocomplai.com` (il redirect www→apex è gestito da `public/_redirects`).

## Aggiornare i contenuti

Le pagine sono server components in TypeScript. Per modificare testi:
- apri `app/<pagina>/page.tsx`
- edita il JSX tra i tag
- salva → in dev mode il browser ricarica automaticamente

Per nuove pagine, crea una cartella `app/<slug>/page.tsx` con la stessa struttura
delle esistenti (TopStrip + main con sezioni + Footer) e aggiungila al
`sitemap.ts` per l'indicizzazione.

## Note diverse

- ESLint ha `react/no-unescaped-entities` e `react/jsx-no-comment-textnodes` disabilitati
  in `.eslintrc.json` per supportare gli apostrofi italiani diretti nel JSX.
- L'OG image SVG usa Geist Mono come font con fallback su SF Mono/Menlo. Sharp ne
  rasterizza una versione PNG che dipende dai font disponibili sulla macchina che
  esegue il build. Il PNG committato è la versione di riferimento — non rigenerare in CI
  a meno di voler accettare possibili differenze cromatiche.
