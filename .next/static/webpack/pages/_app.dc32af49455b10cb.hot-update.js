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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setselectedProfession\": function() { return /* binding */ setselectedProfession; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"./redux/services.ts\");\n\n\nconst initialState = {\n    photographers: [],\n    selectedProfession: null,\n    filteredPhotographers: [],\n    photographerById: [],\n    photographerId: null,\n    status: \"idle\",\n    error: null\n};\nconst photographersSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"photographers\",\n    initialState,\n    reducers: {\n        setselectedProfession: (state, action)=>{\n            state.selectedProfession = action.payload;\n        }\n    },\n    extraReducers: {\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchFilteredPhotographers.pending]: (state)=>{\n            state.status = \"loading\";\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchFilteredPhotographers.fulfilled]: (state, action)=>{\n            state.status = \"succeeded\";\n            state.filteredPhotographers = action.payload;\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchFilteredPhotographers.rejected]: (state, action)=>{\n            state.status = \"failed\";\n            state.error = action.error.message;\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchPhotographers.pending]: (state)=>{\n            state.status = \"loading\";\n            state.error = null;\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchPhotographers.fulfilled]: (state, action)=>{\n            state.status = \"succeeded\";\n            state.photographers = action.payload;\n        },\n        [_services__WEBPACK_IMPORTED_MODULE_0__.fetchPhotographers.rejected]: (state, action)=>{\n            state.status = \"failed\";\n            state.error = action.error.message;\n        }\n    }\n});\nconst { setselectedProfession  } = photographersSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (photographersSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0M7QUFDNEI7QUFFM0UsTUFBTUcsZUFBZTtJQUNqQkMsZUFBZSxFQUFFO0lBQ2pCQyxvQkFBb0IsSUFBSTtJQUN4QkMsdUJBQXVCLEVBQUU7SUFDekJDLGtCQUFrQixFQUFFO0lBQ3BCQyxnQkFBZ0IsSUFBSTtJQUNwQkMsUUFBUTtJQUNSQyxPQUFPLElBQUk7QUFDZjtBQUVBLE1BQU1DLHFCQUFxQlgsNkRBQVdBLENBQUM7SUFDbkNZLE1BQU07SUFDTlQ7SUFDQVUsVUFBVTtRQUNOQyx1QkFBdUIsQ0FBQ0MsT0FBT0MsU0FBVztZQUN0Q0QsTUFBTVYsa0JBQWtCLEdBQUdXLE9BQU9DLE9BQU87UUFDN0M7SUFDSjtJQUNBQyxlQUFlO1FBQ1QsQ0FBQ2pCLHlFQUFrQyxDQUFFLEVBQUUsQ0FBQ2MsUUFBVTtZQUNoREEsTUFBTU4sTUFBTSxHQUFHO1FBQ2pCO1FBQ0EsQ0FBQ1IsMkVBQW9DLENBQUMsRUFBRSxDQUFDYyxPQUFPQyxTQUFXO1lBQ3pERCxNQUFNTixNQUFNLEdBQUc7WUFDZk0sTUFBTVQscUJBQXFCLEdBQUdVLE9BQU9DLE9BQU87UUFDOUM7UUFDQSxDQUFDaEIsMEVBQW1DLENBQUMsRUFBRSxDQUFDYyxPQUFPQyxTQUFXO1lBQ3hERCxNQUFNTixNQUFNLEdBQUc7WUFDZk0sTUFBTUwsS0FBSyxHQUFHTSxPQUFPTixLQUFLLENBQUNZLE9BQU87UUFDcEM7UUFDQSxDQUFDcEIsaUVBQTBCLENBQUUsRUFBRSxDQUFDYSxRQUFVO1lBQ3hDQSxNQUFNTixNQUFNLEdBQUc7WUFDZk0sTUFBTUwsS0FBSyxHQUFHLElBQUk7UUFDcEI7UUFDQSxDQUFDUixtRUFBNEIsQ0FBQyxFQUFFLENBQUNhLE9BQU9DLFNBQVc7WUFDakRELE1BQU1OLE1BQU0sR0FBRztZQUNmTSxNQUFNWCxhQUFhLEdBQUdZLE9BQU9DLE9BQU87UUFDdEM7UUFDQSxDQUFDZixrRUFBMkIsQ0FBQyxFQUFFLENBQUNhLE9BQU9DLFNBQVc7WUFDaERELE1BQU1OLE1BQU0sR0FBRztZQUNmTSxNQUFNTCxLQUFLLEdBQUdNLE9BQU9OLEtBQUssQ0FBQ1ksT0FBTztRQUNwQztJQUNKO0FBQ047QUFFTyxNQUFNLEVBQUVSLHNCQUFxQixFQUFFLEdBQUdILG1CQUFtQlksT0FBTztBQUVuRSwrREFBZVosbUJBQW1CYSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3JlZHV4L3NsaWNlLmpzPzg4MmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuaW1wb3J0IHsgZmV0Y2hGaWx0ZXJlZFBob3RvZ3JhcGhlcnMsIGZldGNoUGhvdG9ncmFwaGVycyB9IGZyb20gXCIuL3NlcnZpY2VzXCJcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHBob3RvZ3JhcGhlcnM6IFtdLFxuICAgIHNlbGVjdGVkUHJvZmVzc2lvbjogbnVsbCxcbiAgICBmaWx0ZXJlZFBob3RvZ3JhcGhlcnM6IFtdLFxuICAgIHBob3RvZ3JhcGhlckJ5SWQ6IFtdLFxuICAgIHBob3RvZ3JhcGhlcklkOiBudWxsLFxuICAgIHN0YXR1czogXCJpZGxlXCIsXG4gICAgZXJyb3I6IG51bGxcbn1cblxuY29uc3QgcGhvdG9ncmFwaGVyc1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6IFwicGhvdG9ncmFwaGVyc1wiLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzZXRzZWxlY3RlZFByb2Zlc3Npb246IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFByb2Zlc3Npb24gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZXh0cmFSZWR1Y2Vyczoge1xuICAgICAgICAgIFtmZXRjaEZpbHRlcmVkUGhvdG9ncmFwaGVycy5wZW5kaW5nIF06IChzdGF0ZSkgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc3RhdHVzID0gJ2xvYWRpbmcnO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgW2ZldGNoRmlsdGVyZWRQaG90b2dyYXBoZXJzLmZ1bGZpbGxlZF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnc3VjY2VlZGVkJztcbiAgICAgICAgICAgIHN0YXRlLmZpbHRlcmVkUGhvdG9ncmFwaGVycyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgW2ZldGNoRmlsdGVyZWRQaG90b2dyYXBoZXJzLnJlamVjdGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdmYWlsZWQnO1xuICAgICAgICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24uZXJyb3IubWVzc2FnZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtmZXRjaFBob3RvZ3JhcGhlcnMucGVuZGluZyBdOiAoc3RhdGUpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdsb2FkaW5nJztcbiAgICAgICAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtmZXRjaFBob3RvZ3JhcGhlcnMuZnVsZmlsbGVkXTogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnN0YXR1cyA9ICdzdWNjZWVkZWQnO1xuICAgICAgICAgICAgc3RhdGUucGhvdG9ncmFwaGVycyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgW2ZldGNoUGhvdG9ncmFwaGVycy5yZWplY3RlZF06IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnZmFpbGVkJztcbiAgICAgICAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgfSxcbiAgICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7IHNldHNlbGVjdGVkUHJvZmVzc2lvbiB9ID0gcGhvdG9ncmFwaGVyc1NsaWNlLmFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgcGhvdG9ncmFwaGVyc1NsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJmZXRjaEZpbHRlcmVkUGhvdG9ncmFwaGVycyIsImZldGNoUGhvdG9ncmFwaGVycyIsImluaXRpYWxTdGF0ZSIsInBob3RvZ3JhcGhlcnMiLCJzZWxlY3RlZFByb2Zlc3Npb24iLCJmaWx0ZXJlZFBob3RvZ3JhcGhlcnMiLCJwaG90b2dyYXBoZXJCeUlkIiwicGhvdG9ncmFwaGVySWQiLCJzdGF0dXMiLCJlcnJvciIsInBob3RvZ3JhcGhlcnNTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldHNlbGVjdGVkUHJvZmVzc2lvbiIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImV4dHJhUmVkdWNlcnMiLCJwZW5kaW5nIiwiZnVsZmlsbGVkIiwicmVqZWN0ZWQiLCJtZXNzYWdlIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/slice.js\n"));

/***/ })

});