const express = require("express");
const router = express.Router();
const TourPackageController = require('../controllers/tour.controller')

router.route("/")
    .get(TourPackageController.getTour)
    .post(TourPackageController.CreateTour)

router.route("/:id")
    .get(TourPackageController.getTourById)



module.exports = router;