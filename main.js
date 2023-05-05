"use strict";
(self["webpackChunkangular_chrome_extension"] = self["webpackChunkangular_chrome_extension"] || []).push([["main"],{

/***/ 7970:
/*!***********************************************!*\
  !*** ./angular/src/app/app-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.guard */ 7637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: 'popup',
  loadChildren: () => __webpack_require__.e(/*! import() */ "angular_src_app_modules_popup_popup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/popup/popup.module */ 7134)).then(m => m.PopupModule)
}, {
  path: 'tab',
  loadChildren: () => __webpack_require__.e(/*! import() */ "angular_src_app_modules_tab_tab_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/tab/tab.module */ 7138)).then(m => m.TabModule)
}, {
  path: 'options',
  loadChildren: () => __webpack_require__.e(/*! import() */ "angular_src_app_modules_options_options_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/options/options.module */ 6358)).then(m => m.OptionsModule),
  canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
    useHash: true
  }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6197:
/*!******************************************!*\
  !*** ./angular/src/app/app.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3300:
/*!***************************************!*\
  !*** ./angular/src/app/app.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 7970);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6197);
/* harmony import */ var _shared_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/interceptor/token.interceptor */ 8165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HTTP_INTERCEPTORS,
    useClass: _shared_interceptor_token_interceptor__WEBPACK_IMPORTED_MODULE_2__.TokenInterceptor,
    multi: true
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 7637:
/*!********************************************!*\
  !*** ./angular/src/app/auth/auth.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 3319);




class AuthGuard {
  constructor(_router, _auth) {
    this._router = _router;
    this._auth = _auth;
    this.jwthelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__.JwtHelperService();
  }
  canActivate() {
    let data = this._auth.loadFromLocalStorage().then(x => {
      let token;
      console.log(x);
      if (x?.token) {
        token = x?.token;
      } else {
        token = '';
      }
      if (!this.jwthelper.isTokenExpired(token)) {
        return true;
      } else {
        chrome.tabs.create({
          url: 'https://beta.boomconcole.com/login',
          selected: true
        });
        return false;
      }
    });
    return true;
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3319:
/*!**********************************************!*\
  !*** ./angular/src/app/auth/auth.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var C_dev_chrome_extension_ng_boom_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ 4467);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 8135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);







class AuthService {
  constructor(http, _router) {
    this.http = http;
    this._router = _router;
    this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
    this.jwthelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__.JwtHelperService();
    this.userProfile = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({
      token: '',
      userId: ''
    });
    // this.loadFromLocalStorage();
  }

  isLoggedIn() {
    const user = this.loadFromLocalStorage();
    let data = this.loadFromLocalStorage().then(x => {
      console.log(x.token);
      return !this.jwthelper.isTokenExpired(x.token);
    });
    return false;
  }
  // isAdmin():boolean {
  //   const user = this.loadFromLocalStorage();
  //   if(user.role === 'admin'){
  //     return true
  //   }else{
  //     return false
  //   }
  // }
  login(model) {
    return this.http.post(this.baseUrl + '/auth/login', model);
  }
  signup(model) {
    return this.http.post(this.baseUrl + '/auth/signup', model);
  }
  saveToLocalStorage(user) {
    this.userProfile.next(user);
    chrome.storage.sync.set({
      key: user
    }).then(() => {
      console.log(user);
    });
    // localStorage.setItem('profile', JSON.stringify(user));
    // chrome.storage.sync.set({ "profile" :user }, function() {
    //   if (chrome.runtime.lastError) {
    //     console.log("Runtime error.");
    //   }
    // });
  }

  loadFromLocalStorage() {
    var _this = this;
    return (0,C_dev_chrome_extension_ng_boom_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.userProfile.next({
      //     token: '',
      //     userId: '',
      //   });
      if (!_this.userProfile.value.token) {
        return yield chrome.storage.sync.get(["key"]).then(result => {
          _this.userProfile.next(result['key']);
          return result['key'];
        });
      }
    })();
  }
  logout() {
    // localStorage.removeItem('profile');
    chrome.storage.sync.set({
      key: {}
    }).then(() => {});
    this.userProfile.next({
      token: '',
      userId: ''
    });
    this._router.navigate(['popup']);
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3154:
/*!******************************************************!*\
  !*** ./angular/src/app/providers/tab-id.provider.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TAB_ID": () => (/* binding */ TAB_ID)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * provides the currently opened tab id
 */
const TAB_ID = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CHROME_TAB_ID');

/***/ }),

/***/ 8165:
/*!*****************************************************************!*\
  !*** ./angular/src/app/shared/interceptor/token.interceptor.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptor": () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/auth/auth.service */ 3319);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





class TokenInterceptor {
  constructor(_auth, _router) {
    this._auth = _auth;
    this._router = _router;
  }
  intercept(httpRequest, next) {
    let storage = this._auth.loadFromLocalStorage();
    const profile = this._auth?.userProfile.value;
    let request;
    let test = chrome.storage.sync.get(["key"]);
    if (httpRequest.url.includes('auth')) return next.handle(httpRequest);
    request = httpRequest.clone({
      setHeaders: {
        Authorization: `Bearer ${profile.token}`
      }
    });
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(() => {}, err => {
      if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpErrorResponse) {
        if (err.status !== 401) {
          // if( err.status === 403 ){
          //   let user = this._auth.loadFromLocalStorage();
          //   this._router.navigate(['company/'+user.companyCode]);
          // }
          return;
        }
        this._router.navigate(['popup']);
      }
    }));
  }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
  return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};
TokenInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: TokenInterceptor,
  factory: TokenInterceptor.ɵfac
});

/***/ }),

/***/ 8135:
/*!*************************************************!*\
  !*** ./angular/src/environments/environment.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  baseUrl: 'https://boomconsoleapi.boomconcole.com/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 919:
/*!*****************************!*\
  !*** ./angular/src/main.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 3300);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8135);
/* harmony import */ var _app_providers_tab_id_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/providers/tab-id.provider */ 3154);





chrome.tabs.query({
  active: true,
  currentWindow: true
}, tabs => {
  if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
  }
  const {
    id: tabId
  } = [...tabs].pop();
  // provides the current Tab ID so you can send messages to the content page
  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser([{
    provide: _app_providers_tab_id_provider__WEBPACK_IMPORTED_MODULE_2__.TAB_ID,
    useValue: tabId
  }]).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(error => console.error(error));
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(919)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUloRSxPQUFPLENBQUNnRSxLQUFLLENBQUNBLEtBQUssQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FuZ3VsYXItY2hyb21lLWV4dGVuc2lvbi8uL2FuZ3VsYXIvc3JjL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vYW5ndWxhci1jaHJvbWUtZXh0ZW5zaW9uLy4vYW5ndWxhci9zcmMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vYW5ndWxhci1jaHJvbWUtZXh0ZW5zaW9uLy4vYW5ndWxhci9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly9hbmd1bGFyLWNocm9tZS1leHRlbnNpb24vLi9hbmd1bGFyL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9hbmd1bGFyLWNocm9tZS1leHRlbnNpb24vLi9hbmd1bGFyL3NyYy9hcHAvYXV0aC9hdXRoLmd1YXJkLnRzIiwid2VicGFjazovL2FuZ3VsYXItY2hyb21lLWV4dGVuc2lvbi8uL2FuZ3VsYXIvc3JjL2FwcC9hdXRoL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly9hbmd1bGFyLWNocm9tZS1leHRlbnNpb24vLi9hbmd1bGFyL3NyYy9hcHAvcHJvdmlkZXJzL3RhYi1pZC5wcm92aWRlci50cyIsIndlYnBhY2s6Ly9hbmd1bGFyLWNocm9tZS1leHRlbnNpb24vLi9hbmd1bGFyL3NyYy9hcHAvc2hhcmVkL2ludGVyY2VwdG9yL3Rva2VuLmludGVyY2VwdG9yLnRzIiwid2VicGFjazovL2FuZ3VsYXItY2hyb21lLWV4dGVuc2lvbi8uL2FuZ3VsYXIvc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudC50cyIsIndlYnBhY2s6Ly9hbmd1bGFyLWNocm9tZS1leHRlbnNpb24vLi9hbmd1bGFyL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL2F1dGgvYXV0aC5ndWFyZCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ3BvcHVwJyxcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9tb2R1bGVzL3BvcHVwL3BvcHVwLm1vZHVsZScpLnRoZW4obSA9PiBtLlBvcHVwTW9kdWxlKSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICd0YWInLFxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL21vZHVsZXMvdGFiL3RhYi5tb2R1bGUnKS50aGVuKG0gPT4gbS5UYWJNb2R1bGUpXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnb3B0aW9ucycsXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vbW9kdWxlcy9vcHRpb25zL29wdGlvbnMubW9kdWxlJykudGhlbihtID0+IG0uT3B0aW9uc01vZHVsZSksXG4gICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdXG4gIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMsIHsgdXNlSGFzaDogdHJ1ZSAgfSldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vYXV0aC9hdXRoLmd1YXJkJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoL2F1dGguc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gXG59XG4iLCI8IS0tIFJvdXRpbmcgYmFzZWQgb24gdGhlIG1vZHVsZSB0aGF0IG9wZW5lZCAocG9wdXAvb3B0aW9ucy90YWIpIC0tPlxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuIiwiaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IFRva2VuSW50ZXJjZXB0b3IgfSBmcm9tICcuL3NoYXJlZC9pbnRlcmNlcHRvci90b2tlbi5pbnRlcmNlcHRvcic7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBBcHBSb3V0aW5nTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBUb2tlbkludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9XSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSnd0SGVscGVyU2VydmljZSB9IGZyb20gJ0BhdXRoMC9hbmd1bGFyLWp3dCc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICBqd3RoZWxwZXIgPSBuZXcgSnd0SGVscGVyU2VydmljZSgpO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfYXV0aDogQXV0aFNlcnZpY2Upe31cclxuICBjYW5BY3RpdmF0ZSgpIHtcclxuICAgIGxldCBkYXRhID0gdGhpcy5fYXV0aC5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpLnRoZW4oKHg6IGFueSkgPT4ge1xyXG4gICAgICBcclxuICAgICAgbGV0IHRva2VuOnN0cmluZztcclxuICAgICAgY29uc29sZS5sb2coeCk7XHJcbiAgICAgIFxyXG4gICAgICBpZih4Py50b2tlbil7XHJcbiAgICAgICAgdG9rZW49IHg/LnRva2VuO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB0b2tlbiA9ICcnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZighdGhpcy5qd3RoZWxwZXIuaXNUb2tlbkV4cGlyZWQodG9rZW4pKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfWVsc2V7XHJcblxyXG4gICAgICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7XHJcbiAgICAgICAgICB1cmw6ICdodHRwczovL2JldGEuYm9vbWNvbmNvbGUuY29tL2xvZ2luJyxcclxuICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9IFxyXG4gICAgICAgXHJcbiAgICB9KTtcclxuIFxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgSnd0SGVscGVyU2VydmljZSB9IGZyb20gJ0BhdXRoMC9hbmd1bGFyLWp3dCc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBJVXNlciB9IGZyb20gJy4uL3NoYXJlZC9pbnRlcmZhY2VzL0lVc2VyLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcclxuICBiYXNlVXJsOiBzdHJpbmcgPSBlbnZpcm9ubWVudC5iYXNlVXJsO1xyXG4gIGp3dGhlbHBlciA9IG5ldyBKd3RIZWxwZXJTZXJ2aWNlKCk7XHJcblxyXG4gIHVzZXJQcm9maWxlOiBCZWhhdmlvclN1YmplY3Q8SVVzZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJVXNlcj4oe1xyXG4gICAgdG9rZW46ICcnLFxyXG4gICAgdXNlcklkOiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikgeyBcclxuICAgIC8vIHRoaXMubG9hZEZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICB9XHJcblxyXG4gIGlzTG9nZ2VkSW4oKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLmxvYWRGcm9tTG9jYWxTdG9yYWdlKCkudGhlbigoeDogYW55KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHgudG9rZW4pO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuICghdGhpcy5qd3RoZWxwZXIuaXNUb2tlbkV4cGlyZWQoeC50b2tlbikpXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBpc0FkbWluKCk6Ym9vbGVhbiB7XHJcbiAgLy8gICBjb25zdCB1c2VyID0gdGhpcy5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gIC8vICAgaWYodXNlci5yb2xlID09PSAnYWRtaW4nKXtcclxuICAvLyAgICAgcmV0dXJuIHRydWVcclxuICAvLyAgIH1lbHNle1xyXG4gIC8vICAgICByZXR1cm4gZmFsc2VcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIGxvZ2luKG1vZGVsOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyAnL2F1dGgvbG9naW4nLCBtb2RlbCk7XHJcbiAgfVxyXG4gIHNpZ251cChtb2RlbDogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5iYXNlVXJsICsgJy9hdXRoL3NpZ251cCcsIG1vZGVsKTtcclxuICB9XHJcblxyXG4gIHNhdmVUb0xvY2FsU3RvcmFnZSh1c2VyOiBJVXNlcikge1xyXG4gICAgdGhpcy51c2VyUHJvZmlsZS5uZXh0KHVzZXIpO1xyXG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBrZXk6IHVzZXIgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICBcclxuICAgIH0pO1xyXG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2ZpbGUnLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbiAgICAvLyBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IFwicHJvZmlsZVwiIDp1c2VyIH0sIGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJSdW50aW1lIGVycm9yLlwiKTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkRnJvbUxvY2FsU3RvcmFnZSgpOlByb21pc2U8YW55PiB7XHJcbiAgICAvLyB0aGlzLnVzZXJQcm9maWxlLm5leHQoe1xyXG4gICAgLy8gICAgIHRva2VuOiAnJyxcclxuICAgIC8vICAgICB1c2VySWQ6ICcnLFxyXG4gICAgLy8gICB9KTtcclxuICAgICBpZiAoIXRoaXMudXNlclByb2ZpbGUudmFsdWUudG9rZW4pIHtcclxuICAgICAgcmV0dXJuIGF3YWl0IGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFtcImtleVwiXSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnVzZXJQcm9maWxlLm5leHQocmVzdWx0WydrZXknXSk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0WydrZXknXTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKSB7XHJcbiAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvZmlsZScpO1xyXG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBrZXk6IHt9IH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgIH0pO1xyXG4gICAgdGhpcy51c2VyUHJvZmlsZS5uZXh0KHtcclxuICAgICAgdG9rZW46ICcnLFxyXG4gICAgICB1c2VySWQ6ICcnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsncG9wdXAnXSk7XHJcbiAgfVxyXG4gIFxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vKipcbiAqIHByb3ZpZGVzIHRoZSBjdXJyZW50bHkgb3BlbmVkIHRhYiBpZFxuICovXG5leHBvcnQgY29uc3QgVEFCX0lEID0gbmV3IEluamVjdGlvblRva2VuPG51bWJlcj4oJ0NIUk9NRV9UQUJfSUQnKTtcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBJbnRlcmNlcHRvcixcbiAgSHR0cEV2ZW50LFxuICBIdHRwUmVzcG9uc2UsXG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnc3JjL2FwcC9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9rZW5JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGg6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cblxuICBpbnRlcmNlcHQoXG4gICAgaHR0cFJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuXG4gICAgbGV0IHN0b3JhZ2UgPSAgdGhpcy5fYXV0aC5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgIGNvbnN0IHByb2ZpbGU6YW55ID0gdGhpcy5fYXV0aD8udXNlclByb2ZpbGUudmFsdWU7XG4gICAgbGV0IHJlcXVlc3Q6YW55O1xuICAgIFxuICAgIGxldCB0ZXN0ID0gY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoW1wia2V5XCJdKTtcbiAgICBpZihodHRwUmVxdWVzdC51cmwuaW5jbHVkZXMoJ2F1dGgnKSlcbiAgICAgIHJldHVybiBuZXh0LmhhbmRsZShodHRwUmVxdWVzdCk7XG4gICAgICBcbiAgICByZXF1ZXN0ID0gaHR0cFJlcXVlc3QuY2xvbmUoe1xuICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvZmlsZS50b2tlbn1gLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgIHRhcChcbiAgICAgICAgKCkgPT4ge30sXG4gICAgICAgIChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKGVyci5zdGF0dXMgIT09IDQwMSkge1xuXG4gICAgICAgICAgICAgIC8vIGlmKCBlcnIuc3RhdHVzID09PSA0MDMgKXtcbiAgICAgICAgICAgICAgLy8gICBsZXQgdXNlciA9IHRoaXMuX2F1dGgubG9hZEZyb21Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgLy8gICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydjb21wYW55LycrdXNlci5jb21wYW55Q29kZV0pO1xuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsncG9wdXAnXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIiwiLy8gVGhpcyBmaWxlIGNhbiBiZSByZXBsYWNlZCBkdXJpbmcgYnVpbGQgYnkgdXNpbmcgdGhlIGBmaWxlUmVwbGFjZW1lbnRzYCBhcnJheS5cbi8vIGBuZyBidWlsZGAgcmVwbGFjZXMgYGVudmlyb25tZW50LnRzYCB3aXRoIGBlbnZpcm9ubWVudC5wcm9kLnRzYC5cbi8vIFRoZSBsaXN0IG9mIGZpbGUgcmVwbGFjZW1lbnRzIGNhbiBiZSBmb3VuZCBpbiBgYW5ndWxhci5qc29uYC5cblxuZXhwb3J0IGNvbnN0IGVudmlyb25tZW50ID0ge1xuICBwcm9kdWN0aW9uOiBmYWxzZSxcbiAgYmFzZVVybDogJ2h0dHBzOi8vYm9vbWNvbnNvbGVhcGkuYm9vbWNvbmNvbGUuY29tL2FwaScsXG59O1xuXG4vKlxuICogRm9yIGVhc2llciBkZWJ1Z2dpbmcgaW4gZGV2ZWxvcG1lbnQgbW9kZSwgeW91IGNhbiBpbXBvcnQgdGhlIGZvbGxvd2luZyBmaWxlXG4gKiB0byBpZ25vcmUgem9uZSByZWxhdGVkIGVycm9yIHN0YWNrIGZyYW1lcyBzdWNoIGFzIGB6b25lLnJ1bmAsIGB6b25lRGVsZWdhdGUuaW52b2tlVGFza2AuXG4gKlxuICogVGhpcyBpbXBvcnQgc2hvdWxkIGJlIGNvbW1lbnRlZCBvdXQgaW4gcHJvZHVjdGlvbiBtb2RlIGJlY2F1c2UgaXQgd2lsbCBoYXZlIGEgbmVnYXRpdmUgaW1wYWN0XG4gKiBvbiBwZXJmb3JtYW5jZSBpZiBhbiBlcnJvciBpcyB0aHJvd24uXG4gKi9cbi8vIGltcG9ydCAnem9uZS5qcy9wbHVnaW5zL3pvbmUtZXJyb3InOyAgLy8gSW5jbHVkZWQgd2l0aCBBbmd1bGFyIENMSS5cbiIsImltcG9ydCB7IGVuYWJsZVByb2RNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcbmltcG9ydCB7IFRBQl9JRCB9IGZyb20gJy4vYXBwL3Byb3ZpZGVycy90YWItaWQucHJvdmlkZXInO1xuXG5jaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCB0YWJzID0+IHtcbiAgaWYgKGVudmlyb25tZW50LnByb2R1Y3Rpb24pIHtcbiAgICBlbmFibGVQcm9kTW9kZSgpO1xuICB9XG5cbiAgY29uc3QgeyBpZDogdGFiSWQgfSA9IFsuLi50YWJzXS5wb3AoKTtcblxuICAvLyBwcm92aWRlcyB0aGUgY3VycmVudCBUYWIgSUQgc28geW91IGNhbiBzZW5kIG1lc3NhZ2VzIHRvIHRoZSBjb250ZW50IHBhZ2VcbiAgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyhbeyBwcm92aWRlOiBUQUJfSUQsIHVzZVZhbHVlOiB0YWJJZCB9XSlcbiAgICAuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xufSk7XG4iXSwibmFtZXMiOlsiUm91dGVyTW9kdWxlIiwiQXV0aEd1YXJkIiwicm91dGVzIiwicGF0aCIsImxvYWRDaGlsZHJlbiIsInRoZW4iLCJtIiwiUG9wdXBNb2R1bGUiLCJUYWJNb2R1bGUiLCJPcHRpb25zTW9kdWxlIiwiY2FuQWN0aXZhdGUiLCJBcHBSb3V0aW5nTW9kdWxlIiwiZm9yUm9vdCIsInVzZUhhc2giLCJpbXBvcnRzIiwiZXhwb3J0cyIsIkFwcENvbXBvbmVudCIsInNlbGVjdG9ycyIsImRlY2xzIiwidmFycyIsInRlbXBsYXRlIiwiaTAiLCJIdHRwQ2xpZW50TW9kdWxlIiwiSFRUUF9JTlRFUkNFUFRPUlMiLCJGb3Jtc01vZHVsZSIsIlJlYWN0aXZlRm9ybXNNb2R1bGUiLCJCcm93c2VyTW9kdWxlIiwiVG9rZW5JbnRlcmNlcHRvciIsIkFwcE1vZHVsZSIsImJvb3RzdHJhcCIsInByb3ZpZGUiLCJ1c2VDbGFzcyIsIm11bHRpIiwiZGVjbGFyYXRpb25zIiwiSnd0SGVscGVyU2VydmljZSIsImNvbnN0cnVjdG9yIiwiX3JvdXRlciIsIl9hdXRoIiwiZGF0YSIsImxvYWRGcm9tTG9jYWxTdG9yYWdlIiwieCIsInRva2VuIiwiY29uc29sZSIsImxvZyIsImp3dGhlbHBlciIsImlzVG9rZW5FeHBpcmVkIiwiY2hyb21lIiwidGFicyIsImNyZWF0ZSIsInVybCIsInNlbGVjdGVkIiwiZmFjdG9yeSIsInByb3ZpZGVkSW4iLCJCZWhhdmlvclN1YmplY3QiLCJlbnZpcm9ubWVudCIsIkF1dGhTZXJ2aWNlIiwiaHR0cCIsImJhc2VVcmwiLCJ1c2VySWQiLCJpc0xvZ2dlZEluIiwidXNlciIsImxvZ2luIiwibW9kZWwiLCJwb3N0Iiwic2lnbnVwIiwic2F2ZVRvTG9jYWxTdG9yYWdlIiwidXNlclByb2ZpbGUiLCJuZXh0Iiwic3RvcmFnZSIsInN5bmMiLCJzZXQiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInJlc3VsdCIsImxvZ291dCIsIm5hdmlnYXRlIiwiSW5qZWN0aW9uVG9rZW4iLCJUQUJfSUQiLCJIdHRwRXJyb3JSZXNwb25zZSIsInRhcCIsImludGVyY2VwdCIsImh0dHBSZXF1ZXN0IiwicHJvZmlsZSIsInJlcXVlc3QiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJoYW5kbGUiLCJjbG9uZSIsInNldEhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicGlwZSIsImVyciIsInN0YXR1cyIsInByb2R1Y3Rpb24iLCJlbmFibGVQcm9kTW9kZSIsInF1ZXJ5IiwiYWN0aXZlIiwiY3VycmVudFdpbmRvdyIsImlkIiwidGFiSWQiLCJwb3AiLCJfX05nQ2xpX2Jvb3RzdHJhcF8xIiwidXNlVmFsdWUiLCJib290c3RyYXBNb2R1bGUiLCJjYXRjaCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==