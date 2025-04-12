import React, { useEffect, useState } from "react";

interface StatsData {
  stats: {
    sponsorsCount: number;
    totalHelpGiven: number;
    totalCampaigns: number;
    totalAmountDonated: number;
    topDonates: any[];
  };
}

const Statistics: React.FC = () => {
  const [statsData, setStatsData] = useState<StatsData | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          "https://money.chasman.engineer/api/stats"
        );
        const data = await response.json();
        setStatsData(data);
      } catch (error) {
        console.error("Ошибка при получении статистики:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="flex w-full max-w-[753px] h-[292px] flex-col">
      <div className="w-full flex justify-between max-w-[753px] h-[138px]">
        <div className="flex p-6 w-full max-w-[292px] h-[138px] items-center rounded-2xl justify-between bg-white">
          <div className="flex flex-col justify-center items-start gap-1">
            <p className="text-[#1A1E21] font-raleway text-[42px] font-bold [font-variant-numeric:lining-nums_proportional-nums]">
              {statsData?.stats.sponsorsCount || 0}
            </p>
            <p className="text-[#1A1E21] font-raleway text-[20px] font-semibold opacity-40">
              спонсоров
            </p>
          </div>
          <img
            src="img/Statick/jacket.png"
            alt="Jacket"
            className="w-[90px] h-[90px]"
          />
        </div>
        <div className="flex p-6 justify-between items-center w-full max-w-[445px] h-[138px] rounded-2xl bg-gradient-to-r from-[rgba(101,99,238,0.9)] via-[#6563EE] to-white">
          <div className="flex flex-col justify-center items-start">
            <p className="text-[#FFFFFF] font-raleway text-[42px] font-bold [font-variant-numeric:lining-nums_proportional-nums]">
              {statsData?.stats.totalAmountDonated || 0} АР
            </p>
            <p className="text-[#FFFFFF] font-raleway text-[20px] font-semibold opacity-40 [font-variant-numeric:lining-nums_proportional-nums]">
              доступно на данный момент
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between max-w-[753px] h-[138px] mt-4">
        <div className="flex w-full max-w-[216px] h-[138px] items-center justify-center rounded-2xl bg-white">
          <img
            src="img/Statick/Jeckpot.png"
            alt="Jackpot"
            className="w-[90px] h-[90px]"
          />
        </div>
        <div className="flex p-6 w-full max-w-[521px] h-[138px] items-center justify-between rounded-2xl bg-white">
          <div className="flex flex-col justify-center items-start gap-1">
            <p className="text-[#1A1E21] font-raleway text-[42px] font-bold [font-variant-numeric:lining-nums_proportional-nums]">
              {statsData?.stats.totalHelpGiven || 0} раз
            </p>
            <p className="text-[#1A1E21] font-raleway text-[20px] font-semibold opacity-40">
              оказана помощь
            </p>
          </div>
          <img
            src="img/Statick/Zont.png"
            alt="Jackpot"
            className="w-[90px] h-[90px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
