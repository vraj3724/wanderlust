const Listing = require('./models/listings.js');
const Review = require("./models/reviews.js");
const ExpressError = require('./utils/ExpressError.js');
const { listingSchema, reviewSchema, bookingSchema } = require('./schema.js');

module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to create a listing");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isHost = async (req, res, next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.host.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body, {abortEarly: false});
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        console.log(errMsg);
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
};

module.exports.isReviewAuthor = async (req, res, next) => {
  const { reviewId } = req.params;
  const review = await Review.findById(reviewId);

  if (!review.author.equals(req.user._id)) {
    req.flash("error", "You don't have permission to do that.");
    return res.redirect("back");
  }

  next();
};

module.exports.validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body, {abortEarly: false});
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
};

module.exports.validateBooking = async (req, res, next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    const bodyData = req.body || {};
    const queryData = req.query || {};

    const data = Object.keys(bodyData).length ? bodyData : queryData;

    const { error } = bookingSchema.validate(data, { abortEarly: false });

    if (error) {
        const msg = error.details.map(el => el.message).join(', ');
        req.flash("error", msg);
        return res.redirect(`/listings/${id}`);
    }
    next();
};

