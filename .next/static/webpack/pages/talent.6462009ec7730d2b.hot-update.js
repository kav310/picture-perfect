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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/services */ \"./redux/services.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst index = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const { photographers  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.photographers);\n    console.log(photographers);\n    const handleChange = (event)=>{\n        console.log(event.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_redux_services__WEBPACK_IMPORTED_MODULE_3__.fetchPhotographers)());\n    }, [\n        dispatch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-6 pb-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center uppercase text-4xl xl:text-5xl\",\n                children: \"Top 5\"\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                id: \"filter1\",\n                className: \"filter-switch inline-flex items-center relative h-10 p-1 space-x-1 bg-gray-200 rounded-md font-semibold text-blue-600 my-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"filter-switch-item flex relative h-8 bg-gray-300x\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                name: \"filter1\",\n                                id: \"filter1-1\",\n                                className: \"sr-only\",\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"filter1-1\",\n                                className: \"h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow\",\n                                children: \"Upcoming\"\n                            }, void 0, false, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"filter-switch-item flex relative h-8 bg-gray-300x\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                name: \"filter1\",\n                                id: \"filter1-2\",\n                                className: \"sr-only\"\n                            }, void 0, false, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"filter1-2\",\n                                className: \"h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow\",\n                                children: \"Ongoing\"\n                            }, void 0, false, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"filter-switch-item flex relative h-8 bg-gray-300x\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"radio\",\n                                name: \"filter1\",\n                                id: \"filter1-3\",\n                                className: \"sr-only\"\n                            }, void 0, false, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"filter1-3\",\n                                className: \"h-8 py-1 px-2 text-sm leading-6 text-gray-600 hover:text-gray-800 bg-white rounded shadow\",\n                                children: \"Complete\"\n                            }, void 0, false, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container w-100 lg:w-4/5 mx-auto flex flex-col\",\n                children: photographers.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col md:flex-row overflow-hidden bg-white rounded-lg b mt-4 w-100 mx-2  border-solid border-2 border-gray-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"h-64 w-auto md:w-1/2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"inset-0 h-full w-full object-cover object-center\",\n                                    src: item.photo\n                                }, void 0, false, {\n                                    fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full py-4 px-6 text-gray-800 flex flex-col justify-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"font-semibold text-lg leading-tight truncate\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: item.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-sm text-gray-700 uppercase tracking-wide font-semibold\",\n                                        children: item.loction\n                                    }, void 0, false, {\n                                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, index + \"-\" + item.id, true, {\n                        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n                lineNumber: 44,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/malimpatikavya/Documents/picture-perfect/pages/talent/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(index, \"1o8jeAXJCxpF2B/pSMOG+qvVQjY=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90YWxlbnQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQUNJO0FBSXpCO0FBRTlCLE1BQU1LLFFBQVEsSUFBTTs7SUFDbEIsTUFBTUMsV0FBV0osd0RBQVdBO0lBQzVCLE1BQU0sRUFBRUssY0FBYSxFQUFFLEdBQUdKLHdEQUFXQSxDQUFDLENBQUNLLFFBQWVBLE1BQU1ELGFBQWE7SUFDekVFLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWixNQUFNSSxlQUFlLENBQUNDLFFBQWU7UUFDbkNILFFBQVFDLEdBQUcsQ0FBQ0UsTUFBTUMsS0FBSztJQUN6QjtJQUVBWixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RLLFNBQVNGLG1FQUFrQkE7SUFDN0IsR0FBRztRQUFDRTtLQUFTO0lBQ2IscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNmLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBNkM7Ozs7OzswQkFDM0QsOERBQUNFO2dCQUFHQyxJQUFHO2dCQUFVSCxXQUFVOztrQ0FDM0IsOERBQUNJO3dCQUFHSixXQUFVOzswQ0FDWiw4REFBQ0s7Z0NBQU1DLE1BQUs7Z0NBQVFDLE1BQUs7Z0NBQVVKLElBQUc7Z0NBQVlILFdBQVU7Z0NBQVVRLFVBQVVaOzs7Ozs7MENBQ2hGLDhEQUFDYTtnQ0FBTUMsU0FBUTtnQ0FBWVYsV0FBVTswQ0FBNEY7Ozs7Ozs7Ozs7OztrQ0FJbkksOERBQUNJO3dCQUFHSixXQUFVOzswQ0FDWiw4REFBQ0s7Z0NBQU1DLE1BQUs7Z0NBQVFDLE1BQUs7Z0NBQVVKLElBQUc7Z0NBQVlILFdBQVU7Ozs7OzswQ0FDNUQsOERBQUNTO2dDQUFNQyxTQUFRO2dDQUFZVixXQUFVOzBDQUE0Rjs7Ozs7Ozs7Ozs7O2tDQUluSSw4REFBQ0k7d0JBQUdKLFdBQVU7OzBDQUNaLDhEQUFDSztnQ0FBTUMsTUFBSztnQ0FBUUMsTUFBSztnQ0FBVUosSUFBRztnQ0FBWUgsV0FBVTs7Ozs7OzBDQUM1RCw4REFBQ1M7Z0NBQU1DLFNBQVE7Z0NBQVlWLFdBQVU7MENBQTRGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTW5JLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWlIsY0FBY21CLEdBQUcsQ0FBQyxDQUFDQyxNQUFXdEIsc0JBQzdCLDhEQUFDUzt3QkFBZ0NDLFdBQVU7OzBDQUN6Qyw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNhO29DQUNDYixXQUFVO29DQUNWYyxLQUFLRixLQUFLRyxLQUFLOzs7Ozs7Ozs7OzswQ0FHbkIsOERBQUNoQjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUFnRFksS0FBS0wsSUFBSTs7Ozs7O2tEQUN4RSw4REFBQ1I7a0RBQ0VhLEtBQUtJLFdBQVc7Ozs7OztrREFFbkIsOERBQUNqQjt3Q0FBSUMsV0FBVTtrREFDWlksS0FBS0ssT0FBTzs7Ozs7Ozs7Ozs7Ozt1QkFiVDNCLFFBQVEsTUFBTXNCLEtBQUtULEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnZDO0dBM0RNYjs7UUFDYUgsb0RBQVdBO1FBQ0ZDLG9EQUFXQTs7O0FBMkR2QywrREFBZUUsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90YWxlbnQvaW5kZXgudHN4PzZlNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgZmV0Y2hGaWx0ZXJlZFBob3RvZ3JhcGhlcnMsXG4gIGZldGNoUGhvdG9ncmFwaGVycyxcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L3NlcnZpY2VzXCI7XG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPGFueT4oKTtcbiAgY29uc3QgeyBwaG90b2dyYXBoZXJzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGUucGhvdG9ncmFwaGVycyk7XG4gIGNvbnNvbGUubG9nKHBob3RvZ3JhcGhlcnMpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQudmFsdWUpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoUGhvdG9ncmFwaGVycygpKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC02IHBiLTEyXCI+ICBcbiAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdXBwZXJjYXNlIHRleHQtNHhsIHhsOnRleHQtNXhsXCI+VG9wIDU8L2gyPlxuICAgIDx1bCBpZD1cImZpbHRlcjFcIiBjbGFzc05hbWU9XCJmaWx0ZXItc3dpdGNoIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciByZWxhdGl2ZSBoLTEwIHAtMSBzcGFjZS14LTEgYmctZ3JheS0yMDAgcm91bmRlZC1tZCBmb250LXNlbWlib2xkIHRleHQtYmx1ZS02MDAgbXktNFwiPlxuICAgIDxsaSBjbGFzc05hbWU9XCJmaWx0ZXItc3dpdGNoLWl0ZW0gZmxleCByZWxhdGl2ZSBoLTggYmctZ3JheS0zMDB4XCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImZpbHRlcjFcIiBpZD1cImZpbHRlcjEtMVwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbHRlcjEtMVwiIGNsYXNzTmFtZT1cImgtOCBweS0xIHB4LTIgdGV4dC1zbSBsZWFkaW5nLTYgdGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktODAwIGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93XCI+XG4gICAgICAgIFVwY29taW5nXG4gICAgICA8L2xhYmVsPlxuICAgIDwvbGk+XG4gICAgPGxpIGNsYXNzTmFtZT1cImZpbHRlci1zd2l0Y2gtaXRlbSBmbGV4IHJlbGF0aXZlIGgtOCBiZy1ncmF5LTMwMHhcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZmlsdGVyMVwiIGlkPVwiZmlsdGVyMS0yXCIgY2xhc3NOYW1lPVwic3Itb25seVwiLz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlsdGVyMS0yXCIgY2xhc3NOYW1lPVwiaC04IHB5LTEgcHgtMiB0ZXh0LXNtIGxlYWRpbmctNiB0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtZ3JheS04MDAgYmctd2hpdGUgcm91bmRlZCBzaGFkb3dcIj5cbiAgICAgICAgT25nb2luZ1xuICAgICAgPC9sYWJlbD5cbiAgICA8L2xpPlxuICAgIDxsaSBjbGFzc05hbWU9XCJmaWx0ZXItc3dpdGNoLWl0ZW0gZmxleCByZWxhdGl2ZSBoLTggYmctZ3JheS0zMDB4XCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImZpbHRlcjFcIiBpZD1cImZpbHRlcjEtM1wiIGNsYXNzTmFtZT1cInNyLW9ubHlcIi8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImZpbHRlcjEtM1wiIGNsYXNzTmFtZT1cImgtOCBweS0xIHB4LTIgdGV4dC1zbSBsZWFkaW5nLTYgdGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktODAwIGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93XCI+XG4gICAgICAgIENvbXBsZXRlXG4gICAgICA8L2xhYmVsPlxuICAgIDwvbGk+XG4gIDwvdWw+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB3LTEwMCBsZzp3LTQvNSBteC1hdXRvIGZsZXggZmxleC1jb2xcIj5cbiAgICAgIHtwaG90b2dyYXBoZXJzLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleCArIFwiLVwiICsgaXRlbS5pZH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBvdmVyZmxvdy1oaWRkZW4gYmctd2hpdGUgcm91bmRlZC1sZyBiIG10LTQgdy0xMDAgbXgtMiAgYm9yZGVyLXNvbGlkIGJvcmRlci0yIGJvcmRlci1ncmF5LTEwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC02NCB3LWF1dG8gbWQ6dy0xLzJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5zZXQtMCBoLWZ1bGwgdy1mdWxsIG9iamVjdC1jb3ZlciBvYmplY3QtY2VudGVyXCJcbiAgICAgICAgICAgICAgc3JjPXtpdGVtLnBob3RvfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweS00IHB4LTYgdGV4dC1ncmF5LTgwMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtbGcgbGVhZGluZy10aWdodCB0cnVuY2F0ZVwiPntpdGVtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICB7aXRlbS5sb2N0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJmZXRjaFBob3RvZ3JhcGhlcnMiLCJpbmRleCIsImRpc3BhdGNoIiwicGhvdG9ncmFwaGVycyIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInVsIiwiaWQiLCJsaSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJvbkNoYW5nZSIsImxhYmVsIiwiaHRtbEZvciIsIm1hcCIsIml0ZW0iLCJpbWciLCJzcmMiLCJwaG90byIsImRlc2NyaXB0aW9uIiwibG9jdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/talent/index.tsx\n"));

/***/ })

});