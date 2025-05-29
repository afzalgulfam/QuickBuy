const express = require("express");
// const http = require("http");
// const socketio = require("socket.io");
// const server = http.createServer(app);
// const io = socketio(server);
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Mobile = require("../models/mobile.js");
const Car = require("../models/car.js");
const Message = require("../models/message.js");
const Chat = require("../models/chat.js");
const {
  isLoggedIn,
  isCarOwner,
  isMobileOwner,
  validateCar,
  validateMobile,
} = require("../middleware.js");

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

// Show Car Route
router.get(
  "/car/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const car = await Car.findById(id).populate("owner");
    if (!car) {
      req.flash("error", "Item you requested for does not exist");
      res.redirect("/items");
    }
    res.render("items/showCar.ejs", { car });
  })
);

// Show mobile Route
router.get(
  "/mobile/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const mobile = await Mobile.findById(id).populate("owner");
    if (!mobile) {
      req.flash("error", "Item you requested for does not exist");
      res.redirect("/items");
    }
    res.render("items/showMobile.ejs", { mobile });
  })
);

// Attribute Route
router.get("/:id/attribute", async (req, res) => {
  let { id } = req.params;
  res.render("items/attribute.ejs", { id });
});

// New Route
router.get("/:id2/new", isLoggedIn, (req, res) => {
  let { id2 } = req.params;
  res.render("items/new.ejs", { id2 });
});

// Create Car Route
router.post(
  "/cars",
  isLoggedIn,
  validateCar,
  wrapAsync(async (req, res) => {
    let newCar = new Car(req.body.car);
    newCar.owner = req.user._id;
    await newCar.save();
    req.flash("success", "Your Ads Posted!");
    res.redirect("/items");
  })
);

// Create Mobile Route
router.post(
  "/mobiles",
  isLoggedIn,
  validateMobile,
  wrapAsync(async (req, res) => {
    let newMobile = new Mobile(req.body.mobile);
    newMobile.owner = req.user._id;
    await newMobile.save();
    req.flash("success", "Your Ads Posted!");
    res.redirect("/items");
  })
);

// Edit car Route
router.get(
  "/car/:id/edit",
  isLoggedIn,
  isCarOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const car = await Car.findById(id);
    res.render("items/editCar.ejs", { car });
  })
);

// Edit mobile Route
router.get(
  "/mobile/:id/edit",
  isLoggedIn,
  isMobileOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const mobile = await Mobile.findById(id);
    res.render("items/editMobile.ejs", { mobile });
  })
);

// Update Car Route
router.put(
  "/cars/:id",
  isLoggedIn,
  isCarOwner,
  validateCar,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Car.findByIdAndUpdate(id, { ...req.body.car });
    req.flash("success", "Your Ads Updated!");
    res.redirect(`/items/car/${id}`);
  })
);

// Update Mobile Route
router.put(
  "/mobiles/:id",
  isLoggedIn,
  isMobileOwner,
  validateMobile,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Mobile.findByIdAndUpdate(id, { ...req.body.mobile });
    req.flash("success", "Your Ads Updated!");
    res.redirect(`/items/mobile/${id}`);
  })
);

// Delete Car Route
router.delete(
  "/car/:id",
  isLoggedIn,
  isCarOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Car.findByIdAndDelete(id);
    req.flash("success", "Your Ads Deleted!");
    res.redirect("/items");
  })
);

// Delete Mobile Route
router.delete(
  "/mobile/:id",
  isLoggedIn,
  isMobileOwner,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Mobile.findByIdAndDelete(id);
    req.flash("success", "Your Ads Deleted!");
    res.redirect("/items");
  })
);

// Search Bar Route
router.post("/search", async (req, res) => {
  let { search, location } = req.body;

  const regexSearch = new RegExp(search, "i");
  const regexLocation = new RegExp(location, "i");

  const allCar = await Car.find({
    $and: [
      {
        $or: [
          { city: { $regex: regexLocation } },
          { state: { $regex: regexLocation } },
        ],
      },
      {
        $or: [
          { brand: { $regex: regexSearch } },
          { model: { $regex: regexSearch } },
        ],
      },
    ],
  });

  const allMobile = await Mobile.find({
    $and: [
      {
        $or: [
          { city: { $regex: regexLocation } },
          { state: { $regex: regexLocation } },
        ],
      },
      {
        $or: [
          { brand: { $regex: regexSearch } },
          { title: { $regex: regexSearch } },
        ],
      },
    ],
  });

  res.render("items/index.ejs", { allCar, allMobile });
});

// GET Chat Route
router.get(
  "/:id/chat",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id;

    // Try find Car or Mobile by id
    let car = await Car.findById(id);
    let mobile = await Mobile.findById(id);

    if (!car && !mobile) {
      req.flash("error", "Item not found");
      return res.redirect("/items");
    }

    const item = car || mobile;

    // Find or create Chat for this item and participants (user + owner)
    let chat = await Chat.findOne({
      itemId: id,
      participants: { $all: [userId, item.owner] },
    });

    if (!chat) {
      chat = new Chat({
        participants: [userId, item.owner],
        itemId: id,
        itemType: item instanceof Car ? "Car" : "Mobile",
      });
      await chat.save();
    }

    // Populate messages related to this chat
    const messages = await Message.find({ chatId: chat._id }).sort("createdAt");

    res.render("items/chat.ejs", { car, mobile, item, chat, messages });
  })
);

// POST Chat Route - send new message
router.post(
  "/:id/chat",
  isLoggedIn,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id;

    let item = (await Car.findById(id)) || (await Mobile.findById(id));
    if (!item) {
      req.flash("error", "Item not found");
      return res.redirect("/items");
    }

    let chat = await Chat.findOne({
      itemId: id,
      participants: { $all: [userId, item.owner] },
    });

    if (!chat) {
      req.flash("error", "Chat session not found");
      return res.redirect(`/items/${id}/chat`);
    }

    const newMessage = new Message({
      message: req.body.chat.message,
      chatId: chat._id,
      sender: userId,
      status: "sent",
    });

    await newMessage.save();

    res.redirect(`/items/${id}/chat`);
  })
);

module.exports = router;
