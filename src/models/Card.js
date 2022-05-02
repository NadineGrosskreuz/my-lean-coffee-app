import mongoose from "mongoose";
import User from "./User"; /*ergänzt*/

const cardSchema = new mongoose.Schema({
  content: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});
const Card = mongoose.models.Card ?? mongoose.model("Card", cardSchema);

export default Card;
