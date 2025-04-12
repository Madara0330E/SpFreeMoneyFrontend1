"use client";

import { createContext, useContext, useEffect, useState } from "react";
import spwmini from "@/config/spwmini";
import type { User, UserData } from "spwmini/types";

interface SPWMiniContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  validateUser: (url: string) => Promise<boolean>;
  openURL: (url: string) => void;
  openPayment: (code: string) => void;
}

const SPWMiniContext = createContext<SPWMiniContextType | null>(null);

export function SPWMiniProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!spwmini) {
      setError("SPWMini не инициализирован");
      setIsLoading(false);
      return;
    }

    const handleInitResponse = (userData: User) => {
      setUser(userData);
      setIsLoading(false);
    };

    const handleInitError = (errorMessage: string) => {
      setError(errorMessage);
      setIsLoading(false);
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
    if (!user) return false;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accountId: user.accountId,
          discordId: user.discordId,
          minecraftUUID: user.minecraftUUID,
          username: user.username,
          hash: (user as UserData)?.hash,
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
        validateUser,
        openURL,
        openPayment,
      }}
    >
      {children}
    </SPWMiniContext.Provider>
  );
}

export function useSPWMini() {
  const context = useContext(SPWMiniContext);
  if (!context) {
    throw new Error("useSPWMini must be used within a SPWMiniProvider");
  }
  return context;
}
