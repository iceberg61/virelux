import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductSection from "./components/ProductSection";
import EducationSection from './components/EducationSection';
// import TestimonialsSection from './components/TestimonialsSection';
// import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <ProductSection/>
      <EducationSection/>
      {/* <TestimonialsSection/> */}
      {/* <PricingSection/> */}
      <Footer/>
    </>
  )
}

export default App
