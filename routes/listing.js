const express = require('express');
const router = express.Router();
const ExpressError = require('../utils/ExpressError.js');
const Listing = require('../models/listings.js');
const { listingSchema, reviewSchema } = require('../schema.js');
const {isLoggedIn} = require("../middleware.js");

const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body, {abortEarly: false});
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
};

// Index Route
router.get("/", async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index", {allListings});
});

// New Route
router.get("/new", isLoggedIn, (req, res) => {
    res.render("listings/new");
});

// Show Route
router.get("/:id", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing) {
        req.flash("error", "Listing Doesn't exist");
        return res.redirect("/listings");
    };
    res.render("listings/show", {listing});
});

// Edit Route
router.get("/:id/edit", isLoggedIn, async(req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
        if(!listing) {
        req.flash("error", "Listing Doesn't exist");
        return res.redirect("/listings");
    };
    res.render("listings/edit", {listing});
});

// Update Route
router.put("/:id",isLoggedIn, validateListing, async(req,res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});
    req.flash("success", "Listing Updated");
    res.redirect("/listings");
});

// Create Route
router.post("/", isLoggedIn, validateListing, async (req,res) => {
    let { title, description, image, price, location, country, availability, host } = req.body;
    const imageObject = {
    url: image.url,
    filename: 'listing_image' 
};

const newListing = new Listing({
    title,
    description,
    image: imageObject,
    price,
    location,
    country,
    availability,
    host
});
    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings"); 
});

// Delete Route
router.delete("/:id", isLoggedIn, async(req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted");
    res.redirect("/listings");
});

module.exports = router;