(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["addroom-addroom-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/addroom/addroom.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addroom/addroom.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Add meeting room\n    </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-item>\n        <ion-input placeholder=\"Enter Name\" [(ngModel)]=\"roomName\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder=\"Enter Number of seats\"\n          [(ngModel)]=\"roomNumber\"\n        ></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder=\"Enter Description\"\n          [(ngModel)]=\"roomDescription\"\n        ></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <ion-button\n          (click)=\"createRecord()\"\n          [disabled]=\"!roomName || !roomNumber || !roomDescription\"\n        >\n          <ion-icon size=\"small\" slot=\"icon-only\" name=\"add\"></ion-icon>\n          &nbsp;Add\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/addroom/addroom.module.ts":
/*!*******************************************!*\
  !*** ./src/app/addroom/addroom.module.ts ***!
  \*******************************************/
/*! exports provided: AddroomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddroomPageModule", function() { return AddroomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _addroom_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addroom.page */ "./src/app/addroom/addroom.page.ts");







const routes = [
    {
        path: '',
        component: _addroom_page__WEBPACK_IMPORTED_MODULE_6__["AddroomPage"]
    }
];
let AddroomPageModule = class AddroomPageModule {
};
AddroomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_addroom_page__WEBPACK_IMPORTED_MODULE_6__["AddroomPage"]]
    })
], AddroomPageModule);



/***/ }),

/***/ "./src/app/addroom/addroom.page.scss":
/*!*******************************************!*\
  !*** ./src/app/addroom/addroom.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHJvb20vYWRkcm9vbS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/addroom/addroom.page.ts":
/*!*****************************************!*\
  !*** ./src/app/addroom/addroom.page.ts ***!
  \*****************************************/
/*! exports provided: AddroomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddroomPage", function() { return AddroomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");






let AddroomPage = 
//AddroomPage klassen som legger til ønsket rom i databasen
class AddroomPage {
    //private fbauth: AngularFireAuth;
    //private firestore: AngularFirestore;
    constructor(router, fbauth, firestore) {
        this.router = router;
        this.fbauth = fbauth;
        this.firestore = firestore;
    }
    // async funksjonen som leser all data fra databasen
    ngOnInit() { }
    // den tar imot inputs og e-post adressen til brukeren som legger til et møterom og sender
    // videre inputs til FireBase, som blir lagt til i Firebase databasen
    createRecord() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const postData = this.firestore.collection("Rooms");
            const userLoggedIn = yield this.fbauth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).toPromise();
            yield postData.add({
                Name: this.roomName,
                Number: this.roomNumber,
                Description: this.roomDescription,
                User: userLoggedIn.email,
                Status: "Available",
                OccupiedBy: "N/A"
            });
            this.router.navigate(["rooms"]);
        });
    }
};
AddroomPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
AddroomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-addroom",
        template: __webpack_require__(/*! raw-loader!./addroom.page.html */ "./node_modules/raw-loader/index.js!./src/app/addroom/addroom.page.html"),
        styles: [__webpack_require__(/*! ./addroom.page.scss */ "./src/app/addroom/addroom.page.scss")]
    })
    //AddroomPage klassen som legger til ønsket rom i databasen
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
], AddroomPage);



/***/ })

}]);
//# sourceMappingURL=addroom-addroom-module-es2015.js.map