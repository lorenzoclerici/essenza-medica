import { motion, useReducedMotion } from 'framer-motion'
import {
  CalendarDaysIcon,
  MapPinIcon,
  ClockIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

const ease = [0.22, 1, 0.36, 1]

function BrandMark({ className = '' }) {
  return (
    <a href="#top" className={`inline-flex items-center ${className}`}>
      <img
        src="/images/logo.png"
        alt="Essenza Medica — Medicina e benessere per la persona"
        className="h-12 w-auto sm:h-14"
      />
    </a>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink text-white md:min-h-[100svh]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.35] md:opacity-50"
        style={{ backgroundImage: "url('/images/ingresso.png')" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/55 md:to-ink/40"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40"
        aria-hidden
      />

      {/* Desktop: team absolute a destra */}
      <img
        src="/images/hero-team.png"
        alt="Équipe di specialisti Essenza Medica"
        className="pointer-events-none absolute bottom-0 right-0 hidden h-[72%] w-auto max-w-[58%] object-contain object-bottom md:block lg:h-[78%] lg:max-w-[52%]"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-6 pb-0 pt-8 md:min-h-[100svh] md:pb-16">
        <header className="flex items-center justify-between gap-4">
          <BrandMark />
          <a
            href="#registrazione"
            className="rounded-xl bg-brand px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-ink transition hover:bg-brand-dark"
          >
            Registrati
          </a>
        </header>

        <div className="mt-10 flex flex-1 flex-col justify-start md:mt-10 md:max-w-xl md:justify-center lg:max-w-2xl">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex w-fit rounded-full bg-brand/20 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand ring-1 ring-brand/40"
          >
            Finalmente ci siamo
          </motion.span>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease }}
            className="mt-6 text-[clamp(2rem,5.5vw,3.5rem)] font-extrabold uppercase leading-[1.08] tracking-tight text-white"
          >
            Open Day
            <span className="mt-2 block">19 Settembre</span>
            <span className="mt-2 block text-[0.72em] font-bold tracking-wide text-brand md:mt-3">
              Ore 16.30
            </span>
            <span className="mt-3 block text-[0.55em] font-semibold normal-case tracking-normal text-white/90 md:mt-4">
              Ti aspettiamo.
            </span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease }}
            className="mt-5 max-w-lg text-base font-medium italic leading-relaxed text-white/80 md:text-lg"
          >
            Scopri il nuovo poliambulatorio e incontra di persona i nostri
            specialisti. Un pomeriggio dedicato alla tua salute — l&apos;ingresso
            è gratuito.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.34, ease }}
            className="mt-7 flex flex-wrap gap-2.5"
          >
            {[
              { icon: CalendarDaysIcon, label: 'Open Day' },
              { icon: MapPinIcon, label: '19 Settembre' },
              { icon: ClockIcon, label: 'Dalle 16:30' },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/15 backdrop-blur-sm"
              >
                <Icon className="h-4 w-4 text-brand" aria-hidden />
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.46, ease }}
            className="mt-9"
          >
            <motion.a
              href="#registrazione"
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              className="inline-flex rounded-xl bg-brand px-7 py-4 text-sm font-bold uppercase tracking-wider text-ink shadow-lg shadow-brand/20"
            >
              Registrati all&apos;Open Day
            </motion.a>
            <p className="mt-3 text-xs text-white/55">
              Partecipazione gratuita · Posti limitati · Bastano 30 secondi
            </p>
          </motion.div>
        </div>

        <motion.a
          href="#contesto"
          aria-label="Scorri alla sezione successiva"
          className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 text-white/50 md:block"
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={
            reduce
              ? undefined
              : { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <ChevronDownIcon className="h-7 w-7" />
        </motion.a>
      </div>

      {/* Mobile: full-bleed in fondo alla hero */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.55, ease }}
        className="relative z-10 mt-10 w-full md:hidden"
      >
        <img
          src="/images/hero-team.png"
          alt=""
          className="block h-auto w-full object-cover object-bottom"
          aria-hidden
        />
      </motion.div>
    </section>
  )
}
