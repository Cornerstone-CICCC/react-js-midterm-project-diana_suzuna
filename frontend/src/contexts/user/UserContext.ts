import { createContext } from "react";

export interface User {
  fullname: string;
  email: string;
  password: string;
}

type UserContextType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

export const UserContext = createContext<UserContextType>({
  users: [],
  setUsers: () => {},
});
