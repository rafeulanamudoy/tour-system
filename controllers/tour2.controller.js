
const { updateTourServiceById, getTrendingPlace, cheapestPlaces } = require("../services/tour.service");

exports.updateTourById = async (req, res, next) => {

    try {

        const { id } = req.params;
        // console.log(req.body)
        const result = await updateTourServiceById(id, req.body)

        //  console.log(result)


        res.status(200).json({

            status: "success",
            data: result,
            message: "updated data by id successfully"
        })
    }
    catch (error) {

        res.status(400).json({

            status: 400,
            message: "data didnt update  successfully",
            error: error.message
        })
    }
}

exports.trendingTour = async (req, res, next) => {
    try {


        const result = await getTrendingPlace()
        //  console.log(result)


        res.status(200).json({

            status: "success",
            data: result,
            message: "get data by  successfully"
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

exports.cheapestTour = async (req, res, next) => {
    try {


        const result = await cheapestPlaces()
        //  console.log(result)


        res.status(200).json({

            status: "success",
            data: result,
            message: "get data by  successfully"
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