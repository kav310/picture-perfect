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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setselectedProfession\": function() { return /* binding */ setselectedProfession; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./redux/services.js\");\n\n\nconst initialState = {\n    photographers: [],\n    selectedProfession: null,\n    filteredPhotographers: null,\n    status: \"idle\",\n    error: null\n};\nconst photographersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"photographers\",\n    initialState,\n    reducers: {\n        setselectedProfession: (state, action)=>{\n            state.selectedProfession = action.payload;\n        }\n    },\n    extraReducers: {\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchFilteredPhotographers.pending]: (state)=>{\n            state.status = \"loading\";\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchFilteredPhotographers.fulfilled]: (state, action)=>{\n            state.status = \"succeeded\";\n            state.countryData = action.payload;\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchFilteredPhotographers.rejected]: (state, action)=>{\n            state.status = \"failed\";\n            state.error = action.error.message;\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchPhotographers.pending]: (state)=>{\n            state.status = \"loading\";\n            state.error = null;\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchPhotographers.fulfilled]: (state, action)=>{\n            state.status = \"succeeded\";\n            console.log(action);\n            state.photographers = action.payload;\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchPhotographers.rejected]: (state, action)=>{\n            state.status = \"failed\";\n            state.error = action.error.message;\n        }\n    }\n});\nconst { setselectedProfession  } = photographersSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (photographersSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFDNEI7QUFFM0UsTUFBTUcsZUFBZTtJQUNqQkMsZUFBZSxFQUFFO0lBQ2pCQyxvQkFBb0IsSUFBSTtJQUN4QkMsdUJBQXVCLElBQUk7SUFDM0JDLFFBQVE7SUFDUkMsT0FBTyxJQUFJO0FBQ2Y7QUFFQSxNQUFNQyxxQkFBcUJULDZEQUFXQSxDQUFDO0lBQ25DVSxNQUFNO0lBQ05QO0lBQ0FRLFVBQVU7UUFDTkMsdUJBQXVCLENBQUNDLE9BQU9DLFNBQVc7WUFDdENELE1BQU1SLGtCQUFrQixHQUFHUyxPQUFPQyxPQUFPO1FBQzdDO0lBQ0o7SUFDQUMsZUFBZTtRQUNULENBQUNmLHlFQUFrQyxDQUFFLEVBQUUsQ0FBQ1ksUUFBVTtZQUNoREEsTUFBTU4sTUFBTSxHQUFHO1FBQ2pCO1FBQ0EsQ0FBQ04sMkVBQW9DLENBQUMsRUFBRSxDQUFDWSxPQUFPQyxTQUFXO1lBQ3pERCxNQUFNTixNQUFNLEdBQUc7WUFDZk0sTUFBTU0sV0FBVyxHQUFHTCxPQUFPQyxPQUFPO1FBQ3BDO1FBQ0EsQ0FBQ2QsMEVBQW1DLENBQUMsRUFBRSxDQUFDWSxPQUFPQyxTQUFXO1lBQ3hERCxNQUFNTixNQUFNLEdBQUc7WUFDZk0sTUFBTUwsS0FBSyxHQUFHTSxPQUFPTixLQUFLLENBQUNhLE9BQU87UUFDcEM7UUFDQSxDQUFDbkIsaUVBQTBCLENBQUUsRUFBRSxDQUFDVyxRQUFVO1lBQ3hDQSxNQUFNTixNQUFNLEdBQUc7WUFDZk0sTUFBTUwsS0FBSyxHQUFHLElBQUk7UUFDcEI7UUFDQSxDQUFDTixtRUFBNEIsQ0FBQyxFQUFFLENBQUNXLE9BQU9DLFNBQVc7WUFDakRELE1BQU1OLE1BQU0sR0FBRztZQUNmZSxRQUFRQyxHQUFHLENBQUNUO1lBQ1pELE1BQU1ULGFBQWEsR0FBR1UsT0FBT0MsT0FBTztRQUN0QztRQUNBLENBQUNiLGtFQUEyQixDQUFDLEVBQUUsQ0FBQ1csT0FBT0MsU0FBVztZQUNoREQsTUFBTU4sTUFBTSxHQUFHO1lBQ2ZNLE1BQU1MLEtBQUssR0FBR00sT0FBT04sS0FBSyxDQUFDYSxPQUFPO1FBQ3BDO0lBQ0o7QUFDTjtBQUVPLE1BQU0sRUFBRVQsc0JBQXFCLEVBQUUsR0FBR0gsbUJBQW1CZSxPQUFPO0FBRW5FLCtEQUFlZixtQkFBbUJnQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L3NsaWNlLmpzPzg4MmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgZmV0Y2hGaWx0ZXJlZFBob3RvZ3JhcGhlcnMsIGZldGNoUGhvdG9ncmFwaGVycyB9IGZyb20gXCIuL3NlcnZpY2VzXCJcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHBob3RvZ3JhcGhlcnM6IFtdLFxuICAgIHNlbGVjdGVkUHJvZmVzc2lvbjogbnVsbCxcbiAgICBmaWx0ZXJlZFBob3RvZ3JhcGhlcnM6IG51bGwsXG4gICAgc3RhdHVzOiBcImlkbGVcIixcbiAgICBlcnJvcjogbnVsbFxufVxuXG5jb25zdCBwaG90b2dyYXBoZXJzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogXCJwaG90b2dyYXBoZXJzXCIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIHNldHNlbGVjdGVkUHJvZmVzc2lvbjogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkUHJvZmVzc2lvbiA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBleHRyYVJlZHVjZXJzOiB7XG4gICAgICAgICAgW2ZldGNoRmlsdGVyZWRQaG90b2dyYXBoZXJzLnBlbmRpbmcgXTogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbZmV0Y2hGaWx0ZXJlZFBob3RvZ3JhcGhlcnMuZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdzdWNjZWVkZWQnO1xuICAgICAgICAgICAgc3RhdGUuY291bnRyeURhdGEgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtmZXRjaEZpbHRlcmVkUGhvdG9ncmFwaGVycy5yZWplY3RlZF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnZmFpbGVkJztcbiAgICAgICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbZmV0Y2hQaG90b2dyYXBoZXJzLnBlbmRpbmcgXTogKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnbG9hZGluZyc7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbZmV0Y2hQaG90b2dyYXBoZXJzLmZ1bGZpbGxlZF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnc3VjY2VlZGVkJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbilcbiAgICAgICAgICAgIHN0YXRlLnBob3RvZ3JhcGhlcnMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtmZXRjaFBob3RvZ3JhcGhlcnMucmVqZWN0ZWRdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ2ZhaWxlZCc7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvci5tZXNzYWdlO1xuICAgICAgICAgIH0sXG4gICAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgeyBzZXRzZWxlY3RlZFByb2Zlc3Npb24gfSA9IHBob3RvZ3JhcGhlcnNTbGljZS5hY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IHBob3RvZ3JhcGhlcnNTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiZmV0Y2hGaWx0ZXJlZFBob3RvZ3JhcGhlcnMiLCJmZXRjaFBob3RvZ3JhcGhlcnMiLCJpbml0aWFsU3RhdGUiLCJwaG90b2dyYXBoZXJzIiwic2VsZWN0ZWRQcm9mZXNzaW9uIiwiZmlsdGVyZWRQaG90b2dyYXBoZXJzIiwic3RhdHVzIiwiZXJyb3IiLCJwaG90b2dyYXBoZXJzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRzZWxlY3RlZFByb2Zlc3Npb24iLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJleHRyYVJlZHVjZXJzIiwicGVuZGluZyIsImZ1bGZpbGxlZCIsImNvdW50cnlEYXRhIiwicmVqZWN0ZWQiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/slice.js\n"));

/***/ })

});