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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setSelectedCountry\": function() { return /* binding */ setSelectedCountry; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./redux/services.js\");\n\n\nconst initialState = {\n    photographers: [],\n    selectedProfessional: null,\n    status: \"idle\",\n    error: null\n};\nconst covidTrackerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"covidTracker\",\n    initialState,\n    reducers: {\n        setSelectedProfessional: (state, action)=>{\n            state.selectedCountry = action.payload;\n        }\n    },\n    extraReducers: {\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchCountryData.pending]: (state)=>{\n            state.status = \"loading\";\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchCountryData.fulfilled]: (state, action)=>{\n            state.status = \"succeeded\";\n            state.countryData = action.payload;\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchCountryData.rejected]: (state, action)=>{\n            state.status = \"failed\";\n            state.error = action.error.message;\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchCountries.pending]: (state)=>{\n            state.status = \"loading\";\n            state.error = null;\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchCountries.fulfilled]: (state, action)=>{\n            state.status = \"succeeded\";\n            state.countries = action.payload;\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchCountries.rejected]: (state, action)=>{\n            state.status = \"failed\";\n            state.error = action.error.message;\n        }\n    }\n});\nconst { setSelectedCountry  } = covidTrackerSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (covidTrackerSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFDYztBQUU3RCxNQUFNRyxlQUFlO0lBQ2pCQyxlQUFlLEVBQUU7SUFDakJDLHNCQUFzQixJQUFJO0lBQzFCQyxRQUFRO0lBQ1JDLE9BQU8sSUFBSTtBQUNmO0FBRUEsTUFBTUMsb0JBQW9CUiw2REFBV0EsQ0FBQztJQUNsQ1MsTUFBTTtJQUNOTjtJQUNBTyxVQUFVO1FBQ05DLHlCQUF5QixDQUFDQyxPQUFPQyxTQUFXO1lBQ3hDRCxNQUFNRSxlQUFlLEdBQUdELE9BQU9FLE9BQU87UUFDMUM7SUFDSjtJQUNBQyxlQUFlO1FBQ1QsQ0FBQ2YsK0RBQXdCLENBQUUsRUFBRSxDQUFDVyxRQUFVO1lBQ3RDQSxNQUFNTixNQUFNLEdBQUc7UUFDakI7UUFDQSxDQUFDTCxpRUFBMEIsQ0FBQyxFQUFFLENBQUNXLE9BQU9DLFNBQVc7WUFDL0NELE1BQU1OLE1BQU0sR0FBRztZQUNmTSxNQUFNTyxXQUFXLEdBQUdOLE9BQU9FLE9BQU87UUFDcEM7UUFDQSxDQUFDZCxnRUFBeUIsQ0FBQyxFQUFFLENBQUNXLE9BQU9DLFNBQVc7WUFDOUNELE1BQU1OLE1BQU0sR0FBRztZQUNmTSxNQUFNTCxLQUFLLEdBQUdNLE9BQU9OLEtBQUssQ0FBQ2MsT0FBTztRQUNwQztRQUNBLENBQUNuQiw2REFBc0IsQ0FBRSxFQUFFLENBQUNVLFFBQVU7WUFDcENBLE1BQU1OLE1BQU0sR0FBRztZQUNmTSxNQUFNTCxLQUFLLEdBQUcsSUFBSTtRQUNwQjtRQUNBLENBQUNMLCtEQUF3QixDQUFDLEVBQUUsQ0FBQ1UsT0FBT0MsU0FBVztZQUM3Q0QsTUFBTU4sTUFBTSxHQUFHO1lBQ2ZNLE1BQU1VLFNBQVMsR0FBR1QsT0FBT0UsT0FBTztRQUNsQztRQUNBLENBQUNiLDhEQUF1QixDQUFDLEVBQUUsQ0FBQ1UsT0FBT0MsU0FBVztZQUM1Q0QsTUFBTU4sTUFBTSxHQUFHO1lBQ2ZNLE1BQU1MLEtBQUssR0FBR00sT0FBT04sS0FBSyxDQUFDYyxPQUFPO1FBQ3BDO0lBQ0o7QUFDTjtBQUVPLE1BQU0sRUFBRUUsbUJBQWtCLEVBQUUsR0FBR2Ysa0JBQWtCZ0IsT0FBTztBQUUvRCwrREFBZWhCLGtCQUFrQmlCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc2xpY2UuanM/ODgyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBmZXRjaENvdW50cnlEYXRhLCBmZXRjaENvdW50cmllcyB9IGZyb20gXCIuL3NlcnZpY2VzXCJcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHBob3RvZ3JhcGhlcnM6IFtdLFxuICAgIHNlbGVjdGVkUHJvZmVzc2lvbmFsOiBudWxsLFxuICAgIHN0YXR1czogXCJpZGxlXCIsXG4gICAgZXJyb3I6IG51bGxcbn1cblxuY29uc3QgY292aWRUcmFja2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogXCJjb3ZpZFRyYWNrZXJcIixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRQcm9mZXNzaW9uYWw6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZENvdW50cnkgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZXh0cmFSZWR1Y2Vyczoge1xuICAgICAgICAgIFtmZXRjaENvdW50cnlEYXRhLnBlbmRpbmcgXTogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbZmV0Y2hDb3VudHJ5RGF0YS5mdWxmaWxsZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3N1Y2NlZWRlZCc7XG4gICAgICAgICAgICBzdGF0ZS5jb3VudHJ5RGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgW2ZldGNoQ291bnRyeURhdGEucmVqZWN0ZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ2ZhaWxlZCc7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvci5tZXNzYWdlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgW2ZldGNoQ291bnRyaWVzLnBlbmRpbmcgXTogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbZmV0Y2hDb3VudHJpZXMuZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdzdWNjZWVkZWQnO1xuICAgICAgICAgICAgc3RhdGUuY291bnRyaWVzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbZmV0Y2hDb3VudHJpZXMucmVqZWN0ZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ2ZhaWxlZCc7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvci5tZXNzYWdlO1xuICAgICAgICAgIH0sXG4gICAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgeyBzZXRTZWxlY3RlZENvdW50cnkgfSA9IGNvdmlkVHJhY2tlclNsaWNlLmFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgY292aWRUcmFja2VyU2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImZldGNoQ291bnRyeURhdGEiLCJmZXRjaENvdW50cmllcyIsImluaXRpYWxTdGF0ZSIsInBob3RvZ3JhcGhlcnMiLCJzZWxlY3RlZFByb2Zlc3Npb25hbCIsInN0YXR1cyIsImVycm9yIiwiY292aWRUcmFja2VyU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRTZWxlY3RlZFByb2Zlc3Npb25hbCIsInN0YXRlIiwiYWN0aW9uIiwic2VsZWN0ZWRDb3VudHJ5IiwicGF5bG9hZCIsImV4dHJhUmVkdWNlcnMiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwiY291bnRyeURhdGEiLCJyZWplY3RlZCIsIm1lc3NhZ2UiLCJjb3VudHJpZXMiLCJzZXRTZWxlY3RlZENvdW50cnkiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/slice.js\n"));

/***/ })

});