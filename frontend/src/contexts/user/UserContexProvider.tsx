import { useState, type ReactNode } from "react";
import { UserContext } from "./UserContext";
import type { User } from "./UserContext";

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
