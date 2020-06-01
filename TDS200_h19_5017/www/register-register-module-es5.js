(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <h1 text-center margin-top>Register using your email</h1>\n  <div id=\"login-form\">\n    <ion-card class=\"login-form-field\">\n      <ion-card-content>\n        <ion-input [(ngModel)]=\"user.username\" placeholder=\"Username\">\n        </ion-input>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class=\"login-form-field\">\n      <ion-card-content>\n        <ion-input\n          [(ngModel)]=\"user.password\"\n          placeholder=\"Password\"\n          type=\"password\"\n        ></ion-input>\n      </ion-card-content>\n    </ion-card>\n    <ion-button expand=\"full\" color=\"medium\" (click)=\"registerUser()\"\n      >Register</ion-button\n    >\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url(\"/assets/background/login.jpg\") 0 0/100% 100% no-repeat;\n}\n\n#login-form {\n  margin-top: 70%;\n}\n\nh1 {\n  color: white;\n}\n\nion-input {\n  --color: rgb(255, 255, 255);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9LYXJvbGlzL1REUzIwMF9oMTlfNTAxNy9zcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUVBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNDSjs7QURFRTtFQUNJLFlBQUE7QUNDTjs7QURHRTtFQUNFLDJCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JhY2tncm91bmQvbG9naW4uanBnXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICB9XG4gIFxuICAjbG9naW4tZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogNzAlO1xuICB9XG5cbiAgaDEge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBcbiAgaW9uLWlucHV0IHtcbiAgICAtLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIH0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9iYWNrZ3JvdW5kL2xvZ2luLmpwZ1wiKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuI2xvZ2luLWZvcm0ge1xuICBtYXJnaW4tdG9wOiA3MCU7XG59XG5cbmgxIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24taW5wdXQge1xuICAtLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");





var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, toastController, authService) {
        this.router = router;
        this.toastController = toastController;
        this.authService = authService;
        this.user = { username: "", password: "" };
    }
    RegisterPage.prototype.ngOnInit = function () { };
    // brukeren registrerer seg ved hjelp av firebase
    RegisterPage.prototype.registerUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_1, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 1, , 3]);
                        this.authService.userRegister({
                            username: this.user.username,
                            password: this.user.password
                        });
                        this.router.navigate(["login"]);
                        return [3 /*break*/, 3];
                    case 1:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.toastController.create({
                                message: e_1.message,
                                duration: 2500
                            })];
                    case 2:
                        toast = _a.sent();
                        toast.present();
                        console.warn(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module-es5.js.map