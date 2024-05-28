import React from 'react';
import { Navigate } from 'react-router-dom';

// Симуляція авторизації
const isAuthenticated = () => {
  return localStorage.getItem('authToken'); // Це приклад, в реальних умовах це може бути інша логіка
};

const RequireAuth = ({ children }) => {
  if (!isAuthenticated()) {
    // Якщо користувач не авторизований, перенаправити на сторінку авторизації
    return <Navigate to="/login" />;
  }

  return children;
};

export default RequireAuth;
