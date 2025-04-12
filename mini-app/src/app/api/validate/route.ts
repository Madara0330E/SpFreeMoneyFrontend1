import { NextResponse } from "next/server";
import { validate } from "spwmini/middleware";

// Замените 'YOUR_SECRET_TOKEN' на ваш секретный токен приложения
const validateMiddleware = validate("msDhTmnsZU7udVHMWWHKN6n464pbYdIo");

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Проверяем наличие всех необходимых полей
    if (
      !body.accountId ||
      !body.discordId ||
      !body.minecraftUUID ||
      !body.username ||
      !body.hash
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Проверяем валидность данных через middleware
    const response = await validateMiddleware(request);

    // Если валидация прошла успешно
    return NextResponse.json({
      valid: true,
      user: {
        accountId: body.accountId,
        discordId: body.discordId,
        minecraftUUID: body.minecraftUUID,
        username: body.username,
      },
    });
  } catch (error) {
    console.error("Validation error:", error);
    return NextResponse.json(
      { error: "User validation failed." },
      { status: 400 }
    );
  }
}
