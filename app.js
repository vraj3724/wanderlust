const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const Listing = require('./models/listings.js')
const ExpressError = require('./utils/ExpressError.js')
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() => {
    console.log("Connection Succesful")
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.send("The root is working");
});

// Index Route
app.get("/listings", async (req, res) => {
    let allListings = await Listing.find({});
    res.render("listings/index", {allListings});
});

// New Route
app.get("/listings/new", (req, res) => {
    res.render("listings/new");
});

// Show Route
app.get("/listings/:id", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show", {listing});
});

// Edit Route
app.get("/listings/:id/edit", async(req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit", {listing});
});

// Update Route
app.put("/listings/:id", async(req,res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});
    res.redirect("/listings");
});

// Create Route
app.post("/listings", async (req,res) => {
    let {title, description, image, price, location, country} = req.body;
    if(!title || !description || !image.url || !price || !location || !country) {
        throw new ExpressError(400, "Send Valid Data");
    }
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
app.delete("/listings/:id", async(req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});

app.use((req, res, next) => {
  res.status(404).render("error", {
    err: {
      status: 404,
      message: "Page Not Found"
    }
  });
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).render("error.ejs", {err});
});

app.listen(8080, () => {
    console.log("Server is listening at port 8080");
});

