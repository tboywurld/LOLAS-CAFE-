import { motion } from "motion/react";
import { ChevronRight, Star, Utensils, Zap, GlassWater } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=1920" 
          alt="Lola's Café Premium Food" 
          className="w-full h-full object-cover opacity-40 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 border border-gold rounded-full text-[10px] uppercase tracking-widest text-gold font-bold mb-8">
              Student-Friendly Luxury
            </span>
            <h1 className="text-7xl md:text-9xl font-serif font-bold leading-[0.9] italic mb-8 -ml-1">
              Taste <span className="text-gold not-italic">Luxury.</span><br/>
              Feel <span className="text-gold not-italic">Comfort.</span><br/>
              Eat <span className="text-cream not-italic">Royally.</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 mb-10 max-w-sm font-medium leading-relaxed">
              Gourmet meals, signature drinks & fast service in the heart of Delta State.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-20">
              <a href="https://wa.me/2349162509367" className="btn-primary text-sm px-10 py-5 shadow-[6px_6px_0px_0px_rgba(255,255,255,0.1)]">
                Order on WhatsApp
              </a>
              <a href="#menu" className="btn-secondary text-sm px-10 py-5">
                View Menu
              </a>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl"
              >
                <div className="bg-gold/20 p-2 rounded-lg">
                  <Utensils className="text-gold w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-cream">Gourmet Meals</div>
                  <div className="text-xs text-cream/50">Chef's special recipes</div>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl"
              >
                <div className="bg-gold/20 p-2 rounded-lg">
                  <Zap className="text-gold w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-cream">Fast Service</div>
                  <div className="text-xs text-cream/50">No long waiting time</div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-2xl hidden lg:flex"
              >
                <div className="bg-gold/20 p-2 rounded-lg">
                  <GlassWater className="text-gold w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-cream">Signature Drinks</div>
                  <div className="text-xs text-cream/50">Unique refreshers</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Particle Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-20 right-[10%] w-32 h-32 bg-gold/10 rounded-full blur-3xl hidden md:block"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0]
        }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-40 right-[15%] w-48 h-48 bg-burgundy/10 rounded-full blur-3xl hidden md:block"
      />
    </section>
  );
}
