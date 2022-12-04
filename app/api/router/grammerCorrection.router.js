var express = require("express");
var router = express.Router();

var controller = require('../controller/grammerCorrection.controller')

router.get("/", controller.correction);

module.exports = router;
