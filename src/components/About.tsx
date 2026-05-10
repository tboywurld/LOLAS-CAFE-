import { motion } from "motion/react";
import { Clock, MapPin, Phone, Instagram } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-burgundy-dark/20 relative" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-none overflow-hidden border border-gold/40 relative z-10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1550966842-28df33418512?auto=format&fit=crop&q=80&w=1200" 
                alt="Lola's Café Interior" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute bottom-10 -right-10 bg-gold text-burgundy p-8 rounded-none z-20 shadow-2xl hidden sm:block border-4 border-burgundy">
              <div className="text-4xl font-serif font-bold italic">9am—8pm</div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em]">Open Everyday</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block py-1 px-4 rounded-full border border-gold/30 text-gold text-xs font-bold tracking-widest mb-6">
              OUR STORY
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              A Premium Experience <br /> In The <span className="text-gold italic">Heart Of Abraka.</span>
            </h2>
            <p className="text-cream/70 text-lg mb-8 leading-relaxed italic">
              "We don’t just serve food — we serve cravings that hit differently."
            </p>
            <p className="text-cream/60 mb-12 text-lg">
              Lola's Café was born from a desire to merge luxury with fast-casual dining. We understand the student lifestyle and the craving for quality. Whether it's our signature burgers, artisanal milkshakes, or our crowd-favorite wings, we ensure every bite is an experience.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-full">
                  <MapPin className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-cream">Location</h4>
                  <p className="text-cream/60">Abraka, Delta State, Nigeria</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-full">
                  <Clock className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-cream">Opening Hours</h4>
                  <p className="text-cream/60">Mon – Sun: 9:00 AM – 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-full">
                  <Phone className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-cream">Contact Us</h4>
                  <p className="text-cream/60">+234 916 250 9367</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
              <a 
                href="https://wa.me/2349162509367" 
                className="btn-primary"
              >
                WhatsApp Us
              </a>
              <a 
                href="https://instagram.com/lolascafe.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 p-4 rounded-full border border-white/10 hover:border-gold/30 transition-colors"
              >
                <Instagram className="text-gold w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
