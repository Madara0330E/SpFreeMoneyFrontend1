"use client";

import { useSPWMini } from "@/components/SPWMiniProvider";

export default function Home() {
  const { user, isLoading, error, validateUser, openURL, openPayment } =
    useSPWMini();

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">SPWorlds Mini App</h1>

        {user && (
          <div className="mb-8">
            <h2 className="text-2xl mb-4">Информация о пользователе</h2>
            <p>Имя пользователя: {user.username}</p>
            <p>UUID Minecraft: {user.minecraftUUID}</p>
          </div>
        )}

        <div className="space-y-4">
          <button
            onClick={() => validateUser("/api/validate")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Проверить пользователя
          </button>

          <button
            onClick={() => openURL("https://spworlds.ru")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded block"
          >
            Открыть SPWorlds
          </button>
        </div>
      </div>
    </main>
  );
}
