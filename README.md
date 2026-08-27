# Essenza Medica · Open Day Landing

Landing page per l'Open Day del 19 settembre (Rimini).

## Stack

- React 19 + Vite
- Tailwind CSS 4.1
- Framer Motion 12
- Heroicons

## Avvio

```bash
npm install
npm run dev
```

Apri l'URL mostrato nel terminale (di solito `http://localhost:5173`).

## Build produzione

```bash
npm run build
npm run preview
```

L'output è in `dist/` (incluso `index.html` e asset).

## Note

- Form → Google Sheet tab **Open day** (Nome, Cognome, Numero di telefono, E-mail, Data e ora).
- Setup webhook: vedi `scripts/google-apps-script/Code.gs`, poi imposta `VITE_GOOGLE_SHEETS_WEBHOOK_URL` (locale `.env` + Vercel).
- Immagini in `public/images/` (copie da `Immagini /`).
- Talk 18:30 e orario di chiusura ancora da confermare (come da Documentation.md).
