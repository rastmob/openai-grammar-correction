var express = require("express");
var router = express.Router();

var controller = require('../controller/generateContent.controller')

router.post("/", controller.generateContent);

module.exports = router;
