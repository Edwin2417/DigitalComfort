import { cn } from "~/lib/cn";

import { CartClient } from "./cart-client";

export interface CartItem {
  category: string;
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  className?: string;
}

const mockCart: CartItem[] = [
  {
    category: "Sedán",
    id: "1",
    image:
      "https://images.unsplash.com/photo-1626072557464-90403d788e8d?w=800&auto=format&fit=crop&q=60",
    name: "Toyota Corolla 2020 • 45,000 km",
    price: 950000,
    quantity: 1,
  },
];

export function Cart({ className }: CartProps) {
  return (
    <div className={cn("relative", className)}>
      {/* // TODO: Fetch cart from e.g. LocalStorage and/or database */}
      <CartClient className={cn("", className)} mockCart={mockCart} />
    </div>
  );
}
