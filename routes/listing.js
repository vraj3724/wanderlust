const express = require('express');
const router = express.Router();
const multer = require('multer');
const {storage} = require('../cloudConfig.js');
const upload = multer({storage});
const {isLoggedIn, isHost} = require("../middleware.js");
const {validateListing} = require("../middleware.js");
const listingController = require('../controllers/listing.js');

router
    .route("/")
    .get(listingController.index)
    // .post(
    //     isLoggedIn,
    //     validateListing, 
    //     listingController.createList
    // );
    .post(upload.single('image'), (req, res) => {
        res.send(req.file);
    });

// New Route
router.get("/new", isLoggedIn, listingController.newForm);

router
    .route("/:id")
    .get(listingController.showList)
    .put(
        isLoggedIn, 
        isHost, 
        validateListing, 
        listingController.updateList
    )
    .delete(
        isLoggedIn, 
        isHost, 
        listingController.deleteList
    );

// Edit Route
router.get("/:id/edit", isLoggedIn, isHost, listingController.editList);

module.exports = router;