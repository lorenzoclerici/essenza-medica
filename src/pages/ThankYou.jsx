import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  CheckIcon,
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import Footer from '../components/Footer'

const ease = [0.22, 1, 0.36, 1]

export default function ThankYou() {
  const reduce = useReducedMotion()
  const params = new URLSearchParams(window.location.search)
  const nome = params.get('nome')?.trim() || ''
  const telefono = params.get('telefono')?.trim() || ''

  useEffect(() => {
    document.title = 'Grazie · Essenza Medica Open Day'
  }, [])

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-ink text-white">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="Essenza Medica"
            className="h-[4.5rem] w-auto sm:h-[5.25rem]"
          />
        </a>
      </header>

      <main className="relative flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/images/ingresso.png')" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/92 to-ink"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-xl">
          <motion.span
            initial={reduce ? false : { opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease }}
            className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-ink"
          >
            <CheckIcon className="h-8 w-8" />
          </motion.span>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-brand"
          >
            Registrazione confermata
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease }}
            className="mt-4 text-[clamp(2rem,6vw,3.25rem)] font-extrabold uppercase leading-tight tracking-tight"
          >
            {nome ? `Grazie, ${nome}!` : 'Grazie!'}
            <span className="mt-2 block text-[0.55em] font-semibold normal-case tracking-normal text-white/85">
              Sei in lista per l&apos;Open Day.
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease }}
            className="mt-5 text-base leading-relaxed text-white/70 md:text-lg"
          >
            {telefono ? (
              <>
                Ti invieremo la conferma su WhatsApp al numero{' '}
                <strong className="font-semibold text-white">{telefono}</strong>{' '}
                con tutti i dettagli per raggiungerci.
              </>
            ) : (
              <>
                Ti invieremo a breve la conferma su WhatsApp con tutti i
                dettagli per raggiungerci.
              </>
            )}
          </motion.p>

          <motion.ul
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.34, ease }}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3"
          >
            {[
              {
                icon: CalendarDaysIcon,
                label: 'Sabato 19 settembre',
              },
              {
                icon: ClockIcon,
                label: 'Dalle ore 16:30',
              },
              {
                icon: MapPinIcon,
                label: 'Via Ariete 18, 47923 Rimini (RN)',
              },
            ].map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white ring-1 ring-white/10"
              >
                <Icon className="h-5 w-5 shrink-0 text-brand" aria-hidden />
                {label}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.44, ease }}
            className="mt-10"
          >
            <a
              href="/"
              className="inline-flex rounded-xl bg-brand px-7 py-4 text-sm font-bold uppercase tracking-wider text-ink transition hover:bg-brand-dark"
            >
              Torna alla home
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
