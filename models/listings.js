const mongoose = require("mongoose");
const Review = require('./reviews.js');
const User = require('./user.js')
const { required } = require("joi");

const ListingSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        detail: {
            type: String,
            required: true,
        },

        about: {
            type: String,
            required: true
        },

        amenities: {
            type: [String],
            required: true,
        },

        shortDescription: {
            type: String,
            required: true,
        },

        image: {
            filename: String,
            url: String
        },

        price: {
            type: Number,
            default: 100,
            required: true
        },

        location: {
            type: String,
            required: true
        },

        country: {
            type: String,
            required: true
        },

        availability: {
            type: String,
            required: true
        },

        host: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },

        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Review",
            }
        ]
    }
);

ListingSchema.post("findOneAndDelete", async(listing) => {
    console.log("🔥 Deletion middleware triggered!");
  if(listing) {
    await Review.deleteMany({_id: {$in: listing.reviews}});
  }
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;