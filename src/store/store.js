import { createContext, useState } from 'react';

const Context = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'Ali' });

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
}

export default Context;
