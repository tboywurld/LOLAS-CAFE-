import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MENU_ITEMS } from "../constants";
import { ShoppingCart, Plus, Star } from "lucide-react";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = ["all", "pizza", "burger", "shawarma", "corn dog", "fries & wings", "drinks"];

  const filteredItems = activeCategory === "all" 
    ? MENU_ITEMS.slice(0, 12) 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const handleOrder = (name: string) => {
    const message = encodeURIComponent(`Hello Lola's Café! I'd like to order: ${name}`);
    window.open(`https://wa.me/2349162509367?text=${message}`, "_blank");
  };

  return (
    <section className="py-24 bg-luxury-black" id="menu">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block py-1 px-4 rounded-full border border-gold/30 text-gold text-xs font-bold tracking-widest mb-6 uppercase">
            Gourmet Selection
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Explore Our <span className="text-gold italic">Menu</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-12"></div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-bold uppercase tracking-wider ${
                  activeCategory === cat 
                    ? "bg-gold text-burgundy border-gold" 
                    : "border-gold/20 text-cream/50 hover:border-gold/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group flex flex-col sm:flex-row bg-burgundy-medium border border-cream/5 p-4 sm:p-6 sm:h-52 gap-6 overflow-hidden relative"
              >
                <div className="w-full sm:w-1/3 aspect-square sm:aspect-auto bg-burgundy relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  {item.tags?.map((tag) => (
                    <span key={tag} className="absolute top-2 right-2 text-[10px] bg-gold text-burgundy px-2 py-0.5 font-bold uppercase">
                      {tag}
                    </span>
                  ))}
                  {/* Steam Effect for Hot Food */}
                  {["pizza", "burger", "shawarma", "corn dog", "fries & wings"].includes(item.category) && (
                    <div className="steam-effect opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="steam-line"></div>
                      <div className="steam-line"></div>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 uppercase tracking-tighter">{item.name}</h3>
                    <p className="text-xs sm:text-sm text-cream/50 line-clamp-2 sm:line-clamp-3 mb-4">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-end border-t border-cream/10 pt-4">
                    <span className="font-serif text-xl sm:text-2xl text-gold italic">
                      {typeof item.price === "number" ? `₦${item.price.toLocaleString()}` : item.price}
                    </span>
                    <button 
                      onClick={() => handleOrder(item.name)}
                      className="text-xs font-bold border-b border-gold pb-1 tracking-widest text-gold hover:text-gold-dark transition-colors"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
