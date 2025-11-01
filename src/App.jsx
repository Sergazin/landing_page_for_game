import StarsBackground from './components/StarsBackground'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import HowToPlay from './components/HowToPlay'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <StarsBackground />
      <Hero />
      <About />
      <Features />
      <HowToPlay />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
