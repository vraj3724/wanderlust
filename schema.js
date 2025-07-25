const Joi = require('joi');

const listingSchema = Joi.object({
  title: Joi.string().required(),
  about: Joi.string().required(),
  detail: Joi.string().required(),             
  shortDescription: Joi.string().required(),    
  location: Joi.string().required(),
  country: Joi.string().required(),
  price: Joi.number().required().min(0),
  availability: Joi.string().required(),
  amenities: Joi.array().items(Joi.string()).required(),
  category: Joi.string().valid("Adventure", "Beach", "Snow", "Villa", "Farm", "Castle").required()
   
});



const reviewSchema = Joi.object({
    comment: Joi.string().required(),
    rating: Joi.number().min(1).max(5).required(),
});



module.exports = {
  listingSchema,
  reviewSchema
};

