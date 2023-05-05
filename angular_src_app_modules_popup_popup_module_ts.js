"use strict";
(self["webpackChunkangular_chrome_extension"] = self["webpackChunkangular_chrome_extension"] || []).push([["angular_src_app_modules_popup_popup_module_ts"],{

/***/ 649:
/*!**********************************************************************!*\
  !*** ./angular/src/app/modules/popup/pages/popup/popup.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupComponent": () => (/* binding */ PopupComponent)
/* harmony export */ });
/* harmony import */ var C_dev_chrome_extension_ng_boom_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4223);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8611);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var src_app_providers_tab_id_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/tab-id.provider */ 3154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ 3319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);











function PopupComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function PopupComponent_small_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter valid email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PopupComponent_small_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please enter valid password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PopupComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function PopupComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
  }
}
class PopupComponent {
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  constructor(tabId, _auth, _router) {
    this.tabId = tabId;
    this._auth = _auth;
    this._router = _router;
    this.notLoading = true;
    this.jwthelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__.JwtHelperService();
    this.loginError = false;
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)])
    });
  }
  onClick() {
    var _this = this;
    return (0,C_dev_chrome_extension_ng_boom_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let source$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.bindCallback)(chrome.tabs.sendMessage.bind(_this, _this.tabId, 'request'))().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(msg => chrome.runtime.lastError ? 'The current page is protected by the browser, goto: https://www.google.nl and try again.' : msg));
      _this.message = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.lastValueFrom)(source$, {
        defaultValue: '...'
      });
    })();
  }
  onSubmit() {
    let login_model = {
      ...this.loginForm.value
    };
    console.log(login_model);
    if (!this.loginForm.invalid) {
      this.notLoading = false;
      let authFlow = this._auth.login(login_model);
      authFlow.subscribe({
        next: x => {
          this.notLoading = true;
          let userProfile = {
            token: x?.data?.token,
            userId: x?.data?.entity[0]?.id
          };
          this._auth.saveToLocalStorage(userProfile);
          this._auth.loadFromLocalStorage();
          this._router.navigate(['options']);
        },
        error: err => {
          console.log(err);
          this.loginError = true;
          this.errorMessage = err?.error?.message;
          this.notLoading = true;
        }
      });
    }
  }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) {
  return new (t || PopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_providers_tab_id_provider__WEBPACK_IMPORTED_MODULE_1__.TAB_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
};
PopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PopupComponent,
  selectors: [["app-popup"]],
  decls: 30,
  vars: 6,
  consts: [[1, "popup-wrapper"], [1, "login"], [1, "heading"], [1, "logo"], ["width", "120px", "src", "./assets/icons/logo.png"], [1, "mb-0"], ["class", "validation_error alert alert-danger", 4, "ngIf"], [1, "row"], [3, "formGroup", "ngSubmit"], ["loginFormId", "ngForm"], [1, "input-field", "col", "s12"], ["id", "email", "type", "email", "formControlName", "email", 1, "validate"], ["for", "email"], ["class", "err_msg", 4, "ngIf"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", 1, "validate"], ["type", "submit", "class", "btn btn-primary", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "validation_error", "alert", "alert-danger"], [1, "err_msg"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-primary", "btn-loading", 3, "disabled"]],
  template: function PopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Welcome");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Please login before your start...");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, PopupComponent_div_9_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7)(11, "form", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PopupComponent_Template_form_ngSubmit_11_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 7)(14, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, PopupComponent_small_18_Template, 2, 0, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 7)(20, "div", 10)(21, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, PopupComponent_small_24_Template, 2, 0, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 7)(26, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, PopupComponent_button_27_Template, 2, 0, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, PopupComponent_ng_template_28_Template, 2, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loginError);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.email && ctx.email.invalid && (ctx.email.touched || _r1.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.password && ctx.password.invalid && (ctx.password.touched || _r1.submitted));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.notLoading)("ngIfElse", _r5);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: [".row[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL3BvcHVwL3BhZ2VzL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNHLGlCQUFBO0FBRUg7O0FBQUE7RUFDSSxnQkFBQTtBQUdKIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4ubG9nb3tcclxuICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmhlYWRpbmcgaDN7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5404:
/*!***************************************************************!*\
  !*** ./angular/src/app/modules/popup/popup-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupRoutingModule": () => (/* binding */ PopupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_popup_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/popup/popup.component */ 649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  pathMatch: 'full',
  component: _pages_popup_popup_component__WEBPACK_IMPORTED_MODULE_0__.PopupComponent
}];
class PopupRoutingModule {}
PopupRoutingModule.ɵfac = function PopupRoutingModule_Factory(t) {
  return new (t || PopupRoutingModule)();
};
PopupRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PopupRoutingModule
});
PopupRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PopupRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7134:
/*!*******************************************************!*\
  !*** ./angular/src/app/modules/popup/popup.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupModule": () => (/* binding */ PopupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _pages_popup_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/popup/popup.component */ 649);
/* harmony import */ var _popup_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup-routing.module */ 5404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class PopupModule {}
PopupModule.ɵfac = function PopupModule_Factory(t) {
  return new (t || PopupModule)();
};
PopupModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: PopupModule
});
PopupModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _popup_routing_module__WEBPACK_IMPORTED_MODULE_1__.PopupRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PopupModule, {
    declarations: [_pages_popup_popup_component__WEBPACK_IMPORTED_MODULE_0__.PopupComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _popup_routing_module__WEBPACK_IMPORTED_MODULE_1__.PopupRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
  });
})();

/***/ }),

/***/ 7367:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/AsyncSubject.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncSubject": () => (/* binding */ AsyncSubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 228);

class AsyncSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor() {
    super(...arguments);
    this._value = null;
    this._hasValue = false;
    this._isComplete = false;
  }
  _checkFinalizedStatuses(subscriber) {
    const {
      hasError,
      _hasValue,
      _value,
      thrownError,
      isStopped,
      _isComplete
    } = this;
    if (hasError) {
      subscriber.error(thrownError);
    } else if (isStopped || _isComplete) {
      _hasValue && subscriber.next(_value);
      subscriber.complete();
    }
  }
  next(value) {
    if (!this.isStopped) {
      this._value = value;
      this._hasValue = true;
    }
  }
  complete() {
    const {
      _hasValue,
      _value,
      _isComplete
    } = this;
    if (!_isComplete) {
      this._isComplete = true;
      _hasValue && super.next(_value);
      super.complete();
    }
  }
}

/***/ }),

/***/ 8611:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/lastValueFrom.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lastValueFrom": () => (/* binding */ lastValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/EmptyError */ 4423);

function lastValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    let _hasValue = false;
    let _value;
    source.subscribe({
      next: value => {
        _value = value;
        _hasValue = true;
      },
      error: reject,
      complete: () => {
        if (_hasValue) {
          resolve(_value);
        } else if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__.EmptyError());
        }
      }
    });
  });
}

/***/ }),

/***/ 4223:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/bindCallback.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindCallback": () => (/* binding */ bindCallback)
/* harmony export */ });
/* harmony import */ var _bindCallbackInternals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bindCallbackInternals */ 8419);

function bindCallback(callbackFunc, resultSelector, scheduler) {
  return (0,_bindCallbackInternals__WEBPACK_IMPORTED_MODULE_0__.bindCallbackInternals)(false, callbackFunc, resultSelector, scheduler);
}

/***/ }),

/***/ 8419:
/*!*********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/bindCallbackInternals.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindCallbackInternals": () => (/* binding */ bindCallbackInternals)
/* harmony export */ });
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ 9867);
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Observable */ 833);
/* harmony import */ var _operators_subscribeOn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/subscribeOn */ 4317);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 8385);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../operators/observeOn */ 8728);
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AsyncSubject */ 7367);






function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
  if (resultSelector) {
    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__.isScheduler)(resultSelector)) {
      scheduler = resultSelector;
    } else {
      return function (...args) {
        return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.mapOneOrManyArgs)(resultSelector));
      };
    }
  }
  if (scheduler) {
    return function (...args) {
      return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe((0,_operators_subscribeOn__WEBPACK_IMPORTED_MODULE_2__.subscribeOn)(scheduler), (0,_operators_observeOn__WEBPACK_IMPORTED_MODULE_3__.observeOn)(scheduler));
    };
  }
  return function (...args) {
    const subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_4__.AsyncSubject();
    let uninitialized = true;
    return new _Observable__WEBPACK_IMPORTED_MODULE_5__.Observable(subscriber => {
      const subs = subject.subscribe(subscriber);
      if (uninitialized) {
        uninitialized = false;
        let isAsync = false;
        let isComplete = false;
        callbackFunc.apply(this, [...args, (...results) => {
          if (isNodeStyle) {
            const err = results.shift();
            if (err != null) {
              subject.error(err);
              return;
            }
          }
          subject.next(1 < results.length ? results : results[0]);
          isComplete = true;
          if (isAsync) {
            subject.complete();
          }
        }]);
        if (isComplete) {
          subject.complete();
        }
        isAsync = true;
      }
      return subs;
    });
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9zcmNfYXBwX21vZHVsZXNfcG9wdXBfcG9wdXBfbW9kdWxlX3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDb0U7QUFFZDtBQUNIO0FBQ2Q7QUFFc0I7Ozs7Ozs7O0lDRXZEUSw0REFBQUEsY0FBb0U7SUFDbEVBLG9EQUFBQSxHQUNGO0lBQUFBLDBEQUFBQSxFQUFNOzs7O0lBREpBLHVEQUFBQSxHQUNGO0lBREVBLGdFQUFBQSwrQkFDRjs7Ozs7SUFPUUEsNERBQUFBLGdCQU9HO0lBQ0NBLG9EQUFBQSxrQ0FDRjtJQUFBQSwwREFBQUEsRUFBUTs7Ozs7SUFRVkEsNERBQUFBLGdCQU9HO0lBQ0NBLG9EQUFBQSxxQ0FDRjtJQUFBQSwwREFBQUEsRUFBUTs7Ozs7SUFPVkEsNERBQUFBLGlCQUlEO0lBQ0NBLG9EQUFBQSxlQUNGO0lBQUFBLDBEQUFBQSxFQUFTOzs7OztJQUVQQSw0REFBQUEsaUJBSUM7SUFDQUEsb0RBQUFBLG1CQUNEO0lBQUFBLDBEQUFBQSxFQUFTOzs7SUFKUEEsd0RBQUFBLGtCQUFpQjs7O0FEN0N6QixNQUFPQyxjQUFjO0VBaUJ6QixJQUFJQyxLQUFLO0lBQ1AsT0FBTyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztFQUNwQztFQUNBLElBQUlDLFFBQVE7SUFDVixPQUFPLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQ3ZDO0VBRUFFLFlBQzJCQyxLQUFhLEVBQzlCQyxLQUFrQixFQUNsQkMsT0FBZTtJQUZFLFVBQUssR0FBTEYsS0FBSztJQUN0QixVQUFLLEdBQUxDLEtBQUs7SUFDTCxZQUFPLEdBQVBDLE9BQU87SUF6QmpCLGVBQVUsR0FBWSxJQUFJO0lBRTFCLGNBQVMsR0FBRyxJQUFJZCxnRUFBZ0IsRUFBRTtJQUdsQyxlQUFVLEdBQVksS0FBSztJQUUzQixjQUFTLEdBQUcsSUFBSUYscURBQVMsQ0FBQztNQUN4QlMsS0FBSyxF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QVUsQ0FBQztNQUMxQyxJQUFJeUIsYUFBYSxFQUFFO1FBQ2ZBLGFBQWEsR0FBRyxLQUFLO1FBQ3JCLElBQUlFLE9BQU8sR0FBRyxLQUFLO1FBQ25CLElBQUlDLFVBQVUsR0FBRyxLQUFLO1FBQ3RCZixZQUFZLENBQUNVLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FDckIsR0FBR0QsSUFBSSxFQUNQLENBQUMsR0FBR08sT0FBTyxLQUFLO1VBQ1osSUFBSVIsV0FBVyxFQUFFO1lBQ2IsTUFBTXBELEdBQUcsR0FBRzRELE9BQU8sQ0FBQ0MsS0FBSyxFQUFFO1lBQzNCLElBQUk3RCxHQUFHLElBQUksSUFBSSxFQUFFO2NBQ2J1RCxPQUFPLENBQUN4RCxLQUFLLENBQUNDLEdBQUcsQ0FBQztjQUNsQjtZQUNKO1VBQ0o7VUFDQXVELE9BQU8sQ0FBQ25FLElBQUksQ0FBQyxDQUFDLEdBQUd3RSxPQUFPLENBQUNFLE1BQU0sR0FBR0YsT0FBTyxHQUFHQSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDdkRELFVBQVUsR0FBRyxJQUFJO1VBQ2pCLElBQUlELE9BQU8sRUFBRTtZQUNUSCxPQUFPLENBQUNwQixRQUFRLEVBQUU7VUFDdEI7UUFDSixDQUFDLENBQ0osQ0FBQztRQUNGLElBQUl3QixVQUFVLEVBQUU7VUFDWkosT0FBTyxDQUFDcEIsUUFBUSxFQUFFO1FBQ3RCO1FBQ0F1QixPQUFPLEdBQUcsSUFBSTtNQUNsQjtNQUNBLE9BQU9ELElBQUk7SUFDZixDQUFDLENBQUM7RUFDTixDQUFDO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmd1bGFyLWNocm9tZS1leHRlbnNpb24vLi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wb3B1cC9wYWdlcy9wb3B1cC9wb3B1cC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vYW5ndWxhci1jaHJvbWUtZXh0ZW5zaW9uLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvcG9wdXAvcGFnZXMvcG9wdXAvcG9wdXAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vYW5ndWxhci1jaHJvbWUtZXh0ZW5zaW9uLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvcG9wdXAvcG9wdXAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vYW5ndWxhci1jaHJvbWUtZXh0ZW5zaW9uLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvcG9wdXAvcG9wdXAubW9kdWxlLnRzIiwid2VicGFjazovL2FuZ3VsYXItY2hyb21lLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtL2ludGVybmFsL0FzeW5jU3ViamVjdC5qcyIsIndlYnBhY2s6Ly9hbmd1bGFyLWNocm9tZS1leHRlbnNpb24vLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbS9pbnRlcm5hbC9sYXN0VmFsdWVGcm9tLmpzIiwid2VicGFjazovL2FuZ3VsYXItY2hyb21lLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtL2ludGVybmFsL29ic2VydmFibGUvYmluZENhbGxiYWNrLmpzIiwid2VicGFjazovL2FuZ3VsYXItY2hyb21lLWV4dGVuc2lvbi8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtL2ludGVybmFsL29ic2VydmFibGUvYmluZENhbGxiYWNrSW50ZXJuYWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBKd3RIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGF1dGgwL2FuZ3VsYXItand0JztcbmltcG9ydCB7IGJpbmRDYWxsYmFjaywgbGFzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFRBQl9JRCB9IGZyb20gJ3NyYy9hcHAvcHJvdmlkZXJzL3RhYi1pZC5wcm92aWRlcic7XG5pbXBvcnQgeyBJVXNlciB9IGZyb20gJ3NyYy9hcHAvc2hhcmVkL2ludGVyZmFjZXMvSVVzZXIuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXBvcHVwJyxcbiAgdGVtcGxhdGVVcmw6ICdwb3B1cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydwb3B1cC5jb21wb25lbnQuc2NzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgUG9wdXBDb21wb25lbnQge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIG5vdExvYWRpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIGp3dGhlbHBlciA9IG5ldyBKd3RIZWxwZXJTZXJ2aWNlKCk7XG4gIGN1cnJlbnRVc2VyITogSVVzZXI7XG4gIGVycm9yTWVzc2FnZSE6IHN0cmluZztcbiAgbG9naW5FcnJvcjogQm9vbGVhbiA9IGZhbHNlO1xuXG4gIGxvZ2luRm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgIGVtYWlsOiBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLmVtYWlsXSksXG4gICAgcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbCgnJywgW1xuICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFxuICAgIF0pLFxuICB9KTtcblxuICBnZXQgZW1haWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9naW5Gb3JtLmdldCgnZW1haWwnKTtcbiAgfVxuICBnZXQgcGFzc3dvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9naW5Gb3JtLmdldCgncGFzc3dvcmQnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoVEFCX0lEKSByZWFkb25seSB0YWJJZDogbnVtYmVyLFxuICAgIHByaXZhdGUgX2F1dGg6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxuICAgICkge31cblxuICBhc3luYyBvbkNsaWNrKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBzb3VyY2UkOmFueSA9IGJpbmRDYWxsYmFjazxhbnksIGFueT4oY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UuYmluZCh0aGlzLCB0aGlzLnRhYklkLCAncmVxdWVzdCcpKSgpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKG1zZyA9PiBjaHJvbWUucnVudGltZS5sYXN0RXJyb3JcbiAgICAgICAgICA/ICdUaGUgY3VycmVudCBwYWdlIGlzIHByb3RlY3RlZCBieSB0aGUgYnJvd3NlciwgZ290bzogaHR0cHM6Ly93d3cuZ29vZ2xlLm5sIGFuZCB0cnkgYWdhaW4uJ1xuICAgICAgICAgIDogbXNnXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKHNvdXJjZSQsIHtkZWZhdWx0VmFsdWU6ICcuLi4nfSk7XG4gIH1cblxuICBvblN1Ym1pdCgpe1xuICAgIGxldCBsb2dpbl9tb2RlbCA9IHtcbiAgICAgIC4uLnRoaXMubG9naW5Gb3JtLnZhbHVlXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGxvZ2luX21vZGVsKTtcbiAgICBcbiAgICBpZiAoIXRoaXMubG9naW5Gb3JtLmludmFsaWQpIHtcbiAgICAgIHRoaXMubm90TG9hZGluZyA9IGZhbHNlO1xuICAgICAgbGV0IGF1dGhGbG93ID0gdGhpcy5fYXV0aC5sb2dpbihsb2dpbl9tb2RlbCk7XG4gICAgICBhdXRoRmxvdy5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAoeDogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5ub3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICBsZXQgdXNlclByb2ZpbGU6IElVc2VyID0ge1xuICAgICAgICAgICAgdG9rZW46IHg/LmRhdGE/LnRva2VuLFxuICAgICAgICAgICAgdXNlcklkOiB4Py5kYXRhPy5lbnRpdHlbMF0/LmlkLFxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9hdXRoLnNhdmVUb0xvY2FsU3RvcmFnZSh1c2VyUHJvZmlsZSk7XG4gICAgICAgICAgdGhpcy5fYXV0aC5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgIFxuICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ29wdGlvbnMnXSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgIHRoaXMubG9naW5FcnJvciA9IHRydWU7XG4gICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBlcnI/LmVycm9yPy5tZXNzYWdlO1xuICAgICAgICAgIHRoaXMubm90TG9hZGluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBcbn1cbiIsIjxkaXYgY2xhc3M9XCJwb3B1cC13cmFwcGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJsb2dpblwiPlxuICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkaW5nXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICA8aW1nIHdpZHRoPVwiMTIwcHhcIiBzcmM9XCIuL2Fzc2V0cy9pY29ucy9sb2dvLnBuZ1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMyBjbGFzcz1cIm1iLTBcIj5XZWxjb21lPC9oMz5cbiAgICAgIDxwPlBsZWFzZSBsb2dpbiBiZWZvcmUgeW91ciBzdGFydC4uLjwvcD5cbiAgICA8L2hlYWRlcj5cbiAgICA8ZGl2ICpuZ0lmPVwibG9naW5FcnJvclwiIGNsYXNzPVwidmFsaWRhdGlvbl9lcnJvciBhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgIHt7IGVycm9yTWVzc2FnZSB9fVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCIgW2Zvcm1Hcm91cF09XCJsb2dpbkZvcm1cIiAjbG9naW5Gb3JtSWQ9XCJuZ0Zvcm1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJlbWFpbFwiIGNsYXNzPVwidmFsaWRhdGVcIiBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICA8c21hbGxcbiAgICAgICAgICAgICAgICBjbGFzcz1cImVycl9tc2dcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICBlbWFpbCAmJlxuICAgICAgICAgICAgICAgICAgZW1haWwuaW52YWxpZCAmJlxuICAgICAgICAgICAgICAgICAgKGVtYWlsLnRvdWNoZWQgfHwgbG9naW5Gb3JtSWQuc3VibWl0dGVkKVxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgdmFsaWQgZW1haWwuXG4gICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3M9XCJ2YWxpZGF0ZVwiIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHNtYWxsXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlcnJfbXNnXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgcGFzc3dvcmQgJiZcbiAgICAgICAgICAgICAgICAgIHBhc3N3b3JkLmludmFsaWQgJiZcbiAgICAgICAgICAgICAgICAgIChwYXNzd29yZC50b3VjaGVkIHx8IGxvZ2luRm9ybUlkLnN1Ym1pdHRlZClcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIHZhbGlkIHBhc3N3b3JkLlxuICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAqbmdJZj1cIm5vdExvYWRpbmc7IGVsc2UgbG9hZGluZ1wiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI2xvYWRpbmc+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sb2FkaW5nXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICBMb2FkaW5nLi4uXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkNsaWNrKClcIj5DbGljayBtZSB0byB0ZXN0PC9idXR0b24+XG5cbjxwPjxzdHJvbmc+e3sgbWVzc2FnZSB9fTwvc3Ryb25nPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIC0tPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgIFxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBvcHVwQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wb3B1cC9wb3B1cC5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIHBhdGhNYXRjaDogJ2Z1bGwnLFxuICAgIGNvbXBvbmVudDogUG9wdXBDb21wb25lbnRcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgUG9wdXBSb3V0aW5nTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgUG9wdXBDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9wb3B1cC9wb3B1cC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBvcHVwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3BvcHVwLXJvdXRpbmcubW9kdWxlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1BvcHVwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUG9wdXBSb3V0aW5nTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFBvcHVwTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAnLi9TdWJqZWN0JztcbmV4cG9ydCBjbGFzcyBBc3luY1N1YmplY3QgZXh0ZW5kcyBTdWJqZWN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLl9oYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgfVxuICAgIF9jaGVja0ZpbmFsaXplZFN0YXR1c2VzKHN1YnNjcmliZXIpIHtcbiAgICAgICAgY29uc3QgeyBoYXNFcnJvciwgX2hhc1ZhbHVlLCBfdmFsdWUsIHRocm93bkVycm9yLCBpc1N0b3BwZWQsIF9pc0NvbXBsZXRlIH0gPSB0aGlzO1xuICAgICAgICBpZiAoaGFzRXJyb3IpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IodGhyb3duRXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU3RvcHBlZCB8fCBfaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgX2hhc1ZhbHVlICYmIHN1YnNjcmliZXIubmV4dChfdmFsdWUpO1xuICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5leHQodmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RvcHBlZCkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuX2hhc1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgY29uc3QgeyBfaGFzVmFsdWUsIF92YWx1ZSwgX2lzQ29tcGxldGUgfSA9IHRoaXM7XG4gICAgICAgIGlmICghX2lzQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgX2hhc1ZhbHVlICYmIHN1cGVyLm5leHQoX3ZhbHVlKTtcbiAgICAgICAgICAgIHN1cGVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbXB0eUVycm9yIH0gZnJvbSAnLi91dGlsL0VtcHR5RXJyb3InO1xuZXhwb3J0IGZ1bmN0aW9uIGxhc3RWYWx1ZUZyb20oc291cmNlLCBjb25maWcpIHtcbiAgICBjb25zdCBoYXNDb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgX2hhc1ZhbHVlID0gZmFsc2U7XG4gICAgICAgIGxldCBfdmFsdWU7XG4gICAgICAgIHNvdXJjZS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgbmV4dDogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgX2hhc1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogcmVqZWN0LFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoX2hhc1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaGFzQ29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29uZmlnLmRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVtcHR5RXJyb3IoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyBiaW5kQ2FsbGJhY2tJbnRlcm5hbHMgfSBmcm9tICcuL2JpbmRDYWxsYmFja0ludGVybmFscyc7XG5leHBvcnQgZnVuY3Rpb24gYmluZENhbGxiYWNrKGNhbGxiYWNrRnVuYywgcmVzdWx0U2VsZWN0b3IsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBiaW5kQ2FsbGJhY2tJbnRlcm5hbHMoZmFsc2UsIGNhbGxiYWNrRnVuYywgcmVzdWx0U2VsZWN0b3IsIHNjaGVkdWxlcik7XG59XG4iLCJpbXBvcnQgeyBpc1NjaGVkdWxlciB9IGZyb20gJy4uL3V0aWwvaXNTY2hlZHVsZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgc3Vic2NyaWJlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvc3Vic2NyaWJlT24nO1xuaW1wb3J0IHsgbWFwT25lT3JNYW55QXJncyB9IGZyb20gJy4uL3V0aWwvbWFwT25lT3JNYW55QXJncyc7XG5pbXBvcnQgeyBvYnNlcnZlT24gfSBmcm9tICcuLi9vcGVyYXRvcnMvb2JzZXJ2ZU9uJztcbmltcG9ydCB7IEFzeW5jU3ViamVjdCB9IGZyb20gJy4uL0FzeW5jU3ViamVjdCc7XG5leHBvcnQgZnVuY3Rpb24gYmluZENhbGxiYWNrSW50ZXJuYWxzKGlzTm9kZVN0eWxlLCBjYWxsYmFja0Z1bmMsIHJlc3VsdFNlbGVjdG9yLCBzY2hlZHVsZXIpIHtcbiAgICBpZiAocmVzdWx0U2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKGlzU2NoZWR1bGVyKHJlc3VsdFNlbGVjdG9yKSkge1xuICAgICAgICAgICAgc2NoZWR1bGVyID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmluZENhbGxiYWNrSW50ZXJuYWxzKGlzTm9kZVN0eWxlLCBjYWxsYmFja0Z1bmMsIHNjaGVkdWxlcilcbiAgICAgICAgICAgICAgICAgICAgLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgICAgICAgICAgICAgICAgIC5waXBlKG1hcE9uZU9yTWFueUFyZ3MocmVzdWx0U2VsZWN0b3IpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNjaGVkdWxlcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBiaW5kQ2FsbGJhY2tJbnRlcm5hbHMoaXNOb2RlU3R5bGUsIGNhbGxiYWNrRnVuYylcbiAgICAgICAgICAgICAgICAuYXBwbHkodGhpcywgYXJncylcbiAgICAgICAgICAgICAgICAucGlwZShzdWJzY3JpYmVPbihzY2hlZHVsZXIpLCBvYnNlcnZlT24oc2NoZWR1bGVyKSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBjb25zdCBzdWJqZWN0ID0gbmV3IEFzeW5jU3ViamVjdCgpO1xuICAgICAgICBsZXQgdW5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VicyA9IHN1YmplY3Quc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgaWYgKHVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgICB1bmluaXRpYWxpemVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IGlzQXN5bmMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrRnVuYy5hcHBseSh0aGlzLCBbXG4gICAgICAgICAgICAgICAgICAgIC4uLmFyZ3MsXG4gICAgICAgICAgICAgICAgICAgICguLi5yZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOb2RlU3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSByZXN1bHRzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3QubmV4dCgxIDwgcmVzdWx0cy5sZW5ndGggPyByZXN1bHRzIDogcmVzdWx0c1swXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0FzeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YmplY3QuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaXNBc3luYyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3VicztcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6WyJGb3JtQ29udHJvbCIsIkZvcm1Hcm91cCIsIlZhbGlkYXRvcnMiLCJKd3RIZWxwZXJTZXJ2aWNlIiwiYmluZENhbGxiYWNrIiwibGFzdFZhbHVlRnJvbSIsIm1hcCIsIlRBQl9JRCIsImkwIiwiUG9wdXBDb21wb25lbnQiLCJlbWFpbCIsImxvZ2luRm9ybSIsImdldCIsInBhc3N3b3JkIiwiY29uc3RydWN0b3IiLCJ0YWJJZCIsIl9hdXRoIiwiX3JvdXRlciIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwib25DbGljayIsInNvdXJjZSQiLCJjaHJvbWUiLCJ0YWJzIiwic2VuZE1lc3NhZ2UiLCJiaW5kIiwicGlwZSIsIm1zZyIsInJ1bnRpbWUiLCJsYXN0RXJyb3IiLCJtZXNzYWdlIiwiZGVmYXVsdFZhbHVlIiwib25TdWJtaXQiLCJsb2dpbl9tb2RlbCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImludmFsaWQiLCJub3RMb2FkaW5nIiwiYXV0aEZsb3ciLCJsb2dpbiIsInN1YnNjcmliZSIsIm5leHQiLCJ4IiwidXNlclByb2ZpbGUiLCJ0b2tlbiIsImRhdGEiLCJ1c2VySWQiLCJlbnRpdHkiLCJpZCIsInNhdmVUb0xvY2FsU3RvcmFnZSIsImxvYWRGcm9tTG9jYWxTdG9yYWdlIiwibmF2aWdhdGUiLCJlcnJvciIsImVyciIsImxvZ2luRXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJzZWxlY3RvcnMiLCJkZWNscyIsInZhcnMiLCJjb25zdHMiLCJ0ZW1wbGF0ZSIsImN0eCIsIlJvdXRlck1vZHVsZSIsInJvdXRlcyIsInBhdGgiLCJwYXRoTWF0Y2giLCJjb21wb25lbnQiLCJQb3B1cFJvdXRpbmdNb2R1bGUiLCJmb3JDaGlsZCIsImltcG9ydHMiLCJleHBvcnRzIiwiQ29tbW9uTW9kdWxlIiwiSHR0cENsaWVudE1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIlBvcHVwTW9kdWxlIiwiZGVjbGFyYXRpb25zIiwiU3ViamVjdCIsIkFzeW5jU3ViamVjdCIsImFyZ3VtZW50cyIsIl92YWx1ZSIsIl9oYXNWYWx1ZSIsIl9pc0NvbXBsZXRlIiwiX2NoZWNrRmluYWxpemVkU3RhdHVzZXMiLCJzdWJzY3JpYmVyIiwiaGFzRXJyb3IiLCJ0aHJvd25FcnJvciIsImlzU3RvcHBlZCIsImNvbXBsZXRlIiwiRW1wdHlFcnJvciIsInNvdXJjZSIsImNvbmZpZyIsImhhc0NvbmZpZyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYmluZENhbGxiYWNrSW50ZXJuYWxzIiwiY2FsbGJhY2tGdW5jIiwicmVzdWx0U2VsZWN0b3IiLCJzY2hlZHVsZXIiLCJpc1NjaGVkdWxlciIsIk9ic2VydmFibGUiLCJzdWJzY3JpYmVPbiIsIm1hcE9uZU9yTWFueUFyZ3MiLCJvYnNlcnZlT24iLCJpc05vZGVTdHlsZSIsImFyZ3MiLCJhcHBseSIsInN1YmplY3QiLCJ1bmluaXRpYWxpemVkIiwic3VicyIsImlzQXN5bmMiLCJpc0NvbXBsZXRlIiwicmVzdWx0cyIsInNoaWZ0IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==