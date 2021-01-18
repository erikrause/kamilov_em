sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("kamilov_em.controller.App", {

		/*onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}*/
		onPhotoPress : function () {
			MessageToast.show("Да, это я!");
		} 
	});

});