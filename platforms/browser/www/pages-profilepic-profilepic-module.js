(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profilepic-profilepic-module"],{

/***/ "./src/app/pages/profilepic/profilepic.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/profilepic/profilepic.module.ts ***!
  \*******************************************************/
/*! exports provided: ProfilepicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepicPageModule", function() { return ProfilepicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profilepic_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profilepic.page */ "./src/app/pages/profilepic/profilepic.page.ts");







var routes = [
    {
        path: '',
        component: _profilepic_page__WEBPACK_IMPORTED_MODULE_6__["ProfilepicPage"]
    }
];
var ProfilepicPageModule = /** @class */ (function () {
    function ProfilepicPageModule() {
    }
    ProfilepicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profilepic_page__WEBPACK_IMPORTED_MODULE_6__["ProfilepicPage"]]
        })
    ], ProfilepicPageModule);
    return ProfilepicPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profilepic/profilepic.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/profilepic/profilepic.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic 4 Crop Upload\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <img *ngIf=\"!fileUrl\" src=\"https://conecta.fundacaocefetminas.org.br/static/profilepic/49767522.png\"/>\n    <img *ngIf=\"fileUrl\" src=\"{{fileUrl}}\"/>\n    <ion-card-content>\n      <ion-button color=\"medium\" size=\"large\" (click)=\"cropUpload()\">\n        <ion-icon slot=\"icon-only\" name=\"camera\"></ion-icon>\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profilepic/profilepic.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/profilepic/profilepic.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGVwaWMvcHJvZmlsZXBpYy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/profilepic/profilepic.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/profilepic/profilepic.page.ts ***!
  \*****************************************************/
/*! exports provided: ProfilepicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilepicPage", function() { return ProfilepicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");





var ProfilepicPage = /** @class */ (function () {
    function ProfilepicPage(imagePicker, crop, transfer) {
        this.imagePicker = imagePicker;
        this.crop = crop;
        this.transfer = transfer;
        this.fileUrl = null;
    }
    ProfilepicPage.prototype.ngOnInit = function () {
    };
    ProfilepicPage.prototype.cropUpload = function () {
        var _this = this;
        this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
                _this.crop.crop(results[i], { quality: 100 })
                    .then(function (newImage) {
                    console.log('new image path is: ' + newImage);
                    var fileTransfer = _this.transfer.create();
                    var uploadOpts = {
                        fileKey: 'file',
                        fileName: newImage.substr(newImage.lastIndexOf('/') + 1)
                    };
                    /*fileTransfer.upload(newImage, 'http://192.168.0.7:3000/api/upload', uploadOpts)
                     .then((data) => {
                       console.log(data);
                       this.respData = JSON.parse(data.response);
                       console.log(this.respData);
                       this.fileUrl = this.respData.fileUrl;
                     }, (err) => {
                       console.log(err);
                     });*/
                }, function (error) { return console.error('Error cropping image', error); });
            }
        }, function (err) { console.log(err); });
    };
    ProfilepicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profilepic',
            template: __webpack_require__(/*! ./profilepic.page.html */ "./src/app/pages/profilepic/profilepic.page.html"),
            styles: [__webpack_require__(/*! ./profilepic.page.scss */ "./src/app/pages/profilepic/profilepic.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["ImagePicker"],
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_2__["Crop"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_4__["FileTransfer"]])
    ], ProfilepicPage);
    return ProfilepicPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profilepic-profilepic-module.js.map