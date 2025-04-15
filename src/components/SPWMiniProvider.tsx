"use client";

import { createContext, useContext, useEffect, useState } from "react";
import spwmini from "@/config/spwmini";
import type { User, UserData } from "spwmini/types";

interface SPWMiniContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  authToken: string | null;
  validateUser: (url: string) => Promise<boolean>;
  openURL: (url: string) => void;
  openPayment: (code: string) => void;
}

const SPWMiniContext = createContext<SPWMiniContextType | null>(null);

export function SPWMiniProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);

  useEffect(() => {
    if (!spwmini) {
      setError("SPWMini не инициализирован");
      setIsLoading(false);
      return;
    }

    // Проверяем наличие сохраненного токена
    const savedToken = localStorage.getItem("authToken");
    if (savedToken) {
      setAuthToken(savedToken);
    }

    const handleInitResponse = async (userData: User) => {
      setUser(userData);
      setIsLoading(false);

      try {
        // Авторизация и получение токена
        const authRes = await fetch(
          "https://money.chasman.engineer/api/validate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        const authData = await authRes.json();

        if (authData.authToken) {
          localStorage.setItem("authToken", authData.authToken);
          setAuthToken(authData.authToken);
        } else {
          setError("Не удалось получить токен авторизации");
        }
      } catch (error) {
        console.error("Ошибка при авторизации:", error);
        setError("Ошибка при авторизации");
      }
    };

    const handleInitError = (errorMessage: string) => {
      setError(errorMessage);
      setIsLoading(false);
      localStorage.removeItem("authToken");
      setAuthToken(null);
    };

    const handleReady = () => {
      setIsLoading(false);
    };

    spwmini.on("initResponse", handleInitResponse);
    spwmini.on("initError", handleInitError);
    spwmini.on("ready", handleReady);

    return () => {
      spwmini?.dispose();
    };
  }, []);

  const validateUser = async (url: string) => {
    if (!user || !authToken) return false;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user,
          authToken, // Отправляем токен в теле запроса, а не в заголовке
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Validation failed");
      }

      return data.valid;
    } catch (error) {
      console.error("Validation error:", error);
      return false;
    }
  };

  const openURL = (url: string) => {
    spwmini?.openURL(url);
  };

  const openPayment = (code: string) => {
    spwmini?.openPayment(code);
  };

  return (
    <SPWMiniContext.Provider
      value={{
        user,
        isLoading,
        error,
        authToken,
        validateUser,
        openURL,
        openPayment,
      }}
    >
      {children}
    </SPWMiniContext.Provider>
  );
}

export const useSPWMini = () => {
  const context = useContext(SPWMiniContext);
  if (!context) {
    throw new Error("useSPWMini must be used within a SPWMiniProvider");
  }
  return context;
};
