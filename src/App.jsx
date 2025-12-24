import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductSection from "./components/ProductSection";
import EducationSection from "./components/EducationSection";
import Testimonials from "./components/TestimonialsSection";
import CTA from "./components/HeroCTA";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  // hide navbar on contact page
  const hideNavbar = location.pathname === "/contact";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ProductSection />
              <EducationSection />
              <Testimonials />
              <CTA />
              <Footer />
              <ScrollToTopButton />
            </>
          }
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={
            <>
              <ContactPage />
              <Footer />
            </>
          }
        />

        {/* OTHER PAGES */}
        <Route
          path="/about"
          element={
            <div className="min-h-screen bg-black text-white pt-32 text-center text-4xl">
              About Us (Coming Soon)
            </div>
          }
        />

        <Route
          path="/markets"
          element={
            <div className="min-h-screen bg-black text-white pt-32 text-center text-4xl">
              Markets
            </div>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
