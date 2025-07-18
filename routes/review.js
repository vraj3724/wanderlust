const express = require('express');
const router = express.Router({mergeParams: true});
const {validateReview} = require('../middleware.js');
const { isLoggedIn, isReviewAuthor } = require("../middleware");
const reviewController = require('../controllers/review.js');

// Post Review
router.post("/", validateReview, reviewController.createReview);

// Delete Review Route
router.delete("/:reviewId",  isLoggedIn, isReviewAuthor, reviewController.deleteReview);

module.exports = router;