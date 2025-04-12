import React from "react";
import Image from "next/image";

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

interface CampaignCardProps {
  campaign: Campaign;
  onDonate: (campaignId: string) => void;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign, onDonate }) => {
  return (
    <div className="flex gap-4 bg-gray-800 rounded-xl p-4 mb-4 shadow-lg">
      <div className="relative w-16 h-16">
        <Image
          src={campaign.owner.avatarUrl}
          alt="аватар"
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-1">{campaign.title}</h3>
        <p className="text-gray-300 mb-2">{campaign.description}</p>
        <p className="text-green-500 font-bold mb-2">
          Собрано {campaign.currentAmount} / {campaign.targetAmount}
        </p>
        <p className="text-gray-400 mb-2">Автор: {campaign.owner.username}</p>
        <button
          onClick={() => onDonate(campaign.id)}
          className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded-lg transition-colors"
        >
          💰 Помочь 10 монет
        </button>
      </div>
    </div>
  );
};

export default CampaignCard;
