/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/talent"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmalimpatikavya%2FDocuments%2Fpicture-perfect%2Fpages%2Ftalent%2Findex.tsx&page=%2Ftalent!":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmalimpatikavya%2FDocuments%2Fpicture-perfect%2Fpages%2Ftalent%2Findex.tsx&page=%2Ftalent! ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/talent\",\n      function () {\n        return __webpack_require__(/*! ./pages/talent/index.tsx */ \"./pages/talent/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/talent\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRm1hbGltcGF0aWthdnlhJTJGRG9jdW1lbnRzJTJGcGljdHVyZS1wZXJmZWN0JTJGcGFnZXMlMkZ0YWxlbnQlMkZpbmRleC50c3gmcGFnZT0lMkZ0YWxlbnQhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsMERBQTBCO0FBQ2pEO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz8zZDFjIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvdGFsZW50XCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy90YWxlbnQvaW5kZXgudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi90YWxlbnRcIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmalimpatikavya%2FDocuments%2Fpicture-perfect%2Fpages%2Ftalent%2Findex.tsx&page=%2Ftalent!\n"));

/***/ }),

/***/ "./pages/talent/index.tsx":
/*!********************************!*\
  !*** ./pages/talent/index.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/services */ \"./redux/services.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst index = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const { photographers  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.photographers);\n    console.log(photographers);\n    const handleChange = (event)=>{\n        console.log(event.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_services__WEBPACK_IMPORTED_MODULE_3__.fetchPhotographers)());\n    }, [\n        dispatch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-6 pb-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center uppercase text-4xl xl:text-5xl\",\n                children: \"Top 5\"\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"countries\",\n                className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                children: \"Select an option\"\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                id: \"countries\",\n                className: \"bg-gray-50 mx-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-min p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        selected: true,\n                        children: \"Filter by profession\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"wedding\",\n                        children: \"Wedding\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"nature\",\n                        children: \"Nature\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"modeling\",\n                        children: \"Modeling\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"marketing\",\n                        children: \"Marketing\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"wildlife\",\n                        children: \"Wildlife\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container w-100 lg:w-4/5 mx-auto flex flex-col\",\n                children: photographers.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row overflow-hidden bg-white rounded-lg b mt-4 w-100 mx-2  border-solid border-2 border-gray-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-64 w-auto md:w-1/2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"inset-0 h-full w-full object-cover object-center\",\n                                    src: item.photo\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full py-4 px-6 text-gray-800 flex flex-col justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"font-semibold text-lg leading-tight truncate\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: item.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-sm text-gray-700 uppercase tracking-wide font-semibold\",\n                                        children: item.loction\n                                    }, void 0, false, {\n                                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index + \"-\" + item.id, true, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"1o8jeAXJCxpF2B/pSMOG+qvVQjY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90YWxlbnQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQUNJO0FBSXpCO0FBRTlCLE1BQU1LLFFBQVEsSUFBTTs7SUFDbEIsTUFBTUMsV0FBV0osd0RBQVdBO0lBQzVCLE1BQU0sRUFBRUssY0FBYSxFQUFFLEdBQUdKLHdEQUFXQSxDQUFDLENBQUNLLFFBQWVBLE1BQU1ELGFBQWE7SUFDekVFLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWixNQUFNSSxlQUFlLENBQUNDLFFBQWU7UUFDbkNILFFBQVFDLEdBQUcsQ0FBQ0UsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ2hDO0lBRUFiLGdEQUFTQSxDQUFDLElBQU07UUFDZEssU0FBU0YsbUVBQWtCQTtJQUM3QixHQUFHO1FBQUNFO0tBQVM7SUFDYixxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUE2Qzs7Ozs7OzBCQUMzRCw4REFBQ0U7Z0JBQ0NDLFNBQVE7Z0JBQ1JILFdBQVU7MEJBQ1g7Ozs7OzswQkFHRCw4REFBQ0k7Z0JBQ0NDLElBQUc7Z0JBQ0hMLFdBQVU7O2tDQUVWLDhEQUFDTTt3QkFBT0MsUUFBUTtrQ0FBQzs7Ozs7O2tDQUNqQiw4REFBQ0Q7d0JBQU9SLE9BQU07a0NBQVU7Ozs7OztrQ0FDeEIsOERBQUNRO3dCQUFPUixPQUFNO2tDQUFTOzs7Ozs7a0NBQ3ZCLDhEQUFDUTt3QkFBT1IsT0FBTTtrQ0FBVzs7Ozs7O2tDQUN6Qiw4REFBQ1E7d0JBQU9SLE9BQU07a0NBQVk7Ozs7OztrQ0FDMUIsOERBQUNRO3dCQUFPUixPQUFNO2tDQUFXOzs7Ozs7Ozs7Ozs7MEJBRzNCLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDWlQsY0FBY2lCLEdBQUcsQ0FBQyxDQUFDQyxNQUFXcEIsc0JBQzdCLDhEQUFDVTt3QkFFQ0MsV0FBVTs7MENBRVYsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDVTtvQ0FDQ1YsV0FBVTtvQ0FDVlcsS0FBS0YsS0FBS0csS0FBSzs7Ozs7Ozs7Ozs7MENBR25CLDhEQUFDYjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNaUyxLQUFLSSxJQUFJOzs7Ozs7a0RBRVosOERBQUNkO2tEQUFLVSxLQUFLSyxXQUFXOzs7Ozs7a0RBQ3RCLDhEQUFDZjt3Q0FBSUMsV0FBVTtrREFDWlMsS0FBS00sT0FBTzs7Ozs7Ozs7Ozs7Ozt1QkFmWjFCLFFBQVEsTUFBTW9CLEtBQUtKLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QnRDO0dBM0RNaEI7O1FBQ2FILG9EQUFXQTtRQUNGQyxvREFBV0E7OztBQTJEdkMsK0RBQWVFLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFsZW50L2luZGV4LnRzeD82ZTU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gIGZldGNoRmlsdGVyZWRQaG90b2dyYXBoZXJzLFxuICBmZXRjaFBob3RvZ3JhcGhlcnMsXG59IGZyb20gXCIuLi8uLi9yZWR1eC9zZXJ2aWNlc1wiO1xuXG5jb25zdCBpbmRleCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxhbnk+KCk7XG4gIGNvbnN0IHsgcGhvdG9ncmFwaGVycyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnBob3RvZ3JhcGhlcnMpO1xuICBjb25zb2xlLmxvZyhwaG90b2dyYXBoZXJzKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFBob3RvZ3JhcGhlcnMoKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNiBwYi0xMlwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHVwcGVyY2FzZSB0ZXh0LTR4bCB4bDp0ZXh0LTV4bFwiPlRvcCA1PC9oMj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPVwiY291bnRyaWVzXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgID5cbiAgICAgICAgU2VsZWN0IGFuIG9wdGlvblxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgaWQ9XCJjb3VudHJpZXNcIlxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIG14LWF1dG8gYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LW1pbiBwLTIuNSBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlIGRhcms6Zm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXG4gICAgICA+XG4gICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+RmlsdGVyIGJ5IHByb2Zlc3Npb248L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIndlZGRpbmdcIj5XZWRkaW5nPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJuYXR1cmVcIj5OYXR1cmU8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1vZGVsaW5nXCI+TW9kZWxpbmc8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hcmtldGluZ1wiPk1hcmtldGluZzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwid2lsZGxpZmVcIj5XaWxkbGlmZTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHctMTAwIGxnOnctNC81IG14LWF1dG8gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICB7cGhvdG9ncmFwaGVycy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aW5kZXggKyBcIi1cIiArIGl0ZW0uaWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSByb3VuZGVkLWxnIGIgbXQtNCB3LTEwMCBteC0yICBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMTAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjQgdy1hdXRvIG1kOnctMS8yXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnNldC0wIGgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5waG90b31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktNCBweC02IHRleHQtZ3JheS04MDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtbGcgbGVhZGluZy10aWdodCB0cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PntpdGVtLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAge2l0ZW0ubG9jdGlvbn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImZldGNoUGhvdG9ncmFwaGVycyIsImluZGV4IiwiZGlzcGF0Y2giLCJwaG90b2dyYXBoZXJzIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwiaWQiLCJvcHRpb24iLCJzZWxlY3RlZCIsIm1hcCIsIml0ZW0iLCJpbWciLCJzcmMiLCJwaG90byIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxvY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/talent/index.tsx\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fmalimpatikavya%2FDocuments%2Fpicture-perfect%2Fpages%2Ftalent%2Findex.tsx&page=%2Ftalent!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);