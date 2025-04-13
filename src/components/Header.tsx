export function Header() {
  return (
    <header className="flex items-center h-[3vw] bg-[#0f0f0f] px-[1.04vw]">
      <nav className="flex items-center justify-between mt-[2.29vw] w-full relative">
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-[1.67vw]">
          <a
            href="#"
            className="text-white font-raleway text-[1.67vw] font-semibold leading-none"
          >
            Главная
          </a>
          <a
            href="#"
            className="text-[#808080] font-raleway text-[1.67vw] font-semibold leading-none"
          >
            Топы
          </a>
          <a
            href="#"
            className="text-[#808080] font-raleway text-[1.67vw] font-semibold leading-none"
          >
            История
          </a>
          <a
            href="#"
            className="text-[#808080] font-raleway text-[1.67vw] font-semibold leading-none"
          >
            Сборы
          </a>
        </div>
        <div className="ml-auto">
          <a
            href="#"
            className="text-white font-raleway text-[1.67vw] font-semibold leading-none"
          >
            fupir
          </a>
        </div>
      </nav>
    </header>
  );
}