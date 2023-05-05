"use strict";
(self["webpackChunkangular_chrome_extension"] = self["webpackChunkangular_chrome_extension"] || []).push([["angular_src_app_modules_options_options_module_ts"],{

/***/ 7050:
/*!*******************************************************************!*\
  !*** ./angular/src/app/modules/options/options-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsRoutingModule": () => (/* binding */ OptionsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_options_options_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/options/options.component */ 4650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  pathMatch: 'full',
  component: _pages_options_options_component__WEBPACK_IMPORTED_MODULE_0__.OptionsComponent
}];
class OptionsRoutingModule {}
OptionsRoutingModule.ɵfac = function OptionsRoutingModule_Factory(t) {
  return new (t || OptionsRoutingModule)();
};
OptionsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: OptionsRoutingModule
});
OptionsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OptionsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6358:
/*!***********************************************************!*\
  !*** ./angular/src/app/modules/options/options.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsModule": () => (/* binding */ OptionsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _options_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options-routing.module */ 7050);
/* harmony import */ var _pages_options_options_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/options/options.component */ 4650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





class OptionsModule {}
OptionsModule.ɵfac = function OptionsModule_Factory(t) {
  return new (t || OptionsModule)();
};
OptionsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: OptionsModule
});
OptionsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _options_routing_module__WEBPACK_IMPORTED_MODULE_0__.OptionsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OptionsModule, {
    declarations: [_pages_options_options_component__WEBPACK_IMPORTED_MODULE_1__.OptionsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _options_routing_module__WEBPACK_IMPORTED_MODULE_0__.OptionsRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 4650:
/*!****************************************************************************!*\
  !*** ./angular/src/app/modules/options/pages/options/options.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsComponent": () => (/* binding */ OptionsComponent)
/* harmony export */ });
/* harmony import */ var C_dev_chrome_extension_ng_boom_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_shared_data_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/data/types */ 5832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/item.service */ 4378);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ 3319);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








function OptionsComponent_header_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header", 7)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Let's Start");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OptionsComponent_header_1_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function OptionsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
function OptionsComponent_main_3_h5_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r7.compositionData == null ? null : ctx_r7.compositionData.title, " ");
  }
}
function OptionsComponent_main_3_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Data type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.consoleForm.value.dataType, "");
  }
}
function OptionsComponent_main_3_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Category:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r9.consoleForm.value.category, " ");
  }
}
function OptionsComponent_main_3_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Comments:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.consoleForm.value.note, " ");
  }
}
function OptionsComponent_main_3_p_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 27)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Data type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r11.compositionData[ctx_r11.consoleForm.value.dataType], " ");
  }
}
function OptionsComponent_main_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main")(1, "div", 16)(2, "div", 17)(3, "div", 18)(4, "div", 19)(5, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Added Successfully! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, OptionsComponent_main_3_h5_7_Template, 2, 1, "h5", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, OptionsComponent_main_3_p_8_Template, 4, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, OptionsComponent_main_3_p_9_Template, 4, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, OptionsComponent_main_3_p_10_Template, 5, 1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, OptionsComponent_main_3_p_11_Template, 4, 1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 23)(13, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OptionsComponent_main_3_Template_a_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.addMore());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OptionsComponent_main_3_Template_a_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.openSite());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " View All");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.compositionData == null ? null : ctx_r2.compositionData.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.compositionData == null ? null : ctx_r2.compositionData.dataType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.consoleForm.value.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.consoleForm.value.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !!ctx_r2.compositionData && !!ctx_r2.compositionData[ctx_r2.consoleForm.value.dataType]);
  }
}
function OptionsComponent_ng_template_4_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", item_r19.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r19.text, " ");
  }
}
function OptionsComponent_ng_template_4_small_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please select an option. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function OptionsComponent_ng_template_4_small_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "small", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please enter category. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    standalone: true
  };
};
function OptionsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main")(1, "form", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function OptionsComponent_ng_template_4_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.saveData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 16)(4, "div", 30)(5, "select", 31)(6, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Choose action...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, OptionsComponent_ng_template_4_option_8_Template, 2, 2, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, OptionsComponent_ng_template_4_small_9_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 16)(11, "div", 35)(12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, OptionsComponent_ng_template_4_small_14_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 16)(16, "div", 38)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "textarea", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 16)(21, "div", 40)(22, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 42)(25, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label")(28, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function OptionsComponent_ng_template_4_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.traceChanged($event));
    })("ngModelChange", function OptionsComponent_ng_template_4_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.trace = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r4.consoleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.dataType && ctx_r4.dataType.invalid && (ctx_r4.dataType.touched || _r15.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.category && ctx_r4.category.invalid && (ctx_r4.category.touched || _r15.submitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("tracing", ctx_r4.trace);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.trace ? "Tracing..." : "Start Tracing");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r4.trace)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0));
  }
}
class OptionsComponent {
  constructor(_items, _auth) {
    this._items = _items;
    this._auth = _auth;
    this.wrapComposition = "scrape-data";
    this.types = src_app_shared_data_types__WEBPACK_IMPORTED_MODULE_1__.TYPES;
    this.loader = false;
    this.save_success = false;
    this.categoryList = [];
    this.consoleForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      dataType: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      note: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl("")
    });
    chrome.storage.local.get(["trace"]).then(result => {
      //console.log(result);
      this.trace = result.trace;
      //  console.log(result.trace);
    });
  }

  get dataType() {
    return this.consoleForm.get("email");
  }
  get category() {
    return this.consoleForm.get("password");
  }
  getCategories() {
    this._items.getAllCategories().subscribe({
      next: x => {
        this.categoryList = x;
        console.log(this.categoryList);
      },
      error: err => console.log(err)
    });
  }
  // autoComplete(e:any){
  //  e.preventDefault();
  //   if(this.categoryList?.length == 0){
  //     this.getCategories();
  //   }
  // }
  // autocomplete_select(text:string){
  //   this.consoleForm.patchValue({
  //     category: text
  //   });
  // }
  addMore() {
    this.save_success = false;
  }
  traceChanged(e) {
    console.log(e);
    chrome.storage.local.set({
      trace: e
    }).then(() => {
      console.log("Value is set to " + e);
      // chrome.runtime.sendMessage({ trace: e}, (response) => {
      //   console.log(response.message);
      // });
      let finalData = {};
      this.compositionName = "trace_url";
      let tabData = {};
      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        console.log(request?.tracedUrls);
        sendResponse({
          message: "Traced Urls."
        });
        this.compositionData = request?.tracedUrls;
        if (this.compositionData.length > 0) {
          tabData[this.wrapComposition] = {
            ...this.compositionData
          };
          finalData[this.compositionName] = tabData;
          this.createAPI(finalData);
        }
      });
    });
  }
  createAPI(finalData) {
    this._items.create(finalData, this.compositionName).subscribe({
      next: x => {
        this.loader = false;
        console.log(this.loader);
        this.save_success = true;
        console.log(x);
      },
      error: err => {
        this.loader = false;
        this.save_success = false;
        console.log(err);
      }
    });
  }
  openSite(url = 'https://beta.boomconcole.com') {
    chrome.tabs.create({
      url: url,
      selected: true
    });
  }
  saveData() {
    var _this = this;
    return (0,C_dev_chrome_extension_ng_boom_console_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let finalData = {};
      let tabData = {};
      let dataType = _this.consoleForm?.value.dataType;
      let formData = {
        ..._this.consoleForm.value
      };
      _this.compositionName = _this.consoleForm?.value?.dataType;
      if (_this.consoleForm.valid) {
        let [activeTab] = yield chrome.tabs.query({
          active: true,
          currentWindow: true
        });
        _this.loader = true;
        console.log(dataType);
        if (dataType == "url") {
          _this.compositionData = {
            url: activeTab.url,
            title: activeTab.title,
            comments: []
          };
          tabData[_this.wrapComposition] = {
            ..._this.compositionData,
            ...formData
          };
          finalData[_this.compositionName] = tabData;
          _this.createAPI(finalData);
        } else if (dataType == "visual_text") {
          _this.loader = false;
          _this.save_success = true;
          chrome.tabs.sendMessage(activeTab.id, {
            message: dataType
          }, response => {
            if (chrome.runtime.lastError) {
              console.log("error found");
            }
            console.log(response);
            _this.compositionData = {
              title: activeTab.title,
              visual_text: response?.message,
              comments: []
            };
            tabData[_this.wrapComposition] = {
              ...formData,
              ..._this.compositionData
            };
            finalData[_this.compositionName] = tabData;
            console.log(finalData);
            _this.createAPI(finalData);
          });
        } else if (dataType == "only_images" || dataType == "text_pictures") {
          _this.loader = false;
          _this.save_success = true;
          chrome.tabs.sendMessage(activeTab.id, {
            message: dataType
          }, response => {
            if (chrome.runtime.lastError) {
              console.log("error found");
            }
            console.log(response);
            _this.compositionData = {
              images: response?.message,
              comments: []
            };
            tabData[_this.wrapComposition] = {
              ..._this.compositionData,
              ...formData
            };
            finalData[_this.compositionName] = tabData;
            console.log(finalData);
            _this.createAPI(finalData);
          });
          tabData[_this.wrapComposition] = {
            ...formData
          };
          finalData[_this.compositionName] = tabData;
          _this.createAPI(finalData);
        } else if (dataType == "all_but_css") {
          _this.loader = false;
          _this.save_success = true;
          chrome.tabs.sendMessage(activeTab.id, {
            message: dataType
          }, response => {
            if (chrome.runtime.lastError) {
              console.log("error found");
            }
            console.log(response);
            _this.compositionData = {
              title: activeTab.title,
              visual_text: response?.message,
              comments: []
            };
            tabData[_this.wrapComposition] = {
              ...formData,
              ..._this.compositionData
            };
            finalData[_this.compositionName] = tabData;
            _this.createAPI(finalData);
          });
        } else if (dataType === "all") {
          console.log(dataType);
          _this.loader = false;
          _this.save_success = true;
          chrome.tabs.sendMessage(activeTab.id, {
            message: "all_data"
          }, response => {
            if (chrome.runtime.lastError) {
              console.log("error found");
            }
            console.log(response);
            _this.compositionData = {
              title: activeTab.title,
              visual_text: response?.message,
              comments: []
            };
            tabData[_this.wrapComposition] = {
              ...formData,
              ..._this.compositionData
            };
            finalData[_this.compositionName] = tabData;
            _this.createAPI(finalData);
          });
        } else if (dataType === "chat_gpt") {
          console.log(dataType);
          _this.loader = false;
          _this.save_success = true;
          chrome.tabs.sendMessage(activeTab.id, {
            message: "chat_gpt_data"
          }, response => {
            if (chrome.runtime.lastError) {
              console.log("error found");
            }
            console.log(response);
            _this.compositionData = {
              title: activeTab.title,
              visual_text: response?.message,
              comments: []
            };
            tabData[_this.wrapComposition] = {
              ...formData,
              ..._this.compositionData
            };
            finalData[_this.compositionName] = tabData;
            _this.createAPI(finalData);
          });
        }
      }
    })();
  }
  logout() {
    this._auth.logout();
  }
}
OptionsComponent.ɵfac = function OptionsComponent_Factory(t) {
  return new (t || OptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__.ItemService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};
OptionsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: OptionsComponent,
  selectors: [["app-options"]],
  decls: 9,
  vars: 4,
  consts: [[1, "popup-wrapper"], ["class", "heading", 4, "ngIf"], ["class", "loader", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["notSuccess", ""], [1, "logo", "text-right"], ["width", "120px", "src", "./assets/icons/logo.png"], [1, "heading"], [3, "click"], [1, "loader"], [1, "preloader-wrapper", "active"], [1, "spinner-layer", "spinner-red-only"], [1, "circle-clipper", "left"], [1, "circle"], [1, "gap-patch"], [1, "circle-clipper", "right"], [1, "row"], [1, "col", "s12", "m7"], [1, "card"], [1, "card-content"], [1, "green", "lighten-4", 2, "padding", "8px"], [4, "ngIf"], ["class", "overflow-wrap", 4, "ngIf"], [1, "card-action"], [1, "float-right", "m-0", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-grid"], ["d", "M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"], [1, "overflow-wrap"], [3, "formGroup", "ngSubmit"], ["consoleFormId", "ngForm"], [1, "col-12", "s12"], ["formControlName", "dataType", 1, "browser-default"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "err_msg", 4, "ngIf"], [1, "input-field", "col-12"], [1, "autocomplete_list_wrapper"], ["placeholder", "Category", "id", "category", "type", "text", "formControlName", "category", 1, "browser-default", "autocomplete"], [1, "col-12"], ["formControlName", "note"], [1, "col", "s12"], ["type", "submit", 1, "btn", "btn-large"], [1, "switch", "float-right"], ["type", "checkbox", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "lever"], [3, "value"], [1, "err_msg"]],
  template: function OptionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, OptionsComponent_header_1_Template, 5, 0, "header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, OptionsComponent_div_2_Template, 9, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, OptionsComponent_main_3_Template, 19, 5, "main", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, OptionsComponent_ng_template_4_Template, 30, 10, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "footer")(7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.save_success);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loader);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.save_success)("ngIfElse", _r3);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
  styles: [".heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #e67a8e;\n  font-size: 25px;\n  font-weight: bold;\n  margin: 10px 0;\n}\n\n.switch[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.switch[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #f78ca0;\n}\n\n.switch[_ngcontent-%COMP%]    > div.tracing[_ngcontent-%COMP%] {\n  color: #84c7c1;\n}\n\nmain[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL29wdGlvbnMvcGFnZXMvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtBQUlKOztBQURBO0VBQ0ksY0FBQTtBQUlKIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmcgaDN7XHJcbiAgICBjb2xvcjogI2U2N2E4ZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuLnN3aXRjaCBsYWJlbHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uc3dpdGNoID4gZGl2e1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI2Y3OGNhMDtcclxufVxyXG4uc3dpdGNoID4gZGl2LnRyYWNpbmd7XHJcbiAgICBjb2xvcjogIzg0YzdjMTtcclxufVxyXG5cclxubWFpbiBmb3Jte1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4378:
/*!**************************************************!*\
  !*** ./angular/src/app/services/item.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemService": () => (/* binding */ ItemService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ 3319);




const baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
class ItemService {
  constructor(http, _auth) {
    this.http = http;
    this._auth = _auth;
  }
  getAll(itemName, pageNumer = 1, pagesize = 10) {
    return this.http.get(baseUrl + `/list-api-clean?type=${itemName}&page=${pageNumer}&inpage=${pagesize}`);
  }
  getAllCategories() {
    return this.http.get(baseUrl + `/searchConcept?type=the_category`);
  }
  getById(id) {
    return this.http.get(baseUrl + `/edit-api-clean?id=${id}`);
  }
  search(keyword, type = '', compositionName = 'realestate') {
    return this.http.get(baseUrl + `/searchApi?composition=${compositionName}&search=${keyword}&type=${type}`);
  }
  getAllwAuth(itemNname, pageNumer = 1) {
    return this.http.get(baseUrl + `/concepts/list?type=${itemNname}&page=${pageNumer}`);
  }
  getByIdwAuth(id) {
    return this.http.post(baseUrl + `/concepts/${id}`, {});
  }
  create(data, itemName = '') {
    return this.http.post(baseUrl + `/concepts`, data);
  }
  noAuthCreate(data, itemName = '') {
    return this.http.post(baseUrl + '/createApiWithoutAuth', data);
  }
  update(data) {
    return this.http.post(baseUrl + `/concepts/update`, data);
  }
  uploadImage(data) {
    return this.http.post(baseUrl + `/upload/images`, data);
  }
  uploadFile(data) {
    return this.http.post(baseUrl + `/upload/files`, data);
  }
  getProfile(id) {
    return this.http.get(baseUrl + `/edit-api-clean?id=${id}`);
  }
}
ItemService.ɵfac = function ItemService_Factory(t) {
  return new (t || ItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
ItemService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ItemService,
  factory: ItemService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5832:
/*!**********************************************!*\
  !*** ./angular/src/app/shared/data/types.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TYPES": () => (/* binding */ TYPES)
/* harmony export */ });
const TYPES = [{
  text: 'Web Page Url',
  value: 'url'
}, {
  text: 'Visual Text',
  value: 'visual_text'
}, {
  text: 'Only Images',
  value: 'only_images'
}, {
  text: 'Text Pictures',
  value: 'text_pictures'
}, {
  text: 'All But CSS',
  value: 'all_but_css'
}, {
  text: 'All',
  value: 'all'
}, {
  text: 'Chat GPT: Extract Data',
  value: 'chat_gpt'
}];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcl9zcmNfYXBwX21vZHVsZXNfb3B0aW9uc19vcHRpb25zX21vZHVsZV90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VEO0FBQ2M7OztBQUVyRSxNQUFNRSxNQUFNLEdBQVcsQ0FDckI7RUFDRUMsSUFBSSxFQUFFLEVBQUU7RUFDUkMsU0FBUyxFQUFFLE1BQU07RUFDakJDLFNBQVMsRUFBRUosOEVBQWdCQTtDQUM1QixDQUNGO0FBTUssTUFBT0ssb0JBQW9CO0FBQXBCQSxvQkFBb0I7bUJBQXBCQSxvQkFBb0I7QUFBQTtBQUFwQkEsb0JBQW9CO1FBQXBCQTtBQUFvQjtBQUFwQkEsb0JBQW9CO1lBSHJCTixrRUFBcUIsQ0FBQ0UsTUFBTSxDQUFDLEVBQzdCRix5REFBWTtBQUFBOztzSEFFWE0sb0JBQW9CO0lBQUFFLFVBQUFBLHlEQUFBQTtJQUFBQyxVQUZyQlQseURBQVk7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHVCO0FBRW1CO0FBQ0Y7QUFDSzs7QUFNL0QsTUFBT2EsYUFBYTtBQUFiQSxhQUFhO21CQUFiQSxhQUFhO0FBQUE7QUFBYkEsYUFBYTtRQUFiQTtBQUFhO0FBQWJBLGFBQWE7WUFGZEgseURBQVksRUFBRUoseUVBQW9CLEVBQUVLLHVEQUFXLEVBQUVDLCtEQUFtQjtBQUFBOztzSEFFbkVDLGFBQWE7SUFBQUMsZUFIVGIsOEVBQWdCO0lBQUFPLFVBQ3JCRSx5REFBWSxFQUFFSix5RUFBb0IsRUFBRUssdURBQVcsRUFBRUMsK0RBQW1CO0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BaO0FBR2xCOzs7Ozs7Ozs7SUNIaERPLDREQUFBQSxnQkFBOEM7SUFDeENBLG9EQUFBQSxrQkFBVztJQUFBQSwwREFBQUEsRUFBSztJQUNwQkEsNERBQUFBLFdBQXNCO0lBQW5CQSx3REFBQUE7TUFBQUEsMkRBQUFBO01BQUE7TUFBQSxPQUFTQSx5REFBQUEsZ0JBQVE7SUFBQSxFQUFDO0lBQUNBLG9EQUFBQSxhQUFNO0lBQUFBLDBEQUFBQSxFQUFJOzs7OztJQUVsQ0EsNERBQUFBLGFBQW1DO0lBSTNCQSx1REFBQUEsY0FBMEI7SUFDNUJBLDBEQUFBQSxFQUFNO0lBQ1BBLDREQUFBQSxjQUF1QjtJQUNwQkEsdURBQUFBLGNBQTBCO0lBQzVCQSwwREFBQUEsRUFBTTtJQUNOQSw0REFBQUEsY0FBa0M7SUFDaENBLHVEQUFBQSxjQUEwQjtJQUM1QkEsMERBQUFBLEVBQU07Ozs7O0lBWUZBLDREQUFBQSxTQUFtQztJQUNqQ0Esb0RBQUFBLEdBQ0Y7SUFBQUEsMERBQUFBLEVBQUs7Ozs7SUFESEEsdURBQUFBLEdBQ0Y7SUFERUEsZ0VBQUFBLGdGQUNGOzs7OztJQUNBQSw0REFBQUEsUUFBcUM7SUFBUUEsb0RBQUFBLGlCQUFVO0lBQUFBLDBEQUFBQSxFQUFTO0lBQUNBLG9EQUFBQSxHQUFnQztJQUFBQSwwREFBQUEsRUFBSTs7OztJQUFwQ0EsdURBQUFBLEdBQWdDO0lBQWhDQSxnRUFBQUEsNENBQWdDOzs7OztJQUNqR0EsNERBQUFBLFFBQXNDO0lBQzVCQSxvREFBQUEsZ0JBQVM7SUFBQUEsMERBQUFBLEVBQVM7SUFBQ0Esb0RBQUFBLEdBQzdCO0lBQUFBLDBEQUFBQSxFQUFJOzs7O0lBRHlCQSx1REFBQUEsR0FDN0I7SUFENkJBLGdFQUFBQSw2Q0FDN0I7Ozs7O0lBQ0FBLDREQUFBQSxRQUFrQztJQUN4QkEsb0RBQUFBLGdCQUFTO0lBQUFBLDBEQUFBQSxFQUFTO0lBQUNBLHVEQUFBQSxTQUFNO0lBQ2pDQSxvREFBQUEsR0FDRjtJQUFBQSwwREFBQUEsRUFBSTs7OztJQURGQSx1REFBQUEsR0FDRjtJQURFQSxnRUFBQUEsMENBQ0Y7Ozs7O0lBRUFBLDREQUFBQSxZQU1DO0lBQ1NBLG9EQUFBQSxpQkFBVTtJQUFBQSwwREFBQUEsRUFBUztJQUMzQkEsb0RBQUFBLEdBQ0Y7SUFBQUEsMERBQUFBLEVBQUk7Ozs7SUFERkEsdURBQUFBLEdBQ0Y7SUFERUEsZ0VBQUFBLHVFQUNGOzs7Ozs7SUE3QlZBLDREQUFBQSxXQUE0QztJQU1oQ0Esb0RBQUFBLDRCQUNGO0lBQUFBLDBEQUFBQSxFQUFJO0lBQ0pBLHdEQUFBQSwwREFFSztJQUNMQSx3REFBQUEsd0RBQXFHO0lBQ3JHQSx3REFBQUEsd0RBRUk7SUFDSkEsd0RBQUFBLDBEQUdJO0lBRUpBLHdEQUFBQSwwREFTSTtJQUNOQSwwREFBQUEsRUFBTTtJQUNOQSw0REFBQUEsZUFBeUI7SUFDcEJBLHdEQUFBQTtNQUFBQSwyREFBQUE7TUFBQTtNQUFBLE9BQVNBLHlEQUFBQSxrQkFBUztJQUFBLEVBQUM7SUFBQ0Esb0RBQUFBLFlBQUk7SUFBQUEsMERBQUFBLEVBQUk7SUFDL0JBLDREQUFBQSxhQUdDO0lBRENBLHdEQUFBQTtNQUFBQSwyREFBQUE7TUFBQTtNQUFBLE9BQVNBLHlEQUFBQSxtQkFBVTtJQUFBLEVBQUM7SUFFcEJBLDREQUFBQSxFQU9DO0lBUERBLDREQUFBQSxlQU9DO0lBQ0NBLHVEQUFBQSxnQkFFRTtJQUNKQSwwREFBQUEsRUFBTTtJQUNOQSxvREFBQUEsaUJBQVE7SUFBQUEsMERBQUFBLEVBQ1Q7Ozs7SUExQ0lBLHVEQUFBQSxHQUE0QjtJQUE1QkEsd0RBQUFBLDhFQUE0QjtJQUc3QkEsdURBQUFBLEdBQStCO0lBQS9CQSx3REFBQUEsaUZBQStCO0lBQy9CQSx1REFBQUEsR0FBZ0M7SUFBaENBLHdEQUFBQSwyQ0FBZ0M7SUFHaENBLHVEQUFBQSxHQUE0QjtJQUE1QkEsd0RBQUFBLHVDQUE0QjtJQU83QkEsdURBQUFBLEdBSWY7SUFKZUEsd0RBQUFBLGlHQUlmOzs7OztJQTBDY0EsNERBQUFBLGlCQUF3RDtJQUN0REEsb0RBQUFBLEdBQ0Y7SUFBQUEsMERBQUFBLEVBQVM7Ozs7SUFGMEJBLHdEQUFBQSx5QkFBb0I7SUFDckRBLHVEQUFBQSxHQUNGO0lBREVBLGdFQUFBQSx5QkFDRjs7Ozs7SUFFRkEsNERBQUFBLGdCQU9DO0lBQ0NBLG9EQUFBQSxpQ0FDRjtJQUFBQSwwREFBQUEsRUFBUTs7Ozs7SUFjTkEsNERBQUFBLGdCQU9DO0lBQ0NBLG9EQUFBQSwrQkFDRjtJQUFBQSwwREFBQUEsRUFBUTs7Ozs7Ozs7Ozs7SUE5Q2xCQSw0REFBQUEsV0FBTTtJQUVGQSx3REFBQUE7TUFBQUEsMkRBQUFBO01BQUE7TUFBQSxPQUFZQSx5REFBQUEsbUJBQVU7SUFBQSxFQUFDO0lBSXZCQSw0REFBQUEsY0FBaUI7SUFHTUEsb0RBQUFBLHVCQUFnQjtJQUFBQSwwREFBQUEsRUFBUztJQUMxQ0Esd0RBQUFBLHlFQUVTO0lBQ1hBLDBEQUFBQSxFQUFTO0lBQ1RBLHdEQUFBQSx1RUFTUTtJQUNWQSwwREFBQUEsRUFBTTtJQUdSQSw0REFBQUEsZUFBaUI7SUFHWEEsdURBQUFBLGlCQU1FO0lBQ0ZBLHdEQUFBQSx5RUFTUTtJQVFWQSwwREFBQUEsRUFBTTtJQUlWQSw0REFBQUEsZUFBaUI7SUFFTkEsb0RBQUFBLGVBQU87SUFBQUEsMERBQUFBLEVBQVE7SUFDdEJBLHVEQUFBQSxvQkFBNEM7SUFDOUNBLDBEQUFBQSxFQUFNO0lBR1JBLDREQUFBQSxlQUFpQjtJQUUrQkEsb0RBQUFBLFlBQUk7SUFBQUEsMERBQUFBLEVBQVM7SUFDekRBLDREQUFBQSxlQUFnQztJQUNEQSxvREFBQUEsSUFBeUM7SUFBQUEsMERBQUFBLEVBQU07SUFDNUVBLDREQUFBQSxhQUFPO0lBRUhBLHdEQUFBQTtNQUFBQSwyREFBQUE7TUFBQTtNQUFBLE9BQWlCQSx5REFBQUEsNkJBQW9CO0lBQUEsRUFBQztNQUFBQSwyREFBQUE7TUFBQTtNQUFBO0lBQUE7SUFEeENBLDBEQUFBQSxFQUtFO0lBQ0ZBLHVEQUFBQSxnQkFBMkI7SUFDN0JBLDBEQUFBQSxFQUFROzs7OztJQTNFZEEsdURBQUFBLEdBQXlCO0lBQXpCQSx3REFBQUEsaUNBQXlCO0lBT01BLHVEQUFBQSxHQUFRO0lBQVJBLHdEQUFBQSx5QkFBUTtJQU1oQ0EsdURBQUFBLEdBS2Y7SUFMZUEsd0RBQUFBLG1HQUtmO0lBa0JpQkEsdURBQUFBLEdBS2pCO0lBTGlCQSx3REFBQUEsbUdBS2pCO0lBeUJtQkEsdURBQUFBLElBQXVCO0lBQXZCQSx5REFBQUEseUJBQXVCO0lBQUNBLHVEQUFBQSxHQUF5QztJQUF6Q0EsK0RBQUFBLCtDQUF5QztJQUtsRUEsdURBQUFBLEdBQW1CO0lBQW5CQSx3REFBQUEseUJBQW1COzs7QUQ3SS9CLE1BQU9sQixnQkFBZ0I7RUFXM0JtQixZQUFvQkMsTUFBbUIsRUFBVUMsS0FBa0I7SUFBL0MsV0FBTSxHQUFORCxNQUFNO0lBQXVCLFVBQUssR0FBTEMsS0FBSztJQVZ0RCxvQkFBZSxHQUFHLGFBQWE7SUFJL0IsVUFBSyxHQUFHSiw0REFBSztJQUViLFdBQU0sR0FBWSxLQUFLO0lBQ3ZCLGlCQUFZLEdBQVksS0FBSztJQUM3QixpQkFBWSxHQUFRLEVBQUU7SUFXdEIsZ0JBQVcsR0FBRyxJQUFJRixxREFBUyxDQUFDO01BQzFCTyxRQUFRLEVBQUUsSUFBSVIsdURBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQ0UsK0RBQW1CLENBQUMsQ0FBQztNQUNwRFEsUUFBUSxFQUFFLElBQUlWLHVEQUFXLENBQUMsRUFBRSxFQUFFLENBQUNFLCtEQUFtQixDQUFDLENBQUM7TUFDcERTLElBQUksRUFBRSxJQUFJWCx1REFBVyxDQUFDLEVBQUU7S0FDekIsQ0FBQztJQVpBWSxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUVDLE1BQVcsSUFBSTtNQUN2RDtNQUVBLElBQUksQ0FBQ0MsS0FBSyxHQUFHRCxNQUFNLENBQUNDLEtBQUs7TUFDM0I7SUFDQSxDQUFDLENBQUM7RUFDSjs7RUFVQSxJQUFJVixRQUFRO0lBQ1YsT0FBTyxJQUFJLENBQUNXLFdBQVcsQ0FBQ0osR0FBRyxDQUFDLE9BQU8sQ0FBQztFQUN0QztFQUNBLElBQUlMLFFBQVE7SUFDVixPQUFPLElBQUksQ0FBQ1MsV0FBVyxDQUFDSixHQUFHLENBQUMsVUFBVSxDQUFDO0VBQ3pDO0VBRUFLLGFBQWE7SUFDWCxJQUFJLENBQUNkLE1BQU0sQ0FBQ2UsZ0JBQWdCLEVBQUUsQ0FBQ0MsU0FBUyxDQUFDO01BQ3ZDQyxJQUFJLEVBQUdDLENBQU0sSUFBSTtRQUNmLElBQUksQ0FBQ0MsWUFBWSxHQUFHRCxDQUFDO1FBQ3JCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUNGLFlBQVksQ0FBQztNQUNoQyxDQUFDO01BQ0RHLEtBQUssRUFBR0MsR0FBUSxJQUFLSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsR0FBRztLQUNyQyxDQUFDO0VBQ0o7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBRUFDLE9BQU87SUFDTCxJQUFJLENBQUNDLFlBQVksR0FBRyxLQUFLO0VBQzNCO0VBRUFDLFlBQVksQ0FBQ0MsQ0FBTTtJQUNqQlAsT0FBTyxDQUFDQyxHQUFHLENBQUNNLENBQUMsQ0FBQztJQUNkckIsTUFBTSxDQUFDQyxPQUFPLENBQUNDLEtBQUssQ0FBQ29CLEdBQUcsQ0FBQztNQUFFaEIsS0FBSyxFQUFFZTtJQUFDLENBQUUsQ0FBQyxDQUFDakIsSUFBSSxDQUFDLE1BQUs7TUFDL0NVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGtCQUFrQixHQUFHTSxDQUFDLENBQUM7TUFDbkM7TUFDQTtNQUNBO01BQ0EsSUFBSUUsU0FBUyxHQUFRLEVBQUU7TUFDdkIsSUFBSSxDQUFDQyxlQUFlLEdBQUcsV0FBVztNQUNsQyxJQUFJQyxPQUFPLEdBQVEsRUFBRTtNQUNyQnpCLE1BQU0sQ0FBQzBCLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDQyxXQUFXLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLFlBQVksS0FBSTtRQUNyRWpCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyxPQUFPLEVBQUVHLFVBQVUsQ0FBQztRQUNoQ0QsWUFBWSxDQUFDO1VBQUVFLE9BQU8sRUFBRTtRQUFjLENBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUNDLGVBQWUsR0FBR0wsT0FBTyxFQUFFRyxVQUFVO1FBQzFDLElBQUcsSUFBSSxDQUFDRSxlQUFlLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUM7VUFDakNWLE9BQU8sQ0FBQyxJQUFJLENBQUNXLGVBQWUsQ0FBQyxHQUFHO1lBQzlCLEdBQUcsSUFBSSxDQUFDRjtXQUNUO1VBRURYLFNBQVMsQ0FBQyxJQUFJLENBQUNDLGVBQWUsQ0FBQyxHQUFHQyxPQUFPO1VBRXpDLElBQUksQ0FBQ1ksU0FBUyxDQUFDZCxTQUFTLENBQUM7O01BRzdCLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztFQUNKO0VBRUFjLFNBQVMsQ0FBQ2QsU0FBYztJQUN0QixJQUFJLENBQUM3QixNQUFNLENBQUM0QyxNQUFNLENBQUNmLFNBQVMsRUFBRSxJQUFJLENBQUNDLGVBQWUsQ0FBQyxDQUFDZCxTQUFTLENBQUM7TUFDNURDLElBQUksRUFBR0MsQ0FBTSxJQUFJO1FBQ2YsSUFBSSxDQUFDMkIsTUFBTSxHQUFHLEtBQUs7UUFDbkJ6QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUN3QixNQUFNLENBQUM7UUFDeEIsSUFBSSxDQUFDcEIsWUFBWSxHQUFHLElBQUk7UUFDeEJMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxDQUFDLENBQUM7TUFDaEIsQ0FBQztNQUNESSxLQUFLLEVBQUdDLEdBQVEsSUFBSTtRQUNsQixJQUFJLENBQUNzQixNQUFNLEdBQUcsS0FBSztRQUNuQixJQUFJLENBQUNwQixZQUFZLEdBQUcsS0FBSztRQUN6QkwsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEdBQUcsQ0FBQztNQUNsQjtLQUNELENBQUM7RUFDSjtFQUVBdUIsUUFBUSxDQUFDQyxHQUFHLEdBQUMsOEJBQThCO0lBQ3pDekMsTUFBTSxDQUFDMEMsSUFBSSxDQUFDSixNQUFNLENBQUM7TUFDakJHLEdBQUcsRUFBRUEsR0FBRztNQUNSRSxRQUFRLEVBQUU7S0FDWCxDQUFDO0VBQ0o7RUFFTUMsUUFBUTtJQUFBO0lBQUE7TUFDWixJQUFJckIsU0FBUyxHQUFRLEVBQUU7TUFFdkIsSUFBSUUsT0FBTyxHQUFRLEVBQUU7TUFDckIsSUFBSTdCLFFBQVEsR0FBRyxLQUFJLENBQUNXLFdBQVcsRUFBRXNDLEtBQUssQ0FBQ2pELFFBQVE7TUFFL0MsSUFBSWtELFFBQVEsR0FBRztRQUNiLEdBQUcsS0FBSSxDQUFDdkMsV0FBVyxDQUFDc0M7T0FDckI7TUFFRCxLQUFJLENBQUNyQixlQUFlLEdBQUcsS0FBSSxDQUFDakIsV0FBVyxFQUFFc0MsS0FBSyxFQUFFakQsUUFBUTtNQUV4RCxJQUFJLEtBQUksQ0FBQ1csV0FBVyxDQUFDd0MsS0FBSyxFQUFFO1FBQzFCLElBQUksQ0FBQ0MsU0FBUyxDQUFDLFNBQVNoRCxNQUFNLENBQUMwQyxJQUFJLENBQUNPLEtBQUssQ0FBQztVQUN4Q0MsTUFBTSxFQUFFLElBQUk7VUFDWkMsYUFBYSxFQUFFO1NBQ2hCLENBQUM7UUFFRixLQUFJLENBQUNaLE1BQU0sR0FBRyxJQUFJO1FBRWxCekIsT0FBTyxDQUFDQyxHQUFHLENBQUNuQixRQUFRLENBQUM7UUFHckIsSUFBSUEsUUFBUSxJQUFJLEtBQUssRUFBRTtVQUNyQixLQUFJLENBQUNzQyxlQUFlLEdBQUc7WUFDckJPLEdBQUcsRUFBRU8sU0FBUyxDQUFDUCxHQUFHO1lBQ2xCVyxLQUFLLEVBQUVKLFNBQVMsQ0FBQ0ksS0FBSztZQUN0QkMsUUFBUSxFQUFFO1dBQ1g7VUFDRDVCLE9BQU8sQ0FBQyxLQUFJLENBQUNXLGVBQWUsQ0FBQyxHQUFHO1lBQzlCLEdBQUcsS0FBSSxDQUFDRixlQUFlO1lBQ3ZCLEdBQUdZO1dBQ0o7VUFDRHZCLFNBQVMsQ0FBQyxLQUFJLENBQUNDLGVBQWUsQ0FBQyxHQUFHQyxPQUFPO1VBQ3pDLEtBQUksQ0FBQ1ksU0FBUyxDQUFDZCxTQUFTLENBQUM7U0FDMUIsTUFBTSxJQUFJM0IsUUFBUSxJQUFJLGFBQWEsRUFBRTtVQUNwQyxLQUFJLENBQUMyQyxNQUFNLEdBQUcsS0FBSztVQUNuQixLQUFJLENBQUNwQixZQUFZLEdBQUcsSUFBSTtVQUV4Qm5CLE1BQU0sQ0FBQzBDLElBQUksQ0FBQ1ksV0FBVyxDQUNyQk4sU0FBUyxDQUFDTyxFQUFFLEVBQ1o7WUFBRXRCLE9BQU8sRUFBRXJDO1VBQVEsQ0FBRSxFQUNwQjRELFFBQVEsSUFBSTtZQUNYLElBQUl4RCxNQUFNLENBQUMwQixPQUFPLENBQUMrQixTQUFTLEVBQUU7Y0FDNUIzQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7O1lBRTVCRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ3lDLFFBQVEsQ0FBQztZQUNyQixLQUFJLENBQUN0QixlQUFlLEdBQUc7Y0FDckJrQixLQUFLLEVBQUVKLFNBQVMsQ0FBQ0ksS0FBSztjQUN0Qk0sV0FBVyxFQUFFRixRQUFRLEVBQUV2QixPQUFPO2NBQzlCb0IsUUFBUSxFQUFFO2FBQ1g7WUFFRDVCLE9BQU8sQ0FBQyxLQUFJLENBQUNXLGVBQWUsQ0FBQyxHQUFHO2NBQzlCLEdBQUdVLFFBQVE7Y0FDWCxHQUFHLEtBQUksQ0FBQ1o7YUFDVDtZQUVEWCxTQUFTLENBQUMsS0FBSSxDQUFDQyxlQUFlLENBQUMsR0FBR0MsT0FBTztZQUV6Q1gsT0FBTyxDQUFDQyxHQUFHLENBQUNRLFNBQVMsQ0FBQztZQUV0QixLQUFJLENBQUNjLFNBQVMsQ0FBQ2QsU0FBUyxDQUFDO1VBQzNCLENBQUMsQ0FDRjtTQUNGLE1BQU0sSUFBSTNCLFFBQVEsSUFBSSxhQUFhLElBQUlBLFFBQVEsSUFBSSxlQUFlLEVBQUU7VUFDbkUsS0FBSSxDQUFDMkMsTUFBTSxHQUFHLEtBQUs7VUFDbkIsS0FBSSxDQUFDcEIsWUFBWSxHQUFHLElBQUk7VUFFeEJuQixNQUFNLENBQUMwQyxJQUFJLENBQUNZLFdBQVcsQ0FDckJOLFNBQVMsQ0FBQ08sRUFBRSxFQUNaO1lBQUV0QixPQUFPLEVBQUVyQztVQUFRLENBQUUsRUFDcEI0RCxRQUFRLElBQUk7WUFDWCxJQUFJeEQsTUFBTSxDQUFDMEIsT0FBTyxDQUFDK0IsU0FBUyxFQUFFO2NBQzVCM0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDOztZQUU1QkQsT0FBTyxDQUFDQyxHQUFHLENBQUN5QyxRQUFRLENBQUM7WUFFckIsS0FBSSxDQUFDdEIsZUFBZSxHQUFHO2NBQ3JCeUIsTUFBTSxFQUFFSCxRQUFRLEVBQUV2QixPQUFPO2NBQ3pCb0IsUUFBUSxFQUFFO2FBQ1g7WUFDRDVCLE9BQU8sQ0FBQyxLQUFJLENBQUNXLGVBQWUsQ0FBQyxHQUFHO2NBQzlCLEdBQUcsS0FBSSxDQUFDRixlQUFlO2NBQ3ZCLEdBQUdZO2FBQ0o7WUFDRHZCLFNBQVMsQ0FBQyxLQUFJLENBQUNDLGVBQWUsQ0FBQyxHQUFHQyxPQUFPO1lBRXpDWCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1EsU0FBUyxDQUFDO1lBRXRCLEtBQUksQ0FBQ2MsU0FBUyxDQUFDZCxTQUFTLENBQUM7VUFDM0IsQ0FBQyxDQUNGO1VBRURFLE9BQU8sQ0FBQyxLQUFJLENBQUNXLGVBQWUsQ0FBQyxHQUFHO1lBQzlCLEdBQUdVO1dBQ0o7VUFFRHZCLFNBQVMsQ0FBQyxLQUFJLENBQUNDLGVBQWUsQ0FBQyxHQUFHQyxPQUFPO1VBQ3pDLEtBQUksQ0FBQ1ksU0FBUyxDQUFDZCxTQUFTLENBQUM7U0FDMUIsTUFBTSxJQUFJM0IsUUFBUSxJQUFJLGFBQWEsRUFBRTtVQUNwQyxLQUFJLENBQUMyQyxNQUFNLEdBQUcsS0FBSztVQUNuQixLQUFJLENBQUNwQixZQUFZLEdBQUcsSUFBSTtVQUV4Qm5CLE1BQU0sQ0FBQzBDLElBQUksQ0FBQ1ksV0FBVyxDQUNyQk4sU0FBUyxDQUFDTyxFQUFFLEVBQ1o7WUFBRXRCLE9BQU8sRUFBRXJDO1VBQVEsQ0FBRSxFQUNwQjRELFFBQVEsSUFBSTtZQUNYLElBQUl4RCxNQUFNLENBQUMwQixPQUFPLENBQUMrQixTQUFTLEVBQUU7Y0FDNUIzQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7O1lBRTVCRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ3lDLFFBQVEsQ0FBQztZQUNyQixLQUFJLENBQUN0QixlQUFlLEdBQUc7Y0FDckJrQixLQUFLLEVBQUVKLFNBQVMsQ0FBQ0ksS0FBSztjQUN0Qk0sV0FBVyxFQUFFRixRQUFRLEVBQUV2QixPQUFPO2NBQzlCb0IsUUFBUSxFQUFFO2FBQ1g7WUFFRDVCLE9BQU8sQ0FBQyxLQUFJLENBQUNXLGVBQWUsQ0FBQyxHQUFHO2NBQzlCLEdBQUdVLFFBQVE7Y0FDWCxHQUFHLEtBQUksQ0FBQ1o7YUFDVDtZQUVEWCxTQUFTLENBQUMsS0FBSSxDQUFDQyxlQUFlLENBQUMsR0FBR0MsT0FBTztZQUV6QyxLQUFJLENBQUNZLFNBQVMsQ0FBQ2QsU0FBUyxDQUFDO1VBQzNCLENBQUMsQ0FDRjtTQUNGLE1BQU0sSUFBSTNCLFFBQVEsS0FBSyxLQUFLLEVBQUU7VUFDN0JrQixPQUFPLENBQUNDLEdBQUcsQ0FBQ25CLFFBQVEsQ0FBQztVQUVyQixLQUFJLENBQUMyQyxNQUFNLEdBQUcsS0FBSztVQUNuQixLQUFJLENBQUNwQixZQUFZLEdBQUcsSUFBSTtVQUV4Qm5CLE1BQU0sQ0FBQzBDLElBQUksQ0FBQ1ksV0FBVyxDQUNyQk4sU0FBUyxDQUFDTyxFQUFFLEVBQ1o7WUFBRXRCLE9BQU8sRUFBRTtVQUFVLENBQUUsRUFDdEJ1QixRQUFRLElBQUk7WUFDWCxJQUFJeEQsTUFBTSxDQUFDMEIsT0FBTyxDQUFDK0IsU0FBUyxFQUFFO2NBQzVCM0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDOztZQUU1QkQsT0FBTyxDQUFDQyxHQUFHLENBQUN5QyxRQUFRLENBQUM7WUFDckIsS0FBSSxDQUFDdEIsZUFBZSxHQUFHO2NBQ3JCa0IsS0FBSyxFQUFFSixTQUFTLENBQUNJLEtBQUs7Y0FDdEJNLFdBQVcsRUFBRUYsUUFBUSxFQUFFdkIsT0FBTztjQUM5Qm9CLFFBQVEsRUFBRTthQUNYO1lBRUQ1QixPQUFPLENBQUMsS0FBSSxDQUFDVyxlQUFlLENBQUMsR0FBRztjQUM5QixHQUFHVSxRQUFRO2NBQ1gsR0FBRyxLQUFJLENBQUNaO2FBQ1Q7WUFFRFgsU0FBUyxDQUFDLEtBQUksQ0FBQ0MsZUFBZSxDQUFDLEdBQUdDLE9BQU87WUFDekMsS0FBSSxDQUFDWSxTQUFTLENBQUNkLFNBQVMsQ0FBQztVQUMzQixDQUFDLENBQ0Y7U0FDRixNQUFLLElBQUkzQixRQUFRLEtBQUssVUFBVSxFQUFFO1VBQ2pDa0IsT0FBTyxDQUFDQyxHQUFHLENBQUNuQixRQUFRLENBQUM7VUFFckIsS0FBSSxDQUFDMkMsTUFBTSxHQUFHLEtBQUs7VUFDbkIsS0FBSSxDQUFDcEIsWUFBWSxHQUFHLElBQUk7VUFFeEJuQixNQUFNLENBQUMwQyxJQUFJLENBQUNZLFdBQVcsQ0FDckJOLFNBQVMsQ0FBQ08sRUFBRSxFQUNaO1lBQUV0QixPQUFPLEVBQUU7VUFBZSxDQUFFLEVBQzNCdUIsUUFBUSxJQUFJO1lBQ1gsSUFBSXhELE1BQU0sQ0FBQzBCLE9BQU8sQ0FBQytCLFNBQVMsRUFBRTtjQUM1QjNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQzs7WUFFNUJELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDeUMsUUFBUSxDQUFDO1lBQ3JCLEtBQUksQ0FBQ3RCLGVBQWUsR0FBRztjQUNyQmtCLEtBQUssRUFBRUosU0FBUyxDQUFDSSxLQUFLO2NBQ3RCTSxXQUFXLEVBQUVGLFFBQVEsRUFBRXZCLE9BQU87Y0FDOUJvQixRQUFRLEVBQUU7YUFDWDtZQUVENUIsT0FBTyxDQUFDLEtBQUksQ0FBQ1csZUFBZSxDQUFDLEdBQUc7Y0FDOUIsR0FBR1UsUUFBUTtjQUNYLEdBQUcsS0FBSSxDQUFDWjthQUNUO1lBRURYLFNBQVMsQ0FBQyxLQUFJLENBQUNDLGVBQWUsQ0FBQyxHQUFHQyxPQUFPO1lBQ3pDLEtBQUksQ0FBQ1ksU0FBUyxDQUFDZCxTQUFTLENBQUM7VUFDM0IsQ0FBQyxDQUNGOzs7SUFFSjtFQUNIO0VBRUFxQyxNQUFNO0lBQ0osSUFBSSxDQUFDakUsS0FBSyxDQUFDaUUsTUFBTSxFQUFFO0VBQ3JCOztBQWpUV3RGLGdCQUFnQjttQkFBaEJBLGdCQUFnQjtBQUFBO0FBQWhCQSxnQkFBZ0I7UUFBaEJBLGdCQUFnQjtFQUFBdUY7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7SUFBQTtNQ1g3QnpFLDREQUFBQSxhQUEyQjtNQUN6QkEsd0RBQUFBLDBEQUdTO01BQ1RBLHdEQUFBQSxvREFjTTtNQUNOQSx3REFBQUEsdURBdURPO01BRVBBLHdEQUFBQSw2RUFBQUEsb0VBQUFBLENBcUZjO01BRWRBLDREQUFBQSxhQUFRO01BRUpBLHVEQUFBQSxhQUFtRDtNQUNyREEsMERBQUFBLEVBQU07Ozs7TUF0S0NBLHVEQUFBQSxHQUFtQjtNQUFuQkEsd0RBQUFBLDJCQUFtQjtNQUl0QkEsdURBQUFBLEdBQVk7TUFBWkEsd0RBQUFBLG9CQUFZO01BZVhBLHVEQUFBQSxHQUFvQjtNQUFwQkEsd0RBQUFBLDBCQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQjhCOzs7O0FBRzNELE1BQU0yRSxPQUFPLEdBQUdELDZFQUFtQjtBQUs3QixNQUFPRSxXQUFXO0VBRXRCM0UsWUFBb0I0RSxJQUFnQixFQUFVMUUsS0FBa0I7SUFBNUMsU0FBSSxHQUFKMEUsSUFBSTtJQUFzQixVQUFLLEdBQUwxRSxLQUFLO0VBQWlCO0VBRXBFMkUsTUFBTSxDQUFDQyxRQUFnQixFQUFFQyxTQUFTLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQUcsRUFBRTtJQUNuRCxPQUFPLElBQUksQ0FBQ0osSUFBSSxDQUFDbEUsR0FBRyxDQUNsQmdFLE9BQU8sR0FBRyx3QkFBd0JJLFFBQVEsU0FBU0MsU0FBUyxXQUFXQyxRQUFRLEVBQUUsQ0FDbEY7RUFDSDtFQUVBaEUsZ0JBQWdCO0lBQ2QsT0FBTyxJQUFJLENBQUM0RCxJQUFJLENBQUNsRSxHQUFHLENBQ2xCZ0UsT0FBTyxHQUFHLGtDQUFrQyxDQUM3QztFQUNIO0VBRUFPLE9BQU8sQ0FBRW5CLEVBQVM7SUFDaEIsT0FBTyxJQUFJLENBQUNjLElBQUksQ0FBQ2xFLEdBQUcsQ0FDbEJnRSxPQUFPLEdBQUcsc0JBQXNCWixFQUFFLEVBQUUsQ0FDckM7RUFDSDtFQUVBb0IsTUFBTSxDQUFFQyxPQUFjLEVBQUVDLE9BQVksRUFBRSxFQUFFckQsZUFBZSxHQUFHLFlBQVk7SUFDcEUsT0FBTyxJQUFJLENBQUM2QyxJQUFJLENBQUNsRSxHQUFHLENBQ2xCZ0UsT0FBTyxHQUFHLDBCQUEwQjNDLGVBQWUsV0FBV29ELE9BQU8sU0FBU0MsSUFBSSxFQUFFLENBQ3JGO0VBQ0g7RUFFQUMsV0FBVyxDQUFDQyxTQUFpQixFQUFFUCxTQUFTLEdBQUcsQ0FBQztJQUMxQyxPQUFPLElBQUksQ0FBQ0gsSUFBSSxDQUFDbEUsR0FBRyxDQUNsQmdFLE9BQU8sR0FBRyx1QkFBdUJZLFNBQVMsU0FBU1AsU0FBUyxFQUFFLENBQy9EO0VBQ0g7RUFFQVEsWUFBWSxDQUFDekIsRUFBVTtJQUNyQixPQUFPLElBQUksQ0FBQ2MsSUFBSSxDQUFDWSxJQUFJLENBQ25CZCxPQUFPLEdBQUcsYUFBYVosRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUNoQztFQUNIO0VBRUFqQixNQUFNLENBQUM0QyxJQUFTLEVBQUVYLFdBQWlCLEVBQUU7SUFDbkMsT0FBTyxJQUFJLENBQUNGLElBQUksQ0FBQ1ksSUFBSSxDQUNuQmQsT0FBTyxHQUFHLFdBQVcsRUFBRWUsSUFBSSxDQUM1QjtFQUNIO0VBRUFDLFlBQVksQ0FBQ0QsSUFBUyxFQUFFWCxXQUFpQixFQUFFO0lBQ3pDLE9BQU8sSUFBSSxDQUFDRixJQUFJLENBQUNZLElBQUksQ0FDbkJkLE9BQU8sR0FBRyx1QkFBdUIsRUFBRWUsSUFBSSxDQUN4QztFQUNIO0VBRUFFLE1BQU0sQ0FBQ0YsSUFBUztJQUNkLE9BQU8sSUFBSSxDQUFDYixJQUFJLENBQUNZLElBQUksQ0FDbkJkLE9BQU8sR0FBRyxrQkFBa0IsRUFBRWUsSUFBSSxDQUNuQztFQUNIO0VBRUFHLFdBQVcsQ0FBQ0gsSUFBUztJQUNuQixPQUFPLElBQUksQ0FBQ2IsSUFBSSxDQUFDWSxJQUFJLENBQ25CZCxPQUFPLEdBQUcsZ0JBQWdCLEVBQUVlLElBQUksQ0FDakM7RUFDSDtFQUVBSSxVQUFVLENBQUNKLElBQVM7SUFDbEIsT0FBTyxJQUFJLENBQUNiLElBQUksQ0FBQ1ksSUFBSSxDQUNuQmQsT0FBTyxHQUFHLGVBQWUsRUFBRWUsSUFBSSxDQUNoQztFQUNIO0VBRUFLLFVBQVUsQ0FBQ2hDLEVBQVU7SUFDbkIsT0FBTyxJQUFJLENBQUNjLElBQUksQ0FBQ2xFLEdBQUcsQ0FBQ2dFLE9BQU8sR0FBRyxzQkFBc0JaLEVBQUUsRUFBRSxDQUFDO0VBQzVEOztBQXhFV2EsV0FBVzttQkFBWEEsV0FBVztBQUFBO0FBQVhBLFdBQVc7U0FBWEEsV0FBVztFQUFBb0IsU0FBWHBCLFdBQVc7RUFBQXFCLFlBRlY7QUFBTTs7Ozs7Ozs7Ozs7Ozs7QUNSYixNQUFNbEcsS0FBSyxHQUFRLENBQ3RCO0VBQUNtRyxJQUFJLEVBQUUsY0FBYztFQUFFN0MsS0FBSyxFQUFFO0FBQUssQ0FBQyxFQUNwQztFQUFDNkMsSUFBSSxFQUFFLGFBQWE7RUFBRTdDLEtBQUssRUFBRTtBQUFhLENBQUMsRUFDM0M7RUFBQzZDLElBQUksRUFBRSxhQUFhO0VBQUU3QyxLQUFLLEVBQUU7QUFBYSxDQUFDLEVBQzNDO0VBQUM2QyxJQUFJLEVBQUUsZUFBZTtFQUFFN0MsS0FBSyxFQUFFO0FBQWUsQ0FBQyxFQUMvQztFQUFDNkMsSUFBSSxFQUFFLGFBQWE7RUFBRTdDLEtBQUssRUFBRTtBQUFhLENBQUMsRUFDM0M7RUFBQzZDLElBQUksRUFBRSxLQUFLO0VBQUU3QyxLQUFLLEVBQUU7QUFBSyxDQUFDLEVBQzNCO0VBQUM2QyxJQUFJLEVBQUUsd0JBQXdCO0VBQUU3QyxLQUFLLEVBQUU7QUFBVSxDQUFDLENBQ3BEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5ndWxhci1jaHJvbWUtZXh0ZW5zaW9uLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9vcHRpb25zLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovL2FuZ3VsYXItY2hyb21lLWV4dGVuc2lvbi8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL29wdGlvbnMvb3B0aW9ucy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vYW5ndWxhci1jaHJvbWUtZXh0ZW5zaW9uLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9wYWdlcy9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50LnRzIiwid2VicGFjazovL2FuZ3VsYXItY2hyb21lLWV4dGVuc2lvbi8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL29wdGlvbnMvcGFnZXMvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovL2FuZ3VsYXItY2hyb21lLWV4dGVuc2lvbi8uL2FuZ3VsYXIvc3JjL2FwcC9zZXJ2aWNlcy9pdGVtLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vYW5ndWxhci1jaHJvbWUtZXh0ZW5zaW9uLy4vYW5ndWxhci9zcmMvYXBwL3NoYXJlZC9kYXRhL3R5cGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPcHRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJyxcbiAgICBjb21wb25lbnQ6IE9wdGlvbnNDb21wb25lbnRcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgT3B0aW9uc1JvdXRpbmdNb2R1bGUge31cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPcHRpb25zUm91dGluZ01vZHVsZSB9IGZyb20gJy4vb3B0aW9ucy1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBPcHRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbT3B0aW9uc0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE9wdGlvbnNSb3V0aW5nTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgT3B0aW9uc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcInNyYy9hcHAvc2VydmljZXMvaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gXCJzcmMvYXBwL3NoYXJlZC9kYXRhL3R5cGVzXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtb3B0aW9uc1wiLFxuICB0ZW1wbGF0ZVVybDogXCJvcHRpb25zLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wib3B0aW9ucy5jb21wb25lbnQuc2Nzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgT3B0aW9uc0NvbXBvbmVudCB7XG4gIHdyYXBDb21wb3NpdGlvbiA9IFwic2NyYXBlLWRhdGFcIjtcbiAgY29tcG9zaXRpb25OYW1lOiBhbnk7XG4gIHRyYWNlITogYm9vbGVhbjtcblxuICB0eXBlcyA9IFRZUEVTO1xuXG4gIGxvYWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBzYXZlX3N1Y2Nlc3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgY2F0ZWdvcnlMaXN0OiBhbnkgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pdGVtczogSXRlbVNlcnZpY2UsIHByaXZhdGUgX2F1dGg6IEF1dGhTZXJ2aWNlKSB7XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcInRyYWNlXCJdKS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgLy9jb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgICB0aGlzLnRyYWNlID0gcmVzdWx0LnRyYWNlO1xuICAgIC8vICBjb25zb2xlLmxvZyhyZXN1bHQudHJhY2UpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc29sZUZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICBkYXRhVHlwZTogbmV3IEZvcm1Db250cm9sKFwiXCIsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSksXG4gICAgY2F0ZWdvcnk6IG5ldyBGb3JtQ29udHJvbChcIlwiLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF0pLFxuICAgIG5vdGU6IG5ldyBGb3JtQ29udHJvbChcIlwiKSxcbiAgfSk7XG5cbiAgY29tcG9zaXRpb25EYXRhOiBhbnk7XG5cbiAgZ2V0IGRhdGFUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNvbGVGb3JtLmdldChcImVtYWlsXCIpO1xuICB9XG4gIGdldCBjYXRlZ29yeSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zb2xlRm9ybS5nZXQoXCJwYXNzd29yZFwiKTtcbiAgfVxuXG4gIGdldENhdGVnb3JpZXMoKSB7XG4gICAgdGhpcy5faXRlbXMuZ2V0QWxsQ2F0ZWdvcmllcygpLnN1YnNjcmliZSh7XG4gICAgICBuZXh0OiAoeDogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlMaXN0ID0geDtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jYXRlZ29yeUxpc3QpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKGVyciksXG4gICAgfSk7XG4gIH1cblxuICAvLyBhdXRvQ29tcGxldGUoZTphbnkpe1xuICAvLyAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyAgIGlmKHRoaXMuY2F0ZWdvcnlMaXN0Py5sZW5ndGggPT0gMCl7XG4gIC8vICAgICB0aGlzLmdldENhdGVnb3JpZXMoKTtcbiAgLy8gICB9XG4gIC8vIH1cblxuICAvLyBhdXRvY29tcGxldGVfc2VsZWN0KHRleHQ6c3RyaW5nKXtcbiAgLy8gICB0aGlzLmNvbnNvbGVGb3JtLnBhdGNoVmFsdWUoe1xuICAvLyAgICAgY2F0ZWdvcnk6IHRleHRcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIGFkZE1vcmUoKSB7XG4gICAgdGhpcy5zYXZlX3N1Y2Nlc3MgPSBmYWxzZTtcbiAgfVxuXG4gIHRyYWNlQ2hhbmdlZChlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyB0cmFjZTogZSB9KS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVmFsdWUgaXMgc2V0IHRvIFwiICsgZSk7XG4gICAgICAvLyBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHRyYWNlOiBlfSwgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgLy8gfSk7XG4gICAgICBsZXQgZmluYWxEYXRhOiBhbnkgPSB7fTtcbiAgICAgIHRoaXMuY29tcG9zaXRpb25OYW1lID0gXCJ0cmFjZV91cmxcIjtcbiAgICAgIGxldCB0YWJEYXRhOiBhbnkgPSB7fTtcbiAgICAgIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdD8udHJhY2VkVXJscyk7XG4gICAgICAgIHNlbmRSZXNwb25zZSh7IG1lc3NhZ2U6IFwiVHJhY2VkIFVybHMuXCIgfSk7XG4gICAgICAgIHRoaXMuY29tcG9zaXRpb25EYXRhID0gcmVxdWVzdD8udHJhY2VkVXJscztcbiAgICAgICAgaWYodGhpcy5jb21wb3NpdGlvbkRhdGEubGVuZ3RoID4gMCl7XG4gICAgICAgICAgdGFiRGF0YVt0aGlzLndyYXBDb21wb3NpdGlvbl0gPSB7XG4gICAgICAgICAgICAuLi50aGlzLmNvbXBvc2l0aW9uRGF0YSxcbiAgICAgICAgICB9O1xuICBcbiAgICAgICAgICBmaW5hbERhdGFbdGhpcy5jb21wb3NpdGlvbk5hbWVdID0gdGFiRGF0YTtcbiAgXG4gICAgICAgICAgdGhpcy5jcmVhdGVBUEkoZmluYWxEYXRhKTtcbiAgICAgICAgfVxuIFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVBUEkoZmluYWxEYXRhOiBhbnkpIHtcbiAgICB0aGlzLl9pdGVtcy5jcmVhdGUoZmluYWxEYXRhLCB0aGlzLmNvbXBvc2l0aW9uTmFtZSkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6ICh4OiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2FkZXIpO1xuICAgICAgICB0aGlzLnNhdmVfc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHgpO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zYXZlX3N1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBvcGVuU2l0ZSh1cmw9J2h0dHBzOi8vYmV0YS5ib29tY29uY29sZS5jb20nKXtcbiAgICBjaHJvbWUudGFicy5jcmVhdGUoe1xuICAgICAgdXJsOiB1cmwsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgc2F2ZURhdGEoKSB7XG4gICAgbGV0IGZpbmFsRGF0YTogYW55ID0ge307XG5cbiAgICBsZXQgdGFiRGF0YTogYW55ID0ge307XG4gICAgbGV0IGRhdGFUeXBlID0gdGhpcy5jb25zb2xlRm9ybT8udmFsdWUuZGF0YVR5cGU7XG5cbiAgICBsZXQgZm9ybURhdGEgPSB7XG4gICAgICAuLi50aGlzLmNvbnNvbGVGb3JtLnZhbHVlLFxuICAgIH07XG5cbiAgICB0aGlzLmNvbXBvc2l0aW9uTmFtZSA9IHRoaXMuY29uc29sZUZvcm0/LnZhbHVlPy5kYXRhVHlwZTtcblxuICAgIGlmICh0aGlzLmNvbnNvbGVGb3JtLnZhbGlkKSB7XG4gICAgICBsZXQgW2FjdGl2ZVRhYl0gPSBhd2FpdCBjaHJvbWUudGFicy5xdWVyeSh7XG4gICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgY3VycmVudFdpbmRvdzogdHJ1ZSxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmxvYWRlciA9IHRydWU7XG5cbiAgICAgIGNvbnNvbGUubG9nKGRhdGFUeXBlKTtcbiAgICAgIFxuXG4gICAgICBpZiAoZGF0YVR5cGUgPT0gXCJ1cmxcIikge1xuICAgICAgICB0aGlzLmNvbXBvc2l0aW9uRGF0YSA9IHtcbiAgICAgICAgICB1cmw6IGFjdGl2ZVRhYi51cmwsXG4gICAgICAgICAgdGl0bGU6IGFjdGl2ZVRhYi50aXRsZSxcbiAgICAgICAgICBjb21tZW50czogW11cbiAgICAgICAgfTtcbiAgICAgICAgdGFiRGF0YVt0aGlzLndyYXBDb21wb3NpdGlvbl0gPSB7XG4gICAgICAgICAgLi4udGhpcy5jb21wb3NpdGlvbkRhdGEsXG4gICAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgIH07XG4gICAgICAgIGZpbmFsRGF0YVt0aGlzLmNvbXBvc2l0aW9uTmFtZV0gPSB0YWJEYXRhO1xuICAgICAgICB0aGlzLmNyZWF0ZUFQSShmaW5hbERhdGEpO1xuICAgICAgfSBlbHNlIGlmIChkYXRhVHlwZSA9PSBcInZpc3VhbF90ZXh0XCIpIHtcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zYXZlX3N1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKFxuICAgICAgICAgIGFjdGl2ZVRhYi5pZCxcbiAgICAgICAgICB7IG1lc3NhZ2U6IGRhdGFUeXBlIH0sXG4gICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZm91bmRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvc2l0aW9uRGF0YSA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6IGFjdGl2ZVRhYi50aXRsZSxcbiAgICAgICAgICAgICAgdmlzdWFsX3RleHQ6IHJlc3BvbnNlPy5tZXNzYWdlLFxuICAgICAgICAgICAgICBjb21tZW50czogW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRhYkRhdGFbdGhpcy53cmFwQ29tcG9zaXRpb25dID0ge1xuICAgICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgICAgLi4udGhpcy5jb21wb3NpdGlvbkRhdGEsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmaW5hbERhdGFbdGhpcy5jb21wb3NpdGlvbk5hbWVdID0gdGFiRGF0YTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coZmluYWxEYXRhKTtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVBUEkoZmluYWxEYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFUeXBlID09IFwib25seV9pbWFnZXNcIiB8fCBkYXRhVHlwZSA9PSBcInRleHRfcGljdHVyZXNcIikge1xuICAgICAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNhdmVfc3VjY2VzcyA9IHRydWU7XG5cbiAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgYWN0aXZlVGFiLmlkLFxuICAgICAgICAgIHsgbWVzc2FnZTogZGF0YVR5cGUgfSxcbiAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBmb3VuZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgdGhpcy5jb21wb3NpdGlvbkRhdGEgPSB7XG4gICAgICAgICAgICAgIGltYWdlczogcmVzcG9uc2U/Lm1lc3NhZ2UsXG4gICAgICAgICAgICAgIGNvbW1lbnRzOiBbXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRhYkRhdGFbdGhpcy53cmFwQ29tcG9zaXRpb25dID0ge1xuICAgICAgICAgICAgICAuLi50aGlzLmNvbXBvc2l0aW9uRGF0YSxcbiAgICAgICAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZmluYWxEYXRhW3RoaXMuY29tcG9zaXRpb25OYW1lXSA9IHRhYkRhdGE7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbmFsRGF0YSk7XG5cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQVBJKGZpbmFsRGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIHRhYkRhdGFbdGhpcy53cmFwQ29tcG9zaXRpb25dID0ge1xuICAgICAgICAgIC4uLmZvcm1EYXRhLFxuICAgICAgICB9O1xuXG4gICAgICAgIGZpbmFsRGF0YVt0aGlzLmNvbXBvc2l0aW9uTmFtZV0gPSB0YWJEYXRhO1xuICAgICAgICB0aGlzLmNyZWF0ZUFQSShmaW5hbERhdGEpO1xuICAgICAgfSBlbHNlIGlmIChkYXRhVHlwZSA9PSBcImFsbF9idXRfY3NzXCIpIHtcbiAgICAgICAgdGhpcy5sb2FkZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zYXZlX3N1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKFxuICAgICAgICAgIGFjdGl2ZVRhYi5pZCxcbiAgICAgICAgICB7IG1lc3NhZ2U6IGRhdGFUeXBlIH0sXG4gICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZm91bmRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvc2l0aW9uRGF0YSA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6IGFjdGl2ZVRhYi50aXRsZSxcbiAgICAgICAgICAgICAgdmlzdWFsX3RleHQ6IHJlc3BvbnNlPy5tZXNzYWdlLFxuICAgICAgICAgICAgICBjb21tZW50czogW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRhYkRhdGFbdGhpcy53cmFwQ29tcG9zaXRpb25dID0ge1xuICAgICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgICAgLi4udGhpcy5jb21wb3NpdGlvbkRhdGEsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmaW5hbERhdGFbdGhpcy5jb21wb3NpdGlvbk5hbWVdID0gdGFiRGF0YTtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVBUEkoZmluYWxEYXRhKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGFUeXBlID09PSBcImFsbFwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFUeXBlKTtcblxuICAgICAgICB0aGlzLmxvYWRlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNhdmVfc3VjY2VzcyA9IHRydWU7XG5cbiAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UoXG4gICAgICAgICAgYWN0aXZlVGFiLmlkLFxuICAgICAgICAgIHsgbWVzc2FnZTogXCJhbGxfZGF0YVwiIH0sXG4gICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgZm91bmRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBvc2l0aW9uRGF0YSA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6IGFjdGl2ZVRhYi50aXRsZSxcbiAgICAgICAgICAgICAgdmlzdWFsX3RleHQ6IHJlc3BvbnNlPy5tZXNzYWdlLFxuICAgICAgICAgICAgICBjb21tZW50czogW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRhYkRhdGFbdGhpcy53cmFwQ29tcG9zaXRpb25dID0ge1xuICAgICAgICAgICAgICAuLi5mb3JtRGF0YSxcbiAgICAgICAgICAgICAgLi4udGhpcy5jb21wb3NpdGlvbkRhdGEsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmaW5hbERhdGFbdGhpcy5jb21wb3NpdGlvbk5hbWVdID0gdGFiRGF0YTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQVBJKGZpbmFsRGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfWVsc2UgaWYgKGRhdGFUeXBlID09PSBcImNoYXRfZ3B0XCIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YVR5cGUpO1xuXG4gICAgICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2F2ZV9zdWNjZXNzID0gdHJ1ZTtcblxuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShcbiAgICAgICAgICBhY3RpdmVUYWIuaWQsXG4gICAgICAgICAgeyBtZXNzYWdlOiBcImNoYXRfZ3B0X2RhdGFcIiB9LFxuICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIGZvdW5kXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5jb21wb3NpdGlvbkRhdGEgPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiBhY3RpdmVUYWIudGl0bGUsXG4gICAgICAgICAgICAgIHZpc3VhbF90ZXh0OiByZXNwb25zZT8ubWVzc2FnZSxcbiAgICAgICAgICAgICAgY29tbWVudHM6IFtdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0YWJEYXRhW3RoaXMud3JhcENvbXBvc2l0aW9uXSA9IHtcbiAgICAgICAgICAgICAgLi4uZm9ybURhdGEsXG4gICAgICAgICAgICAgIC4uLnRoaXMuY29tcG9zaXRpb25EYXRhLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZmluYWxEYXRhW3RoaXMuY29tcG9zaXRpb25OYW1lXSA9IHRhYkRhdGE7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUFQSShmaW5hbERhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsb2dvdXQoKXtcbiAgICB0aGlzLl9hdXRoLmxvZ291dCgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwicG9wdXAtd3JhcHBlclwiPlxuICA8aGVhZGVyICpuZ0lmPVwiIXNhdmVfc3VjY2Vzc1wiIGNsYXNzPVwiaGVhZGluZ1wiPlxuICAgIDxoMz5MZXQncyBTdGFydDwvaDM+XG4gICAgPGEgKGNsaWNrKT1cImxvZ291dCgpXCI+TG9nb3V0PC9hPlxuICA8L2hlYWRlcj5cbiAgPGRpdiAqbmdJZj1cImxvYWRlclwiIGNsYXNzPVwibG9hZGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInByZWxvYWRlci13cmFwcGVyIGFjdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgc3Bpbm5lci1yZWQtb25seVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzcz1cImdhcC1wYXRjaFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxtYWluICpuZ0lmPVwic2F2ZV9zdWNjZXNzOyBlbHNlIG5vdFN1Y2Nlc3NcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sIHMxMiBtN1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxwIHN0eWxlPVwicGFkZGluZzogOHB4XCIgY2xhc3M9XCJncmVlbiBsaWdodGVuLTRcIj5cbiAgICAgICAgICAgICAgQWRkZWQgU3VjY2Vzc2Z1bGx5IVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGg1ICpuZ0lmPVwiY29tcG9zaXRpb25EYXRhPy50aXRsZVwiPlxuICAgICAgICAgICAgICB7eyBjb21wb3NpdGlvbkRhdGE/LnRpdGxlIH19XG4gICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPHAgKm5nSWY9XCJjb21wb3NpdGlvbkRhdGE/LmRhdGFUeXBlXCI+PHN0cm9uZz5EYXRhIHR5cGU6PC9zdHJvbmc+IHt7IGNvbnNvbGVGb3JtLnZhbHVlLmRhdGFUeXBlIH19PC9wPlxuICAgICAgICAgICAgPHAgKm5nSWY9XCJjb25zb2xlRm9ybS52YWx1ZS5jYXRlZ29yeVwiPlxuICAgICAgICAgICAgICA8c3Ryb25nPkNhdGVnb3J5Ojwvc3Ryb25nPiB7eyBjb25zb2xlRm9ybS52YWx1ZS5jYXRlZ29yeSB9fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgKm5nSWY9XCJjb25zb2xlRm9ybS52YWx1ZS5ub3RlXCI+XG4gICAgICAgICAgICAgIDxzdHJvbmc+Q29tbWVudHM6PC9zdHJvbmc+IDxiciAvPlxuICAgICAgICAgICAgICB7eyBjb25zb2xlRm9ybS52YWx1ZS5ub3RlIH19XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGNsYXNzPVwib3ZlcmZsb3ctd3JhcFwiXG4gICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgISFjb21wb3NpdGlvbkRhdGEgJiZcbiAgICAgICAgICAgICAgICAhIWNvbXBvc2l0aW9uRGF0YVtjb25zb2xlRm9ybS52YWx1ZS5kYXRhVHlwZV1cbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN0cm9uZz5EYXRhIHR5cGU6PC9zdHJvbmc+XG4gICAgICAgICAgICAgIHt7IGNvbXBvc2l0aW9uRGF0YVtjb25zb2xlRm9ybS52YWx1ZS5kYXRhVHlwZV0gfX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25cIj5cbiAgICAgICAgICAgIDxhIChjbGljayk9XCJhZGRNb3JlKClcIj5CYWNrPC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3M9XCJmbG9hdC1yaWdodCBtLTBcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwib3BlblNpdGUoKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJiaSBiaS1ncmlkXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBkPVwiTTEgMi41QTEuNSAxLjUgMCAwIDEgMi41IDFoM0ExLjUgMS41IDAgMCAxIDcgMi41djNBMS41IDEuNSAwIDAgMSA1LjUgN2gtM0ExLjUgMS41IDAgMCAxIDEgNS41di0zek0yLjUgMmEuNS41IDAgMCAwLS41LjV2M2EuNS41IDAgMCAwIC41LjVoM2EuNS41IDAgMCAwIC41LS41di0zYS41LjUgMCAwIDAtLjUtLjVoLTN6bTYuNS41QTEuNSAxLjUgMCAwIDEgMTAuNSAxaDNBMS41IDEuNSAwIDAgMSAxNSAyLjV2M0ExLjUgMS41IDAgMCAxIDEzLjUgN2gtM0ExLjUgMS41IDAgMCAxIDkgNS41di0zem0xLjUtLjVhLjUuNSAwIDAgMC0uNS41djNhLjUuNSAwIDAgMCAuNS41aDNhLjUuNSAwIDAgMCAuNS0uNXYtM2EuNS41IDAgMCAwLS41LS41aC0zek0xIDEwLjVBMS41IDEuNSAwIDAgMSAyLjUgOWgzQTEuNSAxLjUgMCAwIDEgNyAxMC41djNBMS41IDEuNSAwIDAgMSA1LjUgMTVoLTNBMS41IDEuNSAwIDAgMSAxIDEzLjV2LTN6bTEuNS0uNWEuNS41IDAgMCAwLS41LjV2M2EuNS41IDAgMCAwIC41LjVoM2EuNS41IDAgMCAwIC41LS41di0zYS41LjUgMCAwIDAtLjUtLjVoLTN6bTYuNS41QTEuNSAxLjUgMCAwIDEgMTAuNSA5aDNhMS41IDEuNSAwIDAgMSAxLjUgMS41djNhMS41IDEuNSAwIDAgMS0xLjUgMS41aC0zQTEuNSAxLjUgMCAwIDEgOSAxMy41di0zem0xLjUtLjVhLjUuNSAwIDAgMC0uNS41djNhLjUuNSAwIDAgMCAuNS41aDNhLjUuNSAwIDAgMCAuNS0uNXYtM2EuNS41IDAgMCAwLS41LS41aC0zelwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIFZpZXcgQWxsPC9hXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbWFpbj5cblxuICA8bmctdGVtcGxhdGUgI25vdFN1Y2Nlc3M+XG4gICAgPG1haW4+XG4gICAgICA8Zm9ybVxuICAgICAgICAobmdTdWJtaXQpPVwic2F2ZURhdGEoKVwiXG4gICAgICAgIFtmb3JtR3JvdXBdPVwiY29uc29sZUZvcm1cIlxuICAgICAgICAjY29uc29sZUZvcm1JZD1cIm5nRm9ybVwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHMxMlwiPlxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImJyb3dzZXItZGVmYXVsdFwiIGZvcm1Db250cm9sTmFtZT1cImRhdGFUeXBlXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5DaG9vc2UgYWN0aW9uLi4uPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGl0ZW0gb2YgdHlwZXNcIiBbdmFsdWVdPVwiaXRlbS52YWx1ZVwiPlxuICAgICAgICAgICAgICAgIHt7IGl0ZW0udGV4dCB9fVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPHNtYWxsXG4gICAgICAgICAgICAgIGNsYXNzPVwiZXJyX21zZ1wiXG4gICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgZGF0YVR5cGUgJiZcbiAgICAgICAgICAgICAgICBkYXRhVHlwZS5pbnZhbGlkICYmXG4gICAgICAgICAgICAgICAgKGRhdGFUeXBlLnRvdWNoZWQgfHwgY29uc29sZUZvcm1JZC5zdWJtaXR0ZWQpXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFBsZWFzZSBzZWxlY3QgYW4gb3B0aW9uLlxuICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1maWVsZCBjb2wtMTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRvY29tcGxldGVfbGlzdF93cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnJvd3Nlci1kZWZhdWx0IGF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNtYWxsXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJlcnJfbXNnXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgJiZcbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LmludmFsaWQgJiZcbiAgICAgICAgICAgICAgICAgIChjYXRlZ29yeS50b3VjaGVkIHx8IGNvbnNvbGVGb3JtSWQuc3VibWl0dGVkKVxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgY2F0ZWdvcnkuXG4gICAgICAgICAgICAgIDwvc21hbGw+XG5cbiAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiYXV0b2NvbXBsZXRlX2xpc3RcIiAqbmdJZj1cImNhdGVnb3J5TGlzdC5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjYXRlZ29yeUxpc3RcIj5cbiAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJhdXRvY29tcGxldGVfc2VsZWN0KGl0ZW0uY2hhcmFjdGVyX3ZhbHVlKVwiPjwvYVxuICAgICAgICAgICAgICAgICAgPnt7IGl0ZW0uY2hhcmFjdGVyX3ZhbHVlIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PiAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGxhYmVsPkNvbW1lbnQ8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIGZvcm1Db250cm9sTmFtZT1cIm5vdGVcIj48L3RleHRhcmVhPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBzMTJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxhcmdlXCIgdHlwZT1cInN1Ym1pdFwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzd2l0Y2ggZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgPGRpdiBbY2xhc3MudHJhY2luZ109XCJ0cmFjZVwiPnt7dHJhY2U/ICdUcmFjaW5nLi4uJyA6ICdTdGFydCBUcmFjaW5nJ319PC9kaXY+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInRyYWNlQ2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInRyYWNlXCJcbiAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxldmVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvbWFpbj5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8Zm9vdGVyPlxuICAgIDxkaXYgY2xhc3M9XCJsb2dvIHRleHQtcmlnaHRcIj5cbiAgICAgIDxpbWcgd2lkdGg9XCIxMjBweFwiIHNyYz1cIi4vYXNzZXRzL2ljb25zL2xvZ28ucG5nXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9mb290ZXI+XG48L2Rpdj5cbiIsImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBlbnZpcm9ubWVudCB9IGZyb20gJ3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IGJhc2VVcmwgPSBlbnZpcm9ubWVudC5iYXNlVXJsO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgX2F1dGg6IEF1dGhTZXJ2aWNlKSB7IH1cclxuXHJcbiAgZ2V0QWxsKGl0ZW1OYW1lOiBzdHJpbmcsIHBhZ2VOdW1lciA9IDEsIHBhZ2VzaXplID0gMTApOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgIGJhc2VVcmwgKyBgL2xpc3QtYXBpLWNsZWFuP3R5cGU9JHtpdGVtTmFtZX0mcGFnZT0ke3BhZ2VOdW1lcn0maW5wYWdlPSR7cGFnZXNpemV9YFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldEFsbENhdGVnb3JpZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICBiYXNlVXJsICsgYC9zZWFyY2hDb25jZXB0P3R5cGU9dGhlX2NhdGVnb3J5YFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldEJ5SWQoIGlkOm51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcclxuICAgICAgYmFzZVVybCArIGAvZWRpdC1hcGktY2xlYW4/aWQ9JHtpZH1gXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoKCBrZXl3b3JkOnN0cmluZywgdHlwZTpzdHJpbmc9JycsIGNvbXBvc2l0aW9uTmFtZSA9ICdyZWFsZXN0YXRlJyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChcclxuICAgICAgYmFzZVVybCArIGAvc2VhcmNoQXBpP2NvbXBvc2l0aW9uPSR7Y29tcG9zaXRpb25OYW1lfSZzZWFyY2g9JHtrZXl3b3JkfSZ0eXBlPSR7dHlwZX1gXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsd0F1dGgoaXRlbU5uYW1lOiBzdHJpbmcsIHBhZ2VOdW1lciA9IDEpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoXHJcbiAgICAgIGJhc2VVcmwgKyBgL2NvbmNlcHRzL2xpc3Q/dHlwZT0ke2l0ZW1ObmFtZX0mcGFnZT0ke3BhZ2VOdW1lcn1gXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZ2V0QnlJZHdBdXRoKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICBiYXNlVXJsICsgYC9jb25jZXB0cy8ke2lkfWAsIHt9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKGRhdGE6IGFueSwgaXRlbU5hbWU6IHN0cmluZz0nJykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICBiYXNlVXJsICsgYC9jb25jZXB0c2AsIGRhdGFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBub0F1dGhDcmVhdGUoZGF0YTogYW55LCBpdGVtTmFtZTogc3RyaW5nPScnKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgIGJhc2VVcmwgKyAnL2NyZWF0ZUFwaVdpdGhvdXRBdXRoJywgZGF0YVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZShkYXRhOiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICBiYXNlVXJsICsgYC9jb25jZXB0cy91cGRhdGVgLCBkYXRhXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdXBsb2FkSW1hZ2UoZGF0YTogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICAgYmFzZVVybCArIGAvdXBsb2FkL2ltYWdlc2AsIGRhdGFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGxvYWRGaWxlKGRhdGE6IGFueSk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgIGJhc2VVcmwgKyBgL3VwbG9hZC9maWxlc2AsIGRhdGFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9maWxlKGlkOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGJhc2VVcmwgKyBgL2VkaXQtYXBpLWNsZWFuP2lkPSR7aWR9YCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJcclxuZXhwb3J0IGNvbnN0IFRZUEVTOiBhbnkgPSBbXHJcbiAgICB7dGV4dDogJ1dlYiBQYWdlIFVybCcsIHZhbHVlOiAndXJsJ30sXHJcbiAgICB7dGV4dDogJ1Zpc3VhbCBUZXh0JywgdmFsdWU6ICd2aXN1YWxfdGV4dCd9LFxyXG4gICAge3RleHQ6ICdPbmx5IEltYWdlcycsIHZhbHVlOiAnb25seV9pbWFnZXMnfSxcclxuICAgIHt0ZXh0OiAnVGV4dCBQaWN0dXJlcycsIHZhbHVlOiAndGV4dF9waWN0dXJlcyd9LFxyXG4gICAge3RleHQ6ICdBbGwgQnV0IENTUycsIHZhbHVlOiAnYWxsX2J1dF9jc3MnfSxcclxuICAgIHt0ZXh0OiAnQWxsJywgdmFsdWU6ICdhbGwnfSxcclxuICAgIHt0ZXh0OiAnQ2hhdCBHUFQ6IEV4dHJhY3QgRGF0YScsIHZhbHVlOiAnY2hhdF9ncHQnfSxcclxuICBdOyJdLCJuYW1lcyI6WyJSb3V0ZXJNb2R1bGUiLCJPcHRpb25zQ29tcG9uZW50Iiwicm91dGVzIiwicGF0aCIsInBhdGhNYXRjaCIsImNvbXBvbmVudCIsIk9wdGlvbnNSb3V0aW5nTW9kdWxlIiwiZm9yQ2hpbGQiLCJpbXBvcnRzIiwiZXhwb3J0cyIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIiwiUmVhY3RpdmVGb3Jtc01vZHVsZSIsIk9wdGlvbnNNb2R1bGUiLCJkZWNsYXJhdGlvbnMiLCJGb3JtQ29udHJvbCIsIkZvcm1Hcm91cCIsIlZhbGlkYXRvcnMiLCJUWVBFUyIsImkwIiwiY29uc3RydWN0b3IiLCJfaXRlbXMiLCJfYXV0aCIsImRhdGFUeXBlIiwicmVxdWlyZWQiLCJjYXRlZ29yeSIsIm5vdGUiLCJjaHJvbWUiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJ0aGVuIiwicmVzdWx0IiwidHJhY2UiLCJjb25zb2xlRm9ybSIsImdldENhdGVnb3JpZXMiLCJnZXRBbGxDYXRlZ29yaWVzIiwic3Vic2NyaWJlIiwibmV4dCIsIngiLCJjYXRlZ29yeUxpc3QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJlcnIiLCJhZGRNb3JlIiwic2F2ZV9zdWNjZXNzIiwidHJhY2VDaGFuZ2VkIiwiZSIsInNldCIsImZpbmFsRGF0YSIsImNvbXBvc2l0aW9uTmFtZSIsInRhYkRhdGEiLCJydW50aW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJyZXF1ZXN0Iiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwidHJhY2VkVXJscyIsIm1lc3NhZ2UiLCJjb21wb3NpdGlvbkRhdGEiLCJsZW5ndGgiLCJ3cmFwQ29tcG9zaXRpb24iLCJjcmVhdGVBUEkiLCJjcmVhdGUiLCJsb2FkZXIiLCJvcGVuU2l0ZSIsInVybCIsInRhYnMiLCJzZWxlY3RlZCIsInNhdmVEYXRhIiwidmFsdWUiLCJmb3JtRGF0YSIsInZhbGlkIiwiYWN0aXZlVGFiIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93IiwidGl0bGUiLCJjb21tZW50cyIsInNlbmRNZXNzYWdlIiwiaWQiLCJyZXNwb25zZSIsImxhc3RFcnJvciIsInZpc3VhbF90ZXh0IiwiaW1hZ2VzIiwibG9nb3V0Iiwic2VsZWN0b3JzIiwiZGVjbHMiLCJ2YXJzIiwiY29uc3RzIiwidGVtcGxhdGUiLCJlbnZpcm9ubWVudCIsImJhc2VVcmwiLCJJdGVtU2VydmljZSIsImh0dHAiLCJnZXRBbGwiLCJpdGVtTmFtZSIsInBhZ2VOdW1lciIsInBhZ2VzaXplIiwiZ2V0QnlJZCIsInNlYXJjaCIsImtleXdvcmQiLCJ0eXBlIiwiZ2V0QWxsd0F1dGgiLCJpdGVtTm5hbWUiLCJnZXRCeUlkd0F1dGgiLCJwb3N0IiwiZGF0YSIsIm5vQXV0aENyZWF0ZSIsInVwZGF0ZSIsInVwbG9hZEltYWdlIiwidXBsb2FkRmlsZSIsImdldFByb2ZpbGUiLCJmYWN0b3J5IiwicHJvdmlkZWRJbiIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9