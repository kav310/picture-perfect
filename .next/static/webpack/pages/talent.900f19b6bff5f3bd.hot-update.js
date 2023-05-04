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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/services */ \"./redux/services.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst index = ()=>{\n    _s();\n    const [selectedProfession, setSelectedProfession] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const { photographers , filteredPhotographers  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.photographers);\n    const [rendingData, setRendingData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleChange = (event)=>{\n        setSelectedProfession(event.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (selectedProfession != null) {\n            dispatch((0,_redux_services__WEBPACK_IMPORTED_MODULE_3__.fetchFilteredPhotographers)(selectedProfession));\n        }\n    }, [\n        dispatch,\n        selectedProfession\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_services__WEBPACK_IMPORTED_MODULE_3__.fetchPhotographers)());\n    }, [\n        dispatch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-6 pb-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center uppercase text-4xl xl:text-5xl\",\n                children: \"Top 5\"\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"countries\",\n                className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                children: \"Select an option\"\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                onChange: handleChange,\n                className: \"bg-gray-50 mx-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-min p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        selected: true,\n                        children: \"Filter by profession\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"wedding\",\n                        children: \"Wedding\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"nature\",\n                        children: \"Nature\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"modeling\",\n                        children: \"Modeling\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"marketing\",\n                        children: \"Marketing\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"wildlife\",\n                        children: \"Wildlife\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container w-100 lg:w-4/5 mx-auto flex flex-col\",\n                children: photographers.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row overflow-hidden bg-white rounded-lg b mt-4 w-100 mx-2  border-solid border-2 border-gray-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-64 w-auto md:w-1/2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"inset-0 h-full w-full object-cover object-center\",\n                                    src: item.photo\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full py-4 px-6 text-gray-800 flex flex-col justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"font-semibold text-lg leading-tight truncate\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: item.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-sm text-gray-700 uppercase tracking-wide font-semibold\",\n                                        children: item.loction\n                                    }, void 0, false, {\n                                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index + \"-\" + item.id, true, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"y5YPqzMHvx6D1ULVxlybXFBOtm0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90YWxlbnQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQUNJO0FBSXpCO0FBRTlCLE1BQU1PLFFBQVEsSUFBTTs7SUFDbEIsTUFBTSxDQUFDQyxvQkFBb0JDLHNCQUFzQixHQUFHUCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ2pFLE1BQU1RLFdBQVdQLHdEQUFXQTtJQUM1QixNQUFNLEVBQUVRLGNBQWEsRUFBRUMsc0JBQXFCLEVBQUUsR0FBR1Isd0RBQVdBLENBQUMsQ0FBQ1MsUUFBZUEsTUFBTUYsYUFBYTtJQUNoRyxNQUFNLENBQUNHLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUssRUFBRTtJQUVyRCxNQUFNYyxlQUFlLENBQUNDLFFBQWU7UUFDbkNSLHNCQUFzQlEsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzFDO0lBRUFsQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBR08sc0JBQXNCLElBQUksRUFBRTtZQUM3QkUsU0FBU0wsMkVBQTBCQSxDQUFDRztRQUN0QyxDQUFDO0lBQ0gsR0FBRTtRQUFDRTtRQUFVRjtLQUFtQjtJQUVoQ1AsZ0RBQVNBLENBQUMsSUFBTTtRQUNkUyxTQUFTSixtRUFBa0JBO0lBQzdCLEdBQUc7UUFBQ0k7S0FBUztJQUViLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTZDOzs7Ozs7MEJBQzNELDhEQUFDRTtnQkFDQ0MsU0FBUTtnQkFDUkgsV0FBVTswQkFDWDs7Ozs7OzBCQUdELDhEQUFDSTtnQkFDQ0MsVUFBVVY7Z0JBQ1ZLLFdBQVU7O2tDQUVWLDhEQUFDTTt3QkFBT0MsUUFBUTtrQ0FBQzs7Ozs7O2tDQUNqQiw4REFBQ0Q7d0JBQU9SLE9BQU07a0NBQVU7Ozs7OztrQ0FDeEIsOERBQUNRO3dCQUFPUixPQUFNO2tDQUFTOzs7Ozs7a0NBQ3ZCLDhEQUFDUTt3QkFBT1IsT0FBTTtrQ0FBVzs7Ozs7O2tDQUN6Qiw4REFBQ1E7d0JBQU9SLE9BQU07a0NBQVk7Ozs7OztrQ0FDMUIsOERBQUNRO3dCQUFPUixPQUFNO2tDQUFXOzs7Ozs7Ozs7Ozs7MEJBRzNCLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDWlYsY0FBY2tCLEdBQUcsQ0FBQyxDQUFDQyxNQUFXdkIsc0JBQzdCLDhEQUFDYTt3QkFFQ0MsV0FBVTs7MENBRVYsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDVTtvQ0FDQ1YsV0FBVTtvQ0FDVlcsS0FBS0YsS0FBS0csS0FBSzs7Ozs7Ozs7Ozs7MENBR25CLDhEQUFDYjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNaUyxLQUFLSSxJQUFJOzs7Ozs7a0RBRVosOERBQUNkO2tEQUFLVSxLQUFLSyxXQUFXOzs7Ozs7a0RBQ3RCLDhEQUFDZjt3Q0FBSUMsV0FBVTtrREFDWlMsS0FBS00sT0FBTzs7Ozs7Ozs7Ozs7Ozt1QkFmWjdCLFFBQVEsTUFBTXVCLEtBQUtPLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QnRDO0dBbkVNOUI7O1FBRWFKLG9EQUFXQTtRQUNxQkMsb0RBQVdBOzs7QUFrRTlELCtEQUFlRyxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RhbGVudC9pbmRleC50c3g/NmU1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1xuICBmZXRjaEZpbHRlcmVkUGhvdG9ncmFwaGVycyxcbiAgZmV0Y2hQaG90b2dyYXBoZXJzLFxufSBmcm9tIFwiLi4vLi4vcmVkdXgvc2VydmljZXNcIjtcblxuY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZFByb2Zlc3Npb24sIHNldFNlbGVjdGVkUHJvZmVzc2lvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxhbnk+KCk7XG4gIGNvbnN0IHsgcGhvdG9ncmFwaGVycywgZmlsdGVyZWRQaG90b2dyYXBoZXJzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUucGhvdG9ncmFwaGVycyk7XG4gIGNvbnN0IFtyZW5kaW5nRGF0YSwgc2V0UmVuZGluZ0RhdGFdID0gdXNlU3RhdGU8W10+KFtdKVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRQcm9mZXNzaW9uKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZihzZWxlY3RlZFByb2Zlc3Npb24gIT0gbnVsbCkge1xuICAgICAgZGlzcGF0Y2goZmV0Y2hGaWx0ZXJlZFBob3RvZ3JhcGhlcnMoc2VsZWN0ZWRQcm9mZXNzaW9uKSlcbiAgICB9XG4gIH0sW2Rpc3BhdGNoLCBzZWxlY3RlZFByb2Zlc3Npb25dKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goZmV0Y2hQaG90b2dyYXBoZXJzKCkpO1xuICB9LCBbZGlzcGF0Y2hdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNiBwYi0xMlwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHVwcGVyY2FzZSB0ZXh0LTR4bCB4bDp0ZXh0LTV4bFwiPlRvcCA1PC9oMj5cbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPVwiY291bnRyaWVzXCJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCJcbiAgICAgID5cbiAgICAgICAgU2VsZWN0IGFuIG9wdGlvblxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBteC1hdXRvIGJvcmRlciBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTkwMCB0ZXh0LXNtIHJvdW5kZWQtbGcgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgYmxvY2sgdy1taW4gcC0yLjUgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBcIlxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIHNlbGVjdGVkPkZpbHRlciBieSBwcm9mZXNzaW9uPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJ3ZWRkaW5nXCI+V2VkZGluZzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmF0dXJlXCI+TmF0dXJlPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJtb2RlbGluZ1wiPk1vZGVsaW5nPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYXJrZXRpbmdcIj5NYXJrZXRpbmc8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIndpbGRsaWZlXCI+V2lsZGxpZmU8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB3LTEwMCBsZzp3LTQvNSBteC1hdXRvIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAge3Bob3RvZ3JhcGhlcnMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2luZGV4ICsgXCItXCIgKyBpdGVtLmlkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgcm91bmRlZC1sZyBiIG10LTQgdy0xMDAgbXgtMiAgYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJvcmRlci1ncmF5LTEwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTY0IHctYXV0byBtZDp3LTEvMlwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5zZXQtMCBoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ucGhvdG99XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTQgcHgtNiB0ZXh0LWdyYXktODAwIGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnIGxlYWRpbmctdGlnaHQgdHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj57aXRlbS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgIHtpdGVtLmxvY3Rpb259XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImZldGNoRmlsdGVyZWRQaG90b2dyYXBoZXJzIiwiZmV0Y2hQaG90b2dyYXBoZXJzIiwiaW5kZXgiLCJzZWxlY3RlZFByb2Zlc3Npb24iLCJzZXRTZWxlY3RlZFByb2Zlc3Npb24iLCJkaXNwYXRjaCIsInBob3RvZ3JhcGhlcnMiLCJmaWx0ZXJlZFBob3RvZ3JhcGhlcnMiLCJzdGF0ZSIsInJlbmRpbmdEYXRhIiwic2V0UmVuZGluZ0RhdGEiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm9wdGlvbiIsInNlbGVjdGVkIiwibWFwIiwiaXRlbSIsImltZyIsInNyYyIsInBob3RvIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibG9jdGlvbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/talent/index.tsx\n"));

/***/ })

});