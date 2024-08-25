const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  category: String,
  brand: String,
  title: String,
  description: String,
  image: String,
  price: Number,
  neighbourhood: String,
  city: String,
  state: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
