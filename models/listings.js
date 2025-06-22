const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
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

        reviews: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Review",
            }
        ]
    }
);

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;