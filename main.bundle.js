webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-template-driven></app-template-driven> -->\n<!-- <app-reactive-forms></app-reactive-forms> -->\n<!-- <app-pipes></app-pipes>\n<app-joke-list></app-joke-list> -->\n<!-- <div class=\"container\">\n<div class=\"row\">\n<div class=\"col-xs-6\">\n<app-parent><app-child></app-child></app-parent>\n</div>\n<div class=\"col-xs-6\">\n<app-parent><app-child></app-child></app-parent><!-- Service through : viewProviders\n</div>\n</div>\n</div>\n<app-ee-status></app-ee-status> -->\n<!-- <app-server-http-operations></app-server-http-operations> -->\n<router-outlet></router-outlet>\n\n        "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log("1. AppComponent>>>");
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"]({
            apiKey: "AIzaSyAD8H28o0l1y1WgDnxwZVEbg0G-k8PSnb8",
            authDomain: "httpmodule-d9260.firebaseapp.com",
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__template_driven_template_driven_component__ = __webpack_require__("../../../../../src/app/template-driven/template-driven.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reactive_forms_reactive_forms_component__ = __webpack_require__("../../../../../src/app/reactive-forms/reactive-forms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_pipes_component__ = __webpack_require__("../../../../../src/app/pipes/pipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__joke_joke_component__ = __webpack_require__("../../../../../src/app/joke/joke.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__joke_list_joke_list_component__ = __webpack_require__("../../../../../src/app/joke-list/joke-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__joke_form_joke_form_component__ = __webpack_require__("../../../../../src/app/joke-form/joke-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__custom_directive__ = __webpack_require__("../../../../../src/app/custom.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__customdirectives_cc_rollover_directive__ = __webpack_require__("../../../../../src/app/customdirectives/cc-rollover.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__number_pipe_pipe__ = __webpack_require__("../../../../../src/app/number-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__parent_parent_component__ = __webpack_require__("../../../../../src/app/parent/parent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__child_child_component__ = __webpack_require__("../../../../../src/app/child/child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__http_api_http_api_component__ = __webpack_require__("../../../../../src/app/http-api/http-api.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__status_pipe_pipe__ = __webpack_require__("../../../../../src/app/status-pipe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ee_status_ee_status_component__ = __webpack_require__("../../../../../src/app/ee-status/ee-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__server_http_operations_server_http_operations_component__ = __webpack_require__("../../../../../src/app/server-http-operations/server-http-operations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_server_http_service_service__ = __webpack_require__("../../../../../src/app/services/server-http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_app_routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_app_user_auth_sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/user/auth/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_app_user_auth_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/user/auth/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_app_user_auth_auth_service__ = __webpack_require__("../../../../../src/app/user/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__delete_test_test_component__ = __webpack_require__("../../../../../src/app/delete/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__template_driven_template_driven_component__["a" /* TemplateDrivenComponent */],
                __WEBPACK_IMPORTED_MODULE_8__reactive_forms_reactive_forms_component__["a" /* ReactiveFormsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_pipes_component__["a" /* PipesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__joke_joke_component__["a" /* JokeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__joke_list_joke_list_component__["a" /* JokeListComponent */],
                __WEBPACK_IMPORTED_MODULE_12__joke_form_joke_form_component__["a" /* JokeFormComponent */],
                __WEBPACK_IMPORTED_MODULE_13__custom_directive__["a" /* CustomDirective */],
                __WEBPACK_IMPORTED_MODULE_14__customdirectives_cc_rollover_directive__["a" /* CcRolloverDirective */],
                __WEBPACK_IMPORTED_MODULE_15__number_pipe_pipe__["a" /* NumberPipePipe */],
                __WEBPACK_IMPORTED_MODULE_16__parent_parent_component__["a" /* ParentComponent */],
                __WEBPACK_IMPORTED_MODULE_17__child_child_component__["a" /* ChildComponent */],
                __WEBPACK_IMPORTED_MODULE_18__http_api_http_api_component__["a" /* HttpApiComponent */],
                __WEBPACK_IMPORTED_MODULE_19__status_pipe_pipe__["a" /* StatusPipePipe */],
                __WEBPACK_IMPORTED_MODULE_20__ee_status_ee_status_component__["a" /* EeStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_19__status_pipe_pipe__["a" /* StatusPipePipe */],
                __WEBPACK_IMPORTED_MODULE_21__server_http_operations_server_http_operations_component__["a" /* ServerHttpOperationsComponent */],
                __WEBPACK_IMPORTED_MODULE_27_app_user_auth_sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_28_app_user_auth_sign_up_sign_up_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_23__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_24__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_30__delete_test_test_component__["a" /* TestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_26__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_25_app_routes__["a" /* appRoutes */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_31__services_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_22__services_server_http_service_service__["a" /* ServerHttpServiceService */], __WEBPACK_IMPORTED_MODULE_29_app_user_auth_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_14__customdirectives_cc_rollover_directive__["a" /* CcRolloverDirective */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/child/child.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".child{\r\n    background-color:blueviolet;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/child/child.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"child\">\n  <p>Child</p>\n  {{ messageService.message }}\n</div>"

/***/ }),

/***/ "../../../../../src/app/child/child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChildComponent = /** @class */ (function () {
    function ChildComponent(messageService) {
        this.messageService = messageService;
    }
    ChildComponent.prototype.ngOnInit = function () {
    };
    ChildComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-child',
            template: __webpack_require__("../../../../../src/app/child/child.component.html"),
            styles: [__webpack_require__("../../../../../src/app/child/child.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_message_service__["a" /* MessageService */]])
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "../../../../../src/app/custom.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomDirective = /** @class */ (function () {
    function CustomDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'green');
    }
    CustomDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[customdir]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], CustomDirective);
    return CustomDirective;
}());



/***/ }),

/***/ "../../../../../src/app/customdirectives/cc-rollover.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CcRolloverDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CcRolloverDirective = /** @class */ (function () {
    function CcRolloverDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.rollOver = { initial: '', over: '', querySelector: '' };
        console.log("ElementRef ..." + el);
    }
    CcRolloverDirective.prototype.onmouseOver = function () {
        var part = this.el.nativeElement.querySelector(this.rollOver.querySelector);
        console.log("part ..." + part);
        console.log('<<<<<<<< mouseover in CcRolloverDirective >>>>>>>>>>');
        this.renderer.setElementStyle(part, 'src', this.rollOver.over);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('appCcRollover'),
        __metadata("design:type", Object)
    ], CcRolloverDirective.prototype, "rollOver", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CcRolloverDirective.prototype, "onmouseOver", null);
    CcRolloverDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appCcRollover]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], CcRolloverDirective);
    return CcRolloverDirective;
}());



/***/ }),

/***/ "../../../../../src/app/delete/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/delete/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  test works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/delete/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test',
            template: __webpack_require__("../../../../../src/app/delete/test/test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/delete/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/ee-status/ee-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ee-status/ee-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\"><input type=\"text\" [(ngModel)]=\"serverStatus\">Search Status Here</div>\n</div>\n<button class=\"btn btn-primary\" (click)=\"addStatus(serverStatus)\">Add status</button>\n<div class=\"row\" *ngFor=\"let ee of eeDetails | statusPipe:serverStatus:'status'\" [ngStyle]=\"{borderStyle: 'ridge'}\">\n  <div class=\"col-sm-6\">{{ee.name}}</div>\n  <div class=\"col-sm-6\">{{ee.status}}</div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">{{appStatus | async}}</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ee-status/ee-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EeStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EeStatusComponent = /** @class */ (function () {
    function EeStatusComponent() {
        this.serverStatus = '';
        this.eeDetails = [{ name: 'Siva', status: 'active' }, { name: 'Ram', status: 'LOA' }, { name: 'Khayati', status: 'promoted' }];
    }
    EeStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        var i = 0;
        this.appStatus = new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.addStatus('active');
                resolve('success' + i++);
            }, 2000);
        });
    };
    EeStatusComponent.prototype.addStatus = function (serverStatus) {
        this.eeDetails.push({ name: 'Kittu', status: serverStatus });
    };
    EeStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ee-status',
            template: __webpack_require__("../../../../../src/app/ee-status/ee-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/ee-status/ee-status.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EeStatusComponent);
    return EeStatusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper\">\n    <a href=\"#\" class=\"brand-logo center\">\n      <i class=\"material-icons\">cloud</i>Firebase User Authentication</a>\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      <li>\n        <a (click)=\"Logout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"row\" <!-- *ngIf=\"userClaims\" -->>\n  <div class=\"col s12 m7\">\n    <div class=\"card\">\n      <div class=\"card-content\">\n        <span>Username :<!-- {{userClaims.UserName}} --></span>\n        <br>\n        <span>Email :<!--  {{userClaims.Email}} --></span>\n        <br>\n        <span>Full Name : <!-- {{userClaims.FirstName}} {{userClaims.LastName}} --></span>\n        <br>\n        <span>Logged On : <!-- {{userClaims.LoggedOn}} --></span>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_auth_auth_service__ = __webpack_require__("../../../../../src/app/user/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router /* , private userService: UserService */, toastr, authService) {
        this.router = router; /* , private userService: UserService */
        this.toastr = toastr;
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        /* this.userService.getUserClaims().subscribe((data: any) => {
          this.userClaims = data;
    
        }); */
    };
    HomeComponent.prototype.Logout = function () {
        localStorage.removeItem('userToken');
        this.toastr.success('User registration successful');
        this.router.navigate(['/login']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] /* , private userService: UserService */, __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__user_auth_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/http-api/http-api.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/http-api/http-api.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  http-api works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/http-api/http-api.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpApiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HttpApiComponent = /** @class */ (function () {
    function HttpApiComponent() {
    }
    HttpApiComponent.prototype.ngOnInit = function () {
    };
    HttpApiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-http-api',
            template: __webpack_require__("../../../../../src/app/http-api/http-api.component.html"),
            styles: [__webpack_require__("../../../../../src/app/http-api/http-api.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HttpApiComponent);
    return HttpApiComponent;
}());



/***/ }),

/***/ "../../../../../src/app/joke-form/joke-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\nbackground-color: gray;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/joke-form/joke-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-block\" customdir>\n<h4 class=\"card-title\">Create Joke</h4>\n<div class=\"form-group\">\n<input type=\"text\"\nclass=\"form-control\"\nplaceholder=\"Enter the setup\"\n#setup>\n</div>\n<div class=\"form-group\">\n<input type=\"text\"\nclass=\"form-control\"\nplaceholder=\"Enter the punchline\"\n#punchline>\n</div>\n<button type=\"button\"\nclass=\"btn btn-primary\"\n(click)=\"createJoke(setup.value, punchline.value)\">Create\n</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/joke-form/joke-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JokeFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__joke__ = __webpack_require__("../../../../../src/app/joke.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JokeFormComponent = /** @class */ (function () {
    function JokeFormComponent() {
        this.jokeCreated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    JokeFormComponent.prototype.ngOnInit = function () {
    };
    JokeFormComponent.prototype.createJoke = function (setup, punchline) {
        this.jokeCreated.emit(new __WEBPACK_IMPORTED_MODULE_1__joke__["a" /* Joke */](setup, punchline));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], JokeFormComponent.prototype, "jokeCreated", void 0);
    JokeFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-joke-form',
            template: __webpack_require__("../../../../../src/app/joke-form/joke-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/joke-form/joke-form.component.css")]
        })
    ], JokeFormComponent);
    return JokeFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/joke-list/joke-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\nbackground-color: gray;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/joke-list/joke-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-joke-form (jokeCreated)=\"addJoke($event)\"></app-joke-form>\n<app-joke *ngFor=\"let j of jokes\" [joke]=\"j\" (jokeDeleted)=\"jokeDelete($event)\">\n    <h1>{{ j.punchline }}</h1>\n    <span>{{ j.setup }} ?</span>\n</app-joke>"

/***/ }),

/***/ "../../../../../src/app/joke-list/joke-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JokeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_joke__ = __webpack_require__("../../../../../src/app/joke.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JokeListComponent = /** @class */ (function () {
    function JokeListComponent() {
        this.jokes = [new __WEBPACK_IMPORTED_MODULE_1_app_joke__["a" /* Joke */]("What did the cheese say when it looked in the mirror?", "Hello-me(Halloumi)"), new __WEBPACK_IMPORTED_MODULE_1_app_joke__["a" /* Joke */]("What kind of cheese do you use to disguise a small horse?", "Mask - apony(Mascarpone)"), new __WEBPACK_IMPORTED_MODULE_1_app_joke__["a" /* Joke */]("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’")];
    }
    JokeListComponent.prototype.addJoke = function (joke) {
        this.jokes.unshift(joke);
    };
    JokeListComponent.prototype.refreshJokes = function (jokes) {
        this.jokes = jokes;
    };
    JokeListComponent.prototype.jokeDelete = function (joke) {
        console.log("jokeDelete >>>" + joke.punchline);
        var index = this.jokes.indexOf(joke);
        this.jokes.slice(index, 1);
        this.refreshJokes(this.jokes);
        //this.jokes=[];
    };
    /* ngOnChanges(changes: Joke) {
      console.log(`ngOnChanges - data is ${this.data}`);
      for (let key in changes) {
        console.log(`${key} changed.
  Current: ${changes[key].currentValue}.
  Previous: ${changes[key].previousValue}`);
      }
    } */
    JokeListComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy");
    };
    JokeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-joke-list',
            template: __webpack_require__("../../../../../src/app/joke-list/joke-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/joke-list/joke-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], JokeListComponent);
    return JokeListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/joke.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Joke; });
var Joke = /** @class */ (function () {
    function Joke(setup, punchline) {
        this.count = 0;
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
        this.count = this.count + 1;
        console.log("Called every time with new operator >>>" + this.count);
    }
    Joke.prototype.ngOnInit = function () {
        console.log("Called only one >>>1");
    };
    Joke.prototype.toggle = function () {
        this.hide = !this.hide;
    };
    return Joke;
}());



/***/ }),

/***/ "../../../../../src/app/joke/joke.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/joke/joke.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 #h4Header>Default Header Name\n  <h4>\n    <!-- <div class=\"card card-block\" [ngStyle]=\"{'background-color':10>5?'pink':'blue'}\" customdir> -->\n    <div class=\"card card-block\" customdir>\n      <h4 class=\"card-title\">\n        <ng-content select=\"span\"></ng-content>\n        <!-- <ng-content select=\".setup\"></ng-content>  -->\n      </h4>\n      <!-- <p class=\"card-text\"\n[hidden]=\"data.hide\">\n<ng-content select=\"h1\"></ng-content>\n<!-- <ng-content select=\".punchline\"></ng-content> ②\n</p> -->\n      <p class=\"card-text\" [style.display]=\"'none'\">{{data.punchline}}</p>\n      <ng-template [ngIf]=\"data.hide\">\n        <p class=\"card-text\">\n          <ng-content select=\"h1\" [style.display]=\"'none'\"></ng-content>\n          <!-- <ng-content select=\".punchline\"></ng-content> ② -->\n        </p>\n\n        <div class=\"hostBinding\">\n          <p *ngIf=\"ishovering===true;else nothover\">Host binding</p>\n          <ng-template #nothover>\n            <p>nothover</p>\n          </ng-template>\n        </div>\n      </ng-template>\n      <a class=\"btn btn-primary\" (click)=\"data.toggle()\">Tell Me\n</a>\n      <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteJoke(data)\" [disabled]=\"flag\">Delete Joke\n</button>\n    </div>\n    <hr>\n    <div>\n      To render the name variable we use this syntax\n      <pre ngNonBindable>{{ name }}</pre>\n    </div>\n\n    <h1>Image here :)</h1> <img [appCcRollover]=\"{initial:'https://unsplash.it/200/300?image=201',over:'https://unsplash.it/200/300?image=202',querySelector:'.img_src'}\" [src]=\"imagePath\" class=\"img_src\"/>\n    <h2 ngNonBindable>{{ngNonBindable}}</h2>\n    <h2>{{promiseData | async}}</h2>\n\n    <h2 ngNonBindable>{{observableData}}</h2>\n    <!-- <h2>{{observableData}}</h2> -->\n    <h2>{{observable | async}}</h2>\n\n    <hr/>\n    <h1 ngNonBindable>{{ 1 | numberPipe}}</h1>\n    <h1>{{ inputText | numberPipe}}</h1>\n    Enter Input<input type=\"text\" [(ngModel)]=\"inputText\"/>\n    "

/***/ }),

/***/ "../../../../../src/app/joke/joke.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JokeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__joke__ = __webpack_require__("../../../../../src/app/joke.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JokeComponent = /** @class */ (function () {
    function JokeComponent(el, renderer) {
        //this.getPromise().then((val) => this.promiseData = val.toString(),(err)=>console.log(err));
        this.el = el;
        this.renderer = renderer;
        this.imagePath = 'https://unsplash.it/200/300?image=201';
        this.color = "yellow";
        /* ngOnInit() {
          //this.h4HeaderRef.nativeElement.textContent = "Best Joke Machine";
          console.log(`ngOnInit - data is ${this.data}`);
        }
        ngDoCheck() {
          console.log("ngDoCheck")
        }
        ngAfterContentInit() {
          console.log("ngAfterContentInit");
        }
        ngAfterContentChecked() {
          console.log("ngAfterContentChecked");
        }
        ngAfterViewInit() {
          console.log("ngAfterViewInit");
        }
        ngAfterViewChecked() {
          console.log("ngAfterViewChecked");
        }
        ngOnDestroy() {
          console.log("ngOnDestroy");
        }
       */
        this.jokeDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.promiseData = this.getPromise();
        var obs = __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].interval(2000).take(5).map(function (v) { return Date.now; });
        obs.subscribe(function (value) { return console.log("Subscriber: " + value); });
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].of(1, 2, 3);
        this.getSubscription();
        this.observable = this.getObservable();
    }
    JokeComponent.prototype.ngOnChanges = function () {
        console.log("ngOnChanges - data is " + this.data);
        if (this.data === null) {
            this.flag = true;
        }
    };
    JokeComponent.prototype.getPromise = function () {
        return new Promise(function (resolve, reject) {
            //setTimeout(() => resolve("Promise complete!"), 3000),
            var val = true;
            if (val)
                setTimeout(function () { return resolve("Promise complete!"); }, 3000);
            else
                reject("Rejected !!!");
        });
    };
    JokeComponent.prototype.deleteJoke = function (joke) {
        this.jokeDeleted.emit(joke);
    };
    JokeComponent.prototype.onmouseOver = function () {
        var part = this.el.nativeElement.querySelector('.card-text');
        this.renderer.setElementStyle(part, 'display', 'inline-block');
        this.ishovering = true;
    };
    JokeComponent.prototype.onMouseOut = function () {
        var part = this.el.nativeElement.querySelector('.card-text');
        this.renderer.setElementStyle(part, 'display', 'none');
        this.ishovering = false;
    };
    JokeComponent.prototype.getObservable = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].interval(1000).take(10).map(function (v) { return v * 3; });
    };
    JokeComponent.prototype.getSubscription = function () {
        var _this = this;
        this.subscription = this.getObservable().subscribe(function (data) { return _this.observableData = data; });
    };
    JokeComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            console.log("unsubscribe =========== unsubscribe");
        }
        else {
            console.log("unsubscribe ********* unsubscribe");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('joke'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__joke__["a" /* Joke */])
    ], JokeComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.hostBinding'),
        __metadata("design:type", Boolean)
    ], JokeComponent.prototype, "ishovering", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('h4Header'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], JokeComponent.prototype, "h4HeaderRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], JokeComponent.prototype, "jokeDeleted", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JokeComponent.prototype, "onmouseOver", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('mouseout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], JokeComponent.prototype, "onMouseOut", null);
    JokeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-joke',
            template: __webpack_require__("../../../../../src/app/joke/joke.component.html"),
            styles: [__webpack_require__("../../../../../src/app/joke/joke.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], JokeComponent);
    return JokeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/number-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberPipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NumberPipePipe = /** @class */ (function () {
    function NumberPipePipe() {
    }
    NumberPipePipe.prototype.transform = function (value) {
        var val;
        if (value <= 10)
            val = 100;
        else
            val = value.valueOf() * 10;
        return val;
    };
    NumberPipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'numberPipe'
        })
    ], NumberPipePipe);
    return NumberPipePipe;
}());



/***/ }),

/***/ "../../../../../src/app/parent/parent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".parent{\r\n    background-color:greenyellow;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/parent/parent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\n  <p>Parent</p>\n  <form novalidate>\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" name=\"value\" [(ngModel)]=\"messageService.message\">\n    </div>\n  </form>\n  <!-- <app-child></app-child> -->\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "../../../../../src/app/parent/parent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParentComponent = /** @class */ (function () {
    function ParentComponent(messageService) {
        this.messageService = messageService;
    }
    ParentComponent.prototype.ngOnInit = function () {
    };
    ParentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-parent',
            template: __webpack_require__("../../../../../src/app/parent/parent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/parent/parent.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_services_message_service__["a" /* MessageService */]])
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/pipes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pipes/pipes.component.html":
/***/ (function(module, exports) {

module.exports = "<hr>\n<h2>JSON Pipe Example</h2>\n<h4>Without JSON Pipe.</h4>\n{{obj}}\n<h4>With JSON Pipe.</h4>\n{{obj | json}}\n<hr>\n<div class=\"card card-block\">\n  <h4 class=\"card-title\">Currency</h4>\n  <div class=\"card-text\">\n    <p ngNonBindable>{{ 1234.56 | currency:'CAD' }}</p>\n    <p>{{ 1234.56 | currency:\"CAD\" }}</p>\n\n    <p ngNonBindable>{{ 1234.56 | currency:'CAD':'code' }}</p>\n    <p>{{ 1234.56 | currency:'CAD':'code'}}</p>\n\n    <p ngNonBindable>{{ 1234.56 | currency:'CAD':'symbol' }}</p>\n    <p>{{ 1234.56 | currency:'CAD':'symbol'}}</p>\n\n    <p ngNonBindable>{{ 1234.56 | currency:'CAD':'symbol-narrow' }}</p>\n    <p>{{ 1234.56 | currency:'CAD':'symbol-narrow'}}</p>\n  </div>\n</div>\n<hr/>\n<div class=\"card card-block\">\n  <h4 class=\"card-title\">Date</h4>\n  <div class=\"card-text\">\n    <p ngNonBindable>{{ dateVal | date: 'shortTime' }}</p> \n    <p>{{ dateVal | date: 'shortTime' }}</p>\n\n    <p ngNonBindable>{{ dateVal | date:'fullDate' }}</p>\n    <p>{{ dateVal | date: 'fullDate' }}</p>\n\n    <p ngNonBindable>{{ dateVal | date: 'd/M/y' }}</p>\n    <p>{{ dateVal | date: 'd/M/y' }}</p>\n    <p>{{ dateVal | date: 'dd/mm/yyyy' }}</p>\n  </div>\n</div>\n<hr/>\n\n<div class=\"card card-block\">\n  <div class=\"card-text\">\n    <h4 class=\"card-title\">DecimalPipe</h4>\n    <p ngNonBindable>{{ 3.14159265 | number: '3.1-2' }}</p>\n    <p>{{ 3.14159265 | number: '3.1-2' }}</p>\n\n    <p ngNonBindable>{{ 3.14159265 | number: '1.4-4' }}</p>\n    <p>{{ 3.14159265 | number: '1.4-4' }}</p>\n\n    <p ngNonBindable>{{ 25.655498448 | number: '1.4-4' }}</p>\n    <p>{{ 25.655498448 | number:'5.5-8' }}</p>\n  </div>\n</div>\n<hr/>\n<div class=\"card card-block\">\n  <h4 class=\"card-title\">PercentPipe</h4>\n  <div class=\"card-text\">\n    <p ngNonBindable>{{ 0.123456 | percent }}</p>\n    <p>{{ 0.123456 | percent }}</p>\n\n    <p ngNonBindable>{{ 0.123456 | percent: '2.1-2' }}</p> \n    <p>{{ 0.123456 | percent: '2.1-2' }}</p>\n\n    <p ngNonBindable>{{ 0.123456 | percent: '10.4-4' }}</p>\n    <p>{{ 0.123456 | percent : \"10.4-4\" }}</p>\n  </div>\n</div>\n<hr/>\n<div class=\"card card-block\">\n  <h4 class=\"card-title\">SlicePipe</h4>\n  <div class=\"card-text\">\n    <p ngNonBindable>{{ [1,2,3,4,5,6] | slice:1:3 }}</p> \n    <p>{{ [1,2,3,4,5,6] | slice:0:3 }}</p>\n\n    <p ngNonBindable>{{ [1,2,3,4,5,6] | slice:1 }}</p> \n    <p>{{ [1,2,3,4,5,6] | slice:1 }}</p>\n\n    <p ngNonBindable>{{ [1,2,3,4,5,6,7,2] | slice:2:-2 }}</p> \n    <p>{{ [1,2,3,4,5,6] | slice:2:-1 }}</p>\n\n    <pre ngNonBindable>\n&lt;ul&gt;\n  &lt;li *ngFor=&quot;let v of [1,2,3,4,5,6] | slice:2:-1&quot;&gt;\n    {{v}}\n  &lt;/li&gt;\n&lt;/ul&gt;\n    </pre>\n\n    <ul>\n      <li *ngFor=\"let v of [1,2,3,4,5,6] | slice:2:-1\"> \n        {{v}}\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"card card-block\">\n<h4 class=\"card-title\">Card Title</h4>\n<p class=\"card-text\">Card Text</p>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pipes/pipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PipesComponent = /** @class */ (function () {
    function PipesComponent() {
        this.obj = { name: { firstName: "Siva", lastName: "Nulakani" }, empId: "0710203", racfId: ['@KNYKB', '@KNYGB'] };
        this.names = { id: '5015702', name: 'Siva' };
        this.dateVal = new Date();
    }
    PipesComponent.prototype.ngOnInit = function () {
    };
    PipesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pipes',
            template: __webpack_require__("../../../../../src/app/pipes/pipes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pipes/pipes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PipesComponent);
    return PipesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/reactive-forms/reactive-forms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}\r\n#mobile{\r\n    background-color: gray;\r\n}\r\n.form-inline {\r\n background-color: green;\r\n}\r\nlabel.lbl{\r\n    color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reactive-forms/reactive-forms.component.html":
/***/ (function(module, exports) {

module.exports = "  <nav class=\"navbar navbar-expand-lg navbar-inverse bg-primary\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" [formControl]=\"searchField\" placeholder=\"Search\" class=\"form-control\">\n      <!-- <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\"><label class=\"lbl\" for=\"search\">Search</label></button> -->\n    </form>\n  </div>\n</nav>\n<div class=\"container\">\n  <form [formGroup]=\"formGroup\" (ngSubmit)=\"regForm()\">\n    <div class=\"form-group\">\n      <label for=\"userName\">UserName</label>\n      <input type=\"text\" id=\"userName\" class=\"form-control\" formControlName=\"userName\">\n      <span class=\"help-block\" *ngIf=\"!formGroup.get('userName').valid && formGroup.get('userName').touched\">\n        <span class=\"help-block\" *ngIf=\"formGroup.get('userName').errors['UserHasBeenRestricted']\">User has been Restricted !!</span>\n      <span class=\"help-block\" *ngIf=\"formGroup.get('userName').errors['required']\">User Name is required !!</span>\n      <p *ngIf=\"formGroup.get('userName').errors.minlength\">User Name must be 10 characters long, we need another {{formGroup.get('userName').errors.minlength.requiredLength -\n        formGroup.get('userName').errors.minlength.actualLength}} characters </p>\n      <p *ngIf=\"formGroup.get('userName').errors.maxlength\">User Name should not exceed {{formGroup.get('userName').errors.maxlength.requiredLength}} characters long\n        </span>\n\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-danger': formGroup.controls.email.invalid && (formGroup.controls.email.dirty || formGroup.controls.email.touched),'has-success': formGroup.controls.email.valid && (formGroup.controls.email.dirty || formGroup.controls.email.touched)}\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\">\n      <span class=\"help-block\" *ngIf=\"!formGroup.get('email').valid && formGroup.get('email').touched\">Please enter a valid value !</span>\n    </div>\n    <div formGroupName=\"contactDetails\">\n      <div class=\"form-group\">\n        <label for=\"mobile\">Mobile</label>\n        <input type=\"number\" id=\"mobile\" class=\"form-control\" formControlName=\"mobile\" pattern=\"^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[789]\\d{9}$\">\n        <span class=\"help-block\" *ngIf=\"formGroup.get('contactDetails.mobile').errors && !formGroup.get('contactDetails.mobile').valid && formGroup.get('contactDetails.mobile').touched\">\n           <p *ngIf=\"formGroup.get('contactDetails.mobile').errors['required']\">Mobile Number is required</p>\n          <p *ngIf=\"formGroup.controls.contactDetails.controls.mobile.errors.minlength\">Mobile Number must be 8 characters long, we need another {{formGroup.controls.contactDetails.controls.mobile.errors.minlength.requiredLength - formGroup.controls.contactDetails.controls.mobile.errors.minlength.actualLength}} characters </p>\n      </span>\n      </div>\n    </div>\n    <div formArrayName=\"hobbies\">\n      <button class=\"btn btn-primary\" (click)=\"addHobbies()\">Add Hobbies</button>\n      <div class=\"form-group\" *ngFor=\"let hobby of formGroup.get('hobbies').controls;let i=index\">\n        <input type=\"text\" [formControlName]=\"i\" class=\"form-control\">\n        <span class=\"help-block\" *ngIf=\"!formGroup.get('hobbies.'+i).valid && formGroup.get('hobbies.'+i).touched\">Please enter a valid value !</span>\n      </div>\n    </div>\n    <div class=\"radio\" *ngFor=\"let gender of genders\">\n      <label for=\"gender\">\n      <input type=\"radio\" [value]=\"gender\" formControlName=\"gender\">{{gender}}\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"comment\">Comment</label>\n      <textarea class=\"form-control\" formControlName=\"comment\" rows=\"3\"></textarea>\n      <small class=\"form-text text-muted\">\n<span>{{ 100 - formGroup.value.comment.length }}</span> characters left\n</small>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!formGroup.valid\">Go</button>\n    <button type=\"reset\" class=\"btn btn-primary\" [disabled]=\"!formGroup.valid\">Clear</button>\n  </form>\n</div>\n<hr/>\n<hr/>\n<ul>\n<li *ngFor=\"let search of searches\">{{ search }}</li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/reactive-forms/reactive-forms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactiveFormsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReactiveFormsComponent = /** @class */ (function () {
    function ReactiveFormsComponent(formBuilder) {
        var _this = this;
        this.genders = ['Male', 'Female'];
        this.restrictUserNames = ['Siva', 'Nulakani', 'Khayati'];
        this.restrictEmailList = ['sivaram.nulakani@gmail.com'];
        this.searches = [];
        this.formGroup = formBuilder.group({
            'contactDetails': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                'mobile': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](9951541007, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(15)])
            }),
            'userName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(15), this.restrictUserAccess.bind(this)]),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email], this.restrictEmailAccess),
            'gender': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('Male'),
            'hobbies': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */]([]),
            'comment': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('Sivaramakrishna', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required)
        });
        //this.formGroup.statusChanges.subscribe((data) => console.log('$$$$$$$$$$$$$$$' + data));
        this.formGroup.valueChanges.filter(function (data) { return _this.formGroup.valid; }).map(function (data) {
            data.lastUpdateTS = new Date();
            return data;
        }).subscribe(function (data) { return console.log(JSON.stringify(data)); });
    }
    ReactiveFormsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchField = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.searchField.valueChanges.debounceTime(400).distinctUntilChanged().filter(function (data) {
            if (data != null || data == "")
                return data;
        }).subscribe(function (data) {
            if (_this.searches.indexOf(data) == -1)
                _this.searches.push(data);
        });
    };
    ReactiveFormsComponent.prototype.regForm = function () {
        if (this.formGroup.valid) {
            console.log(this.formGroup);
            console.log(">> formGroup has been submitted");
        }
    };
    ReactiveFormsComponent.prototype.addHobbies = function () {
        var hobby = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required);
        this.formGroup.get('hobbies').push(hobby);
    };
    ReactiveFormsComponent.prototype.restrictUserAccess = function (control) {
        if (this.restrictUserNames.indexOf(control.value) != -1) {
            return { 'UserHasBeenRestricted': true };
        }
        else {
            return null;
        }
    };
    ReactiveFormsComponent.prototype.restrictEmailAccess = function (control) {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === 'sivaram.nulakani@gmail.com') {
                    resolve({ 'emailHasbeenForbidden': true });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
        return promise;
    };
    ReactiveFormsComponent.prototype.onReset = function () {
        this.formGroup.reset();
    };
    ReactiveFormsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reactive-forms',
            template: __webpack_require__("../../../../../src/app/reactive-forms/reactive-forms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reactive-forms/reactive-forms.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewEncapsulation */].None
            //encapsulation: ViewEncapsulation.Emulated
            //encapsulation: ViewEncapsulation.Native
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], ReactiveFormsComponent);
    return ReactiveFormsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_user_auth_sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/user/auth/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_user_auth_sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/user/auth/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");




var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3_app_home_home_component__["a" /* HomeComponent */] },
    {
        path: 'signup', component: __WEBPACK_IMPORTED_MODULE_0_app_user_user_component__["a" /* UserComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_2_app_user_auth_sign_up_sign_up_component__["a" /* SignUpComponent */] }]
    },
    {
        path: 'login', component: __WEBPACK_IMPORTED_MODULE_0_app_user_user_component__["a" /* UserComponent */],
        children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_1_app_user_auth_sign_in_sign_in_component__["a" /* SignInComponent */] }]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];


/***/ }),

/***/ "../../../../../src/app/server-http-operations/server-http-operations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n  font-weight: 300;\r\n}\r\n\r\np {\r\n  color: #999;\r\n}\r\n\r\nstrong {\r\n  color: #333;\r\n}\r\n\r\n#wrapper {\r\n  width: 100%;\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  padding: 30px 0;\r\n}\r\n\r\n.page-head-image {\r\n  \r\n}\r\n\r\n.page-head-image img {\r\n  border-radius: 50%;\r\n}\r\n\r\n#form-trabalhe {\r\n  margin-top: 30px;\r\n  text-align: left;\r\n}\r\n\r\nlabel {\r\n  font-weight: normal;\r\n  margin-top: 15px;\r\n}\r\n\r\ninput {\r\n  border: 2px solid #CCC !important;\r\n  height: 35px;\r\n  border-radius: 3px;\r\n  max-width: 100%;\r\n}\r\n\r\n.input-group-addon {\r\n  border: 2px solid #CCC !important;\r\n  border-right: 0px !important;\r\n}\r\n\r\n.btn {\r\n  border: 0;\r\n  border-radius: 3px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.form-group {\r\n  margin-bottom: 0;\r\n  text-align: left;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/server-http-operations/server-http-operations.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" class=\"container\">\n  <figure class=\"page-head-image\">\n    <img src=\"http://loremflickr.com/300/300/person\" />\n  </figure>\n  <form [formGroup]=\"serverForm\" (ngSubmit)=\"onSaveServerDetails()\">\n    <fieldset>\n      <div class=\"form-group\">\n        <div class=\"col-md-6\">\n          <label class=\"control-label\" for=\"serverName\">Server Name</label>\n          <input name=\"serverName\" formControlName=\"serverName\" class=\"form-control\" placeholder=\"Enter Server Name\" type=\"text\">\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"col-md-6\">\n          <label class=\"control-label\" for=\"surname\">server Id</label>\n          <input name=\"serverId\" formControlName=\"serverId\" class=\"form-control\" placeholder=\"Enter Id\" type=\"text\">\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"col-md-6\">\n          <label class=\"control-label\" for=\"district\">status</label>\n          <input name=\"status\" class=\"form-control\" formControlName=\"status\" placeholder=\"Enter server status\" type=\"text\">\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block info\">Send</button>\n        </div>\n        <div class=\"col-md-6\">\n          <button (click)=\"getServerDetails()\" class=\"btn btn-primary btn-lg btn-block info\">Get Details</button>\n        </div>\n      </div>\n    </fieldset>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/server-http-operations/server-http-operations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerHttpOperationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_server_http_service_service__ = __webpack_require__("../../../../../src/app/services/server-http-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServerHttpOperationsComponent = /** @class */ (function () {
    function ServerHttpOperationsComponent(serverHttpServiceService) {
        this.serverHttpServiceService = serverHttpServiceService;
        this.serverName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.serverId = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.serverForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            serverName: this.serverName, serverId: this.serverId, status: this.status
        });
    }
    ServerHttpOperationsComponent.prototype.ngOnInit = function () {
        // this.serverForm.valueChanges.subscribe(data => console.log(data));
        //this.getServerDetails();
    };
    ServerHttpOperationsComponent.prototype.onSaveServerDetails = function () {
        this.serverHttpServiceService.saveServerDetails(this.serverForm).subscribe(function (response) { return console.log(response.json()); }, function (error) { return console.log('server status ==>' + error); });
    };
    ServerHttpOperationsComponent.prototype.getServerDetails = function () {
        this.serverHttpServiceService.getServerDetails().subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    ServerHttpOperationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-server-http-operations',
            template: __webpack_require__("../../../../../src/app/server-http-operations/server-http-operations.component.html"),
            styles: [__webpack_require__("../../../../../src/app/server-http-operations/server-http-operations.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_server_http_service_service__["a" /* ServerHttpServiceService */]])
    ], ServerHttpOperationsComponent);
    return ServerHttpOperationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = /** @class */ (function () {
    function MessageService() {
    }
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/server-http-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerHttpServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServerHttpServiceService = /** @class */ (function () {
    //serverUrl = "http://httpbin.org/"
    function ServerHttpServiceService(http) {
        this.http = http;
        this.serverUrl = "https://httpmodule-d9260.firebaseio.com/data";
    }
    ServerHttpServiceService.prototype.saveServerDetails = function (serverDetails) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/xml' });
        // console.log(JSON.stringify(serverDetails));
        return this.http.post("" + this.serverUrl, serverDetails.value, { headers: headers });
    };
    ServerHttpServiceService.prototype.getServerDetails = function () {
        return this.http.get("" + this.serverUrl).map(function (data) {
            var response = data.json();
            return response;
        }).catch(function (error) {
            console.log('>>>>>>>>>>>' + error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
        });
    };
    ServerHttpServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ServerHttpServiceService);
    return ServerHttpServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/status-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusPipePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StatusPipePipe = /** @class */ (function () {
    function StatusPipePipe() {
    }
    StatusPipePipe.prototype.transform = function (value, serverStatus, currentStatus) {
        console.log('serverStatus==>' + serverStatus);
        if (value.length === 0 || serverStatus === '')
            return value;
        var filterDetails = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            console.log('serverStatus2==>' + item[currentStatus]);
            if (item[currentStatus] === serverStatus) {
                filterDetails.push(item);
            }
        }
        return filterDetails;
    };
    StatusPipePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'statusPipe',
            pure: false
        })
    ], StatusPipePipe);
    return StatusPipePipe;
}());



/***/ }),

/***/ "../../../../../src/app/template-driven/template-driven.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched {\r\n    border: 1px solid red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/template-driven/template-driven.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"text-align: center\">Template Driven Form !!!</h3>\n<div class=\"container\">\n  <form (ngSubmit)=\"onSubmit(form)\" #form=\"ngForm\">\n    <div calss=\"user-data\" #userData=\"ngModelGroup\" ngModelGroup=\"userData\">\n      <div class=\"form-group\">\n        <label for=\"userName\">UserName</label>\n        <input type=\"text\" class=\"form-control\" name=\"userName\" id=\"userName\" required #un=\"ngModel\" ngModel>\n        <span class=\"help-block\" *ngIf=\"!un.valid && un.touched\">Please enter a valid value !</span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" email required #mail=\"ngModel\" ngModel>\n        <span class=\"help-block\" *ngIf=\"!mail.valid && mail.touched\">Please enter a valid value !</span>\n      </div>\n      <span class=\"help-block\" *ngIf=\"!userData.valid && userData.touched\">Please enter a valid value !</span>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"fruit\">Fruit Names</label>\n      <select id=\"fruits\" name=\"fruits\" class=\"form-control\" [(ngModel)]=\"defaultOption\">\n        <option  *ngFor=\"let optionItem of optionItems\" [value]=\"optionItem\">{{optionItem}}</option>\n      </select>\n    </div>\n    <div class=\"radio\" *ngFor=\"let color of colors\">\n      <label>\n       <input type=\"radio\" [value]=\"color\" ngModel name=\"colors\" required>{{color}}\n       </label>\n    </div>\n    <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary\">Submit</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/template-driven/template-driven.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateDrivenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateDrivenComponent = /** @class */ (function () {
    function TemplateDrivenComponent() {
        this.optionItems = ["Apple", "Mango", "Grapes"];
        this.defaultOption = this.optionItems[0];
        this.colors = ['Red', 'Green', 'Blue'];
    }
    TemplateDrivenComponent.prototype.onSubmit = function (form) {
        form.form.patchValue({ userData: { userName: 'Siva', email: "siva@gmail.com" }, fruits: 'Apple' });
        console.log(form.value.userName);
        //form.reset();
    };
    TemplateDrivenComponent.prototype.click = function () {
        console.log(": click test has been submitted");
    };
    TemplateDrivenComponent.prototype.ngOnInit = function () {
        console.log(">>>>>>>>: ngOnInit has been submitted");
    };
    TemplateDrivenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-template-driven',
            template: __webpack_require__("../../../../../src/app/template-driven/template-driven.component.html"),
            styles: [__webpack_require__("../../../../../src/app/template-driven/template-driven.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TemplateDrivenComponent);
    return TemplateDrivenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signUpUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.signInUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_0_firebase__["auth"]().signInWithEmailAndPassword(email, password);
    };
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/user/auth/sign-in/sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: green;\r\n    opacity: 1; /* Firefox */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/auth/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoginError\" class=\"red-text center error-message\">\n    <i class=\"material-icons\">error</i> Incorrect username or password\n</div>\n<form #loginForm=\"ngForm\" class=\"col s12 white\" (ngSubmit)=\"OnSubmit(email.value,Password.value)\">\n   <div class=\"row\">\n     <div class=\"input-field col s12\">\n       <i class=\"material-icons prefix\">account_circle</i>\n       <input type=\"email\" #email class=\"validate\" ngModel name=\"UserName\"  required>\n          <label data-error=\"Invalid email!\">Email</label>\n     </div>\n   </div>\n   <div class=\"row\">\n      <div class=\"input-field col s12\">\n        <i class=\"material-icons prefix\">vpn_key</i>\n        <input type=\"password\" class=\"validate\" #Password ngModel name=\"Password\" required>\n      <label [attr.data-error]=\"Password.errors!=null?(Password.errors.required?'Required field!':'Minimum 3 characters needed'):''\">Password</label>\n      </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <button [disabled]=\"!loginForm.valid\" class=\"btn-large btn-submit\" type=\"submit\">Login</button>\n        </div>\n      </div>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/user/auth/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_user_auth_auth_service__ = __webpack_require__("../../../../../src/app/user/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInComponent = /** @class */ (function () {
    function SignInComponent(/* private userService: UserService,*/ toaster, router, authService) {
        this.toaster = toaster;
        this.router = router;
        this.authService = authService;
        this.isLoginError = false;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.OnSubmit = function (email, password) {
        //    this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
        //     localStorage.setItem('userToken',data.access_token);
        //     this.router.navigate(['/home']);
        //   },
        //   (err : HttpErrorResponse)=>{
        //     this.isLoginError = true;
        //   });
        // }
        var _this = this;
        this.authService.signInUser(email, password).then(function (data) {
            console.log(data);
            _this.router.navigate(['/home']);
        }).catch(function (err) {
            console.log('error ===>' + err);
            _this.toaster.error('Invalid credentials');
        });
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-in',
            template: __webpack_require__("../../../../../src/app/user/auth/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/auth/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2_app_user_auth_auth_service__["a" /* AuthService */]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/auth/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "label { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: green;\r\n    opacity: 1; /* Firefox */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/auth/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"col s12 white\" #uf=\"ngForm\" (ngSubmit)=\"OnSubmit(Email.value,Password.value)\">\n  <div class=\"row\">\n    <div class=\"input-field col s6\">\n      <input class=\"validate\" type=\"text\" name=\"UserName\" #UserName=\"ngModel\" ngModel required>\n      <label data-error=\"Required field!\">UserName</label>\n    </div>\n    <div class=\"input-field col s6\">\n      <input class=\"validate\" type=\"password\" name=\"Password\" #Password=\"ngModel\" ngModel required minlength=\"3\">\n      <label [attr.data-error]=\"Password.errors!=null?(Password.errors.required?'Required field!':'Minimum 3 characters needed'):''\">Password</label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <input class=\"validate\" type=\"text\" name=\"Email\" #Email=\"ngModel\" ngModel [pattern]=\"emailPattern\">\n      <label data-error=\"Invalid email!\">Email</label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"input-field col s6\">\n      <input type=\"text\" name=\"FirstName\" #FirstName=\"ngModel\" ngModel>\n      <label>First Name</label>\n    </div>\n    <div class=\"input-field col s6\">\n      <input type=\"text\" name=\"LastName\" #LastName=\"ngModel\" ngModel>\n      <label>Last Name</label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <button [disabled]=\"!uf.valid\" class=\"btn-large btn-submit\" type=\"submit\">Submit</button>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/user/auth/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_user_auth_auth_service__ = __webpack_require__("../../../../../src/app/user/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(/* private userService: UserService,*/ router, toastr, authService) {
        this.router = router;
        this.toastr = toastr;
        this.authService = authService;
        /* user: User; */
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    SignUpComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        /* this.user = {
          UserName: '',
          Password: '',
          Email: '',
          FirstName: '',
          LastName: ''
        } */
    };
    SignUpComponent.prototype.OnSubmit = function (email, password) {
        var _this = this;
        /* this.userService.registerUser(form.value)
          .subscribe((data: any) => {
            if (data.Succeeded == true) {
              this.resetForm(form);
              this.toastr.success('User registration successful');
            }
            else
              this.toastr.error(data.Errors[0]);
          }); */
        this.authService.signUpUser(email, password).then(function (data) {
            console.log(data);
            _this.toastr.success('User registration successful');
            _this.router.navigate(['/login']);
        }).catch(function (err) {
            console.log(err);
            _this.toastr.error('User has been registered already');
        });
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-up',
            template: __webpack_require__("../../../../../src/app/user/auth/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/auth/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1_app_user_auth_auth_service__["a" /* AuthService */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-tabs{\r\n    background-color: green;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"position: absolute\">\n  <div class=\"row\">\n    <div class=\"col s8 offset-s2\">\n      <div class=\"card grey lighten-2\">\n        <div class=\"card-tabs\">\n          <ul class=\"tabs tabs-fixed-width tabs-transparent\">\n            <li class=\"tab\">\n              <a routerLink='/login' routerLinkActive='active'>Sign In</a>\n            </li>\n            <li class=\"tab\">\n              <a  routerLink='/signup' routerLinkActive='active'>Sign Up</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"card-content white\">\n          <div class=\"row\">\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map