import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context)
    throw Error("useCount must be used inside the UserContextProvider");
  return context;
};
