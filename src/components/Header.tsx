export function Header() {
  return (
    <header className="flex items-center h-[48px] bg-[#0f0f0f] px-4">
      <nav className="flex items-center justify-between mt-[44px] w-full relative">
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-8">
          <a
            href="#"
            className="text-white font-raleway text-[32px] font-semibold leading-none"
          >
            Главная
          </a>
          <a
            href="#"
            className="text-[#808080] font-raleway text-[32px] font-semibold leading-none"
          >
            Топы
          </a>
          <a
            href="#"
            className="text-[#808080] font-raleway text-[32px] font-semibold leading-none"
          >
            История
          </a>
          <a
            href="#"
            className="text-[#808080] font-raleway text-[32px] font-semibold leading-none"
          >
            Сборы
          </a>
        </div>
        <div className="ml-auto">
          <a
            href="#"
            className="text-white font-raleway text-[32px] font-semibold leading-none"
          >
            fupir
          </a>
        </div>
      </nav>
    </header>
  );
}
