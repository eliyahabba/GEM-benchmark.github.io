webpackHotUpdate_N_E("pages/workshop/2021",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar.module.css */ \"./components/navbar.module.css\");\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/usr/local/google/home/gehrmann/Documents/GEM-benchmark.github.io/web/components/navbar.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n// Module that contains the navigation bar.\n\n\n\n\n\n\n\nvar Navbar = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Navbar, _React$Component);\n\n  var _super = _createSuper(Navbar);\n\n  function Navbar(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Navbar);\n\n    _this = _super.call(this, props);\n    _this.handleMobileClick = _this.handleMobileClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.state = {\n      active: false\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Navbar, [{\n    key: \"handleMobileClick\",\n    value: function handleMobileClick() {\n      var currentState = this.state.active;\n      this.setState({\n        active: !currentState\n      });\n    } // export function handleNavbar() {\n    //   //    $(\".nav\").handleMobileClick(\"mobilenav\");\n    // }\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"div\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navwrapper,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.gradbar,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 9\n        }\n      }), __jsx(\"nav\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navbar,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 9\n        }\n      }, __jsx(\"span\", {\n        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.headingLg + \" \" + _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navbarlogo,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 15\n        }\n      }, \"GEM BENCHMARK\"))), __jsx(\"div\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.menutoggle,\n        id: \"mobile-menu\",\n        onClick: this.handleMobileClick,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }\n      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__[\"FontAwesomeIcon\"], {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.bar,\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faBars\"],\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 13\n        }\n      })), __jsx(\"ul\", {\n        className: this.state.active ? _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.nav + \" \" + _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mobilenav : _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.nav,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }\n      }, __jsx(\"li\", {\n        className: this.state.active ? _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem : _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem + \" \" + _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.pushright,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/resources/\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 17\n        }\n      }, \"Resources\"))), __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/data_cards/\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 17\n        }\n      }, \"Data Cards\"))), __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 13\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/model_cards\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 17\n        }\n      }, \"Model Cards\"))), __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 13\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/tutorials\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 17\n        }\n      }, \"tutorials\"))), __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/results/\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 17\n        }\n      }, \"Results\"))), __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 13\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/papers/\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 17\n        }\n      }, \"Papers\"))), __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 13\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/team\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 17\n        }\n      }, \"Team\"))), __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 13\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/workshop\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 17\n        }\n      }, \"Workshop\"))))));\n    }\n  }]);\n\n  return Navbar;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanM/ODQxYiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJwcm9wcyIsImhhbmRsZU1vYmlsZUNsaWNrIiwiYmluZCIsInN0YXRlIiwiYWN0aXZlIiwiY3VycmVudFN0YXRlIiwic2V0U3RhdGUiLCJzdHlsZXMiLCJuYXZ3cmFwcGVyIiwiZ3JhZGJhciIsIm5hdmJhciIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTGciLCJuYXZiYXJsb2dvIiwibWVudXRvZ2dsZSIsImJhciIsImZhQmFycyIsIm5hdiIsIm1vYmlsZW5hdiIsIm5hdml0ZW0iLCJwdXNocmlnaHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLE07Ozs7O0FBQ0osa0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1QkMsSUFBdkIseUdBQXpCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFBRTtBQURHLEtBQWI7QUFIaUI7QUFNbEI7Ozs7d0NBQ21CO0FBQ2xCLFVBQU1DLFlBQVksR0FBRyxLQUFLRixLQUFMLENBQVdDLE1BQWhDO0FBQ0EsV0FBS0UsUUFBTCxDQUFjO0FBQUVGLGNBQU0sRUFBRSxDQUFDQztBQUFYLE9BQWQ7QUFDRCxLLENBRUQ7QUFDQTtBQUVBOzs7OzZCQUVTO0FBQ1AsYUFDRTtBQUFLLGlCQUFTLEVBQUVFLHlEQUFNLENBQUNDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFLLGlCQUFTLEVBQUVELHlEQUFNLENBQUNFLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFO0FBQUssaUJBQVMsRUFBRUYseURBQU0sQ0FBQ0csTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQU0saUJBQVMsRUFBRUMsK0RBQVUsQ0FBQ0MsU0FBWCxHQUF1QixHQUF2QixHQUE2QkwseURBQU0sQ0FBQ00sVUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixDQURGLENBREYsRUFPRTtBQUNFLGlCQUFTLEVBQUVOLHlEQUFNLENBQUNPLFVBRHBCO0FBRUUsVUFBRSxFQUFDLGFBRkw7QUFHRSxlQUFPLEVBQUUsS0FBS2IsaUJBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLRSxNQUFDLCtFQUFEO0FBQWlCLGlCQUFTLEVBQUVNLHlEQUFNLENBQUNRLEdBQW5DO0FBQXdDLFlBQUksRUFBRUMseUVBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMRixDQVBGLEVBY0U7QUFDRSxpQkFBUyxFQUNQLEtBQUtiLEtBQUwsQ0FBV0MsTUFBWCxHQUNJRyx5REFBTSxDQUFDVSxHQUFQLEdBQWEsR0FBYixHQUFtQlYseURBQU0sQ0FBQ1csU0FEOUIsR0FFSVgseURBQU0sQ0FBQ1UsR0FKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBT0U7QUFDRSxpQkFBUyxFQUNQLEtBQUtkLEtBQUwsQ0FBV0MsTUFBWCxHQUNJRyx5REFBTSxDQUFDWSxPQURYLEdBRUlaLHlEQUFNLENBQUNZLE9BQVAsR0FBaUIsR0FBakIsR0FBdUJaLHlEQUFNLENBQUNhLFNBSnRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FPRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsQ0FQRixDQVBGLEVBa0JFO0FBQUksaUJBQVMsRUFBRWIseURBQU0sQ0FBQ1ksT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsY0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixDQURGLENBbEJGLEVBdUJFO0FBQUksaUJBQVMsRUFBRVoseURBQU0sQ0FBQ1ksT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsY0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixDQURGLENBdkJGLEVBNEJFO0FBQUksaUJBQVMsRUFBRVoseURBQU0sQ0FBQ1ksT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixDQURGLENBNUJGLEVBaUNFO0FBQUksaUJBQVMsRUFBRVoseURBQU0sQ0FBQ1ksT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixDQURGLENBakNGLEVBc0NFO0FBQUksaUJBQVMsRUFBRVoseURBQU0sQ0FBQ1ksT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQURGLENBdENGLEVBMkNFO0FBQUksaUJBQVMsRUFBRVoseURBQU0sQ0FBQ1ksT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLENBM0NGLEVBZ0RFO0FBQUksaUJBQVMsRUFBRVoseURBQU0sQ0FBQ1ksT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQURGLENBaERGLENBZEYsQ0FGRixDQURGO0FBeUZEOzs7O0VBNUdrQkUsNENBQUssQ0FBQ0MsUzs7QUErR1p2QixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2YmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlIHRoYXQgY29udGFpbnMgdGhlIG5hdmlnYXRpb24gYmFyLlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL25hdmJhci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBmYUJhcnMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlTW9iaWxlQ2xpY2sgPSB0aGlzLmhhbmRsZU1vYmlsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgfTtcbiAgfVxuICBoYW5kbGVNb2JpbGVDbGljaygpIHtcbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPSB0aGlzLnN0YXRlLmFjdGl2ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlOiAhY3VycmVudFN0YXRlIH0pO1xuICB9XG5cbiAgLy8gZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU5hdmJhcigpIHtcbiAgLy8gICAvLyAgICAkKFwiLm5hdlwiKS5oYW5kbGVNb2JpbGVDbGljayhcIm1vYmlsZW5hdlwiKTtcblxuICAvLyB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdndyYXBwZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyYWRiYXJ9PjwvZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZyArIFwiIFwiICsgc3R5bGVzLm5hdmJhcmxvZ299PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGE+R0VNIEJFTkNITUFSSzwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW51dG9nZ2xlfVxuICAgICAgICAgICAgaWQ9XCJtb2JpbGUtbWVudVwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU1vYmlsZUNsaWNrfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuYmFyfSBpY29uPXtmYUJhcnN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHVsXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFjdGl2ZVxuICAgICAgICAgICAgICAgID8gc3R5bGVzLm5hdiArIFwiIFwiICsgc3R5bGVzLm1vYmlsZW5hdlxuICAgICAgICAgICAgICAgIDogc3R5bGVzLm5hdlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlXG4gICAgICAgICAgICAgICAgICA/IHN0eWxlcy5uYXZpdGVtXG4gICAgICAgICAgICAgICAgICA6IHN0eWxlcy5uYXZpdGVtICsgXCIgXCIgKyBzdHlsZXMucHVzaHJpZ2h0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXNvdXJjZXMvXCI+XG4gICAgICAgICAgICAgICAgPGE+UmVzb3VyY2VzPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2RhdGFfY2FyZHMvXCI+XG4gICAgICAgICAgICAgICAgPGE+RGF0YSBDYXJkczwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tb2RlbF9jYXJkc1wiPlxuICAgICAgICAgICAgICAgIDxhPk1vZGVsIENhcmRzPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3R1dG9yaWFsc1wiPlxuICAgICAgICAgICAgICAgIDxhPnR1dG9yaWFsczwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXN1bHRzL1wiPlxuICAgICAgICAgICAgICAgIDxhPlJlc3VsdHM8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbX0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGFwZXJzL1wiPlxuICAgICAgICAgICAgICAgIDxhPlBhcGVyczwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90ZWFtXCI+XG4gICAgICAgICAgICAgICAgPGE+VGVhbTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi93b3Jrc2hvcFwiPlxuICAgICAgICAgICAgICAgIDxhPldvcmtzaG9wPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgey8qIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtfT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaGFyZWRfdGFza1wiPlxuICAgICAgICAgICAgICAgIDxhPlNoYXJlZCBUYXNrPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPiAqL31cbiAgICAgICAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbX0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmxfYXVnbWVudGVyXCI+XG4gICAgICAgICAgICAgICAgPGE+TkwtQXVnbWVudGVyPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hhY2thdGhvblwiPlxuICAgICAgICAgICAgICAgIDxhPkhhY2thdGhvbjwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT4gKi99XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

})