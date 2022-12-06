const dotenv = require('dotenv')
dotenv.config()
var express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

var app = express();
const router = express.Router();
const baseRoute = require('./app/api/router/route.manager')

var port = process.env.PORT || 4011;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())

baseRoute.routeManager(app, router);

app.listen(port, () => {
    // app.use("/correction", routesCorrection)
})

console.log(`Live on port ${port}`)
