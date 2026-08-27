import Hero from './components/Hero'
import Contesto from './components/Contesto'
import Programma from './components/Programma'
import Specialita from './components/Specialita'
import Registrazione from './components/Registrazione'
import DoveSiamo from './components/DoveSiamo'
import CtaFinale from './components/CtaFinale'
import Footer from './components/Footer'
import ThankYou from './pages/ThankYou'

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Hero />
      <Contesto />
      <Programma />
      <Specialita />
      <Registrazione />
      <DoveSiamo />
      <CtaFinale />
      <Footer />
    </div>
  )
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path === '/grazie') {
    return <ThankYou />
  }
  return <Home />
}
