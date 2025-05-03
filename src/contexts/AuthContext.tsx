"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  showAuthPopup: boolean;
  openAuthPopup: () => void;
  closeAuthPopup: () => void;
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [showAuthPopup, setShowAuthPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openAuthPopup = () => setShowAuthPopup(true);
  const closeAuthPopup = () => setShowAuthPopup(false);
  
  const login = () => {
    setIsLoggedIn(true);
    closeAuthPopup();
  };
  
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ 
      showAuthPopup, 
      openAuthPopup, 
      closeAuthPopup,
      isLoggedIn,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
