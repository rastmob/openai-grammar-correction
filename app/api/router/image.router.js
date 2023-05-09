var express = require("express");
var router = express.Router();

const fileUpload = require("express-fileupload");
var controller = require('../controller/image.controller')

router.post("/",  fileUpload({ createParentPath: true }), controller.main);

module.exports = router;
