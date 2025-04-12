import { NextResponse } from "next/server";
import { checkUser } from "spwmini/middleware";
import type { UserData } from "spwmini/types";

const SECRET_TOKEN = "msDhTmnsZU7udVHMWWHKN6n464pbYdIo";

// Обработка OPTIONS запросов для CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

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
        {
          status: 400,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Проверяем валидность пользователя
    const isValid = checkUser(body as UserData, SECRET_TOKEN);

    if (!isValid) {
      return NextResponse.json(
        { error: "User validation failed." },
        {
          status: 400,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // Если валидация прошла успешно
    return NextResponse.json(
      {
        valid: true,
        user: {
          accountId: body.accountId,
          discordId: body.discordId,
          minecraftUUID: body.minecraftUUID,
          username: body.username,
        },
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error("Validation error:", error);
    return NextResponse.json(
      { error: "User validation failed." },
      {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
