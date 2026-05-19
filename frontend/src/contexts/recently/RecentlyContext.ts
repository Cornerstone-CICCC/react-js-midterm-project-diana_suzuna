import { createContext } from 'react';
import type { Product } from '../cart/CartContext';

type RecentlyContextType = {
  recentProducts: Product[];
  setRecentProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

export const RecentProducts = createContext<RecentlyContextType>({
  recentProducts: [],
  setRecentProducts: () => {},
});
