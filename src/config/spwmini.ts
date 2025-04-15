"use client";

import SPWMini from "spwmini/client";

let spwmini: SPWMini | null = null;

if (typeof window !== "undefined") {
  spwmini = new SPWMini("5689b4f1-e62e-4297-957e-a941bf8a9de6", {
    autoinit: true,
    customFetch: fetch,
  });

  spwmini.on("initResponse", async (user) => {
    console.log(`Пользователь авторизован: ${user.username}`);

    try {
      const authRes = await fetch(
        "https://money.chasman.engineer/api/validate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      const authData = await authRes.json();

      if (authData.authToken) {
        localStorage.setItem("authToken", authData.authToken);
        console.log("Токен авторизации сохранен");
      } else {
        console.error("Не удалось получить токен авторизации");
      }
    } catch (error) {
      console.error("Ошибка при авторизации:", error);
    }
  });

  spwmini.on("initError", (message) => {
    console.error(`Ошибка авторизации: ${message}`);
    localStorage.removeItem("authToken");
  });

  spwmini.on("ready", () => {
    console.log("Приложение готово к работе");
  });
}

export default spwmini;
