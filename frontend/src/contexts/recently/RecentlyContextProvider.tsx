import { useState, type ReactNode } from 'react';
import type { Product } from '../cart/CartContext';
import { RecentProducts } from './RecentlyContext';

export const RecentlyContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [recentProducts, setRecentProducts] = useState<Product[]>([]);

  return (
    <RecentProducts.Provider value={{ recentProducts, setRecentProducts }}>
      {children}
    </RecentProducts.Provider>
  );
};
