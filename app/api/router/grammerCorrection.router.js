var express = require("express");
var router = express.Router();

var controller = require('../controller/grammerCorrection.controller')

router.post("/", controller.correction);

module.exports = router;
