const Mobile = require("./models/mobile.js");
const Car = require("./models/car.js");
const ExpressError = require("./utils/ExpressError.js");
const { carSchema, mobileSchema } = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "you must be logged in to post add!");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isCarOwner = async (req, res, next) => {
  let { id } = req.params;
  let car = await Car.findById(id);
  if (!car.owner._id.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the owner of this add!");
    return res.redirect(`/items/car/${id}`);
  }
  next();
};

module.exports.isMobileOwner = async (req, res, next) => {
  let { id } = req.params;
  let mobile = await Mobile.findById(id);
  if (!mobile.owner._id.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the owner of this add!");
    return res.redirect(`/items/mobile/${id}`);
  }
  next();
};

module.exports.validateCar = (req, res, next) => {
  let { error } = carSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

module.exports.validateMobile = (req, res, next) => {
  let { error } = mobileSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};
