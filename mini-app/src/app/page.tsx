"use client";

import { useSPWMini } from "@/components/SPWMiniProvider";
import { useState } from "react";

export default function Home() {
  const { user, isLoading, error, validateUser, openURL } = useSPWMini();
  const [validationStatus, setValidationStatus] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4">Загрузка...</div>
          <div className="text-sm text-gray-500">Подключение к SPWorlds</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-red-500">Ошибка</div>
          <div className="text-sm">{error}</div>
        </div>
      </div>
    );
  }

  const handleValidation = async () => {
    setValidationStatus("Проверка...");
    const isValid = await validateUser("/api/validate");
    setValidationStatus(isValid ? "Проверка пройдена" : "Ошибка валидации");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">SPWorlds Mini App</h1>

        {user && (
          <div className="mb-8 p-4 bg-white/10 rounded-lg">
            <h2 className="text-2xl mb-4">Информация о пользователе</h2>
            <p className="mb-2">Имя пользователя: {user.username}</p>
            <p className="mb-2">UUID Minecraft: {user.minecraftUUID}</p>
            {user.discordId && (
              <p className="mb-2">Discord ID: {user.discordId}</p>
            )}
          </div>
        )}

        <div className="space-y-4">
          <button
            onClick={handleValidation}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Проверить пользователя
          </button>

          {validationStatus && (
            <div
              className={`text-center p-2 rounded ${
                validationStatus === "Проверка пройдена"
                  ? "bg-green-500/10 text-green-500"
                  : validationStatus === "Проверка..."
                  ? "bg-blue-500/10 text-blue-500"
                  : "bg-red-500/10 text-red-500"
              }`}
            >
              {validationStatus}
            </div>
          )}

          <button
            onClick={() => openURL("https://spworlds.ru")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Открыть SPWorlds
          </button>
        </div>
      </div>
    </main>
  );
}
