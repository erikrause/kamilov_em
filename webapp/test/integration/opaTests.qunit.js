/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"volkova_ev/test/integration/NavigationJourney"
	], function () {
		QUnit.start();
	});
});