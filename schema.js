const Joi = require("joi");

module.exports.carSchema = Joi.object({
  car: Joi.object({
    category: Joi.string().valid("Cars", "Motorcycles", "Scooters").required(),
    brand: Joi.string().required(),
    model: Joi.string().required(),
    variant: Joi.alternatives().conditional("category", {
      is: "Cars",
      then: Joi.string().required(),
      otherwise: Joi.forbidden(),
    }),
    year: Joi.number().required().min(0),
    fuel: Joi.alternatives().conditional("category", {
      is: "Cars",
      then: Joi.string().required(),
      otherwise: Joi.forbidden(),
    }),
    transmission: Joi.alternatives().conditional("category", {
      is: "Cars",
      then: Joi.string().required(),
      otherwise: Joi.forbidden(),
    }),
    driven: Joi.number().required().min(0),
    owners: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().allow("", null).optional(),
    price: Joi.number().required().min(0),
    neighbourhood: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().allow("", null).optional(),
  }).required(),
});

module.exports.mobileSchema = Joi.object({
  mobile: Joi.object({
    category: Joi.string()
      .valid(
        "Mobile phones",
        "Tablets",
        "Bicycles",
        "Accessories",
        "Spare Parts",
        "Men",
        "Women",
        "Kids",
        "Sofa & Dining",
        "Beds & Wardrobes",
        "Home Decor & Garden",
        "Kids Furniture",
        "Other Household Items",
        "TVs, Video-Audio",
        "Kitchen & Other Appliances",
        "Computers & Laptops",
        "Fridges",
        "Computer Accessories",
        "Cameras & Lenses",
        "Games & Entertainment",
        "Hard Disks, Printers & Monitors",
        "Washing Machines",
        "ACs"
      )
      .required(),
    brand: Joi.alternatives().conditional("category", {
      is: Joi.valid("Mobile phones", "Tablets", "Bicycles"),
      then: Joi.string().required(),
      otherwise: Joi.forbidden(),
    }),
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().allow("", null).optional(),
    price: Joi.number().required().min(0),
    neighbourhood: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().allow("", null).optional(),
  }).required(),
});
