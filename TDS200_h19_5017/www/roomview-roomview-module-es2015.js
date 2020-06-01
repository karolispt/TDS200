(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roomview-roomview-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/roomview/roomview.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/roomview/roomview.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Room {{room?.Name}}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/rooms\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-item>\n            <h2 text-minimize>{{ room.Name }} is {{ room.Status }}</h2>\n          </ion-item>\n          <ion-card-content>\n            Description: {{room.Description}}\n            <br />\n            Seats available: {{room.Number}}\n          </ion-card-content>\n          <ion-card-subtitle>\n            Added by: {{room.User}}\n          </ion-card-subtitle>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div id=\"buttons\">\n    <ion-button color=\"success\" expand=\"block\" (click)=\"updateRecord(room?.Id)\"\n      >Book this room</ion-button\n    >\n    <ion-button color=\"danger\" expand=\"block\" (click)=\"removeRecord(room?.Id)\"\n      >Delete this room</ion-button\n    >\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/roomview/roomview.module.ts":
/*!*********************************************!*\
  !*** ./src/app/roomview/roomview.module.ts ***!
  \*********************************************/
/*! exports provided: RoomviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomviewPageModule", function() { return RoomviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _roomview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roomview.page */ "./src/app/roomview/roomview.page.ts");







const routes = [
    {
        path: '',
        component: _roomview_page__WEBPACK_IMPORTED_MODULE_6__["RoomviewPage"]
    }
];
let RoomviewPageModule = class RoomviewPageModule {
};
RoomviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_roomview_page__WEBPACK_IMPORTED_MODULE_6__["RoomviewPage"]]
    })
], RoomviewPageModule);



/***/ }),

/***/ "./src/app/roomview/roomview.page.scss":
/*!*********************************************!*\
  !*** ./src/app/roomview/roomview.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pClass {\n  color: darkblue;\n  text-align: center;\n}\n\nion-card-subtitle {\n  color: black;\n}\n\n#buttons {\n  margin-top: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9LYXJvbGlzL1REUzIwMF9oMTlfNTAxNy9zcmMvYXBwL3Jvb212aWV3L3Jvb212aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcm9vbXZpZXcvcm9vbXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FER0E7RUFDSSxnQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcm9vbXZpZXcvcm9vbXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBDbGFzcyB7XG4gICAgY29sb3I6IGRhcmtibHVlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNhcmQtc3VidGl0bGUge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuXG4jYnV0dG9ucyB7XG4gICAgbWFyZ2luLXRvcDogMTAwJTtcbn0iLCIucENsYXNzIHtcbiAgY29sb3I6IGRhcmtibHVlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/roomview/roomview.page.ts":
/*!*******************************************!*\
  !*** ./src/app/roomview/roomview.page.ts ***!
  \*******************************************/
/*! exports provided: RoomviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomviewPage", function() { return RoomviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");






let RoomviewPage = class RoomviewPage {
    constructor(route, router, firestore, fbauth) {
        this.route = route;
        this.router = router;
        this.firestore = firestore;
        this.fbauth = fbauth;
        // subscriber siste trykket data fra RoomsPage og viser den i ett nytt vindu
        this.route.queryParams.subscribe(() => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.room = this.router.getCurrentNavigation().extras.state
                    .room;
            }
        });
    }
    // sletter rommet
    removeRecord(id) {
        this.router.navigate(["rooms"]);
        return this.firestore
            .collection("Rooms")
            .doc(id)
            .delete();
    }
    // oppdaterer rommet slik at den blir Unavailable og viser hvilken User booket rommet
    updateRecord(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const userLoggedIn = yield this.fbauth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).toPromise();
            this.router.navigate(["rooms"]);
            return this.firestore
                .collection("Rooms")
                .doc(id)
                .update({
                Status: "Unavailable",
                OccupiedBy: userLoggedIn.email
            });
        });
    }
};
RoomviewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RoomviewPage.prototype, "postData", void 0);
RoomviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-roomview",
        template: __webpack_require__(/*! raw-loader!./roomview.page.html */ "./node_modules/raw-loader/index.js!./src/app/roomview/roomview.page.html"),
        styles: [__webpack_require__(/*! ./roomview.page.scss */ "./src/app/roomview/roomview.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
], RoomviewPage);



/***/ })

}]);
//# sourceMappingURL=roomview-roomview-module-es2015.js.map