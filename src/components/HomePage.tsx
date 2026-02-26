import About from "./Abouts";
import CTA from "./CTA";
import Gallery from "./Gallery";
import Hero from "./Hero";


export default function HomePage() {
  return (
    <div>
        <Hero/>
        <About/>
        <Gallery/>
        
        <CTA/>
    </div>
  )
}
