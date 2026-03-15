import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'
import Plasma from './components/reactbits/Plasma/Plasma'

export default function App() {
  return (
    <>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <Plasma
          color="#eb4a00"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.5}
          mouseInteractive={false}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <HowItWorks />
          <Features />
          <Pricing />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </>
  )
}
