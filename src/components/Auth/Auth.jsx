import React, { createContext, useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authToken'));
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('authToken') == 'admin');
  const login = (authKey) => {
    setIsLoggedIn(true);
    setIsAdmin(authKey == 'admin');
    localStorage.setItem('authToken', authKey);
  };

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthProvider;