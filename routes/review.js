const express = require('express');
const router = express.Router({mergeParams: true});
const {validateReview} = require('../middleware.js');
const reviewController = require('../controllers/review.js');

// Post Review
router.post("/", validateReview, reviewController.createReview);

// Delete Review Route
router.delete("/:reviewId", reviewController.deleteReview);

module.exports = router;