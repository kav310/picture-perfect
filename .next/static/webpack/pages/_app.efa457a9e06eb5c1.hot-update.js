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

/***/ "./redux/slice.js":
/*!************************!*\
  !*** ./redux/slice.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setSelectedCountry\": function() { return /* binding */ setSelectedCountry; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./redux/services.js\");\n\n\nconst initialState = {\n    countries: [],\n    selectedCountry: null,\n    countryData: null,\n    status: \"idle\",\n    error: null\n};\nconst covidTrackerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"covidTracker\",\n    initialState,\n    reducers: {\n        setSelectedCountry: (state, action)=>{\n            state.selectedCountry = action.payload;\n        }\n    },\n    extraReducers: {\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchCountryData.pending]: (state)=>{\n            state.status = \"loading\";\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchCountryData.fulfilled]: (state, action)=>{\n            state.status = \"succeeded\";\n            state.countryData = action.payload;\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchCountryData.rejected]: (state, action)=>{\n            state.status = \"failed\";\n            state.error = action.error.message;\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchCountries.pending]: (state)=>{\n            state.status = \"loading\";\n            state.error = null;\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchCountries.fulfilled]: (state, action)=>{\n            state.status = \"succeeded\";\n            state.countries = action.payload;\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchCountries.rejected]: (state, action)=>{\n            state.status = \"failed\";\n            state.error = action.error.message;\n        }\n    }\n});\nconst { setSelectedCountry  } = covidTrackerSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (covidTrackerSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFDYztBQUU3RCxNQUFNRyxlQUFlO0lBQ2pCQyxXQUFXLEVBQUU7SUFDYkMsaUJBQWlCLElBQUk7SUFDckJDLGFBQWEsSUFBSTtJQUNqQkMsUUFBUTtJQUNSQyxPQUFPLElBQUk7QUFDZjtBQUVBLE1BQU1DLG9CQUFvQlQsNkRBQVdBLENBQUM7SUFDbENVLE1BQU07SUFDTlA7SUFDQVEsVUFBVTtRQUNOQyxvQkFBb0IsQ0FBQ0MsT0FBT0MsU0FBVztZQUNuQ0QsTUFBTVIsZUFBZSxHQUFHUyxPQUFPQyxPQUFPO1FBQzFDO0lBQ0o7SUFDQUMsZUFBZTtRQUNULENBQUNmLCtEQUF3QixDQUFFLEVBQUUsQ0FBQ1ksUUFBVTtZQUN0Q0EsTUFBTU4sTUFBTSxHQUFHO1FBQ2pCO1FBQ0EsQ0FBQ04saUVBQTBCLENBQUMsRUFBRSxDQUFDWSxPQUFPQyxTQUFXO1lBQy9DRCxNQUFNTixNQUFNLEdBQUc7WUFDZk0sTUFBTVAsV0FBVyxHQUFHUSxPQUFPQyxPQUFPO1FBQ3BDO1FBQ0EsQ0FBQ2QsZ0VBQXlCLENBQUMsRUFBRSxDQUFDWSxPQUFPQyxTQUFXO1lBQzlDRCxNQUFNTixNQUFNLEdBQUc7WUFDZk0sTUFBTUwsS0FBSyxHQUFHTSxPQUFPTixLQUFLLENBQUNZLE9BQU87UUFDcEM7UUFDQSxDQUFDbEIsNkRBQXNCLENBQUUsRUFBRSxDQUFDVyxRQUFVO1lBQ3BDQSxNQUFNTixNQUFNLEdBQUc7WUFDZk0sTUFBTUwsS0FBSyxHQUFHLElBQUk7UUFDcEI7UUFDQSxDQUFDTiwrREFBd0IsQ0FBQyxFQUFFLENBQUNXLE9BQU9DLFNBQVc7WUFDN0NELE1BQU1OLE1BQU0sR0FBRztZQUNmTSxNQUFNVCxTQUFTLEdBQUdVLE9BQU9DLE9BQU87UUFDbEM7UUFDQSxDQUFDYiw4REFBdUIsQ0FBQyxFQUFFLENBQUNXLE9BQU9DLFNBQVc7WUFDNUNELE1BQU1OLE1BQU0sR0FBRztZQUNmTSxNQUFNTCxLQUFLLEdBQUdNLE9BQU9OLEtBQUssQ0FBQ1ksT0FBTztRQUNwQztJQUNKO0FBQ047QUFFTyxNQUFNLEVBQUVSLG1CQUFrQixFQUFFLEdBQUdILGtCQUFrQlksT0FBTztBQUUvRCwrREFBZVosa0JBQWtCYSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L3NsaWNlLmpzPzg4MmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgZmV0Y2hDb3VudHJ5RGF0YSwgZmV0Y2hDb3VudHJpZXMgfSBmcm9tIFwiLi9zZXJ2aWNlc1wiXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBjb3VudHJpZXM6IFtdLFxuICAgIHNlbGVjdGVkQ291bnRyeTogbnVsbCxcbiAgICBjb3VudHJ5RGF0YTogbnVsbCxcbiAgICBzdGF0dXM6IFwiaWRsZVwiLFxuICAgIGVycm9yOiBudWxsXG59XG5cbmNvbnN0IGNvdmlkVHJhY2tlclNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6IFwiY292aWRUcmFja2VyXCIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIHNldFNlbGVjdGVkQ291bnRyeTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkQ291bnRyeSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBleHRyYVJlZHVjZXJzOiB7XG4gICAgICAgICAgW2ZldGNoQ291bnRyeURhdGEucGVuZGluZyBdOiAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtmZXRjaENvdW50cnlEYXRhLmZ1bGZpbGxlZF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnc3VjY2VlZGVkJztcbiAgICAgICAgICAgIHN0YXRlLmNvdW50cnlEYXRhID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbZmV0Y2hDb3VudHJ5RGF0YS5yZWplY3RlZF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnZmFpbGVkJztcbiAgICAgICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbZmV0Y2hDb3VudHJpZXMucGVuZGluZyBdOiAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICAgICAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtmZXRjaENvdW50cmllcy5mdWxmaWxsZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3N1Y2NlZWRlZCc7XG4gICAgICAgICAgICBzdGF0ZS5jb3VudHJpZXMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtmZXRjaENvdW50cmllcy5yZWplY3RlZF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnZmFpbGVkJztcbiAgICAgICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgfSxcbiAgICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7IHNldFNlbGVjdGVkQ291bnRyeSB9ID0gY292aWRUcmFja2VyU2xpY2UuYWN0aW9uc1xuXG5leHBvcnQgZGVmYXVsdCBjb3ZpZFRyYWNrZXJTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiZmV0Y2hDb3VudHJ5RGF0YSIsImZldGNoQ291bnRyaWVzIiwiaW5pdGlhbFN0YXRlIiwiY291bnRyaWVzIiwic2VsZWN0ZWRDb3VudHJ5IiwiY291bnRyeURhdGEiLCJzdGF0dXMiLCJlcnJvciIsImNvdmlkVHJhY2tlclNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0U2VsZWN0ZWRDb3VudHJ5Iiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZXh0cmFSZWR1Y2VycyIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsIm1lc3NhZ2UiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/slice.js\n"));

/***/ })

});