"use client";

import SPWMini from "spwmini/client";

let spwmini: SPWMini | null = null;

if (typeof window !== "undefined") {
  spwmini = new SPWMini("93160870-da3d-44c5-bf30-748abcf83203", {
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
