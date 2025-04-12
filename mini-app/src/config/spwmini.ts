"use client";

import SPWMini from "spwmini/client";

let spwmini: SPWMini | null = null;

// Инициализируем SPWMini только на клиенте
if (typeof window !== "undefined") {
  spwmini = new SPWMini("msDhTmnsZU7udVHMWWHKN6n464pbYdIo", {
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
  spwmini.initialize();
}

export default spwmini;
