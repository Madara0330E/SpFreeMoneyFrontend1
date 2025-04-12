"use client";

import { useContext } from "react";
import { SPWorldsContext } from "../components/SPWorldsProvider";

export default function Home() {
  const { user } = useContext(SPWorldsContext);

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl">Загрузка...</p>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Привет, {user.username}!</h1>
        <p className="mb-4">Ваш Minecraft UUID: {user.minecraftUUID}</p>
      </div>
    </main>
  );
}
