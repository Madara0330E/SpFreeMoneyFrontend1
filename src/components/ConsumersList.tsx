import React from "react";

interface Consumer {
  id: number;
  name: string;
  amount: number;
}

const ConsumersList: React.FC = () => {
  const consumers: Consumer[] = [
    { id: 1, name: "Потребитель 1", amount: 1000 },
    { id: 2, name: "Потребитель 2", amount: 2000 },
    { id: 3, name: "Потребитель 3", amount: 3000 },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2
        className="text-[32px] font-raleway font-semibold mb-6"
        style={{ color: "#6563EE" }}
      >
        Список потребителей
      </h2>
      <div className="space-y-4">
        {consumers.map((consumer) => (
          <div
            key={consumer.id}
            className="flex justify-between items-center p-4 bg-white rounded-lg shadow"
          >
            <span
              className="font-raleway"
              style={{
                color: "#6563EE",
                fontVariantNumeric: "lining-nums proportional-nums",
                fontSize: "32px",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              {consumer.name}
            </span>
            <span
              className="font-raleway"
              style={{
                color: "#6563EE",
                fontVariantNumeric: "lining-nums proportional-nums",
                fontSize: "32px",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              {consumer.amount} ₽
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsumersList;
