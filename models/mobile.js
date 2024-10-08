const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mobileSchema = new Schema({
  category: String,
  brand: String,
  title: String,
  description: String,
  image: String,
  price: Number,
  neighbourhood: String,
  city: String,
  state: String,
  createdAt: { type: Date, default: Date.now },
});

const Mobile = mongoose.model("Mobile", mobileSchema);
module.exports = Mobile;
