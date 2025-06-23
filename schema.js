const Joi = require('joi');

const listingSchema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
          image: Joi.object({
            url: Joi.string().required(),
        }).required(),
});


const reviewSchema = Joi.object({
    comment: Joi.string().required(),
    rating: Joi.number().min(1).max(5).required(),
});


module.exports = {
  listingSchema,
  reviewSchema
};

