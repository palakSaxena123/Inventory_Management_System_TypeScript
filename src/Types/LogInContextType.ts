import { User } from "./User";
export interface LogInContextType {
    user: User | null;
    getUser: () => User | null;
    setUser: (newUser: User | null) => void;
    logOut: () => void;
  }