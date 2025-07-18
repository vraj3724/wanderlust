const express = require('express');
const router = express.Router();
const {isLoggedIn, isHost} = require("../middleware.js");
const Listing = require('../models/listings.js');

router.get("/", isLoggedIn ,async (req,res) => {
    let listing = await Listing.find({host: req.user._id})
    res.render("listings/mylist", {listing});
});

module.exports = router;