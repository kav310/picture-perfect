"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./pages/contact/index.tsx":
/*!*********************************!*\
  !*** ./pages/contact/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst FORM_ENDPOINT = \"\"; // TODO - fill on the later step\nconst Contact = ()=>{\n    _s();\n    const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = ()=>{\n        setTimeout(()=>{\n            setSubmitted(true);\n        }, 100);\n    };\n    if (submitted) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-2xl\",\n                    children: \"Thank you!\"\n                }, void 0, false, {\n                    fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/contact/index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-md\",\n                    children: \"We'll be in touch soon.\"\n                }, void 0, false, {\n                    fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/contact/index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        action: FORM_ENDPOINT,\n        onSubmit: handleSubmit,\n        method: \"POST\",\n        target: \"_blank\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3 pt-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Your name\",\n                    name: \"name\",\n                    className: \"px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/contact/index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/contact/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3 pt-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    placeholder: \"Email\",\n                    name: \"email\",\n                    className: \"px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/contact/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/contact/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3 pt-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    placeholder: \"Your message\",\n                    name: \"message\",\n                    className: \"px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full\",\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/contact/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/contact/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3 pt-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                    type: \"submit\",\n                    children: \"Send a message\"\n                }, void 0, false, {\n                    fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/contact/index.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/contact/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/contact/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Contact, \"S6ipnhtDax9I0+B/fnlVz3+f6e8=\");\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactForm);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb250YWN0L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBRXhDLE1BQU1FLGdCQUFnQixJQUFJLGdDQUFnQztBQUUxRCxNQUFNQyxVQUFVLElBQU07O0lBQ3BCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2hELE1BQU1LLGVBQWUsSUFBTTtRQUN6QkMsV0FBVyxJQUFNO1lBQ2ZGLGFBQWEsSUFBSTtRQUNuQixHQUFHO0lBQ0w7SUFFQSxJQUFJRCxXQUFXO1FBQ2IscUJBQ0U7OzhCQUNFLDhEQUFDSTtvQkFBSUMsV0FBVTs4QkFBVzs7Ozs7OzhCQUMxQiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQVU7Ozs7Ozs7O0lBRy9CLENBQUM7SUFFRCxxQkFDRSw4REFBQ0M7UUFDQ0MsUUFBUVQ7UUFDUlUsVUFBVU47UUFDVk8sUUFBTztRQUNQQyxRQUFPOzswQkFFUCw4REFBQ047Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNNO29CQUNDQyxNQUFLO29CQUNMQyxhQUFZO29CQUNaQyxNQUFLO29CQUNMVCxXQUFVO29CQUNWVSxRQUFROzs7Ozs7Ozs7OzswQkFHWiw4REFBQ1g7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNNO29CQUNDQyxNQUFLO29CQUNMQyxhQUFZO29CQUNaQyxNQUFLO29CQUNMVCxXQUFVO29CQUNWVSxRQUFROzs7Ozs7Ozs7OzswQkFHWiw4REFBQ1g7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNXO29CQUNDSCxhQUFZO29CQUNaQyxNQUFLO29CQUNMVCxXQUFVO29CQUNWVSxRQUFROzs7Ozs7Ozs7OzswQkFHWiw4REFBQ1g7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNZO29CQUNDWixXQUFVO29CQUNWTyxNQUFLOzhCQUNOOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBNURNYjtLQUFBQTtBQThETiwrREFBZW1CLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29udGFjdC9pbmRleC50c3g/OTYwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRk9STV9FTkRQT0lOVCA9IFwiXCI7IC8vIFRPRE8gLSBmaWxsIG9uIHRoZSBsYXRlciBzdGVwXG5cbmNvbnN0IENvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcbiAgICB9LCAxMDApO1xuICB9O1xuXG4gIGlmIChzdWJtaXR0ZWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bFwiPlRoYW5rIHlvdSE8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LW1kXCI+V2UnbGwgYmUgaW4gdG91Y2ggc29vbi48L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBhY3Rpb249e0ZPUk1fRU5EUE9JTlR9XG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgbWV0aG9kPVwiUE9TVFwiXG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMyBwdC0wXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiXG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMyBwbGFjZWhvbGRlci1ncmF5LTQwMCB0ZXh0LWdyYXktNjAwIHJlbGF0aXZlIGJnLXdoaXRlIGJnLXdoaXRlIHJvdW5kZWQgdGV4dC1zbSBib3JkZXItMCBzaGFkb3cgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIHctZnVsbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIHB0LTBcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMyBwbGFjZWhvbGRlci1ncmF5LTQwMCB0ZXh0LWdyYXktNjAwIHJlbGF0aXZlIGJnLXdoaXRlIGJnLXdoaXRlIHJvdW5kZWQgdGV4dC1zbSBib3JkZXItMCBzaGFkb3cgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIHctZnVsbFwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zIHB0LTBcIj5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG1lc3NhZ2VcIlxuICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTMgcGxhY2Vob2xkZXItZ3JheS00MDAgdGV4dC1ncmF5LTYwMCByZWxhdGl2ZSBiZy13aGl0ZSBiZy13aGl0ZSByb3VuZGVkIHRleHQtc20gYm9yZGVyLTAgc2hhZG93IG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyB3LWZ1bGxcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMyBwdC0wXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIGFjdGl2ZTpiZy1ibHVlLTYwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtc20gcHgtNiBweS0zIHJvdW5kZWQgc2hhZG93IGhvdmVyOnNoYWRvdy1sZyBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIG1yLTEgbWItMSBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xNTBcIlxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICA+XG4gICAgICAgICAgU2VuZCBhIG1lc3NhZ2VcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkZPUk1fRU5EUE9JTlQiLCJDb250YWN0Iiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwiaGFuZGxlU3VibWl0Iiwic2V0VGltZW91dCIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJhY3Rpb24iLCJvblN1Ym1pdCIsIm1ldGhvZCIsInRhcmdldCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwibmFtZSIsInJlcXVpcmVkIiwidGV4dGFyZWEiLCJidXR0b24iLCJDb250YWN0Rm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/contact/index.tsx\n"));

/***/ })

});