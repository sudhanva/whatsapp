(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-customers-customers-module"],{

/***/ "./src/app/customers/customer-add/customer-add.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/customers/customer-add/customer-add.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci1hZGQvY3VzdG9tZXItYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/customers/customer-add/customer-add.component.html":
/*!********************************************************************!*\
  !*** ./src/app/customers/customer-add/customer-add.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add Customer</h3>\n\n<form class=\"form-inline mb-4\">\n  <form [formGroup]=\"customerForm\" (submit)=\"createCustomer()\" class=\"form-inline mb-4\">\n    <label class=\"sr-only\" for=\"Name\">Name</label>\n    <div class=\"input-group mb-2 mr-sm-2\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"name\">\n    </div>\n\n    <label class=\"sr-only\" for=\"Phone\">Phone</label>\n    <div class=\"input-group mb-2 mr-sm-2\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"phone\" placeholder=\"Phone\">\n    </div>\n\n    <label class=\"sr-only\" for=\"Address\">Address</label>\n    <div class=\"input-group mb-2 mr-sm-2\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"address\" placeholder=\"Address\">\n    </div>\n\n    <label class=\"sr-only\" for=\"membership\">Membership</label>\n    <div class=\"input-group mb-2 mr-sm-2\">\n      <select formControlName=\"membership\" class=\"form-control\">\n        <option>Basic</option>\n        <option>Pro</option>\n        <option>Platinum</option>\n      </select>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary mb-2\">Add Customer</button>\n  </form>"

/***/ }),

/***/ "./src/app/customers/customer-add/customer-add.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/customers/customer-add/customer-add.component.ts ***!
  \******************************************************************/
/*! exports provided: CustomerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAddComponent", function() { return CustomerAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerAddComponent = /** @class */ (function () {
    function CustomerAddComponent() {
    }
    CustomerAddComponent.prototype.ngOnInit = function () {
    };
    CustomerAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-add',
            template: __webpack_require__(/*! ./customer-add.component.html */ "./src/app/customers/customer-add/customer-add.component.html"),
            styles: [__webpack_require__(/*! ./customer-add.component.css */ "./src/app/customers/customer-add/customer-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerAddComponent);
    return CustomerAddComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer-edit/customer-edit.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/customers/customer-edit/customer-edit.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci1lZGl0L2N1c3RvbWVyLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/customers/customer-edit/customer-edit.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customer-edit/customer-edit.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-4\">\n  <h3>Edit Customer</h3>\n  <form [formGroup]=\"customerForm\" (submit)=\"updateCustomer()\" class=\"form-inline mb-4\">\n\n    <label class=\"sr-only\" for=\"Name\">Name</label>\n    <div class=\"input-group mb-2 mr-sm-2\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"name\" placeholder=\"name\">\n    </div>\n\n    <label class=\"sr-only\" for=\"Phone\">Phone</label>\n    <div class=\"input-group mb-2 mr-sm-2\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"phone\" placeholder=\"Phone\">\n    </div>\n\n    <label class=\"sr-only\" for=\"Address\">Address</label>\n    <div class=\"input-group mb-2 mr-sm-2\">\n      <input type=\"text\" class=\"form-control\" formControlName=\"address\" placeholder=\"Address\">\n    </div>\n\n    <label class=\"sr-only\" for=\"membership\">Membership</label>\n    <div class=\"input-group mb-2 mr-sm-2\">\n      <select formControlName=\"membership\" class=\"form-control\">\n        <option>Basic</option>\n        <option>Pro</option>\n        <option>Platinum</option>\n      </select>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary mb-2\">Update Customer</button>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/customers/customer-edit/customer-edit.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/customers/customer-edit/customer-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerEditComponent = /** @class */ (function () {
    function CustomerEditComponent() {
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
    };
    CustomerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-edit',
            template: __webpack_require__(/*! ./customer-edit.component.html */ "./src/app/customers/customer-edit/customer-edit.component.html"),
            styles: [__webpack_require__(/*! ./customer-edit.component.css */ "./src/app/customers/customer-edit/customer-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerEditComponent);
    return CustomerEditComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer-view/customer-view.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/customers/customer-view/customer-view.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci12aWV3L2N1c3RvbWVyLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/customers/customer-view/customer-view.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/customers/customer-view/customer-view.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Customers</h3>\n<table class=\"table table-hover\">\n  <thead>\n    <tr class=\"table-primary\">\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Phone</th>\n      <th scope=\"col\">Address</th>\n      <th scope=\"col\">Membership</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td colspan=\"5\" class=\"alert alert-danger\" *ngIf=\"error$ | async as error\">{{error}}</td>\n    </tr>\n    <tr>\n    <tr *ngFor=\"let customer of (customers$ |async)\">\n      <th scope=\"row\">{{customer.name}}</th>\n      <td>{{customer.phone}}</td>\n      <td>{{customer.address}}</td>\n      <td>{{customer.membership}}</td>\n      <th>\n        <a (click)=editCustomer(customer)>edit</a>\n        <br>\n        <a (click)=deleteCustomer(customer)>delete</a>\n      </th>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/customers/customer-view/customer-view.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/customers/customer-view/customer-view.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerViewComponent", function() { return CustomerViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerViewComponent = /** @class */ (function () {
    function CustomerViewComponent() {
    }
    CustomerViewComponent.prototype.ngOnInit = function () {
    };
    CustomerViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-view',
            template: __webpack_require__(/*! ./customer-view.component.html */ "./src/app/customers/customer-view/customer-view.component.html"),
            styles: [__webpack_require__(/*! ./customer-view.component.css */ "./src/app/customers/customer-view/customer-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerViewComponent);
    return CustomerViewComponent;
}());



/***/ }),

/***/ "./src/app/customers/customer/customer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/customers/customer/customer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci9jdXN0b21lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/customers/customer/customer.component.html":
/*!************************************************************!*\
  !*** ./src/app/customers/customer/customer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <app-customer-add></app-customer-add>\n  <app-customer-view></app-customer-view>\n  <app-customer-edit></app-customer-edit>\n</div>"

/***/ }),

/***/ "./src/app/customers/customer/customer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/customers/customer/customer.component.ts ***!
  \**********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customers/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customers/customer/customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customers/customer/customer.component.ts");
/* harmony import */ var _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-add/customer-add.component */ "./src/app/customers/customer-add/customer-add.component.ts");
/* harmony import */ var _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-edit/customer-edit.component */ "./src/app/customers/customer-edit/customer-edit.component.ts");
/* harmony import */ var _customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customer-view/customer-view.component */ "./src/app/customers/customer-view/customer-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var customerRoutes = [{
        path: "", component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"]
    }];
var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_customer_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"], _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_4__["CustomerAddComponent"], _customer_edit_customer_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditComponent"], _customer_view_customer_view_component__WEBPACK_IMPORTED_MODULE_6__["CustomerViewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(customerRoutes)
            ]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-customers-customers-module.js.map