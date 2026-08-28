export default function Footer() {
  return (
    <footer id="privacy" className="bg-ink py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <img
            src="/images/logo.png"
            alt="Essenza Medica"
            className="h-[5.25rem] w-auto"
          />
          <p className="mt-4 text-sm text-white/55">
            Via Ariete 18, 47923 Rimini (RN)
          </p>
          <p className="mt-1 text-sm text-white/55">
            <a
              href="tel:+390541670521"
              className="hover:text-brand"
            >
              +39 0541 67 05 21
            </a>
            {' · '}
            <a
              href="mailto:segreteria@essenzamedica.it"
              className="hover:text-brand"
            >
              segreteria@essenzamedica.it
            </a>
          </p>
        </div>

        <div className="text-sm text-white/50 md:text-right">
          <p>P.IVA 04294550407</p>
          <p className="mt-1">Dir. Sanitario: Dott.ssa Passaniti M. Angelica</p>
          <p className="mt-3">
            <a href="#privacy" className="underline underline-offset-2 hover:text-brand">
              Privacy Policy
            </a>
          </p>
          <p className="mt-6 text-xs text-white/35">
            © {new Date().getFullYear()} Essenza Medica. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}
