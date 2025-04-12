"use client";

import { createContext, useContext, useEffect, useState } from "react";
import spwmini from "@/config/spwmini";
import type { User } from "spwmini/types";

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
    spwmini.on("initResponse", (userData) => {
      setUser(userData);
      setIsLoading(false);
    });

    spwmini.on("initError", (errorMessage) => {
      setError(errorMessage);
      setIsLoading(false);
    });

    spwmini.on("ready", () => {
      setIsLoading(false);
    });

    return () => {
      spwmini.dispose();
    };
  }, []);

  const validateUser = async (url: string) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accountId: user?.accountId,
          discordId: user?.discordId,
          minecraftUUID: user?.minecraftUUID,
          username: user?.username,
          hash: user?.hash,
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
    spwmini.openURL(url);
  };

  const openPayment = (code: string) => {
    spwmini.openPayment(code);
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
