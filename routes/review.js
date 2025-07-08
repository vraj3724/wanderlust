const express = require('express');
const router = express.Router({mergeParams: true});
const Listing = require('../models/listings.js');
const Review = require('../models/reviews.js');
const {validateReview} = require('../middleware.js');

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
    req.flash("success", "New Review Created");
    res.redirect(`/listings/${listing._id}`);
});

// Delete Review Route
router.delete("/:reviewId", async(req, res) => {
    let {id, reviewId} = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted");
    res.redirect(`/listings/${id}`);
});

module.exports = router;