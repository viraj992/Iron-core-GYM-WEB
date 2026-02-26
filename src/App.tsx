import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/Abouts"
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
import HomePage from "./components/HomePage";
import ProgramPage from "./components/ProgramPage";
import SchedulePage from "./components/SchedulePage";



function App() {
  

  return (
    <ThemeProvider>
      <Router>
        <div className="bg-zinc-950 min-h-screen">
          <Navbar />
          

          <Routes>
            <Route path="/" element={
              <>
                <HomePage />
                
              </>
            } />

            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<ProgramPage/>} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
          <Footer/>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
