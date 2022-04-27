export default function handler(request, response) {
  if (request.method === "POST") {
    const newCard = JSON.parse(request.body);
    response.status(200).json({
      message: "card created",
      card: newCard,
    });
  } else {
    response.status(400).json({ error: "wrong method" });
  }
}
