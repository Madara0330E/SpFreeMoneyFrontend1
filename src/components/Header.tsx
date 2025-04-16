"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center h-[3vw] bg-[#0f0f0f] px-[1.04vw]">
      <nav className="flex items-center justify-between mt-[2.292vw] w-full relative">
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-[6.667vw]">
          <Link
            href="/"
            className={`font-raleway text-[1.67vw] font-semibold leading-none ${
              pathname === "/" ? "text-white" : "text-[#808080]"
            }`}
          >
            Главная
          </Link>
          <Link
            href="/tops"
            className={`font-raleway text-[1.67vw] font-semibold leading-none ${
              pathname === "/tops" ? "text-white" : "text-[#808080]"
            }`}
          >
            Топы
          </Link>
          <Link
            href="/history"
            className={`font-raleway text-[1.67vw] font-semibold leading-none ${
              pathname === "/history" ? "text-white" : "text-[#808080]"
            }`}
          >
            История
          </Link>
          <Link
            href="/fees"
            className={`font-raleway text-[1.67vw] font-semibold leading-none ${
              pathname === "/fees" ? "text-white" : "text-[#808080]"
            }`}
          >
            Сборы
          </Link>
        </div>
        <div className="ml-auto">
          <Link
            href="/profile"
            className={`font-raleway text-[1.67vw] font-semibold leading-none ${
              pathname === "/profile" ? "text-white" : "text-[#808080]"
            }`}
          >
            fupir
          </Link>
        </div>
      </nav>
    </header>
  );
}
