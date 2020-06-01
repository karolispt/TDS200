(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rooms-rooms-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/rooms/rooms.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/rooms/rooms.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>rooms</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card\n    *ngFor=\"let room of rooms$ | async\"\n    lines=\"none\"\n    (click)=\"navigateRoomView(room)\"\n  >\n    <ion-card-header>\n      <ion-card-title>Room: {{room.Name}} </ion-card-title>\n      <ion-card-subtitle>Added by: {{room.User}}</ion-card-subtitle>\n      <br />\n      <img src=\"../../assets/background/meetingroom.jpg\" />\n      <ion-card-subtitle>Status: {{room.Status}}</ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/rooms/rooms.module.ts":
/*!***************************************!*\
  !*** ./src/app/rooms/rooms.module.ts ***!
  \***************************************/
/*! exports provided: RoomsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsPageModule", function() { return RoomsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rooms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rooms.page */ "./src/app/rooms/rooms.page.ts");







const routes = [
    {
        path: '',
        component: _rooms_page__WEBPACK_IMPORTED_MODULE_6__["RoomsPage"]
    }
];
let RoomsPageModule = class RoomsPageModule {
};
RoomsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_rooms_page__WEBPACK_IMPORTED_MODULE_6__["RoomsPage"]]
    })
], RoomsPageModule);



/***/ }),

/***/ "./src/app/rooms/rooms.page.scss":
/*!***************************************!*\
  !*** ./src/app/rooms/rooms.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb21zL3Jvb21zLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/rooms/rooms.page.ts":
/*!*************************************!*\
  !*** ./src/app/rooms/rooms.page.ts ***!
  \*************************************/
/*! exports provided: RoomsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomsPage", function() { return RoomsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");





let RoomsPage = class RoomsPage {
    constructor(router, firestore) {
        this.router = router;
        this.firestore = firestore;
    }
    // Viser frem alle rom når siden er åpnet (ngOnInit)
    ngOnInit() {
        this.rooms$ = this.firestore
            .collection("Rooms")
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data();
                data.Id = a.payload.doc.id;
                return data;
            });
        }));
    }
    // oppretter en navigasjonsfunksjon slik at vi kan sende dataen til roomview (nytt vindu for mer informasjon)
    navigateRoomView(enter) {
        const navigationExtras = {
            state: {
                room: enter
            }
        };
        this.router.navigate(["roomview"], navigationExtras);
    }
};
RoomsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
];
RoomsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-rooms",
        template: __webpack_require__(/*! raw-loader!./rooms.page.html */ "./node_modules/raw-loader/index.js!./src/app/rooms/rooms.page.html"),
        styles: [__webpack_require__(/*! ./rooms.page.scss */ "./src/app/rooms/rooms.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
], RoomsPage);



/***/ })

}]);
//# sourceMappingURL=rooms-rooms-module-es2015.js.map