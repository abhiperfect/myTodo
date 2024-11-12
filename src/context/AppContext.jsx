import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    user: null,
    theme: 'light',
  });

  const updateUser = (user) => {
    setState((prevState) => ({ ...prevState, user }));
  };

  const toggleTheme = () => {
    setState((prevState) => ({
      ...prevState,
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };

  return (
    <AppContext.Provider value={{ state, updateUser, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
