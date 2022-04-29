import { dbConnect } from "../../../src/lib/database";
import Card from "../../../src/models/Card";
import User from "../../../src/models/User";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const data = JSON.parse(request.body);
    await dbConnect();

    //schau in die Datenbank, ob es schon einen User mit dem Namen gibt
    let user = await User.findOne({ name: data.name });

    //Namen gibt es schon: es passiert nichts, es gibt ihn noch nicht: Karte wird angelegt
    if (!user) {
      user = await User.create({ name: data.name });
    }

    const newCard = await Card.create({
      content: data.content,
      user: user.id,
    });

    response.status(200).json({
      message: "card created",
      card: newCard,
    });
  } else {
    response.status(400).json({ error: "wrong method" });
  }
}
