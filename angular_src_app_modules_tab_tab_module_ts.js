"use strict";
(self["webpackChunkangular_chrome_extension"] = self["webpackChunkangular_chrome_extension"] || []).push([["angular_src_app_modules_tab_tab_module_ts"],{

/***/ 46:
/*!****************************************************************!*\
  !*** ./angular/src/app/modules/tab/pages/tab/tab.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabComponent": () => (/* binding */ TabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TabComponent {}
TabComponent.ɵfac = function TabComponent_Factory(t) {
  return new (t || TabComponent)();
};
TabComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: TabComponent,
  selectors: [["app-tab"]],
  decls: 4,
  vars: 0,
  consts: [[2, "text-align", "center"]],
  template: function TabComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tab");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "You opened a new tab!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8297:
/*!***********************************************************!*\
  !*** ./angular/src/app/modules/tab/tab-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabRoutingModule": () => (/* binding */ TabRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_tab_tab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/tab/tab.component */ 46);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  pathMatch: 'full',
  component: _pages_tab_tab_component__WEBPACK_IMPORTED_MODULE_0__.TabComponent
}];
class TabRoutingModule {}
TabRoutingModule.ɵfac = function TabRoutingModule_Factory(t) {
  return new (t || TabRoutingModule)();
};
TabRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: TabRoutingModule
});
TabRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TabRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7138:
/*!***************************************************!*\
  !*** ./angular/src/app/modules/tab/tab.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabModule": () => (/* binding */ TabModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _pages_tab_tab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/tab/tab.component */ 46);
/* harmony import */ var _tab_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-routing.module */ 8297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




class TabModule {}
TabModule.ɵfac = function TabModule_Factory(t) {
  return new (t || TabModule)();
};
TabModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: TabModule
});
TabModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _tab_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TabModule, {
    declarations: [_pages_tab_tab_component__WEBPACK_IMPORTED_MODULE_0__.TabComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _tab_routing_module__WEBPACK_IMPORTED_MODULE_1__.TabRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9zcmNfYXBwX21vZHVsZXNfdGFiX3RhYl9tb2R1bGVfdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBT00sTUFBT0EsWUFBWTtBQUFaQSxZQUFZO21CQUFaQSxZQUFZO0FBQUE7QUFBWkEsWUFBWTtRQUFaQSxZQUFZO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0VBQUFDO0lBQUE7TUNQekJDLDREQUFBQSxZQUE4QjtNQUFBQSxvREFBQUEsVUFBRztNQUFBQSwwREFBQUEsRUFBSztNQUN0Q0EsNERBQUFBLFdBQTZCO01BQUFBLG9EQUFBQSw0QkFBcUI7TUFBQUEsMERBQUFBLEVBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FDO0FBQ0U7OztBQUV6RCxNQUFNRSxNQUFNLEdBQVcsQ0FDckI7RUFDRUMsSUFBSSxFQUFFLEVBQUU7RUFDUkMsU0FBUyxFQUFFLE1BQU07RUFDakJDLFNBQVMsRUFBRVgsa0VBQVlBO0NBQ3hCLENBQ0Y7QUFNSyxNQUFPWSxnQkFBZ0I7QUFBaEJBLGdCQUFnQjttQkFBaEJBLGdCQUFnQjtBQUFBO0FBQWhCQSxnQkFBZ0I7UUFBaEJBO0FBQWdCO0FBQWhCQSxnQkFBZ0I7WUFIakJMLGtFQUFxQixDQUFDQyxNQUFNLENBQUMsRUFDN0JELHlEQUFZO0FBQUE7O3NIQUVYSyxnQkFBZ0I7SUFBQUUsVUFBQUEseURBQUFBO0lBQUFDLFVBRmpCUix5REFBWTtFQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2R1QjtBQUVVO0FBQ0Q7O0FBTWxELE1BQU9VLFNBQVM7QUFBVEEsU0FBUzttQkFBVEEsU0FBUztBQUFBO0FBQVRBLFNBQVM7UUFBVEE7QUFBUztBQUFUQSxTQUFTO1lBRlZELHlEQUFZLEVBQUVKLGlFQUFnQjtBQUFBOztzSEFFN0JLLFNBQVM7SUFBQUMsZUFITGxCLGtFQUFZO0lBQUFjLFVBQ2pCRSx5REFBWSxFQUFFSixpRUFBZ0I7RUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5ndWxhci1jaHJvbWUtZXh0ZW5zaW9uLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvdGFiL3BhZ2VzL3RhYi90YWIuY29tcG9uZW50LnRzIiwid2VicGFjazovL2FuZ3VsYXItY2hyb21lLWV4dGVuc2lvbi8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL3RhYi9wYWdlcy90YWIvdGFiLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovL2FuZ3VsYXItY2hyb21lLWV4dGVuc2lvbi8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL3RhYi90YWItcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vYW5ndWxhci1jaHJvbWUtZXh0ZW5zaW9uLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvdGFiL3RhYi5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10YWInLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJDb21wb25lbnQge31cbiIsIjxoMSBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+VGFiPC9oMT5cbjxwIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj5Zb3Ugb3BlbmVkIGEgbmV3IHRhYiE8L3A+XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy90YWIvdGFiLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgcGF0aE1hdGNoOiAnZnVsbCcsXG4gICAgY29tcG9uZW50OiBUYWJDb21wb25lbnRcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgVGFiUm91dGluZ01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3RhYi90YWIuY29tcG9uZW50JztcbmltcG9ydCB7IFRhYlJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3RhYi1yb3V0aW5nLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RhYkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFRhYlJvdXRpbmdNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIFRhYk1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbIlRhYkNvbXBvbmVudCIsInNlbGVjdG9ycyIsImRlY2xzIiwidmFycyIsImNvbnN0cyIsInRlbXBsYXRlIiwiaTAiLCJSb3V0ZXJNb2R1bGUiLCJyb3V0ZXMiLCJwYXRoIiwicGF0aE1hdGNoIiwiY29tcG9uZW50IiwiVGFiUm91dGluZ01vZHVsZSIsImZvckNoaWxkIiwiaW1wb3J0cyIsImV4cG9ydHMiLCJDb21tb25Nb2R1bGUiLCJUYWJNb2R1bGUiLCJkZWNsYXJhdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9