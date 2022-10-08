
const { getTourService, createTourService, getTourServiceById, updateTourServiceById } = require("../services/tour.service");



exports.getTour = async (req, res, next) => {

    try {
        console.log(req.query)
        //  console.log(req.query.fields)
        const queries = {}
        if (req.query.fields) {

            const fieldSplit = req.query.fields.split(",").join(" ");
            queries.fieldSplit = fieldSplit;
            // const result = await TourPackage.find({}).select(fieldSplit)
        }
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ")
            queries.sortBy = sortBy
        }
        if (req.query.page) {
            console.log(req.query)
            const { page = 1, limit = 10 } = req.query;
            const skip = parseInt(page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }
        const result = await getTourService(queries)
        res.status(200).json({
            status: "success",
            message: "data get successfullty",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: "failed",
            message: "cannot get data",
            error: error.message
        })
    }
}

exports.CreateTour = async (req, res, next) => {


    console.log(req.body)
    try {

        const result = await createTourService(req.body)
        //res.send("post request working");
        res.status(200).json({

            status: "success",
            data: result,
            message: "data inserted success"
        })
    }
    catch (error) {

        res.status(400).json({

            status: 400,
            message: "data didnt insert successfully",
            error: error.message
        })
    }


}







exports.getTourById = async (req, res, next) => {

    try {

        const { id } = req.params;
        //console.log(id)
        const result = await getTourServiceById(id);


        //console.log(result)


        res.status(200).json({

            status: "success",
            data: result,
            message: "data showed by id success"
        })
    }
    catch (error) {

        res.status(400).json({

            status: 400,
            message: "data didnt get successfully",
            error: error.message
        })
    }
}





