const mongoose = require("mongoose");
const initData = require("./data.js");
const Mobile = require("../models/mobile.js");
const Car = require("../models/car.js");

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/QuickBuy");
}

const initDB = async () => {
  await Mobile.deleteMany({});
  await Mobile.insertMany(initData.mobileData);
  console.log("data was initialized");
};

initDB();
