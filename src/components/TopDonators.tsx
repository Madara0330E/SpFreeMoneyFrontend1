import Image from "next/image";

export default function TopDonators() {
  return (
    <div className="w-full max-w-[942.5px] flex flex-col items-center ">
      <p className="text-right text-[42px] font-[600] leading-normal mb-4 font-raleway text-white">
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

          <div className="flex items-center gap-3 w-full justify-end">
            <span className="text-white text-center text-[32px] font-[600] leading-normal font-raleway font-numeric [font-variant-numeric:lining-nums_proportional-nums]">
              4 доната
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="6"
              viewBox="0 0 5 6"
              fill="none"
            >
              <path
                d="M5 3C5 3.45455 4.89002 3.87542 4.67005 4.26263C4.45008 4.633 4.14552 4.93603 3.75634 5.17172C3.38409 5.39057 2.96108 5.5 2.48731 5.5C2.04738 5.5 1.63283 5.39057 1.24365 5.17172C0.871404 4.93603 0.566836 4.633 0.329949 4.26263C0.109983 3.87542 0 3.44613 0 2.97475C0 2.53704 0.109983 2.133 0.329949 1.76263C0.566836 1.37542 0.871404 1.07239 1.24365 0.853535C1.63283 0.617845 2.04738 0.5 2.48731 0.5C2.96108 0.5 3.38409 0.617845 3.75634 0.853535C4.14552 1.07239 4.45008 1.37542 4.67005 1.76263C4.89002 2.133 5 2.54545 5 3Z"
                fill="white"
              />
            </svg>
            <span className="text-white text-center text-[32px] font-[600] leading-normal font-raleway font-numeric [font-variant-numeric:lining-nums_proportional-nums]">
              42 000 АР
            </span>
          </div>
        </div>

        <div className="h-[1px] self-stretch  bg-white opacity-10"></div>
        <div className="flex justify-between w-full items-center">
          <div className="div">
            <div className="flex items-center gap-3 justify-between w-full">
              <div className="flex items-center gap-3 w-full ">
                <span className="text-[#6563EE] text-[24px] font-[600] leading-normal font-raleway">
                  На кота
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="6"
                  viewBox="0 0 5 6"
                  fill="none"
                >
                  <path
                    d="M5 3C5 3.45455 4.89002 3.87542 4.67005 4.26263C4.45008 4.633 4.14552 4.93603 3.75634 5.17172C3.38409 5.39057 2.96108 5.5 2.48731 5.5C2.04738 5.5 1.63283 5.39057 1.24365 5.17172C0.871404 4.93603 0.566836 4.633 0.329949 4.26263C0.109983 3.87542 0 3.44613 0 2.97475C0 2.53704 0.109983 2.133 0.329949 1.76263C0.566836 1.37542 0.871404 1.07239 1.24365 0.853535C1.63283 0.617845 2.04738 0.5 2.48731 0.5C2.96108 0.5 3.38409 0.617845 3.75634 0.853535C4.14552 1.07239 4.45008 1.37542 4.67005 1.76263C4.89002 2.133 5 2.54545 5 3Z"
                    fill="white"
                  />
                </svg>
                <span className="text-white text-[20px] opacity-40 font-[600] leading-normal font-raleway [font-variant-numeric:lining-nums_proportional-nums]">
                  20.02.2025, 21:14
                </span>
              </div>
              <div className="text-white w-[150px] text-[24px] font-[600] leading-normal font-raleway [font-variant-numeric:lining-nums_proportional-nums]">
                40 000 АР
              </div>
            </div>
            <div className="text-white text-[24px] font-[600] leading-normal font-raleway overflow-hidden text-ellipsis">
              Еия, но нужно выбирать другой фрагмент, желательно все по памяти,
              в...
            </div>
          </div>
          <button>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="22"
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
  );
}
