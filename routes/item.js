const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Mobile = require("../models/mobile.js");
const Car = require("../models/car.js");
const ExpressError = require("../utils/ExpressError.js");
const { carSchema, mobileSchema } = require("../schema.js");

const validateCar = (req, res, next) => {
  let { error } = carSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

const validateMobile = (req, res, next) => {
  let { error } = mobileSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Index Route
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allMobile = await Mobile.find({});
    const allCar = await Car.find({});
    res.render("items/index.ejs", { allMobile, allCar });
  })
);

// Items Route
router.get("/item", (req, res) => {
  res.render("items/item.ejs");
});

// Show Route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const mobile = await Mobile.findById(id);
    const car = await Car.findById(id);
    res.render("items/show.ejs", { mobile, car });
  })
);

// Attribute Route
router.get("/:id/attribute", async (req, res) => {
  let { id } = req.params;
  res.render("items/attribute.ejs", { id });
});

// New Route
router.get("/:id2/new", async (req, res) => {
  let { id2 } = req.params;
  res.render("items/new.ejs", { id2 });
});

// Create Car Route
router.post(
  "/cars",
  validateCar,
  wrapAsync(async (req, res) => {
    let newCar = new Car(req.body.car);
    await newCar.save();
    res.redirect("/items");
  })
);

// Create Mobile Route
router.post(
  "/mobiles",
  validateMobile,
  wrapAsync(async (req, res) => {
    let newMobile = new Mobile(req.body.mobile);
    await newMobile.save();
    res.redirect("/items");
  })
);

// Edit Route
router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const mobile = await Mobile.findById(id);
    const car = await Car.findById(id);
    res.render("items/edit.ejs", { mobile, car });
  })
);

// Update Car Route
router.put(
  "/cars/:id",
  validateCar,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Car.findByIdAndUpdate(id, { ...req.body.car });
    res.redirect(`/items/${id}`);
  })
);

// Update Mobile Route
router.put(
  "/mobiles/:id",
  validateMobile,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Mobile.findByIdAndUpdate(id, { ...req.body.mobile });
    res.redirect(`/items/${id}`);
  })
);

// Delete Route
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Car.findByIdAndDelete(id);
    await Mobile.findByIdAndDelete(id);
    res.redirect("/items");
  })
);

// Chat Route
router.get(
  "/:id/chat",
  wrapAsync(async (req, res) => {
    let car;
  })
);

module.exports = router;
