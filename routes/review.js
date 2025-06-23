const express = require('express');
const router = express.Router({mergeParams: true});
const ExpressError = require('../utils/ExpressError.js');
const Listing = require('../models/listings.js');
const Review = require('../models/reviews.js');
const { reviewSchema } = require('../schema.js');

const validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body, {abortEarly: false});
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
};

// Post Review
router.post("/", validateReview, async(req, res) => {
    let listing = await Listing.findById(req.params.id);
    
    const newReview = new Review({
        rating: req.body.rating,
        comment: req.body.comment
    });

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    console.log("Review Saved")
    res.redirect(`/listings/${listing._id}`);
});

// Delete Review Route
router.delete("/:reviewId", async(req, res) => {
    let {id, reviewId} = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
});

module.exports = router;