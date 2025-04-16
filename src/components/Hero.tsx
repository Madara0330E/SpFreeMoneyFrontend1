import React from "react";

export function Hero() {
  return (
    <div className="flex flex-col">
      <p className="text-white font-raleway text-[8.07vw] font-bold -mb-[0.44vw]">
        SPCharity
      </p>
      <p className="text-white font-raleway text-[2.65vw] font-semibold opacity-40">
        как-нибудь помогут, чем смогут
      </p>
      <div className="w-full flex justify-between max-w-[38.63vw] mt-[4.03vw]">
        <button className="flex h-[4.8vw] justify-center items-center gap-[0.2vw] rounded-[2.65vw] w-full max-w-[18.59vw] bg-[#6563EE] text-white font-raleway text-[1.52vw] font-semibold">
          Отправить в фонд
        </button>
        <button className="flex h-[4.8vw] justify-center items-center gap-[0.2vw] rounded-[2.65vw] w-full max-w-[18.59vw] bg-white text-[#6563EE] font-raleway text-[1.52vw] font-semibold">
          Получить помощь
        </button>
      </div>
    </div>
  );
}
