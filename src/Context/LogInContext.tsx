import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../Types/User';
import { LogInContextType } from '../Types/LogInContextType';

const initialValue: LogInContextType = {
  user: null,
  getUser: () => null,
  setUser: () => {},
  logOut: () => {},
};

export const LogInContext = createContext<LogInContextType>(initialValue);

interface LogInProviderProps {
  children: ReactNode;
}

export const LogInProvider: React.FC<LogInProviderProps> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(() => {
    // Initialize user from local storage if available
    const storedUser = localStorage.getItem('LogInuser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const setUser = (newUser: User | null) => {
    // console.log('Setting user:', newUser);
    setUserState(newUser);

    // Save user information to local storage
    localStorage.setItem('LogInuser', JSON.stringify(newUser));
  };

  const getUser = () => {
    return user;
  };

  const logOut = () => {
    // Clear user information from state and local storage
    setUser(null);
    localStorage.removeItem('LogInuser');
  };

  const contextValue: LogInContextType = {
    user,
    setUser,
    getUser,
    logOut,
  };

  return (
    <LogInContext.Provider value={contextValue}>
      {children}
    </LogInContext.Provider>
  );
};
