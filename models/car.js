const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  brand: String,
  model: String,
  variant: String,
  year: Number,
  fuel: String,
  transmission: String,
  driven: Number,
  owners: Number,
  description: String,
  image: String,
  price: Number,
  location: String,
  city: String,
  state: String,
});

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
