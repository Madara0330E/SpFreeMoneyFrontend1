"use client";

import React from "react";

export default function Fees() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="container mx-auto px-[1.04vw] py-[2vw]">
        <h1 className="text-[2.5vw] font-raleway font-semibold mb-[2vw]">
          Сборы
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2vw]">
          {/* Здесь будет контент сборов */}
          <div className="bg-[#1a1a1a] p-[1.5vw] rounded-lg">
            <h2 className="text-[1.67vw] font-raleway font-semibold mb-[1vw]">
              Пример сбора
            </h2>
            <p className="text-[1.25vw] text-[#808080]">
              Описание сбора будет здесь
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
