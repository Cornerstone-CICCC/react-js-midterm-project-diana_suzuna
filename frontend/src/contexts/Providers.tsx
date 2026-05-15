import type { ReactNode } from "react";
import { ThemeContextProvider } from "./theme/ThemeContextProvider";
import { CountContextProvider } from "./count/CountContextProvider";
import { CartContextProvider } from "./cart/CartContextProvider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <CartContextProvider>
      <ThemeContextProvider>
        <CountContextProvider>{children}</CountContextProvider>
      </ThemeContextProvider>
    </CartContextProvider>
  );
};

export default Providers;
