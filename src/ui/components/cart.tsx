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
    category: "Audio",
    id: "1",
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&auto=format&fit=crop&q=60",
    name: "Audífonos Inalámbricos SONY",
    price: 11500,
    quantity: 1,
  },
  {
    category: "Celulares",
    id: "5",
    image:
      "https://images.unsplash.com/photo-1560617544-b4f287789e24?w=800&auto=format&fit=crop&q=60",
    name: "Samsung S21+",
    price: 14900,
    quantity: 2,
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
