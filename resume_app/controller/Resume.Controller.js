sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	'sap/ui/model/json/JSONModel'
], function (Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("kamilov_em.controller.App", {
		
		onInit : function() {
				// HTML string bound to the formatted text control
				var oModel = new JSONModel({
					HTML : "<p>Знание принципов ООП, сервис-ориентированных и микросервисных архитектур, искусственных нейронных"+
"сетей, в частности, генеративно-состязательные сети - часть"+
"выпускной квалификационной работы по генерации пористых структур на основе цифрового керна, по"+
"данной работе был награжден дипломом 1 степени на студенческой конференции и была представлена к"+
"публикации соответствующая статья в журнале Вестник кибернетики."+
"Знание языков программирования: C#, Python, C++, SQL и технологий на платформе .NET. Есть личный"+
"автомобиль.</p>"
				});
				this.getView().setModel(oModel);
		},
		/*onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}*/
		onPhotoPress : function () {
			MessageToast.show("Да, это я!");
		},
		
		onGitHubBtnPress : function () {
			window.location.replace("https://github.com/erikrause/kamilov_em");
		}
	});

});