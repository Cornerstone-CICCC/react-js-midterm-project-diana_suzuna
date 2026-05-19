import { useState, useMemo, type ReactNode } from "react";
import { CartContext, type CartItem } from "./CartContext";

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const totalSum = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, totalSum }}>
      {children}
    </CartContext.Provider>
  );
};
