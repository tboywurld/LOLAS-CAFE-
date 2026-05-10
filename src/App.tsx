import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Combos from "./components/Combos";
import LoyaltySection from "./components/LoyaltySection";
import OrderSystem from "./components/OrderSystem";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="relative selection:bg-gold selection:text-burgundy">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Combos />
        <LoyaltySection />
        <OrderSystem />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

