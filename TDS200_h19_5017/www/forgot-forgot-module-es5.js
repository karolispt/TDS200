(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-forgot-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/forgot/forgot.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgot/forgot.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div id=\"login-form\">\n    <ion-card class=\"login-form-field\">\n      <ion-card-content>\n        <ion-input [(ngModel)]=\"email\" placeholder=\"Enter your email\">\n        </ion-input>\n      </ion-card-content>\n    </ion-card>\n    <ion-button expand=\"full\" color=\"medium\" (click)=\"sendPassword()\"\n      >Send password</ion-button\n    >\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/forgot/forgot.module.ts":
/*!*****************************************!*\
  !*** ./src/app/forgot/forgot.module.ts ***!
  \*****************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot.page */ "./src/app/forgot/forgot.page.ts");







var routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]
    }
];
var ForgotPageModule = /** @class */ (function () {
    function ForgotPageModule() {
    }
    ForgotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
        })
    ], ForgotPageModule);
    return ForgotPageModule;
}());



/***/ }),

/***/ "./src/app/forgot/forgot.page.scss":
/*!*****************************************!*\
  !*** ./src/app/forgot/forgot.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url(\"/assets/background/login.jpg\") 0 0/100% 100% no-repeat;\n}\n\n#login-form {\n  margin-top: 70%;\n}\n\nh4 {\n  color: white;\n}\n\nion-input {\n  --color: rgb(255, 255, 255);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9LYXJvbGlzL1REUzIwMF9oMTlfNTAxNy9zcmMvYXBwL2ZvcmdvdC9mb3Jnb3QucGFnZS5zY3NzIiwic3JjL2FwcC9mb3Jnb3QvZm9yZ290LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlFQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSwyQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JhY2tncm91bmQvbG9naW4uanBnXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICB9XG4gIFxuICAjbG9naW4tZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogNzAlO1xuICB9XG4gIFxuICBoNCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBpb24taW5wdXQge1xuICAgIC0tY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JhY2tncm91bmQvbG9naW4uanBnXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4jbG9naW4tZm9ybSB7XG4gIG1hcmdpbi10b3A6IDcwJTtcbn1cblxuaDQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/forgot/forgot.page.ts":
/*!***************************************!*\
  !*** ./src/app/forgot/forgot.page.ts ***!
  \***************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ForgotPage = /** @class */ (function () {
    function ForgotPage(fireauth, router, toastController) {
        this.fireauth = fireauth;
        this.router = router;
        this.toastController = toastController;
    }
    ForgotPage.prototype.ngOnInit = function () { };
    ForgotPage.prototype.sendPassword = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e_1, toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 1, , 3]);
                        this.fireauth.auth.sendPasswordResetEmail(this.email);
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
                    case 3:
                        this.router.navigate(["login"]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ForgotPage.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    ForgotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-forgot",
            template: __webpack_require__(/*! raw-loader!./forgot.page.html */ "./node_modules/raw-loader/index.js!./src/app/forgot/forgot.page.html"),
            styles: [__webpack_require__(/*! ./forgot.page.scss */ "./src/app/forgot/forgot.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], ForgotPage);
    return ForgotPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-forgot-module-es5.js.map