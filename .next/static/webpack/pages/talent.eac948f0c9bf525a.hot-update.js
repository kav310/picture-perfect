"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/talent",{

/***/ "./pages/talent/index.tsx":
/*!********************************!*\
  !*** ./pages/talent/index.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/services */ \"./redux/services.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst index = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const { photographers  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.photographers);\n    console.log(photographers);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_services__WEBPACK_IMPORTED_MODULE_3__.fetchPhotographers)());\n    }, [\n        dispatch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-6 pb-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"uppercase text-4xl xl:text-5xl\",\n                children: \"Top 5\"\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container w-100 lg:w-4/5 mx-auto flex flex-col\",\n                children: photographers.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row overflow-hidden bg-white rounded-lg b mt-4 w-100 mx-2  border-solid border-2 border-gray-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-64 w-auto md:w-1/2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"inset-0 h-full w-full object-cover object-center\",\n                                    src: item.photo\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full py-4 px-6 text-gray-800 flex flex-col justify-between\"\n                            }, void 0, false, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, index + \"-\" + item.id, true, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"1o8jeAXJCxpF2B/pSMOG+qvVQjY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90YWxlbnQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQUNJO0FBSXpCO0FBRTlCLE1BQU1LLFFBQVEsSUFBTTs7SUFDbEIsTUFBTUMsV0FBV0osd0RBQVdBO0lBQzVCLE1BQU0sRUFBRUssY0FBYSxFQUFFLEdBQUdKLHdEQUFXQSxDQUFDLENBQUNLLFFBQWVBLE1BQU1ELGFBQWE7SUFDekVFLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWk4sZ0RBQVNBLENBQUMsSUFBTTtRQUNkSyxTQUFTRixtRUFBa0JBO0lBQzdCLEdBQUc7UUFBQ0U7S0FBUztJQUNiLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDZiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQWlDOzs7Ozs7MEJBQy9DLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWkwsY0FBY08sR0FBRyxDQUFDLENBQUNDLE1BQVdWLHNCQUM3Qiw4REFBQ007d0JBQWdDQyxXQUFVOzswQ0FDekMsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDSTtvQ0FDQ0osV0FBVTtvQ0FDVkssS0FBS0YsS0FBS0csS0FBSzs7Ozs7Ozs7Ozs7MENBR25CLDhEQUFDUDtnQ0FBSUMsV0FBVTs7Ozs7Ozt1QkFQUFAsUUFBUSxNQUFNVSxLQUFLSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBcUJ2QztHQWxDTWQ7O1FBQ2FILG9EQUFXQTtRQUNGQyxvREFBV0E7OztBQWtDdkMsK0RBQWVFLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFsZW50L2luZGV4LnRzeD82ZTU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gIGZldGNoRmlsdGVyZWRQaG90b2dyYXBoZXJzLFxuICBmZXRjaFBob3RvZ3JhcGhlcnMsXG59IGZyb20gXCIuLi8uLi9yZWR1eC9zZXJ2aWNlc1wiO1xuXG5jb25zdCBpbmRleCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxhbnk+KCk7XG4gIGNvbnN0IHsgcGhvdG9ncmFwaGVycyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnBob3RvZ3JhcGhlcnMpO1xuICBjb25zb2xlLmxvZyhwaG90b2dyYXBoZXJzKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoUGhvdG9ncmFwaGVycygpKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC02IHBiLTEyXCI+ICBcbiAgICA8aDIgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtNHhsIHhsOnRleHQtNXhsXCI+VG9wIDU8L2gyPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHctMTAwIGxnOnctNC81IG14LWF1dG8gZmxleCBmbGV4LWNvbFwiPlxuICAgICAge3Bob3RvZ3JhcGhlcnMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4ICsgXCItXCIgKyBpdGVtLmlkfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSByb3VuZGVkLWxnIGIgbXQtNCB3LTEwMCBteC0yICBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMTAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTY0IHctYXV0byBtZDp3LTEvMlwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnNldC0wIGgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXJcIlxuICAgICAgICAgICAgICBzcmM9e2l0ZW0ucGhvdG99XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTQgcHgtNiB0ZXh0LWdyYXktODAwIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICB7LyogPGgzIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1sZyBsZWFkaW5nLXRpZ2h0IHRydW5jYXRlXCI+e3sgY2FyZC50aXRsZSB9fTwvaDM+XG4gICA8cCBjbGFzc05hbWU9XCJtdC0yXCI+XG4gICAgIHt7IGNhcmQuZXhjZXJwdCB9fVxuICAgPC9wPlxuICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNzAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIGZvbnQtc2VtaWJvbGQgbXQtMlwiPlxuICAgICB7eyBjYXJkLmF1dGhvciB9fSAmYnVsbDsge3sgY2FyZC5kYXRlIH19XG4gICA8L3A+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZmV0Y2hQaG90b2dyYXBoZXJzIiwiaW5kZXgiLCJkaXNwYXRjaCIsInBob3RvZ3JhcGhlcnMiLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsIml0ZW0iLCJpbWciLCJzcmMiLCJwaG90byIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/talent/index.tsx\n"));

/***/ })

});