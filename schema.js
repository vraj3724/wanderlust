const Joi = require('joi');

const listingSchema = Joi.object({
  title: Joi.string().required(),
  about: Joi.string().required(),
  detail: Joi.string().required(),             
  shortDescription: Joi.string().required(),    
  location: Joi.string().required(),
  country: Joi.string().required(),
  price: Joi.number().required().min(0),
  availabilityStart: Joi.date().iso().required(),
  availabilityEnd: Joi.date().iso().greater(Joi.ref('availabilityStart')).required(),
  amenities: Joi.array().items(Joi.string()).required(),
  category: Joi.string().valid("Adventure", "Beach", "Snow", "Villa", "Farm", "Castle").required()
   
});



const reviewSchema = Joi.object({
    comment: Joi.string().required(),
    rating: Joi.number().min(1).max(5).required(),
});


const bookingSchema = Joi.object({
  checkin: Joi.date().required().messages({'date.base': 'Check-in date must be a valid date', 'any.required': 'Check-in date is required'}),
  checkout: Joi.date().greater(Joi.ref('checkin')).required().messages({'date.greater': 'Check-out date must be after check-in date', 'any.required': 'Check-out date is required'}),
  guest: Joi.number().integer().min(1).required().messages({'number.min': 'Guest count must be at least 1'})
})


module.exports = {
  listingSchema,
  reviewSchema,
  bookingSchema,
};

