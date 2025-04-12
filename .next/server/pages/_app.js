"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/SPWorldsProvider.tsx":
/*!*********************************************!*\
  !*** ./src/components/SPWorldsProvider.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SPWorldsContext: () => (/* binding */ SPWorldsContext),\n/* harmony export */   SPWorldsProvider: () => (/* binding */ SPWorldsProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var spwmini_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! spwmini/client */ \"spwmini/client\");\n/* harmony import */ var _config_spworlds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/spworlds */ \"./src/config/spworlds.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([spwmini_client__WEBPACK_IMPORTED_MODULE_2__]);\nspwmini_client__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n/* __next_internal_client_entry_do_not_use__ SPWorldsContext,SPWorldsProvider auto */ \n\n\n\nconst SPWorldsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    spm: null,\n    user: null\n});\nconst SPWorldsProvider = ({ children })=>{\n    const [spm, setSpm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const spwmini = new spwmini_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"](_config_spworlds__WEBPACK_IMPORTED_MODULE_3__.SPWORLDS_CONFIG.APP_ID, {\n            autoinit: true\n        });\n        spwmini.on(\"initResponse\", (userData)=>{\n            console.log(`Logged in as ${userData.username}`);\n            setUser(userData);\n        });\n        spwmini.on(\"initError\", (message)=>{\n            console.error(`Log in error: ${message}`);\n        });\n        spwmini.on(\"ready\", ()=>{\n            console.log(\"App is ready!\");\n            setSpm(spwmini);\n        });\n        return ()=>{\n            spwmini.dispose();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SPWorldsContext.Provider, {\n        value: {\n            spm,\n            user\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\GITHUB\\\\SpFreeMoneyFrontend1\\\\src\\\\components\\\\SPWorldsProvider.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TUFdvcmxkc1Byb3ZpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFMkQ7QUFDdEI7QUFDZ0I7QUFFOUMsTUFBTUssZ0NBQWtCSCxvREFBYUEsQ0FHekM7SUFDREksS0FBSztJQUNMQyxNQUFNO0FBQ1IsR0FBRztBQUVJLE1BQU1DLG1CQUFtQixDQUFDLEVBQy9CQyxRQUFRLEVBR1Q7SUFDQyxNQUFNLENBQUNILEtBQUtJLE9BQU8sR0FBR1QsK0NBQVFBLENBQWlCO0lBQy9DLE1BQU0sQ0FBQ00sTUFBTUksUUFBUSxHQUFHViwrQ0FBUUEsQ0FBTTtJQUV0Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNWSxVQUFVLElBQUlULHNEQUFPQSxDQUFDQyw2REFBZUEsQ0FBQ1MsTUFBTSxFQUFFO1lBQ2xEQyxVQUFVO1FBQ1o7UUFFQUYsUUFBUUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDQztZQUMxQkMsUUFBUUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFRixTQUFTRyxRQUFRLENBQUMsQ0FBQztZQUMvQ1IsUUFBUUs7UUFDVjtRQUVBSixRQUFRRyxFQUFFLENBQUMsYUFBYSxDQUFDSztZQUN2QkgsUUFBUUksS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFRCxRQUFRLENBQUM7UUFDMUM7UUFFQVIsUUFBUUcsRUFBRSxDQUFDLFNBQVM7WUFDbEJFLFFBQVFDLEdBQUcsQ0FBQztZQUNaUixPQUFPRTtRQUNUO1FBRUEsT0FBTztZQUNMQSxRQUFRVSxPQUFPO1FBQ2pCO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNqQixnQkFBZ0JrQixRQUFRO1FBQUNDLE9BQU87WUFBRWxCO1lBQUtDO1FBQUs7a0JBQzFDRTs7Ozs7O0FBR1AsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NwLWZyZWUtbW9uZXktZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9TUFdvcmxkc1Byb3ZpZGVyLnRzeD9hNjVkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU1BXTWluaSBmcm9tIFwic3B3bWluaS9jbGllbnRcIjtcclxuaW1wb3J0IHsgU1BXT1JMRFNfQ09ORklHIH0gZnJvbSBcIi4uL2NvbmZpZy9zcHdvcmxkc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNQV29ybGRzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8e1xyXG4gIHNwbTogU1BXTWluaSB8IG51bGw7XHJcbiAgdXNlcjogYW55O1xyXG59Pih7XHJcbiAgc3BtOiBudWxsLFxyXG4gIHVzZXI6IG51bGwsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNQV29ybGRzUHJvdmlkZXIgPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG59OiB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtzcG0sIHNldFNwbV0gPSB1c2VTdGF0ZTxTUFdNaW5pIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8YW55PihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNwd21pbmkgPSBuZXcgU1BXTWluaShTUFdPUkxEU19DT05GSUcuQVBQX0lELCB7XHJcbiAgICAgIGF1dG9pbml0OiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc3B3bWluaS5vbihcImluaXRSZXNwb25zZVwiLCAodXNlckRhdGEpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coYExvZ2dlZCBpbiBhcyAke3VzZXJEYXRhLnVzZXJuYW1lfWApO1xyXG4gICAgICBzZXRVc2VyKHVzZXJEYXRhKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNwd21pbmkub24oXCJpbml0RXJyb3JcIiwgKG1lc3NhZ2UpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihgTG9nIGluIGVycm9yOiAke21lc3NhZ2V9YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzcHdtaW5pLm9uKFwicmVhZHlcIiwgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFwcCBpcyByZWFkeSFcIik7XHJcbiAgICAgIHNldFNwbShzcHdtaW5pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHNwd21pbmkuZGlzcG9zZSgpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U1BXb3JsZHNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHNwbSwgdXNlciB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TUFdvcmxkc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsIlNQV01pbmkiLCJTUFdPUkxEU19DT05GSUciLCJTUFdvcmxkc0NvbnRleHQiLCJzcG0iLCJ1c2VyIiwiU1BXb3JsZHNQcm92aWRlciIsImNoaWxkcmVuIiwic2V0U3BtIiwic2V0VXNlciIsInNwd21pbmkiLCJBUFBfSUQiLCJhdXRvaW5pdCIsIm9uIiwidXNlckRhdGEiLCJjb25zb2xlIiwibG9nIiwidXNlcm5hbWUiLCJtZXNzYWdlIiwiZXJyb3IiLCJkaXNwb3NlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SPWorldsProvider.tsx\n");

/***/ }),

/***/ "./src/config/spworlds.ts":
/*!********************************!*\
  !*** ./src/config/spworlds.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SPWORLDS_CONFIG: () => (/* binding */ SPWORLDS_CONFIG)\n/* harmony export */ });\nconst SPWORLDS_CONFIG = {\n    APP_ID: \"DpxcJ/9UHM4i17AUWW3A1TfU2DcDNNN4\" || 0,\n    APP_TOKEN: process.env.SPWORLDS_TOKEN || \"JzOc8FAOdW1xKK1PyGtXh07oSxUszdcl\",\n    REDIRECT_URI: \"#MINIAPP\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL3Nwd29ybGRzLnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxrQkFBa0I7SUFDN0JDLFFBQ0VDLGtDQUF1QyxJQUN2QyxDQUFrQztJQUNwQ0csV0FBV0gsUUFBUUMsR0FBRyxDQUFDRyxjQUFjLElBQUk7SUFDekNDLGNBQWM7QUFDaEIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NwLWZyZWUtbW9uZXktZnJvbnRlbmQvLi9zcmMvY29uZmlnL3Nwd29ybGRzLnRzPzM3MzEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNQV09STERTX0NPTkZJRyA9IHtcclxuICBBUFBfSUQ6XHJcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TUFdPUkxEU19BUFBfSUQgfHxcclxuICAgIFwiRHB4Y0ovOVVITTRpMTdBVVdXM0ExVGZVMkRjRE5OTjRcIixcclxuICBBUFBfVE9LRU46IHByb2Nlc3MuZW52LlNQV09STERTX1RPS0VOIHx8IFwiSnpPYzhGQU9kVzF4S0sxUHlHdFhoMDdvU3hVc3pkY2xcIixcclxuICBSRURJUkVDVF9VUkk6IFwiI01JTklBUFBcIixcclxufTtcclxuIl0sIm5hbWVzIjpbIlNQV09STERTX0NPTkZJRyIsIkFQUF9JRCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TUFdPUkxEU19BUFBfSUQiLCJBUFBfVE9LRU4iLCJTUFdPUkxEU19UT0tFTiIsIlJFRElSRUNUX1VSSSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/spworlds.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_SPWorldsProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SPWorldsProvider */ \"./src/components/SPWorldsProvider.tsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SPWorldsProvider__WEBPACK_IMPORTED_MODULE_1__]);\n_components_SPWorldsProvider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    \"http-equiv\": \"Content-Security-Policy\",\n                    content: \"frame-ancestors https://spworlds.ru;\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\GITHUB\\\\SpFreeMoneyFrontend1\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\GITHUB\\\\SpFreeMoneyFrontend1\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SPWorldsProvider__WEBPACK_IMPORTED_MODULE_1__.SPWorldsProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\GITHUB\\\\SpFreeMoneyFrontend1\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\GITHUB\\\\SpFreeMoneyFrontend1\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNrRTtBQUNyQztBQUU3QixTQUFTRSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQy9DLHFCQUNFOzswQkFDRSw4REFBQ0gsa0RBQUlBOzBCQUNILDRFQUFDSTtvQkFDQ0MsY0FBVztvQkFDWEMsU0FBUTs7Ozs7Ozs7Ozs7MEJBR1osOERBQUNQLDBFQUFnQkE7MEJBQ2YsNEVBQUNHO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwLWZyZWUtbW9uZXktZnJvbnRlbmQvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB7IFNQV29ybGRzUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TUFdvcmxkc1Byb3ZpZGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIGh0dHAtZXF1aXY9XCJDb250ZW50LVNlY3VyaXR5LVBvbGljeVwiXHJcbiAgICAgICAgICBjb250ZW50PVwiZnJhbWUtYW5jZXN0b3JzIGh0dHBzOi8vc3B3b3JsZHMucnU7XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxTUFdvcmxkc1Byb3ZpZGVyPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9TUFdvcmxkc1Byb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJTUFdvcmxkc1Byb3ZpZGVyIiwiSGVhZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibWV0YSIsImh0dHAtZXF1aXYiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "spwmini/client":
/*!*********************************!*\
  !*** external "spwmini/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("spwmini/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();