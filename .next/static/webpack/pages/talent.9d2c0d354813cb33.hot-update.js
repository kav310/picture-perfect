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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/services */ \"./redux/services.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst index = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const { photographers  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.photographers);\n    console.log(photographers);\n    const handleChange = (event)=>{\n        console.log(event.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_services__WEBPACK_IMPORTED_MODULE_3__.fetchPhotographers)());\n    }, [\n        dispatch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-6 pb-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center uppercase text-4xl xl:text-5xl\",\n                children: \"Top 5\"\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"countries\",\n                className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                children: \"Select an option\"\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                id: \"countries\",\n                className: \"bg-gray-50 justify-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-min p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        selected: true,\n                        children: \"Filter by profession\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"wedding\",\n                        children: \"Wedding\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"nature\",\n                        children: \"Nature\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"modeling\",\n                        children: \"Modeling\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"marketing\",\n                        children: \"Marketing\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"wildlife\",\n                        children: \"Wildlife\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container w-100 lg:w-4/5 mx-auto flex flex-col\",\n                children: photographers.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row overflow-hidden bg-white rounded-lg b mt-4 w-100 mx-2  border-solid border-2 border-gray-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-64 w-auto md:w-1/2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"inset-0 h-full w-full object-cover object-center\",\n                                    src: item.photo\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full py-4 px-6 text-gray-800 flex flex-col justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"font-semibold text-lg leading-tight truncate\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: item.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-sm text-gray-700 uppercase tracking-wide font-semibold\",\n                                        children: item.loction\n                                    }, void 0, false, {\n                                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index + \"-\" + item.id, true, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"1o8jeAXJCxpF2B/pSMOG+qvVQjY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90YWxlbnQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQUNJO0FBSXpCO0FBRTlCLE1BQU1LLFFBQVEsSUFBTTs7SUFDbEIsTUFBTUMsV0FBV0osd0RBQVdBO0lBQzVCLE1BQU0sRUFBRUssY0FBYSxFQUFFLEdBQUdKLHdEQUFXQSxDQUFDLENBQUNLLFFBQWVBLE1BQU1ELGFBQWE7SUFDekVFLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWixNQUFNSSxlQUFlLENBQUNDLFFBQWU7UUFDbkNILFFBQVFDLEdBQUcsQ0FBQ0UsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQ2hDO0lBRUFiLGdEQUFTQSxDQUFDLElBQU07UUFDZEssU0FBU0YsbUVBQWtCQTtJQUM3QixHQUFHO1FBQUNFO0tBQVM7SUFDYixxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUE2Qzs7Ozs7OzBCQUMzRCw4REFBQ0U7Z0JBQ0NDLFNBQVE7Z0JBQ1JILFdBQVU7MEJBQ1g7Ozs7OzswQkFHRCw4REFBQ0k7Z0JBQ0NDLElBQUc7Z0JBQ0hMLFdBQVU7O2tDQUVWLDhEQUFDTTt3QkFBT0MsUUFBUTtrQ0FBQzs7Ozs7O2tDQUNqQiw4REFBQ0Q7d0JBQU9SLE9BQU07a0NBQVU7Ozs7OztrQ0FDeEIsOERBQUNRO3dCQUFPUixPQUFNO2tDQUFTOzs7Ozs7a0NBQ3ZCLDhEQUFDUTt3QkFBT1IsT0FBTTtrQ0FBVzs7Ozs7O2tDQUN6Qiw4REFBQ1E7d0JBQU9SLE9BQU07a0NBQVk7Ozs7OztrQ0FDMUIsOERBQUNRO3dCQUFPUixPQUFNO2tDQUFXOzs7Ozs7Ozs7Ozs7MEJBRzNCLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDWlQsY0FBY2lCLEdBQUcsQ0FBQyxDQUFDQyxNQUFXcEIsc0JBQzdCLDhEQUFDVTt3QkFFQ0MsV0FBVTs7MENBRVYsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDVTtvQ0FDQ1YsV0FBVTtvQ0FDVlcsS0FBS0YsS0FBS0csS0FBSzs7Ozs7Ozs7Ozs7MENBR25CLDhEQUFDYjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNaUyxLQUFLSSxJQUFJOzs7Ozs7a0RBRVosOERBQUNkO2tEQUFLVSxLQUFLSyxXQUFXOzs7Ozs7a0RBQ3RCLDhEQUFDZjt3Q0FBSUMsV0FBVTtrREFDWlMsS0FBS00sT0FBTzs7Ozs7Ozs7Ozs7Ozt1QkFmWjFCLFFBQVEsTUFBTW9CLEtBQUtKLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QnRDO0dBM0RNaEI7O1FBQ2FILG9EQUFXQTtRQUNGQyxvREFBV0E7OztBQTJEdkMsK0RBQWVFLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFsZW50L2luZGV4LnRzeD82ZTU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gIGZldGNoRmlsdGVyZWRQaG90b2dyYXBoZXJzLFxuICBmZXRjaFBob3RvZ3JhcGhlcnMsXG59IGZyb20gXCIuLi8uLi9yZWR1eC9zZXJ2aWNlc1wiO1xuXG5jb25zdCBpbmRleCA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxhbnk+KCk7XG4gIGNvbnN0IHsgcGhvdG9ncmFwaGVycyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlLnBob3RvZ3JhcGhlcnMpO1xuICBjb25zb2xlLmxvZyhwaG90b2dyYXBoZXJzKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFBob3RvZ3JhcGhlcnMoKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNiBwYi0xMlwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHVwcGVyY2FzZSB0ZXh0LTR4bCB4bDp0ZXh0LTV4bFwiPlRvcCA1PC9oMj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPVwiY291bnRyaWVzXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgID5cbiAgICAgICAgU2VsZWN0IGFuIG9wdGlvblxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgaWQ9XCJjb3VudHJpZXNcIlxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGp1c3RpZnktY2VudGVyIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1taW4gcC0yLjUgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPkZpbHRlciBieSBwcm9mZXNzaW9uPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJ3ZWRkaW5nXCI+V2VkZGluZzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmF0dXJlXCI+TmF0dXJlPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJtb2RlbGluZ1wiPk1vZGVsaW5nPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYXJrZXRpbmdcIj5NYXJrZXRpbmc8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIndpbGRsaWZlXCI+V2lsZGxpZmU8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB3LTEwMCBsZzp3LTQvNSBteC1hdXRvIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAge3Bob3RvZ3JhcGhlcnMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2luZGV4ICsgXCItXCIgKyBpdGVtLmlkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgcm91bmRlZC1sZyBiIG10LTQgdy0xMDAgbXgtMiAgYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJvcmRlci1ncmF5LTEwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTY0IHctYXV0byBtZDp3LTEvMlwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5zZXQtMCBoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ucGhvdG99XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTQgcHgtNiB0ZXh0LWdyYXktODAwIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGxlYWRpbmctdGlnaHQgdHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj57aXRlbS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgIHtpdGVtLmxvY3Rpb259XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJmZXRjaFBob3RvZ3JhcGhlcnMiLCJpbmRleCIsImRpc3BhdGNoIiwicGhvdG9ncmFwaGVycyIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsImlkIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJtYXAiLCJpdGVtIiwiaW1nIiwic3JjIiwicGhvdG8iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJsb2N0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/talent/index.tsx\n"));

/***/ })

});