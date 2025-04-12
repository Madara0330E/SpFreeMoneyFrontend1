import { SPWORLDS_CONFIG } from "../../config/spworlds";

export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://spworlds.ru/api/public/transactions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${SPWORLDS_CONFIG.APP_TOKEN}`,
        },
        body: JSON.stringify({
          amount: 100, // Сумма в рублях
          redirectUri: SPWORLDS_CONFIG.REDIRECT_URI,
          description: "Покупка премиум-статуса",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Ошибка при создании транзакции");
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Ошибка при создании платежа:", error);
    res.status(500).json({ message: error.message });
  }
}
