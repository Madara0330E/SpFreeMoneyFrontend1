"use client";

import { useEffect, useState } from "react";
import { useSPWMini } from "@/components/SPWMiniProvider";
import { Campaign } from "@/components/Campaign";

export default function Home() {
  const { user } = useSPWMini();
  const [authToken, setAuthToken] = useState<string>("");
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      try {
        // Авторизация и получение токена
        const authRes = await fetch(
          "https://money.chasman.engineer/api/validate",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              accountId: user.accountId ?? "",
              discordId: user.discordId ?? "",
              minecraftUUID: user.minecraftUUID,
              username: user.username,
              hash: (user as any).hash,
            }),
          }
        );

        const authData = await authRes.json();
        if (!authData.authToken) {
          setError("Не удалось авторизоваться");
          return;
        }

        setAuthToken(authData.authToken);

        // Получение списка кампаний
        const campaignRes = await fetch(
          "https://money.chasman.engineer/api/campaigns",
          {
            headers: {
              Authorization: authData.authToken,
            },
          }
        );

        const data = await campaignRes.json();
        if (!data.campaigns || data.campaigns.length === 0) {
          setError("Нет активных сборов");
          return;
        }

        setCampaigns(data.campaigns);
      } catch (e) {
        console.error(e);
        setError("Ошибка при загрузке данных");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user]);

  if (!user) {
    return <div className="p-4">Загрузка...</div>;
  }

  if (isLoading) {
    return <div className="p-4">Загрузка...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white p-4">
      <h2 className="text-2xl font-bold mb-4">Активные сборы</h2>
      <div className="space-y-4">
        {campaigns.map((campaign) => (
          <Campaign key={campaign.id} {...campaign} authToken={authToken} />
        ))}
      </div>
    </main>
  );
}
