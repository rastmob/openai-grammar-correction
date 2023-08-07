var routeGrammer = require("./grammerCorrection.router");
var routeSpeechToText = require("./speechToText.router");
var routeImage = require("./image.router");
var routeGenerateContent = require("./generateContent.router");

module.exports.routeManager = function(app) {
	app.use("/correction",  routeGrammer);
	app.use("/generateContent",  routeGenerateContent);
	app.use("/speechToText", routeSpeechToText);
	app.use("/imageVariations", routeImage);
}