import { MapPin, Navigation, Map as MapIcon } from "lucide-react";

export default function Location() {
  return (
    <section className="py-24" id="location">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block py-1 px-4 rounded-full border border-gold/30 text-gold text-xs font-bold tracking-widest mb-6 uppercase">
              VISIT US
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Find Us In <br /><span className="text-gold italic">Abraka.</span></h2>
            <p className="text-cream/60 text-lg mb-10 leading-relaxed">
              We are located in the heart of Abraka, Delta State. A perfect spot for students and food lovers looking for that premium cafe vibe. Come experience luxury first-hand.
            </p>

            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl mb-10 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -rotate-45 translate-x-10 translate-y-[-20%]"></div>
               <div className="flex items-center gap-4 mb-4">
                 <MapPin className="text-gold" />
                 <span className="font-bold text-cream">Lola's Café, Abraka</span>
               </div>
               <p className="text-cream/50 mb-8 italic">Delta State, Nigeria - Close to the main university hub.</p>
               <a 
                href="https://www.google.com/maps/search/Lola's+Café+Abraka+Delta+State" 
                target="_blank"
                className="btn-secondary w-full"
               >
                 <Navigation size={18} /> GET DIRECTIONS
               </a>
            </div>
          </div>

          <div className="h-[500px] rounded-[2.5rem] overflow-hidden border-2 border-white/5 shadow-2xl relative group">
            {/* Using an iframe for interactive map or static image */}
            {/* Recommended: Real Google Map Iframe if key is available, else styled image */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15873.344390623696!2d6.103328!3d5.789123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041072922119f3b%3A0xe7f92027b409743c!2sAbraka!5e0!3m2!1sen!2sng!4v1715339213840!5m2!1sen!2sng" 
              className="w-full h-full grayscale invert opacity-70 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="absolute top-6 left-6 pointer-events-none">
              <div className="bg-luxury-black/80 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] uppercase font-bold tracking-widest text-gold border border-gold/30">
                Live Location Hub
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
