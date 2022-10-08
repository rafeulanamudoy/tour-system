const express = require("express");
const router = express.Router();
const TourPackageController2 = require("../controllers/tour2.controller")

router.route("/:id")

    .patch(TourPackageController2.updateTourById)

router.route("/trending")
    .get(TourPackageController2.trendingTour)

router.route("/cheapest")
    .get(TourPackageController2.cheapestTour)


module.exports = router;