"use client";

import Image from "next/image";

export default function TopConsumers() {
  return (
    <div className="w-full max-w-[49.09vw] flex flex-col items-center">
      <p className="text-right text-[2.19vw] font-[600] leading-normal mb-[0.21vw] font-raleway text-white">
        Топ потребителей
      </p>
      <div className="w-full max-w-[49.09vw] flex flex-col gap-3 p-[1.25vw] items-start self-stretch rounded-[0.83vw] bg-[rgba(255,255,255,0.05)]">
        <div className="justify-between flex items-center w-full">
          <div className="flex items-center gap-3 w-full">
            <span className="text-white text-center text-[1.67vw] font-[600] leading-normal font-raleway font-numeric [font-variant-numeric:lining-nums_proportional-nums]">
              #1
            </span>
            <div className="flex items-center gap-3 w-full">
              <img src="" alt="" className="h-[3.65vw] w-[3.65vw]" />
              <span className="text-white text-[1.67vw] font-[600] leading-normal font-raleway [font-variant-numeric:lining-nums_proportional-nums]">
                fupir
              </span>
            </div>
          </div>

          <div className="flex items-center w-full justify-end">
            <span className="text-white text-center text-[1.67vw] font-[600] leading-normal font-raleway font-numeric [font-variant-numeric:lining-nums_proportional-nums]">
              42 000 АР
            </span>
          </div>
        </div>
      </div>
      <span className="text-[#6563EE] text-[1.67vw] mt-[0.21vw] font-raleway font-semibold leading-normal [font-variant-numeric:lining-nums_proportional-nums]">
        список потребителей
      </span>
    </div>
  );
}