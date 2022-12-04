var routeGrammer = require("./grammerCorrection.router");

module.exports.routeManager = function(app) {
	app.use("/correction",  routeGrammer);
}
