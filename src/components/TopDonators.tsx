import Image from "next/image";

export default function TopDonators() {
  return (
    <div className="w-full max-w-[942.5px] flex flex-col items-center ">
      <p className="text-right text-[42px] font-[600] leading-normal font-raleway text-white">
        Топ донатеров
      </p>
      <div className="w-full max-w-[942.5px] flex flex-col gap-4 p-6 items-start self-stretch rounded-2xl border border-[#6563EE] bg-[radial-gradient(539.32%_212.31%_at_91.61%_10.09%,rgba(101,99,238,0.4)_0%,rgba(101,99,238,0.16)_41.83%,rgba(101,99,238,0.4)_100%)]">
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
        </div>
        
      </div>
    </div>
  );
}
