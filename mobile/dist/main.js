(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_markets_markets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/markets/markets.component */ "./src/app/pages/markets/markets.component.ts");
/* harmony import */ var _pages_assets_assets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/assets/assets.component */ "./src/app/pages/assets/assets.component.ts");
/* harmony import */ var _pages_trade_trade_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/trade/trade.component */ "./src/app/pages/trade/trade.component.ts");
/* harmony import */ var _pages_account_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/account/account.component */ "./src/app/pages/account/account.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/aboutus/aboutus.component */ "./src/app/pages/aboutus/aboutus.component.ts");
/* harmony import */ var _pages_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/announcements/announcements.component */ "./src/app/pages/announcements/announcements.component.ts");
/* harmony import */ var _pages_customer_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/customer/customer.component */ "./src/app/pages/customer/customer.component.ts");
/* harmony import */ var _pages_fees_fees_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/fees/fees.component */ "./src/app/pages/fees/fees.component.ts");
/* harmony import */ var _pages_knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/knowledge/knowledge.component */ "./src/app/pages/knowledge/knowledge.component.ts");
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/news/news.component */ "./src/app/pages/news/news.component.ts");
/* harmony import */ var _pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/privacy/privacy.component */ "./src/app/pages/privacy/privacy.component.ts");
/* harmony import */ var _pages_securitystrategy_securitystrategy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/securitystrategy/securitystrategy.component */ "./src/app/pages/securitystrategy/securitystrategy.component.ts");
/* harmony import */ var _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/terms/terms.component */ "./src/app/pages/terms/terms.component.ts");
/* harmony import */ var _pages_riskremainder_riskremainder_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/riskremainder/riskremainder.component */ "./src/app/pages/riskremainder/riskremainder.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");

















var routes = [
    { path: '', component: _pages_markets_markets_component__WEBPACK_IMPORTED_MODULE_1__["MarketsComponent"] },
    { path: 'markets', component: _pages_markets_markets_component__WEBPACK_IMPORTED_MODULE_1__["MarketsComponent"] },
    { path: 'assets', component: _pages_assets_assets_component__WEBPACK_IMPORTED_MODULE_2__["AssetsComponent"] },
    { path: 'trade', component: _pages_trade_trade_component__WEBPACK_IMPORTED_MODULE_3__["TradeComponent"] },
    { path: 'quickLinks', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: 'aboutus', component: _pages_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_6__["AboutusComponent"] },
    { path: 'customer', component: _pages_customer_customer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"] },
    { path: 'announcement', component: _pages_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_7__["AnnouncementsComponent"] },
    { path: 'fees', component: _pages_fees_fees_component__WEBPACK_IMPORTED_MODULE_9__["FeesComponent"] },
    { path: 'knowledge', component: _pages_knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_10__["KnowledgeComponent"] },
    { path: 'privacy', component: _pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_12__["PrivacyComponent"] },
    { path: 'securitystrategy', component: _pages_securitystrategy_securitystrategy_component__WEBPACK_IMPORTED_MODULE_13__["SecuritystrategyComponent"] },
    { path: 'terms', component: _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_14__["TermsComponent"] },
    { path: 'news', component: _pages_news_news_component__WEBPACK_IMPORTED_MODULE_11__["NewsComponent"] },
    { path: 'riskremainder', component: _pages_riskremainder_riskremainder_component__WEBPACK_IMPORTED_MODULE_15__["RiskremainderComponent"] },
    { path: 'trade/:pair', component: _pages_trade_trade_component__WEBPACK_IMPORTED_MODULE_3__["TradeComponent"] },
    { path: 'accounts', component: _pages_account_account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css.shim.ngstyle.js":
/*!***************************************************!*\
  !*** ./src/app/app.component.css.shim.ngstyle.js ***!
  \***************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.css.shim.ngstyle */ "./src/app/app.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_bottombar_bottombar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/bottombar/bottombar.component.ngfactory */ "./src/app/component/bottombar/bottombar.component.ngfactory.js");
/* harmony import */ var _component_bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/bottombar/bottombar.component */ "./src/app/component/bottombar/bottombar.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 













var styles_AppComponent = [_app_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "ngx-spinner", [["bdColor", "rgba(0,0,0,0.6)"], ["color", "#fff"], ["size", "large"], ["type", "ball-atom"]], [[8, "fullScreen", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [["style", "color: white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["src", "assets/images/loader.gif"]], null, null, null, null, null))], null, function (_ck, _v) { var currVal_0 = true; _ck(_v, 0, 0, currVal_0); }); }
function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-bottombar", [], null, null, null, _component_bottombar_bottombar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_BottombarComponent_0"], _component_bottombar_bottombar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_BottombarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _component_bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_3__["BottombarComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AppComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_0 = _co.visible; _ck(_v, 3, 0, currVal_0); _ck(_v, 5, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8503296, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_11__["NgxSpinnerService"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_12__["DeviceDetectorService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(apiService, spinner, deviceService, document, cdr) {
        this.apiService = apiService;
        this.spinner = spinner;
        this.deviceService = deviceService;
        this.document = document;
        this.cdr = cdr;
        this.title = 'bdamx-mobile';
        this.visible = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var isMobile = this.deviceService.isMobile();
        if (isMobile) {
            // this.document.location.href = 'http://BDAMX_Revampback.osiztechnologies.in';
        }
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this.apiService.spinners.subscribe(function (result) {
            _this.visible = result;
            if (result) {
                _this.spinner.show();
            }
            else {
                _this.spinner.hide();
            }
        });
        this.cdr.detectChanges();
    };
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _pages_markets_markets_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/markets/markets.component.ngfactory */ "./src/app/pages/markets/markets.component.ngfactory.js");
/* harmony import */ var _pages_assets_assets_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/assets/assets.component.ngfactory */ "./src/app/pages/assets/assets.component.ngfactory.js");
/* harmony import */ var _pages_trade_trade_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/trade/trade.component.ngfactory */ "./src/app/pages/trade/trade.component.ngfactory.js");
/* harmony import */ var _pages_about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/about/about.component.ngfactory */ "./src/app/pages/about/about.component.ngfactory.js");
/* harmony import */ var _pages_aboutus_aboutus_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/aboutus/aboutus.component.ngfactory */ "./src/app/pages/aboutus/aboutus.component.ngfactory.js");
/* harmony import */ var _pages_customer_customer_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/customer/customer.component.ngfactory */ "./src/app/pages/customer/customer.component.ngfactory.js");
/* harmony import */ var _pages_announcements_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/announcements/announcements.component.ngfactory */ "./src/app/pages/announcements/announcements.component.ngfactory.js");
/* harmony import */ var _pages_fees_fees_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/fees/fees.component.ngfactory */ "./src/app/pages/fees/fees.component.ngfactory.js");
/* harmony import */ var _pages_knowledge_knowledge_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/knowledge/knowledge.component.ngfactory */ "./src/app/pages/knowledge/knowledge.component.ngfactory.js");
/* harmony import */ var _pages_privacy_privacy_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/privacy/privacy.component.ngfactory */ "./src/app/pages/privacy/privacy.component.ngfactory.js");
/* harmony import */ var _pages_securitystrategy_securitystrategy_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/securitystrategy/securitystrategy.component.ngfactory */ "./src/app/pages/securitystrategy/securitystrategy.component.ngfactory.js");
/* harmony import */ var _pages_terms_terms_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/terms/terms.component.ngfactory */ "./src/app/pages/terms/terms.component.ngfactory.js");
/* harmony import */ var _pages_news_news_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/news/news.component.ngfactory */ "./src/app/pages/news/news.component.ngfactory.js");
/* harmony import */ var _pages_riskremainder_riskremainder_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/riskremainder/riskremainder.component.ngfactory */ "./src/app/pages/riskremainder/riskremainder.component.ngfactory.js");
/* harmony import */ var _pages_account_account_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/account/account.component.ngfactory */ "./src/app/pages/account/account.component.ngfactory.js");
/* harmony import */ var _pages_contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/contact/contact.component.ngfactory */ "./src/app/pages/contact/contact.component.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_modal_ngx_bootstrap_modal_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../node_modules/ngx-bootstrap/modal/ngx-bootstrap-modal.ngfactory */ "./node_modules/ngx-bootstrap/modal/ngx-bootstrap-modal.ngfactory.js");
/* harmony import */ var _node_modules_ngx_bootstrap_dropdown_ngx_bootstrap_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../node_modules/ngx-bootstrap/dropdown/ngx-bootstrap-dropdown.ngfactory */ "./node_modules/ngx-bootstrap/dropdown/ngx-bootstrap-dropdown.ngfactory.js");
/* harmony import */ var _node_modules_ngx_toastr_ngx_toastr_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../node_modules/ngx-toastr/ngx-toastr.ngfactory */ "./node_modules/ngx-toastr/ngx-toastr.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm5/ng-recaptcha.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-bootstrap/positioning */ "./node_modules/ngx-bootstrap/positioning/fesm5/ngx-bootstrap-positioning.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm5/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _pages_markets_markets_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/markets/markets.component */ "./src/app/pages/markets/markets.component.ts");
/* harmony import */ var _pages_assets_assets_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/assets/assets.component */ "./src/app/pages/assets/assets.component.ts");
/* harmony import */ var _pages_trade_trade_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/trade/trade.component */ "./src/app/pages/trade/trade.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/aboutus/aboutus.component */ "./src/app/pages/aboutus/aboutus.component.ts");
/* harmony import */ var _pages_customer_customer_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/customer/customer.component */ "./src/app/pages/customer/customer.component.ts");
/* harmony import */ var _pages_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/announcements/announcements.component */ "./src/app/pages/announcements/announcements.component.ts");
/* harmony import */ var _pages_fees_fees_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/fees/fees.component */ "./src/app/pages/fees/fees.component.ts");
/* harmony import */ var _pages_knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/knowledge/knowledge.component */ "./src/app/pages/knowledge/knowledge.component.ts");
/* harmony import */ var _pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/privacy/privacy.component */ "./src/app/pages/privacy/privacy.component.ts");
/* harmony import */ var _pages_securitystrategy_securitystrategy_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/securitystrategy/securitystrategy.component */ "./src/app/pages/securitystrategy/securitystrategy.component.ts");
/* harmony import */ var _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/terms/terms.component */ "./src/app/pages/terms/terms.component.ts");
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pages/news/news.component */ "./src/app/pages/news/news.component.ts");
/* harmony import */ var _pages_riskremainder_riskremainder_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./pages/riskremainder/riskremainder.component */ "./src/app/pages/riskremainder/riskremainder.component.ts");
/* harmony import */ var _pages_account_account_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./pages/account/account.component */ "./src/app/pages/account/account.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




























































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵEmptyOutletComponentNgFactory"], _pages_markets_markets_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MarketsComponentNgFactory"], _pages_assets_assets_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["AssetsComponentNgFactory"], _pages_trade_trade_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["TradeComponentNgFactory"], _pages_about_about_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["AboutComponentNgFactory"], _pages_aboutus_aboutus_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["AboutusComponentNgFactory"], _pages_customer_customer_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["CustomerComponentNgFactory"], _pages_announcements_announcements_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["AnnouncementsComponentNgFactory"], _pages_fees_fees_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["FeesComponentNgFactory"], _pages_knowledge_knowledge_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["KnowledgeComponentNgFactory"], _pages_privacy_privacy_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["PrivacyComponentNgFactory"], _pages_securitystrategy_securitystrategy_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["SecuritystrategyComponentNgFactory"], _pages_terms_terms_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["TermsComponentNgFactory"], _pages_news_news_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["NewsComponentNgFactory"], _pages_riskremainder_riskremainder_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RiskremainderComponentNgFactory"], _pages_account_account_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["AccountComponentNgFactory"], _pages_contact_contact_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["ContactComponentNgFactory"], _node_modules_ngx_bootstrap_modal_ngx_bootstrap_modal_ngfactory__WEBPACK_IMPORTED_MODULE_20__["ModalBackdropComponentNgFactory"], _node_modules_ngx_bootstrap_modal_ngx_bootstrap_modal_ngfactory__WEBPACK_IMPORTED_MODULE_20__["ModalContainerComponentNgFactory"], _node_modules_ngx_bootstrap_dropdown_ngx_bootstrap_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_21__["BsDropdownContainerComponentNgFactory"], _node_modules_ngx_toastr_ngx_toastr_ngfactory__WEBPACK_IMPORTED_MODULE_22__["ToastNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_23__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_m"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_24__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_24__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_24__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_26__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_26__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_platform_browser_animations_animations_c"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_26__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_platform_browser_animations_animations_a"], [_angular_common__WEBPACK_IMPORTED_MODULE_24__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_26__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_26__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_platform_browser_animations_animations_d"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_26__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_24__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_29__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_29__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_29__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_29__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_n"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["RecaptchaLoaderService"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["RecaptchaLoaderService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], [2, ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["RECAPTCHA_LANGUAGE"]], [2, ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["RECAPTCHA_BASE_URL"]], [2, ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["RECAPTCHA_NONCE"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_30__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_32__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_33__["PositioningService"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_33__["PositioningService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_34__["ComponentLoaderFactory"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_34__["ComponentLoaderFactory"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], ngx_bootstrap_positioning__WEBPACK_IMPORTED_MODULE_33__["PositioningService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_35__["BsModalService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_35__["BsModalService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_34__["ComponentLoaderFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_36__["BsDropdownState"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_36__["BsDropdownState"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, ngx_socket_io__WEBPACK_IMPORTED_MODULE_37__["Socket"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_37__["ɵa"], [ngx_socket_io__WEBPACK_IMPORTED_MODULE_37__["ɵb"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_device_detector__WEBPACK_IMPORTED_MODULE_38__["DeviceDetectorService"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_38__["DeviceDetectorService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _services_api_service__WEBPACK_IMPORTED_MODULE_39__["ApiService"], _services_api_service__WEBPACK_IMPORTED_MODULE_39__["ApiService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_cookie_service__WEBPACK_IMPORTED_MODULE_40__["CookieService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_40__["CookieService"], [_angular_common__WEBPACK_IMPORTED_MODULE_24__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_24__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_29__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_24__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_24__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_24__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_24__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_24__["LocationStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTES"], function () { return [[{ path: "", component: _pages_markets_markets_component__WEBPACK_IMPORTED_MODULE_41__["MarketsComponent"] }, { path: "markets", component: _pages_markets_markets_component__WEBPACK_IMPORTED_MODULE_41__["MarketsComponent"] }, { path: "assets", component: _pages_assets_assets_component__WEBPACK_IMPORTED_MODULE_42__["AssetsComponent"] }, { path: "trade", component: _pages_trade_trade_component__WEBPACK_IMPORTED_MODULE_43__["TradeComponent"] }, { path: "quickLinks", component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_44__["AboutComponent"] }, { path: "aboutus", component: _pages_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_45__["AboutusComponent"] }, { path: "customer", component: _pages_customer_customer_component__WEBPACK_IMPORTED_MODULE_46__["CustomerComponent"] }, { path: "announcement", component: _pages_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_47__["AnnouncementsComponent"] }, { path: "fees", component: _pages_fees_fees_component__WEBPACK_IMPORTED_MODULE_48__["FeesComponent"] }, { path: "knowledge", component: _pages_knowledge_knowledge_component__WEBPACK_IMPORTED_MODULE_49__["KnowledgeComponent"] }, { path: "privacy", component: _pages_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_50__["PrivacyComponent"] }, { path: "securitystrategy", component: _pages_securitystrategy_securitystrategy_component__WEBPACK_IMPORTED_MODULE_51__["SecuritystrategyComponent"] }, { path: "terms", component: _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_52__["TermsComponent"] }, { path: "news", component: _pages_news_news_component__WEBPACK_IMPORTED_MODULE_53__["NewsComponent"] }, { path: "riskremainder", component: _pages_riskremainder_riskremainder_component__WEBPACK_IMPORTED_MODULE_54__["RiskremainderComponent"] }, { path: "trade/:pair", component: _pages_trade_trade_component__WEBPACK_IMPORTED_MODULE_43__["TradeComponent"] }, { path: "accounts", component: _pages_account_account_component__WEBPACK_IMPORTED_MODULE_55__["AccountComponent"] }, { path: "contact", component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_56__["ContactComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_29__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_29__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_29__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_29__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_57__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_57__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_35__["ModalModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_35__["ModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_30__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["ɵa"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["ɵa"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["RecaptchaModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["RecaptchaModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["RecaptchaFormsModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_31__["RecaptchaFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_36__["BsDropdownModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_36__["BsDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, highcharts_angular__WEBPACK_IMPORTED_MODULE_58__["HighchartsChartModule"], highcharts_angular__WEBPACK_IMPORTED_MODULE_58__["HighchartsChartModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_socket_io__WEBPACK_IMPORTED_MODULE_37__["SocketIoModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_37__["SocketIoModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_toastr__WEBPACK_IMPORTED_MODULE_59__["ToastrModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_59__["ToastrModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_device_detector__WEBPACK_IMPORTED_MODULE_38__["DeviceDetectorModule"], ngx_device_detector__WEBPACK_IMPORTED_MODULE_38__["DeviceDetectorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_36__["BsDropdownConfig"], { autoClose: true, insideClick: false }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_socket_io__WEBPACK_IMPORTED_MODULE_37__["ɵb"], { url: "http://bdamx_revampback.osiztechnologies.in:2095" }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_toastr__WEBPACK_IMPORTED_MODULE_59__["TOAST_CONFIG"], { default: ngx_toastr__WEBPACK_IMPORTED_MODULE_59__["DefaultGlobalConfig"], config: {} }, [])]); });



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
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");


var config = { url: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/bottombar/bottombar.component.css.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/component/bottombar/bottombar.component.css.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".page-tab-footer[_ngcontent-%COMP%]{height:50px;background:#252d3a;position:fixed;left:0;bottom:0;width:100%;}\r\n.page-tab-footer[_ngcontent-%COMP%]   .page-tab[_ngcontent-%COMP%]{width:33.33%;max-width:33.33%;height:50px;}\r\n.page-tab-footer[_ngcontent-%COMP%]   .page-tab[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:0.8rem;font-weight:400;letter-spacing: 0.5px;}\r\n.page-tab-footer[_ngcontent-%COMP%]   .page-tab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;}\r\n.page-tab-footer[_ngcontent-%COMP%]   .page-tab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:20px;margin-bottom:2px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2JvdHRvbWJhci9ib3R0b21iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUIsWUFBWSxtQkFBbUIsZUFBZSxPQUFPLFNBQVMsV0FBVyxDQUFDO0FBQzNGLDJCQUEyQixhQUFhLGlCQUFpQixZQUFZLENBQUM7QUFDdEUsZ0NBQWdDLFdBQVcsaUJBQWlCLGdCQUFnQixzQkFBc0IsQ0FBQztBQUNuRyw2QkFBNkIsb0JBQWEsQUFBYixhQUFhLDRCQUFzQixBQUF0Qiw2QkFBc0IsQUFBdEIsc0JBQXNCLHdCQUF1QixBQUF2Qix1QkFBdUIseUJBQW1CLEFBQW5CLG1CQUFtQixDQUFDO0FBQzNHLGlDQUFpQyxZQUFZLGtCQUFrQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2JvdHRvbWJhci9ib3R0b21iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRhYi1mb290ZXJ7aGVpZ2h0OjUwcHg7YmFja2dyb3VuZDojMjUyZDNhO3Bvc2l0aW9uOmZpeGVkO2xlZnQ6MDtib3R0b206MDt3aWR0aDoxMDAlO31cclxuLnBhZ2UtdGFiLWZvb3RlciAucGFnZS10YWJ7d2lkdGg6MzMuMzMlO21heC13aWR0aDozMy4zMyU7aGVpZ2h0OjUwcHg7fVxyXG4ucGFnZS10YWItZm9vdGVyIC5wYWdlLXRhYiBzcGFue2NvbG9yOiNmZmY7Zm9udC1zaXplOjAuOHJlbTtmb250LXdlaWdodDo0MDA7bGV0dGVyLXNwYWNpbmc6IDAuNXB4O31cclxuLnBhZ2UtdGFiLWZvb3RlciAucGFnZS10YWIgYXtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyO31cclxuLnBhZ2UtdGFiLWZvb3RlciAucGFnZS10YWIgYSBpbWd7aGVpZ2h0OjIwcHg7bWFyZ2luLWJvdHRvbToycHg7fSJdfQ== */"];



/***/ }),

/***/ "./src/app/component/bottombar/bottombar.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/component/bottombar/bottombar.component.ngfactory.js ***!
  \**********************************************************************/
/*! exports provided: RenderType_BottombarComponent, View_BottombarComponent_0, View_BottombarComponent_Host_0, BottombarComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BottombarComponent", function() { return RenderType_BottombarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BottombarComponent_0", function() { return View_BottombarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BottombarComponent_Host_0", function() { return View_BottombarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottombarComponentNgFactory", function() { return BottombarComponentNgFactory; });
/* harmony import */ var _bottombar_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bottombar.component.css.shim.ngstyle */ "./src/app/component/bottombar/bottombar.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bottombar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bottombar.component */ "./src/app/component/bottombar/bottombar.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_BottombarComponent = [_bottombar_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BottombarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BottombarComponent, data: {} });

function View_BottombarComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "page-tab d-flex justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "a", [["class", ""], ["routerLink", "/assets"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["src", "assets/images/Assets.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Assets"]))], function (_ck, _v) { var currVal_2 = "/assets"; _ck(_v, 2, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).href; _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_BottombarComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "input", [["class", "form-control login"], ["formControlName", "email"], ["placeholder", "Enter Your Email"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_k"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null)], function (_ck, _v) { var currVal_7 = "email"; _ck(_v, 4, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_BottombarComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "form-group form-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "input", [["formControlName", "otp"], ["placeholder", "Enter Your OTP"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_k"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null)], function (_ck, _v) { var currVal_7 = "otp"; _ck(_v, 4, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_BottombarComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-secondary mx-2"], ["type", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Send OTP"]))], null, null); }
function View_BottombarComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-secondary mx-2"], ["data-dismiss", "modal"], ["data-target", "#BTCreg"], ["data-toggle", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["New User"]))], null, null); }
function View_BottombarComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-secondary mx-2"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.loginsite(_co.loginForm.controls) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Login"]))], null, null); }
function View_BottombarComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email is required"]))], null, null); }
function View_BottombarComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email must be a valid email address"]))], null, null); }
function View_BottombarComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "invalid-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BottombarComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BottombarComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.f1.email.errors.required; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.f1.email.errors.email; _ck(_v, 4, 0, currVal_1); }, null); }
function View_BottombarComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-secondary px-5 mx-2"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.OTPSend(_co.registerForm.controls) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Send OTP"]))], null, null); }
function View_BottombarComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "Button", [["class", "btn btn-secondary px-5 mx-2"], ["disabled", ""], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sending OTP "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-cog fa-spin"]], null, null, null, null, null))], null, null); }
function View_BottombarComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["OTP is required"]))], null, null); }
function View_BottombarComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "invalid-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BottombarComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.f1.otp.errors.required; _ck(_v, 2, 0, currVal_0); }, null); }
function View_BottombarComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-secondary mx-2"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Register"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.f1.email.valid && !_co.f1.otp.valid); _ck(_v, 0, 0, currVal_0); }); }
function View_BottombarComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-secondary mx-2"], ["disabled", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Registering "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-cog fa-spin"]], null, null, null, null, null))], null, null); }
function View_BottombarComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-secondary mx-2"], ["data-dismiss", "modal"], ["data-target", "#BTC_login"], ["data-toggle", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Registered User"]))], null, null); }
function View_BottombarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 15, "nav", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 14, "div", [["class", "page-tab-footer d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "div", [["class", "page-tab d-flex justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "a", [["class", ""], ["routerLink", "/markets"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "img", [["src", "assets/images/Market.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Market"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BottombarComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 5, "div", [["class", "page-tab d-flex justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "a", [["class", ""], ["routerLink", "/quickLinks"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "img", [["src", "assets/images/Quick-Links.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Quick Links"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "span", [["class", "home-search"], ["data-target", "#login1"], ["data-toggle", "modal"], ["id", "wallet_btn"], ["style", "display: none;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 0, "img", [["src", "assets/images/login-icon.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 29, "div", [["aria-labelledby", "dialog-static-name"], ["class", "modal fade login-modal"], ["data-dismiss", "modal"], ["id", "login1"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 28, "div", [["class", "modal-dialog modal-sm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 27, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "h5", [["class", "modal-title text-center text-light py-3 px-3 "], ["id", "exampleModalCenterTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Please use your BTC wallet to login"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close pull-right"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 20, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 14, "div", [["class", "row d-flex justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 13, "div", [["class", "walletoption walletoption3"], ["data-dismiss", "modal"], ["data-target", "#BTC_login"], ["data-toggle", "modal"], ["id", "move_next"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.radioChange("BTC") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 12, "a", [["class", "btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 8, "label", [["class", "radiocontainer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 6, "input", [["name", "walletSeleted"], ["type", "radio"], ["value", "BTC"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onChange() !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).onTouched() !== false);
        ad = (pd_5 && ad);
    } if (("ngModelChange" === en)) {
        var pd_6 = ((_co.walletSeleted = $event) !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_j"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]], { name: [0, "name"], value: [1, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 0, "span", [["class", "checkmark3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 0, "img", [["src", "assets/images/graph-1.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "h6", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["BTC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 0, "div", [["class", "d-flex justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "h5", [["class", "text-center py-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Reminder"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 1, "h6", [["class", "text-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["As an asset-safe decentralized exchange, bdam.com will not have private keys of users in any cases"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 12, "div", [["aria-labelledby", "dialog-static-name"], ["class", "modal fade login-modal"], ["data-dismiss", "modal"], ["id", "login2"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 11, "div", [["class", "modal-dialog modal-sm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 10, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 1, "h5", [["class", "modal-title text-center text-light py-3 px-3 "], ["id", "exampleModalCenterTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ETH Wallet"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](54, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close pull-right"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 3, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 2, "div", [["class", "row d-flex justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 1, "h3", [["class", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\"Use this feature in desktop,it cannot be used in mobile.\""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 12, "div", [["aria-labelledby", "dialog-static-name"], ["class", "modal fade login-modal"], ["data-dismiss", "modal"], ["id", "login3"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 11, "div", [["class", "modal-dialog modal-sm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 10, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 1, "h5", [["class", "modal-title text-center text-light py-3 px-3 "], ["id", "exampleModalCenterTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["EOS Wallet"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close pull-right"], ["data-dismiss", "modal"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](68, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 3, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 2, "div", [["class", "row d-flex justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 1, "h3", [["class", "message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\"Use this feature in desktop,it cannot be used in mobile.\""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 26, "div", [["aria-labelledby", "dialog-static-name"], ["class", "modal fade login-modal"], ["data-dismiss", "modal"], ["id", "BTC_login"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 25, "div", [["class", "modal-dialog modal-sm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 24, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 1, "h5", [["class", "modal-title text-center text-light py-3 px-3 "], ["id", "exampleModalCenterTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["BTC Wallet"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close pull-right"], ["data-dismiss", "modal"], ["id", "cls_btn"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close_model() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 17, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 16, "div", [["class", "d-flex justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 15, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 87).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.loginOTP(_co.loginForm.controls) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](86, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](89, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BottombarComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BottombarComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](93, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 6, "div", [["class", "d-flex justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BottombarComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BottombarComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BottombarComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](100, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 51, "div", [["aria-labelledby", "dialog-static-name"], ["class", "modal fade login-modal"], ["id", "BTCreg"], ["role", "dialog"], ["tabindex", "-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 50, "div", [["class", "modal-dialog modal-sm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 49, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 1, "h5", [["class", "modal-title text-center text-light py-3 px-3 "], ["id", "exampleModalCenterTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["BTC Wallet"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close pull-right"], ["data-dismiss", "modal"], ["id", "cls_btn"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 0, null, null, 42, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](111, 0, null, null, 41, "div", [["class", "row d-flex justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 40, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 114).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 114).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.onSubmitreg() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](113, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](114, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](116, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](117, 0, null, null, 12, "div", [["class", "form-group form-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 9, "input", [["formControlName", "email"], ["pattern", ".+@.+\\..+"], ["placeholder", "Enter Your Email"], ["type", "text"]], [[1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 121)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 121).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 121)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 121)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](119, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](120, { "is-invalid": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](121, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](122, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], [], { pattern: [0, "pattern"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](125, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_k"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](127, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BottombarComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](129, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](130, 0, null, null, 4, "div", [["class", "d-flex justify-content-center mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BottombarComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](132, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BottombarComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](134, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](135, 0, null, null, 10, "div", [["class", "form-group form-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, null, 7, "input", [["formControlName", "otp"], ["placeholder", "Enter Your OTP"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 139)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 139).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 139)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 139)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](137, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](138, { "is-invalid": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](139, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](141, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_k"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](143, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BottombarComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](145, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](146, 0, null, null, 6, "div", [["class", "d-flex justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BottombarComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](148, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BottombarComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](150, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BottombarComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](152, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/markets"; _ck(_v, 4, 0, currVal_2); var currVal_3 = _co.showAssets; _ck(_v, 9, 0, currVal_3); var currVal_6 = "/quickLinks"; _ck(_v, 12, 0, currVal_6); var currVal_14 = "walletSeleted"; var currVal_15 = "BTC"; _ck(_v, 34, 0, currVal_14, currVal_15); var currVal_16 = "walletSeleted"; var currVal_17 = _co.walletSeleted; _ck(_v, 36, 0, currVal_16, currVal_17); var currVal_25 = _co.loginForm; _ck(_v, 87, 0, currVal_25); var currVal_26 = _co.newEmail; _ck(_v, 91, 0, currVal_26); var currVal_27 = (_co.otpstatus == 1); _ck(_v, 93, 0, currVal_27); var currVal_28 = (_co.otpstatus == 0); _ck(_v, 96, 0, currVal_28); var currVal_29 = (_co.otpstatus == 0); _ck(_v, 98, 0, currVal_29); var currVal_30 = (_co.otpstatus == 1); _ck(_v, 100, 0, currVal_30); var currVal_38 = _co.registerForm; _ck(_v, 114, 0, currVal_38); var currVal_47 = _ck(_v, 120, 0, (_co.submitted1 && _co.f1.email.errors)); _ck(_v, 119, 0, currVal_47); var currVal_48 = ".+@.+\\..+"; _ck(_v, 122, 0, currVal_48); var currVal_49 = "email"; _ck(_v, 125, 0, currVal_49); var currVal_50 = (_co.submitted1 && _co.f1.email.errors); _ck(_v, 129, 0, currVal_50); var currVal_51 = _co.regotp; _ck(_v, 132, 0, currVal_51); var currVal_52 = _co.regotp1; _ck(_v, 134, 0, currVal_52); var currVal_60 = _ck(_v, 138, 0, (_co.submitted1 && _co.f1.otp.errors)); _ck(_v, 137, 0, currVal_60); var currVal_61 = "otp"; _ck(_v, 141, 0, currVal_61); var currVal_62 = (_co.submitted1 && _co.f1.otp.errors); _ck(_v, 145, 0, currVal_62); var currVal_63 = _co.regotp2; _ck(_v, 148, 0, currVal_63); var currVal_64 = !_co.regotp2; _ck(_v, 150, 0, currVal_64); var currVal_65 = _co.regotp2; _ck(_v, 152, 0, currVal_65); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).href; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).target; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).href; _ck(_v, 11, 0, currVal_4, currVal_5); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassUntouched; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassTouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassPristine; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassDirty; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassValid; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassInvalid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).ngClassPending; _ck(_v, 32, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassUntouched; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassTouched; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassPristine; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassDirty; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassValid; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassInvalid; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 89).ngClassPending; _ck(_v, 85, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24); var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).ngClassUntouched; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).ngClassTouched; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).ngClassPristine; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).ngClassDirty; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).ngClassValid; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).ngClassInvalid; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).ngClassPending; _ck(_v, 112, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37); var currVal_39 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 122).pattern ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 122).pattern : null); var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 127).ngClassUntouched; var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 127).ngClassTouched; var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 127).ngClassPristine; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 127).ngClassDirty; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 127).ngClassValid; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 127).ngClassInvalid; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 127).ngClassPending; _ck(_v, 118, 0, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46); var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 143).ngClassUntouched; var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 143).ngClassTouched; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 143).ngClassPristine; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 143).ngClassDirty; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 143).ngClassValid; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 143).ngClassInvalid; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 143).ngClassPending; _ck(_v, 136, 0, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59); }); }
function View_BottombarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-bottombar", [], null, null, null, View_BottombarComponent_0, RenderType_BottombarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _bottombar_component__WEBPACK_IMPORTED_MODULE_5__["BottombarComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BottombarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-bottombar", _bottombar_component__WEBPACK_IMPORTED_MODULE_5__["BottombarComponent"], View_BottombarComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/component/bottombar/bottombar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/bottombar/bottombar.component.ts ***!
  \************************************************************/
/*! exports provided: BottombarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottombarComponent", function() { return BottombarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");






var BottombarComponent = /** @class */ (function () {
    function BottombarComponent(apiService, formBuilder, toastr, router, http) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.router = router;
        this.http = http;
        this.currencyData = [];
        this.recommended = [];
        this.usdVal = { 'EOS': '', 'BTC': '', 'ETH': '' };
        this.pairsData = [];
        this.newEmail = true;
        this.otpstatus = 0;
        this.regotp = true;
        this.regotp1 = false;
        this.submitted = false;
        this.submitted1 = false;
        this.regotp2 = true;
        this.logotp1 = false;
        this.showAssets = false;
    }
    BottombarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.loggedin.subscribe(function (result) {
            _this.showAssets = result;
        });
        if (localStorage.getItem('address')) {
            this.showAssets = true;
        }
        else {
            this.showAssets = false;
        }
        this.apiService.loader(true);
        this.apiService.get_pairs().subscribe(function (resData) {
            if (resData['status']) {
                _this.apiService.loader(false);
                var currencyDetails = resData['Message'];
                _this.currencyData = JSON.parse(JSON.stringify(currencyDetails));
                _this.currencyData.map(function (items) {
                    items.pairs.map(function (pairDetails) {
                        _this.apiService.get_USDValues().subscribe(function (resData) {
                            resData.map(function (items) {
                                if (pairDetails.pair.split('_')[0] === items.currencySymbol) {
                                    pairDetails.usdEql = items.EstimatedUSD * pairDetails.marketPrice;
                                }
                            });
                        });
                        _this.recommended.push(pairDetails);
                    });
                });
                _this.loadPairs(_this.currencyData[0]);
            }
        });
        this.apiService.get_USDValues().subscribe(function (resData) {
            resData.map(function (items) {
                _this.usdVal[items.currencySymbol] = items.EstimatedUSD;
            });
        });
        this.loginForm = this.formBuilder.group({
            otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
        });
        this.registerForm = this.formBuilder.group({
            otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
        });
    };
    Object.defineProperty(BottombarComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BottombarComponent.prototype, "f1", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    BottombarComponent.prototype.loadPairs = function (items) {
        this.pairsData = items.pairs;
        this.selectedCurrency = items.currency;
    };
    BottombarComponent.prototype.radioChange = function (event) {
        console.log(event);
        this.walletType = event;
        this.walletSeleted = event;
    };
    BottombarComponent.prototype.close_model = function () {
        var _this = this;
        var button = document.getElementById('cls_btn');
        button.click();
        var scrollToTop = window.setInterval(function () {
            _this.display = true;
            _this.display1 = false;
            _this.walletType = undefined;
            _this.walletSeleted = '';
            _this.newEmail = true;
            window.clearInterval(scrollToTop);
        }, 800);
    };
    BottombarComponent.prototype.openLogin = function () {
        var button = document.getElementById('wallet_btn');
        button.click();
    };
    BottombarComponent.prototype.loginOTP = function (datas) {
        var _this = this;
        // alert("Fsdafdsffd")
        if (datas.email.status == "INVALID") {
            this.toastr.error("Please enter email", 'ERROR');
        }
        else {
            this.logotp = true;
            this.newEmail = false;
            var obj = { email: datas.email.value };
            this.apiService.login_send(obj).subscribe(function (res) {
                if (res.status) {
                    _this.otpstatus = 1;
                    _this.toastr.success(res.Message, "SUCCESS");
                }
                else {
                    _this.newEmail = true;
                    _this.toastr.error(res.Message, 'ERROR');
                }
            });
        }
    };
    BottombarComponent.prototype.loginsite = function (datas) {
        var _this = this;
        if (datas.otp.status == "INVALID") {
            this.toastr.error("Please enter OTP", 'ERROR');
        }
        else {
            this.logotp1 = true;
            var obj = { email: datas.email.value, otp: datas.otp.value };
            this.apiService.login_site(obj).subscribe(function (res) {
                _this.logotp1 = false;
                if (res.status) {
                    _this.otpstatus = 0;
                    var button = document.getElementById('cls_btn');
                    button.click();
                    _this.toastr.success(res.Message, 'SUCCESS');
                    localStorage.setItem("address", res.originaladdress);
                    localStorage.setItem("original_address", res.originaladdress);
                    localStorage.setItem("Basecoin", _this.walletType);
                    _this.apiService.walletLogin(true);
                    _this.display = true;
                    _this.display1 = false;
                    _this.router.navigate(['/assets']);
                }
                else {
                    _this.toastr.error(res.Message, 'ERROR');
                }
            });
        }
    };
    BottombarComponent.prototype.OTPSend = function (datas) {
        var _this = this;
        if (datas.email.status == "INVALID") {
            this.toastr.error("Please enter email", 'ERROR');
        }
        else {
            this.regotp = false;
            this.regotp1 = true;
            var obj = { email: datas.email.value };
            this.apiService.send_otp(obj).subscribe(function (res) {
                _this.regotp1 = false;
                if (res.status) {
                    _this.toastr.success(res.Message, "SUCCESS");
                }
                else {
                    _this.regotp = true;
                    _this.toastr.error(res.Message, 'ERROR');
                }
            });
        }
    };
    BottombarComponent.prototype.onSubmitreg = function () {
        var _this = this;
        this.submitted1 = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        else {
            this.regotp2 = false;
            this.http.get('https://jsonip.com')
                .subscribe(function (data) {
                var obj = {
                    'email': _this.registerForm.value.email,
                    'otp': _this.registerForm.value.otp,
                    'ip': data.ip
                };
                _this.apiService.register_btc(obj).subscribe(function (res) {
                    if (res.status) {
                        _this.toastr.success(res.Message, "SUCCESS");
                        localStorage.setItem("address", res.address);
                        localStorage.setItem("original_address", res.address);
                        localStorage.setItem("Basecoin", _this.walletType);
                        _this.apiService.walletLogin(true);
                        var button = document.getElementById('cls_btn');
                        button.click();
                        _this.display = true;
                        _this.display1 = false;
                        _this.router.navigate(['/assets']);
                    }
                    else {
                        _this.regotp2 = true;
                        _this.toastr.error(res.Message, 'ERROR');
                    }
                });
            });
        }
    };
    return BottombarComponent;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/pages/about/about.component.css.shim.ngstyle.js ***!
  \*****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".cms-list-cnt[_ngcontent-%COMP%]{width:100%;padding:50px 15px;}\r\nh3.cms-list-heading[_ngcontent-%COMP%]{font-size:1rem;color:#fff;margin-bottom:5px;}\r\n.cms-list-cnt[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0px;}\r\n.cms-list-cnt[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%;margin-bottom:2px;display:block;list-style-type:none;}\r\n.cms-list-cnt[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:0.85rem;padding:8px 15px;background:rgba(255,255,255,0.1) url('/assets/images/next.png') no-repeat right 5px center;background-size:15px;width:100%;border-radius:5px;color:#b6c3d6;display:-webkit-box;display:flex;}\r\n.cms-list-cnt[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .cms-list-cnt[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus{text-decoration:none;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLFdBQVcsa0JBQWtCLENBQUM7QUFDNUMsb0JBQW9CLGVBQWUsV0FBVyxrQkFBa0IsQ0FBQztBQUNqRSxpQkFBaUIsaUJBQWlCLENBQUM7QUFDbkMsb0JBQW9CLFdBQVcsa0JBQWtCLGNBQWMscUJBQXFCLENBQUM7QUFDckYsc0JBQXNCLGtCQUFrQixpQkFBaUIsMkZBQTJGLHFCQUFxQixXQUFXLGtCQUFrQixjQUFjLG9CQUFhLEFBQWIsYUFBYSxDQUFDO0FBQ2xPLHdEQUF3RCxxQkFBcUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY21zLWxpc3QtY250e3dpZHRoOjEwMCU7cGFkZGluZzo1MHB4IDE1cHg7fVxyXG5oMy5jbXMtbGlzdC1oZWFkaW5ne2ZvbnQtc2l6ZToxcmVtO2NvbG9yOiNmZmY7bWFyZ2luLWJvdHRvbTo1cHg7fVxyXG4uY21zLWxpc3QtY250IHVse3BhZGRpbmctbGVmdDowcHg7fVxyXG4uY21zLWxpc3QtY250IHVsIGxpe3dpZHRoOjEwMCU7bWFyZ2luLWJvdHRvbToycHg7ZGlzcGxheTpibG9jaztsaXN0LXN0eWxlLXR5cGU6bm9uZTt9XHJcbi5jbXMtbGlzdC1jbnQgdWwgbGkgYXtmb250LXNpemU6MC44NXJlbTtwYWRkaW5nOjhweCAxNXB4O2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwwLjEpIHVybCgnL2Fzc2V0cy9pbWFnZXMvbmV4dC5wbmcnKSBuby1yZXBlYXQgcmlnaHQgNXB4IGNlbnRlcjtiYWNrZ3JvdW5kLXNpemU6MTVweDt3aWR0aDoxMDAlO2JvcmRlci1yYWRpdXM6NXB4O2NvbG9yOiNiNmMzZDY7ZGlzcGxheTpmbGV4O31cclxuLmNtcy1saXN0LWNudCB1bCBsaSBhOmhvdmVyLC5jbXMtbGlzdC1jbnQgdWwgbGkgYTpmb2N1c3t0ZXh0LWRlY29yYXRpb246bm9uZTt9XHJcbiJdfQ== */"];



/***/ }),

/***/ "./src/app/pages/about/about.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/pages/about/about.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_AboutComponent, View_AboutComponent_0, View_AboutComponent_Host_0, AboutComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AboutComponent", function() { return RenderType_AboutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutComponent_0", function() { return View_AboutComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutComponent_Host_0", function() { return View_AboutComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponentNgFactory", function() { return AboutComponentNgFactory; });
/* harmony import */ var _about_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component.css.shim.ngstyle */ "./src/app/pages/about/about.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_AboutComponent = [_about_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AboutComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AboutComponent, data: {} });

function View_AboutComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "top-header d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "topheader-icon-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "img-fluid"], ["src", "assets/images/back.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.apiService.historyBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [["class", "header-heading mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["About"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 53, "div", [["class", "cms-list-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "h3", [["class", "cms-list-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cryptocurrency"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 20, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "a", [["routerLink", "/aboutus"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["About us"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "a", [["routerLink", "/securitystrategy"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Security Startegy"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "a", [["routerLink", "/terms"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Terms Of Use"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 2, "a", [["routerLink", "/privacy"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Privacy Policy"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 2, "a", [["routerLink", "/riskremainder"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Risk reminder"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 1, "h3", [["class", "cms-list-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["BDAM Coin"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 4, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 2, "a", [["routerLink", "/fees"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fees"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 1, "h3", [["class", "cms-list-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Support"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 20, "ul", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 2, "a", [["routerLink", "/announcement"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Announcements"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 2, "a", [["routerLink", "/news"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["News"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 2, "a", [["routerLink", "/customer"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Customer & Business"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 2, "a", [["routerLink", "/knowledge"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Knowledge Business"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 3, "li", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 2, "a", [["routerLink", "/contact"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Contact Us"]))], function (_ck, _v) { var currVal_2 = "/aboutus"; _ck(_v, 12, 0, currVal_2); var currVal_5 = "/securitystrategy"; _ck(_v, 16, 0, currVal_5); var currVal_8 = "/terms"; _ck(_v, 20, 0, currVal_8); var currVal_11 = "/privacy"; _ck(_v, 24, 0, currVal_11); var currVal_14 = "/riskremainder"; _ck(_v, 28, 0, currVal_14); var currVal_17 = "/fees"; _ck(_v, 35, 0, currVal_17); var currVal_20 = "/announcement"; _ck(_v, 42, 0, currVal_20); var currVal_23 = "/news"; _ck(_v, 46, 0, currVal_23); var currVal_26 = "/customer"; _ck(_v, 50, 0, currVal_26); var currVal_29 = "/knowledge"; _ck(_v, 54, 0, currVal_29); var currVal_32 = "/contact"; _ck(_v, 58, 0, currVal_32); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).href; _ck(_v, 11, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).target; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).href; _ck(_v, 15, 0, currVal_3, currVal_4); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).target; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).href; _ck(_v, 19, 0, currVal_6, currVal_7); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).target; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).href; _ck(_v, 23, 0, currVal_9, currVal_10); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).target; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).href; _ck(_v, 27, 0, currVal_12, currVal_13); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).target; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 35).href; _ck(_v, 34, 0, currVal_15, currVal_16); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).target; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).href; _ck(_v, 41, 0, currVal_18, currVal_19); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).target; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).href; _ck(_v, 45, 0, currVal_21, currVal_22); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).target; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).href; _ck(_v, 49, 0, currVal_24, currVal_25); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).target; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).href; _ck(_v, 53, 0, currVal_27, currVal_28); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).target; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).href; _ck(_v, 57, 0, currVal_30, currVal_31); }); }
function View_AboutComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-about", [], null, null, null, View_AboutComponent_0, RenderType_AboutComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AboutComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-about", _about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], View_AboutComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");


var AboutComponent = /** @class */ (function () {
    function AboutComponent(apiService) {
        this.apiService = apiService;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.component.css.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.component.css.shim.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_AboutusComponent, View_AboutusComponent_0, View_AboutusComponent_Host_0, AboutusComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AboutusComponent", function() { return RenderType_AboutusComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutusComponent_0", function() { return View_AboutusComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AboutusComponent_Host_0", function() { return View_AboutusComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponentNgFactory", function() { return AboutusComponentNgFactory; });
/* harmony import */ var _aboutus_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutus.component.css.shim.ngstyle */ "./src/app/pages/aboutus/aboutus.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aboutus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutus.component */ "./src/app/pages/aboutus/aboutus.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AboutusComponent = [_aboutus_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AboutusComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AboutusComponent, data: {} });

function View_AboutusComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "top-header d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "topheader-icon-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "img-fluid"], ["src", "assets/images/back.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.apiService.historyBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [["class", "header-heading mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "cms-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.aboutHeading; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.aboutContent; _ck(_v, 7, 0, currVal_1); }); }
function View_AboutusComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-aboutus", [], null, null, null, View_AboutusComponent_0, RenderType_AboutusComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutusComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AboutusComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-aboutus", _aboutus_component__WEBPACK_IMPORTED_MODULE_2__["AboutusComponent"], View_AboutusComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/aboutus/aboutus.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/aboutus/aboutus.component.ts ***!
  \****************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");


var AboutusComponent = /** @class */ (function () {
    function AboutusComponent(apiService) {
        this.apiService = apiService;
    }
    AboutusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.loader(true);
        this.apiService.get_cms({ page_name: 'aboutus' }).subscribe(function (result) {
            if (result) {
                console.log(result, 'result form about');
                _this.apiService.loader(false);
                _this.aboutHeading = result['data']['page_heading'];
                _this.aboutContent = result['data']['page_content'];
            }
        });
    };
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/pages/account/account.component.css.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/pages/account/account.component.css.shim.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".user-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxXQUFXLENBQUMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWljb24gaW1ne3dpZHRoOjQwcHg7fSJdfQ== */"];



/***/ }),

/***/ "./src/app/pages/account/account.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/pages/account/account.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_AccountComponent, View_AccountComponent_0, View_AccountComponent_Host_0, AccountComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AccountComponent", function() { return RenderType_AccountComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AccountComponent_0", function() { return View_AccountComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AccountComponent_Host_0", function() { return View_AccountComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponentNgFactory", function() { return AccountComponentNgFactory; });
/* harmony import */ var _account_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.component.css.shim.ngstyle */ "./src/app/pages/account/account.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.component */ "./src/app/pages/account/account.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_AccountComponent = [_account_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AccountComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AccountComponent, data: {} });

function View_AccountComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "top-header d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [["class", "header-heading anchor text-center col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Account"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 9, "div", [["class", "assets-info-header py-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 8, "div", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "mr-2 user-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "img", [["class", "img-fluid"], ["src", "assets/images/user.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["215as54654654"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "div", [["class", "ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "a", [["routerLink", "/accounts"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null)], function (_ck, _v) { var currVal_2 = "/accounts"; _ck(_v, 12, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).href; _ck(_v, 11, 0, currVal_0, currVal_1); }); }
function View_AccountComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-account", [], null, null, null, View_AccountComponent_0, RenderType_AccountComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AccountComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-account", _account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"], View_AccountComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/account/account.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/account/account.component.ts ***!
  \****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/pages/announcements/announcements.component.css.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/announcements/announcements.component.css.shim.ngstyle.js ***!
  \*********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50cy5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/pages/announcements/announcements.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/pages/announcements/announcements.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_AnnouncementsComponent, View_AnnouncementsComponent_0, View_AnnouncementsComponent_Host_0, AnnouncementsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AnnouncementsComponent", function() { return RenderType_AnnouncementsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AnnouncementsComponent_0", function() { return View_AnnouncementsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AnnouncementsComponent_Host_0", function() { return View_AnnouncementsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsComponentNgFactory", function() { return AnnouncementsComponentNgFactory; });
/* harmony import */ var _announcements_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcements.component.css.shim.ngstyle */ "./src/app/pages/announcements/announcements.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _announcements_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./announcements.component */ "./src/app/pages/announcements/announcements.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AnnouncementsComponent = [_announcements_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AnnouncementsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AnnouncementsComponent, data: {} });

function View_AnnouncementsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "top-header d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "topheader-icon-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "img-fluid"], ["src", "assets/images/back.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.apiService.historyBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [["class", "header-heading mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "cms-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.announcementHeading; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.announcementContent; _ck(_v, 7, 0, currVal_1); }); }
function View_AnnouncementsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-announcements", [], null, null, null, View_AnnouncementsComponent_0, RenderType_AnnouncementsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _announcements_component__WEBPACK_IMPORTED_MODULE_2__["AnnouncementsComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AnnouncementsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-announcements", _announcements_component__WEBPACK_IMPORTED_MODULE_2__["AnnouncementsComponent"], View_AnnouncementsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/announcements/announcements.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/announcements/announcements.component.ts ***!
  \****************************************************************/
/*! exports provided: AnnouncementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementsComponent", function() { return AnnouncementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");


var AnnouncementsComponent = /** @class */ (function () {
    function AnnouncementsComponent(apiService) {
        this.apiService = apiService;
    }
    AnnouncementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.loader(true);
        this.apiService.get_cms({ page_name: 'announcement' }).subscribe(function (result) {
            if (result) {
                _this.apiService.loader(false);
                _this.announcementHeading = result['data']['page_heading'];
                _this.announcementContent = result['data']['page_content'];
            }
        });
    };
    return AnnouncementsComponent;
}());



/***/ }),

/***/ "./src/app/pages/assets/assets.component.css.shim.ngstyle.js":
/*!*******************************************************************!*\
  !*** ./src/app/pages/assets/assets.component.css.shim.ngstyle.js ***!
  \*******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".assets-info-header[_ngcontent-%COMP%]{text-align:center;}\r\n.assets-info-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;font-size:20px;font-weight:500;margin-bottom:5px;}\r\n.assets-info-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5px;font-size:12px;color:#79828f;font-weight:400;}\r\n.assets-info-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-size:11px;color:#79828f;font-weight:400;margin-bottom:0px;}\r\n.search-cnt[_ngcontent-%COMP%]{width:150px;}\r\n.search-cnt[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:url('/assets/images/search-icon.png') no-repeat left 5px center;padding-left:25px;background-size:15px;color:#fff;border:none;font-size:12px;}\r\n.search-cnt[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:placeholder{color:#fff;}\r\n.assets-filter-cnt[_ngcontent-%COMP%]{width:100%;padding:15px 5px;}\r\n\r\n.togswitch[_ngcontent-%COMP%] {position: relative;display: inline-block;width: 40px;height: 18px;}\r\n.togswitch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {display:none;}\r\n.togslider[_ngcontent-%COMP%] {position: absolute;cursor: pointer;top: 0;left: 0;right: 0;bottom: 0;background-color: transparent;border:1px solid #d37aef;-webkit-transition: .4s;transition: .4s;}\r\n.togslider[_ngcontent-%COMP%]:before {position: absolute;content: \"\";height: 12px;width: 12px;left: 3px;bottom: 2px;background-color: #fff;-webkit-transition: .4s;transition: .4s;}\r\ninput[_ngcontent-%COMP%]:checked    + .togslider[_ngcontent-%COMP%] {background-color: #d37aef;}\r\ninput[_ngcontent-%COMP%]:focus    + .togslider[_ngcontent-%COMP%] {box-shadow: 0 0 1px #2196F3;}\r\ninput[_ngcontent-%COMP%]:checked    + .togslider[_ngcontent-%COMP%]:before {    -webkit-transform: translateX(20px);transform: translateX(20px); background:#fff; }\r\n\r\n.on[_ngcontent-%COMP%]{display: none;}\r\n.on[_ngcontent-%COMP%]{color: white;position: absolute;-webkit-transform: translate(0%,0%);transform: translate(0%,0%);top: 20%;left: 10px;font-size: 14px;  font-family: Semibold-Font;}\r\n.off[_ngcontent-%COMP%]{color: white;position: absolute;-webkit-transform: translate(0%,0%);transform: translate(0%,0%);top: 20%;right: 10px;font-size: 14px;text-align: right;width: 100%;font-family: Semibold-Font;}\r\ninput[_ngcontent-%COMP%]:checked + .togslider[_ngcontent-%COMP%]   .on[_ngcontent-%COMP%]{display: block;}\r\ninput[_ngcontent-%COMP%]:checked    + .togslider[_ngcontent-%COMP%]   .off[_ngcontent-%COMP%]{display: none;}\r\n\r\n\r\n.togslider.round[_ngcontent-%COMP%] {border-radius: 25px;}\r\n.togslider.round[_ngcontent-%COMP%]:before {border-radius:50%;}\r\n.notification-label[_ngcontent-%COMP%]{color:#fff;font-size:11px;white-space:nowrap;margin-right:5px;}\r\n\r\n.market-table-cnt[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{background:rgba(0,0,0,0.3);border:none;}\r\n.market-table-cnt[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#79828f;border:none;border-bottom:1px solid transparent;padding:5px 10px;}\r\n.market-table-cnt[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#fff;border:none;border-bottom:1px solid #fff;background:transparent;}\r\n.home-search[_ngcontent-%COMP%]{position:absolute;right:3px;top:3px;background:rgba(255,255,255,0.1);padding:5px;border-radius:5px;}\r\n.home-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:18px;}\r\n.home-search-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{min-height:100vh;border-radius:0px;background:#383848;}\r\n.home-search-modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]{margin:0;}\r\n.home-search-modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#fff;text-shadow:none;}\r\n.home-search-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{padding:0.5rem 1rem;border:none;background:rgba(0,0,0,0.2);}\r\n.home-search-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:rgba(255,255,255,0.1);border:none;color:#fff;border-radius:5px;padding:5px;}\r\n.home-search-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{padding-top:40px;}\r\n.assets-dd[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{left:auto!important;right:0!important;background:#000;width:250px;}\r\n.assets-dd[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.25rem 1.5rem;}\r\n.assets-dd[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.address[_ngcontent-%COMP%]{color:#fff;white-space: normal;word-break: break-word;}\r\n.assets-dd[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff;padding:0px;}\r\n.assets-dd[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{color:#fff;}\r\n.table-btn[_ngcontent-%COMP%]{padding:2px 5px;border:none;border-radius:2px;margin-bottom:2px;display:inline-block;}\r\n.deposit-modal[_ngcontent-%COMP%]{}\r\n.qr-cnt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100px;margin-bottom:15px;}\r\n.qr-txt-cnt[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:1.1rem;}\r\n.qr-txt-cnt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:0.9rem;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXNzZXRzL2Fzc2V0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQixrQkFBa0IsQ0FBQztBQUN2Qyx1QkFBdUIsV0FBVyxlQUFlLGdCQUFnQixrQkFBa0IsQ0FBQztBQUNwRiw0QkFBNEIsZ0JBQWdCLGVBQWUsY0FBYyxnQkFBZ0IsQ0FBQztBQUMxRixzQkFBc0Isa0JBQWtCLGVBQWUsY0FBYyxnQkFBZ0Isa0JBQWtCLENBQUM7QUFDeEcsWUFBWSxZQUFZLENBQUM7QUFDekIsa0JBQWtCLDJFQUEyRSxrQkFBa0IscUJBQXFCLFdBQVcsWUFBWSxlQUFlLENBQUM7QUFDM0ssOEJBQThCLFdBQVcsQ0FBQztBQUMxQyxtQkFBbUIsV0FBVyxpQkFBaUIsQ0FBQztBQUNoRCxnQkFBZ0I7QUFDaEIsWUFBWSxtQkFBbUIsc0JBQXNCLFlBQVksYUFBYSxDQUFDO0FBQy9FLGtCQUFrQixhQUFhLENBQUM7QUFDaEMsWUFBWSxtQkFBbUIsZ0JBQWdCLE9BQU8sUUFBUSxTQUFTLFVBQVUsOEJBQThCLHlCQUF5Qix3QkFBd0IsZ0JBQWdCLENBQUM7QUFDakwsbUJBQW1CLG1CQUFtQixZQUFZLGFBQWEsWUFBWSxVQUFVLFlBQVksdUJBQXVCLHdCQUF3QixnQkFBZ0IsQ0FBQztBQUNqSyw0QkFBNEIsMEJBQTBCLENBQUM7QUFDdkQsMEJBQTBCLDRCQUE0QixDQUFDO0FBQ3ZELHVDQUF1QyxvQ0FBb0MsQUFBZ0MsNEJBQTRCLENBQUMsZ0JBQWdCLEVBQUU7QUFDMUosOEJBQThCO0FBQzlCLElBQUksY0FBYyxDQUFDO0FBQ25CLElBQUksYUFBYSxtQkFBbUIsb0NBQTRCLEFBQTVCLDRCQUE0QixTQUFTLFdBQVcsZ0JBQWdCLEVBQUUsMkJBQTJCLENBQUM7QUFDbEksS0FBSyxhQUFhLG1CQUFtQixvQ0FBNEIsQUFBNUIsNEJBQTRCLFNBQVMsWUFBWSxnQkFBZ0Isa0JBQWtCLFlBQVksMkJBQTJCLENBQUM7QUFDaEssOEJBQThCLGVBQWUsQ0FBQztBQUM5QyxnQ0FBZ0MsY0FBYyxDQUFDO0FBQy9DLDBCQUEwQjtBQUMxQixxQkFBcUI7QUFDckIsa0JBQWtCLG9CQUFvQixDQUFDO0FBQ3ZDLHlCQUF5QixrQkFBa0IsQ0FBQztBQUM1QyxvQkFBb0IsV0FBVyxlQUFlLG1CQUFtQixpQkFBaUIsQ0FBQztBQUNuRixvQkFBb0I7QUFFcEIsNEJBQTRCLDJCQUEyQixZQUFZLENBQUM7QUFDcEUsaUNBQWlDLGNBQWMsWUFBWSxvQ0FBb0MsaUJBQWlCLENBQUM7QUFDakgsd0NBQXdDLFdBQVcsWUFBWSw2QkFBNkIsdUJBQXVCLENBQUM7QUFFcEgsYUFBYSxrQkFBa0IsVUFBVSxRQUFRLGlDQUFpQyxZQUFZLGtCQUFrQixDQUFDO0FBQ2pILGlCQUFpQixZQUFZLENBQUM7QUFDOUIsa0NBQWtDLGlCQUFpQixrQkFBa0IsbUJBQW1CLENBQUM7QUFDekYsaUNBQWlDLFNBQVMsQ0FBQztBQUMzQywwQkFBMEIsV0FBVyxpQkFBaUIsQ0FBQztBQUN2RCxpQ0FBaUMsb0JBQW9CLFlBQVksMkJBQTJCLENBQUM7QUFDN0YsdUNBQXVDLGlDQUFpQyxZQUFZLFdBQVcsa0JBQWtCLFlBQVksQ0FBQztBQUM5SCwrQkFBK0IsaUJBQWlCLENBQUM7QUFFakQsMEJBQTBCLG9CQUFvQixrQkFBa0IsZ0JBQWdCLFlBQVksQ0FBQztBQUM3Riw2QkFBNkIsc0JBQXNCLENBQUM7QUFDcEQsMENBQTBDLFdBQVcsb0JBQW9CLHVCQUF1QixDQUFDO0FBQ2pHLCtCQUErQixXQUFXLFlBQVksQ0FBQztBQUN2RCxrQkFBa0IsV0FBVyxDQUFDO0FBRTlCLFdBQVcsZ0JBQWdCLFlBQVksa0JBQWtCLGtCQUFrQixxQkFBcUIsQ0FBQztBQUNqRyxnQkFBZ0I7QUFDaEIsWUFBWSxhQUFhLG1CQUFtQixDQUFDO0FBQzdDLGVBQWUsaUJBQWlCLENBQUM7QUFDakMsY0FBYyxpQkFBaUIsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2V0cy9hc3NldHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hc3NldHMtaW5mby1oZWFkZXJ7dGV4dC1hbGlnbjpjZW50ZXI7fVxyXG4uYXNzZXRzLWluZm8taGVhZGVyIGgye2NvbG9yOiNmZmY7Zm9udC1zaXplOjIwcHg7Zm9udC13ZWlnaHQ6NTAwO21hcmdpbi1ib3R0b206NXB4O31cclxuLmFzc2V0cy1pbmZvLWhlYWRlciBoMiBzcGFue21hcmdpbi1sZWZ0OjVweDtmb250LXNpemU6MTJweDtjb2xvcjojNzk4MjhmO2ZvbnQtd2VpZ2h0OjQwMDt9XHJcbi5hc3NldHMtaW5mby1oZWFkZXIgcHt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MTFweDtjb2xvcjojNzk4MjhmO2ZvbnQtd2VpZ2h0OjQwMDttYXJnaW4tYm90dG9tOjBweDt9XHJcbi5zZWFyY2gtY250e3dpZHRoOjE1MHB4O31cclxuLnNlYXJjaC1jbnQgaW5wdXR7YmFja2dyb3VuZDp1cmwoJy9hc3NldHMvaW1hZ2VzL3NlYXJjaC1pY29uLnBuZycpIG5vLXJlcGVhdCBsZWZ0IDVweCBjZW50ZXI7cGFkZGluZy1sZWZ0OjI1cHg7YmFja2dyb3VuZC1zaXplOjE1cHg7Y29sb3I6I2ZmZjtib3JkZXI6bm9uZTtmb250LXNpemU6MTJweDt9XHJcbi5zZWFyY2gtY250IGlucHV0OnBsYWNlaG9sZGVye2NvbG9yOiNmZmY7fVxyXG4uYXNzZXRzLWZpbHRlci1jbnR7d2lkdGg6MTAwJTtwYWRkaW5nOjE1cHggNXB4O31cclxuLypUb2dnbGUgU3R5bGUqL1xyXG4udG9nc3dpdGNoIHtwb3NpdGlvbjogcmVsYXRpdmU7ZGlzcGxheTogaW5saW5lLWJsb2NrO3dpZHRoOiA0MHB4O2hlaWdodDogMThweDt9XHJcbi50b2dzd2l0Y2ggaW5wdXQge2Rpc3BsYXk6bm9uZTt9ICBcclxuLnRvZ3NsaWRlciB7cG9zaXRpb246IGFic29sdXRlO2N1cnNvcjogcG9pbnRlcjt0b3A6IDA7bGVmdDogMDtyaWdodDogMDtib3R0b206IDA7YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7Ym9yZGVyOjFweCBzb2xpZCAjZDM3YWVmOy13ZWJraXQtdHJhbnNpdGlvbjogLjRzO3RyYW5zaXRpb246IC40czt9XHJcbi50b2dzbGlkZXI6YmVmb3JlIHtwb3NpdGlvbjogYWJzb2x1dGU7Y29udGVudDogXCJcIjtoZWlnaHQ6IDEycHg7d2lkdGg6IDEycHg7bGVmdDogM3B4O2JvdHRvbTogMnB4O2JhY2tncm91bmQtY29sb3I6ICNmZmY7LXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7dHJhbnNpdGlvbjogLjRzO31cclxuaW5wdXQ6Y2hlY2tlZCArIC50b2dzbGlkZXIge2JhY2tncm91bmQtY29sb3I6ICNkMzdhZWY7fVxyXG5pbnB1dDpmb2N1cyArIC50b2dzbGlkZXIge2JveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMzt9XHJcbmlucHV0OmNoZWNrZWQgKyAudG9nc2xpZGVyOmJlZm9yZSB7ICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpOy1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjBweCk7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpOyBiYWNrZ3JvdW5kOiNmZmY7IH1cclxuLyotLS0tLS0gQURERUQgQ1NTIC0tLS0tLS0tLSovXHJcbi5vbntkaXNwbGF5OiBub25lO30gIFxyXG4ub257Y29sb3I6IHdoaXRlO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwwJSk7dG9wOiAyMCU7bGVmdDogMTBweDtmb250LXNpemU6IDE0cHg7ICBmb250LWZhbWlseTogU2VtaWJvbGQtRm9udDt9XHJcbi5vZmZ7Y29sb3I6IHdoaXRlO3Bvc2l0aW9uOiBhYnNvbHV0ZTt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwwJSk7dG9wOiAyMCU7cmlnaHQ6IDEwcHg7Zm9udC1zaXplOiAxNHB4O3RleHQtYWxpZ246IHJpZ2h0O3dpZHRoOiAxMDAlO2ZvbnQtZmFtaWx5OiBTZW1pYm9sZC1Gb250O31cclxuaW5wdXQ6Y2hlY2tlZCsgLnRvZ3NsaWRlciAub257ZGlzcGxheTogYmxvY2s7fVxyXG5pbnB1dDpjaGVja2VkICsgLnRvZ3NsaWRlciAub2Zme2Rpc3BsYXk6IG5vbmU7fVxyXG4vKi0tLS0tLS0tLSBFTkQgLS0tLS0tLS0qLyAgXHJcbi8qIFJvdW5kZWQgc2xpZGVycyAqL1xyXG4udG9nc2xpZGVyLnJvdW5kIHtib3JkZXItcmFkaXVzOiAyNXB4O31cclxuLnRvZ3NsaWRlci5yb3VuZDpiZWZvcmUge2JvcmRlci1yYWRpdXM6NTAlO31cclxuLm5vdGlmaWNhdGlvbi1sYWJlbHtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxMXB4O3doaXRlLXNwYWNlOm5vd3JhcDttYXJnaW4tcmlnaHQ6NXB4O31cclxuLypFIE8gVG9nZ2xlIHN0eWxlKi9cclxuXHJcbi5tYXJrZXQtdGFibGUtY250IC5uYXYtdGFic3tiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4zKTtib3JkZXI6bm9uZTt9XHJcbi5tYXJrZXQtdGFibGUtY250IC5uYXYtdGFicyBsaSBhe2NvbG9yOiM3OTgyOGY7Ym9yZGVyOm5vbmU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdHJhbnNwYXJlbnQ7cGFkZGluZzo1cHggMTBweDt9XHJcbi5tYXJrZXQtdGFibGUtY250IC5uYXYtdGFicyBsaSBhLmFjdGl2ZXtjb2xvcjojZmZmO2JvcmRlcjpub25lO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNmZmY7YmFja2dyb3VuZDp0cmFuc3BhcmVudDt9XHJcblxyXG4uaG9tZS1zZWFyY2h7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6M3B4O3RvcDozcHg7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDAuMSk7cGFkZGluZzo1cHg7Ym9yZGVyLXJhZGl1czo1cHg7fVxyXG4uaG9tZS1zZWFyY2ggaW1ne2hlaWdodDoxOHB4O31cclxuLmhvbWUtc2VhcmNoLW1vZGFsIC5tb2RhbC1jb250ZW50e21pbi1oZWlnaHQ6MTAwdmg7Ym9yZGVyLXJhZGl1czowcHg7YmFja2dyb3VuZDojMzgzODQ4O31cclxuLmhvbWUtc2VhcmNoLW1vZGFsIC5tb2RhbC1kaWFsb2d7bWFyZ2luOjA7fVxyXG4uaG9tZS1zZWFyY2gtbW9kYWwgLmNsb3Nle2NvbG9yOiNmZmY7dGV4dC1zaGFkb3c6bm9uZTt9XHJcbi5ob21lLXNlYXJjaC1tb2RhbCAubW9kYWwtaGVhZGVye3BhZGRpbmc6MC41cmVtIDFyZW07Ym9yZGVyOm5vbmU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMik7fVxyXG4uaG9tZS1zZWFyY2gtbW9kYWwgLm1vZGFsLWhlYWRlciBpbnB1dHtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMC4xKTtib3JkZXI6bm9uZTtjb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6NXB4O3BhZGRpbmc6NXB4O31cclxuLmhvbWUtc2VhcmNoLW1vZGFsIC5tb2RhbC1ib2R5e3BhZGRpbmctdG9wOjQwcHg7fVxyXG5cclxuLmFzc2V0cy1kZCAuZHJvcGRvd24tbWVudXtsZWZ0OmF1dG8haW1wb3J0YW50O3JpZ2h0OjAhaW1wb3J0YW50O2JhY2tncm91bmQ6IzAwMDt3aWR0aDoyNTBweDt9XHJcbi5hc3NldHMtZGQgLmRyb3Bkb3duLW1lbnUgbGl7cGFkZGluZzouMjVyZW0gMS41cmVtO31cclxuLmFzc2V0cy1kZCAuZHJvcGRvd24tbWVudSBsaSBzcGFuLmFkZHJlc3N7Y29sb3I6I2ZmZjt3aGl0ZS1zcGFjZTogbm9ybWFsO3dvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7fVxyXG4uYXNzZXRzLWRkIC5kcm9wZG93bi1tZW51IGxpIGF7Y29sb3I6I2ZmZjtwYWRkaW5nOjBweDt9XHJcbi5hc3NldHMtZGQgYnV0dG9ue2NvbG9yOiNmZmY7fVxyXG5cclxuLnRhYmxlLWJ0bntwYWRkaW5nOjJweCA1cHg7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czoycHg7bWFyZ2luLWJvdHRvbToycHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7fVxyXG4uZGVwb3NpdC1tb2RhbHt9XHJcbi5xci1jbnQgaW1ne2hlaWdodDoxMDBweDttYXJnaW4tYm90dG9tOjE1cHg7fVxyXG4ucXItdHh0LWNudCBoNXtmb250LXNpemU6MS4xcmVtO31cclxuLnFyLXR4dC1jbnQgcHtmb250LXNpemU6MC45cmVtO30iXX0= */"];



/***/ }),

/***/ "./src/app/pages/assets/assets.component.ngfactory.js":
/*!************************************************************!*\
  !*** ./src/app/pages/assets/assets.component.ngfactory.js ***!
  \************************************************************/
/*! exports provided: RenderType_AssetsComponent, View_AssetsComponent_0, View_AssetsComponent_Host_0, AssetsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AssetsComponent", function() { return RenderType_AssetsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AssetsComponent_0", function() { return View_AssetsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AssetsComponent_Host_0", function() { return View_AssetsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsComponentNgFactory", function() { return AssetsComponentNgFactory; });
/* harmony import */ var _assets_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets.component.css.shim.ngstyle */ "./src/app/pages/assets/assets.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm5/ngx-bootstrap-component-loader.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_ng_recaptcha_ng_recaptcha_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/ng-recaptcha/ng-recaptcha.ngfactory */ "./node_modules/ng-recaptcha/ng-recaptcha.ngfactory.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm5/ng-recaptcha.js");
/* harmony import */ var _assets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets.component */ "./src/app/pages/assets/assets.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_AssetsComponent = [_assets_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AssetsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AssetsComponent, data: {} });

function View_AssetsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "li", [["role", "menuitem"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "span", [["class", "address"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.btcAddress; _ck(_v, 2, 0, currVal_0); }); }
function View_AssetsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "ul", [["aria-labelledby", "button-basic"], ["class", "dropdown-menu"], ["id", "dropdown-basic"], ["role", "menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AssetsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "li", [["role", "menuitem"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "a", [["class", "dropdown-item"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.logout() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Logout"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.btcAddress; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AssetsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["class", "table-coin-icon mr-2"], ["src", "assets/images/btc-icon.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["BTC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "span", [["class", "white-txt lg-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Bitcoin"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 8, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["BDAMX Balance"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "span", [["class", "white-txt lg-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](15, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 8, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["On Order"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 1, "a", [["class", "table-btn btn-success"], ["style", "cursor:pointer"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 79).show() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Deposit"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "a", [["class", "table-btn btn-danger"], ["style", "cursor:pointer"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 111).show() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Withdraw"]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.balance, "1.8-8")); _ck(_v, 11, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _ck(_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.hold, "1.8-8")); _ck(_v, 14, 0, currVal_1); }); }
function View_AssetsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](13, 2)], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.toCurrency; _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.txid; _ck(_v, 5, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.depamt, ".8")); _ck(_v, 8, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 12, 0, _ck(_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), _v.context.$implicit.datetime, "medium")); _ck(_v, 12, 0, currVal_3); }); }
function View_AssetsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [["colspan", "3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Records Found"]))], null, null); }
function View_AssetsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](9, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](13, 2)], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.toCurrency; _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.txid; _ck(_v, 5, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _ck(_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.withamount, ".8")); _ck(_v, 8, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 12, 0, _ck(_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), _v.context.$implicit.datetime, "medium")); _ck(_v, 12, 0, currVal_3); }); }
function View_AssetsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [["colspan", "3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Records Found"]))], null, null); }
function View_AssetsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "with_right d-flex flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Balance ", " BTC "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" Frozen ", " BTC"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.MyDBbal, ".8")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.MyDBhold, ".8")); _ck(_v, 5, 0, currVal_1); }); }
function View_AssetsComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-success btn-lg grad-btn"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.withdrawsite(_co.withdrawForm.controls, _co.withdrawForm, "BTC") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Withdraw"]))], null, null); }
function View_AssetsComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-lg grad-btn ml-3"], ["disabled", ""], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["loading..."]))], null, null); }
function View_AssetsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 228, "div", [["class", "home-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 15, "div", [["class", "top-header d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "topheader-icon-cnt mr-auto"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).show() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "img", [["class", "img-fluid"], ["src", "assets/images/table-icon.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h3", [["class", "header-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Assets"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 9, "div", [["class", "topheader-icon-cnt ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 16777216, null, null, 8, "div", [["class", "btn-group assets-dd"], ["dropdown", ""]], [[2, "dropup", null], [2, "open", null], [2, "show", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownState"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownState"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 212992, null, 0, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownConfig"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownState"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "button", [["aria-controls", "dropdown-basic"], ["class", "btn dropdown-toggle"], ["dropdownToggle", ""], ["id", "button-basic"], ["type", "button"]], [[1, "aria-haspopup", 0], [1, "disabled", 0], [1, "aria-expanded", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onClick() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 147456, null, 0, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownToggleDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownDirective"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownState"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" BTC Wallet "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "span", [["class", "caret"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AssetsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownMenuDirective"], [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownState"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 5, "div", [["class", "mobile-table px-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 4, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 3, "table", [["class", "table table-hover"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AssetsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 16777216, null, null, 52, "div", [["aria-labelledby", "dialog-static-name"], ["bsModal", ""], ["class", "modal fade home-search-modal"], ["role", "dialog"], ["tabindex", "-1"]], null, [[null, "click"], [null, "keydown.esc"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown.esc" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onEsc($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 212992, [["staticModal", 4]], 0, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"]], { config: [0, "config"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](27, { backdrop: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 49, "div", [["class", "modal-dialog modal-sm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 48, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 5, "div", [["class", "top-header d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "div", [["aria-label", "Close"], ["class", "topheader-icon-cnt close"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).hide() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 0, "img", [["class", "img-fluid"], ["src", "assets/images/back.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "h3", [["class", "header-heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Payment Records"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 41, "div", [["class", "modal-body px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 40, "div", [["class", "market-table-cnt mobile-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 6, "ul", [["class", "nav nav-tabs justify-content-around"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 1, "a", [["class", "nav-link active"], ["data-toggle", "tab"], ["href", "#depositrecords"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Deposit Records"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 1, "a", [["class", "nav-link"], ["data-toggle", "tab"], ["href", "#withdrawrecords"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Withdraw Records"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 32, "div", [["class", "tab-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 15, "div", [["class", "tab-pane container-fluid active px-0"], ["id", "depositrecords"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 14, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 13, "table", [["class", "table table-hover"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Transaction"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amount"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AssetsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AssetsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 15, "div", [["class", "tab-pane container-fluid fade px-0"], ["id", "withdrawrecords"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 14, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 13, "table", [["class", "table table-hover"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Transaction"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amount"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AssetsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AssetsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 16777216, null, null, 31, "div", [["aria-labelledby", "dialog-static-name"], ["bsModal", ""], ["class", "modal fade login-modal deposit-modal"], ["data-dismiss", "modal"], ["role", "dialog"], ["tabindex", "-1"]], null, [[null, "click"], [null, "keydown.esc"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown.esc" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).onEsc($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 212992, [["depositModal", 4]], 0, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"]], { config: [0, "config"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](80, { backdrop: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 28, "div", [["class", "modal-dialog modal-sm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 27, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 1, "h5", [["class", "modal-title text-center text-light"], ["id", "exampleModalCenterTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["BTC Deposit"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close pull-right"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 79).hide() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](87, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 20, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 2, "div", [["class", "sel_sec"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](91, 0, null, null, 1, "h3", [["class", "col-lg-12 text-left px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["BTC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 6, "div", [["class", "with_right d-flex flex-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](95, null, ["Balance ", " BTC "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](96, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](97, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](98, null, [" Frozen ", " BTC"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](99, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 9, "div", [["class", "row justify-content-center text-center p-2 m-2 white-bg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 8, "div", [["class", "col-lg-12 px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 1, "div", [["class", "qr-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 0, "img", [["class", "img-fluid"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 5, "div", [["class", "col-lg-12 qr-txt-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](105, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Send your Bitcoin to this Address"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](108, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 0, "i", [["class", "fa fa-copy"], ["style", "cursor:pointer"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.copyText() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](110, 16777216, null, null, 120, "div", [["aria-labelledby", "dialog-static-name"], ["bsModal", ""], ["class", "modal fade login-modal withdraw-modal"], ["data-dismiss", "modal"], ["role", "dialog"], ["tabindex", "-1"]], null, [[null, "click"], [null, "keydown.esc"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown.esc" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).onEsc($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](111, 212992, [["withdrawModal", 4]], 0, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_4__["ComponentLoaderFactory"]], { config: [0, "config"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](112, { backdrop: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 117, "div", [["class", "modal-dialog modal-sm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 116, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](115, 0, null, null, 5, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 1, "h5", [["class", "modal-title text-center text-light"], ["id", "exampleModalCenterTitle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["BTC Withdraw"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 2, "button", [["aria-label", "Close"], ["class", "close pull-right"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 111).hide() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](119, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00D7"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 109, "div", [["class", "modal-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AssetsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](123, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](124, 0, null, null, 106, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](125, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](126, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](128, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, null, 6, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](130, 0, null, null, 2, "label", [["class", "col-sm-6 col-form-label"], ["for", "staticEmail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](131, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Withdrawal Wallet"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](133, 0, null, null, 2, "div", [["class", "col-sm-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](134, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](135, null, [" ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, null, 9, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](137, 0, null, null, 2, "label", [["class", "col-sm-6 col-form-label"], ["for", "staticEmail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](138, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Minimum Withdrawal Amount "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](140, 0, null, null, 5, "div", [["class", "col-sm-6 withdraw_fm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](141, 0, null, null, 4, "div", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](142, 0, null, null, 3, "label", [["class", "col-sm-12 col-form-label px-0"], ["for", "staticEmail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](143, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](144, null, [" ", " BTC "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](145, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](146, 0, null, null, 9, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](147, 0, null, null, 2, "label", [["class", "col-sm-6 col-form-label"], ["for", "staticEmail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](148, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Maximum Withdrawal Amount "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](150, 0, null, null, 5, "div", [["class", "col-sm-6 withdraw_fm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](151, 0, null, null, 4, "div", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](152, 0, null, null, 3, "label", [["class", "col-sm-12 col-form-label px-0"], ["for", "staticEmail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](153, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](154, null, [" ", " BTC"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](155, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](156, 0, null, null, 3, "div", [["class", "row justify-content-end "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](157, 0, null, null, 2, "div", [["class", "col-sm-12 col-form-label justify-content-center d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](158, 0, null, null, 1, "button", [["class", "btn btn-success btn-lg btn-change trading-btn2 fund-btn"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.sendMaxWithAmount() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Max"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](160, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](161, 0, null, null, 2, "label", [["class", "col-sm-6 col-form-label"], ["for", "staticEmail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](162, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Withdraw Amount"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](164, 0, null, null, 11, "div", [["class", "col-sm-6 withdraw_fm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](165, 0, null, null, 10, "div", [["class", "form-group mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](166, 0, null, null, 9, "input", [["class", "form-control"], ["formControlName", "withamount"], ["id", "exampleInputEmail1"], ["pattern", "[a-zA-Z0-9\\s_@.,]+"], ["placeholder", "Enter Withdrawal Amount"], ["type", "text"]], [[1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "keypress"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("keypress" === en)) {
        var pd_4 = (_co.isNumber($event) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_co.withcalc($event.target.value) !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](167, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](168, { "is-invalid": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](169, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](170, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], [], { pattern: [0, "pattern"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](173, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_k"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](175, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](176, 0, null, null, 15, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](177, 0, null, null, 2, "label", [["class", "col-sm-6 col-form-label"], ["for", "staticEmail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](178, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Receiver address"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](180, 0, null, null, 11, "div", [["class", "col-sm-6 withdraw_fm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](181, 0, null, null, 10, "div", [["class", "form-group mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](182, 0, null, null, 9, "input", [["class", "form-control"], ["formControlName", "privatekey"], ["id", "exampleInputEmail1"], ["pattern", "[a-zA-Z0-9\\s_@.,]+"], ["type", "text"]], [[1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](183, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](184, { "is-invalid": 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](185, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](186, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], [], { pattern: [0, "pattern"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](189, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_k"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](191, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](192, 0, null, null, 9, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](193, 0, null, null, 2, "label", [["class", "col-6 col-form-label"], ["for", "staticEmail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](194, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Withdrawal Fee "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](196, 0, null, null, 5, "div", [["class", "col-6 withdraw_fm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](197, 0, null, null, 4, "div", [["class", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](198, 0, null, null, 3, "label", [["class", "col-sm-12 col-form-label text-right"], ["for", "staticEmail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](199, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](200, null, [" ", " BTC "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](201, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](202, 0, null, null, 9, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](203, 0, null, null, 2, "label", [["class", "col-6 col-form-label"], ["for", "staticEmail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](204, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Actual Received"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](206, 0, null, null, 5, "div", [["class", "col-6 withdraw_fm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](207, 0, null, null, 4, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](208, 0, null, null, 3, "label", [["class", "col-sm-12 col-form-label text-right"], ["for", "staticEmail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](209, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](210, null, [" ", " BTC "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](211, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](212, 0, null, null, 10, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](213, 0, null, null, 0, "label", [["class", "col-6 col-form-label"], ["for", "inputPassword"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](214, 0, null, null, 8, "div", [["class", "col-6 d-flex justify-content-end"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](215, 0, null, null, 7, "div", [["class", "capcha_img"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](216, 0, null, null, 6, "re-captcha", [["formControlName", "captcha"], ["siteKey", "6LdMbr8UAAAAAAfO3IJlwy4KO2Mr_1lOWQwRSSf3"]], [[1, "id", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "resolved"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("resolved" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 218).onResolve($event) !== false);
        ad = (pd_0 && ad);
    } if (("resolved" === en)) {
        var pd_1 = (_co.resolved($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_ng_recaptcha_ng_recaptcha_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_RecaptchaComponent_0"], _node_modules_ng_recaptcha_ng_recaptcha_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_RecaptchaComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](217, 4374528, null, 0, ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__["RecaptchaComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__["RecaptchaLoaderService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__["RECAPTCHA_SETTINGS"]]], { siteKey: [0, "siteKey"] }, { resolved: "resolved" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](218, 16384, null, 0, ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__["RecaptchaValueAccessorDirective"], [ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__["RecaptchaComponent"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__["RecaptchaValueAccessorDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](220, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_k"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](222, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](223, 0, null, null, 7, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](224, 0, null, null, 0, "label", [["class", "col-12 col-form-label"], ["for", "staticEmail"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](225, 0, null, null, 5, "div", [["class", "col-12 withdraw_fm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](226, 0, null, null, 4, "div", [["class", "form-group text-right d-flex justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AssetsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](228, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_AssetsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](230, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 11, 0); var currVal_6 = _co.listCurrency; _ck(_v, 24, 0, currVal_6); var currVal_7 = _ck(_v, 27, 0, "static"); _ck(_v, 26, 0, currVal_7); var currVal_8 = _co.deposit_data; _ck(_v, 59, 0, currVal_8); var currVal_9 = (((_co.deposit_data == null) ? null : _co.deposit_data.length) === 0); _ck(_v, 61, 0, currVal_9); var currVal_10 = _co.withdraw_data; _ck(_v, 75, 0, currVal_10); var currVal_11 = (((_co.withdraw_data == null) ? null : _co.withdraw_data.length) === 0); _ck(_v, 77, 0, currVal_11); var currVal_12 = _ck(_v, 80, 0, "static"); _ck(_v, 79, 0, currVal_12); var currVal_17 = _ck(_v, 112, 0, "static"); _ck(_v, 111, 0, currVal_17); var currVal_18 = (_co.Basecoin == "BTC"); _ck(_v, 123, 0, currVal_18); var currVal_26 = _co.withdrawForm; _ck(_v, 126, 0, currVal_26); var currVal_38 = "form-control"; var currVal_39 = _ck(_v, 168, 0, (_co.submitted && _co.f1.withamount.errors)); _ck(_v, 167, 0, currVal_38, currVal_39); var currVal_40 = "[a-zA-Z0-9\\s_@.,]+"; _ck(_v, 170, 0, currVal_40); var currVal_41 = "withamount"; _ck(_v, 173, 0, currVal_41); var currVal_50 = "form-control"; var currVal_51 = _ck(_v, 184, 0, (_co.submitted && _co.f1.privatekey.errors)); _ck(_v, 183, 0, currVal_50, currVal_51); var currVal_52 = "[a-zA-Z0-9\\s_@.,]+"; _ck(_v, 186, 0, currVal_52); var currVal_53 = "privatekey"; _ck(_v, 189, 0, currVal_53); var currVal_64 = "6LdMbr8UAAAAAAfO3IJlwy4KO2Mr_1lOWQwRSSf3"; _ck(_v, 217, 0, currVal_64); var currVal_65 = "captcha"; _ck(_v, 220, 0, currVal_65); var currVal_66 = (_co.submitloader == 0); _ck(_v, 228, 0, currVal_66); var currVal_67 = (_co.submitloader == 1); _ck(_v, 230, 0, currVal_67); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).dropup; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isOpen; var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isOpen && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isBs4); _ck(_v, 9, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = true; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).isDisabled; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).isOpen; _ck(_v, 12, 0, currVal_3, currVal_4, currVal_5); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 95, 0, _ck(_v, 96, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.MyDBbal, ".8")); _ck(_v, 95, 0, currVal_13); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 98, 0, _ck(_v, 99, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.MyDBhold, ".8")); _ck(_v, 98, 0, currVal_14); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.img_qr, ""); _ck(_v, 103, 0, currVal_15); var currVal_16 = _co.originaladdress; _ck(_v, 108, 0, currVal_16); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).ngClassUntouched; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).ngClassTouched; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).ngClassPristine; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).ngClassDirty; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).ngClassValid; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).ngClassInvalid; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).ngClassPending; _ck(_v, 124, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25); var currVal_27 = _co.originaladdress; _ck(_v, 135, 0, currVal_27); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 144, 0, _ck(_v, 145, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.minWithdrawAmt, ".8")); _ck(_v, 144, 0, currVal_28); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 154, 0, _ck(_v, 155, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.maxWithdrawAmt, ".8")); _ck(_v, 154, 0, currVal_29); var currVal_30 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 170).pattern ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 170).pattern : null); var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 175).ngClassUntouched; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 175).ngClassTouched; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 175).ngClassPristine; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 175).ngClassDirty; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 175).ngClassValid; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 175).ngClassInvalid; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 175).ngClassPending; _ck(_v, 166, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37); var currVal_42 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 186).pattern ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 186).pattern : null); var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 191).ngClassUntouched; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 191).ngClassTouched; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 191).ngClassPristine; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 191).ngClassDirty; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 191).ngClassValid; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 191).ngClassInvalid; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 191).ngClassPending; _ck(_v, 182, 0, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49); var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 200, 0, _ck(_v, 201, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.feeamt, ".8")); _ck(_v, 200, 0, currVal_54); var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 210, 0, _ck(_v, 211, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.receiveamt, ".8")); _ck(_v, 210, 0, currVal_55); var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 217).id; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 222).ngClassUntouched; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 222).ngClassTouched; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 222).ngClassPristine; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 222).ngClassDirty; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 222).ngClassValid; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 222).ngClassInvalid; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 222).ngClassPending; _ck(_v, 216, 0, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63); }); }
function View_AssetsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-assets", [], null, null, null, View_AssetsComponent_0, RenderType_AssetsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _assets_component__WEBPACK_IMPORTED_MODULE_9__["AssetsComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_13__["ClipboardService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AssetsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-assets", _assets_component__WEBPACK_IMPORTED_MODULE_9__["AssetsComponent"], View_AssetsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/assets/assets.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/assets/assets.component.ts ***!
  \**************************************************/
/*! exports provided: AssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsComponent", function() { return AssetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AssetsComponent = /** @class */ (function () {
    function AssetsComponent(apiService, router, toastr, _clipboardService, formBuilder) {
        this.apiService = apiService;
        this.router = router;
        this.toastr = toastr;
        this._clipboardService = _clipboardService;
        this.formBuilder = formBuilder;
        this.listCurrency = [];
        this.allCurrency = [];
        this.img_qr = '';
        this.captcha = '';
        this.submitloader = 0;
        this.user_id = localStorage.getItem('address');
        this.deposit_data = [];
        this.withdraw_data = [];
        this.currencies = [];
    }
    AssetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.btcAddress = localStorage.getItem('address');
        this.localaddr = localStorage.getItem("address");
        this.Basecoin = localStorage.getItem("Basecoin");
        this.originaladdress = localStorage.getItem("original_address");
        this.getFunds(this.localaddr);
        this.img_qr = 'https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=' + this.originaladdress + '&choe=UTF-8&chld=L';
        this.withdrawForm = this.formBuilder.group({
            withamount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/)]],
            privatekey: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            captcha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
        });
        this.deposit();
        this.withdraw();
        this.apiService.get_all_currencies().subscribe(function (res) {
            _this.currencies = res.data;
        });
    };
    Object.defineProperty(AssetsComponent.prototype, "f1", {
        get: function () { return this.withdrawForm.controls; },
        enumerable: true,
        configurable: true
    });
    AssetsComponent.prototype.getFunds = function (address) {
        var _this = this;
        this.apiService.loader(true);
        this.apiService.get_funds({ address: address }).subscribe(function (result) {
            if (result.status) {
                _this.apiService.loader(false);
                _this.listCurrency = result.data.filter(function (items) { return items.currencySymbol === 'BTC'; });
                _this.maxWithdrawAmt = _this.listCurrency[0].maxwithamt;
                _this.minWithdrawAmt = _this.listCurrency[0].minwithamt;
                _this.feeamt = _this.listCurrency[0].withdrawfee;
                _this.receiveamt = 0.00000000;
                _this.allCurrency = result.data.filter(function (items) { return items.currencySymbol === 'BTC'; });
                console.log(_this.listCurrency, 'llll');
                var Basecoin = localStorage.getItem("Basecoin");
                _this.getBalance(0);
            }
            else {
                if (_this.localaddr) {
                    _this.toastr.error(result.Message, "ERROR");
                }
            }
        });
    };
    AssetsComponent.prototype.getBalance = function (task) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var getresult, addr, Basecoin;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                getresult = this.listCurrency;
                addr = localStorage.getItem("address");
                Basecoin = localStorage.getItem("Basecoin");
                try {
                    this.Mywalbal = getresult[task].walletBalance;
                    this.MyDBbal = getresult[task].balance;
                    this.MyDBhold = getresult[task].hold;
                    this.Mycurn = getresult[task].currencySymbol;
                    this.listCurrency = getresult;
                    this.allCurrency = getresult;
                }
                catch (e) {
                    console.log(e, 'error');
                    getresult[task].walletBalance = 0;
                    this.allCurrency = getresult;
                }
                return [2 /*return*/];
            });
        });
    };
    AssetsComponent.prototype.copyText = function () {
        this._clipboardService.copyFromContent(this.originaladdress);
        this.toastr.success("Address Copied", 'SUCCESS');
    };
    AssetsComponent.prototype.sendMaxWithAmount = function () {
        this.withdrawForm.controls["withamount"].setValue(parseFloat(this.MyDBbal).toFixed(8));
    };
    AssetsComponent.prototype.resolved = function (captchaResponse) {
        this.captcha = captchaResponse;
    };
    AssetsComponent.prototype.logout = function () {
        localStorage.removeItem('address');
        localStorage.removeItem('original_address');
        localStorage.removeItem('Basecoin');
        localStorage.removeItem('addresstype');
        localStorage.removeItem('derivationPath');
        this.router.navigateByUrl('');
        this.apiService.walletLogin(false);
    };
    AssetsComponent.prototype.withcalc = function (withvalue) {
        this.withamount = withvalue;
        if (this.withamount == "" || isNaN(this.withamount) || this.withamount <= 0) {
            this.feeamt = 0;
            this.receiveamt = 0;
            return false;
        }
        else if (this.withamount.length >= 20) {
            this.feeamt = 0;
            this.receiveamt = 0;
            return false;
        }
        else {
            var getresult = this.listCurrency;
            this.curCurrency = this.listCurrency[0];
            var feetype;
            var fee;
            feetype = this.curCurrency.feetype;
            fee = this.curCurrency.withdrawfee;
            if (feetype == 1) {
                this.feeamt = this.rounds(+this.withamount * fee / 100);
            }
            else {
                this.feeamt = this.rounds(fee);
            }
            this.receiveamt = this.rounds(+this.withamount - this.feeamt);
        }
    };
    AssetsComponent.prototype.rounds = function (n) {
        var roundValue = (+n).toFixed(8);
        return roundValue;
    };
    AssetsComponent.prototype.isNumber = function (evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
            return false;
        return true;
    };
    AssetsComponent.prototype.withdrawsite = function (datas, SwithdrawForm, type) {
        var _this = this;
        this.submitloader = 1;
        var req = {
            "toAddress": datas.privatekey.value,
            "useraddress": this.originaladdress,
            "withamount": this.withamount,
            "type": 'user'
        };
        this.apiService.btc_withdraw(req).subscribe(function (res) {
            _this.submitloader = 0;
            // this.response=null;
            _this.captcha = '';
            if (res.status == true) {
                _this.toastr.success(res.Message, 'SUCCESS');
                _this.apiService.admin_getbalance({ "address": _this.originaladdress.toLowerCase() }).subscribe(function (ress) {
                    _this.Mywalbal = ress.amount + ress.hold;
                    _this.MyDBbal = ress.amount;
                    _this.MyDBhold = ress.hold;
                });
                SwithdrawForm.reset();
            }
            else {
                _this.captcha = '';
                return false;
                _this.toastr.error(res.Message, 'ERROR');
            }
        });
    };
    AssetsComponent.prototype.deposit = function () {
        var _this = this;
        this.apiService.deposit_hist({ userId: this.user_id }).subscribe(function (res) {
            if (res.length > 0) {
                res.map(function (items) {
                    items.toCurrency = items.comment.split(" ")[0];
                    return items;
                });
                _this.deposit_data = res;
            }
        });
    };
    AssetsComponent.prototype.withdraw = function () {
        var _this = this;
        this.apiService.withdraw_hist({ userId: this.user_id }).subscribe(function (res) {
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var items = res_1[_i];
                for (var _a = 0, _b = _this.listCurrency; _a < _b.length; _a++) {
                    var currencies = _b[_a];
                    if (items.withcurrency === currencies._id) {
                        items.toCurrency = currencies.currencySymbol;
                    }
                }
            }
            _this.withdraw_data = res;
        });
    };
    return AssetsComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css.shim.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".cms-cnt[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{font-size:0.8rem;}\r\n.cms-cnt[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .cms-cnt[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{background:rgba(255,255,255,0.1);margin-bottom:10px;border-radius:5px;border:none;font-size:0.8rem;color:#fff;width:100%;padding:0.25rem;}\r\n.cms-cnt[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{padding:5px 15px;font-size:0.9rem;}\r\n.contact-map-cnt[_ngcontent-%COMP%]{width:100%; margin-bottom: 10px;}\r\n.contact-map-cnt[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{height:150px;width:100%;border-radius:5px;}\r\n.contact-addr-cnt[_ngcontent-%COMP%]{width:100%;margin-top:15px;padding-top:15px;border-top:1px solid rgba(255,255,255,0.1);}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxpQkFBaUIsQ0FBQztBQUNoQywyQ0FBMkMsaUNBQWlDLG1CQUFtQixrQkFBa0IsWUFBWSxpQkFBaUIsV0FBVyxXQUFXLGdCQUFnQixDQUFDO0FBQ3JMLGNBQWMsaUJBQWlCLGlCQUFpQixDQUFDO0FBQ2pELGlCQUFpQixXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFDbEQsd0JBQXdCLGFBQWEsV0FBVyxrQkFBa0IsQ0FBQztBQUNuRSxrQkFBa0IsV0FBVyxnQkFBZ0IsaUJBQWlCLDJDQUEyQyxDQUFDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY21zLWNudCBmb3Jte2ZvbnQtc2l6ZTowLjhyZW07fVxyXG4uY21zLWNudCBmb3JtIGlucHV0LC5jbXMtY250IGZvcm0gdGV4dGFyZWF7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDAuMSk7bWFyZ2luLWJvdHRvbToxMHB4O2JvcmRlci1yYWRpdXM6NXB4O2JvcmRlcjpub25lO2ZvbnQtc2l6ZTowLjhyZW07Y29sb3I6I2ZmZjt3aWR0aDoxMDAlO3BhZGRpbmc6MC4yNXJlbTt9XHJcbi5jbXMtY250IC5idG57cGFkZGluZzo1cHggMTVweDtmb250LXNpemU6MC45cmVtO31cclxuLmNvbnRhY3QtbWFwLWNudHt3aWR0aDoxMDAlOyBtYXJnaW4tYm90dG9tOiAxMHB4O31cclxuLmNvbnRhY3QtbWFwLWNudCBpZnJhbWV7aGVpZ2h0OjE1MHB4O3dpZHRoOjEwMCU7Ym9yZGVyLXJhZGl1czo1cHg7fVxyXG4uY29udGFjdC1hZGRyLWNudHt3aWR0aDoxMDAlO21hcmdpbi10b3A6MTVweDtwYWRkaW5nLXRvcDoxNXB4O2JvcmRlci10b3A6MXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTt9Il19 */"];



/***/ }),

/***/ "./src/app/pages/contact/contact.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_ContactComponent, View_ContactComponent_0, View_ContactComponent_Host_0, ContactComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ContactComponent", function() { return RenderType_ContactComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactComponent_0", function() { return View_ContactComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ContactComponent_Host_0", function() { return View_ContactComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponentNgFactory", function() { return ContactComponentNgFactory; });
/* harmony import */ var _contact_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component.css.shim.ngstyle */ "./src/app/pages/contact/contact.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_ContactComponent = [_contact_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ContactComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ContactComponent, data: {} });

function View_ContactComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "errr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name is required"]))], null, null); }
function View_ContactComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "errr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Name should have minimum 4 characters"]))], null, null); }
function View_ContactComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "errr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Only letters are allowed"]))], null, null); }
function View_ContactComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "errr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Email is required"]))], null, null); }
function View_ContactComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "errr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Must be a valid email address"]))], null, null); }
function View_ContactComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "errr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Subject is required"]))], null, null); }
function View_ContactComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "errr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Message is required"]))], null, null); }
function View_ContactComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "errr"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Please Enter Valid Value"]))], null, null); }
function View_ContactComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-success"], ["type", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Submit"]))], null, null); }
function View_ContactComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-success"], ["type", "submit"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Submit"]))], null, null); }
function View_ContactComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "top-header d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "topheader-icon-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "img-fluid"], ["src", "assets/images/back.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.apiService.historyBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [["class", "header-heading mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Contact"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 79, "div", [["class", "cms-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 78, "div", [["class", "form-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "div", [["class", "contact-map-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 0, "iframe", [["allowfullscreen", ""], ["frameborder", "0"], ["height", "450"], ["style", "border:0;"], ["width", "600"]], [[8, "src", 5]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 67, "form", [["name", "form"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.contactUs(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12)) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 4210688, [["data", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 62, "div", [["class", "form-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 17, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 10, "input", [["class", "form-control"], ["name", "name"], ["pattern", "[A-Za-z]+"], ["placeholder", "Your Name"], ["required", ""], ["type", "text"]], [[2, "form-control-danger", null], [1, "required", 0], [1, "minlength", 0], [1, "maxlength", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.name = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], [], { minlength: [0, "minlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], [], { maxlength: [0, "maxlength"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], [], { pattern: [0, "pattern"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0, p1_0, p2_0, p3_0) { return [p0_0, p1_0, p2_0, p3_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 671744, [["name", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 13, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 8, "input", [["class", "form-control"], ["name", "email"], ["pattern", ".+@.+\\..+"], ["placeholder", "Your Email"], ["required", ""], ["type", "text"]], [[2, "form-control-danger", null], [1, "required", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.email = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], [], { pattern: [0, "pattern"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 671744, [["email", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 10, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 7, "input", [["class", "form-control"], ["name", "subject"], ["placeholder", "Your Subject"], ["required", ""], ["type", "text"]], [[2, "form-control-danger", null], [1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.subject = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 671744, [["subject", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 13, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 8, "textarea", [["name", "message"], ["pattern", "[a-zA-Z0-9\\s_@.,]+"], ["placeholder", "Message"], ["required", ""], ["rows", "3"]], [[2, "form-control-danger", null], [1, "required", 0], [1, "pattern", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.message = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], [], { pattern: [0, "pattern"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 671744, [["message", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](70, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 4, "div", [["class", "input-group justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ContactComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](77, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 7, "div", [["class", "contact-addr-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Where to find us?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](83, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](84, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](85, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_20 = ""; _ck(_v, 19, 0, currVal_20); var currVal_21 = 4; _ck(_v, 20, 0, currVal_21); var currVal_22 = 20; _ck(_v, 21, 0, currVal_22); var currVal_23 = "[A-Za-z]+"; _ck(_v, 22, 0, currVal_23); var currVal_24 = "name"; var currVal_25 = _co.model.name; _ck(_v, 25, 0, currVal_24, currVal_25); var currVal_26 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).touched) && ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).errors == null) ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).errors.required)); _ck(_v, 29, 0, currVal_26); var currVal_27 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).touched) && ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).errors == null) ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).errors.minlength)); _ck(_v, 31, 0, currVal_27); var currVal_28 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).touched) && ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).errors == null) ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).errors.pattern)); _ck(_v, 33, 0, currVal_28); var currVal_39 = ""; _ck(_v, 37, 0, currVal_39); var currVal_40 = ".+@.+\\..+"; _ck(_v, 38, 0, currVal_40); var currVal_41 = "email"; var currVal_42 = _co.model.email; _ck(_v, 41, 0, currVal_41, currVal_42); var currVal_43 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).touched) && ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).errors == null) ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).errors.required)); _ck(_v, 45, 0, currVal_43); var currVal_44 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).touched) && ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).errors == null) ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).errors.pattern)); _ck(_v, 47, 0, currVal_44); var currVal_54 = ""; _ck(_v, 51, 0, currVal_54); var currVal_55 = "subject"; var currVal_56 = _co.model.subject; _ck(_v, 54, 0, currVal_55, currVal_56); var currVal_57 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).touched) && ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).errors == null) ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).errors.required)); _ck(_v, 58, 0, currVal_57); var currVal_68 = ""; _ck(_v, 62, 0, currVal_68); var currVal_69 = "[a-zA-Z0-9\\s_@.,]+"; _ck(_v, 63, 0, currVal_69); var currVal_70 = "message"; var currVal_71 = _co.model.message; _ck(_v, 66, 0, currVal_70, currVal_71); var currVal_72 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).touched) && ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).errors == null) ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).errors.required)); _ck(_v, 70, 0, currVal_72); var currVal_73 = ((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).errors == null) ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).errors.pattern); _ck(_v, 72, 0, currVal_73); var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).valid; _ck(_v, 75, 0, currVal_74); var currVal_75 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).valid; _ck(_v, 77, 0, currVal_75); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.sanitizer.bypassSecurityTrustResourceUrl(_co.map_address); _ck(_v, 9, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).ngClassPending; _ck(_v, 10, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).touched); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).required ? "" : null); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).minlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).minlength : null); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).maxlength ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).maxlength : null); var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).pattern ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).pattern : null); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassUntouched; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassTouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPristine; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassDirty; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassValid; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassInvalid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).ngClassPending; _ck(_v, 17, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]); var currVal_29 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).touched); var currVal_30 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).required ? "" : null); var currVal_31 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).pattern ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).pattern : null); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassUntouched; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassTouched; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassPristine; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassDirty; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassValid; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassInvalid; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 43).ngClassPending; _ck(_v, 35, 0, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_45 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).touched); var currVal_46 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 51).required ? "" : null); var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassUntouched; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassTouched; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassPristine; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassDirty; var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassValid; var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassInvalid; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).ngClassPending; _ck(_v, 49, 0, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51, currVal_52, currVal_53); var currVal_58 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).invalid && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).touched); var currVal_59 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).required ? "" : null); var currVal_60 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).pattern ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).pattern : null); var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).ngClassUntouched; var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).ngClassTouched; var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).ngClassPristine; var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).ngClassDirty; var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).ngClassValid; var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).ngClassInvalid; var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).ngClassPending; _ck(_v, 60, 0, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67); var currVal_76 = _co.adminAddress; _ck(_v, 81, 0, currVal_76); var currVal_77 = _co.adminMail; _ck(_v, 83, 0, currVal_77); var currVal_78 = _co.adminPhone; _ck(_v, 85, 0, currVal_78); }); }
function View_ContactComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-contact", [], null, null, null, View_ContactComponent_0, RenderType_ContactComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ContactComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-contact", _contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], View_ContactComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var ContactComponent = /** @class */ (function () {
    function ContactComponent(apiService, sanitizer, toastr) {
        this.apiService = apiService;
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.model = {};
        this.adminMail = '';
        this.adminPhone = '';
        this.adminAddress = '';
        this.map_address = '';
        this.captcha = "";
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.loader(true);
        this.apiService.get_sitesettings().subscribe(function (result) {
            if (result['data']) {
                _this.apiService.loader(false);
                _this.adminMail = result['data']['contact_mail'];
                _this.adminAddress = result['data']['contact_address'];
                _this.adminPhone = result['data']['contact_phone'];
                // const htmlStrip = this.htmlToPlaintext()
                _this.map_address = "https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=" + _this.htmlToPlaintext(result['data']['contact_address']);
            }
        });
    };
    ContactComponent.prototype.resolved = function (captchaResponse) {
        this.captcha = captchaResponse;
    };
    ContactComponent.prototype.htmlToPlaintext = function (text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
    ContactComponent.prototype.contactUs = function (form) {
        var _this = this;
        console.log('form', this.model);
        if (!this.model.name || !this.model.subject || !this.model.message) {
            this.toastr.error('Please fill all the fields');
        }
        if (this.model.name.trim() == '' || this.model.subject.trim() == '' || this.model.message.trim() == '') {
            this.toastr.error('Enter values properly', 'Error');
        }
        else {
            this.apiService.add_contact(this.model).subscribe(function (res) {
                if (res['success'] == true) {
                    _this.toastr.success('Your query has been placed admin will reply mail to your query', 'Success');
                    form.reset();
                }
                else {
                    _this.toastr.error('Something went wrong try again', 'Error');
                }
            });
        }
    };
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/customer/customer.component.css.shim.ngstyle.js":
/*!***********************************************************************!*\
  !*** ./src/app/pages/customer/customer.component.css.shim.ngstyle.js ***!
  \***********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "./src/app/pages/customer/customer.component.ngfactory.js":
/*!****************************************************************!*\
  !*** ./src/app/pages/customer/customer.component.ngfactory.js ***!
  \****************************************************************/
/*! exports provided: RenderType_CustomerComponent, View_CustomerComponent_0, View_CustomerComponent_Host_0, CustomerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CustomerComponent", function() { return RenderType_CustomerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomerComponent_0", function() { return View_CustomerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomerComponent_Host_0", function() { return View_CustomerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponentNgFactory", function() { return CustomerComponentNgFactory; });
/* harmony import */ var _customer_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.component.css.shim.ngstyle */ "./src/app/pages/customer/customer.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.component */ "./src/app/pages/customer/customer.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_CustomerComponent = [_customer_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CustomerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CustomerComponent, data: {} });

function View_CustomerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "top-header d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "topheader-icon-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "img-fluid"], ["src", "assets/images/back.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.apiService.historyBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [["class", "header-heading mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "cms-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.customerServicesHeading; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.customerServicesContent; _ck(_v, 7, 0, currVal_1); }); }
function View_CustomerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-customer", [], null, null, null, View_CustomerComponent_0, RenderType_CustomerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CustomerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-customer", _customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"], View_CustomerComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/customer/customer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/customer/customer.component.ts ***!
  \******************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");


var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(apiService) {
        this.apiService = apiService;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.loader(true);
        this.apiService.get_cms({ page_name: 'customerservices' }).subscribe(function (result) {
            if (result) {
                _this.apiService.loader(false);
                _this.customerServicesHeading = result['data']['page_heading'];
                _this.customerServicesContent = result['data']['page_content'];
            }
        });
    };
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/pages/fees/fees.component.css.shim.ngstyle.js":
/*!***************************************************************!*\
  !*** ./src/app/pages/fees/fees.component.css.shim.ngstyle.js ***!
  \***************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".fee-details-cnt[_ngcontent-%COMP%]{padding:10px;background:rgba(0,0,0,0.2);border-radius:5px;margin-bottom:10px;}\r\n.cms-cnt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#b6c3d6;font-size:0.8rem;border:none;}\r\n.cms-cnt[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#fff;font-size:0.75rem;border:none;}\r\n.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(2n+1){background:rgba(0,0,0,0.2);}\r\nh2[_ngcontent-%COMP%]{font-size:16px;color:#ff85ca;margin-bottom:0px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlcy9mZWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUJBQWlCLGFBQWEsMkJBQTJCLGtCQUFrQixtQkFBbUIsQ0FBQztBQUMvRiwyQkFBMkIsY0FBYyxpQkFBaUIsWUFBWSxDQUFDO0FBQ3ZFLDJCQUEyQixXQUFXLGtCQUFrQixZQUFZLENBQUM7QUFDckUsMENBQTBDLDJCQUEyQixDQUFDO0FBQ3RFLEdBQUcsZUFBZSxjQUFjLGtCQUFrQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmVlcy9mZWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVlLWRldGFpbHMtY250e3BhZGRpbmc6MTBweDtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4yKTtib3JkZXItcmFkaXVzOjVweDttYXJnaW4tYm90dG9tOjEwcHg7fVxyXG4uY21zLWNudCB0YWJsZSB0aGVhZCB0ciB0aHtjb2xvcjojYjZjM2Q2O2ZvbnQtc2l6ZTowLjhyZW07Ym9yZGVyOm5vbmU7fVxyXG4uY21zLWNudCB0YWJsZSB0Ym9keSB0ciB0ZHtjb2xvcjojZmZmO2ZvbnQtc2l6ZTowLjc1cmVtO2JvcmRlcjpub25lO31cclxuLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUoMm4rMSl7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMik7fVxyXG5oMntmb250LXNpemU6MTZweDtjb2xvcjojZmY4NWNhO21hcmdpbi1ib3R0b206MHB4O30iXX0= */"];



/***/ }),

/***/ "./src/app/pages/fees/fees.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/pages/fees/fees.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_FeesComponent, View_FeesComponent_0, View_FeesComponent_Host_0, FeesComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_FeesComponent", function() { return RenderType_FeesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FeesComponent_0", function() { return View_FeesComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_FeesComponent_Host_0", function() { return View_FeesComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesComponentNgFactory", function() { return FeesComponentNgFactory; });
/* harmony import */ var _fees_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fees.component.css.shim.ngstyle */ "./src/app/pages/fees/fees.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fees.component */ "./src/app/pages/fees/fees.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_FeesComponent = [_fees_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_FeesComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_FeesComponent, data: {} });

function View_FeesComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", " (", ")"]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.currencySymbol; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.minwithamt; var currVal_2 = _v.context.$implicit.currencySymbol; _ck(_v, 4, 0, currVal_1, currVal_2); }); }
function View_FeesComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", " (", ")"]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.currencySymbol; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.withdrawfee; var currVal_2 = _v.context.$implicit.currencySymbol; _ck(_v, 4, 0, currVal_1, currVal_2); }); }
function View_FeesComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "top-header d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "topheader-icon-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "img-fluid"], ["src", "assets/images/back.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.apiService.historyBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [["class", "header-heading mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fees"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 36, "div", [["class", "cms-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Fees Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "div", [["class", "fee-details-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Deposit Fee"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 3, "div", [["class", "fee-details-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Trading fee"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Cash Withdrawal Minimum Amount"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 10, "div", [["class", "table-responsive mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 9, "table", [["class", "table table-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 5, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Currency"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Minimum Withdrawal Amount"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FeesComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 10, "div", [["class", "table-responsive mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 9, "table", [["class", "table table-striped"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 5, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 4, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Currency"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Minimum Withdrawal Amount"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_FeesComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.currencyData; _ck(_v, 31, 0, currVal_4); var currVal_5 = _co.currencyData; _ck(_v, 42, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.feeDetails.feeheader; _ck(_v, 7, 0, currVal_0); var currVal_1 = _co.feeDetails.feedeposit; _ck(_v, 13, 0, currVal_1); var currVal_2 = _co.feeDetails.feedepositvalue; _ck(_v, 14, 0, currVal_2); var currVal_3 = _co.feeDetails.feetrade; _ck(_v, 18, 0, currVal_3); }); }
function View_FeesComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-fees", [], null, null, null, View_FeesComponent_0, RenderType_FeesComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _fees_component__WEBPACK_IMPORTED_MODULE_3__["FeesComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var FeesComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-fees", _fees_component__WEBPACK_IMPORTED_MODULE_3__["FeesComponent"], View_FeesComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/fees/fees.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/fees/fees.component.ts ***!
  \**********************************************/
/*! exports provided: FeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeesComponent", function() { return FeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");


var FeesComponent = /** @class */ (function () {
    function FeesComponent(apiService) {
        this.apiService = apiService;
        this.feeDetails = { 'feedeposit': '', 'feedepositvalue': '', 'feetrade': '', 'feetradevalue': '', 'feeheader': '' };
        this.currencyData = [];
    }
    FeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.get_cms_fee().subscribe(function (result) {
            console.log(result);
            result.data.map(function (items) {
                _this.feeDetails[items.page_name] = items['page_content'];
            });
        });
        this.apiService.get_all_currencies().subscribe(function (resData) {
            _this.currencyData = resData.data;
        });
    };
    return FeesComponent;
}());



/***/ }),

/***/ "./src/app/pages/knowledge/knowledge.component.css.shim.ngstyle.js":
/*!*************************************************************************!*\
  !*** ./src/app/pages/knowledge/knowledge.component.css.shim.ngstyle.js ***!
  \*************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2tub3dsZWRnZS9rbm93bGVkZ2UuY29tcG9uZW50LmNzcyJ9 */"];



/***/ }),

/***/ "./src/app/pages/knowledge/knowledge.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/pages/knowledge/knowledge.component.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: RenderType_KnowledgeComponent, View_KnowledgeComponent_0, View_KnowledgeComponent_Host_0, KnowledgeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_KnowledgeComponent", function() { return RenderType_KnowledgeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_KnowledgeComponent_0", function() { return View_KnowledgeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_KnowledgeComponent_Host_0", function() { return View_KnowledgeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeComponentNgFactory", function() { return KnowledgeComponentNgFactory; });
/* harmony import */ var _knowledge_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knowledge.component.css.shim.ngstyle */ "./src/app/pages/knowledge/knowledge.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _knowledge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knowledge.component */ "./src/app/pages/knowledge/knowledge.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_KnowledgeComponent = [_knowledge_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_KnowledgeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_KnowledgeComponent, data: {} });

function View_KnowledgeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "top-header d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "topheader-icon-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "img-fluid"], ["src", "assets/images/back.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.apiService.historyBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [["class", "header-heading mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "cms-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.knowledgebaseHeading; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.knowledgebaseContent; _ck(_v, 7, 0, currVal_1); }); }
function View_KnowledgeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-knowledge", [], null, null, null, View_KnowledgeComponent_0, RenderType_KnowledgeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _knowledge_component__WEBPACK_IMPORTED_MODULE_2__["KnowledgeComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var KnowledgeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-knowledge", _knowledge_component__WEBPACK_IMPORTED_MODULE_2__["KnowledgeComponent"], View_KnowledgeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/knowledge/knowledge.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/knowledge/knowledge.component.ts ***!
  \********************************************************/
/*! exports provided: KnowledgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeComponent", function() { return KnowledgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");


var KnowledgeComponent = /** @class */ (function () {
    function KnowledgeComponent(apiService) {
        this.apiService = apiService;
    }
    KnowledgeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.loader(true);
        this.apiService.get_cms({ page_name: 'knowledgebase' }).subscribe(function (result) {
            if (result) {
                _this.apiService.loader(false);
                _this.knowledgebaseHeading = result['data']['page_heading'];
                _this.knowledgebaseContent = result['data']['page_content'];
            }
        });
    };
    return KnowledgeComponent;
}());



/***/ }),

/***/ "./src/app/pages/markets/markets.component.css.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/pages/markets/markets.component.css.shim.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".color-coin-cnt[_ngcontent-%COMP%]{width:100%;padding:10px 0px;color:#fff;text-align:center;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;overflow-x:auto;}\r\n.color-coin[_ngcontent-%COMP%]{padding:10px 10px;border-radius:5px;background:#000;margin:0 5px;min-width:110px;}\r\n.color-coin[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:0.9rem;margin-bottom:2px;font-weight:500;}\r\n.color-coin[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:0.7rem;margin-bottom:2px;}\r\n.color-coin.coin-bg-0[_ngcontent-%COMP%]{background: rgba(235,132,124,1);\r\nbackground: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(235,132,124,1)), color-stop(100%, rgba(255,69,56,1)));\r\nbackground: -webkit-gradient(linear, left top, left bottom, from(rgba(235,132,124,1)), to(rgba(255,69,56,1)));\r\nbackground: linear-gradient(to bottom, rgba(235,132,124,1) 0%, rgba(255,69,56,1) 100%);\r\n-webkit-filter: progid:DXImageTransform.marquee-cnt.gradient( startColorstr='#eb847c', endColorstr='#ff4538', GradientType=0 );\r\n        filter: progid:DXImageTransform.marquee-cnt.gradient( startColorstr='#eb847c', endColorstr='#ff4538', GradientType=0 );}\r\n.color-coin.coin-bg-1[_ngcontent-%COMP%]{background: rgba(212,122,239,1);\r\nbackground: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(212,122,239,1)), color-stop(100%, rgba(208,56,254,1)));\r\nbackground: -webkit-gradient(linear, left top, left bottom, from(rgba(212,122,239,1)), to(rgba(208,56,254,1)));\r\nbackground: linear-gradient(to bottom, rgba(212,122,239,1) 0%, rgba(208,56,254,1) 100%);\r\n-webkit-filter: progid:DXImageTransform.marquee-cnt.gradient( startColorstr='#d47aef', endColorstr='#d038fe', GradientType=0 );\r\n        filter: progid:DXImageTransform.marquee-cnt.gradient( startColorstr='#d47aef', endColorstr='#d038fe', GradientType=0 );}\r\n.color-coin.coin-bg-2[_ngcontent-%COMP%]{background: rgba(150,209,245,1);\r\nbackground: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(150,209,245,1)), color-stop(100%, rgba(67,130,170,1)));\r\nbackground: -webkit-gradient(linear, left top, left bottom, from(rgba(150,209,245,1)), to(rgba(67,130,170,1)));\r\nbackground: linear-gradient(to bottom, rgba(150,209,245,1) 0%, rgba(67,130,170,1) 100%);\r\n-webkit-filter: progid:DXImageTransform.marquee-cnt.gradient( startColorstr='#96d1f5', endColorstr='#4382aa', GradientType=0 );\r\n        filter: progid:DXImageTransform.marquee-cnt.gradient( startColorstr='#96d1f5', endColorstr='#4382aa', GradientType=0 );}\r\n.color-coin.coin-bg-3[_ngcontent-%COMP%]{background: rgba(206,102,140,1);\r\nbackground: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(206,102,140,1)), color-stop(100%, rgba(238,28,105,1)));\r\nbackground: -webkit-gradient(linear, left top, left bottom, from(rgba(206,102,140,1)), to(rgba(238,28,105,1)));\r\nbackground: linear-gradient(to bottom, rgba(206,102,140,1) 0%, rgba(238,28,105,1) 100%);\r\n-webkit-filter: progid:DXImageTransform.marquee-cnt.gradient( startColorstr='#ce668c', endColorstr='#ee1c69', GradientType=0 );\r\n        filter: progid:DXImageTransform.marquee-cnt.gradient( startColorstr='#ce668c', endColorstr='#ee1c69', GradientType=0 );}\r\n.color-coin.coin-bg-4[_ngcontent-%COMP%]{background: rgba(247,168,131,1);\r\nbackground: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(247,168,131,1)), color-stop(100%, rgba(245,115,59,1)));\r\nbackground: -webkit-gradient(linear, left top, left bottom, from(rgba(247,168,131,1)), to(rgba(245,115,59,1)));\r\nbackground: linear-gradient(to bottom, rgba(247,168,131,1) 0%, rgba(245,115,59,1) 100%);\r\n-webkit-filter: progid:DXImageTransform.marquee-cnt.gradient( startColorstr='#f7a883', endColorstr='#f5733b', GradientType=0 );\r\n        filter: progid:DXImageTransform.marquee-cnt.gradient( startColorstr='#f7a883', endColorstr='#f5733b', GradientType=0 );}\r\n.color-coin.coin-bg-5[_ngcontent-%COMP%]{background: rgba(144,70,247,1);\r\nbackground: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(144,70,247,1)), color-stop(100%, rgba(119,97,148,1)));\r\nbackground: -webkit-gradient(linear, left top, left bottom, from(rgba(144,70,247,1)), to(rgba(119,97,148,1)));\r\nbackground: linear-gradient(to bottom, rgba(144,70,247,1) 0%, rgba(119,97,148,1) 100%);\r\n-webkit-filter: progid:DXImageTransform.marquee-cnt.gradient( startColorstr='#9046f7', endColorstr='#776194', GradientType=0 );\r\n        filter: progid:DXImageTransform.marquee-cnt.gradient( startColorstr='#9046f7', endColorstr='#776194', GradientType=0 );}\r\n.color-coin.coin-bg-dark[_ngcontent-%COMP%]{background:rgba(255,255,255,0.07);border-radius:0px;}\r\n.market-table-cnt[_ngcontent-%COMP%]{width:100%;padding:5px 10px;}\r\n.market-table-cnt[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{background:rgba(0,0,0,0.3);border:none;}\r\n.market-table-cnt[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#79828f;border:none;border-bottom:1px solid transparent;padding:5px 10px;font-size:0.9rem;}\r\n.market-table-cnt[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#fff;border:none;border-bottom:1px solid #fff;background:transparent;}\r\n.home-search[_ngcontent-%COMP%]{position:absolute;right:0px;top:0px;background:rgba(255,255,255,0.1);padding:5px;border-radius:0px;}\r\n.home-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:18px;}\r\n.home-search-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{min-height:100vh;border-radius:0px;background:#383848;}\r\n.home-search-modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]{margin:0;}\r\n.home-search-modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#fff;text-shadow:none;}\r\n.home-search-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{padding:0.5rem 1rem;border:none;background:rgba(0,0,0,0.2);}\r\n.home-search-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:rgba(255,255,255,0.1);border:none;color:#fff;border-radius:5px;padding:5px;}\r\n.marquee[_ngcontent-%COMP%] {\r\ntop: 6em;\r\nposition: relative;\r\nbox-sizing: border-box;\r\n-webkit-animation: marquee 3s linear infinite;\r\n        animation: marquee 3s linear infinite;\r\n}\r\n.marquee[_ngcontent-%COMP%]:hover {\r\n-webkit-animation-play-state: paused;\r\n        animation-play-state: paused;\r\n}\r\n\r\n@-webkit-keyframes marquee {\r\n0%   { top:   2em }\r\n100% { top: -2em }\r\n}\r\n@keyframes marquee {\r\n0%   { top:   2em }\r\n100% { top: -2em }\r\n}\r\n\r\n.marquee-cnt[_ngcontent-%COMP%]   .marquee[_ngcontent-%COMP%] {\r\nmargin: 0;\r\npadding: 0 1em;\r\nline-height: 1.5em;\r\nfont: 0.89em 'Segoe UI', Tahoma, Helvetica, Sans-Serif;\r\n}\r\n.marquee-cnt[_ngcontent-%COMP%]:before, .marquee-cnt[_ngcontent-%COMP%]::before, .marquee-cnt[_ngcontent-%COMP%]:after, .marquee-cnt[_ngcontent-%COMP%]::after {\r\nleft: 0;\r\nz-index: 1;\r\ncontent: '';\r\nposition: absolute;\r\npointer-events: none;\r\nwidth: 100%; \r\nbackground-image: -webkit-gradient(linear, left top, left bottom, from(#FFF), to(rgba(255,255,255,0)));\r\nbackground-image: linear-gradient(top, #FFF, rgba(255,255,255,0));\r\n}\r\n.marquee-cnt[_ngcontent-%COMP%]:after, .marquee-cnt[_ngcontent-%COMP%]::after {\r\nbottom: 0;\r\n-webkit-transform: rotate(180deg);\r\n        transform: rotate(180deg);\r\n}\r\n.marquee-cnt[_ngcontent-%COMP%]:before, .marquee-cnt[_ngcontent-%COMP%]::before {\r\ntop: 0;\r\n}\r\n.marquee-cnt[_ngcontent-%COMP%]{height:30px;overflow:hidden;margin:4px 0;}\r\n.home-search-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{padding-top:0px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFya2V0cy9tYXJrZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLFdBQVcsaUJBQWlCLFdBQVcsa0JBQWtCLG9CQUFhLEFBQWIsYUFBYSw4QkFBbUIsQUFBbkIsNkJBQW1CLEFBQW5CLG1CQUFtQixnQkFBZ0IsQ0FBQztBQUMxSCxZQUFZLGtCQUFrQixrQkFBa0IsZ0JBQWdCLGFBQWEsZ0JBQWdCLENBQUM7QUFDOUYsZUFBZSxpQkFBaUIsa0JBQWtCLGdCQUFnQixDQUFDO0FBQ25FLGNBQWMsaUJBQWlCLGtCQUFrQixDQUFDO0FBQ2xELHNCQUFzQixnQ0FBZ0M7QUFFdEQsOEhBQThIO0FBSTlILDhHQUF1RjtBQUF2Rix1RkFBdUY7QUFDdkYsK0hBQXVIO1FBQXZILHVIQUF1SCxDQUFDO0FBQ3hILHNCQUFzQixnQ0FBZ0M7QUFFdEQsK0hBQStIO0FBSS9ILCtHQUF3RjtBQUF4Rix3RkFBd0Y7QUFDeEYsK0hBQXVIO1FBQXZILHVIQUF1SCxDQUFDO0FBQ3hILHNCQUFzQixnQ0FBZ0M7QUFFdEQsK0hBQStIO0FBSS9ILCtHQUF3RjtBQUF4Rix3RkFBd0Y7QUFDeEYsK0hBQXVIO1FBQXZILHVIQUF1SCxDQUFDO0FBQ3hILHNCQUFzQixnQ0FBZ0M7QUFFdEQsK0hBQStIO0FBSS9ILCtHQUF3RjtBQUF4Rix3RkFBd0Y7QUFDeEYsK0hBQXVIO1FBQXZILHVIQUF1SCxDQUFDO0FBQ3hILHNCQUFzQixnQ0FBZ0M7QUFFdEQsK0hBQStIO0FBSS9ILCtHQUF3RjtBQUF4Rix3RkFBd0Y7QUFDeEYsK0hBQXVIO1FBQXZILHVIQUF1SCxDQUFDO0FBQ3hILHNCQUFzQiwrQkFBK0I7QUFFckQsOEhBQThIO0FBSTlILDhHQUF1RjtBQUF2Rix1RkFBdUY7QUFDdkYsK0hBQXVIO1FBQXZILHVIQUF1SCxDQUFDO0FBQ3hILHlCQUF5QixrQ0FBa0Msa0JBQWtCLENBQUM7QUFDOUUsa0JBQWtCLFdBQVcsaUJBQWlCLENBQUM7QUFFL0MsNEJBQTRCLDJCQUEyQixZQUFZLENBQUM7QUFDcEUsaUNBQWlDLGNBQWMsWUFBWSxvQ0FBb0MsaUJBQWlCLGlCQUFpQixDQUFDO0FBQ2xJLHdDQUF3QyxXQUFXLFlBQVksNkJBQTZCLHVCQUF1QixDQUFDO0FBRXBILGFBQWEsa0JBQWtCLFVBQVUsUUFBUSxpQ0FBaUMsWUFBWSxrQkFBa0IsQ0FBQztBQUNqSCxpQkFBaUIsWUFBWSxDQUFDO0FBQzlCLGtDQUFrQyxpQkFBaUIsa0JBQWtCLG1CQUFtQixDQUFDO0FBQ3pGLGlDQUFpQyxTQUFTLENBQUM7QUFDM0MsMEJBQTBCLFdBQVcsaUJBQWlCLENBQUM7QUFDdkQsaUNBQWlDLG9CQUFvQixZQUFZLDJCQUEyQixDQUFDO0FBQzdGLHVDQUF1QyxpQ0FBaUMsWUFBWSxXQUFXLGtCQUFrQixZQUFZLENBQUM7QUFFOUg7QUFDQSxTQUFTO0FBQ1QsbUJBQW1CO0FBQ25CLHVCQUF1QjtBQUN2Qiw4Q0FBc0M7UUFBdEMsc0NBQXNDO0NBQ3JDO0FBRUQ7QUFDQSxxQ0FBNkI7UUFBN0IsNkJBQTZCO0NBQzVCO0FBRUQsbUJBQW1CO0FBQ25CO0FBQ0EsT0FBTyxVQUFVLEVBQUU7QUFDbkIsT0FBTyxTQUFTLEVBQUU7Q0FDakI7QUFIRDtBQUNBLE9BQU8sVUFBVSxFQUFFO0FBQ25CLE9BQU8sU0FBUyxFQUFFO0NBQ2pCO0FBRUQseUJBQXlCO0FBQ3pCO0FBQ0EsVUFBVTtBQUNWLGVBQWU7QUFDZixtQkFBbUI7QUFDbkIsdURBQXVEO0NBQ3REO0FBRUQ7O0FBRUEsUUFBUTtBQUNSLFdBQVc7QUFDWCxZQUFZO0FBQ1osbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixZQUFZLENBQUMsZ0JBQWdCO0FBQzdCLHVHQUFrRTtBQUFsRSxrRUFBa0U7Q0FDakU7QUFFRDtBQUNBLFVBQVU7QUFDVixrQ0FBMEI7UUFBMUIsMEJBQTBCO0NBQ3pCO0FBRUQ7QUFDQSxPQUFPO0NBQ047QUFDRCxhQUFhLFlBQVksZ0JBQWdCLGFBQWEsQ0FBQztBQUN2RCwrQkFBK0IsZ0JBQWdCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXJrZXRzL21hcmtldHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xvci1jb2luLWNudHt3aWR0aDoxMDAlO3BhZGRpbmc6MTBweCAwcHg7Y29sb3I6I2ZmZjt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246cm93O292ZXJmbG93LXg6YXV0bzt9XHJcbi5jb2xvci1jb2lue3BhZGRpbmc6MTBweCAxMHB4O2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQ6IzAwMDttYXJnaW46MCA1cHg7bWluLXdpZHRoOjExMHB4O31cclxuLmNvbG9yLWNvaW4gaDN7Zm9udC1zaXplOjAuOXJlbTttYXJnaW4tYm90dG9tOjJweDtmb250LXdlaWdodDo1MDA7fVxyXG4uY29sb3ItY29pbiBwe2ZvbnQtc2l6ZTowLjdyZW07bWFyZ2luLWJvdHRvbToycHg7fVxyXG4uY29sb3ItY29pbi5jb2luLWJnLTB7YmFja2dyb3VuZDogcmdiYSgyMzUsMTMyLDEyNCwxKTtcclxuYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDIzNSwxMzIsMTI0LDEpIDAlLCByZ2JhKDI1NSw2OSw1NiwxKSAxMDAlKTtcclxuYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjM1LDEzMiwxMjQsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjU1LDY5LDU2LDEpKSk7XHJcbmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyMzUsMTMyLDEyNCwxKSAwJSwgcmdiYSgyNTUsNjksNTYsMSkgMTAwJSk7XHJcbmJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjM1LDEzMiwxMjQsMSkgMCUsIHJnYmEoMjU1LDY5LDU2LDEpIDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyMzUsMTMyLDEyNCwxKSAwJSwgcmdiYSgyNTUsNjksNTYsMSkgMTAwJSk7XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjM1LDEzMiwxMjQsMSkgMCUsIHJnYmEoMjU1LDY5LDU2LDEpIDEwMCUpO1xyXG5maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLm1hcnF1ZWUtY250LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZWI4NDdjJywgZW5kQ29sb3JzdHI9JyNmZjQ1MzgnLCBHcmFkaWVudFR5cGU9MCApO31cclxuLmNvbG9yLWNvaW4uY29pbi1iZy0xe2JhY2tncm91bmQ6IHJnYmEoMjEyLDEyMiwyMzksMSk7XHJcbmJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyMTIsMTIyLDIzOSwxKSAwJSwgcmdiYSgyMDgsNTYsMjU0LDEpIDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgyMTIsMTIyLDIzOSwxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyMDgsNTYsMjU0LDEpKSk7XHJcbmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyMTIsMTIyLDIzOSwxKSAwJSwgcmdiYSgyMDgsNTYsMjU0LDEpIDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDIxMiwxMjIsMjM5LDEpIDAlLCByZ2JhKDIwOCw1NiwyNTQsMSkgMTAwJSk7XHJcbmJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDIxMiwxMjIsMjM5LDEpIDAlLCByZ2JhKDIwOCw1NiwyNTQsMSkgMTAwJSk7XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjEyLDEyMiwyMzksMSkgMCUsIHJnYmEoMjA4LDU2LDI1NCwxKSAxMDAlKTtcclxuZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5tYXJxdWVlLWNudC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2Q0N2FlZicsIGVuZENvbG9yc3RyPScjZDAzOGZlJywgR3JhZGllbnRUeXBlPTAgKTt9XHJcbi5jb2xvci1jb2luLmNvaW4tYmctMntiYWNrZ3JvdW5kOiByZ2JhKDE1MCwyMDksMjQ1LDEpO1xyXG5iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMTUwLDIwOSwyNDUsMSkgMCUsIHJnYmEoNjcsMTMwLDE3MCwxKSAxMDAlKTtcclxuYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMTUwLDIwOSwyNDUsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoNjcsMTMwLDE3MCwxKSkpO1xyXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMTUwLDIwOSwyNDUsMSkgMCUsIHJnYmEoNjcsMTMwLDE3MCwxKSAxMDAlKTtcclxuYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgxNTAsMjA5LDI0NSwxKSAwJSwgcmdiYSg2NywxMzAsMTcwLDEpIDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgxNTAsMjA5LDI0NSwxKSAwJSwgcmdiYSg2NywxMzAsMTcwLDEpIDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDE1MCwyMDksMjQ1LDEpIDAlLCByZ2JhKDY3LDEzMCwxNzAsMSkgMTAwJSk7XHJcbmZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0ubWFycXVlZS1jbnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM5NmQxZjUnLCBlbmRDb2xvcnN0cj0nIzQzODJhYScsIEdyYWRpZW50VHlwZT0wICk7fVxyXG4uY29sb3ItY29pbi5jb2luLWJnLTN7YmFja2dyb3VuZDogcmdiYSgyMDYsMTAyLDE0MCwxKTtcclxuYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDIwNiwxMDIsMTQwLDEpIDAlLCByZ2JhKDIzOCwyOCwxMDUsMSkgMTAwJSk7XHJcbmJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDIwNiwxMDIsMTQwLDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDIzOCwyOCwxMDUsMSkpKTtcclxuYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDIwNiwxMDIsMTQwLDEpIDAlLCByZ2JhKDIzOCwyOCwxMDUsMSkgMTAwJSk7XHJcbmJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjA2LDEwMiwxNDAsMSkgMCUsIHJnYmEoMjM4LDI4LDEwNSwxKSAxMDAlKTtcclxuYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjA2LDEwMiwxNDAsMSkgMCUsIHJnYmEoMjM4LDI4LDEwNSwxKSAxMDAlKTtcclxuYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyMDYsMTAyLDE0MCwxKSAwJSwgcmdiYSgyMzgsMjgsMTA1LDEpIDEwMCUpO1xyXG5maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLm1hcnF1ZWUtY250LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjY2U2NjhjJywgZW5kQ29sb3JzdHI9JyNlZTFjNjknLCBHcmFkaWVudFR5cGU9MCApO31cclxuLmNvbG9yLWNvaW4uY29pbi1iZy00e2JhY2tncm91bmQ6IHJnYmEoMjQ3LDE2OCwxMzEsMSk7XHJcbmJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNDcsMTY4LDEzMSwxKSAwJSwgcmdiYSgyNDUsMTE1LDU5LDEpIDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNDcsMTY4LDEzMSwxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgyNDUsMTE1LDU5LDEpKSk7XHJcbmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNDcsMTY4LDEzMSwxKSAwJSwgcmdiYSgyNDUsMTE1LDU5LDEpIDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI0NywxNjgsMTMxLDEpIDAlLCByZ2JhKDI0NSwxMTUsNTksMSkgMTAwJSk7XHJcbmJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI0NywxNjgsMTMxLDEpIDAlLCByZ2JhKDI0NSwxMTUsNTksMSkgMTAwJSk7XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjQ3LDE2OCwxMzEsMSkgMCUsIHJnYmEoMjQ1LDExNSw1OSwxKSAxMDAlKTtcclxuZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5tYXJxdWVlLWNudC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2Y3YTg4MycsIGVuZENvbG9yc3RyPScjZjU3MzNiJywgR3JhZGllbnRUeXBlPTAgKTt9XHJcbi5jb2xvci1jb2luLmNvaW4tYmctNXtiYWNrZ3JvdW5kOiByZ2JhKDE0NCw3MCwyNDcsMSk7XHJcbmJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgxNDQsNzAsMjQ3LDEpIDAlLCByZ2JhKDExOSw5NywxNDgsMSkgMTAwJSk7XHJcbmJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDE0NCw3MCwyNDcsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMTE5LDk3LDE0OCwxKSkpO1xyXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMTQ0LDcwLDI0NywxKSAwJSwgcmdiYSgxMTksOTcsMTQ4LDEpIDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDE0NCw3MCwyNDcsMSkgMCUsIHJnYmEoMTE5LDk3LDE0OCwxKSAxMDAlKTtcclxuYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMTQ0LDcwLDI0NywxKSAwJSwgcmdiYSgxMTksOTcsMTQ4LDEpIDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDE0NCw3MCwyNDcsMSkgMCUsIHJnYmEoMTE5LDk3LDE0OCwxKSAxMDAlKTtcclxuZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5tYXJxdWVlLWNudC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzkwNDZmNycsIGVuZENvbG9yc3RyPScjNzc2MTk0JywgR3JhZGllbnRUeXBlPTAgKTt9XHJcbi5jb2xvci1jb2luLmNvaW4tYmctZGFya3tiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMC4wNyk7Ym9yZGVyLXJhZGl1czowcHg7fVxyXG4ubWFya2V0LXRhYmxlLWNudHt3aWR0aDoxMDAlO3BhZGRpbmc6NXB4IDEwcHg7fVxyXG5cclxuLm1hcmtldC10YWJsZS1jbnQgLm5hdi10YWJze2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjMpO2JvcmRlcjpub25lO31cclxuLm1hcmtldC10YWJsZS1jbnQgLm5hdi10YWJzIGxpIGF7Y29sb3I6Izc5ODI4Zjtib3JkZXI6bm9uZTtib3JkZXItYm90dG9tOjFweCBzb2xpZCB0cmFuc3BhcmVudDtwYWRkaW5nOjVweCAxMHB4O2ZvbnQtc2l6ZTowLjlyZW07fVxyXG4ubWFya2V0LXRhYmxlLWNudCAubmF2LXRhYnMgbGkgYS5hY3RpdmV7Y29sb3I6I2ZmZjtib3JkZXI6bm9uZTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZmZmO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7fVxyXG5cclxuLmhvbWUtc2VhcmNoe3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjBweDt0b3A6MHB4O2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwwLjEpO3BhZGRpbmc6NXB4O2JvcmRlci1yYWRpdXM6MHB4O31cclxuLmhvbWUtc2VhcmNoIGltZ3toZWlnaHQ6MThweDt9XHJcbi5ob21lLXNlYXJjaC1tb2RhbCAubW9kYWwtY29udGVudHttaW4taGVpZ2h0OjEwMHZoO2JvcmRlci1yYWRpdXM6MHB4O2JhY2tncm91bmQ6IzM4Mzg0ODt9XHJcbi5ob21lLXNlYXJjaC1tb2RhbCAubW9kYWwtZGlhbG9ne21hcmdpbjowO31cclxuLmhvbWUtc2VhcmNoLW1vZGFsIC5jbG9zZXtjb2xvcjojZmZmO3RleHQtc2hhZG93Om5vbmU7fVxyXG4uaG9tZS1zZWFyY2gtbW9kYWwgLm1vZGFsLWhlYWRlcntwYWRkaW5nOjAuNXJlbSAxcmVtO2JvcmRlcjpub25lO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjIpO31cclxuLmhvbWUtc2VhcmNoLW1vZGFsIC5tb2RhbC1oZWFkZXIgaW5wdXR7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDAuMSk7Ym9yZGVyOm5vbmU7Y29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjVweDtwYWRkaW5nOjVweDt9XHJcblxyXG4ubWFycXVlZSB7XHJcbnRvcDogNmVtO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmFuaW1hdGlvbjogbWFycXVlZSAzcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5tYXJxdWVlOmhvdmVyIHtcclxuYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcclxufVxyXG5cclxuLyogTWFrZSBpdCBtb3ZlISAqL1xyXG5Aa2V5ZnJhbWVzIG1hcnF1ZWUge1xyXG4wJSAgIHsgdG9wOiAgIDJlbSB9XHJcbjEwMCUgeyB0b3A6IC0yZW0gfVxyXG59XHJcblxyXG4vKiBNYWtlIGl0IGxvb2sgcHJldHR5ICovXHJcbi5tYXJxdWVlLWNudCAubWFycXVlZSB7XHJcbm1hcmdpbjogMDtcclxucGFkZGluZzogMCAxZW07XHJcbmxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuZm9udDogMC44OWVtICdTZWdvZSBVSScsIFRhaG9tYSwgSGVsdmV0aWNhLCBTYW5zLVNlcmlmO1xyXG59XHJcblxyXG4ubWFycXVlZS1jbnQ6YmVmb3JlLCAubWFycXVlZS1jbnQ6OmJlZm9yZSxcclxuLm1hcnF1ZWUtY250OmFmdGVyLCAgLm1hcnF1ZWUtY250OjphZnRlciB7XHJcbmxlZnQ6IDA7XHJcbnotaW5kZXg6IDE7XHJcbmNvbnRlbnQ6ICcnO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnBvaW50ZXItZXZlbnRzOiBub25lO1xyXG53aWR0aDogMTAwJTsgLypoZWlnaHQ6IDJlbTsqL1xyXG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjRkZGLCByZ2JhKDI1NSwyNTUsMjU1LDApKTtcclxufVxyXG5cclxuLm1hcnF1ZWUtY250OmFmdGVyLCAubWFycXVlZS1jbnQ6OmFmdGVyIHtcclxuYm90dG9tOiAwO1xyXG50cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4ubWFycXVlZS1jbnQ6YmVmb3JlLCAubWFycXVlZS1jbnQ6OmJlZm9yZSB7XHJcbnRvcDogMDtcclxufVxyXG4ubWFycXVlZS1jbnR7aGVpZ2h0OjMwcHg7b3ZlcmZsb3c6aGlkZGVuO21hcmdpbjo0cHggMDt9XHJcbi5ob21lLXNlYXJjaC1tb2RhbCAubW9kYWwtYm9keXtwYWRkaW5nLXRvcDowcHg7fVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"];



/***/ }),

/***/ "./src/app/pages/markets/markets.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/pages/markets/markets.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_MarketsComponent, View_MarketsComponent_0, View_MarketsComponent_Host_0, MarketsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MarketsComponent", function() { return RenderType_MarketsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MarketsComponent_0", function() { return View_MarketsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MarketsComponent_Host_0", function() { return View_MarketsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketsComponentNgFactory", function() { return MarketsComponentNgFactory; });
/* harmony import */ var _markets_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./markets.component.css.shim.ngstyle */ "./src/app/pages/markets/markets.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _markets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./markets.component */ "./src/app/pages/markets/markets.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_MarketsComponent = [_markets_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MarketsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MarketsComponent, data: {} });

function View_MarketsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", " \u2248"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["$", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 2)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "color-coin coin-bg-", (_v.context.index % 6), ""); _ck(_v, 0, 0, currVal_0); var currVal_1 = _v.context.$implicit.pair; _ck(_v, 2, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.marketPrice, "1.8-8")); _ck(_v, 4, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.usdEql, "1.8-8")); _ck(_v, 7, 0, currVal_3); }); }
function View_MarketsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "a", [["class", "nav-link"], ["data-toggle", "tab"], ["href", "#btc"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.loadPairs(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](3, { "active": 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "nav-link"; var currVal_1 = _ck(_v, 3, 0, (_co.selectedCurrency === _v.context.$implicit.currency)); _ck(_v, 2, 0, currVal_0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.currency; _ck(_v, 4, 0, currVal_2); }); }
function View_MarketsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, "tr", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.tradeView(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "span", [["class", "white-txt lg-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 6, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "span", [["class", "white-txt lg-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](10, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](12, null, ["$", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](13, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "span", [["class", "lg-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](16, null, ["", "%"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](17, 2)], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.pair; _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.marketPrice, "1.8-8")); _ck(_v, 5, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _ck(_v, 10, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), (_v.context.$implicit.price ? _v.context.$implicit.price : _v.context.$implicit.marketPrice), "1.8-8")); _ck(_v, 9, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 12, 0, _ck(_v, 13, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.usdEql, "1.2-2")); _ck(_v, 12, 0, currVal_3); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 16, 0, _ck(_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.change, "1.2-2")); _ck(_v, 16, 0, currVal_4); }); }
function View_MarketsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 125, "div", [["class", "home-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 10, "div", [["class", "home-header d-flex justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 7, "ul", [["class", "nav nav-tabs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "a", [["class", "nav-link"], ["data-toggle", "tab"], ["routerLink", "/trade/ETH_BTC"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Trade"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "a", [["class", "nav-link active"], ["data-toggle", "tab"], ["href", "#markets"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Markets"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "span", [["class", "home-search"], ["data-target", "#login1"], ["data-toggle", "modal"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "img", [["src", "assets/images/login-icon.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 113, "div", [["class", "home-content-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "div", [["class", "marquee-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "p", [["class", "marquee"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 0, "img", [["src", "assets/images/news.png"], ["style", "height: 15px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u00A0\u00A0 ETH & EOS Wallets - Only applicable on the website "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 108, "div", [["class", "tab-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 68, "div", [["class", "tab-pane container-fluid fade px-0"], ["id", "favourites"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 67, "div", [["class", "market-table-cnt mobile-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 66, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 65, "table", [["class", "table table-hover"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Pair"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Last Price"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["24h Change"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 56, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 13, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "span", [["class", "white-txt lg-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ETH_BTC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$0.00000205"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 1, "span", [["class", "white-txt lg-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$20.00500000"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$20.50"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "span", [["class", "lg-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["0.00%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 13, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 1, "span", [["class", "white-txt lg-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ETH_BTC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$0.00000205"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 1, "span", [["class", "white-txt lg-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$20.00500000"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$20.50"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, null, 1, "span", [["class", "lg-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["0.00%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, null, 13, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 1, "span", [["class", "white-txt lg-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ETH_BTC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$0.00000205"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, null, 1, "span", [["class", "white-txt lg-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$20.00500000"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$20.50"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](72, 0, null, null, 1, "span", [["class", "lg-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["0.00%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](74, 0, null, null, 13, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 1, "span", [["class", "white-txt lg-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ETH_BTC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](78, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$0.00000205"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](81, 0, null, null, 1, "span", [["class", "white-txt lg-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$20.00500000"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$20.50"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](86, 0, null, null, 1, "span", [["class", "lg-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["0.00%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](88, 0, null, null, 38, "div", [["class", "tab-pane container-fluid active px-0"], ["id", "markets"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 2, "div", [["class", "color-coin-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MarketsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 15, "div", [["class", "color-coin-cnt pt-0 justify-content-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 4, "div", [["class", "color-coin coin-bg-dark"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](94, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["EOS"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](96, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](97, null, ["$", " \u2248 EOS "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](98, 0, null, null, 4, "div", [["class", "color-coin coin-bg-dark"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](99, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["BTC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](101, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](102, null, ["$", " \u2248 BTC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 4, "div", [["class", "color-coin coin-bg-dark"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](104, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ETH"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](106, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](107, null, ["$", " \u2248 ETH"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 18, "div", [["class", "market-table-cnt mobile-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](109, 0, null, null, 2, "ul", [["class", "nav nav-tabs justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MarketsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](111, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](112, 0, null, null, 14, "div", [["class", "tab-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 13, "div", [["class", "tab-pane container-fluid active px-0"], ["id", "btc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 12, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](115, 0, null, null, 11, "table", [["class", "table table-hover"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](116, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](117, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Pair"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Last Price"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](122, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["24h Change"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](124, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MarketsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](126, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/trade/ETH_BTC"; _ck(_v, 6, 0, currVal_2); var currVal_3 = _co.recommended; _ck(_v, 91, 0, currVal_3); var currVal_7 = _co.currencyData; _ck(_v, 111, 0, currVal_7); var currVal_8 = _co.pairsData; _ck(_v, 126, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).href; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_4 = _co.usdVal.EOS; _ck(_v, 97, 0, currVal_4); var currVal_5 = _co.usdVal.BTC; _ck(_v, 102, 0, currVal_5); var currVal_6 = _co.usdVal.ETH; _ck(_v, 107, 0, currVal_6); }); }
function View_MarketsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-markets", [], null, null, null, View_MarketsComponent_0, RenderType_MarketsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _markets_component__WEBPACK_IMPORTED_MODULE_4__["MarketsComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MarketsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-markets", _markets_component__WEBPACK_IMPORTED_MODULE_4__["MarketsComponent"], View_MarketsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/markets/markets.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/markets/markets.component.ts ***!
  \****************************************************/
/*! exports provided: MarketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketsComponent", function() { return MarketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var MarketsComponent = /** @class */ (function () {
    function MarketsComponent(apiService, formBuilder, toastr, router, http) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.router = router;
        this.http = http;
        this.currencyData = [];
        this.recommended = [];
        this.usdVal = { 'EOS': '', 'BTC': '', 'ETH': '' };
        this.pairsData = [];
        this.newEmail = true;
        this.otpstatus = 0;
        this.regotp = true;
        this.regotp1 = false;
        this.submitted = false;
        this.submitted1 = false;
        this.regotp2 = true;
        this.logotp1 = false;
        this.showAssets = false;
    }
    MarketsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.loader(true);
        this.apiService.loggedin.subscribe(function (result) {
            _this.showAssets = result;
        });
        if (localStorage.getItem('address')) {
            this.showAssets = true;
        }
        else {
            this.showAssets = false;
        }
        this.apiService.get_pairs().subscribe(function (resData) {
            if (resData['status']) {
                _this.apiService.loader(false);
                var currencyDetails = resData['Message'];
                _this.currencyData = JSON.parse(JSON.stringify(currencyDetails));
                _this.currencyData.map(function (items) {
                    items.pairs.map(function (pairDetails) {
                        _this.apiService.get_USDValues().subscribe(function (resData) {
                            resData.map(function (items) {
                                if (pairDetails.pair.split('_')[0] === items.currencySymbol) {
                                    pairDetails.usdEql = items.EstimatedUSD * pairDetails.marketPrice;
                                }
                            });
                        });
                        _this.recommended.push(pairDetails);
                    });
                });
                _this.loadPairs(_this.currencyData[0]);
            }
        });
        this.apiService.get_USDValues().subscribe(function (resData) {
            resData.map(function (items) {
                _this.usdVal[items.currencySymbol] = items.EstimatedUSD;
            });
        });
        this.loginForm = this.formBuilder.group({
            otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
        });
        this.registerForm = this.formBuilder.group({
            otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
        });
    };
    Object.defineProperty(MarketsComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarketsComponent.prototype, "f1", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    MarketsComponent.prototype.loadPairs = function (items) {
        this.pairsData = items.pairs;
        this.selectedCurrency = items.currency;
    };
    MarketsComponent.prototype.radioChange = function (event) {
        console.log(event);
        this.walletType = event;
        this.walletSeleted = event;
    };
    MarketsComponent.prototype.close_model = function () {
        var _this = this;
        var button = document.getElementById('cls_btn');
        button.click();
        var scrollToTop = window.setInterval(function () {
            _this.display = true;
            _this.display1 = false;
            _this.walletType = undefined;
            _this.walletSeleted = '';
            window.clearInterval(scrollToTop);
        }, 800);
    };
    MarketsComponent.prototype.openLogin = function () {
        var button = document.getElementById('wallet_btn');
        button.click();
    };
    MarketsComponent.prototype.tradeView = function (items) {
        this.router.navigateByUrl('/trade/' + items.pair);
    };
    MarketsComponent.prototype.loginOTP = function (datas) {
        var _this = this;
        if (datas.email.status == "INVALID") {
            this.toastr.error("Please enter email", 'ERROR');
        }
        else {
            this.logotp = true;
            this.newEmail = false;
            var obj = { email: datas.email.value };
            this.apiService.login_send(obj).subscribe(function (res) {
                if (res.status) {
                    _this.otpstatus = 1;
                    _this.toastr.success(res.Message, "SUCCESS");
                }
                else {
                    // this.toastr.error(res/.Message,'ERROR')
                }
            });
        }
    };
    MarketsComponent.prototype.loginsite = function (datas) {
        var _this = this;
        if (datas.otp.status == "INVALID") {
            this.toastr.error("Please enter OTP", 'ERROR');
        }
        else {
            this.logotp1 = true;
            var obj = { email: datas.email.value, otp: datas.otp.value };
            this.apiService.login_site(obj).subscribe(function (res) {
                _this.logotp1 = false;
                if (res.status) {
                    _this.otpstatus = 0;
                    _this.toastr.success(res.Message, 'SUCCESS');
                    localStorage.setItem("address", res.originaladdress);
                    localStorage.setItem("original_address", res.originaladdress);
                    localStorage.setItem("Basecoin", _this.walletType);
                    _this.apiService.walletLogin(true);
                    _this.display = true;
                    _this.display1 = false;
                    _this.router.navigate(['/assets']);
                }
                else {
                    _this.toastr.error(res.Message, 'ERROR');
                }
            });
        }
    };
    MarketsComponent.prototype.OTPSend = function (datas) {
        var _this = this;
        if (datas.email.status == "INVALID") {
            this.toastr.error("Please enter email", 'ERROR');
        }
        else {
            this.regotp = false;
            this.regotp1 = true;
            var obj = { email: datas.email.value };
            this.apiService.send_otp(obj).subscribe(function (res) {
                _this.regotp1 = false;
                if (res.status) {
                    _this.toastr.success(res.Message, "SUCCESS");
                }
                else {
                    _this.regotp = true;
                    _this.toastr.error(res.Message, 'ERROR');
                }
            });
        }
    };
    MarketsComponent.prototype.onSubmitreg = function () {
        var _this = this;
        this.submitted1 = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        else {
            this.regotp2 = false;
            this.http.get('https://jsonip.com')
                .subscribe(function (data) {
                var obj = {
                    'email': _this.registerForm.value.email,
                    'otp': _this.registerForm.value.otp,
                    'ip': data.ip
                };
                _this.apiService.register_btc(obj).subscribe(function (res) {
                    if (res.status) {
                        _this.toastr.success(res.Message, "SUCCESS");
                        localStorage.setItem("address", res.address);
                        localStorage.setItem("original_address", res.address);
                        localStorage.setItem("Basecoin", _this.walletType);
                        _this.apiService.walletLogin(true);
                        // var button=document.getElementById('cls_btn');
                        // button.click();          
                        _this.display = true;
                        _this.display1 = false;
                        _this.router.navigate(['/assets']);
                    }
                    else {
                        _this.regotp2 = true;
                        _this.toastr.error(res.Message, 'ERROR');
                    }
                });
            });
        }
    };
    return MarketsComponent;
}());



/***/ }),

/***/ "./src/app/pages/news/news.component.css.shim.ngstyle.js":
/*!***************************************************************!*\
  !*** ./src/app/pages/news/news.component.css.shim.ngstyle.js ***!
  \***************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/pages/news/news.component.ngfactory.js":
/*!********************************************************!*\
  !*** ./src/app/pages/news/news.component.ngfactory.js ***!
  \********************************************************/
/*! exports provided: RenderType_NewsComponent, View_NewsComponent_0, View_NewsComponent_Host_0, NewsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NewsComponent", function() { return RenderType_NewsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewsComponent_0", function() { return View_NewsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewsComponent_Host_0", function() { return View_NewsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponentNgFactory", function() { return NewsComponentNgFactory; });
/* harmony import */ var _news_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news.component.css.shim.ngstyle */ "./src/app/pages/news/news.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.component */ "./src/app/pages/news/news.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_NewsComponent = [_news_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_NewsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_NewsComponent, data: {} });

function View_NewsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["class", "news-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "div", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", " : ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "span", [["class", "news-date ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](6, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; var currVal_1 = _v.context.$implicit.description; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _ck(_v, 6, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.modifieddate, "medium")); _ck(_v, 5, 0, currVal_2); var currVal_3 = _v.context.$implicit.content; _ck(_v, 8, 0, currVal_3); }); }
function View_NewsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "div", [["class", "top-header d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "topheader-icon-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["class", "img-fluid"], ["src", "assets/images/back.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.apiService.historyBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "h3", [["class", "header-heading mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["News"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [["class", "cms-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_NewsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.newsContent; _ck(_v, 9, 0, currVal_0); }, null); }
function View_NewsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-news", [], null, null, null, View_NewsComponent_0, RenderType_NewsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NewsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-news", _news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"], View_NewsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/news/news.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/news/news.component.ts ***!
  \**********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");


var NewsComponent = /** @class */ (function () {
    function NewsComponent(apiService) {
        this.apiService = apiService;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.loader(true);
        this.apiService.get_news().subscribe(function (result) {
            if (result) {
                _this.apiService.loader(false);
                console.log(result, 'rress');
                _this.newsContent = result['data'];
            }
        });
    };
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/pages/privacy/privacy.component.css.shim.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/pages/privacy/privacy.component.css.shim.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/pages/privacy/privacy.component.ngfactory.js":
/*!**************************************************************!*\
  !*** ./src/app/pages/privacy/privacy.component.ngfactory.js ***!
  \**************************************************************/
/*! exports provided: RenderType_PrivacyComponent, View_PrivacyComponent_0, View_PrivacyComponent_Host_0, PrivacyComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PrivacyComponent", function() { return RenderType_PrivacyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PrivacyComponent_0", function() { return View_PrivacyComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PrivacyComponent_Host_0", function() { return View_PrivacyComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponentNgFactory", function() { return PrivacyComponentNgFactory; });
/* harmony import */ var _privacy_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy.component.css.shim.ngstyle */ "./src/app/pages/privacy/privacy.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _privacy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privacy.component */ "./src/app/pages/privacy/privacy.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_PrivacyComponent = [_privacy_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PrivacyComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PrivacyComponent, data: {} });

function View_PrivacyComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "top-header d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "topheader-icon-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "img-fluid"], ["src", "assets/images/back.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.apiService.historyBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [["class", "header-heading mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "cms-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.privacyPolicyHeading; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.privacyPolicyContent; _ck(_v, 7, 0, currVal_1); }); }
function View_PrivacyComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-privacy", [], null, null, null, View_PrivacyComponent_0, RenderType_PrivacyComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _privacy_component__WEBPACK_IMPORTED_MODULE_2__["PrivacyComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PrivacyComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-privacy", _privacy_component__WEBPACK_IMPORTED_MODULE_2__["PrivacyComponent"], View_PrivacyComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/privacy/privacy.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/privacy/privacy.component.ts ***!
  \****************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");


var PrivacyComponent = /** @class */ (function () {
    function PrivacyComponent(apiService) {
        this.apiService = apiService;
    }
    PrivacyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.loader(true);
        this.apiService.get_cms({ page_name: 'privacypolicy' }).subscribe(function (result) {
            if (result) {
                _this.apiService.loader(false);
                _this.privacyPolicyHeading = result['data']['page_heading'];
                _this.privacyPolicyContent = result['data']['page_content'];
            }
        });
    };
    return PrivacyComponent;
}());



/***/ }),

/***/ "./src/app/pages/riskremainder/riskremainder.component.css.shim.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/riskremainder/riskremainder.component.css.shim.ngstyle.js ***!
  \*********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jpc2tyZW1haW5kZXIvcmlza3JlbWFpbmRlci5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/pages/riskremainder/riskremainder.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/pages/riskremainder/riskremainder.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_RiskremainderComponent, View_RiskremainderComponent_0, View_RiskremainderComponent_Host_0, RiskremainderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_RiskremainderComponent", function() { return RenderType_RiskremainderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RiskremainderComponent_0", function() { return View_RiskremainderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_RiskremainderComponent_Host_0", function() { return View_RiskremainderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskremainderComponentNgFactory", function() { return RiskremainderComponentNgFactory; });
/* harmony import */ var _riskremainder_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./riskremainder.component.css.shim.ngstyle */ "./src/app/pages/riskremainder/riskremainder.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _riskremainder_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./riskremainder.component */ "./src/app/pages/riskremainder/riskremainder.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_RiskremainderComponent = [_riskremainder_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_RiskremainderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_RiskremainderComponent, data: {} });

function View_RiskremainderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "top-header d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "topheader-icon-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "img-fluid"], ["src", "assets/images/back.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.apiService.historyBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [["class", "header-heading mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "cms-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.riskRemainderHeading; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.riskRemainderContent; _ck(_v, 7, 0, currVal_1); }); }
function View_RiskremainderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-riskremainder", [], null, null, null, View_RiskremainderComponent_0, RenderType_RiskremainderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _riskremainder_component__WEBPACK_IMPORTED_MODULE_2__["RiskremainderComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var RiskremainderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-riskremainder", _riskremainder_component__WEBPACK_IMPORTED_MODULE_2__["RiskremainderComponent"], View_RiskremainderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/riskremainder/riskremainder.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/riskremainder/riskremainder.component.ts ***!
  \****************************************************************/
/*! exports provided: RiskremainderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskremainderComponent", function() { return RiskremainderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");


var RiskremainderComponent = /** @class */ (function () {
    function RiskremainderComponent(apiService) {
        this.apiService = apiService;
    }
    RiskremainderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.loader(true);
        this.apiService.get_cms({ page_name: 'riskremainder' }).subscribe(function (result) {
            if (result) {
                _this.apiService.loader(false);
                _this.riskRemainderHeading = result['data']['page_heading'];
                _this.riskRemainderContent = result['data']['page_content'];
            }
        });
    };
    return RiskremainderComponent;
}());



/***/ }),

/***/ "./src/app/pages/securitystrategy/securitystrategy.component.css.shim.ngstyle.js":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/securitystrategy/securitystrategy.component.css.shim.ngstyle.js ***!
  \***************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlY3VyaXR5c3RyYXRlZ3kvc2VjdXJpdHlzdHJhdGVneS5jb21wb25lbnQuY3NzIn0= */"];



/***/ }),

/***/ "./src/app/pages/securitystrategy/securitystrategy.component.ngfactory.js":
/*!********************************************************************************!*\
  !*** ./src/app/pages/securitystrategy/securitystrategy.component.ngfactory.js ***!
  \********************************************************************************/
/*! exports provided: RenderType_SecuritystrategyComponent, View_SecuritystrategyComponent_0, View_SecuritystrategyComponent_Host_0, SecuritystrategyComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SecuritystrategyComponent", function() { return RenderType_SecuritystrategyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SecuritystrategyComponent_0", function() { return View_SecuritystrategyComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SecuritystrategyComponent_Host_0", function() { return View_SecuritystrategyComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuritystrategyComponentNgFactory", function() { return SecuritystrategyComponentNgFactory; });
/* harmony import */ var _securitystrategy_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./securitystrategy.component.css.shim.ngstyle */ "./src/app/pages/securitystrategy/securitystrategy.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _securitystrategy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./securitystrategy.component */ "./src/app/pages/securitystrategy/securitystrategy.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_SecuritystrategyComponent = [_securitystrategy_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_SecuritystrategyComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_SecuritystrategyComponent, data: {} });

function View_SecuritystrategyComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "top-header d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "topheader-icon-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "img-fluid"], ["src", "assets/images/back.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.apiService.historyBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [["class", "header-heading mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "cms-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.securityHeading; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.securityContent; _ck(_v, 7, 0, currVal_1); }); }
function View_SecuritystrategyComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-securitystrategy", [], null, null, null, View_SecuritystrategyComponent_0, RenderType_SecuritystrategyComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _securitystrategy_component__WEBPACK_IMPORTED_MODULE_2__["SecuritystrategyComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SecuritystrategyComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-securitystrategy", _securitystrategy_component__WEBPACK_IMPORTED_MODULE_2__["SecuritystrategyComponent"], View_SecuritystrategyComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/securitystrategy/securitystrategy.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/securitystrategy/securitystrategy.component.ts ***!
  \**********************************************************************/
/*! exports provided: SecuritystrategyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecuritystrategyComponent", function() { return SecuritystrategyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");


var SecuritystrategyComponent = /** @class */ (function () {
    function SecuritystrategyComponent(apiService) {
        this.apiService = apiService;
    }
    SecuritystrategyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.loader(true);
        this.apiService.get_cms({ page_name: 'security' }).subscribe(function (result) {
            if (result) {
                _this.apiService.loader(false);
                _this.securityHeading = result['data']['page_heading'];
                _this.securityContent = result['data']['page_content'];
            }
        });
    };
    return SecuritystrategyComponent;
}());



/***/ }),

/***/ "./src/app/pages/terms/terms.component.css.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/pages/terms/terms.component.css.shim.ngstyle.js ***!
  \*****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5jc3MifQ== */"];



/***/ }),

/***/ "./src/app/pages/terms/terms.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/pages/terms/terms.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_TermsComponent, View_TermsComponent_0, View_TermsComponent_Host_0, TermsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TermsComponent", function() { return RenderType_TermsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TermsComponent_0", function() { return View_TermsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TermsComponent_Host_0", function() { return View_TermsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponentNgFactory", function() { return TermsComponentNgFactory; });
/* harmony import */ var _terms_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms.component.css.shim.ngstyle */ "./src/app/pages/terms/terms.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _terms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms.component */ "./src/app/pages/terms/terms.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_TermsComponent = [_terms_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TermsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TermsComponent, data: {} });

function View_TermsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "top-header d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "topheader-icon-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["class", "img-fluid"], ["src", "assets/images/back.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.apiService.historyBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h3", [["class", "header-heading mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "cms-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "div", [], [[8, "innerHTML", 1]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.termsHeading; _ck(_v, 4, 0, currVal_0); var currVal_1 = _co.termsContent; _ck(_v, 7, 0, currVal_1); }); }
function View_TermsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-terms", [], null, null, null, View_TermsComponent_0, RenderType_TermsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _terms_component__WEBPACK_IMPORTED_MODULE_2__["TermsComponent"], [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TermsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-terms", _terms_component__WEBPACK_IMPORTED_MODULE_2__["TermsComponent"], View_TermsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/pages/terms/terms.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/terms/terms.component.ts ***!
  \************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");


var TermsComponent = /** @class */ (function () {
    function TermsComponent(apiService) {
        this.apiService = apiService;
    }
    TermsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.loader(true);
        this.apiService.get_cms({ page_name: 'terms' }).subscribe(function (result) {
            if (result) {
                _this.apiService.loader(false);
                _this.termsHeading = result['data']['page_heading'];
                _this.termsContent = result['data']['page_content'];
            }
        });
    };
    TermsComponent.prototype.locationBack = function () {
        this.apiService.historyBack();
    };
    return TermsComponent;
}());



/***/ }),

/***/ "./src/app/pages/trade/trade.component.css.shim.ngstyle.js":
/*!*****************************************************************!*\
  !*** ./src/app/pages/trade/trade.component.css.shim.ngstyle.js ***!
  \*****************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".market-table-cnt[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{background:rgba(0,0,0,0.3);border:none;}\r\n.market-table-cnt[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#79828f;border:none;border-bottom:1px solid transparent;padding:5px 10px;font-size:0.9rem;}\r\n.market-table-cnt[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#fff;border:none;border-bottom:1px solid #fff;background:transparent;}\r\n.home-search[_ngcontent-%COMP%]{position:absolute;right:3px;top:3px;background:rgba(255,255,255,0.1);padding:5px;border-radius:5px;}\r\n.home-search[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:18px;}\r\n.home-search-modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{min-height:100vh;border-radius:0px;background:#383848;}\r\n.home-search-modal[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]{margin:0;}\r\n.home-search-modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#fff;text-shadow:none;}\r\n.home-search-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{padding:0.5rem 1rem;border:none;background:rgba(0,0,0,0.2);}\r\n.home-search-modal[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:rgba(255,255,255,0.1);border:none;color:#fff;border-radius:5px;padding:5px;}\r\n.home-search-modal[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{padding-top:0px;}\r\n.topheader-icon-cnt[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{color:#fff;font-size:16px;}\r\n.assets-info-header[_ngcontent-%COMP%]{text-align:center;}\r\n.assets-info-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#fff;font-size:14px;font-weight:500;margin-bottom:5px;}\r\n.assets-info-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:5px;font-size:12px;color:#79828f;font-weight:400;}\r\n.assets-info-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;font-size:11px;color:#79828f;font-weight:400;margin-bottom:0px;}\r\n.trade-chart-cnt[_ngcontent-%COMP%]{width:100%;height:250px;}\r\n.trade-chart-cnt[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]{width:100%;padding:5px;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{font-size:0.7rem;padding:10px 15px;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#fff;margin-bottom:0px;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label.value-label[_ngcontent-%COMP%]{font-size:0.8rem;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:rgba(255,255,255,0.1);color:#fff;padding:5px;border-radius:5px;border:none;border-top-right-radius:0px;border-bottom-right-radius:0px;font-size:0.8rem;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{margin-bottom:5px;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{background:rgba(0,0,0,0.3);color:#fff;padding:5px;border-radius:5px;border:none;border-top-left-radius:0px;border-bottom-left-radius:0px;font-size:12px;min-width:55px;text-align:center;display:-webkit-inline-box;display:inline-flex;-webkit-box-pack:center;justify-content:center;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   .buy-sell-tab[_ngcontent-%COMP%]{border:none;margin-bottom:5px;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   .buy-sell-tab[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 5px;width:50%;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   .buy-sell-tab[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:5px 15px;width:100%;background:rgba(0,0,0,0.3);color:#fff;width:100%;text-align:center;border:none;border-radius:5px;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   .buy-sell-tab[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.buy-tab.active[_ngcontent-%COMP%]{background:#26a69a;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   .buy-sell-tab[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.sell-tab.active[_ngcontent-%COMP%]{background:#ef5350;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{min-width:100px;display:inline-block;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   .limit-market-tab[_ngcontent-%COMP%]{border:none;margin-bottom:5px;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   .limit-market-tab[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:0 5px;width:50%;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   .limit-market-tab[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:5px 15px;width:100%;background:rgba(0,0,0,0.3);color:#fff;width:100%;text-align:center;border:none;border-bottom:1px solid transparent;border-radius:0px;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   .limit-market-tab[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{border-color:#fff;}\r\n.taker-maker-value[_ngcontent-%COMP%]{font-size:13px;text-align:center;width:100%;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-success[_ngcontent-%COMP%]{background:#26a69a;padding:5px 18px;font-size:0.9rem;}\r\n.buy-sell-form-cnt[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]{background:#ef5350;padding:5px 18px;font-size:0.9rem;}\r\n.trd-zone-dd[_ngcontent-%COMP%], .top-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:inline-block;}\r\n.trd-zone-dd[_ngcontent-%COMP%]{margin-left:15px;}\r\n.top-header[_ngcontent-%COMP%]   ul.nav-tabs[_ngcontent-%COMP%]{border:none;}\r\n.top-header[_ngcontent-%COMP%]   ul.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background:transparent;border:none;border-bottom:1px solid transparent;border-radius:0px;padding:3px 15px;font-size:14px;}\r\n.top-header[_ngcontent-%COMP%]   ul.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background:transparent;border-bottom:1px solid #fff;color:#fff;}\r\n.mobile-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.trd-value-cnt[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{background:rgba(255,255,255,0.1);}\r\n.mobile-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.trd-value-cnt[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:50%;max-width:50%;display:inline-block;text-align:center;color:#fff;}\r\n.trd-zone-dd[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .header-heading[_ngcontent-%COMP%]{font-size:0.8rem;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJhZGUvdHJhZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEIsMkJBQTJCLFlBQVksQ0FBQztBQUNwRSxpQ0FBaUMsY0FBYyxZQUFZLG9DQUFvQyxpQkFBaUIsaUJBQWlCLENBQUM7QUFDbEksd0NBQXdDLFdBQVcsWUFBWSw2QkFBNkIsdUJBQXVCLENBQUM7QUFFcEgsYUFBYSxrQkFBa0IsVUFBVSxRQUFRLGlDQUFpQyxZQUFZLGtCQUFrQixDQUFDO0FBQ2pILGlCQUFpQixZQUFZLENBQUM7QUFDOUIsa0NBQWtDLGlCQUFpQixrQkFBa0IsbUJBQW1CLENBQUM7QUFDekYsaUNBQWlDLFNBQVMsQ0FBQztBQUMzQywwQkFBMEIsV0FBVyxpQkFBaUIsQ0FBQztBQUN2RCxpQ0FBaUMsb0JBQW9CLFlBQVksMkJBQTJCLENBQUM7QUFDN0YsdUNBQXVDLGlDQUFpQyxZQUFZLFdBQVcsa0JBQWtCLFlBQVksQ0FBQztBQUM5SCwrQkFBK0IsZ0JBQWdCLENBQUM7QUFFaEQsd0JBQXdCLFdBQVcsZUFBZSxDQUFDO0FBQ25ELG9CQUFvQixrQkFBa0IsQ0FBQztBQUN2Qyx1QkFBdUIsV0FBVyxlQUFlLGdCQUFnQixrQkFBa0IsQ0FBQztBQUNwRiw0QkFBNEIsZ0JBQWdCLGVBQWUsY0FBYyxnQkFBZ0IsQ0FBQztBQUMxRixzQkFBc0Isa0JBQWtCLGVBQWUsY0FBYyxnQkFBZ0Isa0JBQWtCLENBQUM7QUFFeEcsaUJBQWlCLFdBQVcsYUFBYSxDQUFDO0FBQzFDLHFCQUFxQixXQUFXLFlBQVksb0JBQWlCLEFBQWpCLGlCQUFpQixDQUFDO0FBRTlELG1CQUFtQixXQUFXLFlBQVksQ0FBQztBQUMzQyx3QkFBd0IsaUJBQWlCLGtCQUFrQixDQUFDO0FBQzVELDhCQUE4QixXQUFXLGtCQUFrQixDQUFDO0FBQzVELDBDQUEwQyxpQkFBaUIsQ0FBQztBQUM1RCw4QkFBOEIsaUNBQWlDLFdBQVcsWUFBWSxrQkFBa0IsWUFBWSw0QkFBNEIsK0JBQStCLGlCQUFpQixDQUFDO0FBQ2pNLHFDQUFxQyxrQkFBa0IsQ0FBQztBQUN4RCwwQ0FBMEMsMkJBQTJCLFdBQVcsWUFBWSxrQkFBa0IsWUFBWSwyQkFBMkIsOEJBQThCLGVBQWUsZUFBZSxrQkFBa0IsMkJBQW9CLEFBQXBCLG9CQUFvQix3QkFBdUIsQUFBdkIsdUJBQXVCLENBQUM7QUFDL1EsaUNBQWlDLFlBQVksa0JBQWtCLENBQUM7QUFDaEUsb0NBQW9DLGNBQWMsVUFBVSxDQUFDO0FBQzdELHNDQUFzQyxpQkFBaUIsV0FBVywyQkFBMkIsV0FBVyxXQUFXLGtCQUFrQixZQUFZLGtCQUFrQixDQUFDO0FBQ3BLLHFEQUFxRCxtQkFBbUIsQ0FBQztBQUN6RSxzREFBc0QsbUJBQW1CLENBQUM7QUFDMUUsbUNBQW1DLGdCQUFnQixxQkFBcUIsQ0FBQztBQUV6RSxxQ0FBcUMsWUFBWSxrQkFBa0IsQ0FBQztBQUNwRSx3Q0FBd0MsY0FBYyxVQUFVLENBQUM7QUFDakUsMENBQTBDLGlCQUFpQixXQUFXLDJCQUEyQixXQUFXLFdBQVcsa0JBQWtCLFlBQVksb0NBQW9DLGtCQUFrQixDQUFDO0FBQzVNLGlEQUFpRCxrQkFBa0IsQ0FBQztBQUNwRSxtQkFBbUIsZUFBZSxrQkFBa0IsV0FBVyxDQUFDO0FBQ2hFLHFDQUFxQyxtQkFBbUIsaUJBQWlCLGlCQUFpQixDQUFDO0FBQzNGLG9DQUFvQyxtQkFBbUIsaUJBQWlCLGlCQUFpQixDQUFDO0FBRTFGLDRCQUE0QixxQkFBcUIsQ0FBQztBQUNsRCxhQUFhLGlCQUFpQixDQUFDO0FBQy9CLHdCQUF3QixZQUFZLENBQUM7QUFDckMsNkJBQTZCLHVCQUF1QixZQUFZLG9DQUFvQyxrQkFBa0IsaUJBQWlCLGVBQWUsQ0FBQztBQUN2SixvQ0FBb0MsdUJBQXVCLDZCQUE2QixXQUFXLENBQUM7QUFFcEcsOENBQThDLGlDQUFpQyxDQUFDO0FBQ2hGLG1EQUFtRCxVQUFVLGNBQWMscUJBQXFCLGtCQUFrQixXQUFXLENBQUM7QUFDOUgsa0NBQWtDLGlCQUFpQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHJhZGUvdHJhZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJrZXQtdGFibGUtY250IC5uYXYtdGFic3tiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4zKTtib3JkZXI6bm9uZTt9XHJcbi5tYXJrZXQtdGFibGUtY250IC5uYXYtdGFicyBsaSBhe2NvbG9yOiM3OTgyOGY7Ym9yZGVyOm5vbmU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgdHJhbnNwYXJlbnQ7cGFkZGluZzo1cHggMTBweDtmb250LXNpemU6MC45cmVtO31cclxuLm1hcmtldC10YWJsZS1jbnQgLm5hdi10YWJzIGxpIGEuYWN0aXZle2NvbG9yOiNmZmY7Ym9yZGVyOm5vbmU7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2ZmZjtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O31cclxuXHJcbi5ob21lLXNlYXJjaHtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDozcHg7dG9wOjNweDtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMC4xKTtwYWRkaW5nOjVweDtib3JkZXItcmFkaXVzOjVweDt9XHJcbi5ob21lLXNlYXJjaCBpbWd7aGVpZ2h0OjE4cHg7fVxyXG4uaG9tZS1zZWFyY2gtbW9kYWwgLm1vZGFsLWNvbnRlbnR7bWluLWhlaWdodDoxMDB2aDtib3JkZXItcmFkaXVzOjBweDtiYWNrZ3JvdW5kOiMzODM4NDg7fVxyXG4uaG9tZS1zZWFyY2gtbW9kYWwgLm1vZGFsLWRpYWxvZ3ttYXJnaW46MDt9XHJcbi5ob21lLXNlYXJjaC1tb2RhbCAuY2xvc2V7Y29sb3I6I2ZmZjt0ZXh0LXNoYWRvdzpub25lO31cclxuLmhvbWUtc2VhcmNoLW1vZGFsIC5tb2RhbC1oZWFkZXJ7cGFkZGluZzowLjVyZW0gMXJlbTtib3JkZXI6bm9uZTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4yKTt9XHJcbi5ob21lLXNlYXJjaC1tb2RhbCAubW9kYWwtaGVhZGVyIGlucHV0e2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwwLjEpO2JvcmRlcjpub25lO2NvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czo1cHg7cGFkZGluZzo1cHg7fVxyXG4uaG9tZS1zZWFyY2gtbW9kYWwgLm1vZGFsLWJvZHl7cGFkZGluZy10b3A6MHB4O31cclxuXHJcbi50b3BoZWFkZXItaWNvbi1jbnQgLmZhe2NvbG9yOiNmZmY7Zm9udC1zaXplOjE2cHg7fVxyXG4uYXNzZXRzLWluZm8taGVhZGVye3RleHQtYWxpZ246Y2VudGVyO31cclxuLmFzc2V0cy1pbmZvLWhlYWRlciBoNXtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMDttYXJnaW4tYm90dG9tOjVweDt9XHJcbi5hc3NldHMtaW5mby1oZWFkZXIgaDUgc3BhbnttYXJnaW4tbGVmdDo1cHg7Zm9udC1zaXplOjEycHg7Y29sb3I6Izc5ODI4Zjtmb250LXdlaWdodDo0MDA7fVxyXG4uYXNzZXRzLWluZm8taGVhZGVyIHB7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjExcHg7Y29sb3I6Izc5ODI4Zjtmb250LXdlaWdodDo0MDA7bWFyZ2luLWJvdHRvbTowcHg7fVxyXG5cclxuLnRyYWRlLWNoYXJ0LWNudHt3aWR0aDoxMDAlO2hlaWdodDoyNTBweDt9XHJcbi50cmFkZS1jaGFydC1jbnQgaW1ne3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b2JqZWN0LWZpdDpjb3Zlcjt9XHJcblxyXG4uYnV5LXNlbGwtZm9ybS1jbnR7d2lkdGg6MTAwJTtwYWRkaW5nOjVweDt9XHJcbi5idXktc2VsbC1mb3JtLWNudCBmb3Jte2ZvbnQtc2l6ZTowLjdyZW07cGFkZGluZzoxMHB4IDE1cHg7fVxyXG4uYnV5LXNlbGwtZm9ybS1jbnQgZm9ybSBsYWJlbHtjb2xvcjojZmZmO21hcmdpbi1ib3R0b206MHB4O31cclxuLmJ1eS1zZWxsLWZvcm0tY250IGZvcm0gbGFiZWwudmFsdWUtbGFiZWx7Zm9udC1zaXplOjAuOHJlbTt9XHJcbi5idXktc2VsbC1mb3JtLWNudCBmb3JtIGlucHV0e2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwwLjEpO2NvbG9yOiNmZmY7cGFkZGluZzo1cHg7Ym9yZGVyLXJhZGl1czo1cHg7Ym9yZGVyOm5vbmU7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MHB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjBweDtmb250LXNpemU6MC44cmVtO31cclxuLmJ1eS1zZWxsLWZvcm0tY250IGZvcm0gLmlucHV0LWdyb3Vwe21hcmdpbi1ib3R0b206NXB4O31cclxuLmJ1eS1zZWxsLWZvcm0tY250IGZvcm0gLmlucHV0LWdyb3VwLXRleHR7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMyk7Y29sb3I6I2ZmZjtwYWRkaW5nOjVweDtib3JkZXItcmFkaXVzOjVweDtib3JkZXI6bm9uZTtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjBweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjBweDtmb250LXNpemU6MTJweDttaW4td2lkdGg6NTVweDt0ZXh0LWFsaWduOmNlbnRlcjtkaXNwbGF5OmlubGluZS1mbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7fVxyXG4uYnV5LXNlbGwtZm9ybS1jbnQgLmJ1eS1zZWxsLXRhYntib3JkZXI6bm9uZTttYXJnaW4tYm90dG9tOjVweDt9XHJcbi5idXktc2VsbC1mb3JtLWNudCAuYnV5LXNlbGwtdGFiIGxpe3BhZGRpbmc6MCA1cHg7d2lkdGg6NTAlO31cclxuLmJ1eS1zZWxsLWZvcm0tY250IC5idXktc2VsbC10YWIgbGkgYXtwYWRkaW5nOjVweCAxNXB4O3dpZHRoOjEwMCU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMyk7Y29sb3I6I2ZmZjt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6NXB4O31cclxuLmJ1eS1zZWxsLWZvcm0tY250IC5idXktc2VsbC10YWIgbGkgYS5idXktdGFiLmFjdGl2ZXtiYWNrZ3JvdW5kOiMyNmE2OWE7fVxyXG4uYnV5LXNlbGwtZm9ybS1jbnQgLmJ1eS1zZWxsLXRhYiBsaSBhLnNlbGwtdGFiLmFjdGl2ZXtiYWNrZ3JvdW5kOiNlZjUzNTA7fVxyXG4uYnV5LXNlbGwtZm9ybS1jbnQgZm9ybSBsYWJlbCBzcGFue21pbi13aWR0aDoxMDBweDtkaXNwbGF5OmlubGluZS1ibG9jazt9XHJcblxyXG4uYnV5LXNlbGwtZm9ybS1jbnQgLmxpbWl0LW1hcmtldC10YWJ7Ym9yZGVyOm5vbmU7bWFyZ2luLWJvdHRvbTo1cHg7fVxyXG4uYnV5LXNlbGwtZm9ybS1jbnQgLmxpbWl0LW1hcmtldC10YWIgbGl7cGFkZGluZzowIDVweDt3aWR0aDo1MCU7fVxyXG4uYnV5LXNlbGwtZm9ybS1jbnQgLmxpbWl0LW1hcmtldC10YWIgbGkgYXtwYWRkaW5nOjVweCAxNXB4O3dpZHRoOjEwMCU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMyk7Y29sb3I6I2ZmZjt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlcjpub25lO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6MHB4O31cclxuLmJ1eS1zZWxsLWZvcm0tY250IC5saW1pdC1tYXJrZXQtdGFiIGxpIGEuYWN0aXZle2JvcmRlci1jb2xvcjojZmZmO31cclxuLnRha2VyLW1ha2VyLXZhbHVle2ZvbnQtc2l6ZToxM3B4O3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEwMCU7fVxyXG4uYnV5LXNlbGwtZm9ybS1jbnQgZm9ybSAuYnRuLXN1Y2Nlc3N7YmFja2dyb3VuZDojMjZhNjlhO3BhZGRpbmc6NXB4IDE4cHg7Zm9udC1zaXplOjAuOXJlbTt9XHJcbi5idXktc2VsbC1mb3JtLWNudCBmb3JtIC5idG4tZGFuZ2Vye2JhY2tncm91bmQ6I2VmNTM1MDtwYWRkaW5nOjVweCAxOHB4O2ZvbnQtc2l6ZTowLjlyZW07fVxyXG5cclxuLnRyZC16b25lLWRkLC50b3AtaGVhZGVyIGgze2Rpc3BsYXk6aW5saW5lLWJsb2NrO31cclxuLnRyZC16b25lLWRke21hcmdpbi1sZWZ0OjE1cHg7fVxyXG4udG9wLWhlYWRlciB1bC5uYXYtdGFic3tib3JkZXI6bm9uZTt9XHJcbi50b3AtaGVhZGVyIHVsLm5hdi10YWJzIGxpIGF7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtib3JkZXItYm90dG9tOjFweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjBweDtwYWRkaW5nOjNweCAxNXB4O2ZvbnQtc2l6ZToxNHB4O31cclxuLnRvcC1oZWFkZXIgdWwubmF2LXRhYnMgbGkgYS5hY3RpdmV7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZmZmO2NvbG9yOiNmZmY7fVxyXG5cclxuLm1vYmlsZS10YWJsZSB0YWJsZSB0Ym9keSB0ci50cmQtdmFsdWUtY250IHRke2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwwLjEpO31cclxuLm1vYmlsZS10YWJsZSB0YWJsZSB0Ym9keSB0ci50cmQtdmFsdWUtY250IHRkIHNwYW57d2lkdGg6NTAlO21heC13aWR0aDo1MCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7dGV4dC1hbGlnbjpjZW50ZXI7Y29sb3I6I2ZmZjt9XHJcbi50cmQtem9uZS1kZCBzcGFuLC5oZWFkZXItaGVhZGluZ3tmb250LXNpemU6MC44cmVtO31cclxuXHJcblxyXG4iXX0= */"];



/***/ }),

/***/ "./src/app/pages/trade/trade.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/pages/trade/trade.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_TradeComponent, View_TradeComponent_0, View_TradeComponent_Host_0, TradeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TradeComponent", function() { return RenderType_TradeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TradeComponent_0", function() { return View_TradeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TradeComponent_Host_0", function() { return View_TradeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeComponentNgFactory", function() { return TradeComponentNgFactory; });
/* harmony import */ var _trade_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trade.component.css.shim.ngstyle */ "./src/app/pages/trade/trade.component.css.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/component-loader */ "./node_modules/ngx-bootstrap/component-loader/fesm5/ngx-bootstrap-component-loader.js");
/* harmony import */ var _trade_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trade.component */ "./src/app/pages/trade/trade.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 













var styles_TradeComponent = [_trade_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_TradeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_TradeComponent, data: {} });

function View_TradeComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "p", [["class", "ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["24h Change: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "span", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", " %"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.change, "1.2-2")); _ck(_v, 3, 0, currVal_0); }); }
function View_TradeComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "p", [["class", "ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["24h Change: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "span", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", " %"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.change, "1.2-2")); _ck(_v, 3, 0, currVal_0); }); }
function View_TradeComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Maker (", "%) :"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.makerfee, ".2")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.buy_maker_fees, ".8")); _ck(_v, 4, 0, currVal_1); }); }
function View_TradeComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Maker (", ") :"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.makerfee, ".2")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.buy_maker_fees, ".8")); _ck(_v, 4, 0, currVal_1); }); }
function View_TradeComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Taker (", "%) :"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.takerfee, ".2")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.buy_taker_fees, ".8")); _ck(_v, 4, 0, currVal_1); }); }
function View_TradeComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Taker (", ") :"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.takerfee, ".2")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.buy_taker_fees, ".8")); _ck(_v, 4, 0, currVal_1); }); }
function View_TradeComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-success ml-auto"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.order_placed(_co.orderType["buy"].type, "buy") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["Buy ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.fromCurrency; _ck(_v, 1, 0, currVal_0); }); }
function View_TradeComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-success ml-auto"], ["disabled", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Placing your trade... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-cog fa-spin"]], null, null, null, null, null))], null, null); }
function View_TradeComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Maker (", "%) :"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.makerfee, ".2")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.buy_maker_fees, ".8")); _ck(_v, 4, 0, currVal_1); }); }
function View_TradeComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Maker (", ") :"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.makerfee, ".2")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.buy_maker_fees, ".8")); _ck(_v, 4, 0, currVal_1); }); }
function View_TradeComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Taker (", "%) :"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.takerfee, ".2")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.buy_taker_fees, ".8")); _ck(_v, 4, 0, currVal_1); }); }
function View_TradeComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Taker (", ") :"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.takerfee, ".2")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.buy_taker_fees, ".8")); _ck(_v, 4, 0, currVal_1); }); }
function View_TradeComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-success ml-auto"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.order_placed(_co.orderType["buy"].type, "buy") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["Buy ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.fromCurrency; _ck(_v, 1, 0, currVal_0); }); }
function View_TradeComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-success ml-auto"], ["disabled", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Placing your trade... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-cog fa-spin"]], null, null, null, null, null))], null, null); }
function View_TradeComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Maker (", "%) :"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.makerfee, ".2")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.sell_maker_fees, ".8")); _ck(_v, 4, 0, currVal_1); }); }
function View_TradeComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Maker (", ") :"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.makerfee, ".2")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.sell_maker_fees, ".8")); _ck(_v, 4, 0, currVal_1); }); }
function View_TradeComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Taker (", "%) :"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.takerfee, ".2")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.sell_taker_fees, ".8")); _ck(_v, 4, 0, currVal_1); }); }
function View_TradeComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Taker (", ") :"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.takerfee, ".2")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.sell_taker_fees, ".8")); _ck(_v, 4, 0, currVal_1); }); }
function View_TradeComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-danger ml-auto"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.order_placed(_co.orderType["sell"].type, "sell") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["Sell ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.fromCurrency; _ck(_v, 1, 0, currVal_0); }); }
function View_TradeComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-danger ml-auto"], ["disabled", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Placing your trade... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-cog fa-spin"]], null, null, null, null, null))], null, null); }
function View_TradeComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Maker (", "%) :"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.makerfee, ".2")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.sell_maker_fees, ".8")); _ck(_v, 4, 0, currVal_1); }); }
function View_TradeComponent_22(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Maker (", ") :"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.makerfee, ".2")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.sell_maker_fees, ".8")); _ck(_v, 4, 0, currVal_1); }); }
function View_TradeComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Taker (", "%) :"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.takerfee, ".2")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.sell_taker_fees, ".8")); _ck(_v, 4, 0, currVal_1); }); }
function View_TradeComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["Taker (", ") :"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.takerfee, ".2")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.sell_taker_fees, ".8")); _ck(_v, 4, 0, currVal_1); }); }
function View_TradeComponent_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "button", [["class", "btn btn-danger ml-auto"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.order_placed(_co.orderType["sell"].type, "sell") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["Sell ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.fromCurrency; _ck(_v, 1, 0, currVal_0); }); }
function View_TradeComponent_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-danger ml-auto"], ["disabled", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Placing your trade... "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["aria-hidden", "true"], ["class", "fa fa-cog fa-spin"]], null, null, null, null, null))], null, null); }
function View_TradeComponent_27(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "tr", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.placeOrder((_v.context.$implicit.Amount - _v.context.$implicit.filledAmount), _v.context.$implicit._id, "sell", _v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "span", [["class", "text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "span", [["class", "text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "span", [["class", "text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), (_v.context.$implicit.Amount - _v.context.$implicit.filledAmount), "1.8-8")); _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit._id, "1.8-8")); _ck(_v, 7, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.calculateTotal((_v.context.$implicit._id * (_v.context.$implicit.Amount - _v.context.$implicit.filledAmount)), "buy", _v.context.index), "1.8-8")); _ck(_v, 11, 0, currVal_2); }); }
function View_TradeComponent_28(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "td", [["colspan", "3"], ["style", "text-align: center;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "text-success "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No buy Orders Available"]))], null, null); }
function View_TradeComponent_29(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "tr", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.placeOrder(_co.rounds((_v.context.$implicit.Amount - _v.context.$implicit.filledAmount)), _co.rounds(_v.context.$implicit._id), "buy", _v.context.index) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "span", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](8, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](12, 2)], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), (_v.context.$implicit.Amount - _v.context.$implicit.filledAmount), "1.8-8")); _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 7, 0, _ck(_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit._id, "1.8-8")); _ck(_v, 7, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _co.calculateTotal((_v.context.$implicit._id * (_v.context.$implicit.Amount - _v.context.$implicit.filledAmount)), "sell", _v.context.index), ".8")); _ck(_v, 11, 0, currVal_2); }); }
function View_TradeComponent_30(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "td", [["colspan", "3"], ["style", "text-align: center;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "text-danger "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Sell Orders Available"]))], null, null); }
function View_TradeComponent_32(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.parent.context.$implicit.filledAmount, ".8")); _ck(_v, 1, 0, currVal_0); }); }
function View_TradeComponent_33(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.parent.context.$implicit.filledAmount, ".8")); _ck(_v, 1, 0, currVal_0); }); }
function View_TradeComponent_31(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_32)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_33)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](11, 2)], function (_ck, _v) { var currVal_1 = (_v.context.$implicit.ordertype == "Buy"); _ck(_v, 6, 0, currVal_1); var currVal_2 = (_v.context.$implicit.ordertype == "Sell"); _ck(_v, 8, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 1), _v.context.$implicit.datetime, "short")); _ck(_v, 2, 0, currVal_0); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 10, 0, _ck(_v, 11, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.tradePrice, ".8")); _ck(_v, 10, 0, currVal_3); }); }
function View_TradeComponent_34(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "td", [["colspan", "3"], ["style", "text-align: center;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "text-danger "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No Orders Available"]))], null, null); }
function View_TradeComponent_36(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " / ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.parent.context.$implicit.price, "1.8-8")); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.parent.context.$implicit.volume, "1.8-8")); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_TradeComponent_37(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", " / ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](3, 2)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.parent.context.$implicit.marketPrice, "1.8-8")); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 1, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.parent.context.$implicit.volume, "1.8-8")); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_TradeComponent_38(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "span", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " %"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 2)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.parent.context.$implicit.change, "1.2-2")); _ck(_v, 1, 0, currVal_0); }); }
function View_TradeComponent_40(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["+"]))], null, null); }
function View_TradeComponent_39(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "span", [["class", "text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_40)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", " %"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](4, 2)], function (_ck, _v) { var currVal_0 = (_v.parent.context.$implicit.change > 0); _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 0), _v.parent.context.$implicit.change, "1.2-2")); _ck(_v, 3, 0, currVal_1); }); }
function View_TradeComponent_35(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "tr", [], [[2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.change_pair(((_v.context.$implicit.fromCurrency.currencySymbol + "_") + _v.context.$implicit.toCurrency.currencySymbol)) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "img", [["class", "mr-2"]], [[8, "src", 4], [8, "alt", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "td", [["class", "text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_36)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_37)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 4, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_38)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_39)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_4 = (_v.context.$implicit.price > 0); _ck(_v, 7, 0, currVal_4); var currVal_5 = (_v.context.$implicit.price <= 0); _ck(_v, 9, 0, currVal_5); var currVal_6 = (_v.context.$implicit.change < 0); _ck(_v, 12, 0, currVal_6); var currVal_7 = (_v.context.$implicit.change >= 0); _ck(_v, 14, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_v.context.$implicit.fromCurrency.currencySymbol == _co.fromCurrency) && (_v.context.$implicit.toCurrency.currencySymbol == _co.toCurrency)); _ck(_v, 0, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.fromCurrency.image, ""); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _v.context.$implicit.fromCurrency.currencySymbol, ""); _ck(_v, 3, 0, currVal_1, currVal_2); var currVal_3 = _v.context.$implicit.fromCurrency.currencySymbol; _ck(_v, 4, 0, currVal_3); }); }
function View_TradeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { container: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 2, { divRef: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 9, "div", [["class", "top-header d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "topheader-icon-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "img", [["class", "img-fluid"], ["src", "assets/images/back.png"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.service.historyBack() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 6, "div", [["class", "mx-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "h3", [["class", "header-heading anchor"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 320).show() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", "/", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "i", [["class", "fa fa-caret-down"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 2, "div", [["class", "btn-group trd-zone-dd"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "span", [["aria-controls", "dropdown-basic"], ["class", "header-heading anchor"], ["id", "button-basic"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, [" ", " Zone "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 21, "div", [["class", "assets-info-header py-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 9, "div", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Last price: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 2, "span", [["class", "text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](20, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 10, "div", [["class", "d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 4, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["24h High: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 2, "span", [["class", "text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](29, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](30, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 4, "p", [["class", "ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["24h Low: "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 2, "span", [["class", "text-danger"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](34, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](35, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 1, "div", [["class", "trade-chart-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 0, "div", [["class", "app-tv-chart-container"], ["id", "tv_chart_container"], ["style", "height: 100%"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 228, "div", [["class", "buy-sell-form-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 6, "ul", [["class", "nav nav-tabs buy-sell-tab"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 1, "a", [["class", "nav-link buy-tab active"], ["data-toggle", "tab"], ["href", "#buying"], ["id", "buytab"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Buy"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, null, 1, "a", [["class", "nav-link sell-tab"], ["data-toggle", "tab"], ["href", "#sellform"], ["id", "selltab"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Sell"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 220, "div", [["class", "tab-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 109, "div", [["class", "tab-pane container-fluid active px-0"], ["id", "buying"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 6, "ul", [["class", "nav nav-tabs justify-content-around limit-market-tab"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](50, 0, null, null, 1, "a", [["class", "nav-link active"], ["data-toggle", "tab"], ["href", "#buy1"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.change_type("limit", "buy") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Limit"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 1, "a", [["class", "nav-link"], ["data-toggle", "tab"], ["href", "#buy2"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.change_type("instant", "buy") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Market"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 101, "div", [["class", "tab-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 56, "div", [["class", "tab-pane container-fluid active px-0"], ["id", "buy1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 55, "form", [["class", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, null, 16, "div", [["class", "form-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](63, 0, null, null, 5, "div", [["class", "d-flex col-12 px-0 mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Price"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](66, 0, null, null, 2, "label", [["class", "value-label ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](67, null, ["", " : Balance ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](68, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](69, 0, null, null, 9, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, null, 5, "input", [["appvalidDecimal", ""], ["aria-label", "Text input with dropdown button"], ["autocomplete", "off"], ["class", "form-control"], ["name", "buy_price"], ["onkeypress", "return (event.charCode == 8 || event.charCode == 46) ? null : event.charCode >= 48 && event.charCode <= 57"], ["placeholder", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.TradeDetails.buy_price = $event) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_co.calculation(_co.orderType["buy"].type, "buy") !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 671744, [["buy_price", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](76, 0, null, null, 2, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, null, 1, "div", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](78, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](79, 0, null, null, 12, "div", [["class", "form-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](80, 0, null, null, 1, "label", [["class", "mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amount"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 9, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 5, "input", [["appvalidDecimal", ""], ["aria-label", "Text input with dropdown button"], ["autocomplete", "off"], ["class", "form-control"], ["id", "buy_amount"], ["name", "buy_amount"], ["onkeypress", "return (event.charCode == 8 || event.charCode == 46) ? null : event.charCode >= 48 && event.charCode <= 57"], ["placeholder", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.TradeDetails.buy_amount = $event) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_co.calculation(_co.orderType["buy"].type, "buy") !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](86, 671744, [["buy_amount", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](88, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, null, 2, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](90, 0, null, null, 1, "div", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](91, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](92, 0, null, null, 20, "div", [["class", "form-row d-flex row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, null, 13, "div", [["class", "col-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](95, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](97, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](99, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](101, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](102, 0, null, null, 4, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](104, null, ["Total : ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](105, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](106, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, null, 5, "div", [["class", "col-4 d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](108, 0, null, null, 4, "div", [["class", "mt-3 ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](110, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](112, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](113, 0, null, null, 43, "div", [["class", "tab-pane container-fluid fade px-0"], ["id", "buy2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](114, 0, null, null, 42, "form", [["class", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](115, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](116, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](118, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](119, 0, null, null, 16, "div", [["class", "form-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](120, 0, null, null, 5, "div", [["class", "d-flex col-12 px-0 mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amount"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](123, 0, null, null, 2, "label", [["class", "value-label ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](124, null, ["", " : Balance ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](125, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](126, 0, null, null, 9, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](127, 0, null, null, 5, "input", [["appvalidDecimal", ""], ["aria-label", "Text input with dropdown button"], ["autocomplete", "off"], ["class", "form-control"], ["id", "buy_amount"], ["name", "buy_amount"], ["onkeypress", "return (event.charCode == 8 || event.charCode == 46) ? null : event.charCode >= 48 && event.charCode <= 57"], ["placeholder", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 128)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.TradeDetails.buy_amount = $event) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_co.calculation(_co.orderType["buy"].type, "buy") !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](128, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](130, 671744, [["buy_amount", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](132, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](133, 0, null, null, 2, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](134, 0, null, null, 1, "div", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](135, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, null, 20, "div", [["class", "form-row d-flex row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](137, 0, null, null, 13, "div", [["class", "col-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](139, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](141, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](143, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](145, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](146, 0, null, null, 4, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](147, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](148, null, ["Total : ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](149, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](150, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](151, 0, null, null, 5, "div", [["class", "col-4 d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](152, 0, null, null, 4, "div", [["class", "mt-3 ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](154, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](156, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](157, 0, null, null, 109, "div", [["class", "tab-pane container-fluid fade px-0"], ["id", "sellform"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](158, 0, null, null, 6, "ul", [["class", "nav nav-tabs justify-content-around limit-market-tab"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](159, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](160, 0, null, null, 1, "a", [["class", "nav-link active"], ["data-toggle", "tab"], ["href", "#sell1"], ["id", "sell_limittab"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.change_type("limit", "sell") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Limit"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](162, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](163, 0, null, null, 1, "a", [["class", "nav-link"], ["data-toggle", "tab"], ["href", "#sell2"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.change_type("instant", "sell") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Market"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](165, 0, null, null, 101, "div", [["class", "tab-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](166, 0, null, null, 56, "div", [["class", "tab-pane container-fluid active px-0"], ["id", "sell1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](167, 0, null, null, 55, "form", [["class", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 169).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](168, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](169, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](171, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](172, 0, null, null, 16, "div", [["class", "form-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](173, 0, null, null, 5, "div", [["class", "d-flex col-12 px-0 mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](174, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Price"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](176, 0, null, null, 2, "label", [["class", "value-label ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](177, null, ["", " : Balance ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](178, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](179, 0, null, null, 9, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](180, 0, null, null, 5, "input", [["appvalidDecimal", ""], ["aria-label", "Text input with dropdown button"], ["autocomplete", "off"], ["class", "form-control"], ["name", "sell_price"], ["onkeypress", "return (event.charCode == 8 || event.charCode == 46) ? null : event.charCode >= 48 && event.charCode <= 57"], ["placeholder", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 181)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 181).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 181)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 181)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.TradeDetails.sell_price = $event) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_co.calculation(_co.orderType["sell"].type, "sell") !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](181, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](183, 671744, [["sell_price", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](185, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](186, 0, null, null, 2, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](187, 0, null, null, 1, "div", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](188, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](189, 0, null, null, 12, "div", [["class", "form-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](190, 0, null, null, 1, "label", [["class", "mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amount"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](192, 0, null, null, 9, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](193, 0, null, null, 5, "input", [["appvalidDecimal", ""], ["aria-label", "Text input with dropdown button"], ["autocomplete", "off"], ["class", "form-control"], ["id", "buyamount"], ["name", "sell_amount"], ["onkeypress", "return (event.charCode == 8 || event.charCode == 46) ? null : event.charCode >= 48 && event.charCode <= 57"], ["placeholder", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.TradeDetails.sell_amount = $event) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_co.calculation(_co.orderType["sell"].type, "sell") !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](194, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](196, 671744, [["sell_amount", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](198, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](199, 0, null, null, 2, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](200, 0, null, null, 1, "div", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](201, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](202, 0, null, null, 20, "div", [["class", "form-row d-flex row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](203, 0, null, null, 13, "div", [["class", "col-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](205, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](207, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](209, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](211, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](212, 0, null, null, 4, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](213, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](214, null, ["Total : ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](215, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](216, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](217, 0, null, null, 5, "div", [["class", "col-4 d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](218, 0, null, null, 4, "div", [["class", "mt-3 ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](220, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](222, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](223, 0, null, null, 43, "div", [["class", "tab-pane container-fluid fade px-0"], ["id", "sell2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](224, 0, null, null, 42, "form", [["class", ""], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 226).onReset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](225, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](226, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], [[8, null], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](228, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](229, 0, null, null, 16, "div", [["class", "form-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](230, 0, null, null, 5, "div", [["class", "d-flex col-12 px-0 mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](231, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Amount"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](233, 0, null, null, 2, "label", [["class", "value-label ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](234, null, ["", " : Balance ", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](235, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](236, 0, null, null, 9, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](237, 0, null, null, 5, "input", [["appvalidDecimal", ""], ["aria-label", "Text input with dropdown button"], ["autocomplete", "off"], ["class", "form-control"], ["id", "buyamount"], ["name", "sell_amount"], ["onkeypress", "return (event.charCode == 8 || event.charCode == 46) ? null : event.charCode >= 48 && event.charCode <= 57"], ["placeholder", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 238)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 238).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 238)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 238)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.TradeDetails.sell_amount = $event) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_co.calculation(_co.orderType["sell"].type, "sell") !== false);
        ad = (pd_5 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](238, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](240, 671744, [["sell_amount", 4]], 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](242, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](243, 0, null, null, 2, "div", [["class", "input-group-append"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](244, 0, null, null, 1, "div", [["class", "input-group-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](245, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](246, 0, null, null, 20, "div", [["class", "form-row d-flex row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](247, 0, null, null, 13, "div", [["class", "col-8"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](249, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](251, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](253, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](255, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](256, 0, null, null, 4, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](257, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](258, null, ["Total : ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](259, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](260, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](261, 0, null, null, 5, "div", [["class", "col-4 d-flex"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](262, 0, null, null, 4, "div", [["class", "mt-3 ml-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](264, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](266, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](267, 0, null, null, 51, "div", [["class", "market-table-cnt mobile-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](268, 0, null, null, 6, "ul", [["class", "nav nav-tabs justify-content-around"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](269, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](270, 0, null, null, 1, "a", [["class", "nav-link active"], ["data-toggle", "tab"], ["href", "#buysell"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Order book"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](272, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](273, 0, null, null, 1, "a", [["class", "nav-link"], ["data-toggle", "tab"], ["href", "#trd-hist"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Trade History"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](275, 0, null, null, 43, "div", [["class", "tab-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](276, 0, null, null, 26, "div", [["class", "tab-pane container-fluid active px-0"], ["id", "buysell"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](277, 0, null, null, 25, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](278, 0, null, null, 24, "table", [["class", "table table-hover"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](279, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](280, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](281, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](282, null, ["Amount (", ")"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](283, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](284, null, ["Price (", ")"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](285, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](286, null, ["Total (", ")"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](287, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](289, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](291, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](292, 0, null, null, 5, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](293, 0, null, null, 4, "tr", [["class", "trd-value-cnt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](294, 0, null, null, 3, "td", [["colspan", "3"], ["style", "text-align: center;"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](295, 0, null, null, 2, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](296, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](297, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](298, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](300, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_30)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](302, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](303, 0, null, null, 15, "div", [["class", "tab-pane container-fluid fade px-0"], ["id", "trd-hist"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](304, 0, null, null, 14, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](305, 0, null, null, 13, "table", [["class", "table table-hover"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](306, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](307, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](308, 0, null, null, 1, "th", [["class", "text-left"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Date & time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](310, 0, null, null, 1, "th", [["class", "text-center"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](311, null, ["Amount (", ")"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](312, 0, null, null, 1, "th", [["class", "text-right"], ["scope", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](313, null, ["Price (", ")"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](314, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](316, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_34)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](318, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](319, 16777216, null, null, 141, "div", [["aria-labelledby", "dialog-static-name"], ["bsModal", ""], ["class", "modal fade home-search-modal"], ["role", "dialog"], ["tabindex", "-1"]], null, [[null, "click"], [null, "keydown.esc"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 320).onClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown.esc" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 320).onEsc($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](320, 212992, [["staticModal", 4]], 0, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ngx_bootstrap_component_loader__WEBPACK_IMPORTED_MODULE_5__["ComponentLoaderFactory"]], { config: [0, "config"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](321, { backdrop: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](322, 0, null, null, 138, "div", [["class", "modal-dialog modal-sm"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](323, 0, null, null, 137, "div", [["class", "modal-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](324, 0, null, null, 7, "div", [["class", "top-header d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](325, 0, null, null, 1, "div", [["aria-label", "Close"], ["class", "topheader-icon-cnt close"], ["id", "close"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 320).hide() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](326, 0, null, null, 0, "img", [["class", "img-fluid"], ["src", "assets/images/back.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](327, 0, null, null, 3, "ul", [["class", "nav nav-tabs justify-content-around"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](328, 0, null, null, 2, "li", [["class", "nav-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](329, 0, null, null, 1, "a", [["class", "nav-link active"], ["data-toggle", "tab"], ["href", "#btc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["BTC"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](331, 0, null, null, 0, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](332, 0, null, null, 128, "div", [["class", "modal-body px-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](333, 0, null, null, 127, "div", [["class", "market-table-cnt mobile-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](334, 0, null, null, 126, "div", [["class", "tab-content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](335, 0, null, null, 13, "div", [["class", "tab-pane container-fluid active px-0"], ["id", "btc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](336, 0, null, null, 12, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](337, 0, null, null, 11, "table", [["class", "table table-hover  mkt-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](338, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](339, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](340, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Currency"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](342, 0, null, null, 1, "th", [["class", "text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Price/Vol"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](344, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["+/-"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](346, 0, null, null, 2, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_TradeComponent_35)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](348, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](349, 0, null, null, 55, "div", [["class", "tab-pane container-fluid fade px-0"], ["id", "eth"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](350, 0, null, null, 54, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](351, 0, null, null, 53, "table", [["class", "table table-hover mkt-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](352, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](353, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](354, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Currency"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](356, 0, null, null, 1, "th", [["class", "text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Price/Vol"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](358, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["+/-"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](360, 0, null, null, 44, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](361, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](362, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](363, 0, null, null, 2, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](364, 0, null, null, 0, "img", [["class", "mr-2"], ["src", "assets/images/btc-icon.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ETH"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](366, 0, null, null, 2, "td", [["class", "text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](367, 0, null, null, 1, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$8820.00500000 / $7720.00500000"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](369, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](370, 0, null, null, 1, "span", [["class", "text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1.20%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](372, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](373, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](374, 0, null, null, 2, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](375, 0, null, null, 0, "img", [["class", "mr-2"], ["src", "assets/images/btc-icon.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ETH"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](377, 0, null, null, 2, "td", [["class", "text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](378, 0, null, null, 1, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$8820.00500000 / $7720.00500000"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](380, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](381, 0, null, null, 1, "span", [["class", "text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1.20%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](383, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](384, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](385, 0, null, null, 2, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](386, 0, null, null, 0, "img", [["class", "mr-2"], ["src", "assets/images/btc-icon.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ETH"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](388, 0, null, null, 2, "td", [["class", "text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](389, 0, null, null, 1, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$8820.00500000 / $7720.00500000"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](391, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](392, 0, null, null, 1, "span", [["class", "text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1.20%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](394, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](395, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](396, 0, null, null, 2, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](397, 0, null, null, 0, "img", [["class", "mr-2"], ["src", "assets/images/btc-icon.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ETH"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](399, 0, null, null, 2, "td", [["class", "text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](400, 0, null, null, 1, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$8820.00500000 / $7720.00500000"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](402, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](403, 0, null, null, 1, "span", [["class", "text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1.20%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](405, 0, null, null, 55, "div", [["class", "tab-pane container-fluid fade px-0"], ["id", "eos"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](406, 0, null, null, 54, "div", [["class", "table-responsive"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](407, 0, null, null, 53, "table", [["class", "table table-hover mkt-table"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](408, 0, null, null, 7, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](409, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](410, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Currency"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](412, 0, null, null, 1, "th", [["class", "text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Price/Vol"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](414, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["+/-"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](416, 0, null, null, 44, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](417, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](418, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](419, 0, null, null, 2, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](420, 0, null, null, 0, "img", [["class", "mr-2"], ["src", "assets/images/btc-icon.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ETH"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](422, 0, null, null, 2, "td", [["class", "text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](423, 0, null, null, 1, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$8820.00500000 / $7720.00500000"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](425, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](426, 0, null, null, 1, "span", [["class", "text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1.20%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](428, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](429, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](430, 0, null, null, 2, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](431, 0, null, null, 0, "img", [["class", "mr-2"], ["src", "assets/images/btc-icon.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ETH"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](433, 0, null, null, 2, "td", [["class", "text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](434, 0, null, null, 1, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$8820.00500000 / $7720.00500000"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](436, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](437, 0, null, null, 1, "span", [["class", "text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1.20%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](439, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](440, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](441, 0, null, null, 2, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](442, 0, null, null, 0, "img", [["class", "mr-2"], ["src", "assets/images/btc-icon.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ETH"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](444, 0, null, null, 2, "td", [["class", "text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](445, 0, null, null, 1, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$8820.00500000 / $7720.00500000"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](447, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](448, 0, null, null, 1, "span", [["class", "text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1.20%"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](450, 0, null, null, 10, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](451, 0, null, null, 3, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](452, 0, null, null, 2, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](453, 0, null, null, 0, "img", [["class", "mr-2"], ["src", "assets/images/btc-icon.png"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ETH"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](455, 0, null, null, 2, "td", [["class", "text-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](456, 0, null, null, 1, "span", [["class", "white-txt"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["$8820.00500000 / $7720.00500000"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](458, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](459, 0, null, null, 1, "span", [["class", "text-success"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["1.20%"]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = (_co.change >= 0); _ck(_v, 22, 0, currVal_4); var currVal_5 = (_co.change < 0); _ck(_v, 24, 0, currVal_5); var currVal_24 = "buy_price"; var currVal_25 = _co.TradeDetails.buy_price; _ck(_v, 73, 0, currVal_24, currVal_25); var currVal_34 = "buy_amount"; var currVal_35 = _co.TradeDetails.buy_amount; _ck(_v, 86, 0, currVal_34, currVal_35); var currVal_37 = (_co.feesper == 1); _ck(_v, 95, 0, currVal_37); var currVal_38 = (_co.feesper != 1); _ck(_v, 97, 0, currVal_38); var currVal_39 = (_co.feesper == 1); _ck(_v, 99, 0, currVal_39); var currVal_40 = (_co.feesper != 1); _ck(_v, 101, 0, currVal_40); var currVal_43 = !_co.buylimitbtn; _ck(_v, 110, 0, currVal_43); var currVal_44 = _co.buylimitbtn; _ck(_v, 112, 0, currVal_44); var currVal_61 = "buy_amount"; var currVal_62 = _co.TradeDetails.buy_amount; _ck(_v, 130, 0, currVal_61, currVal_62); var currVal_64 = (_co.feesper == 1); _ck(_v, 139, 0, currVal_64); var currVal_65 = (_co.feesper != 1); _ck(_v, 141, 0, currVal_65); var currVal_66 = (_co.feesper == 1); _ck(_v, 143, 0, currVal_66); var currVal_67 = (_co.feesper != 1); _ck(_v, 145, 0, currVal_67); var currVal_70 = !_co.buyinstantbtn; _ck(_v, 154, 0, currVal_70); var currVal_71 = _co.buyinstantbtn; _ck(_v, 156, 0, currVal_71); var currVal_88 = "sell_price"; var currVal_89 = _co.TradeDetails.sell_price; _ck(_v, 183, 0, currVal_88, currVal_89); var currVal_98 = "sell_amount"; var currVal_99 = _co.TradeDetails.sell_amount; _ck(_v, 196, 0, currVal_98, currVal_99); var currVal_101 = (_co.feesper == 1); _ck(_v, 205, 0, currVal_101); var currVal_102 = (_co.feesper != 1); _ck(_v, 207, 0, currVal_102); var currVal_103 = (_co.feesper == 1); _ck(_v, 209, 0, currVal_103); var currVal_104 = (_co.feesper != 1); _ck(_v, 211, 0, currVal_104); var currVal_107 = !_co.selllimitbtn; _ck(_v, 220, 0, currVal_107); var currVal_108 = _co.selllimitbtn; _ck(_v, 222, 0, currVal_108); var currVal_125 = "sell_amount"; var currVal_126 = _co.TradeDetails.sell_amount; _ck(_v, 240, 0, currVal_125, currVal_126); var currVal_128 = (_co.feesper == 1); _ck(_v, 249, 0, currVal_128); var currVal_129 = (_co.feesper != 1); _ck(_v, 251, 0, currVal_129); var currVal_130 = (_co.feesper == 1); _ck(_v, 253, 0, currVal_130); var currVal_131 = (_co.feesper != 1); _ck(_v, 255, 0, currVal_131); var currVal_134 = !_co.sellinstantbtn; _ck(_v, 264, 0, currVal_134); var currVal_135 = _co.sellinstantbtn; _ck(_v, 266, 0, currVal_135); var currVal_139 = _co.buyOrders; _ck(_v, 289, 0, currVal_139); var currVal_140 = (_co.buyOrders.length == 0); _ck(_v, 291, 0, currVal_140); var currVal_142 = _co.sellOrders; _ck(_v, 300, 0, currVal_142); var currVal_143 = (_co.sellOrders.length == 0); _ck(_v, 302, 0, currVal_143); var currVal_146 = _co.tradeHistory; _ck(_v, 316, 0, currVal_146); var currVal_147 = (_co.tradeHistory.length == 0); _ck(_v, 318, 0, currVal_147); var currVal_148 = _ck(_v, 321, 0, "static"); _ck(_v, 320, 0, currVal_148); var currVal_149 = _co.showpair; _ck(_v, 348, 0, currVal_149); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.fromCurrency; var currVal_1 = _co.toCurrency; _ck(_v, 9, 0, currVal_0, currVal_1); var currVal_2 = _co.toCurrency; _ck(_v, 13, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 0, _ck(_v, 20, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.price, "1.8-8")); _ck(_v, 19, 0, currVal_3); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 29, 0, _ck(_v, 30, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.high, ".8")); _ck(_v, 29, 0, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 34, 0, _ck(_v, 35, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.low, ".8")); _ck(_v, 34, 0, currVal_7); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).ngClassPending; _ck(_v, 57, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_15 = _co.toCurrency; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 67, 1, _ck(_v, 68, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.tobal, "1.8-8")); _ck(_v, 67, 0, currVal_15, currVal_16); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).ngClassUntouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).ngClassTouched; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).ngClassPristine; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).ngClassDirty; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).ngClassValid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).ngClassInvalid; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).ngClassPending; _ck(_v, 70, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_26 = _co.toCurrency; _ck(_v, 78, 0, currVal_26); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).ngClassUntouched; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).ngClassTouched; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).ngClassPristine; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).ngClassDirty; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).ngClassValid; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).ngClassInvalid; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 88).ngClassPending; _ck(_v, 83, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33); var currVal_36 = _co.fromCurrency; _ck(_v, 91, 0, currVal_36); var currVal_41 = _co.toCurrency; _ck(_v, 104, 0, currVal_41); var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 105, 0, _ck(_v, 106, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.buy_total, ".8")); _ck(_v, 105, 0, currVal_42); var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).ngClassUntouched; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).ngClassTouched; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).ngClassPristine; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).ngClassDirty; var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).ngClassValid; var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).ngClassInvalid; var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 118).ngClassPending; _ck(_v, 114, 0, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50, currVal_51); var currVal_52 = _co.toCurrency; var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 124, 1, _ck(_v, 125, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.tobal, ".8")); _ck(_v, 124, 0, currVal_52, currVal_53); var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).ngClassUntouched; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).ngClassTouched; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).ngClassPristine; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).ngClassDirty; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).ngClassValid; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).ngClassInvalid; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 132).ngClassPending; _ck(_v, 127, 0, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60); var currVal_63 = _co.fromCurrency; _ck(_v, 135, 0, currVal_63); var currVal_68 = _co.toCurrency; _ck(_v, 148, 0, currVal_68); var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 149, 0, _ck(_v, 150, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.buy_total, ".8")); _ck(_v, 149, 0, currVal_69); var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).ngClassUntouched; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).ngClassTouched; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).ngClassPristine; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).ngClassDirty; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).ngClassValid; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).ngClassInvalid; var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 171).ngClassPending; _ck(_v, 167, 0, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78); var currVal_79 = _co.fromCurrency; var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 177, 1, _ck(_v, 178, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.frombal, ".8")); _ck(_v, 177, 0, currVal_79, currVal_80); var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).ngClassUntouched; var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).ngClassTouched; var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).ngClassPristine; var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).ngClassDirty; var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).ngClassValid; var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).ngClassInvalid; var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 185).ngClassPending; _ck(_v, 180, 0, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87); var currVal_90 = _co.toCurrency; _ck(_v, 188, 0, currVal_90); var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassUntouched; var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassTouched; var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassPristine; var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassDirty; var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassValid; var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassInvalid; var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassPending; _ck(_v, 193, 0, currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97); var currVal_100 = _co.fromCurrency; _ck(_v, 201, 0, currVal_100); var currVal_105 = _co.toCurrency; _ck(_v, 214, 0, currVal_105); var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 215, 0, _ck(_v, 216, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.sell_total, ".8")); _ck(_v, 215, 0, currVal_106); var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 228).ngClassUntouched; var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 228).ngClassTouched; var currVal_111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 228).ngClassPristine; var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 228).ngClassDirty; var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 228).ngClassValid; var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 228).ngClassInvalid; var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 228).ngClassPending; _ck(_v, 224, 0, currVal_109, currVal_110, currVal_111, currVal_112, currVal_113, currVal_114, currVal_115); var currVal_116 = _co.fromCurrency; var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 234, 1, _ck(_v, 235, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.frombal, ".8")); _ck(_v, 234, 0, currVal_116, currVal_117); var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 242).ngClassUntouched; var currVal_119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 242).ngClassTouched; var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 242).ngClassPristine; var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 242).ngClassDirty; var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 242).ngClassValid; var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 242).ngClassInvalid; var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 242).ngClassPending; _ck(_v, 237, 0, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124); var currVal_127 = _co.fromCurrency; _ck(_v, 245, 0, currVal_127); var currVal_132 = _co.toCurrency; _ck(_v, 258, 0, currVal_132); var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 259, 0, _ck(_v, 260, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.sell_total, ".8")); _ck(_v, 259, 0, currVal_133); var currVal_136 = _co.fromCurrency; _ck(_v, 282, 0, currVal_136); var currVal_137 = _co.toCurrency; _ck(_v, 284, 0, currVal_137); var currVal_138 = _co.toCurrency; _ck(_v, 286, 0, currVal_138); var currVal_141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 296, 0, _ck(_v, 297, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.price, "1.8-8")); _ck(_v, 296, 0, currVal_141); var currVal_144 = _co.fromCurrency; _ck(_v, 311, 0, currVal_144); var currVal_145 = _co.toCurrency; _ck(_v, 313, 0, currVal_145); }); }
function View_TradeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-trade", [], null, null, null, View_TradeComponent_0, RenderType_TradeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _trade_component__WEBPACK_IMPORTED_MODULE_6__["TradeComponent"], [ngx_socket_io__WEBPACK_IMPORTED_MODULE_7__["Socket"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"], ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerService"], _services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TradeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-trade", _trade_component__WEBPACK_IMPORTED_MODULE_6__["TradeComponent"], View_TradeComponent_Host_0, { symbol: "symbol", interval: "interval", datafeedUrl: "datafeedUrl", libraryPath: "libraryPath", chartsStorageUrl: "chartsStorageUrl", chartsStorageApiVersion: "chartsStorageApiVersion", clientId: "clientId", userId: "userId", fullscreen: "fullscreen", autosize: "autosize", hide_side_toolbar: "hide_side_toolbar", containerId: "containerId" }, {}, []);



/***/ }),

/***/ "./src/app/pages/trade/trade.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/trade/trade.component.ts ***!
  \************************************************/
/*! exports provided: TradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeComponent", function() { return TradeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_charting_library_charting_library_min__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/charting_library/charting_library.min */ "./src/assets/charting_library/charting_library.min.js");
/* harmony import */ var _assets_charting_library_charting_library_min__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_charting_library_charting_library_min__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_10__);












var TradeComponent = /** @class */ (function () {
    function TradeComponent(mysocket, toastr, router, service, route, titleService, spinner, mainService, zone, document) {
        this.mysocket = mysocket;
        this.toastr = toastr;
        this.router = router;
        this.service = service;
        this.route = route;
        this.titleService = titleService;
        this.spinner = spinner;
        this.mainService = mainService;
        this.zone = zone;
        this.document = document;
        this.scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };
        this.passingObject = "1m";
        this.candleData = [];
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_10__;
        this.exitFullScreen = false;
        this.openFullScreen = true;
        /*Chart end*/
        this.oneAtATime = true;
        this.isOpen = true;
        this.urlcon = '/trade/';
        this.TradeDetails = {};
        this.PairDetails = {};
        this.fromCurrency = '';
        this.toCurrency = '';
        this.pairss = '';
        this.fromcurrencyName = '';
        this.tocurrencyName = '';
        this.price = 0;
        this.change = 0;
        this.high = 0;
        this.low = 0;
        this.volume = 0;
        this.values = 0;
        this.sellOrders = [];
        this.buyOrders = [];
        this.tradeHistory = [];
        this.PairDet = [];
        this.showpair = [];
        this.showLoader = false;
        this.buylimitbtn = false;
        this.buyinstantbtn = false;
        this.selllimitbtn = false;
        this.sellinstantbtn = false;
        this.show_login_btn = true;
        this.loader = "assets/images/loader.svg";
        this.activeOrder = [];
        this.userTradeHistory = [];
        this.usersHistory = [];
        this.TotDet = { 'trade': 0, 'buy': 0, 'sell': 0 };
        this.FromDigit = 8;
        this.ToDigit = 8;
        this.buy_taker_fees = 0;
        this.buy_maker_fees = 0;
        this.sell_taker_fees = 0;
        this.sell_maker_fees = 0;
        this.feesper = 0;
        this.buy_total = 0;
        this.sell_total = 0;
        this.frombal = 0;
        this.tobal = 0;
        // user_id = 0;
        this.user_id = localStorage.getItem('address');
        this.basecoin = localStorage.getItem('Basecoin');
        this.createEmit = 0;
        this.styleExp = '';
        this.pairid = '';
        this.cancelOrders = [];
        this.searchkeyword = '';
        this.allPairsList = [];
        this.scrollbarOptions3 = {};
        this.screenAvailWidth = window.screen.availWidth;
        this.orderType = { 'buy': { 'type': 'limit', 'pricetag': 'price' }, 'sell': { 'type': 'limit', 'pricetag': 'price' } };
        this._symbol = this.pairss;
        this._interval = 'D';
        this._datafeedUrl = this.mainService.serviceHost + '/trade/chart';
        this._libraryPath = '/assets/charting_library/';
        this._chartsStorageUrl = 'https://saveload.tradingview.com';
        this._chartsStorageApiVersion = '1.1';
        this._clientId = 'tradingview.com';
        this._userId = "public_user_id";
        this._fullscreen = false;
        this._autosize = true;
        this._hide_side_toolbar = false;
        this._containerId = 'tv_chart_container';
        this.widgetOptions = {
            symbol: "ETH_BTC",
            datafeed: new window.Datafeeds.UDFCompatibleDatafeed(this._datafeedUrl),
            interval: this._interval,
            container_id: this._containerId,
            library_path: this._libraryPath,
            locale: 'en',
            enabled_features: ['study_templates'],
            charts_storage_url: this._chartsStorageUrl,
            charts_storage_api_version: this._chartsStorageApiVersion,
            client_id: this._clientId,
            user_id: this._userId,
            fullscreen: this._fullscreen,
            autosize: this._autosize,
            toolbar_bg: '#ffffff',
            hide_side_toolbar: this._hide_side_toolbar,
            // allow_symbol_change:true,
            studies_overrides: { "volume.volume.color.0": "#ffffff", "volume.volume.color.1": "#ffffff", "volume.lineheight": "91" },
            overrides: {
                "paneProperties.background": "#ffffff",
                "paneProperties.vertGridProperties.color": "#363c4e",
                "paneProperties.horzGridProperties.color": "#363c4e",
                "symbolWatermarkProperties.transparency": 90,
                "scalesProperties.textColor": "#AAA",
                "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
                "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f',
            },
            // disabled_features:[
            // "use_localstorage_for_settings",'border_around_the_chart','header_compare','scales_context_menu','compare_symbol','header_symbol_search','border_around_the_chart','go_to_date','show_dom_first_time',"volume_force_overlay", "header_saveload", "timeframes_toolbar"
            // ]
            disabled_features: ['display_market_status', 'header_compare', 'scales_context_menu', 'compare_symbol', 'header_symbol_search', 'border_around_the_chart', 'go_to_date', 'show_dom_first_time', "left_toolbar", "header_saveload", "timeframes_toolbar"]
        };
        this.chartOptions = {
            series: [{
                    data: []
                }],
            title: 'charts',
            chart: {
                backgroundColor: '#0B1433',
            },
            xAxis: {
                lineWidth: 0,
                minorGridLineWidth: 0,
                minorTickLength: 0,
                tickLength: 0,
                visible: false
            },
            tooltip: { enabled: true,
                useHtml: true,
                formatter: function () {
                    return '</b><br/>' +
                        this.y;
                } },
            legend: {
                enabled: false
            },
            yAxis: {
                color: 'white',
                lineWidth: 0,
                gridLineWidth: 0,
                visible: false
            },
        };
        this.scrollbarOptions1 = {};
        this.onready = function (widgetOptions) {
            var tvWidget = new _assets_charting_library_charting_library_min__WEBPACK_IMPORTED_MODULE_9__["widget"](widgetOptions);
            tvWidget.onChartReady(function () {
                var button = tvWidget.createButton()
                    .attr('title', 'Click to show a notification popup')
                    .addClass('apply-common-tooltip')
                    .on('click', function () { return tvWidget.showNoticeDialog({
                    title: 'Notification',
                    body: 'TradingView Charting Library API works correctly',
                    callback: function () {
                        // console.log('Noticed!');
                    },
                }); });
                // button[0].innerHTML = 'Check API';
                //button[0].innerHTML = '';
            });
        };
    }
    //new chart
    //private Amchart: am4charts.XYChart;
    TradeComponent.prototype.bodyclass = function () {
        document.body.classList.toggle("trade-light-theme");
        if (document.body.classList.contains("trade-light-theme")) {
            $(".trade_full_sec").addClass("trade_light_theme");
            this.widgetOptions["toolbar_bg"] = '#ffffff';
            this.widgetOptions["studies_overrides"] = { "volume.volume.color.0": "#ffffff", "volume.volume.color.1": "#ffffff", "volume.lineheight": "91" };
            this.widgetOptions["overrides"] = {
                "paneProperties.background": "#ffffff",
                "symbolWatermarkProperties.transparency": 90,
                "scalesProperties.textColor": "#AAA",
                "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
                "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f',
            };
        }
        else {
            $(".trade_full_sec").removeClass("trade_light_theme");
            this.widgetOptions["toolbar_bg"] = '#131722';
            this.widgetOptions["studies_overrides"] = { "volume.volume.color.0": "#131722", "volume.volume.color.1": "#131722", "volume.lineheight": "91" };
            this.widgetOptions["overrides"] = {
                "paneProperties.background": "#131722",
                "paneProperties.vertGridProperties.color": "#363c4e",
                "paneProperties.horzGridProperties.color": "#363c4e",
                "symbolWatermarkProperties.transparency": 90,
                "scalesProperties.textColor": "#AAA",
                "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
                "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f',
            };
        }
        this.onready(this.widgetOptions);
    };
    Object.defineProperty(TradeComponent.prototype, "symbol", {
        set: function (symbol) {
            this._symbol = symbol || this._symbol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeComponent.prototype, "interval", {
        set: function (interval) {
            this._interval = interval || this._interval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeComponent.prototype, "datafeedUrl", {
        set: function (datafeedUrl) {
            this._datafeedUrl = datafeedUrl || this._datafeedUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeComponent.prototype, "libraryPath", {
        set: function (libraryPath) {
            this._libraryPath = libraryPath || this._libraryPath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeComponent.prototype, "chartsStorageUrl", {
        set: function (chartsStorageUrl) {
            this._chartsStorageUrl = chartsStorageUrl || this._chartsStorageUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeComponent.prototype, "chartsStorageApiVersion", {
        set: function (chartsStorageApiVersion) {
            this._chartsStorageApiVersion = chartsStorageApiVersion || this._chartsStorageApiVersion;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeComponent.prototype, "clientId", {
        set: function (clientId) {
            this._clientId = clientId || this._clientId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeComponent.prototype, "userId", {
        set: function (userId) {
            this._userId = userId || this._userId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeComponent.prototype, "fullscreen", {
        set: function (fullscreen) {
            this._fullscreen = fullscreen || this._fullscreen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeComponent.prototype, "autosize", {
        set: function (autosize) {
            this._autosize = autosize || this._autosize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeComponent.prototype, "hide_side_toolbar", {
        set: function (hide_side_toolbar) {
            this._hide_side_toolbar = hide_side_toolbar || this._hide_side_toolbar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TradeComponent.prototype, "containerId", {
        set: function (containerId) {
            this._containerId = containerId || this._containerId;
        },
        enumerable: true,
        configurable: true
    });
    TradeComponent.prototype.ngOnInit = function () {
        var _this_1 = this;
        var _this = this;
        $(function () {
            $('input').on('input', function (event) {
                console.log("event", event);
                if (event.target.placeholder == "Enter Your Email" || event.target.placeholder == "Enter Your OTP") {
                }
                else {
                    this.value = this.value
                        .replace(/[^\d.]/g, '')
                        .replace(/(^[\d]{8})[\d]/g, '$1')
                        .replace(/(\..*)\./g, '$1')
                        .replace(/(\.[\d]{8})./g, '$1');
                }
                // else{
                //   _this.searchkeyword = (this.value).toLowerCase();
                //   // for (var i = 0; i < _this.allPairsList.length; i++) {
                //   //   if(_this.allPairsList[i].currency == _this.pair_to)
                //   //   {
                //   //   console.log('pairs',_this.allPairsList[i],_this.pair_to)
                //       _this.updatePairDetails(_this.allPairsList);
                //   //   }
                //   // }
                // }
            });
        });
        if (this.screenAvailWidth > 1200) {
            this.scrollbarOptions1 = { axis: 'y', theme: 'minimal-dark' };
        }
        else {
            this.scrollbarOptions1 = { axis: 'x', theme: 'minimal-dark' };
        }
        this.spinner.show();
        if (localStorage.getItem('Basecoin') == 'BTC') {
            this.service.get_requestData('/BdAMx4fdex/getusr', { 'address': this.user_id }).subscribe(function (res) {
                if (res) {
                    if (res.status == 0) {
                        _this_1.logoutuser();
                    }
                    else {
                        return true;
                    }
                }
            });
        }
        if (this.user_id == null || this.user_id == undefined || !this.user_id) {
            this.show_login_btn = false;
        }
        function getLanguageFromURL() {
            var regex = new RegExp('[\\?&]lang=([^&#]*)');
            var results = regex.exec(location.search);
            return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
        }
        // var sitesettings = JSON.parse(localStorage.getItem('site_setting'))
        // this.site_settings=sitesettings.site_logo;
        this.viewcharts();
        this.mainService.get_Data('/trade/PairsGet').subscribe(function (resData) {
            var getdet = resData.Message;
            if (resData.status) {
                if (resData.Message.length > 0) {
                    _this_1.allPairsList = resData.Message;
                    _this_1.updatePairDetails(resData.Message);
                }
            }
            _this_1.spinner.hide();
        });
        this.Triggersocket('joined').subscribe(function (res) {
            console.log('success-completed ======================');
        });
        this.Triggersocket('welcomes').subscribe(function (res) {
            console.log("OK===========================");
        });
        this.Triggersocket('createResponse').subscribe(function (res) {
            _this_1.buylimitbtn = false;
            _this_1.buyinstantbtn = false;
            _this_1.selllimitbtn = false;
            _this_1.sellinstantbtn = false;
            if (res.user_id == _this_1.user_id && res.pair == _this_1.pair_id && _this_1.createEmit == 1) {
                if (res.success == true) {
                    _this_1.toastr.success(res.msg, 'Success');
                }
                else {
                    _this_1.toastr.error(res.msg, 'Error');
                }
                _this_1.createEmit = 0;
                if (res.status == 1) {
                    if (res.type == 'buy') {
                        _this_1.TradeDetails.buy_amount = '';
                        _this_1.TradeDetails.buy_price = '';
                        _this_1.buy_maker_fees = 0;
                        _this_1.buy_taker_fees = 0;
                        _this_1.buy_total = 0;
                    }
                    else {
                        _this_1.TradeDetails.sell_amount = '';
                        _this_1.TradeDetails.sell_price = '';
                        _this_1.sell_maker_fees = 0;
                        _this_1.sell_taker_fees = 0;
                        _this_1.sell_total = 0;
                    }
                }
                else {
                    _this_1.showLoader = false;
                    if (res.msg == 'Not a valid pair') {
                        _this_1.router.navigate(['/']);
                    }
                }
            }
        });
        this.Triggersocket('pairResponse').subscribe(function (res) {
            if (res._id == _this_1.pair_id) {
                _this_1.TotDet = { 'trade': 0, 'buy': 0, 'sell': 0 };
                _this_1.PairDetails = res;
                _this_1.updateCurrentPair();
                if (res.price > 0) {
                    _this_1.marketprice = res.price;
                }
                else {
                    _this_1.marketprice = res.marketPrice;
                }
            }
        });
        this.Triggersocket('userResponse').subscribe(function (res) {
            if (res.userId == _this_1.user_id && res.pairid == _this_1.pair_id) {
                _this_1.showLoader = false;
                _this_1.frombal = res.FromBal;
                _this_1.tobal = res.ToBal;
                _this_1.activeOrder = res.activeOrder;
                _this_1.userTradeHistory = res.userTradeHistory;
                _this_1.updateUserHistory();
            }
        });
        this.Triggersocket('emitPairsResponse').subscribe(function (res) {
            if (res.trade.length > 0) {
                _this_1.allPairsList = res.trade;
                _this_1.updatePairDetails(res.trade);
            }
        });
    };
    TradeComponent.prototype.isHaving = function (val) { return typeof val[0] != 'undefined'; };
    TradeComponent.prototype.updateCurrentPair = function () {
        var _this_1 = this;
        var req = {
            'userId': this.user_id,
            'pairid': this.pairid
        };
        this.mainService.get_requestData('/trade/get_cancelled', req).subscribe(function (resData) {
            _this_1.cancelOrders = resData;
        });
        this.fromCurrency = this.PairDetails.fromCurrency.currencySymbol;
        this.toCurrency = this.PairDetails.toCurrency.currencySymbol;
        this.fromcurrencyName = this.PairDetails.fromCurrency.currencyName;
        this.tocurrencyName = this.PairDetails.toCurrency.currencyName;
        if (this.PairDetails.price > 0) {
            this.price = this.PairDetails.price;
        }
        else {
            this.price = this.PairDetails.marketPrice;
        }
        this.change = this.PairDetails.change;
        this.high = this.PairDetails.high;
        this.low = this.PairDetails.low;
        this.volume = this.PairDetails.volume;
        this.values = this.PairDetails.value;
        this.sellOrders = this.PairDetails.sellOrders;
        this.buyOrders = this.PairDetails.buyOrders;
        this.tradeHistory = this.PairDetails.tradeHistory;
        var get_pair_data = {
            pair: this.fromCurrency + "_" + this.toCurrency,
            currency: this.basecoin != null ? this.basecoin : "BTC"
        };
        //console.log("jegana",get_pair_data)
        this.sidechart(get_pair_data);
    };
    TradeComponent.prototype.sidechart = function (get_pair_data) {
        var _this_1 = this;
        this.mainService.get_requestData('/get_pair_chart', get_pair_data).subscribe(function (get_chart) {
            if (get_chart.status) {
                _this_1.supplychainamount = get_chart.currencydata.circulating_supply;
                // this.chartOptions = {
                //   series: [{
                //   data: get_chart.data
                //   }]
                // }  
                _this_1.chartOptions = {
                    series: [{
                            data: get_chart.data
                        }],
                    title: 'charts',
                    chart: {
                        backgroundColor: '#0B1433',
                    },
                    xAxis: {
                        lineWidth: 0,
                        minorGridLineWidth: 0,
                        minorTickLength: 0,
                        tickLength: 0,
                        visible: false
                    },
                    tooltip: { enabled: true,
                        useHtml: true,
                        formatter: function () {
                            return '</b><br/>' +
                                this.y;
                        } },
                    legend: {
                        enabled: false
                    },
                    yAxis: {
                        color: 'white',
                        lineWidth: 0,
                        gridLineWidth: 0,
                        visible: false
                    },
                };
                // this.chartOptions = {
                // series: [{
                // data: get_chart.data
                // }],
                // title:'charts',
                // chart: {
                // backgroundColor: '#0B1433',
                // },
                // xAxis: {
                // lineWidth: 0,
                // minorGridLineWidth: 0,
                // minorTickLength: 0,
                // tickLength: 0
                // },
                // yAxis: {
                // color:'white',
                // lineWidth: 0,
                // gridLineWidth:0,
                // },
                // };
            }
        });
    };
    TradeComponent.prototype.viewcharts = function () {
        var _this_1 = this;
        this.route.params.subscribe(function (params) {
            _this_1.pair = params['pair'];
            if (params['pair'] != undefined && (_this_1.pair.split('_')[1] == 'BTC' || _this_1.pair.split('_')[1] == 'EOS' || _this_1.pair.split('_')[1] == 'ETH')) {
                // var element4 = document.getElementById(this.pair.split('_')[1]);
                // element4.className = element4.className.replace(/\bgradient-btn-border\b/g, "gradient-btn");        
            }
            var pairs = { pair: params['pair'] };
            var get_pair_data = {
                pair: params['pair'],
                currency: _this_1.basecoin != null ? _this_1.basecoin : "BTC"
            };
            _this_1.showLoader = true;
            // console.log("jeganathan","BINANCE:"+this.pair.split('_')[0]+
            // this.pair.split('_')[1]+"")
            // var widgetOptions =
            // {
            // "symbol" : "BINANCE:"+this.pair.split('_')[0]+
            // this.pair.split('_')[1]+"",
            // "interval": "D",
            // "timezone": "Etc/UTC",
            // "hide_legend": true,
            // "theme": 'dark',
            // "style": "1",
            // "locale": "in",
            // "toolbar_bg": "#072548",
            // "enable_publishing": false,
            // "allow_symbol_change": true,
            // "container_id": "tradingview_676bb",
            // }
            // ;
            // this.tvWidget1 = new TradingView.widget(widgetOptions);
            _this_1.sidechart(get_pair_data);
            _this_1.mainService.get_requestData('/trade/checkPair', pairs).subscribe(function (value) {
                if (!value.status) {
                    _this_1.toastr.error('Not a valid pair', 'Oops!');
                    _this_1.router.navigate(['/']);
                }
                else {
                    // var element4 = document.getElementById(value.Message.toCurrency.currencySymbol);
                    // element4.className = element4.className.replace(/\bgradient-btn-border\b/g, "gradient-btn"); 
                    _this_1.PairDetails = value.Message;
                    _this_1.pairid = _this_1.PairDetails.fromCurrency._id + '_' + _this_1.PairDetails.toCurrency._id;
                    _this_1.pairss = _this_1.PairDetails.fromCurrency.currencySymbol + '_' + _this_1.PairDetails.toCurrency.currencySymbol;
                    _this_1.updateCurrentPair();
                    _this_1.TradeDetails.buy_price = _this_1.price.toFixed(8);
                    _this_1.TradeDetails.sell_price = _this_1.price.toFixed(8);
                    _this_1.pair_from = _this_1.PairDetails.fromCurrency.currencySymbol;
                    _this_1.pair_to = _this_1.PairDetails.toCurrency.currencySymbol;
                    if (_this_1.PairDet.length > 0) {
                        _this_1.updatePairDetails(_this_1.PairDet);
                    }
                    if (_this_1.pair != _this_1.PairDetails.pair) {
                        _this_1.router.navigate(['/trade/' + _this_1.PairDetails.pair]);
                    }
                    if (value.Message.price > 0) {
                        _this_1.marketprice = value.Message.price;
                    }
                    else {
                        _this_1.marketprice = value.Message.marketPrice;
                    }
                    _this_1.feesper = value.Message.feeType;
                    _this_1.takerfee = value.Message.takerFee;
                    _this_1.makerfee = value.Message.makerFee;
                    _this_1.minTrade = value.Message.minTrade;
                    _this_1.pair_id = value.Message._id;
                    if (document.body.classList.contains("trade-light-theme")) {
                        $(".trade_full_sec").addClass("trade_light_theme");
                        _this_1.widgetOptions["toolbar_bg"] = '#ffffff';
                        _this_1.widgetOptions["studies_overrides"] = { "volume.volume.color.0": "#ffffff", "volume.volume.color.1": "#ffffff", "volume.lineheight": "91" };
                        _this_1.widgetOptions["overrides"] = {
                            "paneProperties.background": "#ffffff",
                            "symbolWatermarkProperties.transparency": 90,
                            "scalesProperties.textColor": "#AAA",
                            "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
                            "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f',
                        };
                    }
                    else {
                        $(".trade_full_sec").removeClass("trade_light_theme");
                        _this_1.widgetOptions["toolbar_bg"] = '#131722';
                        _this_1.widgetOptions["studies_overrides"] = { "volume.volume.color.0": "#131722", "volume.volume.color.1": "#131722", "volume.lineheight": "91" };
                        _this_1.widgetOptions["overrides"] = {
                            "paneProperties.background": "#131722",
                            "paneProperties.vertGridProperties.color": "#363c4e",
                            "paneProperties.horzGridProperties.color": "#363c4e",
                            "symbolWatermarkProperties.transparency": 90,
                            "scalesProperties.textColor": "#AAA",
                            "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
                            "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f',
                        };
                    }
                    _this_1.widgetOptions['symbol'] = _this_1.pairss;
                    _this_1.onready(_this_1.widgetOptions);
                    /*socket*/
                    _this_1.backurl = _this_1.mainService.serviceHost;
                    var datas = { "userid": _this_1.user_id, "pairid": _this_1.pair_id };
                    _this_1.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_8__(_this_1.backurl);
                    _this_1.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_8__["connect"](_this_1.backurl);
                    _this_1.checkSocketIoConnect(_this_1.backurl, 5000).then(function () {
                        // console.log('succeed');
                    }, function (reason) {
                        console.log('failure', reason);
                    });
                    _this_1.Emitsocket('join', datas);
                    _this_1.Emitsocket('welcomes', datas);
                    _this_1.Emitsocket('joined', datas);
                    if (_this_1.user_id) {
                        var datas1 = { "userid": _this_1.user_id, "pairid": _this_1.pair_id, "fromcurn": _this_1.PairDetails.fromCurrency._id, "tocurn": _this_1.PairDetails.toCurrency._id };
                        _this_1.Emitsocket('userEmit', datas1);
                    }
                }
            });
        });
    };
    TradeComponent.prototype.updatePairDetails = function (pairlists) {
        this.PairDet = [];
        this.showpair = [];
        var j = 1;
        if (pairlists.length > 0) {
            var z = 0;
            var pushData = [];
            for (var i = 0; i < pairlists.length; i++) {
                if (typeof pairlists[i] != 'undefined' && typeof pairlists[i] != undefined) {
                    if (pairlists[i].currency == this.pair_to) {
                        for (var k = 0; k < pairlists[i].pairs.length; k++) {
                            var pairsDetail = (pairlists[i].pairs[k].fromCurrency.currencySymbol + '/' + pairlists[i].pairs[k].toCurrency.currencySymbol).toLowerCase();
                            if (this.searchkeyword == '' || pairsDetail.includes(this.searchkeyword) == true) {
                                var data = {
                                    'buyOrders': pairlists[i].pairs[k].buyOrders,
                                    'calculate_market_price': pairlists[i].pairs[k].calculate_market_price,
                                    'change': pairlists[i].pairs[k].change,
                                    'fee': pairlists[i].pairs[k].fee,
                                    'feeType': pairlists[i].pairs[k].feeType,
                                    'fromCurrency': pairlists[i].pairs[k].fromCurrency,
                                    'high': pairlists[i].pairs[k].high,
                                    'low': pairlists[i].pairs[k].low,
                                    'makerFee': pairlists[i].pairs[k].makerFee,
                                    'marketPrice': pairlists[i].pairs[k].marketPrice,
                                    'minTrade': pairlists[i].pairs[k].minTrade,
                                    'option': pairlists[i].pairs[k].option,
                                    'pair': pairlists[i].pairs[k].pair,
                                    'price': pairlists[i].pairs[k].price,
                                    'percentage': pairlists[i].pairs[k].percentage,
                                    'percentage_amount': pairlists[i].pairs[k].percentage_amount,
                                    'sellOrders': pairlists[i].pairs[k].sellOrders,
                                    'status': pairlists[i].pairs[k].status,
                                    'takerFee': pairlists[i].pairs[k].takerFee,
                                    'toCurrency': pairlists[i].pairs[k].toCurrency,
                                    'tradeHistory': pairlists[i].pairs[k].tradeHistory,
                                    'usdprice': pairlists[i].pairs[k].usdprice,
                                    'volume': pairlists[i].pairs[k].volume,
                                    '_id': pairlists[i].pairs[k]._id,
                                };
                                // if(pairlists[i].pairs[k].fromCurrency.currencySymbol == this.pair_from){
                                //   pushData[0] = data
                                // }
                                // else{
                                pushData[z] = data;
                                z++;
                                //}
                            }
                        }
                        var final_push = {
                            'currency': pairlists[i].currency,
                            'pairs': pushData
                        };
                        this.PairDet[0] = final_push;
                        // this.PairDet[0] = pairlists[i];
                    }
                    else {
                        this.PairDet[j] = pairlists[i];
                        j++;
                    }
                }
            }
            //console.log('pushData',pushData)
            this.showpair = pushData;
        }
    };
    TradeComponent.prototype.checkSocketIoConnect = function (url, timeout) {
        return new Promise(function (resolve, reject) {
            var errAlready = false;
            timeout = timeout || 5000;
            var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_8__(url, { reconnection: false, timeout: timeout });
            // success
            socket.on("connect", function () {
                clearTimeout(timer);
                resolve();
                socket.close();
            });
            // set our own timeout in case the socket ends some other way than what we are listening for
            var timer = setTimeout(function () {
                timer = null;
                error("local timeout");
            }, timeout);
            // common error handler
            function error(data) {
                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                }
                if (!errAlready) {
                    errAlready = true;
                    reject(data);
                    socket.disconnect();
                }
            }
            // errors
            socket.on("connect_error", error);
            socket.on("connect_timeout", error);
            socket.on("error", error);
            socket.on("disconnect", error);
        });
    };
    TradeComponent.prototype.updateUserHistory = function () {
        this.usersHistory = [];
        var j = 0;
        for (var i = 0; i < this.userTradeHistory.length; i++) {
            if (this.user_id == this.userTradeHistory[i].buyerUserid) {
                var object = { datetime: this.userTradeHistory[i].datetime, type: 'Buy', filledAmount: this.userTradeHistory[i].filledAmount, tradePrice: this.userTradeHistory[i].tradePrice, fee: this.userTradeHistory[i].buyFee };
                this.usersHistory[j] = object;
                j++;
            }
            if (this.user_id == this.userTradeHistory[i].sellerUserid) {
                var object = { datetime: this.userTradeHistory[i].datetime, type: 'Sell', filledAmount: this.userTradeHistory[i].filledAmount, tradePrice: this.userTradeHistory[i].tradePrice, fee: this.userTradeHistory[i].sellFee };
                this.usersHistory[j] = object;
                j++;
            }
        }
    };
    TradeComponent.prototype.rounds = function (n) {
        n = n.toString();
        n = n.slice(0, (n.indexOf(".")) + 9);
        return n;
    };
    TradeComponent.prototype.rounds1 = function (n) {
        n = n.toString();
        n = n.slice(0, (n.indexOf(".")) + 3);
        return n;
    };
    TradeComponent.prototype.roundsof = function (n, decimal) {
        n = n.toString();
        n = n.slice(0, (n.indexOf(".")) + (decimal + 1));
        return n;
    };
    TradeComponent.prototype.capitalizeFirstLetter = function (str) {
        return str[0].toUpperCase() + str.slice(1);
    };
    TradeComponent.prototype.cancelOrder = function (orderId, keyCancel) {
        var _this_1 = this;
        this.styleExp = 'none';
        var order = { orderId: orderId, userId: this.user_id };
        this.showLoader = true;
        this.mainService.get_requestData('/trade/cancelOrder', order).subscribe(function (value) {
            _this_1.showLoader = false;
            if (!value.status) {
                _this_1.toastr.error(value.Msg, 'Oops!');
            }
            else {
                _this_1.activeOrder.splice(keyCancel, 1);
                _this_1.toastr.success(value.Msg, 'Success');
            }
            _this_1.styleExp = '';
        });
    };
    TradeComponent.prototype.calculateTotal = function (value, type, typeindex) {
        if (typeindex == 0) {
            this.TotDet[type] = 0;
        }
        this.TotDet[type] = this.TotDet[type] + value;
        // return this.rounds(value);
        return value.toFixed(8);
    };
    TradeComponent.prototype.change_type = function (TradeType, OrderType) {
        this.orderType[OrderType].type = TradeType;
        if (TradeType == "stop") {
            this.orderType[OrderType].pricetag = 'Stop Price';
        }
        else {
            this.orderType[OrderType].pricetag = 'Price';
        }
        this.calculation(TradeType, OrderType);
    };
    TradeComponent.prototype.placeOrder = function (placeAmount, placePrice, placeType, index) {
        var amt = 0;
        if (placeType == 'sell') {
            var selltab = document.getElementById('selltab');
            selltab.click();
            var sell_limittab = document.getElementById('sell_limittab');
            sell_limittab.click();
            for (var i = 0; i <= index; i++) {
                amt = amt + (this.buyOrders[i].Amount - this.buyOrders[i].filledAmount);
            }
        }
        else {
            var buytab = document.getElementById('buytab');
            buytab.click();
            var buy_limittab = document.getElementById('buy_limittab');
            buy_limittab.click();
            for (var i = 0; i <= index; i++) {
                amt = amt + (this.sellOrders[i].Amount - this.sellOrders[i].filledAmount);
            }
        }
        this.change_type('limit', placeType);
        var getAmount = placeType + "_amount";
        var getPrice = placeType + "_price";
        this.TradeDetails[getAmount] = (amt).toFixed(8);
        this.TradeDetails[getPrice] = placePrice;
        this.calculation('limit', placeType);
    };
    TradeComponent.prototype.calculation = function (TradeType, OrderType) {
        var getAmount = OrderType + "_amount";
        var getPrice = OrderType + "_price";
        var Orderamount = this.TradeDetails[getAmount];
        var Orderprice = this.TradeDetails[getPrice];
        var marketprice = +this.marketprice;
        var feeper = +this.feesper;
        var takerFees = +this.takerfee;
        var makerFees = +this.makerfee;
        if (TradeType == 'instant') {
            var placedPrice = +marketprice;
        }
        else {
            var placedPrice = +Orderprice;
        }
        if (OrderType == 'buy') {
            var tot = (parseFloat(Orderamount) * (placedPrice));
            if (this.feesper == 1) {
                var tak_fees = (((parseFloat(Orderamount) * (takerFees) / 100))).toFixed(this.FromDigit);
                var mak_fees = (((parseFloat(Orderamount) * (makerFees) / 100))).toFixed(this.FromDigit);
            }
            else {
                var tak_fees = (takerFees).toFixed(this.FromDigit);
                var mak_fees = (makerFees).toFixed(this.FromDigit);
            }
            var TotS = tot.toString();
            if (Orderamount != "" && Orderamount != 0 && !isNaN(Orderamount) && TotS.indexOf("e") == -1) {
                this.buy_total = +tot;
                this.buy_taker_fees = +tak_fees;
                this.buy_maker_fees = +mak_fees;
            }
            else {
                if (TotS.indexOf("e") > -1) {
                    this.toastr.error('Total is below the minimum trade amount', 'Error');
                    return false;
                }
                this.buy_total = +0;
                this.buy_taker_fees = +0;
                this.buy_maker_fees = +0;
            }
        }
        else {
            var tot = (parseFloat(Orderamount) * (placedPrice));
            if (this.feesper == 1) {
                var tak_fees = (((parseFloat(Orderamount) * (placedPrice) * (takerFees) / 100))).toFixed(this.ToDigit);
                var mak_fees = (((parseFloat(Orderamount) * (placedPrice) * (makerFees) / 100))).toFixed(this.ToDigit);
            }
            else {
                var tak_fees = (makerFees).toFixed(this.ToDigit);
                var mak_fees = (takerFees).toFixed(this.ToDigit);
            }
            var TotS = tot.toString();
            if (Orderamount != "" && Orderamount != 0 && !isNaN(Orderamount) && TotS.indexOf("e") == -1) {
                this.sell_total = +tot;
                this.sell_taker_fees = +tak_fees;
                this.sell_maker_fees = +mak_fees;
            }
            else {
                if (TotS.indexOf("e") > -1) {
                    this.toastr.error('Total is below the minimum trade amount', 'Error');
                    return false;
                }
                this.sell_total = +0;
                this.sell_taker_fees = +0;
                this.sell_maker_fees = +0;
            }
        }
    };
    TradeComponent.prototype.order_placed = function (TradeType, OrderType) {
        if (!this.user_id) {
            this.openLoginPopup();
            return false;
        }
        else {
            if (this.pair_to == 'BTC') {
                if (OrderType == 'buy' && this.basecoin != 'BTC') {
                    var button = document.getElementById('swap_btn');
                    button.click();
                    return false;
                }
                else if (OrderType == 'sell' && this.basecoin == 'BTC') {
                    var button = document.getElementById('swap_btn');
                    button.click();
                    return false;
                }
            }
            else {
                if (this.pair_to != localStorage.getItem('Basecoin')) {
                    var button = document.getElementById('swap_btn');
                    button.click();
                    return false;
                }
            }
        }
        var getAmount = OrderType + "_amount";
        var getPrice = OrderType + "_price";
        var Orderamount = this.TradeDetails[getAmount];
        var Orderprice = this.TradeDetails[getPrice];
        if (OrderType == 'buy') {
            var totget = this.buy_total;
        }
        else {
            var totget = this.sell_total;
        }
        if (TradeType != 'instant') {
            if (isNaN(Orderamount) || isNaN(totget)) {
                this.toastr.error('Please enter valid amount and price', 'Error');
                return false;
            }
            else if (Orderamount == "" || Orderamount <= 0 || totget <= 0) {
                this.toastr.error('Please enter valid amount and price', 'Error');
                return false;
            }
        }
        else {
            if (isNaN(Orderamount)) {
                this.toastr.error('Please enter valid amount');
                return false;
            }
            else if (Orderamount == "" || Orderamount <= 0) {
                this.toastr.error('Please enter valid amount and price', 'Error');
                return false;
            }
        }
        return this.order_confirm(TradeType, OrderType);
    };
    TradeComponent.prototype.order_confirm = function (TradeType, OrderType) {
        var marketprice = this.marketprice;
        var getAmount = OrderType + "_amount";
        var getPrice = OrderType + "_price";
        var Orderamount = this.TradeDetails[getAmount];
        var Orderprice = this.TradeDetails[getPrice];
        if (TradeType == "instant") {
            var getpriceval = marketprice;
        }
        else {
            var getpriceval = Orderprice;
            if (TradeType == 'stop') {
                var Priceval = Orderprice;
                if (OrderType == 'buy') {
                    if (parseFloat(Priceval) <= parseFloat(marketprice)) {
                        this.toastr.error('Please enter greater than current market price');
                        return false;
                    }
                }
                else {
                    if (parseFloat(Priceval) >= parseFloat(marketprice)) {
                        this.toastr.error('Please enter less than current market price');
                        return false;
                    }
                }
            }
        }
        var multiply = parseFloat(Orderamount) * parseFloat(getpriceval);
        if (multiply > 0) {
            var tot = multiply;
        }
        else {
            var tot = 0;
        }
        if ((tot) < (this.minTrade)) {
            this.toastr.error(("Total trade amount must be") + ' ' + parseFloat(this.minTrade));
            return false;
        }
        var mul = (tot).toFixed(8);
        if (OrderType == "buy") {
            var to_currency1 = this.rounds(this.tobal);
            if (parseFloat(mul) > parseFloat(to_currency1)) {
                this.toastr.error("Insufficient balance");
                return false;
            }
            else {
                return this.executeOrder(TradeType, OrderType);
            }
        }
        else {
            var from_currency1 = this.rounds(this.frombal);
            if (parseFloat(from_currency1) < parseFloat(Orderamount)) {
                this.toastr.error("Insufficient balance");
                return false;
            }
            else {
                return this.executeOrder(TradeType, OrderType);
            }
        }
    };
    TradeComponent.prototype.executeOrder = function (TradeType, OrderType) {
        var getAmount = OrderType + "_amount";
        var getPrice = OrderType + "_price";
        var Orderamount = this.TradeDetails[getAmount];
        var Orderprice = this.TradeDetails[getPrice];
        this.calculation(TradeType, OrderType);
        var takerFees = +this.takerfee;
        if (TradeType == 'instant') {
            var price = this.marketprice;
            if ((OrderType == 'buy' && this.PairDetails.sellOrders.length == 0) || (OrderType == 'sell' && this.PairDetails.buyOrders.length == 0)) {
                if (OrderType == 'buy') {
                    var OrderType1 = 'Sell';
                }
                else {
                    var OrderType1 = 'Buy';
                }
                this.toastr.error("No " + OrderType1 + " orders available!");
                return false;
            }
        }
        else {
            var price = Orderprice;
        }
        var data = {};
        if (OrderType == 'buy') {
            if (TradeType == 'instant') {
                this.buyinstantbtn = true;
            }
            else {
                this.buylimitbtn = true;
            }
        }
        else {
            if (TradeType == 'instant') {
                this.sellinstantbtn = true;
            }
            else {
                this.selllimitbtn = true;
            }
        }
        data.amount = parseFloat(Orderamount);
        data.price = parseFloat(price);
        data.pair = (this.pair_id);
        data.ordertype = TradeType;
        data.type = OrderType;
        data.user_id = (this.user_id);
        this.showLoader = true;
        this.createEmit = 1;
        this.Emitsocket('createOrder', data);
    };
    /*Static socket function*/
    TradeComponent.prototype.Emitsocket = function (name, content) {
        this.socket.emit(name, content);
    };
    TradeComponent.prototype.Triggersocket = function (key) {
        return this.mysocket
            .fromEvent(key)
            .map(function (data) { return data; });
    };
    TradeComponent.prototype.change_pair = function (pair) {
        this.router.navigate([this.urlcon + pair]);
        // staticModal.hide()
        var closetab = document.getElementById('close');
        closetab.click();
    };
    TradeComponent.prototype.assign_market_price = function (val, type) {
        this.TradeDetails[val] = this.marketprice.toFixed(8);
        if (type == 'buy' && this.TradeDetails.buy_amount) {
            var buytot = this.marketprice * this.TradeDetails.buy_amount;
            this.buy_total = +buytot.toFixed(8);
        }
        else if (type == 'sell' && this.TradeDetails.sell_amount) {
            var selltot = this.marketprice * this.TradeDetails.sell_amount;
            this.sell_total = +selltot.toFixed(8);
        }
        else {
            return true;
        }
    };
    TradeComponent.prototype.bid_price = function (val, type) {
        if (this.buyOrders.length != 0) {
            this.TradeDetails[val] = this.buyOrders[0]._id.toFixed(8);
            if (type == 'buy' && this.TradeDetails.buy_amount) {
                var buytot = this.buyOrders[0]._id * this.TradeDetails.buy_amount;
                this.buy_total = +buytot.toFixed(8);
            }
            else if (type == 'sell' && this.TradeDetails.sell_amount) {
                var selltot = this.buyOrders[0]._id * this.TradeDetails.sell_amount;
                this.sell_total = +selltot.toFixed(8);
            }
            else {
                return true;
            }
        }
        else {
            this.assign_market_price(val, type);
        }
    };
    TradeComponent.prototype.ask_price = function (val, type) {
        if (this.sellOrders.length != 0) {
            this.TradeDetails[val] = this.sellOrders[0]._id.toFixed(8);
            if (type == 'buy' && this.TradeDetails.buy_amount) {
                var buytot = this.sellOrders[0]._id * this.TradeDetails.buy_amount;
                this.buy_total = +buytot.toFixed(8);
            }
            else if (type == 'sell' && this.TradeDetails.sell_amount) {
                var selltot = this.sellOrders[0]._id * this.TradeDetails.sell_amount;
                this.sell_total = +selltot.toFixed(8);
            }
            else {
                return true;
            }
        }
        else {
            this.assign_market_price(val, type);
        }
    };
    TradeComponent.prototype.buy_percentage = function (percentage) {
        if (this.user_id) {
            var takerFees = +this.takerfee;
            var makerFees = +this.makerfee;
            var total = ((+percentage) * +this.tobal) / 100;
            var amt = total / +this.marketprice;
            this.TradeDetails.buy_price = this.marketprice.toFixed(8);
            this.TradeDetails.buy_amount = amt.toFixed(8);
            this.buy_total = +total.toFixed(8);
            var tak_fees = (((parseFloat(this.TradeDetails.buy_amount) * (takerFees) / 100))).toFixed(this.FromDigit);
            var mak_fees = (((parseFloat(this.TradeDetails.buy_amount) * (makerFees) / 100))).toFixed(this.FromDigit);
            this.buy_taker_fees = +tak_fees;
            this.buy_maker_fees = +mak_fees;
        }
        else {
            return true;
        }
    };
    TradeComponent.prototype.sell_percentage = function (percentage) {
        if (this.user_id) {
            var takerFees = +this.takerfee;
            var makerFees = +this.makerfee;
            var total = ((+percentage) * +this.frombal) / 100;
            var tot = total * this.marketprice;
            this.TradeDetails.sell_price = this.marketprice.toFixed(8);
            this.TradeDetails.sell_amount = total.toFixed(8);
            this.sell_total = +tot.toFixed(8);
            var tak_fees = (((parseFloat(this.TradeDetails.sell_amount) * (this.TradeDetails.sell_price) * (takerFees) / 100))).toFixed(this.ToDigit);
            var mak_fees = (((parseFloat(this.TradeDetails.sell_amount) * (this.TradeDetails.sell_price) * (makerFees) / 100))).toFixed(this.ToDigit);
            this.sell_taker_fees = +tak_fees;
            this.sell_maker_fees = +mak_fees;
        }
        else {
            return true;
        }
    };
    TradeComponent.prototype.findindex = function (data) {
        for (var i = 0; i < this.PairDet.length; i++) {
            if (this.PairDet[i].currency == data) {
                this.PairDet = this.array_move(this.PairDet, i, 0);
            }
        }
    };
    TradeComponent.prototype.array_move = function (arr, old_index, new_index) {
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return arr; // for testing
    };
    ;
    TradeComponent.prototype.logoutuser_swap = function () {
        localStorage.removeItem('address');
        localStorage.removeItem('original_address');
        localStorage.removeItem('Basecoin');
        localStorage.removeItem('addresstype');
        localStorage.removeItem('derivationPath');
        this.openLoginPopup();
    };
    TradeComponent.prototype.logoutuser = function () {
        localStorage.removeItem('address');
        localStorage.removeItem('original_address');
        localStorage.removeItem('Basecoin');
        localStorage.removeItem('addresstype');
        localStorage.removeItem('derivationPath');
        // var button2=document.getElementById('cls_mdl');
        // button2.click();
        // this.router.navigate(['/']);
    };
    TradeComponent.prototype.routeto = function (link, id) {
        var element1 = document.getElementById(this.pair_to.toString());
        // element1.classList.remove("gradient-btn");
        // element1.classList.add("gradient-btn-border");
        var element4 = document.getElementById(id);
        //element4.className = element4.className.replace(/\bgradient-btn-border\b/g, "gradient-btn");     
        this.router.navigate([link]);
    };
    TradeComponent.prototype.openLoginPopup = function () {
        var button = document.getElementById('wallet_btn');
        button.click();
        return false;
    };
    //   openFullscreen() {
    //   // Use this.divRef.nativeElement here to request fullscreen
    //   const elem = this.divRef.nativeElement;
    //   if (elem.requestFullscreen) {
    //     elem.requestFullscreen();
    //   } else if (elem.msRequestFullscreen) {
    //     elem.msRequestFullscreen();
    //   } else if (elem.mozRequestFullScreen) {
    //     elem.mozRequestFullScreen();
    //   } else if (elem.webkitRequestFullscreen) {
    //     elem.webkitRequestFullscreen();
    //   }
    // }
    TradeComponent.prototype.openFullscreen = function () {
        this.exitFullScreen = true;
        this.openFullScreen = false;
        var element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        }
        else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
        else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
        else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    TradeComponent.prototype.exitFullscreen = function () {
        this.openFullScreen = true;
        this.exitFullScreen = false;
        var docWithBrowsersExitFunctions = document;
        if (docWithBrowsersExitFunctions.exitFullscreen) {
            docWithBrowsersExitFunctions.exitFullscreen();
        }
        else if (docWithBrowsersExitFunctions.webkitExitFullscreen) {
            docWithBrowsersExitFunctions.webkitExitFullscreen();
        }
        else if (docWithBrowsersExitFunctions.mozCancelFullScreen) {
            docWithBrowsersExitFunctions.mozCancelFullScreen();
        }
        else if (docWithBrowsersExitFunctions.msExitFullscreen) {
            docWithBrowsersExitFunctions.msExitFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    return TradeComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");









var ApiService = /** @class */ (function () {
    function ApiService(http, location, router) {
        this.http = http;
        this.location = location;
        this.router = router;
        this.spinners = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.loggedin = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.serviceHost = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
    }
    ApiService.prototype.get_pairs = function () {
        return this.http.get(this.baseUrl + '/trade/PairsGet');
    };
    ApiService.prototype.get_USDValues = function () {
        return this.http.get(this.baseUrl + '/getcurrency_usd');
    };
    ApiService.prototype.get_news = function () {
        return this.http.get(this.baseUrl + '/news/getnews');
    };
    ApiService.prototype.get_features = function () {
        return this.http.get(this.baseUrl + '/feature/getfaqlistcms');
    };
    ApiService.prototype.get_cms_home = function () {
        return this.http.get(this.baseUrl + '/cms/getcms_home');
    };
    ApiService.prototype.get_cms_fee = function () {
        return this.http.get(this.baseUrl + '/cms/getcms_fee');
    };
    ApiService.prototype.get_sitesettings = function () {
        return this.http.get(this.baseUrl + '/sitesetting/getsettings');
    };
    ApiService.prototype.get_cms = function (data) {
        return this.http.post(this.baseUrl + '/cms/get_cms', data);
    };
    ApiService.prototype.loader = function (data) {
        this.spinners.next(data);
    };
    ApiService.prototype.walletLogin = function (data) {
        this.loggedin.next(data);
    };
    ApiService.prototype.get_news_page = function () {
        return this.http.get(this.baseUrl + '/news/getnewspage');
    };
    ApiService.prototype.get_faq = function () {
        return this.http.get(this.baseUrl + '/faq/getfaq');
    };
    ApiService.prototype.get_meta = function (data) {
        return this.http.post(this.baseUrl + '/metacontent/getmeta', data);
    };
    ApiService.prototype.add_contact = function (data) {
        return this.http.post(this.baseUrl + '/contactus/add_contact', data);
    };
    ApiService.prototype.get_funds = function (data) {
        return this.http.post(this.baseUrl + '/trade/getCurrency', data);
    };
    ApiService.prototype.get_contract = function () {
        return this.http.post(this.baseUrl + '/trade/getContract', {});
    };
    ApiService.prototype.withdraw_request = function (data) {
        return this.http.post(this.baseUrl + '/user/withdrawrequest', data);
    };
    ApiService.prototype.btc_withdraw = function (data) {
        return this.http.post(this.baseUrl + '/BdAMx4fdex/btcwithdraw', data);
    };
    ApiService.prototype.admin_getbalance = function (data) {
        return this.http.post(this.baseUrl + '/admin/getbalance', data);
    };
    ApiService.prototype.user_deposit = function (data) {
        return this.http.post(this.baseUrl + '/user/Depositsdet', data);
    };
    ApiService.prototype.send_otp = function (data) {
        return this.http.post(this.baseUrl + '/RegOTPSend', data);
    };
    ApiService.prototype.login_site = function (data) {
        return this.http.post(this.baseUrl + '/logintosite', data);
    };
    ApiService.prototype.get_requestData = function (url, data) {
        return this.http.post(this.baseUrl + url, data);
    };
    ApiService.prototype.get_Data = function (url) {
        return this.http.get(this.baseUrl + url);
    };
    ApiService.prototype.get_externalurlData = function (url) {
        return this.http.get(url);
    };
    ApiService.prototype.login_send = function (data) {
        return this.http.post(this.baseUrl + '/LogOTPSend', data);
    };
    ApiService.prototype.register_btc = function (data) {
        return this.http.post(this.baseUrl + '/register', data);
    };
    ApiService.prototype.get_activeOrder = function (data) {
        return this.http.post(this.baseUrl + '/trade/get_activeorder', data);
    };
    ApiService.prototype.get_orderHistry = function (data) {
        return this.http.post(this.baseUrl + '/trade/get_history', data);
    };
    ApiService.prototype.deposit_hist = function (data) {
        return this.http.post(this.baseUrl + '/trade/get_deposit', data);
    };
    ApiService.prototype.withdraw_hist = function (data) {
        return this.http.post(this.baseUrl + '/trade/get_withdraw', data);
    };
    ApiService.prototype.get_chartData = function (data) {
        return this.http.post(this.baseUrl + '/get_chartdata', data);
    };
    ApiService.prototype.get_all_currencies = function () {
        return this.http.get(this.baseUrl + '/currencyDetails/currencyget');
    };
    ApiService.prototype.historyBack = function () {
        if (window.history.length > 1) {
            this.location.back();
        }
        else {
            this.router.navigate(['/home']);
        }
    };
    ApiService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_5__["defineInjectable"]({ factory: function ApiService_Factory() { return new ApiService(_angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); }, token: ApiService, providedIn: "root" });
    return ApiService;
}());



/***/ }),

/***/ "./src/assets/charting_library/charting_library.min.js":
/*!*************************************************************!*\
  !*** ./src/assets/charting_library/charting_library.min.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):undefined}(this,function(t){"use strict";function e(t,o){var i=n({},t);for(var s in o)"object"!=typeof t[s]||null===t[s]||Array.isArray(t[s])?void 0!==o[s]&&(i[s]=o[s]):i[s]=e(t[s],o[s]);return i}function o(){return"1.12 (internal id 7580da73 @ 2018-05-14 05:13:04.428607)"}function i(t){window.addEventListener("DOMContentLoaded",t,!1)}var n=Object.assign||function(t){for(var e,o=arguments,i=1,n=arguments.length;i<n;i++){e=o[i];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s])}return t},s={mobile:{disabled_features:["left_toolbar","header_widget","timeframes_toolbar","edit_buttons_in_legend","context_menus","control_bar","border_around_the_chart"],enabled_features:[]}},r={width:800,height:500,symbol:"AA",interval:"D",timezone:"UTC",container_id:"",library_path:"",locale:"en",widgetbar:{details:!1,watchlist:!1,watchlist_settings:{default_symbols:[]}},overrides:{"mainSeriesProperties.showCountdown":!1},studies_overrides:{},brokerConfig:{configFlags:{}},fullscreen:!1,autosize:!1,disabled_features:[],enabled_features:[],debug:!1,logo:{},time_frames:[{text:"5y",resolution:"W"},{text:"1y",resolution:"W"},{text:"6m",resolution:"120"},{text:"3m",resolution:"60"},{text:"1m",resolution:"30"},{text:"5d",resolution:"5"},{text:"1d",resolution:"1"}],client_id:"0",user_id:"0",charts_storage_api_version:"1.0",favorites:{intervals:[],chartTypes:[]}},a=function(){function t(t){if(this._id="tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1),this._ready=!1,this._readyHandlers=[],this._onWindowResize=this._autoResizeChart.bind(this),!t.datafeed)throw new Error("Datafeed is not defined");if(this._options=e(r,t),t.preset){var o=s[t.preset];o?(void 0!==this._options.disabled_features?this._options.disabled_features=this._options.disabled_features.concat(o.disabled_features):this._options.disabled_features=o.disabled_features,void 0!==this._options.enabled_features?this._options.enabled_features=this._options.enabled_features.concat(o.enabled_features):this._options.enabled_features=o.enabled_features):console.warn("Unknown preset: `"+t.preset+"`")}this._create()}return t.prototype.onChartReady=function(t){this._ready?t.call(this):this._readyHandlers.push(t)},t.prototype.onGrayedObjectClicked=function(t){this._innerAPI().onGrayedObjectClicked(t)},t.prototype.onShortcut=function(t,e){this._innerWindow().createShortcutAction(t,e)},t.prototype.subscribe=function(t,e){this._innerAPI().subscribe(t,e)},t.prototype.unsubscribe=function(t,e){this._innerAPI().unsubscribe(t,e)},t.prototype.chart=function(t){return this._innerAPI().chart(t)},t.prototype.setLanguage=function(t){this.remove(),this._options.locale=t,this._create()},t.prototype.setSymbol=function(t,e,o){this._innerAPI().changeSymbol(t,e+"",o)},t.prototype.remove=function(){window.removeEventListener("resize",this._onWindowResize),this._readyHandlers.splice(0,this._readyHandlers.length),delete window[this._id];var t=this._getIFrameElement();t.contentWindow.destroyChart(),t.parentNode&&t.parentNode.removeChild(t)},t.prototype.closePopupsAndDialogs=function(){this._innerAPI().closePopupsAndDialogs()},t.prototype.selectLineTool=function(t){this._innerAPI().selectLineTool(t)},t.prototype.selectedLineTool=function(){return this._innerAPI().selectedLineTool()},t.prototype.save=function(t){this._innerAPI().saveChart(t)},t.prototype.load=function(t,e){this._innerAPI().loadChart({json:t,extendedData:e})},t.prototype.getSavedCharts=function(t){this._innerAPI().getSavedCharts(t)},t.prototype.loadChartFromServer=function(t){this._innerAPI().loadChartFromServer(t)},t.prototype.saveChartToServer=function(t,e,o,i){this._innerAPI().saveChartToServer(t,e,o,i)},t.prototype.removeChartFromServer=function(t,e){this._innerAPI().removeChartFromServer(t,e)},t.prototype.onContextMenu=function(t){this._innerAPI().onContextMenu(t)},t.prototype.createButton=function(t){return this._innerWindow().createButton(t)},t.prototype.showNoticeDialog=function(t){this._innerAPI().showNoticeDialog(t)},t.prototype.showConfirmDialog=function(t){this._innerAPI().showConfirmDialog(t)},t.prototype.showLoadChartDialog=function(){this._innerAPI().showLoadChartDialog()},t.prototype.showSaveAsChartDialog=function(){this._innerAPI().showSaveAsChartDialog()},t.prototype.symbolInterval=function(){return this._innerAPI().getSymbolInterval()},t.prototype.mainSeriesPriceFormatter=function(){return this._innerAPI().mainSeriesPriceFormatter()},t.prototype.getIntervals=function(){return this._innerAPI().getIntervals()},t.prototype.getStudiesList=function(){return this._innerAPI().getStudiesList()},t.prototype.addCustomCSSFile=function(t){this._innerWindow().addCustomCSSFile(t)},t.prototype.applyOverrides=function(t){this._options=e(this._options,{overrides:t}),this._innerWindow().applyOverrides(t)},t.prototype.applyStudiesOverrides=function(t){this._innerWindow().applyStudiesOverrides(t)},t.prototype.watchList=function(){return this._innerAPI().watchlist()},t.prototype.activeChart=function(){return this._innerAPI().activeChart()},t.prototype.chartsCount=function(){return this._innerAPI().chartsCount()},t.prototype.layout=function(){return this._innerAPI().layout()},t.prototype.setLayout=function(t){this._innerAPI().setLayout(t)},t.prototype._getIFrameElement=function(){var t=document.getElementById(this._id);if(null===t)throw new Error("There is no such iframe");return t},t.prototype._innerAPI=function(){return this._getIFrameElement().contentWindow.tradingViewApi},t.prototype._innerWindow=function(){return this._getIFrameElement().contentWindow},t.prototype._autoResizeChart=function(){this._options.fullscreen&&(this._getIFrameElement().style.height=window.innerHeight+"px")},t.prototype._create=function(){var t=this,e=this._render(),o=document.getElementById(this._options.container_id);if(null===o)throw new Error("There is no such element - #"+this._options.container_id);o.innerHTML=e;var i=this._getIFrameElement();(this._options.autosize||this._options.fullscreen)&&(i.style.width="100%",this._options.fullscreen||(i.style.height="100%")),window.addEventListener("resize",this._onWindowResize),this._onWindowResize();var n=function(){i.removeEventListener("load",n,!1),i.contentWindow.widgetReady(function(){t._ready=!0;for(var e=0,o=t._readyHandlers;e<o.length;e++){o[e].call(t)}i.contentWindow.initializationFinished()})};i.addEventListener("load",n,!1)},t.prototype._render=function(){var t=window;t[this._id]={datafeed:this._options.datafeed,customFormatters:this._options.customFormatters,brokerFactory:this._options.brokerFactory,overrides:this._options.overrides,studiesOverrides:this._options.studies_overrides,disabledFeatures:this._options.disabled_features,enabledFeatures:this._options.enabled_features,brokerConfig:this._options.brokerConfig,restConfig:this._options.restConfig,favorites:this._options.favorites,logo:this._options.logo,numeric_formatting:this._options.numeric_formatting,rss_news_feed:this._options.rss_news_feed,newsProvider:this._options.news_provider,loadLastChart:this._options.load_last_chart,saveLoadAdapter:this._options.save_load_adapter,loading_screen:this._options.loading_screen,settingsAdapter:this._options.settings_adapter},this._options.saved_data&&(t[this._id].chartContent={json:this._options.saved_data});var e=(this._options.library_path||"")+"static/tv-chart.7580da73a91e1354cb09.html#localserver=1&symbol="+encodeURIComponent(this._options.symbol)+"&interval="+encodeURIComponent(this._options.interval)+(this._options.timeframe?"&timeframe="+encodeURIComponent(this._options.timeframe):"")+(this._options.toolbar_bg?"&toolbarbg="+this._options.toolbar_bg.replace("#",""):"")+(this._options.studies_access?"&studiesAccess="+encodeURIComponent(JSON.stringify(this._options.studies_access)):"")+"&widgetbar="+encodeURIComponent(JSON.stringify(this._options.widgetbar))+(this._options.drawings_access?"&drawingsAccess="+encodeURIComponent(JSON.stringify(this._options.drawings_access)):"")+"&timeFrames="+encodeURIComponent(JSON.stringify(this._options.time_frames))+"&locale="+encodeURIComponent(this._options.locale)+"&uid="+encodeURIComponent(this._id)+"&clientId="+encodeURIComponent(String(this._options.client_id))+"&userId="+encodeURIComponent(String(this._options.user_id))+(this._options.charts_storage_url?"&chartsStorageUrl="+encodeURIComponent(this._options.charts_storage_url):"")+(this._options.charts_storage_api_version?"&chartsStorageVer="+encodeURIComponent(this._options.charts_storage_api_version):"")+(this._options.indicators_file_name?"&indicatorsFile="+encodeURIComponent(this._options.indicators_file_name):"")+(this._options.custom_css_url?"&customCSS="+encodeURIComponent(this._options.custom_css_url):"")+(this._options.auto_save_delay?"&autoSaveDelay="+encodeURIComponent(String(this._options.auto_save_delay)):"")+"&debug="+this._options.debug+(this._options.snapshot_url?"&snapshotUrl="+encodeURIComponent(this._options.snapshot_url):"")+(this._options.timezone?"&timezone="+encodeURIComponent(this._options.timezone):"")+(this._options.study_count_limit?"&studyCountLimit="+encodeURIComponent(String(this._options.study_count_limit)):"")+(this._options.symbol_search_request_delay?"&ssreqdelay="+encodeURIComponent(String(this._options.symbol_search_request_delay)):"");return'<iframe id="'+this._id+'" name="'+this._id+'"  src="'+e+'"'+(this._options.autosize||this._options.fullscreen?"":' width="'+this._options.width+'" height="'+this._options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen style="display:block;"></iframe>'},t}(),d=a;window.TradingView=window.TradingView||{},window.TradingView.version=o,t.version=o,t.onready=i,t.widget=d,Object.defineProperty(t,"__esModule",{value:!0})});


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
var environment = {
    production: false,
    //apiUrl:'http://bdamx_revampback.osiztechnologies.in:2095',
    //apiUrl:'https://bdamx_revampback.osiztechnologies.in:2096',
    // apiUrl:'http://192.168.4.75:2095',
    apiUrl: 'http://bdamx_revampback.osiztechnologies.in:2095',
    // apiUrl:'http://192.168.4.12:2095',
    Ether_details: "https://api-ropsten.etherscan.io",
    Ether_infuradetails: "https://ropsten.infura.io/v3/682d21aed8204bfe8370b50a93aed124",
    EOS_Details: {
        blockchain: 'eos',
        protocol: 'https',
        host: 'nodes.get-scatter.com',
        port: 443,
        chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
    },
    ether_order: "https://ropsten.etherscan.io/tx/",
    ETH_ENV: "ropsten"
};


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/devel-vijitha/revamp/mobile/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map