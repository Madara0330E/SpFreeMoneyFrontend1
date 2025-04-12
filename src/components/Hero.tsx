import React from "react";

export function Hero() {
  return (
    <div className="flex flex-col ">
      <p className="text-white font-raleway text-[128px] font-bold -mb-7">
        SPCharity
      </p>
      <p className="text-white font-raleway text-[42px] font-semibold opacity-40">
        как-нибудь помогут, чем смогут
      </p>
      <div className="w-full flex justify-between max-w-[613px] mt-[64px]">
        <button className="flex px-[42px] py-[24px] h-[76px] justify-center items-center gap-3 rounded-[42px] w-full max-w-[295px] bg-[#6563EE] text-white font-raleway text-[24px] font-semibold">
          Отправить в фонд
        </button>
        <button className="flex px-[42px] py-[24px] h-[76px] justify-center items-center gap-3 rounded-[42px] w-full max-w-[295px] bg-white text-[#6563EE] font-raleway text-[24px] font-semibold">
          Получить помощь
        </button>
      </div>
    </div>
  );
}
