(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-posts-module"],{

/***/ "./src/app/pages/posts/posts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/posts/posts.module.ts ***!
  \*********************************************/
/*! exports provided: PostsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPageModule", function() { return PostsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _posts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts.page */ "./src/app/pages/posts/posts.page.ts");







var routes = [
    {
        path: '',
        component: _posts_page__WEBPACK_IMPORTED_MODULE_6__["PostsPage"]
    }
];
var PostsPageModule = /** @class */ (function () {
    function PostsPageModule() {
    }
    PostsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_posts_page__WEBPACK_IMPORTED_MODULE_6__["PostsPage"]]
        })
    ], PostsPageModule);
    return PostsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/posts/posts.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/posts/posts.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"light\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\t\t\t<ion-img cache=\"true\" src=\"/assets/images/logo_fcm.png\" height=\"5px\" width=\"5px\" class=\"logo-position\"></ion-img>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <ion-col>\n        <ion-button href=\"#\" fill=\"clear\">\n          Contextos\n          <ion-icon name=\"settings\" slot=\"end\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-margin-top ion-margin-bottom\">\n      <div class=\"container context-border\">\n        <div class=\"scroll\" scrollX=\"true\">\n          <div class=\"context-position\">\n            <ion-button href=\"#\" class=\"context-button\">\n              T\n            </ion-button>\n            <p class=\"ion-text-center\">TIC</p>\n          </div>\n          <div class=\"context-position\">\n            <ion-button href=\"#\" class=\"context-button\">\n              C\n            </ion-button>\n            <p class=\"ion-text-center\">Comunidados</p>\n          </div>\n          <div class=\"context-position\">\n            <ion-button href=\"#\" class=\"context-button\">\n              A\n            </ion-button>\n            <p class=\"ion-text-center\">Alice</p>\n          </div>\n          <div class=\"context-position\">\n            <ion-button href=\"#\" class=\"context-button\">\n              D\n            </ion-button>\n            <p class=\"ion-text-center\">Daniel</p>\n          </div>\n        </div>\n      </div>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-card-header class=\"ion-no-padding\">\n            <ion-item class=\"item-border\">\n              <ion-avatar slot=\"start\">\n                <img src=\"https://conecta.fundacaocefetminas.org.br/static/profilepic/default.png\">\n              </ion-avatar>\n              <ion-label>\n                <p>Alice Costa</p>\n                <p>16/05/2019 11:13</p>\n              </ion-label>\n              <ion-icon name=\"eye-off\" class=\"ion-margin-end\"></ion-icon>\n              <ion-badge>T</ion-badge>\n            </ion-item>\n          </ion-card-header>\n          <ion-card-content class=\"ion-no-padding\">\n            <img src=\"https://conecta.fundacaocefetminas.org.br/static/post_images/84917835.jpg\" class=\"image-width\">\n            <ion-card-title class=\"title-padding\">Card Title</ion-card-title>\n            <div class=\"text-padding\">\n              Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week\n              in the woods. Wash your spirit clean.\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/posts/posts.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/posts/posts.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-position {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  width: 80px;\n  height: 100%; }\n\n.item-border {\n  --border-style: none; }\n\n.image-width {\n  width: 100%;\n  overflow: hidden; }\n\n.title-padding {\n  padding-top: 5%;\n  padding-left: 2%;\n  padding-right: 2%; }\n\n.text-padding {\n  padding-top: 2%;\n  padding-left: 2%;\n  padding-right: 2%;\n  padding-bottom: 2%; }\n\n.context-button {\n  --border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  display: flex;\n  margin: auto; }\n\n.context-border {\n  border-top: 1px solid #aaa;\n  border-bottom: 1px solid #aaa; }\n\n.context-position {\n  display: inline-grid;\n  width: 33%; }\n\n.container {\n  width: 100%;\n  padding-top: 16px;\n  overflow: hidden;\n  white-space: nowrap; }\n\n.container ::-webkit-scrollbar {\n    display: none; }\n\n.container .scroll {\n    overflow: auto; }\n\n.footer-option {\n  width: 33.33%;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RhbmllbC9pb25pYy9pb25pYy1hcHAvc3JjL2FwcC9wYWdlcy9wb3N0cy9wb3N0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFVO0VBQ1YsWUFBVyxFQUFBOztBQUdaO0VBQ0Usb0JBQWUsRUFBQTs7QUFHakI7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxvQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBVyxFQUFBOztBQUdiO0VBQ0UsMEJBQTBCO0VBQzFCLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLG9CQUFvQjtFQUNwQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFKckI7SUFNSSxhQUFhLEVBQUE7O0FBTmpCO0lBU0ksY0FBYyxFQUFBOztBQUlsQjtFQUNFLGFBQWE7RUFDYixxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3RzL3Bvc3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLXBvc2l0aW9uIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHR3aWR0aDo4MHB4O1xuXHRoZWlnaHQ6MTAwJTtcbn1cblxuLml0ZW0tYm9yZGVyIHtcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5pbWFnZS13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0bGUtcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiA1JTtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgcGFkZGluZy1yaWdodDogMiU7XG59XG5cbi50ZXh0LXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIHBhZGRpbmctbGVmdDogMiU7XG4gIHBhZGRpbmctcmlnaHQ6IDIlO1xuICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbi5jb250ZXh0LWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46YXV0bztcbn1cblxuLmNvbnRleHQtYm9yZGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNhYWE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWFhO1xufVxuXG4uY29udGV4dC1wb3NpdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICB3aWR0aDogMzMlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5zY3JvbGwge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG59XG5cbi5mb290ZXItb3B0aW9uIHtcbiAgd2lkdGg6IDMzLjMzJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/posts/posts.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/posts/posts.page.ts ***!
  \*******************************************/
/*! exports provided: PostsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPage", function() { return PostsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostsPage = /** @class */ (function () {
    function PostsPage() {
    }
    PostsPage.prototype.ngOnInit = function () {
    };
    PostsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.page.html */ "./src/app/pages/posts/posts.page.html"),
            styles: [__webpack_require__(/*! ./posts.page.scss */ "./src/app/pages/posts/posts.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostsPage);
    return PostsPage;
}());



/***/ })

}]);
//# sourceMappingURL=posts-posts-module.js.map