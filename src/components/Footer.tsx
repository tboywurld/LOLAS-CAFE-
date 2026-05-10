import { Coffee, Instagram, Facebook, ArrowUp, Music2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-burgundy-dark/50 pt-24 pb-12 relative">
      <div className="container mx-auto px-6">
        {/* Top CTA */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Hungry? Don’t wait.</h2>
          <p className="text-cream/60 text-lg mb-12 italic">Order now and get your cravings sorted in minutes. Your royalty treatment awaits.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/2349162509367" className="btn-primary px-12">WhatsApp Order</a>
            <a href="#menu" className="btn-secondary px-12">View Menu</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-12">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2 group">
              <div className="bg-gold p-1.5 rounded-lg">
                <Coffee className="text-burgundy w-6 h-6" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-cream">
                LOLA'S <span className="text-gold">CAFÉ</span>
              </span>
            </a>
            <p className="text-cream/40 text-sm">
              The premier gourmet fast-food destination in Abraka. Serving taste, luxury, and comfort daily.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/lolascafe.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-full hover:bg-gold/20 hover:text-gold transition-colors cursor-pointer border border-white/10"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://tiktok.com/@lolascafe.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-full hover:bg-gold/20 hover:text-gold transition-colors cursor-pointer border border-white/10"
              >
                <Music2 size={18} />
              </a>
              <a 
                href="https://facebook.com/lolascafe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 p-3 rounded-full hover:bg-gold/20 hover:text-gold transition-colors cursor-pointer border border-white/10"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-cream mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-cream/50 text-sm font-medium">
              <li><a href="#about" className="hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">Full Menu</a></li>
              <li><a href="#loyalty" className="hover:text-gold transition-colors">Lola's Rewards</a></li>
              <li><a href="#combos" className="hover:text-gold transition-colors">Combos & Bundles</a></li>
              <li><a href="#testimonials" className="hover:text-gold transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-cream mb-6 uppercase tracking-widest text-xs">Cravings</h4>
            <ul className="space-y-4 text-cream/50 text-sm font-medium">
              <li><a href="#" className="hover:text-gold transition-colors">Pizza Selection</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Nashville Chicken</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Cheesy Corn Dogs</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Milkshakes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-cream mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-cream/50 text-sm mb-6">Get notified about our latest combos and discounts.</p>
            <div className="flex gap-2 flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/50 flex-grow"
              />
              <button className="bg-white/10 text-cream px-6 py-3 rounded-xl text-sm font-bold hover:bg-gold hover:text-burgundy transition-all">Join</button>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-cream/30 text-xs uppercase tracking-[0.2em]">
            © 2024 Lola's Café. All Rights Reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-widest hover:text-gold-light transition-colors"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
