(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <h4 text-center margin-top>Insert your credentials</h4>\n  <div id=\"login-form\">\n    <ion-card class=\"login-form-field\">\n      <ion-card-content>\n        <ion-input [(ngModel)]=\"user.username\" placeholder=\"Username\"> </ion-input>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class=\"login-form-field\">\n      <ion-card-content>\n        <ion-input [(ngModel)]=\"user.password\" placeholder=\"Password\" type=\"password\"></ion-input>\n      </ion-card-content>\n    </ion-card>\n    <ion-button expand=\"full\" color=\"medium\" (click)=\"logIn()\">Login</ion-button>\n    <ion-button expand=\"full\" color=\"medium\" (click)=\"registerUser()\">Register</ion-button>\n    <ion-button expand=\"full\" color=\"medium\" (click)=\"forgotPassword()\">Forgot password</ion-button>\n  </div>\n</ion-content>  \n<!-- <ion-content>\n<h4 text-center margin-top>Insert your credentials</h4>\n  <ion-item>\n    <ion-label stacked>Username</ion-label>\n    <ion-input [(ngModel)]=\"user.username\" placeholder=\"Username\"></ion-input>\n  <ion-item>\n    <ion-label stacked>Password</ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\"></ion-input>\n  </ion-item>\n\n  <div text-center margin-top>\n    <button ion-button margin-right (click)=\"signUp()\">\n      SIGN UP\n    </button>\n    <button ion-button color=\"secondary\" (click)=\"signIn()\">\n      SIGN IN\n    </button>\n  </div>\n</ion-content> -->"

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url(\"/assets/background/login.jpg\") 0 0/100% 100% no-repeat;\n}\n\n#login-form {\n  margin-top: 70%;\n}\n\nh4 {\n  color: white;\n}\n\nion-input {\n  --color: rgb(255, 255, 255);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9LYXJvbGlzL1REUzIwMF9oMTlfNTAxNy9zcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUVBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7QUNDSjs7QURFRTtFQUNFLDJCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JhY2tncm91bmQvbG9naW4uanBnXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICB9XG4gIFxuICAjbG9naW4tZm9ybSB7XG4gICAgbWFyZ2luLXRvcDogNzAlO1xuICB9XG4gIFxuICBoNCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICBpb24taW5wdXQge1xuICAgIC0tY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2JhY2tncm91bmQvbG9naW4uanBnXCIpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4jbG9naW4tZm9ybSB7XG4gIG1hcmdpbi10b3A6IDcwJTtcbn1cblxuaDQge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/service/authentication.service.ts");





let LoginPage = class LoginPage {
    constructor(authService, router, toastController) {
        this.authService = authService;
        this.router = router;
        this.toastController = toastController;
        this.user = { username: "", password: "" };
    }
    ngOnInit() { }
    // Log in side
    logIn() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                this.authService.userLogIn({
                    username: this.user.username,
                    password: this.user.password
                });
                this.router.navigate(["home"]);
            }
            catch (e) {
                const toast = yield this.toastController.create({
                    message: e.message,
                    duration: 2500
                });
                toast.present();
            }
        });
    }
    registerUser() {
        this.router.navigate(["register"]);
    }
    forgotPassword() {
        this.router.navigate(["forgot"]);
    }
};
LoginPage.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.page.html"),
        styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map