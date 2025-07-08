const express = require('express');
const router = express.Router();
const Listing = require('../models/listings.js');
const {isLoggedIn, isHost} = require("../middleware.js");
const {validateListing} = require("../middleware.js");
const listingController = require('../controllers/listing.js');

// Index Route
router.get("/", listingController.index);

// New Route
router.get("/new", isLoggedIn, listingController.newForm);

// Show Route
router.get("/:id", listingController.showList);

// Edit Route
router.get("/:id/edit", isLoggedIn, isHost, listingController.editList);

// Update Route
router.put("/:id",isLoggedIn, isHost, validateListing, listingController.updateList);

// Create Route
router.post("/", isLoggedIn, validateListing, listingController.createList);

// Delete Route
router.delete("/:id", isLoggedIn, isHost, listingController.deleteList);

module.exports = router;