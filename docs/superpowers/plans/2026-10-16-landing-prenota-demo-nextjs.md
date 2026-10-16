# Landing /prenota-demo/ come pagina Next.js — piano di implementazione

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `/prenota-demo/` diventa una pagina del sito con la grafica di oggi, il banner cookie e il tag Google del sito, e niente più copia della logica cookie nella landing.

**Architecture:** le pagine del sito vanno nel route group `app/(sito)/`, che carica `globals.css` e `SiteHeader`; la landing sta in `app/(landing)/prenota-demo/` con un CSS suo, tutto sotto `.lp`. Il layout radice tiene solo token, font, banner e provider del consenso. Markup e CSS della landing si convertono con due script una tantum dal file statico, così la resa resta la stessa; screenshot prima/dopo confrontati pixel per pixel.

**Tech Stack:** Next.js 14.2 (App Router, `output: "export"`), React 18, TypeScript; verifiche con Playwright globale (`NODE_PATH=$(npm root -g)`) e ImageMagick `compare`.

**Spec:** `docs/superpowers/specs/2026-10-16-landing-prenota-demo-nextjs-design.md`

**Variabili usate nei comandi:**

```bash
REPO=/workspace/eurocomplai-site
S=/tmp/claude-0/-workspace/1885863c-973b-5fe7-9364-bf7545ef9552/scratchpad   # strumenti e output delle verifiche, fuori dal repo
STATICA=$S/landing-statica.html                                              # la landing statica come su main prima della migrazione
```

---

## Mappa dei file

| File | Azione | Responsabilità |
|---|---|---|
| `app/layout.tsx` | modifica | `<html>`, font, `base.css`, provider consenso, banner, JSON-LD, metadati di default |
| `app/base.css` | nuovo | token `:root` del design system, base di `body` |
| `app/globals.css` | modifica | perde token, base di `body` e regole del banner (spostati) |
| `app/not-found.tsx` | nuovo | 404 come oggi: header del sito + 404 di Next |
| `app/(sito)/layout.tsx` | nuovo | `globals.css` + `SiteHeader` per tutte le pagine del sito |
| `app/(sito)/**` | spostati | tutte le pagine attuali (`page.tsx`, `chi-siamo/` … `termini/`) |
| `components/CookieBanner.css` | nuovo | regole `cookie-*` + reset a specificità zero |
| `components/CookieBanner.tsx` | modifica | importa `CookieBanner.css` |
| `lib/demoRequest.ts` | nuovo | endpoint, chiave anon, questionario, `sendDemoRequest` |
| `lib/googleTag.ts` | modifica | `trackDemoRequestConversion`; commenti sulla copia rimossi |
| `lib/cookieConsent.ts` | modifica | commento sulla copia rimosso |
| `app/(landing)/prenota-demo/page.tsx` | nuovo (generato) | markup e metadati della landing |
| `app/(landing)/prenota-demo/landing.css` | nuovo (generato) | CSS della landing sotto `.lp` |
| `app/(landing)/prenota-demo/DemoRequestForm.tsx` | nuovo | modulo a passi, casella, invio, conversione |
| `app/(landing)/prenota-demo/RevealOnScroll.tsx` | nuovo | comparsa delle sezioni allo scroll |
| `app/(landing)/prenota-demo/ManageCookiesButton.tsx` | nuovo | «Gestisci cookie» apre il banner del sito |
| `public/prenota-demo/index.html` | eliminato | sostituito dalla pagina |

---

### Task 0: Preparazione

- [ ] **Step 1: branch da main e dipendenze**

```bash
cd $REPO && git fetch origin && git checkout -B claude/hopeful-feynman-vi0gcp origin/main
ls node_modules/.bin/next >/dev/null || npm ci
git show origin/main:public/prenota-demo/index.html > $STATICA
grep -c 'name="privacy" required' $STATICA   # atteso: 1 (casella ripristinata con #8)
```

- [ ] **Step 2: commit della spec e del piano**

```bash
git add docs/superpowers && git commit -m "Spec e piano: landing /prenota-demo/ come pagina del sito"
```

### Task 1: strumenti di verifica (fuori dal repo)

**Files:** `$S/pw/shots.js`, `$S/pw/banner.js`, `$S/pw/form.e2e.js`, `$S/pw/consenso.e2e.js`, `$S/pw/diff.sh`, `$S/pw/meta.py`

- [ ] **Step 1: screenshot a pagina intera e a banner aperto** — `$S/pw/shots.js`

```js
// node shots.js <baseUrl> <cartella> <percorsi,separati,da,virgola> [--senza-pulsante-cookie]
const { chromium } = require('playwright');
const fs = require('fs');
const [base, dir, percorsi, ...flag] = process.argv.slice(2);
const nascondiPulsante = flag.includes('--senza-pulsante-cookie');
const SCELTA = { functional: false, analytics: false, marketing: false, version: '1.1' };
(async () => {
  fs.mkdirSync(dir, { recursive: true });
  const browser = await chromium.launch();
  for (const p of percorsi.split(',')) {
    for (const w of [1440, 820, 390, 360]) {
      for (const stato of ['scelta', 'banner']) {
        const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, reducedMotion: 'reduce' });
        if (stato === 'scelta') await ctx.addInitScript((s) => localStorage.setItem('ec_consent_v1', JSON.stringify(s)), SCELTA);
        const page = await ctx.newPage();
        await page.route('**/googletagmanager.com/**', (r) => r.abort());
        await page.route('**/rest/v1/rpc/log_consent', (r) => r.fulfill({ status: 204, body: '' }));
        await page.goto(base + p, { waitUntil: 'networkidle' });
        await page.evaluate(() => document.fonts.ready);
        if (nascondiPulsante) await page.addStyleTag({ content: '.cookie-settings-btn{visibility:hidden!important}' });
        await page.waitForTimeout(400);
        const nome = `${p.replace(/\//g, '_')}-${w}-${stato}.png`;
        await page.screenshot({ path: `${dir}/${nome}`, fullPage: stato === 'scelta' });
        await ctx.close();
      }
    }
  }
  await browser.close();
})();
```

- [ ] **Step 2: ritaglio del banner (chiuso, aperto, categorie)** — `$S/pw/banner.js`

```js
// node banner.js <baseUrl> <cartella> <percorso>
const { chromium } = require('playwright');
const fs = require('fs');
const [base, dir, p] = process.argv.slice(2);
(async () => {
  fs.mkdirSync(dir, { recursive: true });
  const browser = await chromium.launch();
  for (const w of [1440, 390]) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    await page.route('**/googletagmanager.com/**', (r) => r.abort());
    await page.route('**/rest/v1/rpc/log_consent', (r) => r.fulfill({ status: 204, body: '' }));
    await page.goto(base + p, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.locator('.cookie-banner').screenshot({ path: `${dir}/banner-${w}.png` });
    await page.getByRole('button', { name: 'Personalizza' }).click();
    await page.locator('.cookie-banner').screenshot({ path: `${dir}/categorie-${w}.png` });
    await page.getByRole('button', { name: 'Salva preferenze' }).click();
    await page.locator('.cookie-settings-btn').screenshot({ path: `${dir}/pulsante-${w}.png` });
    await ctx.close();
  }
  await browser.close();
})();
```

- [ ] **Step 3: confronto pixel per pixel** — `$S/pw/diff.sh`

```bash
#!/usr/bin/env bash
# diff.sh <cartellaA> <cartellaB>: per ogni png di A, pixel diversi in B (0 = identiche)
a=$1; b=$2; esito=0
for f in "$a"/*.png; do
  n=$(basename "$f"); [[ $n == diff-* ]] && continue
  if [ ! -f "$b/$n" ]; then echo "MANCA $n"; esito=1; continue; fi
  sa=$(identify -format '%wx%h' "$f"); sb=$(identify -format '%wx%h' "$b/$n")
  if [ "$sa" != "$sb" ]; then echo "DIMENSIONI $n: $sa / $sb"; esito=1; continue; fi
  px=$(compare -metric AE "$f" "$b/$n" "$b/diff-$n" 2>&1 >/dev/null)
  if [ "$px" = "0" ]; then rm -f "$b/diff-$n"; else echo "DIVERSA $n: $px px"; esito=1; fi
done
[ $esito = 0 ] && echo "TUTTE IDENTICHE"
exit $esito
```

- [ ] **Step 4: comportamento del modulo** — `$S/pw/form.e2e.js` (stampa un JSON: si confronta l'uscita su landing statica e nuova)

```js
// node form.e2e.js <urlLanding>
const { chromium } = require('playwright');
const url = process.argv[2];
const NESSUNA = { functional: false, analytics: false, marketing: false, version: '1.1' };
const MARKETING = { functional: false, analytics: false, marketing: true, version: '1.1' };
async function apri(browser, { esito = 200, consenso = NESSUNA } = {}) {
  const ctx = await browser.newContext();
  await ctx.addInitScript((c) => localStorage.setItem('ec_consent_v1', JSON.stringify(c)), consenso);
  const page = await ctx.newPage();
  const inviati = [];
  await page.route('**/functions/v1/contact-notify', async (r) => { inviati.push(JSON.parse(r.request().postData())); await r.fulfill({ status: esito, body: '{}', contentType: 'application/json' }); });
  await page.route('**/rest/v1/rpc/log_consent', (r) => r.fulfill({ status: 204, body: '' }));
  await page.route('**/googletagmanager.com/**', (r) => r.abort());
  const errori = []; page.on('pageerror', (e) => errori.push(e.message));
  await page.goto(url, { waitUntil: 'networkidle' });
  return { ctx, page, inviati, errori };
}
async function rispondi(form, scelte) {
  for (const i of scelte) {
    await form.locator('fieldset.q-step:not([hidden]) .q-option').nth(i).click();
    await form.locator('.q-next').click();
  }
}
async function contatti(form) {
  await form.locator('input[name=name]').fill('Prova Test');
  await form.locator('input[name=email]').fill('prova@example.com');
}
(async () => {
  const browser = await chromium.launch();
  const r = {};
  { // invio completo: senza spunta non parte, con la spunta sì
    const { ctx, page, inviati, errori } = await apri(browser);
    const form = page.locator('#modulo-hero form');
    r.statoIniziale = [await form.locator('.q-progress-label').innerText(), await form.locator('.q-next').isDisabled(), await form.locator('.q-back').isHidden()];
    await rispondi(form, [1, 2, 3, 0]);
    r.ultimoPasso = [await form.locator('.q-progress-label').innerText(), await form.locator('.q-next').innerText(), await page.evaluate(() => document.activeElement && document.activeElement.textContent)];
    await contatti(form);
    await form.locator('input[name=company]').fill('ACME');
    await form.locator('textarea[name=message]').fill('Contesto di prova');
    r.testoCasella = (await form.locator('.consent').innerText()).trim();
    await form.locator('.q-next').click(); await page.waitForTimeout(300);
    r.inviiSenzaSpunta = inviati.length;
    await form.locator('input[name=privacy]').check();
    await form.locator('.q-next').click(); await page.waitForTimeout(800);
    r.payload = inviati[0];
    r.conferma = [(await page.locator('#modulo-hero .form-msg').innerText()).trim(), await page.evaluate(() => document.activeElement && document.activeElement.className)];
    r.erroriJs = errori; await ctx.close();
  }
  { // indietro conserva le risposte; il secondo modulo resta indipendente
    const { ctx, page } = await apri(browser);
    const hero = page.locator('#modulo-hero form');
    await rispondi(hero, [2, 1]);
    await hero.locator('.q-back').click();
    r.rispostaConservata = await hero.locator('fieldset.q-step:not([hidden]) input[type=radio]').nth(2).isChecked();
    r.secondoModulo = await page.locator('#modulo-funziona .q-progress-label').innerText();
    await ctx.close();
  }
  { // errore del server
    const { ctx, page, inviati } = await apri(browser, { esito: 500 });
    const form = page.locator('#modulo-hero form');
    await rispondi(form, [0, 0, 0, 0]); await contatti(form);
    await form.locator('input[name=privacy]').check();
    await form.locator('.q-next').click(); await page.waitForTimeout(800);
    r.errore = [(await form.locator('.form-msg.error').innerText()).trim(), await form.locator('.q-next').innerText(), await form.locator('.q-next').isEnabled(), await form.locator('.q-back').isEnabled(), inviati.length];
    await ctx.close();
  }
  { // honeypot: finto successo, nessun invio
    const { ctx, page, inviati } = await apri(browser);
    const form = page.locator('#modulo-hero form');
    await rispondi(form, [0, 0, 0, 0]); await contatti(form);
    await form.locator('input[name=website]').evaluate((el) => { el.value = 'bot'; });
    await form.locator('input[name=privacy]').check();
    await form.locator('.q-next').click(); await page.waitForTimeout(500);
    r.honeypot = [inviati.length, (await page.locator('#modulo-hero .form-msg').innerText()).trim()];
    await ctx.close();
  }
  for (const [nome, consenso] of [['senzaMarketing', NESSUNA], ['conMarketing', MARKETING]]) { // conversione Google Ads
    const { ctx, page } = await apri(browser, { consenso });
    const form = page.locator('#modulo-hero form');
    await rispondi(form, [0, 0, 0, 0]); await contatti(form);
    await form.locator('input[name=privacy]').check();
    await form.locator('.q-next').click(); await page.waitForTimeout(800);
    r['conversione_' + nome] = await page.evaluate(() => (window.dataLayer || []).filter((a) => a[0] === 'event' && a[1] === 'conversion').map((a) => a[2].send_to));
    await ctx.close();
  }
  console.log(JSON.stringify(r, null, 2));
  await browser.close();
})();
```

- [ ] **Step 5: consenso sulla landing** — `$S/pw/consenso.e2e.js`

```js
// node consenso.e2e.js <baseUrl>
const { chromium } = require('playwright');
const base = process.argv[2];
(async () => {
  const browser = await chromium.launch();
  const page = await (await browser.newContext()).newPage();
  const google = [];
  await page.route('**/googletagmanager.com/**', (r) => { google.push(r.request().url()); r.fulfill({ status: 200, body: '', contentType: 'text/javascript' }); });
  await page.route('**/rest/v1/rpc/log_consent', (r) => r.fulfill({ status: 204, body: '' }));
  const r = {};
  r.copiaNelloHtml = (await (await page.request.get(base + '/prenota-demo/')).text()).includes('ec_consent_v1');
  await page.goto(base + '/prenota-demo/', { waitUntil: 'networkidle' });
  r.bannerDelSito = await page.locator('.cookie-overlay .cookie-banner').isVisible();
  r.vecchioBanner = await page.locator('#cookie-banner').count();
  r.googlePrimaDellaScelta = google.length;
  await page.getByRole('button', { name: 'Accetta tutti' }).click();
  await page.waitForTimeout(500);
  r.googleDopoAccetta = google.map((u) => new URL(u).searchParams.get('id'));
  r.sceltaSalvata = await page.evaluate(() => JSON.parse(localStorage.getItem('ec_consent_v1')));
  await page.goto(base + '/', { waitUntil: 'networkidle' });
  r.bannerSullaHome = await page.locator('.cookie-overlay').count();
  await page.goto(base + '/prenota-demo/', { waitUntil: 'networkidle' });
  await page.locator('.foot-legal button', { hasText: 'Gestisci cookie' }).click();
  r.gestisciApreIlBanner = await page.locator('.cookie-overlay .cookie-banner').isVisible();
  console.log(JSON.stringify(r, null, 2));
  await browser.close();
})();
```

Atteso sulla landing nuova: `copiaNelloHtml: false`, `bannerDelSito: true`, `vecchioBanner: 0`, `googlePrimaDellaScelta: 0`, `googleDopoAccetta: ["AW-18468380524"]`, `sceltaSalvata` con le tre categorie `true` e `version: "1.1"`, `bannerSullaHome: 0`, `gestisciApreIlBanner: true`.

- [ ] **Step 6: metadati** — `$S/pw/meta.py`

```python
# python3 -I meta.py <htmlA> <htmlB>: title, description, canonical, og:*, twitter:card a confronto
import sys
from html.parser import HTMLParser
class P(HTMLParser):
    def __init__(s):
        super().__init__(); s.m = {}; s.dentro = False
    def handle_starttag(s, tag, a):
        a = dict(a)
        if tag == 'title': s.dentro = True
        chiave = a.get('name') if a.get('name') in ('description', 'twitter:card') else a.get('property')
        if tag == 'meta' and chiave and (chiave in ('description', 'twitter:card') or chiave.startswith('og:')):
            s.m.setdefault(chiave, a.get('content'))
        if tag == 'link' and a.get('rel') == 'canonical': s.m['canonical'] = a.get('href')
    def handle_data(s, d):
        if s.dentro: s.m.setdefault('title', d)
    def handle_endtag(s, tag):
        if tag == 'title': s.dentro = False
def leggi(f):
    p = P(); p.feed(open(f, encoding='utf-8').read()); return p.m
a, b = leggi(sys.argv[1]), leggi(sys.argv[2])
for k in sorted(set(a) | set(b)):
    print('OK  ' if a.get(k) == b.get(k) else 'DIFF', k, '|', a.get(k), '|', b.get(k))
```

### Task 2: riferimento «prima»

- [ ] **Step 1: build di main in una worktree e screenshot**

```bash
git -C $REPO worktree add --detach $S/prima origin/main
ln -s $REPO/node_modules $S/prima/node_modules
(cd $S/prima && npx next build) && (cd $S/prima/out && python3 -m http.server 8801 >/dev/null 2>&1 &)
# /404.html è la pagina che Cloudflare serve per gli indirizzi inesistenti
PAGINE=/,/cookie/,/demo/,/privacy/,/come-funziona/,/soluzioni/sanita/,/404.html
NODE_PATH=$(npm root -g) node $S/pw/shots.js http://localhost:8801 $S/shots/sito-prima $PAGINE
NODE_PATH=$(npm root -g) node $S/pw/shots.js http://localhost:8801 $S/shots/landing-prima /prenota-demo/
NODE_PATH=$(npm root -g) node $S/pw/banner.js http://localhost:8801 $S/shots/banner-home-prima /
NODE_PATH=$(npm root -g) node $S/pw/form.e2e.js http://localhost:8801/prenota-demo/ > $S/form-prima.json
NODE_PATH=$(npm root -g) node $S/pw/consenso.e2e.js http://localhost:8801 > $S/consenso-prima.json
```

Atteso: `consenso-prima.json` con `bannerDelSito: false` e `vecchioBanner: 1` (è il test che deve fallire prima della migrazione).

### Task 3: struttura — route group, base.css, CSS del banner, 404

**Files:** `app/(sito)/layout.tsx` (nuovo), `app/(sito)/**` (spostati), `app/layout.tsx`, `app/base.css` (nuovo), `app/globals.css`, `components/CookieBanner.css` (nuovo), `components/CookieBanner.tsx`, `app/not-found.tsx` (nuovo)

- [ ] **Step 1: spostare le pagine nel gruppo**

```bash
cd $REPO && mkdir -p "app/(sito)"
git mv app/page.tsx app/chi-siamo app/come-funziona app/cookie app/demo app/pricing app/privacy app/soluzioni app/termini "app/(sito)/"
```

- [ ] **Step 2: `app/(sito)/layout.tsx`**

```tsx
import "../globals.css";
import SiteHeader from "@/components/SiteHeader";

/**
 * Layout delle pagine del sito: header e stile globale. La landing
 * /prenota-demo/ sta fuori da questo gruppo perché ha grafica e CSS suoi.
 */
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
```

- [ ] **Step 3: `app/base.css`** — il blocco `:root` di `globals.css` (righe 13–48) si sposta qui com'è; il `body` perde solo `overflow-x`, che resta in `globals.css`

```bash
{ printf '/* Base comune a sito e landing: token del design system e corpo pagina.\n   Il resto dello stile del sito sta in globals.css, che la landing\n   /prenota-demo/ non carica perché ha un CSS suo. */\n\n'
  sed -n '13,48p' app/globals.css
  printf '\nbody {\n  margin: 0;\n  font-family: var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;\n  background: var(--bg);\n  color: var(--ink);\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n'
} > app/base.css
```

- [ ] **Step 4: `components/CookieBanner.css`** — reset a specificità zero, poi le regole del banner spostate da `globals.css` (righe 2964–3174 e le cinque righe `cookie-*` del `@media (max-width: 520px)`, righe 3249–3253)

```bash
{ cat <<'EOF'
/* Banner e pulsante delle preferenze cookie, su tutte le pagine. La landing
   /prenota-demo/ non carica globals.css: questo reset riproduce, a
   specificità zero, quello che altrove danno il reset di globals.css e il
   preflight di Tailwind, così il banner è identico ovunque. */
:where(.cookie-overlay, .cookie-settings-btn),
:where(.cookie-overlay, .cookie-settings-btn) *,
:where(.cookie-overlay, .cookie-settings-btn) ::before,
:where(.cookie-overlay, .cookie-settings-btn) ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border-width: 0;
  border-style: solid;
}
:where(.cookie-overlay) :where(button),
:where(.cookie-settings-btn) {
  font-family: inherit;
  font-size: 100%;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  color: inherit;
  background-color: transparent;
}
:where(.cookie-overlay, .cookie-settings-btn) :where(svg) {
  display: block;
  vertical-align: middle;
}

EOF
  sed -n '2964,3174p' app/globals.css
  printf '\n@media (max-width: 520px) {\n'
  sed -n '3249,3253p' app/globals.css
  printf '}\n'
} > components/CookieBanner.css
```

- [ ] **Step 5: togliere da `globals.css` ciò che si è spostato** (dal fondo, per non spostare i numeri di riga)

```bash
sed -i '3248,3255d' app/globals.css   # @media (max-width: 520px) del banner e riga vuota seguente
sed -i '2964,3175d' app/globals.css   # regole del banner e riga vuota seguente
sed -i '50,59d' app/globals.css       # body base → base.css
sed -i '13,48d' app/globals.css       # :root → base.css
sed -i '13i body { overflow-x: hidden; }' app/globals.css
grep -c "cookie-overlay\|cookie-settings-btn\|cookie-btn {" app/globals.css   # atteso: 0
grep -n "booking-gate-inner .cookie-btn--primary\|\.cookie-h3" app/globals.css  # restano
```

Prima di ogni `sed -i` si controlla con `sed -n` che le righe siano quelle attese (righe 2964 = commento COOKIE BANNER, 3174 = `.cookie-btn--ghost:hover`, 3248 = `@media (max-width: 520px) {`, 3254 = `}`).

- [ ] **Step 6: `components/CookieBanner.tsx`** — dopo `"use client";`

```tsx
import "./CookieBanner.css";
```

- [ ] **Step 7: `app/layout.tsx`**

```tsx
// prima:  import "./globals.css";
import "./base.css";
// rimuovere: import SiteHeader from "@/components/SiteHeader";
```

e nel JSX:

```tsx
    // La landing aggiunge la classe "js" a <html> prima dell'idratazione
    // (animazioni di comparsa): suppressHydrationWarning evita l'avviso.
    <html lang="it" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body>
        <CookieConsentProvider>
          {children}
          <CookieBanner />
        </CookieConsentProvider>
```

- [ ] **Step 8: `app/not-found.tsx`** — il 404 di oggi è quello di Next dentro il layout con l'header

```tsx
import "./globals.css";
import NotFoundError from "next/dist/client/components/not-found-error";
import SiteHeader from "@/components/SiteHeader";

/**
 * 404 del sito. Il layout radice non ha più l'header (la landing non lo usa):
 * qui si rimette, con la pagina 404 predefinita di Next come prima.
 */
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <NotFoundError />
    </>
  );
}
```

- [ ] **Step 9: build e confronto del sito** — deve venire tutto identico

```bash
cd $REPO && npx next build && (cd out && python3 -m http.server 8802 >/dev/null 2>&1 &)
NODE_PATH=$(npm root -g) node $S/pw/shots.js http://localhost:8802 $S/shots/sito-dopo $PAGINE
NODE_PATH=$(npm root -g) node $S/pw/banner.js http://localhost:8802 $S/shots/banner-home-dopo /
bash $S/pw/diff.sh $S/shots/sito-prima $S/shots/sito-dopo
bash $S/pw/diff.sh $S/shots/banner-home-prima $S/shots/banner-home-dopo
```

Atteso: `TUTTE IDENTICHE` due volte. La landing statica in questo task è ancora in `public/`.

- [ ] **Step 10: commit**

```bash
git add -A app components && git commit -m "Pagine del sito in un route group; base comune e CSS del banner fuori da globals.css"
```

### Task 4: invio della richiesta e conversione in lib/

**Files:** `lib/demoRequest.ts` (nuovo), `lib/googleTag.ts`, `lib/cookieConsent.ts`

- [ ] **Step 1: `lib/demoRequest.ts`** — chiave anon e questionario estratti dal file statico, per non ricopiarli a mano

```bash
cd $REPO && python3 -I - "$STATICA" > lib/demoRequest.ts <<'EOF'
import re, sys
s = open(sys.argv[1], encoding="utf-8").read()
anon = re.search(r'const ANON = "([^"]+)"', s).group(1)
domande = re.search(r"const DOMANDE = (\[.*?\n    \]);", s, re.S).group(1)
domande = "\n".join(l[4:] if l.startswith("    ") else l for l in domande.split("\n"))
print(f'''/**
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
  "{anon}";

/**
 * Questionario di qualificazione, prima dei dati di contatto. Le risposte
 * viaggiano come codici con qualificationSet "eurocomplai-demo". La Edge
 * Function contact-notify ne tiene una copia per validarli e scriverli
 * nell'email di notifica, e rifiuta con un 400 i codici che non conosce: chi
 * cambia un'opzione qui deve cambiarla anche nella funzione e ripubblicarla.
 */
export const QUALIFICATION_SET = "eurocomplai-demo";

export type DemoQuestion = {{
  id: string;
  domanda: string;
  opzioni: [valore: string, etichetta: string][];
}};

export const DEMO_QUESTIONS: DemoQuestion[] = {domande};

export type DemoRequest = {{
  name: string;
  email: string;
  company: string | null;
  message: string;
  context: string;
  sourcePage: string;
  qualification: Record<string, string>;
  /** Salvato a DB come privacy_ack: senza presa visione la funzione rifiuta l'invio. */
  privacyAck: boolean;
}};

/** Invia la richiesta; lancia un errore se la funzione non risponde con un 2xx. */
export async function sendDemoRequest(req: DemoRequest): Promise<void> {{
  const res = await fetch(`${{SUPABASE_URL}}/functions/v1/contact-notify`, {{
    method: "POST",
    headers: {{
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${{SUPABASE_ANON_KEY}}`,
    }},
    body: JSON.stringify({{
      name: req.name,
      email: req.email,
      company: req.company,
      message: req.message,
      context: req.context,
      sourcePage: req.sourcePage,
      qualificationSet: QUALIFICATION_SET,
      qualification: req.qualification,
      privacyAck: req.privacyAck,
    }}),
  }});
  if (!res.ok) throw new Error("invio fallito");
}}''')
EOF
grep -c '\["' lib/demoRequest.ts   # atteso: 22 opzioni
```

- [ ] **Step 2: `lib/googleTag.ts`** — dopo `const GOOGLE_ANALYTICS_ID = …;`

```ts
/** Conversione Google Ads "Richiesta demo EurocomplAI" (azione di tipo caricamento pagina). */
const GOOGLE_ADS_DEMO_CONVERSION = `${GOOGLE_ADS_ID}/9AqKCIyK9p4dEOy-tOZE`;
```

in fondo al file:

```ts
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
```

e nel commento iniziale togliere le righe «La landing statica public/prenota-demo/index.html ne ha una copia in JavaScript semplice: tenerle allineate.»

- [ ] **Step 3: `lib/cookieConsent.ts`** — nel commento di `POLICY_VERSION` togliere «La landing statica public/prenota-demo/index.html legge la stessa chiave: aggiornare la versione anche lì.»

- [ ] **Step 4: `npx tsc --noEmit`** — atteso: nessun errore. Commit:

```bash
git add lib && git commit -m "Richiesta demo e conversione Google Ads in lib/, per la landing come pagina del sito"
```

### Task 5: componenti client della landing

**Files:** `app/(landing)/prenota-demo/DemoRequestForm.tsx`, `RevealOnScroll.tsx`, `ManageCookiesButton.tsx`

- [ ] **Step 1: `DemoRequestForm.tsx`**

```tsx
"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useCookieConsent } from "@/components/CookieConsentProvider";
import { DEMO_QUESTIONS, sendDemoRequest } from "@/lib/demoRequest";
import { trackDemoRequestConversion } from "@/lib/googleTag";

const CTA = "Prenota una demo di EurocomplAI";
const TOTALE = DEMO_QUESTIONS.length;

type Props = {
  /** Indice del modulo nella pagina: tiene distinti i nomi dei radio. */
  n: number;
  source: string;
  context: string;
};

/**
 * Richiesta demo: una domanda per schermata, poi i contatti. I passi non
 * attivi sono fieldset hidden e disabled: restano nel DOM (tornando indietro
 * le risposte non si perdono) ma non vengono validati né inviati.
 */
export default function DemoRequestForm({ n, source, context }: Props) {
  const { choices } = useCookieConsent();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [invio, setInvio] = useState(false);
  const [errore, setErrore] = useState(false);
  const [inviato, setInviato] = useState<false | "focus" | "silenzioso">(false);
  const titoli = useRef<(HTMLSpanElement | null)[]>([]);
  const focusAlTitolo = useRef(false);
  const conferma = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!focusAlTitolo.current) return;
    focusAlTitolo.current = false;
    // Il focus va sul titolo del nuovo passo: chi usa uno screen reader
    // sente subito la domanda successiva.
    titoli.current[step]?.focus();
  }, [step]);

  useEffect(() => {
    if (inviato === "focus") conferma.current?.focus();
  }, [inviato]);

  if (inviato) {
    return (
      <div>
        <div className="form-msg" role="status" tabIndex={-1} ref={conferma}>
          Grazie, richiesta inviata — ti ricontatteremo per la demo.
        </div>
      </div>
    );
  }

  const vai = (nuovo: number) => {
    focusAlTitolo.current = true;
    setStep(nuovo);
  };
  const testo = step < TOTALE ? `Domanda ${step + 1} di ${TOTALE}` : "Ultimo passo · I tuoi contatti";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (step < TOTALE) {
      if (answers[DEMO_QUESTIONS[step].id]) vai(step + 1);
      return;
    }
    const fd = new FormData(e.currentTarget);
    if (fd.get("website")) {
      // Campo honeypot compilato: probabile bot, si finge un invio riuscito.
      setInviato("silenzioso");
      return;
    }
    setInvio(true);
    try {
      await sendDemoRequest({
        name: String(fd.get("name") ?? ""),
        email: String(fd.get("email") ?? ""),
        company: String(fd.get("company") ?? "") || null,
        message: String(fd.get("message") ?? ""),
        context,
        sourcePage: source,
        qualification: answers,
        // privacy_ack a DB segue la casella: senza spunta contact-notify
        // rifiuta l'invio invece di registrare una presa visione mai data.
        privacyAck: fd.get("privacy") === "on",
      });
    } catch {
      setInvio(false);
      setErrore(true);
      return;
    }
    trackDemoRequestConversion({ ads: Boolean(choices?.marketing), analytics: Boolean(choices?.analytics) });
    setInviato("focus");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="q-progress">
          <span className="q-progress-label">{testo}</span>
          <div
            className="q-bar"
            role="progressbar"
            aria-label="Avanzamento della richiesta"
            aria-valuemin={1}
            aria-valuemax={TOTALE + 1}
            aria-valuenow={step + 1}
            aria-valuetext={testo}
          >
            <div style={{ width: `${((step + 1) / (TOTALE + 1)) * 100}%` }} />
          </div>
        </div>
        {DEMO_QUESTIONS.map((q, i) => (
          <fieldset className="q-step" key={q.id} hidden={i !== step} disabled={i !== step}>
            <legend>
              <span className="q-title" tabIndex={-1} ref={(el) => { titoli.current[i] = el; }}>
                {q.domanda}
              </span>
            </legend>
            <div className="q-options">
              {q.opzioni.map(([valore, etichetta]) => (
                <label className="q-option" key={valore}>
                  <input
                    type="radio"
                    name={`${q.id}-${n}`}
                    value={valore}
                    required
                    checked={answers[q.id] === valore}
                    onChange={() => setAnswers((a) => ({ ...a, [q.id]: valore }))}
                  />
                  <span>{etichetta}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
        <fieldset className="q-step" hidden={step !== TOTALE} disabled={step !== TOTALE}>
          <legend>
            <span className="q-title" tabIndex={-1} ref={(el) => { titoli.current[TOTALE] = el; }}>
              Come possiamo ricontattarti?
            </span>
          </legend>
          <div className="q-body">
            <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <div className="row">
              <input className="ig-field" type="text" name="name" required maxLength={200} autoComplete="name" placeholder="Nome e cognome" aria-label="Nome e cognome" />
              <input className="ig-field" type="email" name="email" required maxLength={200} autoComplete="email" placeholder="Email" aria-label="Email" />
            </div>
            <input className="ig-field" type="text" name="company" maxLength={200} autoComplete="organization" placeholder="Azienda (facoltativo)" aria-label="Azienda (facoltativo)" />
            <textarea className="ig-field" name="message" rows={3} maxLength={5000} placeholder="Vuoi aggiungere qualcosa sul contesto? (facoltativo)" aria-label="Contesto (facoltativo)" />
            <label className="consent">
              <input type="checkbox" name="privacy" required />
              <span>
                Ho preso visione dell&apos;<a href="https://eurocomplai.com/privacy/" target="_blank" rel="noopener">informativa privacy</a>.
              </span>
            </label>
          </div>
        </fieldset>
        {errore && (
          <div className="form-msg error" role="alert">
            Invio non riuscito. Scrivi a eurocomplai@integroup.eu oppure riprova.
          </div>
        )}
        <div className="q-actions">
          <button className="btn btn-ghost q-back" type="button" hidden={step === 0} disabled={invio} onClick={() => vai(step - 1)}>
            Indietro
          </button>
          <button className="btn btn-primary q-next" type="submit" disabled={invio || (step < TOTALE && !answers[DEMO_QUESTIONS[step].id])}>
            {invio ? "Invio…" : step < TOTALE ? "Avanti" : CTA}
          </button>
        </div>
      </form>
    </div>
  );
}
```

- [ ] **Step 2: `RevealOnScroll.tsx`**

```tsx
"use client";

import { useEffect } from "react";

/** Comparsa delle sezioni [data-reveal] allo scroll, come nella landing statica. */
export default function RevealOnScroll() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".lp [data-reveal]");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
    );
    nodes.forEach((n) => io.observe(n));
    const frame = requestAnimationFrame(() => {
      nodes.forEach((n) => {
        const r = n.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) n.classList.add("is-visible");
      });
    });
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);
  return null;
}
```

- [ ] **Step 3: `ManageCookiesButton.tsx`**

```tsx
"use client";

import { useCookieConsent } from "@/components/CookieConsentProvider";

/** «Gestisci cookie» nel footer della landing: apre il banner del sito. */
export default function ManageCookiesButton() {
  const { openSettings } = useCookieConsent();
  return (
    <button type="button" onClick={openSettings}>
      Gestisci cookie
    </button>
  );
}
```

### Task 6: pagina e CSS della landing (generati dal file statico)

**Files:** `app/(landing)/prenota-demo/landing.css`, `app/(landing)/prenota-demo/page.tsx`; eliminato `public/prenota-demo/index.html`

- [ ] **Step 1: convertitore del CSS** — `$S/conv/css.py`

```python
# python3 -I css.py <landing-statica.html> <landing.css>
import re, sys
html = open(sys.argv[1], encoding="utf-8").read()
css = html[html.index("<style>") + 7:html.index("</style>")]

def blocchi(s):
    i, out = 0, []
    while i < len(s):
        if s.startswith("/*", i):
            j = s.index("*/", i) + 2; out.append((s[i:j], None)); i = j; continue
        if s[i].isspace():
            i += 1; continue
        j = s.index("{", i); prelude = s[i:j].strip(); k, depth = j + 1, 1
        while depth:
            depth += {"{": 1, "}": -1}.get(s[k], 0); k += 1
        out.append((prelude, s[j + 1:k - 1])); i = k
    return out

def ambito(sel):
    sel = sel.strip()
    if sel in (":root", "body"): return ".lp"
    if sel == "*": return ".lp,.lp *"
    if sel == "html": return "html:has(.lp)"
    if sel.startswith(".js "): return ".js .lp " + sel[4:]
    return ".lp " + sel

def corpo(prelude, body):
    body = body.strip().replace("GeistSans", "var(--font-geist-sans)").replace("GeistMono", "var(--font-geist-mono)")
    body = body.replace("animation:pulse ", "animation:lp-pulse ")
    if prelude == "body":
        # Margine e sfondo arrivano da app/base.css; l'interlinea del body
        # del sito (1.5) non deve passare alla landing.
        body = re.sub(r"margin:0;|background:var\(--bg\);", "", body) + ";line-height:normal"
    return body

def converti(items, rientro=""):
    righe = []
    for prelude, body in items:
        if body is None:
            righe.append(rientro + prelude); continue
        if prelude.startswith("@font-face"): continue      # font da next/font
        if prelude.startswith("@media"):
            dentro = converti(blocchi(body), rientro + "  ")
            if dentro: righe.append(f"{rientro}{prelude}{{\n" + "\n".join(dentro) + f"\n{rientro}}}")
            continue
        if prelude.startswith("@keyframes"):
            righe.append(rientro + prelude.replace("pulse", "lp-pulse") + "{" + body.strip() + "}"); continue
        selettori = [s for s in prelude.split(",") if not s.strip().startswith(".ck")]   # vecchio banner
        if selettori:
            righe.append(rientro + ",".join(ambito(s) for s in selettori) + "{" + corpo(prelude, body) + "}")
    return righe

intestazione = """/* Landing /prenota-demo/: CSS convertito dalla vecchia pagina statica.
   Ogni selettore sta sotto .lp, così nulla passa alle pagine del sito (e il
   globals.css del sito qui non è caricato). Font da next/font, keyframes
   con prefisso lp- dove il nome esiste anche nel sito. */
"""
open(sys.argv[2], "w", encoding="utf-8").write(intestazione + "\n".join(converti(blocchi(css))) + "\n")
```

- [ ] **Step 2: convertitore del markup** — `$S/conv/jsx.py`

```python
# python3 -I jsx.py <landing-statica.html> <page.tsx> <page.template.tsx>
import json, re, sys
from html.parser import HTMLParser
html = open(sys.argv[1], encoding="utf-8").read()
inizio = html.index("<body>") + len("<body>")
markup = html[inizio:html.index("<script>", inizio)]
loghi = re.search(r"const LOGOS = (\[.*?\]);", html, re.S).group(1)

ATTR = {"class": "className", "tabindex": "tabIndex", "viewbox": "viewBox", "stroke-width": "strokeWidth",
        "stroke-linecap": "strokeLinecap", "stroke-linejoin": "strokeLinejoin", "stroke-dasharray": "strokeDasharray",
        "fill-rule": "fillRule", "clip-rule": "clipRule"}
VUOTI = {"img", "input", "br", "hr"}

def stile(s):
    voci = []
    for d in filter(str.strip, s.split(";")):
        k, v = d.split(":", 1)
        voci.append(re.sub(r"-([a-z])", lambda m: m.group(1).upper(), k.strip()) + ": " + json.dumps(v.strip()))
    return "{{ " + ", ".join(voci) + " }}"

def testo(t):
    for a, b in (("&", "&amp;"), ("<", "&lt;"), (">", "&gt;"), ("{", "&#123;"), ("}", "&#125;")):
        t = t.replace(a, b)
    return t

class Conv(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True); self.out = []; self.moduli = 0; self.salta = 0
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if self.salta:
            self.salta += 1; return
        if "data-ig-form" in a:
            self.out.append(f'<DemoRequestForm n={{{self.moduli}}} source="{a["data-source"]}" context="{a["data-context"]}" />')
            self.moduli += 1; self.salta = 1; return
        if "data-logos" in a:
            self.out.append("<LogoRow decorative />" if a.get("aria-hidden") == "true" else "<LogoRow />"); self.salta = 1; return
        if "data-cookie-open" in a:
            self.out.append("<ManageCookiesButton />"); self.salta = 1; return
        parti = [tag]
        for k, v in attrs:
            nome = ATTR.get(k, k)
            if k == "style": parti.append(f"style={stile(v)}")
            elif v is None: parti.append(f'{nome}=""' if k.startswith("data-") else nome)
            # Le stringhe di attributo JSX non hanno escape con backslash: entità HTML.
            else: parti.append(nome + '="' + v.replace("&", "&amp;").replace('"', "&quot;") + '"')
        self.out.append("<" + " ".join(parti) + (" />" if tag in VUOTI else ">"))
    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VUOTI and not self.salta: self.out.append(f"</{tag}>")
    def handle_endtag(self, tag):
        if self.salta:
            self.salta -= 1; return
        if tag not in VUOTI: self.out.append(f"</{tag}>")
    def handle_data(self, data):
        if not self.salta: self.out.append(testo(data))
    def handle_comment(self, data):
        if not self.salta: self.out.append("{/*" + data + "*/}")

c = Conv(); c.feed(markup)
corpo = "\n".join(("    " + r) if r.strip() else "" for r in "".join(c.out).strip("\n").split("\n"))
pagina = open(sys.argv[3], encoding="utf-8").read().replace("/*LOGHI*/", loghi).replace("{/*MARKUP*/}", corpo.strip())
open(sys.argv[2], "w", encoding="utf-8").write(pagina)
```

- [ ] **Step 3: modello della pagina** — `$S/conv/page.template.tsx` (i segnaposto `/*LOGHI*/` e `{/*MARKUP*/}` li sostituisce `jsx.py`)

```tsx
/* eslint-disable @next/next/no-img-element -- loghi e certificazioni arrivano da integroup.eu, come nella landing statica; con l'export statico next/image non li ottimizzerebbe comunque */
import type { Metadata } from "next";
import "./landing.css";
import DemoRequestForm from "./DemoRequestForm";
import ManageCookiesButton from "./ManageCookiesButton";
import RevealOnScroll from "./RevealOnScroll";

const TITLE = "EurocomplAI — Automatizza GDPR, NIS2 e AI Act";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description:
    "EurocomplAI estrae evidenze dai documenti, conduce audit con gli agenti e prepara bozze pronte per la validazione. Prenota una demo di EurocomplAI.",
  alternates: { canonical: "/prenota-demo/" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "EurocomplAI",
    url: "/prenota-demo/",
    title: TITLE,
    description:
      "Un GRC che estrae evidenze, conduce audit e prepara bozze. Tu decidi — il resto del lavoro operativo viene gestito dal sistema.",
    images: ["/og-image.png"],
  },
  twitter: { card: "summary_large_image" },
};

const ASSET = "https://integroup.eu";
const LOGOS = /*LOGHI*/;

function LogoRow({ decorative = false }: { decorative?: boolean }) {
  return (
    <div className="logo-row" aria-hidden={decorative || undefined}>
      {LOGOS.map((l) => (
        <img key={l.src} src={ASSET + l.src} alt={decorative ? "" : l.alt} style={{ height: l.height }} />
      ))}
    </div>
  );
}

/**
 * Landing degli annunci Google Ads. Ha grafica e CSS suoi (landing.css, tutto
 * sotto .lp) e non usa header né globals.css del sito; banner cookie,
 * consenso e tag Google sono quelli del sito, dal layout radice.
 */
export default function PrenotaDemoPage() {
  return (
    <div className="lp">
      {/* Con JS attivo le sezioni partono nascoste e compaiono allo scroll:
          la classe va messa prima che il contenuto venga disegnato. */}
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      <RevealOnScroll />
      {/*MARKUP*/}
    </div>
  );
}
```

- [ ] **Step 4: generare, eliminare il file statico, compilare**

```bash
cd $REPO && mkdir -p "app/(landing)/prenota-demo"
python3 -I $S/conv/css.py $STATICA "app/(landing)/prenota-demo/landing.css"
python3 -I $S/conv/jsx.py $STATICA "app/(landing)/prenota-demo/page.tsx" $S/conv/page.template.tsx
git rm -q public/prenota-demo/index.html
grep -c "\.ck" "app/(landing)/prenota-demo/landing.css"   # atteso: 0
npx tsc --noEmit && npm run lint && npx next build
ls out/prenota-demo/index.html
```

Atteso: nessun errore di tipi, lint senza errori, build riuscita.

### Task 7: verifiche della landing

- [ ] **Step 1: aspetto, a scelta fatta, rispetto alla landing statica** (il pulsante «Cookie» fisso nascosto: è l'unica aggiunta voluta)

```bash
(cd $REPO/out && python3 -m http.server 8803 >/dev/null 2>&1 &)
NODE_PATH=$(npm root -g) node $S/pw/shots.js http://localhost:8803 $S/shots/landing-dopo /prenota-demo/ --senza-pulsante-cookie
mkdir -p $S/shots/landing-prima-scelta $S/shots/landing-dopo-scelta
cp $S/shots/landing-prima/*-scelta.png $S/shots/landing-prima-scelta/ && cp $S/shots/landing-dopo/*-scelta.png $S/shots/landing-dopo-scelta/
bash $S/pw/diff.sh $S/shots/landing-prima-scelta $S/shots/landing-dopo-scelta
```

Atteso: `TUTTE IDENTICHE`. Se no: aprire `diff-*.png`, correggere `landing.css`/`page.tsx` (o il convertitore e rigenerare), ricompilare, ripetere.

- [ ] **Step 2: il banner sulla landing è identico a quello della home**

```bash
NODE_PATH=$(npm root -g) node $S/pw/banner.js http://localhost:8803 $S/shots/banner-landing /prenota-demo/
bash $S/pw/diff.sh $S/shots/banner-home-dopo $S/shots/banner-landing
```

Atteso: `TUTTE IDENTICHE`.

- [ ] **Step 3: modulo** — stesso comportamento della landing statica

```bash
NODE_PATH=$(npm root -g) node $S/pw/form.e2e.js http://localhost:8803/prenota-demo/ > $S/form-dopo.json
diff $S/form-prima.json $S/form-dopo.json && echo "MODULO IDENTICO"
```

Atteso: `MODULO IDENTICO`, con `inviiSenzaSpunta: 0`, `payload.privacyAck: true`, `conversione_senzaMarketing: []`, `conversione_conMarketing: ["AW-18468380524/9AqKCIyK9p4dEOy-tOZE"]`, `erroriJs: []`.

- [ ] **Step 4: consenso**

```bash
NODE_PATH=$(npm root -g) node $S/pw/consenso.e2e.js http://localhost:8803
```

Atteso: i valori elencati in Task 1 Step 5.

- [ ] **Step 5: metadati**

```bash
python3 -I $S/pw/meta.py $STATICA $REPO/out/prenota-demo/index.html
```

Atteso: `OK` per title, description, canonical, og:title, og:description, og:url, og:type, og:locale, og:site_name, og:image, twitter:card.

- [ ] **Step 6: commit**

```bash
cd $REPO && git add -A "app/(landing)" public && git commit -m "Landing /prenota-demo/ come pagina del sito, con banner cookie e tag Google del sito"
```

### Task 8: pubblicazione per la revisione

- [ ] **Step 1:** `git push -u origin claude/hopeful-feynman-vi0gcp`
- [ ] **Step 2:** PR in bozza verso `main` con riepilogo e risultati delle verifiche.
- [ ] **Step 3:** attendere il check «Cloudflare Pages» e ripetere `form.e2e.js` e `consenso.e2e.js` sull'anteprima (`https://claude-hopeful-feynman-vi0gc.eurocomplai-site.pages.dev`), sempre con le richieste intercettate.
- [ ] **Step 4:** fermare i server locali e rimuovere la worktree: `git -C $REPO worktree remove --force $S/prima`.

---

## Esecuzione: scostamenti dal piano

- **Reset del banner (Task 3, Step 4).** Il progetto ha il preflight di Tailwind disattivato
  (`corePlugins.preflight: false`): l'unica base del sito è `* { box-sizing: border-box;
  margin: 0; padding: 0; }` di `globals.css`. Il reset di `CookieBanner.css` riproduce solo
  quello; la versione del piano copiava anche il preflight e portava l'interlinea dei pulsanti
  da `normal` a 1.5 (banner più alto di 3,5 px), come mostrato dal confronto.
- **Strumenti di verifica.**
  - `rete.js` blocca ogni host esterno tranne font (eurocomplai.com) e immagini
    (integroup.eu). Il filtro `**/googletagmanager.com/**` del piano non intercettava
    `www.googletagmanager.com`: nei primi giri sulla landing statica, con consenso marketing,
    il tag Google vero è partito.
  - Negli screenshot animazioni e transizioni sono ferme: alcune pagine del sito animano in
    continuo e due scatti della stessa build non venivano identici. Le animazioni della
    landing si controllano a parte (`document.getAnimations()`).
  - In `banner.js` il puntatore si sposta dopo ogni clic (lo stato hover con transizione
    falsava il confronto). Timeout di navigazione a 60 s.
  - `form.e2e.js`: la verifica «risposta conservata» guarda l'opzione scelta (indice 1).
- **Esiti.** Sito identico pixel per pixel (7 pagine × 4 larghezze × banner aperto/chiuso,
  più banner chiuso, categorie e pulsante). Landing identica alla statica a 4 larghezze;
  banner della landing uguale a quello della home (differiscono solo gli angoli
  arrotondati, dove si vede la pagina sotto). Modulo con esiti identici alla statica.
  Consenso, metadati, animazioni, comparsa allo scroll e navigazione verso `/cookie/` dal
  banner come attesi; nessun errore o avviso in console.
