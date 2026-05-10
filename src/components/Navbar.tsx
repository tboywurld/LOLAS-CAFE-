import { motion } from "motion/react";
import { Coffee, Menu as MenuIcon, X, Phone, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Rewards", href: "#loyalty" },
    { name: "Combos", href: "#combos" },
    { name: "Location", href: "#location" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
      id="main-nav"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border-2 border-gold flex items-center justify-center text-gold font-serif font-bold italic">L</div>
          <span className="font-serif text-xl font-bold tracking-tight text-gold">
            LOLA'S <span className="text-cream">CAFÉ</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-4 opacity-70 text-[10px] font-semibold uppercase tracking-widest mr-8">
            <span>Abraka</span>
            <span className="text-gold">•</span>
            <span>9AM—8PM</span>
          </div>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs uppercase tracking-widest font-bold text-cream/70 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/2349162509367" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-8 text-xs font-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]"
          >
            ORDER NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-cream"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-luxury-black border-b border-white/10 p-6 md:hidden"
        >
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-cream/80"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/2349162509367" 
              className="btn-primary w-full"
              onClick={() => setIsOpen(false)}
            >
              ORDER ON WHATSAPP
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
