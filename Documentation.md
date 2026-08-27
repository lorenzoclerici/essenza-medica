# Landing Page — Essenza Medica · Open Day 19 Settembre
### Brief copy + direzione visiva (Cursor-ready)

> **Obiettivo:** registrazioni all'Open Day (lead generation via form).
> **Struttura:** 5C — Chiarezza, Contesto, Creatività, Call to Action, Credibilità.
> **Stack:** Tailwind CSS 4.1+ · Framer Motion 12 (animazioni) · Heroicons (icone).
> **Regola d'oro:** un solo messaggio guida ("vieni a conoscerci il 19 settembre"), zero distrazioni, beneficio prima della caratteristica.

---

## 🎨 Design System

| Elemento | Valore |
|----------|--------|
| Verde salvia / teal (accento, badge, CTA) | `#7FAE9E` |
| Blu notte / antracite (sfondo scuro hero) | `#1E2C35` |
| Bianco | `#FFFFFF` |
| Grigio chiaro (sezioni light) | `#F4F6F5` |
| Testo scuro | `#1E2C35` |
| Font titoli | Sans geometrico bold, UPPERCASE (es. Poppins / Montserrat SemiBold–Bold) |
| Font sottotitoli | Stesso font in *corsivo* |
| Font body | Sans regular ad alta leggibilità |

**Note Tailwind 4.1+:** definire i colori brand come `@theme` custom (`--color-brand`, `--color-ink`, `--color-mist`). Badge con `rounded-full px-4 py-2`, CTA con `rounded-xl`, ampio `gap` e `py-20/py-24` tra sezioni per il respiro tipico del brand. Container `max-w-6xl mx-auto px-6`.

**Note animazioni globali (Framer Motion 12):** pattern ricorrente = `initial={{opacity:0, y:24}}` → `whileInView={{opacity:1, y:0}}` con `viewport={{once:true}}` e `transition` ~0.5s ease-out. Le griglie usano `staggerChildren` (~0.08s). Rispettare `prefers-reduced-motion`.

**⚠️ Da confermare col cliente prima del go-live:**
1. Tema del **secondo talk delle 18:30** (nel testo è "altro talk", non specificato).
2. **Orario di chiusura** esatto (19:00 o 19:30).
3. Foto reali (interni sede, ritratti specialisti) e recensioni esistenti.

---

## 🟢 SEZIONE 1 — HERO

**Copy**
- Occhiello (badge): `FINALMENTE CI SIAMO`
- **H1:** Essenza Medica apre le porte a Rimini
- Sottotitolo: *Scopri il nuovo poliambulatorio e incontra di persona i nostri specialisti. Un pomeriggio dedicato alla tua salute — l'ingresso è gratuito.*
- Riga badge: `OPEN DAY` · `19 SETTEMBRE` · `DALLE 16:30`
- **CTA:** Registrati all'Open Day
- Micro-copy CTA: Partecipazione gratuita · Posti limitati · Bastano 30 secondi

**Visual:** sfondo `#1E2C35`, foto équipe di specialisti (stile locandina) sfumata a destra; testo a sinistra; logo bianco in alto a sinistra.

**Heroicons:** `CalendarDaysIcon`, `MapPinIcon`, `ClockIcon` nei tre badge.

**Framer Motion:** entrata sequenziale al load — badge → H1 → sottotitolo → CTA con delay crescente (fade-up). Freccia/chevron animata (`ChevronDownIcon`) con leggero loop verticale che invita allo scroll. CTA con `whileHover={{scale:1.03}}` e `whileTap={{scale:0.97}}`.

---

## 🟢 SEZIONE 2 — CONTESTO (cos'è l'Open Day)

**Copy**
- **H2:** Una giornata per conoscere la medicina che mette la persona al centro
- Testo: Il 19 settembre inauguriamo la nuova sede di Rimini e apriamo le porte a tutta la città. Non una semplice inaugurazione: un pomeriggio in cui puoi **visitare gli ambulatori, parlare con gli specialisti e ricevere le prime indicazioni di prevenzione**, senza impegno e in totale libertà. Perché per noi la salute non inizia dalla diagnosi, ma dall'ascolto. *Medicina e benessere per la persona* non è uno slogan: è il modo in cui lavoriamo ogni giorno.

**Tre pillole di beneficio (griglia 3 colonne):**
1. **Incontra gli specialisti** — parla direttamente con i medici delle diverse aree, senza prenotazione.
2. **Visita gli ambulatori** — scopri spazi, strumentazioni e come ci prendiamo cura di te.
3. **Ricevi consigli di prevenzione** — talk brevi e concreti per proteggere la tua salute.

**Visual:** foto luminosa reception/interno nuova sede accanto al testo.

**Heroicons:** `UserGroupIcon` (specialisti), `BuildingOffice2Icon` (ambulatori), `HeartIcon` (prevenzione).

**Framer Motion:** le 3 card entrano in stagger da sotto; icona con micro-scale (0.8→1) all'ingresso; su hover leggero `y:-4` e ombra morbida.

---

## 🟢 SEZIONE 3 — IL PROGRAMMA

**Copy**
- **H2:** Il programma del 19 settembre

| Ora | Momento |
|-----|---------|
| **16:30** | Apertura porte — ti accogliamo nella nuova sede |
| **17:00** | Essenza Talk: Pillole di prevenzione — consigli concreti dai nostri specialisti |
| **17:30** | Taglio del nastro & Brindisi — inauguriamo insieme |
| **18:00** | Meet the Specialists — ambulatori aperti per conoscere di persona i medici |
| **18:30** | *Secondo talk — [tema da confermare]* |
| **19:00 / 19:30** | *Chiusura — [orario da confermare]* |

- **CTA ripetuta:** Prenota il tuo posto all'Open Day

**Visual:** timeline verticale, pallini `#7FAE9E`, orari in bold, linea di connessione tra le tappe. Su mobile → lista scorrevole a step.

**Heroicons per tappa:** `KeyIcon` (apertura), `ChatBubbleLeftRightIcon` (talk), `ScissorsIcon` (taglio nastro), `UserGroupIcon` (meet), `SparklesIcon` (secondo talk), `CheckCircleIcon` (chiusura).

**Framer Motion:** la linea della timeline si "disegna" allo scroll (`scaleY` 0→1 con `useScroll`/`whileInView`); ogni tappa appare in stagger da sinistra man mano che entra nel viewport.

---

## 🟢 SEZIONE 4 — CREDIBILITÀ (aree mediche & specialisti)

**Copy**
- **H2:** Tutte le specialità, sotto lo stesso tetto
- Testo: Essenza Medica riunisce medici specialisti con esperienza pluriennale in un unico poliambulatorio, per offrirti percorsi di cura completi senza doverti spostare da uno studio all'altro.

**Griglia specialità (icona + nome):**
Cardiologia · Ginecologia e Ostetricia · Dermatologia · Ortopedia · Allergologia · Medicina dello Sport · Angiologia · Medicina Estetica · Fisiatria · Dietistica e Nutrizione · Pediatria · Neurologia · Osteopatia · Ecografia

**Riga trust:**
✔ Medici specialisti con esperienza pluriennale · ✔ Strumentazione diagnostica avanzata · ✔ Percorsi personalizzati

*(Se disponibili: 2–3 recensioni reali in card con stelle + eventuali ritratti degli specialisti — massimizzano la fiducia.)*

**Visual:** griglia responsive di card con icona in tondo verde salvia; opzionale sezione "I nostri specialisti" con foto reali.

**Heroicons:** `HeartIcon`, `SparklesIcon`, `AcademicCapIcon`, `BeakerIcon`, `ShieldCheckIcon`, `CheckBadgeIcon` (badge trust), `StarIcon` (recensioni).

**Framer Motion:** griglia in stagger; card con hover `scale:1.02`; contatore animato opzionale (es. "14 specialità") con count-up all'ingresso.

---

## 🟢 SEZIONE 5 — FORM DI REGISTRAZIONE (conversione)

**Copy**
- **H2:** Registrati ora — è gratuito e bastano 30 secondi
- Sottotitolo: Compila il form e ti invieremo la conferma con tutti i dettagli per raggiungerci. I posti sono limitati.

**Campi:** Nome* · Cognome* · Email* · Telefono* · ☐ consenso privacy* · ☐ (opz.) Vorrei essere ricontattato per una visita

- **CTA (grande):** Confermo la mia partecipazione
- Micro-copy anti-obiezione: 🔒 Dati al sicuro, mai condivisi · Nessun costo, nessun impegno · Riceverai solo la conferma dell'evento

**Visual:** due colonne — form su card bianca a sinistra; a destra pannello `#1E2C35` con reminder evento (data, ora, indirizzo, badge).

**Heroicons:** `UserIcon`, `EnvelopeIcon`, `PhoneIcon`, `LockClosedIcon` (privacy), `CalendarDaysIcon` + `MapPinIcon` (pannello reminder).

**Framer Motion:** validazione con micro-feedback (campo valido → check verde in fade); bottone con stato di caricamento animato; a submit riuscito → card di conferma che entra con `scale/opacity`.

**Integrazione (nota tecnica):** form → webhook Relatia CRM; opzionale sequenza Spoki WhatsApp di conferma + reminder il giorno prima. Da impostare in n8n.

---

## 🟢 SEZIONE 6 — DOVE SIAMO

**Copy**
- **H2:** Ti aspettiamo a Rimini
- 📍 Via Ariete 18, 47923 Rimini (RN)
- 📞 +39 0541 67 05 21
- ✉️ segreteria@essenzamedica.it
- 🌐 www.essenzamedica.it

**Visual:** mappa Google Maps embed su Via Ariete 18 + foto esterna edificio. *(Eventuale nota parcheggio/come arrivare — da chiedere al cliente.)*

**Heroicons:** `MapPinIcon`, `PhoneIcon`, `EnvelopeIcon`, `GlobeAltIcon`.

**Framer Motion:** blocco contatti in fade-up a sinistra, mappa in fade da destra.

---

## 🟢 SEZIONE 7 — CTA FINALE

**Copy**
- **H2:** Il 19 settembre apriamo le porte. Entra anche tu.
- Testo: Un pomeriggio per conoscerci, senza impegno. La tua salute merita un posto in prima fila.
- **CTA:** Registrati all'Open Day
- Micro-copy: Gratuito · Posti limitati · 19 settembre, dalle 16:30

**Visual:** banner full-width `#1E2C35` con foto sfumata (taglio del nastro / brindisi).

**Framer Motion:** parallax leggero sullo sfondo allo scroll; CTA con pulse discreto per richiamare l'attenzione finale.

---

## 🟢 FOOTER

Logo Essenza Medica · *Medicina e benessere per la persona* · Via Ariete 18, 47923 Rimini (RN) · contatti · P.IVA · Privacy Policy · Dir. Sanitario Dott. M. Angelico.

---

### ✅ Checklist pre-consegna
- [ ] Tema talk 18:30 confermato
- [ ] Orario chiusura confermato
- [ ] Foto reali interni + esterno sede
- [ ] Ritratti specialisti (min. 4–6)
- [ ] Recensioni reali (Google/MioDottore)
- [ ] Logo PNG trasparente (versione chiara + scura)
- [ ] Immagine hero + immagine taglio del nastro
- [ ] Webhook form → Relatia CRM testato
- [ ] Sequenza Spoki di conferma (opzionale)
