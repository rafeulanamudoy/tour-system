const mongoose = require("mongoose");

const tourSchema = mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
            trim: true,
            minLength: [5, "your destination size should be minimum than 5 characters"],

            maxLength: [30, "your destination size cannot be more than 30 characters"],

        },
        description: {

            type: String,
            required: true,

        },
        price: {
            type: Number,
            required: true,
            min: [0, "number must be positive"],

        },
        image: {
            type: String,
            required: true,

        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        viewCount: {
            type: Number,
            default: 0
        }
    },
    {
        timeStamps: true
    }
)

const TourPackage = mongoose.model("TourDetails", tourSchema)

module.exports = TourPackage