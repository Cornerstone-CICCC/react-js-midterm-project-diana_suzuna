import type { ReactNode } from 'react';
import { ThemeContextProvider } from './theme/ThemeContextProvider';
import { CountContextProvider } from './count/CountContextProvider';
import { CartContextProvider } from './cart/CartContextProvider';
import { UserContextProvider } from './user/UserContextProvider';
import { Toaster } from 'react-hot-toast';
import { RecentlyContextProvider } from './recently/RecentlyContextProvider';

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <RecentlyContextProvider>
      <UserContextProvider>
        <CartContextProvider>
          <ThemeContextProvider>
            <CountContextProvider>
              {children}
              <Toaster />
            </CountContextProvider>
          </ThemeContextProvider>
        </CartContextProvider>
      </UserContextProvider>
    </RecentlyContextProvider>
  );
};

export default Providers;
