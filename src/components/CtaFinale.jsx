import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { FadeUp } from './Motion'

export default function CtaFinale() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : ['-8%', '8%'])

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-ink py-24 text-white md:py-28"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 -top-[12%] h-[124%] bg-cover bg-center"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{ backgroundImage: "url('/images/ingresso.png')" }}
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/92 to-ink/75"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeUp>
          <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl">
            Il 19 settembre apriamo le porte. Entra anche tu.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/75 md:text-lg">
            Un pomeriggio per conoscerci, senza impegno. La tua salute merita un
            posto in prima fila.
          </p>
          <motion.a
            href="#registrazione"
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            animate={
              reduce
                ? undefined
                : {
                    boxShadow: [
                      '0 0 0 0 rgba(127,174,158,0.35)',
                      '0 0 0 14px rgba(127,174,158,0)',
                      '0 0 0 0 rgba(127,174,158,0)',
                    ],
                  }
            }
            transition={
              reduce
                ? undefined
                : { duration: 2.4, repeat: Infinity, ease: 'easeOut' }
            }
            className="mt-9 inline-flex rounded-xl bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wider text-ink"
          >
            Registrati all&apos;Open Day
          </motion.a>
          <p className="mt-4 text-xs text-white/50">
            Gratuito · Posti limitati · 19 settembre, dalle 16:30
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
