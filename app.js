const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Mobile = require("./models/mobile.js");
const Car = require("./models/car.js");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/QuickBuy");
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send("Hii, I am Root");
});

// Index Route
app.get(
  "/items",
  wrapAsync(async (req, res) => {
    const allMobile = await Mobile.find({});
    const allCar = await Car.find({});
    res.render("items/index.ejs", { allMobile, allCar });
  })
);

// Items Route
app.get("/items/item", (req, res) => {
  res.render("items/item.ejs");
});

// Show Route
app.get(
  "/items/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const mobile = await Mobile.findById(id);
    const car = await Car.findById(id);
    res.render("items/show.ejs", { mobile, car });
  })
);

// Attribute Route
app.get("/items/:id/attribute", async (req, res) => {
  let { id } = req.params;
  res.render("items/attribute.ejs", { id });
});

// New Route
app.get("/items/:id2/new", async (req, res) => {
  let { id2 } = req.params;
  res.render("items/new.ejs", { id2 });
});

// Create Route
app.post(
  "/items",
  wrapAsync(async (req, res) => {
    if (req.body.car) {
      let newCar = new Car(req.body.car);
      await newCar.save();
    }
    if (req.body.mobile) {
      let newMobile = new Mobile(req.body.mobile);
      await newMobile.save();
    }
    res.redirect("/items");
  })
);

// Delete Route
app.delete(
  "/items/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Car.findByIdAndDelete(id);
    await Mobile.findByIdAndDelete(id);
    res.redirect("/items");
  })
);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message });
  // res.status(statusCode).send(message);
});

app.listen(8080, () => {
  console.log("app is listing to port 8080");
});
