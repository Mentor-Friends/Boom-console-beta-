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
        console.log("not logged In...");
        chrome.tabs.create({
          url: 'http://localhost:3000',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDNUUsc0RBQVMsQ0FBQyxDQUMxQjZFLEtBQUssQ0FBQ0MsS0FBSyxJQUFJaEUsT0FBTyxDQUFDZ0UsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbmd1bGFyLWNocm9tZS1leHRlbnNpb24vLi9hbmd1bGFyL3NyYy9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovL2FuZ3VsYXItY2hyb21lLWV4dGVuc2lvbi8uL2FuZ3VsYXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwid2VicGFjazovL2FuZ3VsYXItY2hyb21lLWV4dGVuc2lvbi8uL2FuZ3VsYXIvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vYW5ndWxhci1jaHJvbWUtZXh0ZW5zaW9uLy4vYW5ndWxhci9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vYW5ndWxhci1jaHJvbWUtZXh0ZW5zaW9uLy4vYW5ndWxhci9zcmMvYXBwL2F1dGgvYXV0aC5ndWFyZC50cyIsIndlYnBhY2s6Ly9hbmd1bGFyLWNocm9tZS1leHRlbnNpb24vLi9hbmd1bGFyL3NyYy9hcHAvYXV0aC9hdXRoLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vYW5ndWxhci1jaHJvbWUtZXh0ZW5zaW9uLy4vYW5ndWxhci9zcmMvYXBwL3Byb3ZpZGVycy90YWItaWQucHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vYW5ndWxhci1jaHJvbWUtZXh0ZW5zaW9uLy4vYW5ndWxhci9zcmMvYXBwL3NoYXJlZC9pbnRlcmNlcHRvci90b2tlbi5pbnRlcmNlcHRvci50cyIsIndlYnBhY2s6Ly9hbmd1bGFyLWNocm9tZS1leHRlbnNpb24vLi9hbmd1bGFyL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vYW5ndWxhci1jaHJvbWUtZXh0ZW5zaW9uLy4vYW5ndWxhci9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi9hdXRoL2F1dGguZ3VhcmQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICdwb3B1cCcsXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vbW9kdWxlcy9wb3B1cC9wb3B1cC5tb2R1bGUnKS50aGVuKG0gPT4gbS5Qb3B1cE1vZHVsZSksXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAndGFiJyxcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9tb2R1bGVzL3RhYi90YWIubW9kdWxlJykudGhlbihtID0+IG0uVGFiTW9kdWxlKVxuICB9LFxuICB7XG4gICAgcGF0aDogJ29wdGlvbnMnLFxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL21vZHVsZXMvb3B0aW9ucy9vcHRpb25zLm1vZHVsZScpLnRoZW4obSA9PiBtLk9wdGlvbnNNb2R1bGUpLFxuICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXVxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzLCB7IHVzZUhhc2g6IHRydWUgIH0pXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL2F1dGgvYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC9hdXRoLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hcHAuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuIFxufVxuIiwiPCEtLSBSb3V0aW5nIGJhc2VkIG9uIHRoZSBtb2R1bGUgdGhhdCBvcGVuZWQgKHBvcHVwL29wdGlvbnMvdGFiKSAtLT5cbjxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiIsImltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2tlbkludGVyY2VwdG9yIH0gZnJvbSAnLi9zaGFyZWQvaW50ZXJjZXB0b3IvdG9rZW4uaW50ZXJjZXB0b3InO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQnJvd3Nlck1vZHVsZSwgQXBwUm91dGluZ01vZHVsZSwgSHR0cENsaWVudE1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVdLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogVG9rZW5JbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfV0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEp3dEhlbHBlclNlcnZpY2UgfSBmcm9tICdAYXV0aDAvYW5ndWxhci1qd3QnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcbiAgand0aGVscGVyID0gbmV3IEp3dEhlbHBlclNlcnZpY2UoKTtcclxuICBcclxuICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2F1dGg6IEF1dGhTZXJ2aWNlKXt9XHJcbiAgY2FuQWN0aXZhdGUoKSB7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMuX2F1dGgubG9hZEZyb21Mb2NhbFN0b3JhZ2UoKS50aGVuKCh4OiBhbnkpID0+IHtcclxuICAgICAgXHJcbiAgICAgIGxldCB0b2tlbjpzdHJpbmc7XHJcbiAgICAgIGNvbnNvbGUubG9nKHgpO1xyXG4gICAgICBcclxuICAgICAgaWYoeD8udG9rZW4pe1xyXG4gICAgICAgIHRva2VuPSB4Py50b2tlbjtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdG9rZW4gPSAnJztcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIXRoaXMuand0aGVscGVyLmlzVG9rZW5FeHBpcmVkKHRva2VuKSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibm90IGxvZ2dlZCBJbi4uLlwiKTtcclxuXHJcbiAgICAgICAgY2hyb21lLnRhYnMuY3JlYXRlKHtcclxuICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcsXHJcbiAgICAgICAgICBzZWxlY3RlZDogdHJ1ZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfSBcclxuICAgICAgXHJcbiAgICAgICBcclxuICAgIH0pO1xyXG4gXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBKd3RIZWxwZXJTZXJ2aWNlIH0gZnJvbSAnQGF1dGgwL2FuZ3VsYXItand0JztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnc3JjL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IElVc2VyIH0gZnJvbSAnLi4vc2hhcmVkL2ludGVyZmFjZXMvSVVzZXIuaW50ZXJmYWNlJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIGJhc2VVcmw6IHN0cmluZyA9IGVudmlyb25tZW50LmJhc2VVcmw7XHJcbiAgand0aGVscGVyID0gbmV3IEp3dEhlbHBlclNlcnZpY2UoKTtcclxuXHJcbiAgdXNlclByb2ZpbGU6IEJlaGF2aW9yU3ViamVjdDxJVXNlcj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElVc2VyPih7XHJcbiAgICB0b2tlbjogJycsXHJcbiAgICB1c2VySWQ6ICcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7IFxyXG4gICAgLy8gdGhpcy5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG4gIH1cclxuXHJcbiAgaXNMb2dnZWRJbigpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLmxvYWRGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgICBsZXQgZGF0YSA9IHRoaXMubG9hZEZyb21Mb2NhbFN0b3JhZ2UoKS50aGVuKCh4OiBhbnkpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coeC50b2tlbik7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gKCF0aGlzLmp3dGhlbHBlci5pc1Rva2VuRXhwaXJlZCh4LnRva2VuKSlcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIGlzQWRtaW4oKTpib29sZWFuIHtcclxuICAvLyAgIGNvbnN0IHVzZXIgPSB0aGlzLmxvYWRGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgLy8gICBpZih1c2VyLnJvbGUgPT09ICdhZG1pbicpe1xyXG4gIC8vICAgICByZXR1cm4gdHJ1ZVxyXG4gIC8vICAgfWVsc2V7XHJcbiAgLy8gICAgIHJldHVybiBmYWxzZVxyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgbG9naW4obW9kZWw6IGFueSkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuYmFzZVVybCArICcvYXV0aC9sb2dpbicsIG1vZGVsKTtcclxuICB9XHJcbiAgc2lnbnVwKG1vZGVsOiBhbnkpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmJhc2VVcmwgKyAnL2F1dGgvc2lnbnVwJywgbW9kZWwpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKHVzZXI6IElVc2VyKSB7XHJcbiAgICB0aGlzLnVzZXJQcm9maWxlLm5leHQodXNlcik7XHJcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGtleTogdXNlciB9KS50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcbiAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZScsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgIC8vIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgXCJwcm9maWxlXCIgOnVzZXIgfSwgZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlJ1bnRpbWUgZXJyb3IuXCIpO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGxvYWRGcm9tTG9jYWxTdG9yYWdlKCk6UHJvbWlzZTxhbnk+IHtcclxuICAgIC8vIHRoaXMudXNlclByb2ZpbGUubmV4dCh7XHJcbiAgICAvLyAgICAgdG9rZW46ICcnLFxyXG4gICAgLy8gICAgIHVzZXJJZDogJycsXHJcbiAgICAvLyAgIH0pO1xyXG4gICAgIGlmICghdGhpcy51c2VyUHJvZmlsZS52YWx1ZS50b2tlbikge1xyXG4gICAgICByZXR1cm4gYXdhaXQgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoW1wia2V5XCJdKS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHRoaXMudXNlclByb2ZpbGUubmV4dChyZXN1bHRbJ2tleSddKTtcclxuICAgICAgICAgIHJldHVybiByZXN1bHRbJ2tleSddO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvZ291dCgpIHtcclxuICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9maWxlJyk7XHJcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IGtleToge30gfSkudGhlbigoKSA9PiB7XHJcbiAgICAgfSk7XHJcbiAgICB0aGlzLnVzZXJQcm9maWxlLm5leHQoe1xyXG4gICAgICB0b2tlbjogJycsXHJcbiAgICAgIHVzZXJJZDogJycsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydwb3B1cCddKTtcclxuICB9XHJcbiAgXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKlxuICogcHJvdmlkZXMgdGhlIGN1cnJlbnRseSBvcGVuZWQgdGFiIGlkXG4gKi9cbmV4cG9ydCBjb25zdCBUQUJfSUQgPSBuZXcgSW5qZWN0aW9uVG9rZW48bnVtYmVyPignQ0hST01FX1RBQl9JRCcpO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBSZXNwb25zZSxcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwRXJyb3JSZXNwb25zZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdzcmMvYXBwL2F1dGgvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2tlbkludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aDogQXV0aFNlcnZpY2UsIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICBodHRwUmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG5cbiAgICBsZXQgc3RvcmFnZSA9ICB0aGlzLl9hdXRoLmxvYWRGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgY29uc3QgcHJvZmlsZTphbnkgPSB0aGlzLl9hdXRoPy51c2VyUHJvZmlsZS52YWx1ZTtcbiAgICBsZXQgcmVxdWVzdDphbnk7XG4gICAgXG4gICAgbGV0IHRlc3QgPSBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChbXCJrZXlcIl0pO1xuICAgIGlmKGh0dHBSZXF1ZXN0LnVybC5pbmNsdWRlcygnYXV0aCcpKVxuICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKGh0dHBSZXF1ZXN0KTtcbiAgICAgIFxuICAgIHJlcXVlc3QgPSBodHRwUmVxdWVzdC5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9maWxlLnRva2VufWAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgdGFwKFxuICAgICAgICAoKSA9PiB7fSxcbiAgICAgICAgKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAoZXJyLnN0YXR1cyAhPT0gNDAxKSB7XG5cbiAgICAgICAgICAgICAgLy8gaWYoIGVyci5zdGF0dXMgPT09IDQwMyApe1xuICAgICAgICAgICAgICAvLyAgIGxldCB1c2VyID0gdGhpcy5fYXV0aC5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAvLyAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ2NvbXBhbnkvJyt1c2VyLmNvbXBhbnlDb2RlXSk7XG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydwb3B1cCddKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iLCIvLyBUaGlzIGZpbGUgY2FuIGJlIHJlcGxhY2VkIGR1cmluZyBidWlsZCBieSB1c2luZyB0aGUgYGZpbGVSZXBsYWNlbWVudHNgIGFycmF5LlxuLy8gYG5nIGJ1aWxkYCByZXBsYWNlcyBgZW52aXJvbm1lbnQudHNgIHdpdGggYGVudmlyb25tZW50LnByb2QudHNgLlxuLy8gVGhlIGxpc3Qgb2YgZmlsZSByZXBsYWNlbWVudHMgY2FuIGJlIGZvdW5kIGluIGBhbmd1bGFyLmpzb25gLlxuXG5leHBvcnQgY29uc3QgZW52aXJvbm1lbnQgPSB7XG4gIHByb2R1Y3Rpb246IGZhbHNlLFxuICBiYXNlVXJsOiAnaHR0cHM6Ly9ib29tY29uc29sZWFwaS5ib29tY29uY29sZS5jb20vYXBpJyxcbn07XG5cbi8qXG4gKiBGb3IgZWFzaWVyIGRlYnVnZ2luZyBpbiBkZXZlbG9wbWVudCBtb2RlLCB5b3UgY2FuIGltcG9ydCB0aGUgZm9sbG93aW5nIGZpbGVcbiAqIHRvIGlnbm9yZSB6b25lIHJlbGF0ZWQgZXJyb3Igc3RhY2sgZnJhbWVzIHN1Y2ggYXMgYHpvbmUucnVuYCwgYHpvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrYC5cbiAqXG4gKiBUaGlzIGltcG9ydCBzaG91bGQgYmUgY29tbWVudGVkIG91dCBpbiBwcm9kdWN0aW9uIG1vZGUgYmVjYXVzZSBpdCB3aWxsIGhhdmUgYSBuZWdhdGl2ZSBpbXBhY3RcbiAqIG9uIHBlcmZvcm1hbmNlIGlmIGFuIGVycm9yIGlzIHRocm93bi5cbiAqL1xuLy8gaW1wb3J0ICd6b25lLmpzL3BsdWdpbnMvem9uZS1lcnJvcic7ICAvLyBJbmNsdWRlZCB3aXRoIEFuZ3VsYXIgQ0xJLlxuIiwiaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgVEFCX0lEIH0gZnJvbSAnLi9hcHAvcHJvdmlkZXJzL3RhYi1pZC5wcm92aWRlcic7XG5cbmNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIHRhYnMgPT4ge1xuICBpZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xuICAgIGVuYWJsZVByb2RNb2RlKCk7XG4gIH1cblxuICBjb25zdCB7IGlkOiB0YWJJZCB9ID0gWy4uLnRhYnNdLnBvcCgpO1xuXG4gIC8vIHByb3ZpZGVzIHRoZSBjdXJyZW50IFRhYiBJRCBzbyB5b3UgY2FuIHNlbmQgbWVzc2FnZXMgdG8gdGhlIGNvbnRlbnQgcGFnZVxuICBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljKFt7IHByb3ZpZGU6IFRBQl9JRCwgdXNlVmFsdWU6IHRhYklkIH1dKVxuICAgIC5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG59KTtcbiJdLCJuYW1lcyI6WyJSb3V0ZXJNb2R1bGUiLCJBdXRoR3VhcmQiLCJyb3V0ZXMiLCJwYXRoIiwibG9hZENoaWxkcmVuIiwidGhlbiIsIm0iLCJQb3B1cE1vZHVsZSIsIlRhYk1vZHVsZSIsIk9wdGlvbnNNb2R1bGUiLCJjYW5BY3RpdmF0ZSIsIkFwcFJvdXRpbmdNb2R1bGUiLCJmb3JSb290IiwidXNlSGFzaCIsImltcG9ydHMiLCJleHBvcnRzIiwiQXBwQ29tcG9uZW50Iiwic2VsZWN0b3JzIiwiZGVjbHMiLCJ2YXJzIiwidGVtcGxhdGUiLCJpMCIsIkh0dHBDbGllbnRNb2R1bGUiLCJIVFRQX0lOVEVSQ0VQVE9SUyIsIkZvcm1zTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIkJyb3dzZXJNb2R1bGUiLCJUb2tlbkludGVyY2VwdG9yIiwiQXBwTW9kdWxlIiwiYm9vdHN0cmFwIiwicHJvdmlkZSIsInVzZUNsYXNzIiwibXVsdGkiLCJkZWNsYXJhdGlvbnMiLCJKd3RIZWxwZXJTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJfcm91dGVyIiwiX2F1dGgiLCJkYXRhIiwibG9hZEZyb21Mb2NhbFN0b3JhZ2UiLCJ4IiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwiand0aGVscGVyIiwiaXNUb2tlbkV4cGlyZWQiLCJjaHJvbWUiLCJ0YWJzIiwiY3JlYXRlIiwidXJsIiwic2VsZWN0ZWQiLCJmYWN0b3J5IiwicHJvdmlkZWRJbiIsIkJlaGF2aW9yU3ViamVjdCIsImVudmlyb25tZW50IiwiQXV0aFNlcnZpY2UiLCJodHRwIiwiYmFzZVVybCIsInVzZXJJZCIsImlzTG9nZ2VkSW4iLCJ1c2VyIiwibG9naW4iLCJtb2RlbCIsInBvc3QiLCJzaWdudXAiLCJzYXZlVG9Mb2NhbFN0b3JhZ2UiLCJ1c2VyUHJvZmlsZSIsIm5leHQiLCJzdG9yYWdlIiwic3luYyIsInNldCIsImtleSIsInZhbHVlIiwiZ2V0IiwicmVzdWx0IiwibG9nb3V0IiwibmF2aWdhdGUiLCJJbmplY3Rpb25Ub2tlbiIsIlRBQl9JRCIsIkh0dHBFcnJvclJlc3BvbnNlIiwidGFwIiwiaW50ZXJjZXB0IiwiaHR0cFJlcXVlc3QiLCJwcm9maWxlIiwicmVxdWVzdCIsInRlc3QiLCJpbmNsdWRlcyIsImhhbmRsZSIsImNsb25lIiwic2V0SGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJwaXBlIiwiZXJyIiwic3RhdHVzIiwicHJvZHVjdGlvbiIsImVuYWJsZVByb2RNb2RlIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93IiwiaWQiLCJ0YWJJZCIsInBvcCIsIl9fTmdDbGlfYm9vdHN0cmFwXzEiLCJ1c2VWYWx1ZSIsImJvb3RzdHJhcE1vZHVsZSIsImNhdGNoIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9