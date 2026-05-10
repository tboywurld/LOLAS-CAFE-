import { motion } from "motion/react";
import { MENU_ITEMS } from "../constants";
import { Sparkles, ShoppingBag, Plus } from "lucide-react";

export default function Combos() {
  const combos = MENU_ITEMS.filter(item => item.category === "combos");

  const handleOrder = (name: string) => {
    const message = encodeURIComponent(`Hello! I'd like to order the Combo: ${name}`);
    window.open(`https://wa.me/2349162509367?text=${message}`, "_blank");
  };

  return (
    <section className="py-24 relative overflow-hidden" id="combos">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-burgundy/10 -z-10 skew-y-3 scale-110"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full border border-gold/30 text-gold text-xs font-bold tracking-widest mb-6">
              <Sparkles size={14} /> SIGNATURE BUNDLES
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              The <span className="text-gold italic">Lola's</span> Family <span className="text-gradient-gold">Feast</span>
            </h2>
            <p className="text-cream/60 text-lg max-w-xl">
              Perfect for parties, family dinners, or when you're feeling extra hungry. Our signature combos offer big value and even bigger flavor.
            </p>
          </div>
          <button className="btn-secondary hidden lg:flex">View Full Combos</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {combos.map((combo, index) => (
            <motion.div 
              key={combo.id}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group h-[500px] rounded-3xl overflow-hidden border border-white/5"
            >
              <img 
                src={combo.image} 
                alt={combo.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent"></div>
              
              <div className="absolute top-6 right-6">
                <span className="bg-gold text-burgundy font-black text-xs px-4 py-2 rounded-full shadow-2xl animate-bounce">
                  BEST SELLER
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-10">
                <h3 className="text-3xl font-serif font-bold mb-3 text-cream">{combo.name}</h3>
                <p className="text-cream/70 mb-6 max-w-md line-clamp-2">
                  {combo.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="bg-gold/20 backdrop-blur-md border border-gold/30 text-gold px-6 py-2 rounded-full font-black text-xl">
                    ₦{typeof combo.price === 'number' ? combo.price.toLocaleString() : combo.price}
                  </div>
                  <button 
                    onClick={() => handleOrder(combo.name)}
                    className="btn-primary"
                  >
                    Order Bundle <Plus />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
