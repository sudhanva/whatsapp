(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../app/customers/customers.module": [
		"./src/app/customers/customers.module.ts",
		"app-customers-customers-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    {
        path: "customers",
        loadChildren: "../app/customers/customers.module#CustomersModule"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'state';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot({})
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1 class=\"display-4\">Welcome To Message Pot</h1>\n    <p class=\"lead\">Please select your option below</p>\n    <hr class=\"my-4\">\n    <!-- <p class=\"lead\">\n      <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['customers']\" role=\"button\">Customers</a>\n    </p> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#fingerprint {\r\n    cursor: pointer;\r\n    left: 50%;\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translate3d(-50%, -50%, 0);\r\n  }\r\n  \r\n  #a, #b, #c, #d, #e {\r\n    fill: none;\r\n    stroke: #0bf779;\r\n    stroke-dashoffset: 0;\r\n    stroke-width: 1;\r\n    transition: all 300ms ease;\r\n  }\r\n  \r\n  #a.active, #b.active, #c.active, #d.active, #e.active {\r\n    -webkit-animation: draw 6s forwards;\r\n            animation: draw 6s forwards;\r\n  }\r\n  \r\n  #a {\r\n    stroke-dasharray: 12.15426254272461;\r\n  }\r\n  \r\n  #b {\r\n    stroke-dasharray: 19.79115867614746;\r\n  }\r\n  \r\n  #c {\r\n    stroke-dasharray: 53.00725173950195;\r\n  }\r\n  \r\n  #d {\r\n    stroke-dasharray: 23.70177841186523;\r\n  }\r\n  \r\n  #e {\r\n    stroke-dasharray: 8.837481498718262;\r\n  }\r\n  \r\n  @-webkit-keyframes draw {\r\n    20% {\r\n      stroke-dashoffset: 40;\r\n    }\r\n    40% {\r\n      stroke-dashoffset: 0;\r\n    }\r\n    100% {\r\n      stroke-dashoffset: 0;\r\n    }\r\n  }\r\n  \r\n  @keyframes draw {\r\n    20% {\r\n      stroke-dashoffset: 40;\r\n    }\r\n    40% {\r\n      stroke-dashoffset: 0;\r\n    }\r\n    100% {\r\n      stroke-dashoffset: 0;\r\n    }\r\n  }\r\n  \r\n  /*---------------------------------------------*/\r\n  \r\n  input {\r\n      outline: none;\r\n      border: none;\r\n  }\r\n  \r\n  textarea {\r\n    outline: none;\r\n    border: none;\r\n  }\r\n  \r\n  textarea:focus, input:focus {\r\n    border-color: transparent !important;\r\n  }\r\n  \r\n  input:focus::-webkit-input-placeholder { color:transparent; }\r\n  \r\n  input:focus:-moz-placeholder { color:transparent; }\r\n  \r\n  input:focus::-moz-placeholder { color:transparent; }\r\n  \r\n  input:focus:-ms-input-placeholder { color:transparent; }\r\n  \r\n  textarea:focus::-webkit-input-placeholder { color:transparent; }\r\n  \r\n  textarea:focus:-moz-placeholder { color:transparent; }\r\n  \r\n  textarea:focus::-moz-placeholder { color:transparent; }\r\n  \r\n  textarea:focus:-ms-input-placeholder { color:transparent; }\r\n  \r\n  input::-webkit-input-placeholder { color: #adadad;}\r\n  \r\n  input:-moz-placeholder { color: #adadad;}\r\n  \r\n  input::-moz-placeholder { color: #adadad;}\r\n  \r\n  input:-ms-input-placeholder { color: #adadad;}\r\n  \r\n  textarea::-webkit-input-placeholder { color: #adadad;}\r\n  \r\n  textarea:-moz-placeholder { color: #adadad;}\r\n  \r\n  textarea::-moz-placeholder { color: #adadad;}\r\n  \r\n  textarea:-ms-input-placeholder { color: #adadad;}\r\n  \r\n  /*---------------------------------------------*/\r\n  \r\n  button {\r\n      outline: none !important;\r\n      border: none;\r\n      background: transparent;\r\n  }\r\n  \r\n  button:hover {\r\n      cursor: pointer;\r\n  }\r\n  \r\n  iframe {\r\n      border: none !important;\r\n  }\r\n  \r\n  /*//////////////////////////////////////////////////////////////////\r\n  [ Utility ]*/\r\n  \r\n  .txt1 {\r\n    font-family: 'Poppins', sans-serif;\r\n  \r\n    font-size: 13px;\r\n    color: #666666;\r\n    line-height: 1.5;\r\n  }\r\n  \r\n  .txt2 {\r\n    font-family: 'Poppins', sans-serif;\r\n  \r\n    font-size: 13px;\r\n    color: #333333;\r\n    line-height: 1.5;\r\n  }\r\n  \r\n  .p-b-26 {padding-bottom: 26px;}\r\n  \r\n  .p-t-115 {padding-top: 115px;}\r\n  \r\n  /*//////////////////////////////////////////////////////////////////\r\n  [ login ]*/\r\n  \r\n  .limiter {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .container-login100 {\r\n    width: 100%;  \r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;    \r\n    padding: 15px;\r\n    background: #f2f2f2;  \r\n  }\r\n  \r\n  .wrap-login100 {\r\n    width: 390px;\r\n    background: #fff;\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    padding: 77px 55px 33px 55px;\r\n  \r\n    box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\r\n    -moz-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\r\n    -webkit-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\r\n    -o-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\r\n    -ms-box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  /*------------------------------------------------------------------\r\n  [ Form ]*/\r\n  \r\n  .login100-form {\r\n    width: 100%;\r\n  }\r\n  \r\n  .login100-form-title {\r\n    display: block;\r\n    font-family: 'Poppins', sans-serif;\r\n  \r\n    font-size: 30px;\r\n    color: #333333;\r\n    line-height: 1.2;\r\n    text-align: center;\r\n  }\r\n  \r\n  .login100-form-title i {\r\n    font-size: 60px;\r\n  }\r\n  \r\n  /*------------------------------------------------------------------\r\n  [ Input ]*/\r\n  \r\n  .wrap-input100 {\r\n    width: 100%;\r\n    position: relative;\r\n    border-bottom: 2px solid #adadad;\r\n    margin-bottom: 37px;\r\n  }\r\n  \r\n  .input100 {\r\n    font-family: 'Poppins', sans-serif;\r\n  \r\n    font-size: 20px;\r\n    color: #555555;\r\n    line-height: 1.2;\r\n  \r\n    display: block;\r\n    width: 100%;\r\n    height: 45px;\r\n    background: transparent;\r\n    padding: 0 5px;\r\n  }\r\n  \r\n  /*---------------------------------------------*/\r\n  \r\n  .btn-show-pass {\r\n    font-size: 15px;\r\n    color: #999999;\r\n    font-family: 'Poppins', sans-serif;\r\n    display: flex;\r\n    align-items: center;\r\n    position: absolute;\r\n    height: 100%;\r\n    top: 0;\r\n    right: 0;\r\n    padding-right: 5px;\r\n    cursor: pointer;\r\n    transition: all 0.4s;\r\n  }\r\n  \r\n  .btn-show-pass:hover {\r\n    color: #6a7dfe;\r\n    color: -webkit-linear-gradient(to left, #21d4fd, #b721ff);\r\n    color: -o-linear-gradient(to left, #21d4fd, #b721ff);\r\n    color: -moz-linear-gradient(to left, #21d4fd, #b721ff);\r\n    color: linear-gradient(to left, #21d4fd, #b721ff);\r\n  }\r\n  \r\n  .btn-show-pass.active {\r\n    color: #6a7dfe;\r\n    color: -webkit-linear-gradient(to left, #21d4fd, #b721ff);\r\n    color: -o-linear-gradient(to left, #21d4fd, #b721ff);\r\n    color: -moz-linear-gradient(to left, #21d4fd, #b721ff);\r\n    color: linear-gradient(to left, #21d4fd, #b721ff);\r\n  }\r\n  \r\n  /*------------------------------------------------------------------\r\n  [ Button ]*/\r\n  \r\n  .container-login100-form-btn {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    padding-top: 13px;\r\n  }\r\n  \r\n  .wrap-login100-form-btn {\r\n    width: 100%;\r\n    display: block;\r\n    position: relative;\r\n    z-index: 1;\r\n    border-radius: 25px;\r\n    overflow: hidden;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .login100-form-bgbtn {\r\n    position: absolute;\r\n    z-index: -1;\r\n    width: 300%;\r\n    height: 100%;\r\n    background: #a64bf4;\r\n    background: linear-gradient(to left, #21d4fd, #b721ff, #21d4fd, #b721ff);\r\n    top: 0;\r\n    left: -100%;\r\n    transition: all 0.4s;\r\n  }\r\n  \r\n  .login100-form-btn {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 15px;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n    text-transform: uppercase;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 0 20px;\r\n    width: 100%;\r\n    height: 50px;\r\n  }\r\n  \r\n  .wrap-login100-form-btn:hover .login100-form-bgbtn {\r\n    left: 0;\r\n  }\r\n  \r\n  /*------------------------------------------------------------------\r\n  [ Responsive ]*/\r\n  \r\n  @media (max-width: 576px) {\r\n    .wrap-login100 {\r\n      padding: 77px 15px 33px 15px;\r\n    }\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLDBCQUEwQjtFQUM1Qjs7RUFDQTtJQUNFLG1DQUEyQjtZQUEzQiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRTtNQUNFLHFCQUFxQjtJQUN2QjtJQUNBO01BQ0Usb0JBQW9CO0lBQ3RCO0lBQ0E7TUFDRSxvQkFBb0I7SUFDdEI7RUFDRjs7RUFWQTtJQUNFO01BQ0UscUJBQXFCO0lBQ3ZCO0lBQ0E7TUFDRSxvQkFBb0I7SUFDdEI7SUFDQTtNQUNFLG9CQUFvQjtJQUN0QjtFQUNGOztFQUVBLGdEQUFnRDs7RUFDaEQ7TUFDSSxhQUFhO01BQ2IsWUFBWTtFQUNoQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7O0VBRUEseUNBQXlDLGlCQUFpQixFQUFFOztFQUM1RCwrQkFBK0IsaUJBQWlCLEVBQUU7O0VBQ2xELGdDQUFnQyxpQkFBaUIsRUFBRTs7RUFDbkQsb0NBQW9DLGlCQUFpQixFQUFFOztFQUV2RCw0Q0FBNEMsaUJBQWlCLEVBQUU7O0VBQy9ELGtDQUFrQyxpQkFBaUIsRUFBRTs7RUFDckQsbUNBQW1DLGlCQUFpQixFQUFFOztFQUN0RCx1Q0FBdUMsaUJBQWlCLEVBQUU7O0VBRTFELG1DQUFtQyxjQUFjLENBQUM7O0VBQ2xELHlCQUF5QixjQUFjLENBQUM7O0VBQ3hDLDBCQUEwQixjQUFjLENBQUM7O0VBQ3pDLDhCQUE4QixjQUFjLENBQUM7O0VBRTdDLHNDQUFzQyxjQUFjLENBQUM7O0VBQ3JELDRCQUE0QixjQUFjLENBQUM7O0VBQzNDLDZCQUE2QixjQUFjLENBQUM7O0VBQzVDLGlDQUFpQyxjQUFjLENBQUM7O0VBRWhELGdEQUFnRDs7RUFDaEQ7TUFDSSx3QkFBd0I7TUFDeEIsWUFBWTtNQUNaLHVCQUF1QjtFQUMzQjs7RUFFQTtNQUNJLGVBQWU7RUFDbkI7O0VBRUE7TUFDSSx1QkFBdUI7RUFDM0I7O0VBR0E7Y0FDWTs7RUFDWjtJQUNFLGtDQUFrQzs7SUFFbEMsZUFBZTtJQUNmLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQ0FBa0M7O0lBRWxDLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztFQUVBLFNBQVMsb0JBQW9CLENBQUM7O0VBQzlCLFVBQVUsa0JBQWtCLENBQUM7O0VBRTdCO1lBQ1U7O0VBRVY7SUFDRSxXQUFXO0lBQ1gsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFLakIsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsNEJBQTRCOztJQUU1Qiw2Q0FBNkM7SUFDN0Msa0RBQWtEO0lBQ2xELHFEQUFxRDtJQUNyRCxnREFBZ0Q7SUFDaEQsaURBQWlEO0VBQ25EOztFQUdBO1dBQ1M7O0VBRVQ7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsa0NBQWtDOztJQUVsQyxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO1lBQ1U7O0VBRVY7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQ0FBa0M7O0lBRWxDLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCOztJQUVoQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsY0FBYztFQUNoQjs7RUFHQSxnREFBZ0Q7O0VBQ2hEO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQ0FBa0M7SUFLbEMsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE1BQU07SUFDTixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFJZixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QseURBQXlEO0lBQ3pELG9EQUFvRDtJQUNwRCxzREFBc0Q7SUFDdEQsaURBQWlEO0VBQ25EOztFQUVBO0lBQ0UsY0FBYztJQUNkLHlEQUF5RDtJQUN6RCxvREFBb0Q7SUFDcEQsc0RBQXNEO0lBQ3RELGlEQUFpRDtFQUNuRDs7RUFJQTthQUNXOztFQUNYO0lBS0UsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFJbkIsd0VBQXdFO0lBQ3hFLE1BQU07SUFDTixXQUFXO0lBS1gsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQU16QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLE9BQU87RUFDVDs7RUFHQTtpQkFDZTs7RUFFZjtJQUNFO01BQ0UsNEJBQTRCO0lBQzlCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNmaW5nZXJwcmludCB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCk7XHJcbiAgfVxyXG4gIFxyXG4gICNhLCAjYiwgI2MsICNkLCAjZSB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlOiAjMGJmNzc5O1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICBzdHJva2Utd2lkdGg6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcclxuICB9XHJcbiAgI2EuYWN0aXZlLCAjYi5hY3RpdmUsICNjLmFjdGl2ZSwgI2QuYWN0aXZlLCAjZS5hY3RpdmUge1xyXG4gICAgYW5pbWF0aW9uOiBkcmF3IDZzIGZvcndhcmRzO1xyXG4gIH1cclxuICBcclxuICAjYSB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMi4xNTQyNjI1NDI3MjQ2MTtcclxuICB9XHJcbiAgXHJcbiAgI2Ige1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTkuNzkxMTU4Njc2MTQ3NDY7XHJcbiAgfVxyXG4gIFxyXG4gICNjIHtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDUzLjAwNzI1MTczOTUwMTk1O1xyXG4gIH1cclxuICBcclxuICAjZCB7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAyMy43MDE3Nzg0MTE4NjUyMztcclxuICB9XHJcbiAgXHJcbiAgI2Uge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogOC44Mzc0ODE0OTg3MTgyNjI7XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgZHJhdyB7XHJcbiAgICAyMCUge1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogNDA7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgaW5wdXQge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIHRleHRhcmVhIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIHRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cclxuICBpbnB1dDpmb2N1czotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cclxuICBpbnB1dDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XHJcbiAgaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6dHJhbnNwYXJlbnQ7IH1cclxuICBcclxuICB0ZXh0YXJlYTpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XHJcbiAgdGV4dGFyZWE6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XHJcbiAgdGV4dGFyZWE6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjp0cmFuc3BhcmVudDsgfVxyXG4gIHRleHRhcmVhOmZvY3VzOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOnRyYW5zcGFyZW50OyB9XHJcbiAgXHJcbiAgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI2FkYWRhZDt9XHJcbiAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjYWRhZGFkO31cclxuICBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjYWRhZGFkO31cclxuICBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI2FkYWRhZDt9XHJcbiAgXHJcbiAgdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI2FkYWRhZDt9XHJcbiAgdGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjYWRhZGFkO31cclxuICB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjYWRhZGFkO31cclxuICB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogI2FkYWRhZDt9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIGJ1dHRvbiB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICBpZnJhbWUge1xyXG4gICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyovLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICBbIFV0aWxpdHkgXSovXHJcbiAgLnR4dDEge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjNjY2NjY2O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB9XHJcbiAgXHJcbiAgLnR4dDIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICB9XHJcbiAgXHJcbiAgLnAtYi0yNiB7cGFkZGluZy1ib3R0b206IDI2cHg7fVxyXG4gIC5wLXQtMTE1IHtwYWRkaW5nLXRvcDogMTE1cHg7fVxyXG4gIFxyXG4gIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgWyBsb2dpbiBdKi9cclxuICBcclxuICAubGltaXRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyLWxvZ2luMTAwIHtcclxuICAgIHdpZHRoOiAxMDAlOyAgXHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogLW1vei1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgIFxyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7ICBcclxuICB9XHJcbiAgXHJcbiAgLndyYXAtbG9naW4xMDAge1xyXG4gICAgd2lkdGg6IDM5MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogNzdweCA1NXB4IDMzcHggNTVweDtcclxuICBcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtby1ib3gtc2hhZG93OiAwIDVweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtbXMtYm94LXNoYWRvdzogMCA1cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFsgRm9ybSBdKi9cclxuICBcclxuICAubG9naW4xMDAtZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luMTAwLWZvcm0tdGl0bGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIFxyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAubG9naW4xMDAtZm9ybS10aXRsZSBpIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICB9XHJcbiAgXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBbIElucHV0IF0qL1xyXG4gIFxyXG4gIC53cmFwLWlucHV0MTAwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNhZGFkYWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzN3B4O1xyXG4gIH1cclxuICBcclxuICAuaW5wdXQxMDAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICBcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjNTU1NTU1O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLmJ0bi1zaG93LXBhc3Mge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1zaG93LXBhc3M6aG92ZXIge1xyXG4gICAgY29sb3I6ICM2YTdkZmU7XHJcbiAgICBjb2xvcjogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XHJcbiAgICBjb2xvcjogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xyXG4gICAgY29sb3I6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xyXG4gICAgY29sb3I6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1zaG93LXBhc3MuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjNmE3ZGZlO1xyXG4gICAgY29sb3I6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYpO1xyXG4gICAgY29sb3I6IC1vLWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcclxuICAgIGNvbG9yOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjMjFkNGZkLCAjYjcyMWZmKTtcclxuICAgIGNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZik7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgWyBCdXR0b24gXSovXHJcbiAgLmNvbnRhaW5lci1sb2dpbjEwMC1mb3JtLWJ0biB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcclxuICB9XHJcbiAgXHJcbiAgLndyYXAtbG9naW4xMDAtZm9ybS1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAubG9naW4xMDAtZm9ybS1iZ2J0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHdpZHRoOiAzMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2E2NGJmNDtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYsICMyMWQ0ZmQsICNiNzIxZmYpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyMWQ0ZmQsICNiNzIxZmYsICMyMWQ0ZmQsICNiNzIxZmYpO1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZiwgIzIxZDRmZCwgI2I3MjFmZik7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzIxZDRmZCwgI2I3MjFmZiwgIzIxZDRmZCwgI2I3MjFmZik7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAtMTAwJTtcclxuICBcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luMTAwLWZvcm0tYnRuIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIFxyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBcclxuICAud3JhcC1sb2dpbjEwMC1mb3JtLWJ0bjpob3ZlciAubG9naW4xMDAtZm9ybS1iZ2J0biB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuICBcclxuICBcclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIFsgUmVzcG9uc2l2ZSBdKi9cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgIC53cmFwLWxvZ2luMTAwIHtcclxuICAgICAgcGFkZGluZzogNzdweCAxNXB4IDMzcHggMTVweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"limiter\" >\n  <div class=\"container-login100\" style=\"background-image: url('https://wallpaperaccess.com/full/48074.jpg') !important;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\">\n  <div class=\"wrap-login100\" style=\"box-shadow: rgba(0, 0, 0, 0.54) 3px 14px 13px 7px\">\n    <form class=\"login100-form validate-form\" #f='ngForm' (ngSubmit)=\"submit(f)\">\n      <span class=\"login100-form-title p-b-26\">\n        Login\n      </span>\n      \n\n      <div class=\"wrap-input100 validate-input\" >\n        <input class=\"input100\" type=\"text\" name=\"username\" value=\"SI\" placeholder=\"Username\" [(ngModel)]=\"userName\">\n      </div>\n\n      <div class=\"wrap-input100 validate-input\" >\n        <span class=\"btn-show-pass\">\n          <i class=\"fas fa-eye\"></i>\n        </span>\n        <input class=\"input100\" type=\"password\" name=\"password\" value=\"123\" placeholder=\"Password\" [(ngModel)]=\"passwordValue\">\n      </div>\n\n      <div class=\"container-login100-form-btn\">\n        <div class=\"wrap-login100-form-btn\">\n          <div class=\"login100-form-bgbtn\"></div>\n          <button class=\"login100-form-btn\">\n             Login\n          </button>\n        </div>\n      </div>\n\n      <div class=\"text-center p-t-115\">\n        <span class=\"txt1\">Ver 1.0<br>\n          © Copyright 2019\n        </span>\n\n        <a class=\"txt2\" href=\"https://hotshotsolutions.in\" target=\"_blank\">\n         Hotshot Solutions\n        </a>\n      </div>\n    </form>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.userName = '';
        this.passwordValue = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary mb-5\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">Message Pot</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['/customers']\">Customers</a>\n      </li>\n      <li class=\"nav-item \">\n        <a class=\"nav-link\" [routerLink]=\"['/customers']\">Templates</a>\n      </li>\n      <li class=\"nav-item \">\n        <a class=\"nav-link\" [routerLink]=\"['/customers']\">Send Message</a>\n      </li>\n      <li class=\"nav-item \">\n        <a class=\"nav-link\" [routerLink]=\"['/customers']\">Log Out</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\state\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map