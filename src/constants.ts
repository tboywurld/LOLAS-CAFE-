import { MenuItem, Testimonial } from "./types";

export const MENU_ITEMS: MenuItem[] = [
  // Pizza
  {
    id: "p1",
    name: "Chicken Feast",
    description: "Packed with shredded grilled chicken, sweet corn, and extra mozzarella.",
    price: "₦7,500 - ₦18,000",
    category: "pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    sizes: [
      { name: "Standard", price: "₦7,500" },
      { name: "Medium", price: "₦11,000" },
      { name: "Large", price: "₦14,500" },
      { name: "Monsterito", price: "₦18,000" }
    ]
  },
  {
    id: "p2",
    name: "Supreme Special",
    description: "The ultimate combo of beef, chicken, pepperoni, and fresh veggies.",
    price: "₦8,000 - ₦19,500",
    category: "pizza",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
    tags: ["Popular"]
  },
  {
    id: "p3",
    name: "Beef Suya Pizza",
    description: "A local twist: Spicy beef suya chunks, onions, and yaji spice.",
    price: "₦7,000 - ₦16,000",
    category: "pizza",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=800",
    tags: ["Trending"]
  },
  
  // Burgers
  {
    id: "b1",
    name: "Smash Beef Burger",
    description: "Double thin-pressed beef patties, caramelised onions, and signature house sauce.",
    price: 8500,
    category: "burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    tags: ["Must Try"]
  },
  {
    id: "b2",
    name: "Nashville Hot Chicken",
    description: "Crispy chicken breast dipped in spicy oil, slaw, and pickles.",
    price: 9200,
    category: "burger",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&q=80&w=800",
    tags: ["Spicy"]
  },

  // Shawarma
  {
    id: "s1",
    name: "BBQ Chicken Shawarma",
    description: "Double chicken, extra cream, cabbage, and smoky BBQ drizzle.",
    price: 4500,
    category: "shawarma",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=800",
    tags: ["Best Seller"]
  },
  {
    id: "s2",
    name: "Philly Cheese Steak",
    description: "Tender beef strips, peppers, onions, and melted golden cheese.",
    price: 5800,
    category: "shawarma",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800"
  },

  // Corn Dogs
  {
    id: "cd1",
    name: "Cheesy Crispy Corn Dog",
    description: "Half cheese, half sausage, coated in golden potato cubes.",
    price: 3500,
    category: "corn dog",
    image: "https://images.unsplash.com/photo-1623653387945-2fd25214f8fc?auto=format&fit=crop&q=80&w=800"
  },

  // Fries & Wings
  {
    id: "fw1",
    name: "Loaded Fries",
    description: "Golden fries topped with chicken, beef, cheese sauce, and spring onions.",
    price: 6500,
    category: "fries & wings",
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=800",
    tags: ["New"]
  },
  {
    id: "fw2",
    name: "Lemon Pepper Wings",
    description: "6pcs of juicy wings tossed in zesty lemon pepper seasoning.",
    price: 5500,
    category: "fries & wings",
    image: "https://images.unsplash.com/photo-1567623050702-6c9ab701047c?auto=format&fit=crop&q=80&w=800"
  },

  // Drinks
  {
    id: "d1",
    name: "Brown Sugar Milk Tea",
    description: "Authentic bubble tea with chewy tapioca pearls and brown sugar syrup.",
    price: 4500,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&q=80&w=800",
    tags: ["Famous"]
  },
  {
    id: "d2",
    name: "Oreo Cheesecake Milkshake",
    description: "Thick, creamy, and loaded with crushed Oreos.",
    price: 5000,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800"
  },

  // Combos
  {
    id: "c1",
    name: "Lola & Friends Burger Combo",
    description: "4 Nashville Chicken Burgers, 2 Loaded Fries, 4 Drinks of choice.",
    price: 69999,
    category: "combos",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800",
    tags: ["Value", "Best Seller"]
  },
  {
    id: "c2",
    name: "Shawarma Feast Combo",
    description: "6 BBQ Chicken Shawarmas & 1 pack of Wings.",
    price: 41999,
    category: "combos",
    image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&q=80&w=800",
    tags: ["Value"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Chidera O.",
    review: "Fast delivery and the burger was insane 🔥. Easily the best in Abraka.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=chidera"
  },
  {
    id: "t2",
    name: "Samuel K.",
    review: "Best shawarma I’ve had in Abraka. The cream level is perfect.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=samuel"
  },
  {
    id: "t3",
    name: "Blessing E.",
    review: "Their milkshakes hit different honestly. Brown sugar milk tea is a 10/10.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=blessing"
  }
];
