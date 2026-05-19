import { useContext } from "react";
import { CountContext } from "./CountContext";

export const useCount = () => {
  const context = useContext(CountContext);
  if (!context)
    throw Error("useCount must be used inside the CountContextProvider");
  return context;
};
