import About from "./components/Abouts"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from './components/Pricing';
import Trainers from './components/Trainers';
import Schedule from './components/Schedule';
import BMICalculator from './components/BMICalculator';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from "./context/ThemeContext"
import Programs from "./components/Programs";



function App() {
  

  return (
    <ThemeProvider>
    <div className="bg-zinc-950 min-h-screen">
      <Navbar/>
      <Hero/>
      <About/>
      <Programs />
      <Pricing />
      <Trainers />
      <Schedule />
      <BMICalculator />
      <Testimonials />
      <Gallery />
      <CTA />
      <Contact />
      <Footer />  
    </div>
    </ThemeProvider>
  )
}

export default App
