"use client";

import Image from "next/image";

export default function TopConsumers() {
  return (
    <div className="w-full max-w-[942.5px] flex flex-col items-center ">
      <p className="text-right text-[42px] font-[600] leading-normal mb-4 font-raleway text-white">
        Топ потребитилей
      </p>
      <div className="w-full max-w-[942.5px] flex flex-col gap-4 p-6 items-start self-stretch  rounded-[16px] bg-[rgba(255,255,255,0.05)]">
        <div className="justify-between flex items-center w-full">
          <div className="flex items-center gap-3 w-full">
            <span className="text-white text-center text-[32px] font-[600] leading-normal font-raleway font-numeric [font-variant-numeric:lining-nums_proportional-nums]">
              #1
            </span>
            <div className="flex items-center gap-3 w-full">
              <img src="" alt="" className="h-[70px] w-[70px]" />
              <span className="text-white text-[32px] font-[600] leading-normal font-raleway [font-variant-numeric:lining-nums_proportional-nums]">
                fupir
              </span>
            </div>
          </div>

          <div className="flex items-center  w-full justify-end">
            <span className="text-white text-center text-[32px] font-[600] leading-normal font-raleway font-numeric [font-variant-numeric:lining-nums_proportional-nums]">
              42 000 АР
            </span>
          </div>
        </div>
      </div>
      <span className="text-[#6563EE] text-[32px] mt-4 font-raleway font-semibold leading-normal [font-variant-numeric:lining-nums_proportional-nums]">
        список потребителей
      </span>
    </div>
  );
}
