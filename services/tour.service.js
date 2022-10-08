const TourPackage = require("../models/TourSchema")

exports.getTourService = async (queries) => {


    const result = await TourPackage.find({})
        .select(queries.fieldSplit)
        .sort(queries.sortBy)
        .skip(queries.skip)
        .limit(queries.limit)
        ;
    //const totalTour = await TourPackage.countDocuments({})
    return result


}
exports.createTourService = async (data) => {

    // console.log(data)
    const tour = new TourPackage(data)

    const result = await tour.save()
    return result


}

exports.getTourServiceById = async (id) => {

    const tour = await TourPackage.findById(id);

    let userViews = tour.viewCount;
    userViews = userViews + 1;
    const updatedBody = { viewCount: userViews };

    const result = await TourPackage.findOneAndUpdate({ _id: id }, updatedBody, {
        new: true
    })







    return result
}

exports.updateTourServiceById = async (tourId, data) => {

    const result = await TourPackage.updateOne({ _id: tourId }, { $set: data }, { runValidators: true });
    return result
}


exports.getTrendingPlace = async () => {

    const result = await TourPackage.find({}).sort({
        viewCount: -1
    })
    return result
}


exports.cheapestPlaces = async () => {
    const result = await TourPackage
        .find({})
        .sort({ price: 1 })
        .limit(3)
    return result
}