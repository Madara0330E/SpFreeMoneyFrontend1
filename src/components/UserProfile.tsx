import { useContext } from "react";
import { SPWorldsContext } from "./SPWorldsProvider";

export const UserProfile = () => {
  const { spm, user } = useContext(SPWorldsContext);

  const handlePayment = async () => {
    if (!spm) return;

    try {
      const payment = await fetch("/api/create-payment").then((r) => r.json());
      spm.openPayment(payment.code);

      spm.on("paymentResponse", async () => {
        console.log("Оплата успешно произведена");
        // Обновляем статус пользователя
      });

      spm.on("paymentError", (err) => {
        console.error(`Ошибка оплаты: ${err}`);
      });
    } catch (error) {
      console.error("Ошибка при создании платежа:", error);
    }
  };

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h1>Профиль пользователя</h1>
      <p>Имя пользователя: {user.username}</p>
      <p>Minecraft UUID: {user.minecraftUUID}</p>

      <button onClick={handlePayment}>Купить премиум</button>
    </div>
  );
};
