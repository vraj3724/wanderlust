const Listing = require('../models/listings.js');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    const categoryFilter = req.query.category;
    let allListings;
    if (categoryFilter) {
        allListings = await Listing.find({ category: categoryFilter });
    } else {
        allListings = await Listing.find({});
    }
    res.render("listings/index", {
        allListings,
        showFilters: true,
        currentCategory: categoryFilter || "All"
    });
};

module.exports.newForm = (req, res) => {
    res.render("listings/new");
};

module.exports.showList = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate: { path: "author" }}).populate("host");
    if(!listing) {
        req.flash("error", "Listing Doesn't exist");
        return res.redirect("/listings");
    };
    res.render("listings/show", {listing});
};

module.exports.editList = async(req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
        if(!listing) {
        req.flash("error", "Listing Doesn't exist");
        return res.redirect("/listings");
    };

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
    res.render("listings/edit", {listing, originalImageUrl});
};

module.exports.updateList = async(req,res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});

    if(typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }
    req.flash("success", "Listing Updated");
    res.redirect(`/listings/${id}`);
};

module.exports.createList = async (req,res) => {
    let { title, shortDescription, image, price, location, country, availability, about, amenities, detail, category} = req.body;
    let host = req.user._id;
    let newUrl = req.file.path;
    let newFilename = req.file.filename;
    const imageObject = {
    url: newUrl,
    filename: newFilename, 
};

let response = await geocodingClient.forwardGeocode({
  query: req.body.location,
  limit: 1
})
  .send();


const geometry = response.body.features[0].geometry;

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
    geometry,
    category,
});

    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created");
    res.redirect("/listings"); 
};

module.exports.deleteList = async(req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted");
    res.redirect("/listings/");
};

