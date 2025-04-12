"use client";

import SPWMini from "spwmini/client";

let spwmini: SPWMini | null = null;

// Инициализируем SPWMini только на клиенте
if (typeof window !== "undefined") {
  spwmini = new SPWMini("qkZtg2sqRZmvlKogEcThl0zrbYwc5QqI", {
    autoinit: false, // Отключаем автоинициализацию
    customFetch: fetch,
  });

  // Обработчики событий
  spwmini.on("initResponse", (user) => {
    console.log(`Пользователь авторизован: ${user.username}`);
  });

  spwmini.on("initError", (message) => {
    console.error(`Ошибка авторизации: ${message}`);
  });

  spwmini.on("ready", () => {
    console.log("Приложение готово к работе");
  });

  // Инициализируем вручную после создания
  try {
    spwmini.initialize();
  } catch (error) {
    console.error("Ошибка при инициализации SPWMini:", error);
  }
}

export default spwmini;
