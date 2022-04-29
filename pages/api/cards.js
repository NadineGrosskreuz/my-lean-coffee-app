import { getCards } from "../../src/services/get-cards";

export default async function handler(request, response) {
  const cards = await getCards();

  response.status(200).json(cards);
}
