import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useLoyalty } from "../lib/loyalty";

export default function FloatingWhatsApp() {
  const { points } = useLoyalty();

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/2349162509367"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-current border-2 border-white"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </motion.a>
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-burgundy border border-gold w-14 h-14 rounded-full flex items-center justify-center text-gold text-xs font-bold flex-col shadow-2xl cursor-pointer hover:bg-gold hover:text-burgundy transition-all duration-300"
      >
        <span>{points}</span>
        <span className="text-[8px] uppercase tracking-widest font-black">Pts</span>
      </motion.div>
    </div>
  );
}
