import { useEffect, useState, createContext } from "react";
import SPWMini from "spwmini/client";
import { SPWORLDS_CONFIG } from "../config/spworlds";

export const SPWorldsContext = createContext<{
  spm: SPWMini | null;
  user: any;
}>({
  spm: null,
  user: null,
});

export const SPWorldsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [spm, setSpm] = useState<SPWMini | null>(null);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const spwmini = new SPWMini(SPWORLDS_CONFIG.APP_ID, {
      autoinit: true,
    });

    spwmini.on("initResponse", (userData) => {
      console.log(`Logged in as ${userData.username}`);
      setUser(userData);
    });

    spwmini.on("initError", (message) => {
      console.error(`Log in error: ${message}`);
    });

    spwmini.on("ready", () => {
      console.log("App is ready!");
      setSpm(spwmini);
    });

    return () => {
      spwmini.dispose();
    };
  }, []);

  return (
    <SPWorldsContext.Provider value={{ spm, user }}>
      {children}
    </SPWorldsContext.Provider>
  );
};
