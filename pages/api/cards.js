import { getCards } from "../../src/services/get-cards";

export default function handler(request, response) {
  const cards = getCards();

  response.status(200).json(cards);
}
