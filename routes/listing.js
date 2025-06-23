const express = require('express');
const router = express.Router();
const ExpressError = require('../utils/ExpressError.js');
const Listing = require('../models/listings.js');
const { listingSchema, reviewSchema } = require('../schema.js');

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
router.get("/new", (req, res) => {
    res.render("listings/new");
});

// Show Route
router.get("/:id", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show", {listing});
});

// Edit Route
router.get("/:id/edit", async(req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit", {listing});
});

// Update Route
router.put("/:id", validateListing, async(req,res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});
    res.redirect("/listings");
});

// Create Route
router.post("/", validateListing, async (req,res) => {
    let {title, description, image, price, location, country} = req.body;
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
    country
});
    await newListing.save();
    res.redirect("/listings"); 
});

// Delete Route
router.delete("/:id", async(req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});

module.exports = router;