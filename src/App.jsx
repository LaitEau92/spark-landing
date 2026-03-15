import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
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
    </>
  )
}
