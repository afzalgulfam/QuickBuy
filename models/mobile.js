const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mobileSchema = new Schema({
  brand: String,
  title: String,
  description: String,
  image: String,
  price: Number,
  location: String,
});

const Mobile = mongoose.model("Mobile", mobileSchema);
module.exports = Mobile;
