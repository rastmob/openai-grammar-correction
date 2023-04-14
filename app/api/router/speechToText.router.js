var express = require("express");
var router = express.Router();

var controller = require('../controller/speechToText.controller')

router.post("/", controller.main);

module.exports = router;
