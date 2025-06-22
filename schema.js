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

<<<<<<< HEAD
=======
<<<<<<< Updated upstream
module.exports = listingSchema;
=======
>>>>>>> bug-fix
const reviewSchema = Joi.object({
    comment: Joi.string().required(),
    rating: Joi.number().min(1).max(5).required(),
});

<<<<<<< HEAD
module.exports = reviewSchema;
module.exports = listingSchema;
=======

module.exports = {
  listingSchema,
  reviewSchema
};
>>>>>>> Stashed changes
>>>>>>> bug-fix
