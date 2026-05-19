import type { ReactNode } from "react";
import { ThemeContextProvider } from "./theme/ThemeContextProvider";
import { CountContextProvider } from "./count/CountContextProvider";
import { CartContextProvider } from "./cart/CartContextProvider";
import { UserContextProvider } from "./user/UserContextProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <ThemeContextProvider>
          <CountContextProvider>{children}</CountContextProvider>
        </ThemeContextProvider>
      </CartContextProvider>
    </UserContextProvider>
  );
};

export default Providers;
