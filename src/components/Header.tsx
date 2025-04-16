"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f] h-[3vw]">
      <nav className="flex items-center justify-between h-full px-[1.04vw]">
        <div className="flex items-center gap-[6.667vw] absolute left-1/2 -translate-x-1/2">
          <Link
            href="/"
            className={`font-raleway text-[1.67vw] font-semibold ${
              pathname === "/" ? "text-white" : "text-[#808080]"
            }`}
          >
            Главная
          </Link>
          <Link
            href="/tops"
            className={`font-raleway text-[1.67vw] font-semibold ${
              pathname === "/tops" ? "text-white" : "text-[#808080]"
            }`}
          >
            Топы
          </Link>
          <Link
            href="/history"
            className={`font-raleway text-[1.67vw] font-semibold ${
              pathname === "/history" ? "text-white" : "text-[#808080]"
            }`}
          >
            История
          </Link>
          <Link
            href="/fees"
            className={`font-raleway text-[1.67vw] font-semibold ${
              pathname === "/fees" ? "text-white" : "text-[#808080]"
            }`}
          >
            Сборы
          </Link>
        </div>
        <div className="ml-auto">
          <Link
            href="/profile"
            className={`font-raleway text-[1.67vw] font-semibold ${
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
