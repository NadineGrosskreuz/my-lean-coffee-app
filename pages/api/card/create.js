import { Card } from "@mui/material";
import { dbConnect } from "../../../src/lib/database";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const data = JSON.parse(request.body);
    await dbConnect();
    const newCard = await Card.create({ ...data });
    response.status(200).json({
      message: "card created",
      card: newCard,
    });
  } else {
    response.status(400).json({ error: "wrong method" });
  }
}
