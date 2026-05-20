import { useState, type ReactNode } from "react";
import { CountContext } from "./CountContext";

export const CountContextProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};
