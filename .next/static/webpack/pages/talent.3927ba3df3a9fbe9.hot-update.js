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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/services */ \"./redux/services.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst index = ()=>{\n    _s();\n    const [selectedProfession, setSelectedProfession] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const { photographers , filteredPhotographers  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.photographers);\n    console.log(photographers, filteredPhotographers);\n    const handleChange = (event)=>{\n        setSelectedProfession(event.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (selectedProfession != null) {\n            dispatch((0,_redux_services__WEBPACK_IMPORTED_MODULE_3__.fetchFilteredPhotographers)(selectedProfession));\n        }\n    }, [\n        dispatch,\n        selectedProfession\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_services__WEBPACK_IMPORTED_MODULE_3__.fetchPhotographers)());\n    }, [\n        dispatch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-6 pb-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center uppercase text-4xl xl:text-5xl\",\n                children: \"Top 5\"\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"countries\",\n                className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                children: \"Select an option\"\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                onChange: handleChange,\n                className: \"bg-gray-50 mx-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-min p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        selected: true,\n                        children: \"Filter by profession\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"wedding\",\n                        children: \"Wedding\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"nature\",\n                        children: \"Nature\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"modeling\",\n                        children: \"Modeling\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"marketing\",\n                        children: \"Marketing\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: \"wildlife\",\n                        children: \"Wildlife\"\n                    }, void 0, false, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container w-100 lg:w-4/5 mx-auto flex flex-col\",\n                children: photographers.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row overflow-hidden bg-white rounded-lg b mt-4 w-100 mx-2  border-solid border-2 border-gray-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-64 w-auto md:w-1/2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"inset-0 h-full w-full object-cover object-center\",\n                                    src: item.photo\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full py-4 px-6 text-gray-800 flex flex-col justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"font-semibold text-lg leading-tight truncate\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: item.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-sm text-gray-700 uppercase tracking-wide font-semibold\",\n                                        children: item.loction\n                                    }, void 0, false, {\n                                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index + \"-\" + item.id, true, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"kbQtor6+uXDFxTUyC26fh1W06Fg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90YWxlbnQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQUNJO0FBSXpCO0FBRTlCLE1BQU1PLFFBQVEsSUFBTTs7SUFDbEIsTUFBTSxDQUFDQyxvQkFBb0JDLHNCQUFzQixHQUFHUCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ2pFLE1BQU1RLFdBQVdQLHdEQUFXQTtJQUM1QixNQUFNLEVBQUVRLGNBQWEsRUFBRUMsc0JBQXFCLEVBQUUsR0FBR1Isd0RBQVdBLENBQUMsQ0FBQ1MsUUFBZUEsTUFBTUYsYUFBYTtJQUNoR0csUUFBUUMsR0FBRyxDQUFDSixlQUFlQztJQUUzQixNQUFNSSxlQUFlLENBQUNDLFFBQWU7UUFDbkNSLHNCQUFzQlEsTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzFDO0lBRUFsQixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBR08sc0JBQXNCLElBQUksRUFBRTtZQUM3QkUsU0FBU0wsMkVBQTBCQSxDQUFDRztRQUN0QyxDQUFDO0lBQ0gsR0FBRTtRQUFDRTtRQUFVRjtLQUFtQjtJQUVoQ1AsZ0RBQVNBLENBQUMsSUFBTTtRQUNkUyxTQUFTSixtRUFBa0JBO0lBQzdCLEdBQUc7UUFBQ0k7S0FBUztJQUViLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTZDOzs7Ozs7MEJBQzNELDhEQUFDRTtnQkFDQ0MsU0FBUTtnQkFDUkgsV0FBVTswQkFDWDs7Ozs7OzBCQUdELDhEQUFDSTtnQkFDQ0MsVUFBVVY7Z0JBQ1ZLLFdBQVU7O2tDQUVWLDhEQUFDTTt3QkFBT0MsUUFBUTtrQ0FBQzs7Ozs7O2tDQUNqQiw4REFBQ0Q7d0JBQU9SLE9BQU07a0NBQVU7Ozs7OztrQ0FDeEIsOERBQUNRO3dCQUFPUixPQUFNO2tDQUFTOzs7Ozs7a0NBQ3ZCLDhEQUFDUTt3QkFBT1IsT0FBTTtrQ0FBVzs7Ozs7O2tDQUN6Qiw4REFBQ1E7d0JBQU9SLE9BQU07a0NBQVk7Ozs7OztrQ0FDMUIsOERBQUNRO3dCQUFPUixPQUFNO2tDQUFXOzs7Ozs7Ozs7Ozs7MEJBRzNCLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDWlYsY0FBY2tCLEdBQUcsQ0FBQyxDQUFDQyxNQUFXdkIsc0JBQzdCLDhEQUFDYTt3QkFFQ0MsV0FBVTs7MENBRVYsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDVTtvQ0FDQ1YsV0FBVTtvQ0FDVlcsS0FBS0YsS0FBS0csS0FBSzs7Ozs7Ozs7Ozs7MENBR25CLDhEQUFDYjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNaUyxLQUFLSSxJQUFJOzs7Ozs7a0RBRVosOERBQUNkO2tEQUFLVSxLQUFLSyxXQUFXOzs7Ozs7a0RBQ3RCLDhEQUFDZjt3Q0FBSUMsV0FBVTtrREFDWlMsS0FBS00sT0FBTzs7Ozs7Ozs7Ozs7Ozt1QkFmWjdCLFFBQVEsTUFBTXVCLEtBQUtPLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QnRDO0dBbkVNOUI7O1FBRWFKLG9EQUFXQTtRQUNxQkMsb0RBQVdBOzs7QUFrRTlELCtEQUFlRyxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RhbGVudC9pbmRleC50c3g/NmU1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQge1xuICBmZXRjaEZpbHRlcmVkUGhvdG9ncmFwaGVycyxcbiAgZmV0Y2hQaG90b2dyYXBoZXJzLFxufSBmcm9tIFwiLi4vLi4vcmVkdXgvc2VydmljZXNcIjtcblxuY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZFByb2Zlc3Npb24sIHNldFNlbGVjdGVkUHJvZmVzc2lvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDxhbnk+KCk7XG4gIGNvbnN0IHsgcGhvdG9ncmFwaGVycywgZmlsdGVyZWRQaG90b2dyYXBoZXJzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUucGhvdG9ncmFwaGVycyk7XG4gIGNvbnNvbGUubG9nKHBob3RvZ3JhcGhlcnMsIGZpbHRlcmVkUGhvdG9ncmFwaGVycyk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBzZXRTZWxlY3RlZFByb2Zlc3Npb24oZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHNlbGVjdGVkUHJvZmVzc2lvbiAhPSBudWxsKSB7XG4gICAgICBkaXNwYXRjaChmZXRjaEZpbHRlcmVkUGhvdG9ncmFwaGVycyhzZWxlY3RlZFByb2Zlc3Npb24pKVxuICAgIH1cbiAgfSxbZGlzcGF0Y2gsIHNlbGVjdGVkUHJvZmVzc2lvbl0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFBob3RvZ3JhcGhlcnMoKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC02IHBiLTEyXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdXBwZXJjYXNlIHRleHQtNHhsIHhsOnRleHQtNXhsXCI+VG9wIDU8L2gyPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGh0bWxGb3I9XCJjb3VudHJpZXNcIlxuICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIlxuICAgICAgPlxuICAgICAgICBTZWxlY3QgYW4gb3B0aW9uXG4gICAgICA8L2xhYmVsPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIG14LWF1dG8gYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLWJsdWUtNTAwIGZvY3VzOmJvcmRlci1ibHVlLTUwMCBibG9jayB3LW1pbiBwLTIuNSBkYXJrOmJnLWdyYXktNzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIGRhcms6cGxhY2Vob2xkZXItZ3JheS00MDAgZGFyazp0ZXh0LXdoaXRlIGRhcms6Zm9jdXM6cmluZy1ibHVlLTUwMCBkYXJrOmZvY3VzOmJvcmRlci1ibHVlLTUwMFwiXG4gICAgICA+XG4gICAgICAgIDxvcHRpb24gc2VsZWN0ZWQ+RmlsdGVyIGJ5IHByb2Zlc3Npb248L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIndlZGRpbmdcIj5XZWRkaW5nPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJuYXR1cmVcIj5OYXR1cmU8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1vZGVsaW5nXCI+TW9kZWxpbmc8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1hcmtldGluZ1wiPk1hcmtldGluZzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwid2lsZGxpZmVcIj5XaWxkbGlmZTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHctMTAwIGxnOnctNC81IG14LWF1dG8gZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICB7cGhvdG9ncmFwaGVycy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGtleT17aW5kZXggKyBcIi1cIiArIGl0ZW0uaWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IG92ZXJmbG93LWhpZGRlbiBiZy13aGl0ZSByb3VuZGVkLWxnIGIgbXQtNCB3LTEwMCBteC0yICBib3JkZXItc29saWQgYm9yZGVyLTIgYm9yZGVyLWdyYXktMTAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNjQgdy1hdXRvIG1kOnctMS8yXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnNldC0wIGgtZnVsbCB3LWZ1bGwgb2JqZWN0LWNvdmVyIG9iamVjdC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5waG90b31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktNCBweC02IHRleHQtZ3JheS04MDAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtbGcgbGVhZGluZy10aWdodCB0cnVuY2F0ZVwiPlxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PntpdGVtLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTcwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAge2l0ZW0ubG9jdGlvbn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiZmV0Y2hGaWx0ZXJlZFBob3RvZ3JhcGhlcnMiLCJmZXRjaFBob3RvZ3JhcGhlcnMiLCJpbmRleCIsInNlbGVjdGVkUHJvZmVzc2lvbiIsInNldFNlbGVjdGVkUHJvZmVzc2lvbiIsImRpc3BhdGNoIiwicGhvdG9ncmFwaGVycyIsImZpbHRlcmVkUGhvdG9ncmFwaGVycyIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJtYXAiLCJpdGVtIiwiaW1nIiwic3JjIiwicGhvdG8iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJsb2N0aW9uIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/talent/index.tsx\n"));

/***/ })

});