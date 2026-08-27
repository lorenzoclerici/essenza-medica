import { motion, useReducedMotion } from 'framer-motion'
import {
  UserGroupIcon,
  BuildingOffice2Icon,
  HeartIcon,
} from '@heroicons/react/24/outline'
import { FadeUp, staggerContainer, staggerItem } from './Motion'

const pills = [
  {
    icon: UserGroupIcon,
    title: 'Incontra gli specialisti',
    text: 'Parla direttamente con i medici delle diverse aree, senza prenotazione.',
  },
  {
    icon: BuildingOffice2Icon,
    title: 'Visita gli ambulatori',
    text: 'Scopri spazi, strumentazioni e come ci prendiamo cura di te.',
  },
  {
    icon: HeartIcon,
    title: 'Ricevi consigli di prevenzione',
    text: 'Talk brevi e concreti per proteggere la tua salute.',
  },
]

export default function Contesto() {
  const reduce = useReducedMotion()

  return (
    <section id="contesto" className="bg-mist py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <FadeUp>
          <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-ink md:text-4xl">
            Una giornata per conoscere la medicina che mette la persona al
            centro
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/75 md:text-lg">
            Il 19 settembre inauguriamo la nuova sede di Rimini e apriamo le
            porte a tutta la città. Non una semplice inaugurazione: un
            pomeriggio in cui puoi{' '}
            <strong className="font-semibold text-ink">
              visitare gli ambulatori, parlare con gli specialisti e ricevere le
              prime indicazioni di prevenzione
            </strong>
            , senza impegno e in totale libertà. Perché per noi la salute non
            inizia dalla diagnosi, ma dall&apos;ascolto.{' '}
            <em className="text-brand-dark">
              Medicina e benessere per la persona
            </em>{' '}
            non è uno slogan: è il modo in cui lavoriamo ogni giorno.
          </p>
        </FadeUp>

        <FadeUp delay={0.12} className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/sala-interna.png"
              alt="Interni della nuova sede Essenza Medica"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <img
              src="/images/studio-visite.png"
              alt="Studio per visite"
              className="aspect-[4/3] w-full rounded-xl object-cover"
              loading="lazy"
            />
            <img
              src="/images/stanza-visite.png"
              alt="Ambulatorio"
              className="aspect-[4/3] w-full rounded-xl object-cover"
              loading="lazy"
            />
          </div>
        </FadeUp>
      </div>

      <motion.div
        className="mx-auto mt-14 grid max-w-6xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={reduce ? undefined : staggerContainer}
        initial={reduce ? undefined : 'hidden'}
        whileInView={reduce ? undefined : 'show'}
        viewport={{ once: true, margin: '-60px' }}
      >
        {pills.map(({ icon: Icon, title, text }) => (
          <motion.div
            key={title}
            variants={reduce ? undefined : staggerItem}
            whileHover={reduce ? undefined : { y: -4 }}
            className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(30,44,53,0.06)] transition-shadow hover:shadow-[0_12px_36px_rgba(30,44,53,0.1)]"
          >
            <motion.span
              initial={reduce ? false : { scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand/15 text-brand"
            >
              <Icon className="h-6 w-6" aria-hidden />
            </motion.span>
            <h3 className="mt-4 text-base font-bold uppercase tracking-wide text-ink">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
