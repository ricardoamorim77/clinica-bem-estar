import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Specialties from './components/Specialties'
import Team from './components/Team'
import Appointment from './components/Appointment'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Team />
      <Appointment />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
