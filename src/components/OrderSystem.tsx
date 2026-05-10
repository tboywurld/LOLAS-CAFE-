import { motion } from "motion/react";
import { MessageSquare, ExternalLink, HelpCircle } from "lucide-react";

export default function OrderSystem() {
  return (
    <section className="py-24 bg-gradient-to-b from-burgundy-dark/40 to-luxury-black relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full border border-gold/30 text-gold text-xs font-bold tracking-widest mb-8 uppercase">
              How it works
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Order Your Cravings In <span className="text-gold italic">Seconds.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
                  <div className="text-2xl font-bold text-gold">01</div>
                </div>
                <h4 className="text-lg font-bold">Pick Your Flavor</h4>
                <p className="text-cream/50 text-sm">Browse our gourmet selection of pizza, burgers, shawarma and more.</p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3">
                  <div className="text-2xl font-bold text-gold">02</div>
                </div>
                <h4 className="text-lg font-bold">WhatsApp Direct</h4>
                <p className="text-cream/50 text-sm">Click "Order" to open a pre-filled WhatsApp chat with our chef.</p>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-6">
                  <div className="text-2xl font-bold text-gold">03</div>
                </div>
                <h4 className="text-lg font-bold">Enjoy Luxury</h4>
                <p className="text-cream/50 text-sm">Sit back and relax while we prepare your gourmet meal for delivery.</p>
              </div>
            </div>

            <a 
              href="https://wa.me/2349162509367" 
              target="_blank"
              className="btn-primary text-xl px-12 py-5 inline-flex items-center gap-4"
            >
              <MessageSquare /> Start Ordering Now
            </a>
            
            <p className="mt-8 text-cream/40 text-sm flex items-center justify-center gap-2">
              <HelpCircle size={14} /> Need help? Call +234 916 250 9367
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
