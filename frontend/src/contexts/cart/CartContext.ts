import { createContext } from 'react';

// DummyJSON
export interface Product {
  _id: string;
  item_name: string;
  price: number;
  image: string;
  description: string;
}

// Cart Items
export interface CartItem extends Product {
  productId: string;
  quantity: number;
}

type CartContextType = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  totalSum: number;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
  totalSum: 0,
});
