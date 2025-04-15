"use client";

import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext({
  authToken: "",
  setAuthToken: () => {},
  user: null,
  setUser: () => {},
  isLoading: true,
});

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState("");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuthToken(token);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ authToken, setAuthToken, user, setUser, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
