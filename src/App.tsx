import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Solutions from './components/Solutions'
import Benefits from './components/Benefits'
import About from './components/About'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDark(prefersDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div
      style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" }}
      className={dark ? 'dark' : ''}
    >
      <div
        style={{
          background: dark
            ? 'linear-gradient(180deg, #09090B 0%, #0D0D0F 100%)'
            : 'linear-gradient(180deg, #FAFAFA 0%, #F4F6F4 100%)',
          minHeight: '100vh',
          color: dark ? '#FAFAFA' : '#09090B',
          transition: 'background 0.3s ease, color 0.3s ease',
        }}
      >
        <Nav dark={dark} onToggleDark={() => setDark(d => !d)} />
        <main>
          <Hero dark={dark} />
          <TrustBar dark={dark} />
          <Solutions dark={dark} />
          <Benefits dark={dark} />
          <About dark={dark} />
          <Testimonials dark={dark} />
          <FAQ dark={dark} />
          <FinalCTA dark={dark} />
        </main>
        <Footer dark={dark} />
        <WhatsAppButton />
      </div>
    </div>
  )
}
