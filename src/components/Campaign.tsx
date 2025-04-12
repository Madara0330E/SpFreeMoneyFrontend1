import { useState } from "react";
import { useSPWMini } from "@/components/SPWMiniProvider";

interface CampaignProps {
  id: string;
  title: string;
  description: string;
  currentAmount: number;
  targetAmount: number;
  owner: {
    username: string;
    avatarUrl: string;
  };
  authToken: string;
}

export function Campaign({
  id,
  title,
  description,
  currentAmount,
  targetAmount,
  owner,
  authToken,
}: CampaignProps) {
  const { openPayment } = useSPWMini();
  const [isLoading, setIsLoading] = useState(false);

  const handleDonate = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://money.chasman.engineer/api/campaigns/${id}/donate`,
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
        const paymentCode = donationData.donate.code;
        openPayment(paymentCode);
      } else {
        const err = await res.text();
        alert(`Ошибка при помощи: ${err}`);
      }
    } catch (e) {
      console.error(e);
      alert("Произошла ошибка при отправке пожертвования.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-4 bg-[#1c1c1c] rounded-xl p-4 mb-4 shadow-[0_0_8px_rgba(255,255,255,0.05)]">
      <img
        src={owner.avatarUrl}
        alt="аватар"
        className="w-16 h-16 rounded-lg"
      />
      <div className="flex-1">
        <div className="text-xl font-bold mb-1">{title}</div>
        <div className="mb-1">{description}</div>
        <div className="font-bold text-green-500">
          Собрано {currentAmount} / {targetAmount}
        </div>
        <div>Автор: {owner.username}</div>
        <button
          onClick={handleDonate}
          disabled={isLoading}
          className="mt-2 bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-lg disabled:opacity-50"
        >
          {isLoading ? "Загрузка..." : "💰 Помочь 10 монет"}
        </button>
      </div>
    </div>
  );
}
