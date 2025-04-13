import React from "react";

export function Hero() {
  return (
    <div className="flex flex-col">
      <p className="text-white font-raleway text-[6.67vw] font-bold -mb-[0.36vw]">
        SPCharity
      </p>
      <p className="text-white font-raleway text-[2.19vw] font-semibold opacity-40">
        как-нибудь помогут, чем смогут
      </p>
      <div className="w-full flex justify-between max-w-[31.93vw] mt-[3.33vw]">
        <button className="flex px-[2.19vw] py-[1.25vw] h-[3.96vw] justify-center items-center gap-[0.16vw] rounded-[2.19vw] w-full max-w-[15.36vw] bg-[#6563EE] text-white font-raleway text-[1.25vw] font-semibold">
          Отправить в фонд
        </button>
        <button className="flex px-[2.19vw] py-[1.25vw] h-[3.96vw] justify-center items-center gap-[0.16vw] rounded-[2.19vw] w-full max-w-[15.36vw] bg-white text-[#6563EE] font-raleway text-[1.25vw] font-semibold">
          Получить помощь
        </button>
      </div>
    </div>
  );
}