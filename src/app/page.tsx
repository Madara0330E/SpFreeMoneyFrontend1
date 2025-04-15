"use client";

import { useEffect, useState } from "react";
import { useSPWMini } from "@/components/SPWMiniProvider";
import { Campaign } from "@/components/Campaign";
import { Hero } from "@/components/Hero";
import Statistics from "@/components/Statistics";
import TopDonators from "@/components/TopDonators";
import TopConsumers from "@/components/TopConsumers";
import LastDonations from "@/components/LastDonations";

export default function Home() {
  const { user, authToken } = useSPWMini();
  const [campaigns, setCampaigns] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!user || !authToken) return;

      try {
        // Получение списка кампаний
        const campaignRes = await fetch(
          "https://money.chasman.engineer/api/campaigns",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user, // Отправляем весь объект пользователя
              authToken,
            }),
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
      }
    };

    fetchData();
  }, [user, authToken]);

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white p-3">
      <div className="flex justify-between w-ful gap-[16px] items-center">
        <Hero />
        <Statistics />
      </div>
      <div className="flex justify-between w-ful gap-[16px] mt-[200px] ">
        <TopDonators />
        <TopConsumers />
      </div>
      <LastDonations />

      <h2 className="text-2xl font-bold mb-4 mt-8">Активные сборы</h2>
      <div className="space-y-4">
        {campaigns.map((campaign) => (
          <Campaign key={campaign.id} {...campaign} />
        ))}
      </div>
    </main>
  );
}
