import Navbar from "./components/Navbar"
import { ThemeProvider } from "./context/ThemeContext"



function App() {
  

  return (
    <ThemeProvider>
    <div className="bg-zinc-950 min-h-screen">
      <Navbar/>
        
    </div>
    </ThemeProvider>
  )
}

export default App
