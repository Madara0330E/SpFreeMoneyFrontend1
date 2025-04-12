"use client";

import { useEffect, useState } from "react";
import CampaignCard from "../components/CampaignCard";
import SPWMini from "spwmini/client";

interface Campaign {
  id: string;
  title: string;
  description: string;
  currentAmount: number;
  targetAmount: number;
  owner: {
    username: string;
    avatarUrl: string;
  };
}

export default function Home() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authToken, setAuthToken] = useState<string>("");

  useEffect(() => {
    const spm = new SPWMini("DpxcJ/9UHM4i17AUWW3A1TfU2DcDNNN4");

    spm.on("initResponse", async (user) => {
      try {
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
              hash: user.hash,
            }),
          }
        );

        const authData = await authRes.json();
        setAuthToken(authData.authToken);

        if (!authData.authToken) {
          setError("Не удалось авторизоваться");
          return;
        }

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
        setError("Ошибка при загрузке данных");
        console.error(e);
      } finally {
        setLoading(false);
      }
    });

    spm.on("initError", (err) => {
      setError("Ошибка инициализации: " + err);
      setLoading(false);
    });
  }, []);

  const handleDonate = async (campaignId: string) => {
    try {
      const res = await fetch(
        `https://money.chasman.engineer/api/campaigns/${campaignId}/donate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authToken,
          },
          body: JSON.stringify({
            amount: 10,
            comment: "Удачи!",
            isAnonymous: true,
          }),
        }
      );

      if (res.ok) {
        const donationData = await res.json();
        const spm = new SPWMini("DpxcJ/9UHM4i17AUWW3A1TfU2DcDNNN4");
        spm.openPayment(donationData.donate.code);
      } else {
        const err = await res.text();
        alert(`Ошибка при помощи: ${err}`);
      }
    } catch (e) {
      console.error(e);
      alert("Произошла ошибка при отправке пожертвования.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-900 p-4">
      <h2 className="text-2xl font-bold mb-4">Активные сборы</h2>

      {loading && <p>Загрузка...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="space-y-4">
        {campaigns.map((campaign) => (
          <CampaignCard
            key={campaign.id}
            campaign={campaign}
            onDonate={handleDonate}
          />
        ))}
      </div>
    </main>
  );
}
