import Image from "next/image";
import { useEffect, useState } from "react";

interface User {
  id: string;
  username: string;
  avatarUrl: string;
}

interface Donate {
  id: string;
  amount: number;
  message: string;
  user: User;
  createdAt: string;
}

interface DonatesResponse {
  donates: Donate[];
}

export default function TopDonators() {
  const [donates, setDonates] = useState<Donate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonates = async () => {
      try {
        const response = await fetch(
          "https://money.chasman.engineer/api/donates"
        );
        const data: DonatesResponse = await response.json();
        const sortedDonates = data.donates.sort((a, b) => b.amount - a.amount);
        setDonates(sortedDonates);
      } catch (error) {
        console.error("Ошибка при загрузке донатов:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonates();
  }, []);

  if (loading) {
    return <div className="text-white text-center">Загрузка...</div>;
  }

  return (
    <div className="w-full max-w-[49.09vw] flex flex-col items-center">
      <p className="text-right text-[2.19vw] font-[600] leading-normal mb-[0.21vw] font-raleway text-white">
        Топ донатеров
      </p>
      <div className="w-full flex flex-col gap-[0.833vw]">
        {donates.slice(0, 3).map((donate, index) => (
          <div
            key={donate.id}
            className={`w-full flex flex-col gap-[0.833vw] p-[1.25vw] items-start self-stretch rounded-[0.83vw] ${
              index === 0
                ? "border border-[#6563EE] bg-[radial-gradient(539.32%_212.31%_at_91.61%_10.09%,rgba(101,99,238,0.4)_0%,rgba(101,99,238,0.16)_41.83%,rgba(101,99,238,0.4)_100%)]"
                : "mt-[0.21vw] bg-[rgba(255,255,255,0.05)]"
            }`}
          >
            <div className="justify-between flex items-center w-full">
              <div className="flex items-center gap-3 w-full">
                <span className="text-white text-center text-[1.67vw] font-[600] leading-normal font-raleway font-numeric [font-variant-numeric:lining-nums_proportional-nums]">
                  #{index + 1}
                </span>
                <div className="flex items-center gap-3 w-full">
                  <img
                    src={donate.user.avatarUrl}
                    alt={donate.user.username}
                    className="h-[3.65vw] w-[3.65vw]"
                  />
                  <span className="text-white text-[1.67vw] font-[600] leading-normal font-raleway [font-variant-numeric:lining-nums_proportional-nums]">
                    {donate.user.username}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full justify-end">
                <span className="text-white text-center text-[1.67vw] font-[600] leading-normal font-raleway font-numeric [font-variant-numeric:lining-nums_proportional-nums]">
                  {donates.filter((d) => d.user.id === donate.user.id).length}{" "}
                  доната
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.26vw"
                  height="0.31vw"
                  viewBox="0 0 5 6"
                  fill="none"
                >
                  <path
                    d="M5 3C5 3.45455 4.89002 3.87542 4.67005 4.26263C4.45008 4.633 4.14552 4.93603 3.75634 5.17172C3.38409 5.39057 2.96108 5.5 2.48731 5.5C2.04738 5.5 1.63283 5.39057 1.24365 5.17172C0.871404 4.93603 0.566836 4.633 0.329949 4.26263C0.109983 3.87542 0 3.44613 0 2.97475C0 2.53704 0.109983 2.133 0.329949 1.76263C0.566836 1.37542 0.871404 1.07239 1.24365 0.853535C1.63283 0.617845 2.04738 0.5 2.48731 0.5C2.96108 0.5 3.38409 0.617845 3.75634 0.853535C4.14552 1.07239 4.45008 1.37542 4.67005 1.76263C4.89002 2.133 5 2.54545 5 3Z"
                    fill="white"
                  />
                </svg>
                <span className="text-white text-center text-[1.67vw] font-[600] leading-normal font-raleway font-numeric [font-variant-numeric:lining-nums_proportional-nums]">
                  {donate.amount} АР
                </span>
              </div>
            </div>

            <div className="h-[0.05vw] self-stretch bg-white opacity-10"></div>
            <div className="flex justify-between w-full  items-center max-w-[45.104vw]">
              <div className="flex flex-col max-w-[43vw] gap-3 w-full">
                <div className="flex items-center gap-3 justify-between w-full">
                  <div className="flex items-center gap-3 w-full justify-between">
                    <div className="flex items-center gap-3 w-full">
                     
                      <span className="text-white text-[1.04vw] opacity-40 font-[600] leading-normal font-raleway [font-variant-numeric:lining-nums_proportional-nums]">
                        {new Date(donate.createdAt).toLocaleString("ru-RU")}
                      </span>
                    </div>
                    <div className="text-white w-[8.33vw] text-[1.25vw] font-[600] leading-normal font-raleway [font-variant-numeric:lining-nums_proportional-nums] text-right pr-0">
                      {donate.amount} АР
                    </div>
                  </div>
                </div>
                <div className="text-white text-[1.25vw] font-[600] leading-normal w-full font-raleway overflow-hidden text-ellipsis whitespace-nowrap max-w-[45.1vw]">
                  {donate.message || "Без сообщения"}
                </div>
              </div>

              <div className="flex flex-col items-end justify-end">
                <button className="ml-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.68vw"
                    height="1.15vw"
                    viewBox="0 0 13 22"
                    fill="none"
                  >
                    <path
                      d="M0.96333 0.460261C1.5811 -0.15342 2.58271 -0.15342 3.20048 0.460261L11.5733 8.77766C12.8089 10.005 12.8089 11.995 11.5733 13.2223L3.20048 21.5397C2.58271 22.1534 1.5811 22.1534 0.96333 21.5397C0.345557 20.9261 0.345557 19.9311 0.96333 19.3174L9.33619 11L0.96333 2.6826C0.345557 2.06892 0.345557 1.07394 0.96333 0.460261Z"
                      fill="#F9F9FF"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <span className="text-[#6563EE] text-[1.67vw] mt-[0.21vw] font-raleway font-semibold leading-normal [font-variant-numeric:lining-nums_proportional-nums]">
        список потребителей
      </span>
    </div>
  );
}
