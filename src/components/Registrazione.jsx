import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  LockClosedIcon,
  CalendarDaysIcon,
  MapPinIcon,
  CheckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'
import { FadeUp } from './Motion'

const initial = {
  nome: '',
  cognome: '',
  email: '',
  telefono: '',
  privacy: false,
  ricontatto: false,
}

export default function Registrazione() {
  const reduce = useReducedMotion()
  const [form, setForm] = useState(initial)
  const [touched, setTouched] = useState({})
  const [loading, setLoading] = useState(false)

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
  const phoneOk = form.telefono.replace(/\D/g, '').length >= 8
  const valid = {
    nome: form.nome.trim().length >= 2,
    cognome: form.cognome.trim().length >= 2,
    email: emailOk,
    telefono: phoneOk,
    privacy: form.privacy,
  }
  const canSubmit = Object.values(valid).every(Boolean)

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setTouched({
      nome: true,
      cognome: true,
      email: true,
      telefono: true,
      privacy: true,
    })
    if (!canSubmit) return
    setLoading(true)
    // Placeholder: collegare webhook Relatia CRM / n8n
    await new Promise((r) => setTimeout(r, 900))
    const params = new URLSearchParams({
      nome: form.nome.trim(),
      telefono: form.telefono.trim(),
    })
    window.location.assign(`/grazie?${params.toString()}`)
  }

  return (
    <section id="registrazione" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
            Registrati ora — è gratuito e bastano 30 secondi
          </h2>
          <p className="mt-4 text-base text-ink/70 md:text-lg">
            Compila il form e ti invieremo su WhatsApp la conferma con tutti i
            dettagli per raggiungerci. I posti sono limitati.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-6 lg:grid-cols-5 lg:gap-8">
          <FadeUp className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-2xl border border-ink/8 bg-mist p-6 shadow-[0_10px_40px_rgba(30,44,53,0.06)] md:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Nome"
                  icon={UserIcon}
                  required
                  value={form.nome}
                  valid={valid.nome}
                  touched={touched.nome}
                  onBlur={() => setTouched((t) => ({ ...t, nome: true }))}
                  onChange={(v) => update('nome', v)}
                  autoComplete="given-name"
                />
                <Field
                  label="Cognome"
                  icon={UserIcon}
                  required
                  value={form.cognome}
                  valid={valid.cognome}
                  touched={touched.cognome}
                  onBlur={() => setTouched((t) => ({ ...t, cognome: true }))}
                  onChange={(v) => update('cognome', v)}
                  autoComplete="family-name"
                />
                <Field
                  label="Email"
                  icon={EnvelopeIcon}
                  required
                  type="email"
                  value={form.email}
                  valid={valid.email}
                  touched={touched.email}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  onChange={(v) => update('email', v)}
                  autoComplete="email"
                  className="sm:col-span-2"
                />
                <Field
                  label="Telefono"
                  icon={PhoneIcon}
                  required
                  type="tel"
                  value={form.telefono}
                  valid={valid.telefono}
                  touched={touched.telefono}
                  onBlur={() => setTouched((t) => ({ ...t, telefono: true }))}
                  onChange={(v) => update('telefono', v)}
                  autoComplete="tel"
                  className="sm:col-span-2"
                />
              </div>

              <label className="mt-5 flex items-start gap-3 text-sm text-ink/80">
                <input
                  type="checkbox"
                  checked={form.privacy}
                  onChange={(e) => {
                    update('privacy', e.target.checked)
                    setTouched((t) => ({ ...t, privacy: true }))
                  }}
                  className="mt-1 h-4 w-4 accent-brand"
                  required
                />
                <span>
                  Accetto il trattamento dei dati personali secondo la{' '}
                  <a href="#privacy" className="underline underline-offset-2">
                    Privacy Policy
                  </a>
                  .*
                  {touched.privacy && !valid.privacy && (
                    <span className="mt-1 block text-xs text-red-600">
                      Consenso obbligatorio
                    </span>
                  )}
                </span>
              </label>

              <label className="mt-3 flex items-start gap-3 text-sm text-ink/80">
                <input
                  type="checkbox"
                  checked={form.ricontatto}
                  onChange={(e) => update('ricontatto', e.target.checked)}
                  className="mt-1 h-4 w-4 accent-brand"
                />
                <span>
                  Vorrei essere ricontattato per una visita (opzionale)
                </span>
              </label>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={reduce || loading ? undefined : { scale: 1.02 }}
                whileTap={reduce || loading ? undefined : { scale: 0.97 }}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-sm font-bold uppercase tracking-wider text-ink disabled:opacity-70"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/30 border-t-ink" />
                    Invio in corso…
                  </span>
                ) : (
                  'Confermo la mia partecipazione'
                )}
              </motion.button>

              <p className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-xs text-ink/55">
                <span className="inline-flex items-center gap-1">
                  <LockClosedIcon className="h-3.5 w-3.5" />
                  Dati al sicuro, mai condivisi
                </span>
                <span>Nessun costo, nessun impegno</span>
                <span>Solo conferma WhatsApp dell&apos;evento</span>
              </p>
            </form>
          </FadeUp>

          <FadeUp delay={0.12} className="lg:col-span-2">
            <aside className="flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-ink p-7 text-white md:p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                  Reminder evento
                </p>
                <h3 className="mt-3 text-2xl font-extrabold uppercase leading-tight">
                  Open Day
                  <br />
                  Essenza Medica
                </h3>
                <ul className="mt-8 space-y-4 text-sm text-white/80">
                  <li className="flex items-start gap-3">
                    <CalendarDaysIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span>
                      <strong className="block font-semibold text-white">
                        Sabato 19 settembre
                      </strong>
                      Un pomeriggio dedicato alla tua salute
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span>
                      <strong className="block font-semibold text-white">
                        Dalle 16:30
                      </strong>
                      Ingresso gratuito · Posti limitati
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    <span>
                      <strong className="block font-semibold text-white">
                        Via Ariete 18
                      </strong>
                      47923 Rimini (RN)
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 overflow-hidden rounded-xl">
                <img
                  src="/images/studio.png"
                  alt="Studio Essenza Medica"
                  className="aspect-[16/10] w-full object-cover opacity-90"
                  loading="lazy"
                />
              </div>
            </aside>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  icon: Icon,
  value,
  onChange,
  onBlur,
  valid,
  touched,
  required,
  type = 'text',
  autoComplete,
  className = '',
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink/60">
        {label}
        {required ? ' *' : ''}
      </span>
      <span className="relative block">
        <Icon className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/35" />
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          autoComplete={autoComplete}
          required={required}
          className={`w-full rounded-xl border bg-white py-3 pl-11 pr-10 text-sm text-ink outline-none transition focus:ring-2 focus:ring-brand/40 ${
            touched && !valid
              ? 'border-red-400'
              : touched && valid
                ? 'border-brand'
                : 'border-ink/10'
          }`}
        />
        {touched && valid && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-brand"
          >
            <CheckIcon className="h-5 w-5" />
          </motion.span>
        )}
      </span>
    </label>
  )
}
