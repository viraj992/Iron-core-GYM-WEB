import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from "./context/ThemeContext"

import HomePage from "./components/HomePage";
import ProgramPage from "./components/ProgramPage";
import SchedulePage from "./components/SchedulePage";
import MemberSupport from "./components/MemberSupport";
import PricingSection from "./components/PricingSection";



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

            <Route path="/pricing" element={<PricingSection/>} />
            <Route path="/programs" element={<ProgramPage/>} />
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
