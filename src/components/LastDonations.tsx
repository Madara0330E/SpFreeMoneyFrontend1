import React, { useState, useEffect } from "react";

interface Donate {
  id: {
    timestamp: number;
    creationTime: string;
  };
  userId: {
    timestamp: number;
    creationTime: string;
  };
  amount: number;
  message: string;
  isAnonymous: boolean;
  paymentCode: string | null;
  paidDateUtc: string | null;
  createdDateUtc: string;
}

interface DonatesResponse {
  donates: Donate[];
}

const LastDonations: React.FC = () => {
  const [donates, setDonates] = useState<Donate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDonates = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://money.chasman.engineer/api/donates"
        );

        if (!response.ok) {
          throw new Error(`Ошибка загрузки данных: ${response.status}`);
        }

        const data: DonatesResponse = await response.json();
        // Сортируем донаты по дате создания (новые первыми)
        const sortedDonates = [...data.donates].sort(
          (a, b) =>
            new Date(b.createdDateUtc).getTime() -
            new Date(a.createdDateUtc).getTime()
        );
        setDonates(sortedDonates);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Произошла ошибка при загрузке данных"
        );
        console.error("Ошибка при загрузке донатов:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDonates();
  }, []);

  // Функция для форматирования времени
  const formatDonationTime = (timeString: string) => {
    const time = new Date(timeString);
    const now = new Date();
    const diffInHours = (now.getTime() - time.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      // Если прошло менее 24 часов, показываем "X ч назад"
      const hours = Math.floor(diffInHours);
      return `${hours} ч назад`;
    } else {
      // Если прошло более 24 часов, показываем полную дату и время
      const day = time.getDate().toString().padStart(2, "0");
      const month = (time.getMonth() + 1).toString().padStart(2, "0");
      const year = time.getFullYear();
      const hours = time.getHours().toString().padStart(2, "0");
      const minutes = time.getMinutes().toString().padStart(2, "0");

      return {
        date: `${day}.${month}.${year}`,
        time: `${hours}:${minutes}`,
      };
    }
  };

  // Отображаем только первые 6 донатов
  const displayedDonates = donates.slice(0, 6);

  return (
    <div className="flex flex-col gap-[10px]">
      <div className="w-full flex justify-center items-center">
        <p className="text-right text-[2.19vw] font-[600] leading-normal mb-4 font-raleway text-white">
          Последние донаты
        </p>
      </div>

      {loading ? (
        <div className="w-full flex justify-center items-center">
          <p className="text-white text-[1.25vw]">Загрузка...</p>
        </div>
      ) : error ? (
        <div className="w-full flex justify-center items-center">
          <p className="text-red-500 text-[1.25vw]">{error}</p>
        </div>
      ) : displayedDonates.length === 0 ? (
        <div className="w-full flex justify-center items-center">
          <p className="text-white text-[1.25vw]">Нет донатов</p>
        </div>
      ) : (
        <div className="w-full flex justify-center gap-[10px] items-center">
          <div className="flex-col w-full flex gap-[10px] max-w-[32.73vw] items-center">
            {displayedDonates
              .filter((_, index) => index % 3 === 0)
              .map((donate, index) => (
                <div
                  key={donate.id.timestamp}
                  className={`flex max-w-[32.73vw] w-full p-[1.25vw] flex-col items-start gap-[10px] self-stretch rounded-[0.83vw] ${
                    index % 2 === 0
                      ? "bg-white/5"
                      : "border border-[#6563EE] bg-[radial-gradient(539.32%_212.31%_at_91.61%_10.09%,_rgba(101,99,238,0.4)_0%,_rgba(101,99,238,0.16)_41.83%,_rgba(101,99,238,0.4)_100%)]"
                  }`}
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-3 justify-center">
                      <img src="" alt="" className="h-[3.65vw] w-[3.65vw]" />
                      <span className="text-white text-[1.67vw] font-[600] leading-normal font-raleway [font-variant-numeric:lining-nums_proportional-nums]">
                        {donate.isAnonymous ? "Аноним" : "fupir"}
                      </span>
                      <div className="text-white text-[1.04vw] opacity-40 font-[600] leading-normal font-raleway [font-variant-numeric:lining-nums_proportional-nums]">
                        {(() => {
                          const formattedTime = formatDonationTime(
                            donate.createdDateUtc
                          );
                          if (typeof formattedTime === "string") {
                            return (
                              <p className="text-[1.04vw]">{formattedTime}</p>
                            );
                          } else {
                            return (
                              <>
                                <p className="text-[1.04vw]">
                                  {formattedTime.date}
                                </p>
                                <p className="text-[1.04vw]">
                                  {formattedTime.time}
                                </p>
                              </>
                            );
                          }
                        })()}
                      </div>
                    </div>
                    <div className="div">
                      <span className="text-white text-[1.67vw] font-[600] leading-normal font-raleway [font-variant-numeric:lining-nums_proportional-nums]">
                        {donate.amount} АР
                      </span>
                    </div>
                  </div>
                  <div className="text-white text-[1.25vw] font-[600] leading-normal font-raleway">
                    {donate.message}
                  </div>
                </div>
              ))}
          </div>
          <div className="flex-col w-full flex max-w-[32.73vw] gap-[10px] items-center">
            {displayedDonates
              .filter((_, index) => index % 3 === 1)
              .map((donate, index) => (
                <div
                  key={donate.id.timestamp}
                  className={`flex max-w-[32.73vw] w-full p-[1.25vw] flex-col items-start gap-[10px] self-stretch rounded-[0.83vw] ${
                    index % 2 === 0
                      ? "border border-[#6563EE] bg-[radial-gradient(539.32%_212.31%_at_91.61%_10.09%,_rgba(101,99,238,0.4)_0%,_rgba(101,99,238,0.16)_41.83%,_rgba(101,99,238,0.4)_100%)]"
                      : "bg-white/5"
                  }`}
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-3 justify-center">
                      <img src="" alt="" className="h-[3.65vw] w-[3.65vw]" />
                      <span className="text-white text-[1.67vw] font-[600] leading-normal font-raleway [font-variant-numeric:lining-nums_proportional-nums]">
                        {donate.isAnonymous ? "Аноним" : "fupir"}
                      </span>
                      <div className="text-white text-[1.04vw] opacity-40 font-[600] leading-normal font-raleway [font-variant-numeric:lining-nums_proportional-nums]">
                        {(() => {
                          const formattedTime = formatDonationTime(
                            donate.createdDateUtc
                          );
                          if (typeof formattedTime === "string") {
                            return (
                              <p className="text-[1.04vw]">{formattedTime}</p>
                            );
                          } else {
                            return (
                              <>
                                <p className="text-[1.04vw]">
                                  {formattedTime.date}
                                </p>
                                <p className="text-[1.04vw]">
                                  {formattedTime.time}
                                </p>
                              </>
                            );
                          }
                        })()}
                      </div>
                    </div>
                    <div className="div">
                      <span className="text-white text-[1.67vw] font-[600] leading-normal font-raleway [font-variant-numeric:lining-nums_proportional-nums]">
                        {donate.amount} АР
                      </span>
                    </div>
                  </div>
                  <div className="text-white text-[1.25vw] font-[600] leading-normal font-raleway">
                    {donate.message}
                  </div>
                </div>
              ))}
          </div>
          <div className="flex-col w-full max-w-[32.73vw] flex gap-4 items-center">
            {displayedDonates
              .filter((_, index) => index % 3 === 2)
              .map((donate, index) => (
                <div
                  key={donate.id.timestamp}
                  className={`flex max-w-[32.73vw] w-full p-[1.25vw] flex-col items-start gap-[10px] self-stretch rounded-[0.83vw] ${
                    index % 2 === 0
                      ? "bg-white/5"
                      : "border border-[#6563EE] bg-[radial-gradient(539.32%_212.31%_at_91.61%_10.09%,_rgba(101,99,238,0.4)_0%,_rgba(101,99,238,0.16)_41.83%,_rgba(101,99,238,0.4)_100%)]"
                  }`}
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-3 justify-center">
                      <img src="" alt="" className="h-[3.65vw] w-[3.65vw]" />
                      <span className="text-white text-[1.67vw] font-[600] leading-normal font-raleway [font-variant-numeric:lining-nums_proportional-nums]">
                        {donate.isAnonymous ? "Аноним" : "fupir"}
                      </span>
                      <div className="text-white text-[1.04vw] opacity-40 font-[600] leading-normal font-raleway [font-variant-numeric:lining-nums_proportional-nums]">
                        {(() => {
                          const formattedTime = formatDonationTime(
                            donate.createdDateUtc
                          );
                          if (typeof formattedTime === "string") {
                            return (
                              <p className="text-[1.04vw]">{formattedTime}</p>
                            );
                          } else {
                            return (
                              <>
                                <p className="text-[1.04vw]">
                                  {formattedTime.date}
                                </p>
                                <p className="text-[1.04vw]">
                                  {formattedTime.time}
                                </p>
                              </>
                            );
                          }
                        })()}
                      </div>
                    </div>
                    <div className="div">
                      <span className="text-white text-[1.67vw] font-[600] leading-normal font-raleway [font-variant-numeric:lining-nums_proportional-nums]">
                        {donate.amount} АР
                      </span>
                    </div>
                  </div>
                  <div className="text-white text-[1.25vw] font-[600] leading-normal font-raleway">
                    {donate.message}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      <div className="w-full flex justify-center items-center">
        <span className="text-[#6563EE] text-[1.67vw] mt-4 font-raleway font-semibold leading-normal [font-variant-numeric:lining-nums_proportional-nums]">
          вся история
        </span>
      </div>
    </div>
  );
};

export default LastDonations;
