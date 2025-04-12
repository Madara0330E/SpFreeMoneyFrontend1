import SPWMini from "spwmini/client";

// Инициализация SPWMini с ID вашего приложения
export const spwmini = new SPWMini("msDhTmnsZU7udVHMWWHKN6n464pbYdIo", {
  autoinit: true,
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

export default spwmini;
