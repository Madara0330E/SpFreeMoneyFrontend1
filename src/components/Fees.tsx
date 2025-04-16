"use client";

import React from "react";

export const Fees: React.FC = () => {
  return (
    <div className="container w-full max-w-[628px] px-[1.04vw] py-[2vw] flex flex-col items-start gap-4 flex-1 rounded-2xl bg-white/5 p-6">
      <div className="flex flex-col justify-center items-start gap-[4px] self-stretch">
        <div className="[-webkit-box-orient:vertical] [-webkit-line-clamp:1] self-stretch overflow-hidden text-[#6563EE] text-ellipsis font-raleway text-[32px] font-semibold leading-normal">
          На кота
        </div>
        <div className="flex items-start gap-[8px]">
          <div className="text-white font-raleway text-[24px] font-semibold leading-normal [font-variant-numeric:lining-nums_proportional-nums]">
            Общественый сбор
          </div>
          <div className="text-white font-raleway text-[24px] font-semibold leading-normal [font-variant-numeric:lining-nums_proportional-nums] opacity-40">
            от fupir
          </div>
        </div>
        <div className="line-clamp-3 self-stretch overflow-hidden text-white font-raleway text-[32px] font-semibold leading-normal">
          Я, но нужно выбирать другой фрагмент, желательно все по памяти, в
          третьем работа со стихотворением, в четвертом сравнение стихотворений,
          которое дают в четвертом заданием и в третьем, ну и пятое это большое
          сочинение
        </div>
        <div className="flex flex-col items-start gap-2 self-stretch">
          <div className="flex w-full h-[72px] items-center gap-[10px] rounded-2xl bg-white/10 ">
            <div className="flex h-[72px] w-[395px] items-center gap-[10px] rounded-2xl bg-[#6563EE] px-4 py-[17px]">
              <span className="text-white font-raleway">1 000 AP • 70%</span>
            </div>
            <div className="flex h-[72px] items-center gap-[10px] px-4 py-[17px]">
              <span className="text-white font-raleway">2 400 AP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
