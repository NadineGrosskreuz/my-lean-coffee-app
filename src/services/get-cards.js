import Card from "../models/Card";
import { dbConnect } from "../lib/database";

export const getCards = async () => {
  await dbConnect();
  //populate ist wichtig
  const data = await Card.find().populate("user");
  return data.map(({ id, content, user }) => {
    return { id, content, name: user.name };
  });
};
