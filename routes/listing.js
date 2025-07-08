const express = require('express');
const router = express.Router();
const Listing = require('../models/listings.js');
const {isLoggedIn, isHost} = require("../middleware.js");
const {validateListing} = require("../middleware.js");

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
    const listing = await Listing.findById(id).populate("reviews").populate("host");
    if(!listing) {
        req.flash("error", "Listing Doesn't exist");
        return res.redirect("/listings");
    };
    res.render("listings/show", {listing});
});

// Edit Route
router.get("/:id/edit", isLoggedIn, isHost, async(req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
        if(!listing) {
        req.flash("error", "Listing Doesn't exist");
        return res.redirect("/listings");
    };
    res.render("listings/edit", {listing});
});

// Update Route
router.put("/:id",isLoggedIn, isHost, validateListing, async(req,res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});
    req.flash("success", "Listing Updated");
    res.redirect(`/listings/${id}`);
});

// Create Route
router.post("/", isLoggedIn, validateListing, async (req,res) => {
    let { title, shortDescription, image, price, location, country, availability, about, amenities, detail} = req.body;
    let host = req.user._id;
    const imageObject = {
    url: image.url,
    filename: 'listing_image' 
};

const newListing = new Listing({
    title,
    about,
    image: imageObject,
    price,
    location,
    country,
    availability,
    host,
    amenities,
    shortDescription,
    detail,
});
    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings"); 
});

// Delete Route
router.delete("/:id", isLoggedIn, isHost, async(req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted");
    res.redirect("/listings");
});

module.exports = router;