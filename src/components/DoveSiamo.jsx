import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'
import { FadeUp } from './Motion'

const contacts = [
  {
    icon: MapPinIcon,
    label: 'Indirizzo',
    value: 'Via Ariete 18, 47923 Rimini (RN)',
    href: 'https://maps.google.com/?q=Via+Ariete+18,+47923+Rimini',
  },
  {
    icon: PhoneIcon,
    label: 'Telefono',
    value: '+39 0541 67 05 21',
    href: 'tel:+390541670521',
  },
  {
    icon: EnvelopeIcon,
    label: 'Email',
    value: 'segreteria@essenzamedica.it',
    href: 'mailto:segreteria@essenzamedica.it',
  },
  {
    icon: GlobeAltIcon,
    label: 'Web',
    value: 'www.essenzamedica.it',
    href: 'https://www.essenzamedica.it',
  },
]

export default function DoveSiamo() {
  return (
    <section id="dove-siamo" className="bg-mist py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeUp>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-ink md:text-4xl">
              Ti aspettiamo a Rimini
            </h2>
            <ul className="mt-8 space-y-5">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-start gap-4"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand transition group-hover:bg-brand group-hover:text-ink">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-ink/45">
                        {label}
                      </span>
                      <span className="mt-0.5 block text-base font-medium text-ink group-hover:text-brand-dark">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div className="overflow-hidden rounded-2xl bg-ink/5 shadow-[0_10px_40px_rgba(30,44,53,0.08)]">
              <iframe
                title="Mappa Essenza Medica — Via Ariete 18, Rimini"
                src="https://www.google.com/maps?q=Via+Ariete+18,+47923+Rimini+RN&output=embed"
                className="h-[320px] w-full border-0 md:h-[420px] lg:h-[480px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
