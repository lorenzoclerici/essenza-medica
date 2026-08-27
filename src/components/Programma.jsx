import { motion, useReducedMotion } from 'framer-motion'
import {
  KeyIcon,
  ChatBubbleLeftRightIcon,
  ScissorsIcon,
  UserGroupIcon,
  SparklesIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'
import { FadeUp } from './Motion'

const steps = [
  {
    time: '16:30',
    title: 'Apertura porte',
    text: 'Ti accogliamo nella nuova sede',
    icon: KeyIcon,
  },
  {
    time: '17:00',
    title: 'Essenza Talk: Pillole di prevenzione',
    text: 'Consigli concreti dai nostri specialisti',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    time: '17:30',
    title: 'Taglio del nastro & Brindisi',
    text: 'Inauguriamo insieme',
    icon: ScissorsIcon,
  },
  {
    time: '18:00',
    title: 'Meet the Specialists',
    text: 'Ambulatori aperti per conoscere di persona i medici',
    icon: UserGroupIcon,
  },
  {
    time: '18:30',
    title: 'Secondo talk',
    text: 'Tema in via di conferma',
    icon: SparklesIcon,
    muted: true,
  },
  {
    time: '19:00',
    title: 'Chiusura',
    text: 'Orario esatto in via di conferma',
    icon: CheckCircleIcon,
    muted: true,
  },
]

export default function Programma() {
  const reduce = useReducedMotion()

  return (
    <section id="programma" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="max-w-2xl">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
            Il programma del 19 settembre
          </h2>
        </FadeUp>

        <div className="relative mt-12 md:mt-14">
          <motion.div
            className="absolute bottom-2 left-[1.35rem] top-2 w-px origin-top bg-brand/40 md:left-[7.25rem]"
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          />

          <ol className="space-y-6 md:space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.li
                  key={step.time + step.title}
                  initial={reduce ? false : { opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid grid-cols-[2.7rem_1fr] items-start gap-4 md:grid-cols-[6.5rem_2.7rem_1fr] md:gap-5"
                >
                  <p className="hidden pt-2 text-right text-lg font-extrabold text-ink md:block">
                    {step.time}
                  </p>
                  <span className="relative z-10 mt-1.5 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-ink shadow-md shadow-brand/30">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div
                    className={`rounded-2xl border px-5 py-4 ${
                      step.muted
                        ? 'border-dashed border-ink/15 bg-mist/60'
                        : 'border-ink/8 bg-mist'
                    }`}
                  >
                    <p className="text-sm font-bold uppercase tracking-wide text-brand md:hidden">
                      {step.time}
                    </p>
                    <h3
                      className={`text-base font-bold uppercase tracking-wide text-ink md:text-lg ${
                        step.muted ? 'mt-1 md:mt-0' : 'mt-1 md:mt-0'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`mt-1 text-sm leading-relaxed ${
                        step.muted ? 'italic text-ink/50' : 'text-ink/70'
                      }`}
                    >
                      {step.text}
                    </p>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>

        <FadeUp delay={0.1} className="mt-12 text-center">
          <motion.a
            href="#registrazione"
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            className="inline-flex rounded-xl bg-brand px-7 py-4 text-sm font-bold uppercase tracking-wider text-ink"
          >
            Prenota il tuo posto all&apos;Open Day
          </motion.a>
        </FadeUp>
      </div>
    </section>
  )
}
