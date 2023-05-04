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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setselectedProfession\": function() { return /* binding */ setselectedProfession; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./redux/services.js\");\n\n\nconst initialState = {\n    photographers: [],\n    selectedProfession: null,\n    filteredPhotographers: null,\n    status: \"idle\",\n    error: null\n};\nconst photographersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"covidTracker\",\n    initialState,\n    reducers: {\n        setselectedProfession: (state, action)=>{\n            state.selectedProfession = action.payload;\n        }\n    },\n    extraReducers: {\n        [fetchCountryData.pending]: (state)=>{\n            state.status = \"loading\";\n        },\n        [fetchCountryData.fulfilled]: (state, action)=>{\n            state.status = \"succeeded\";\n            state.countryData = action.payload;\n        },\n        [fetchCountryData.rejected]: (state, action)=>{\n            state.status = \"failed\";\n            state.error = action.error.message;\n        },\n        [fetchCountries.pending]: (state)=>{\n            state.status = \"loading\";\n            state.error = null;\n        },\n        [fetchCountries.fulfilled]: (state, action)=>{\n            state.status = \"succeeded\";\n            state.countries = action.payload;\n        },\n        [fetchCountries.rejected]: (state, action)=>{\n            state.status = \"failed\";\n            state.error = action.error.message;\n        }\n    }\n});\nconst { setselectedProfession  } = photographersSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (photographersSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFDNEI7QUFFM0UsTUFBTUcsZUFBZTtJQUNqQkMsZUFBZSxFQUFFO0lBQ2pCQyxvQkFBb0IsSUFBSTtJQUN4QkMsdUJBQXVCLElBQUk7SUFDM0JDLFFBQVE7SUFDUkMsT0FBTyxJQUFJO0FBQ2Y7QUFFQSxNQUFNQyxxQkFBcUJULDZEQUFXQSxDQUFDO0lBQ25DVSxNQUFNO0lBQ05QO0lBQ0FRLFVBQVU7UUFDTkMsdUJBQXVCLENBQUNDLE9BQU9DLFNBQVc7WUFDdENELE1BQU1SLGtCQUFrQixHQUFHUyxPQUFPQyxPQUFPO1FBQzdDO0lBQ0o7SUFDQUMsZUFBZTtRQUNULENBQUNDLGlCQUFpQkMsT0FBTyxDQUFFLEVBQUUsQ0FBQ0wsUUFBVTtZQUN0Q0EsTUFBTU4sTUFBTSxHQUFHO1FBQ2pCO1FBQ0EsQ0FBQ1UsaUJBQWlCRSxTQUFTLENBQUMsRUFBRSxDQUFDTixPQUFPQyxTQUFXO1lBQy9DRCxNQUFNTixNQUFNLEdBQUc7WUFDZk0sTUFBTU8sV0FBVyxHQUFHTixPQUFPQyxPQUFPO1FBQ3BDO1FBQ0EsQ0FBQ0UsaUJBQWlCSSxRQUFRLENBQUMsRUFBRSxDQUFDUixPQUFPQyxTQUFXO1lBQzlDRCxNQUFNTixNQUFNLEdBQUc7WUFDZk0sTUFBTUwsS0FBSyxHQUFHTSxPQUFPTixLQUFLLENBQUNjLE9BQU87UUFDcEM7UUFDQSxDQUFDQyxlQUFlTCxPQUFPLENBQUUsRUFBRSxDQUFDTCxRQUFVO1lBQ3BDQSxNQUFNTixNQUFNLEdBQUc7WUFDZk0sTUFBTUwsS0FBSyxHQUFHLElBQUk7UUFDcEI7UUFDQSxDQUFDZSxlQUFlSixTQUFTLENBQUMsRUFBRSxDQUFDTixPQUFPQyxTQUFXO1lBQzdDRCxNQUFNTixNQUFNLEdBQUc7WUFDZk0sTUFBTVcsU0FBUyxHQUFHVixPQUFPQyxPQUFPO1FBQ2xDO1FBQ0EsQ0FBQ1EsZUFBZUYsUUFBUSxDQUFDLEVBQUUsQ0FBQ1IsT0FBT0MsU0FBVztZQUM1Q0QsTUFBTU4sTUFBTSxHQUFHO1lBQ2ZNLE1BQU1MLEtBQUssR0FBR00sT0FBT04sS0FBSyxDQUFDYyxPQUFPO1FBQ3BDO0lBQ0o7QUFDTjtBQUVPLE1BQU0sRUFBRVYsc0JBQXFCLEVBQUUsR0FBR0gsbUJBQW1CZ0IsT0FBTztBQUVuRSwrREFBZWhCLG1CQUFtQmlCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdXgvc2xpY2UuanM/ODgyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBmZXRjaEZpbHRlcmVkUGhvdG9ncmFwaGVycywgZmV0Y2hQaG90b2dyYXBoZXJzIH0gZnJvbSBcIi4vc2VydmljZXNcIlxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgcGhvdG9ncmFwaGVyczogW10sXG4gICAgc2VsZWN0ZWRQcm9mZXNzaW9uOiBudWxsLFxuICAgIGZpbHRlcmVkUGhvdG9ncmFwaGVyczogbnVsbCxcbiAgICBzdGF0dXM6IFwiaWRsZVwiLFxuICAgIGVycm9yOiBudWxsXG59XG5cbmNvbnN0IHBob3RvZ3JhcGhlcnNTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiBcImNvdmlkVHJhY2tlclwiLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzZXRzZWxlY3RlZFByb2Zlc3Npb246IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFByb2Zlc3Npb24gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZXh0cmFSZWR1Y2Vyczoge1xuICAgICAgICAgIFtmZXRjaENvdW50cnlEYXRhLnBlbmRpbmcgXTogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbZmV0Y2hDb3VudHJ5RGF0YS5mdWxmaWxsZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ3N1Y2NlZWRlZCc7XG4gICAgICAgICAgICBzdGF0ZS5jb3VudHJ5RGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgW2ZldGNoQ291bnRyeURhdGEucmVqZWN0ZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ2ZhaWxlZCc7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvci5tZXNzYWdlO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgW2ZldGNoQ291bnRyaWVzLnBlbmRpbmcgXTogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbZmV0Y2hDb3VudHJpZXMuZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdzdWNjZWVkZWQnO1xuICAgICAgICAgICAgc3RhdGUuY291bnRyaWVzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbZmV0Y2hDb3VudHJpZXMucmVqZWN0ZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ2ZhaWxlZCc7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvci5tZXNzYWdlO1xuICAgICAgICAgIH0sXG4gICAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgeyBzZXRzZWxlY3RlZFByb2Zlc3Npb24gfSA9IHBob3RvZ3JhcGhlcnNTbGljZS5hY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IHBob3RvZ3JhcGhlcnNTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiZmV0Y2hGaWx0ZXJlZFBob3RvZ3JhcGhlcnMiLCJmZXRjaFBob3RvZ3JhcGhlcnMiLCJpbml0aWFsU3RhdGUiLCJwaG90b2dyYXBoZXJzIiwic2VsZWN0ZWRQcm9mZXNzaW9uIiwiZmlsdGVyZWRQaG90b2dyYXBoZXJzIiwic3RhdHVzIiwiZXJyb3IiLCJwaG90b2dyYXBoZXJzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRzZWxlY3RlZFByb2Zlc3Npb24iLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJleHRyYVJlZHVjZXJzIiwiZmV0Y2hDb3VudHJ5RGF0YSIsInBlbmRpbmciLCJmdWxmaWxsZWQiLCJjb3VudHJ5RGF0YSIsInJlamVjdGVkIiwibWVzc2FnZSIsImZldGNoQ291bnRyaWVzIiwiY291bnRyaWVzIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/slice.js\n"));

/***/ })

});