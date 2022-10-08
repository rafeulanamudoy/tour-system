const express = require("express");
const cors = require("cors");
const app = express()
app.use(express.json());
app.use(cors());

const tourRoute = require("./routes/tourPackage.routes");
const tourRoute2 = require("./routes/tourPackage2.route")

app.get("/", async (req, res, next) => {

    res.send(" api is working  properly ")
})

app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/tour", tourRoute2);



module.exports = app