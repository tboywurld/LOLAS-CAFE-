import { TESTIMONIALS } from "../constants";
import { Star, Quote } from "lucide-react";
import { motion } from "motion/react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-luxury-black/50" id="testimonials">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block py-1 px-4 rounded-full border border-gold/30 text-gold text-[10px] font-black tracking-[0.4em] mb-6 inline-flex justify-center uppercase">
          REVIEWS
        </div>
        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-16 italic">What Our <span className="text-gold not-italic">Royals</span> Say.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-burgundy-medium border border-gold/10 p-10 rounded-none relative group hover:border-gold/40 transition-all duration-500 text-left"
            >
              <Quote className="absolute top-6 right-8 text-gold/20 w-12 h-12" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="text-gold w-4 h-4 fill-gold" />
                ))}
              </div>
              
              <p className="text-cream/80 text-lg mb-8 leading-relaxed italic h-24">
                "{t.review}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-2 border-gold/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-cream">{t.name}</h4>
                  <p className="text-gold/60 text-xs font-bold uppercase tracking-widest">Verified Customer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
