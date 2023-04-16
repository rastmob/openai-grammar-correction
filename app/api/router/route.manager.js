var routeGrammer = require("./grammerCorrection.router");
var routeSpeechToText = require("./speechToText.router");


module.exports.routeManager = function(app) {
	app.use("/correction",  routeGrammer);
	app.use("/speechToText", routeSpeechToText);
}