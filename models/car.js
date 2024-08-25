const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  category: String,
  brand: String,
  model: String,
  variant: String,
  year: Number,
  fuel: String,
  transmission: String,
  driven: Number,
  owners: String,
  description: String,
  image: String,
  price: Number,
  neighbourhood: String,
  city: String,
  state: String,
  createdAt: { type: Date, default: Date.now },
});

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
