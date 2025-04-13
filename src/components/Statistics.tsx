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
    <div className="flex w-full max-w-[39.22vw] h-[15.21vw] flex-col">
      <div className="w-full flex justify-between max-w-[39.22vw] h-[7.19vw]">
        <div className="flex p-[1.25vw] w-full max-w-[15.21vw] h-[7.19vw] items-center rounded-[0.52vw] justify-between bg-white">
          <div className="flex flex-col justify-center items-start gap-[0.05vw]">
            <p className="text-[#1A1E21] font-raleway text-[2.19vw] font-bold [font-variant-numeric:lining-nums_proportional-nums]">
              {statsData?.stats.sponsorsCount || 0}
            </p>
            <p className="text-[#1A1E21] font-raleway text-[1.04vw] font-semibold opacity-40">
              спонсоров
            </p>
          </div>
          <img
            src="img/Statick/jacket.png"
            alt="Jacket"
            className="w-[4.69vw] h-[4.69vw]"
          />
        </div>
        <div className="flex p-[1.25vw] justify-between items-center w-full max-w-[23.18vw] h-[7.19vw] rounded-[0.52vw] bg-gradient-to-r from-[rgba(101,99,238,0.9)] via-[#6563EE] to-white">
          <div className="flex flex-col justify-center items-start">
            <p className="text-[#FFFFFF] font-raleway text-[2.19vw] font-bold [font-variant-numeric:lining-nums_proportional-nums]">
              {statsData?.stats.totalAmountDonated || 0} АР
            </p>
            <p className="text-[#FFFFFF] font-raleway text-[1.04vw] font-semibold opacity-40 [font-variant-numeric:lining-nums_proportional-nums]">
              доступно на данный момент
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between max-w-[39.22vw] h-[7.19vw] mt-4">
        <div className="flex w-full max-w-[11.25vw] h-[7.19vw] items-center justify-center rounded-[0.52vw] bg-white">
          <img
            src="img/Statick/Jeckpot.png"
            alt="Jackpot"
            className="w-[4.69vw] h-[4.69vw]"
          />
        </div>
        <div className="flex p-[1.25vw] w-full max-w-[27.14vw] h-[7.19vw] items-center justify-between rounded-[0.52vw] bg-white">
          <div className="flex flex-col justify-center items-start gap-[0.05vw]">
            <p className="text-[#1A1E21] font-raleway text-[2.19vw] font-bold [font-variant-numeric:lining-nums_proportional-nums]">
              {statsData?.stats.totalHelpGiven || 0} раз
            </p>
            <p className="text-[#1A1E21] font-raleway text-[1.04vw] font-semibold opacity-40">
              оказана помощь
            </p>
          </div>
          <img
            src="img/Statick/Zont.png"
            alt="Jackpot"
            className="w-[4.69vw] h-[4.69vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default Statistics;