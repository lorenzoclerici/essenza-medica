import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import {
  HeartIcon,
  SparklesIcon,
  AcademicCapIcon,
  BeakerIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline'
import { FadeUp, staggerContainer, staggerItem } from './Motion'

const specialties = [
  'Cardiologia',
  'Ginecologia e Ostetricia',
  'Dermatologia',
  'Ortopedia',
  'Allergologia',
  'Medicina dello Sport',
  'Angiologia',
  'Medicina Estetica',
  'Fisiatria',
  'Dietistica e Nutrizione',
  'Pediatria',
  'Neurologia',
  'Osteopatia',
  'Ecografia',
]

const iconCycle = [
  HeartIcon,
  SparklesIcon,
  AcademicCapIcon,
  BeakerIcon,
  ShieldCheckIcon,
]

const trust = [
  'Medici specialisti con esperienza pluriennale',
  'Strumentazione diagnostica avanzata',
  'Percorsi personalizzati',
]

function CountUp({ to = 14 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setValue(to)
      return
    }
    let frame
    const start = performance.now()
    const duration = 1100
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(eased * to))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, to, reduce])

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  )
}

export default function Specialita() {
  const reduce = useReducedMotion()

  return (
    <section id="specialita" className="bg-mist py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
            <CountUp /> specialità
          </p>
          <h2 className="mt-3 text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
            Tutte le specialità, sotto lo stesso tetto
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/75 md:text-lg">
            Essenza Medica riunisce medici specialisti con esperienza
            pluriennale in un unico poliambulatorio, per offrirti percorsi di
            cura completi senza doverti spostare da uno studio all&apos;altro.
          </p>
        </FadeUp>

        <motion.ul
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
          variants={reduce ? undefined : staggerContainer}
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, margin: '-40px' }}
        >
          {specialties.map((name, i) => {
            const Icon = iconCycle[i % iconCycle.length]
            return (
              <motion.li
                key={name}
                variants={reduce ? undefined : staggerItem}
                whileHover={reduce ? undefined : { scale: 1.02 }}
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-[0_6px_24px_rgba(30,44,53,0.05)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-ink">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-xs font-semibold uppercase leading-snug tracking-wide text-ink sm:text-sm">
                  {name}
                </span>
              </motion.li>
            )
          })}
        </motion.ul>

        <FadeUp delay={0.08} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
          {trust.map((item) => (
            <p
              key={item}
              className="inline-flex items-start gap-2 text-sm font-medium text-ink/80"
            >
              <CheckBadgeIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              {item}
            </p>
          ))}
        </FadeUp>
      </div>
    </section>
  )
}
