"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/Navbar.tsx":
/*!**************************************!*\
  !*** ./components/layout/Navbar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./components/layout/Button.tsx\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _assets_images_picturePerfect_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/picturePerfect.svg */ \"./assets/images/picturePerfect.svg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    let Links = [\n        {\n            name: \"Home\",\n            link: \"/\"\n        },\n        {\n            name: \"Talent\",\n            link: \"/\"\n        }\n    ];\n    let [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-b-[1px] w-full fixed top-0 left-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"md:flex items-center justify-between bg-white py-4 md:px-10 px-7\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        src: _assets_images_picturePerfect_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"Picture of the author\",\n                        width: 150,\n                        height: 150\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/components/layout/Navbar.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/malimpatikavya/Documents/picture-perfect/components/layout/Navbar.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>setOpen(!open),\n                    className: \"text-3xl absolute right-8 top-6 cursor-pointer md:hidden\",\n                    children: open ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineClose, {}, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/components/layout/Navbar.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 19\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineMenu, {}, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/components/layout/Navbar.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 40\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/malimpatikavya/Documents/picture-perfect/components/layout/Navbar.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in \".concat(open ? \"top-20 \" : \"top-[-490px]\"),\n                    children: [\n                        Links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"md:ml-8 text-xl md:my-0 my-7 font-mon\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: link.link,\n                                    className: \"text-gray-800 hover:text-gray-400 duration-500\",\n                                    children: link.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/picture-perfect/components/layout/Navbar.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, link.name, false, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/components/layout/Navbar.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            children: \"Get Started\"\n                        }, void 0, false, {\n                            fileName: \"/Users/malimpatikavya/Documents/picture-perfect/components/layout/Navbar.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/malimpatikavya/Documents/picture-perfect/components/layout/Navbar.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/malimpatikavya/Documents/picture-perfect/components/layout/Navbar.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/components/layout/Navbar.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9OYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3QztBQUNWO0FBQ2lDO0FBQ0E7QUFDaEM7QUFFL0IsTUFBTU8sU0FBUyxJQUFNOztJQUNuQixJQUFJQyxRQUFRO1FBQ1Y7WUFBRUMsTUFBTTtZQUFRQyxNQUFNO1FBQUk7UUFDMUI7WUFBRUQsTUFBTTtZQUFVQyxNQUFNO1FBQUk7S0FDN0I7SUFDRCxJQUFJLENBQUNDLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUMsS0FBSztJQUNwQyxxQkFDRSw4REFBQ1k7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEOzhCQUNDLDRFQUFDUCxtREFBS0E7d0JBQ0pTLEtBQUtWLHlFQUFTQTt3QkFDZFcsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7OEJBR1osOERBQUNMO29CQUNDTSxTQUFTLElBQU1QLFFBQVEsQ0FBQ0Q7b0JBQ3hCRyxXQUFVOzhCQUVUSCxxQkFBTyw4REFBQ1IsMERBQWNBOzs7O2tEQUFNLDhEQUFDQyx5REFBYUE7Ozs7aUNBQUc7Ozs7Ozs4QkFHaEQsOERBQUNnQjtvQkFDQ04sV0FBVywrSkFFVixPQURDSCxPQUFPLFlBQVksY0FBYzs7d0JBR2xDSCxNQUFNYSxHQUFHLENBQUMsQ0FBQ1gscUJBQ1YsOERBQUNZO2dDQUFtQlIsV0FBVTswQ0FDNUIsNEVBQUNTO29DQUNDQyxNQUFNZCxLQUFLQSxJQUFJO29DQUNmSSxXQUFVOzhDQUVUSixLQUFLRCxJQUFJOzs7Ozs7K0JBTExDLEtBQUtELElBQUk7Ozs7O3NDQVNwQiw4REFBQ1AsK0NBQU1BO3NDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQjtHQTVDTUs7S0FBQUE7QUE4Q04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyLnRzeD80Njk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCB7IEFpT3V0bGluZUNsb3NlLCBBaU91dGxpbmVNZW51IH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgQnJhbmRMb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3BpY3R1cmVQZXJmZWN0LnN2Z1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgbGV0IExpbmtzID0gW1xuICAgIHsgbmFtZTogXCJIb21lXCIsIGxpbms6IFwiL1wiIH0sXG4gICAgeyBuYW1lOiBcIlRhbGVudFwiLCBsaW5rOiBcIi9cIiB9LFxuICBdO1xuICBsZXQgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWItWzFweF0gdy1mdWxsIGZpeGVkIHRvcC0wIGxlZnQtMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctd2hpdGUgcHktNCBtZDpweC0xMCBweC03XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e0JyYW5kTG9nb31cbiAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXG4gICAgICAgICAgICB3aWR0aD17MTUwfVxuICAgICAgICAgICAgaGVpZ2h0PXsxNTB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBhYnNvbHV0ZSByaWdodC04IHRvcC02IGN1cnNvci1wb2ludGVyIG1kOmhpZGRlblwiXG4gICAgICAgID5cbiAgICAgICAgICB7b3BlbiA/IDxBaU91dGxpbmVDbG9zZSAvPiA6IDxBaU91dGxpbmVNZW51IC8+fVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8dWxcbiAgICAgICAgICBjbGFzc05hbWU9e2BtZDpmbGV4IG1kOml0ZW1zLWNlbnRlciBtZDpwYi0wIHBiLTEyIGFic29sdXRlIG1kOnN0YXRpYyBiZy13aGl0ZSBtZDp6LWF1dG8gei1bLTFdIGxlZnQtMCB3LWZ1bGwgbWQ6dy1hdXRvIG1kOnBsLTAgcGwtOSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbiAke1xuICAgICAgICAgICAgb3BlbiA/IFwidG9wLTIwIFwiIDogXCJ0b3AtWy00OTBweF1cIlxuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAge0xpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17bGluay5uYW1lfSBjbGFzc05hbWU9XCJtZDptbC04IHRleHQteGwgbWQ6bXktMCBteS03IGZvbnQtbW9uXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17bGluay5saW5rfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTQwMCBkdXJhdGlvbi01MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xpbmsubmFtZX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8QnV0dG9uPkdldCBTdGFydGVkPC9CdXR0b24+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiQWlPdXRsaW5lQ2xvc2UiLCJBaU91dGxpbmVNZW51IiwiQnJhbmRMb2dvIiwiSW1hZ2UiLCJOYXZiYXIiLCJMaW5rcyIsIm5hbWUiLCJsaW5rIiwib3BlbiIsInNldE9wZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2xpY2siLCJ1bCIsIm1hcCIsImxpIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Navbar.tsx\n"));

/***/ })

});