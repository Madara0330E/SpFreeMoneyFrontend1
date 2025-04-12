import type { NextApiRequest, NextApiResponse } from "next";
import { checkUser } from "spwmini/middleware";
import type { UserData } from "spwmini/types";

const SECRET_TOKEN = "msDhTmnsZU7udVHMWWHKN6n464pbYdIo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle preflight request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = req.body;

    // Check required fields
    if (
      !body.accountId ||
      !body.discordId ||
      !body.minecraftUUID ||
      !body.username ||
      !body.hash
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Validate user
    const isValid = checkUser(body as UserData, SECRET_TOKEN);

    if (!isValid) {
      return res.status(400).json({ error: "User validation failed" });
    }

    // Return success response
    return res.status(200).json({
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
    return res.status(400).json({ error: "User validation failed" });
  }
}
