export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string | number;
  category: "pizza" | "burger" | "shawarma" | "corn dog" | "fries & wings" | "drinks" | "combos";
  image: string;
  tags?: string[];
  sizes?: { name: string; price: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  review: string;
  rating: number;
  avatar: string;
}
