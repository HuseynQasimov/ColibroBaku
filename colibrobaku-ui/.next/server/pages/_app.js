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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_StoreContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/StoreContext */ \"./utils/StoreContext.tsx\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notistack */ \"notistack\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"C:\\\\Projects\\\\ColibroBaku\\\\colibrobaku-ui\\\\pages\\\\_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({\n  uri: 'http://localhost:8000/graphql',\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache(),\n  credentials: 'include'\n});\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  const {\n    0: value,\n    1: setValue\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const {\n    0: isAdmin,\n    1: setIsAdmin\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const {\n    0: userId,\n    1: setUserId\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const jssStyles = document.querySelector('#jss-server-side');\n\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n    client: client,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(notistack__WEBPACK_IMPORTED_MODULE_4__.SnackbarProvider, {\n      maxSnack: 3,\n      anchorOrigin: {\n        vertical: 'top',\n        horizontal: 'center'\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_utils_StoreContext__WEBPACK_IMPORTED_MODULE_3__.StoreContext.Provider, {\n        value: {\n          value,\n          setValue,\n          isAdmin,\n          setIsAdmin,\n          userId,\n          setUserId\n        },\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n} // anchorOrigin={{ vertical: 'top', horizontal: 'center' }}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTVEsTUFBTSxHQUFHLElBQUlMLHdEQUFKLENBQWlCO0FBQzlCTSxFQUFBQSxHQUFHLEVBQUUsK0JBRHlCO0FBRTlCQyxFQUFBQSxLQUFLLEVBQUUsSUFBSUwseURBQUosRUFGdUI7QUFHOUJNLEVBQUFBLFdBQVcsRUFBRTtBQUhpQixDQUFqQixDQUFmOztBQU1BLFNBQVNDLEdBQVQsQ0FBYztBQUFFQyxFQUFBQSxTQUFGO0FBQWFDLEVBQUFBO0FBQWIsQ0FBZCxFQUF3QztBQUN0QyxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JkLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDZSxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QmhCLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDaUIsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBcEM7QUFFQUQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTW9CLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUFsQjs7QUFDQSxRQUFJRixTQUFKLEVBQWU7QUFDYkEsTUFBQUEsU0FBUyxDQUFDRyxhQUFWLENBQXdCQyxXQUF4QixDQUFvQ0osU0FBcEM7QUFDRDtBQUNGLEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxzQkFDRSw4REFBQywwREFBRDtBQUFnQixVQUFNLEVBQUViLE1BQXhCO0FBQUEsMkJBQ0UsOERBQUMsdURBQUQ7QUFBa0IsY0FBUSxFQUFFLENBQTVCO0FBQStCLGtCQUFZLEVBQUU7QUFBRWtCLFFBQUFBLFFBQVEsRUFBRSxLQUFaO0FBQW1CQyxRQUFBQSxVQUFVLEVBQUU7QUFBL0IsT0FBN0M7QUFBQSw2QkFDRSw4REFBQyxzRUFBRDtBQUF1QixhQUFLLEVBQUU7QUFBRVosVUFBQUEsS0FBRjtBQUFTQyxVQUFBQSxRQUFUO0FBQW1CQyxVQUFBQSxPQUFuQjtBQUE0QkMsVUFBQUEsVUFBNUI7QUFBd0NDLFVBQUFBLE1BQXhDO0FBQWdEQyxVQUFBQTtBQUFoRCxTQUE5QjtBQUFBLCtCQUNFLDhEQUFDLFNBQUQsb0JBQWVOLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0QsRUFDRDs7O0FBRUEsaUVBQWVGLEdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xpYnJvYmFrdS11aS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBBcG9sbG9Qcm92aWRlciwgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xuaW1wb3J0IHsgU3RvcmVDb250ZXh0IH0gZnJvbSAnLi4vdXRpbHMvU3RvcmVDb250ZXh0J1xuaW1wb3J0IHsgU25hY2tiYXJQcm92aWRlciB9IGZyb20gJ25vdGlzdGFjaydcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIHVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9ncmFwaHFsJyxcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG4gIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbn0pXG5cbmZ1bmN0aW9uIEFwcCAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtpc0FkbWluLCBzZXRJc0FkbWluXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoJycpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJylcbiAgICBpZiAoanNzU3R5bGVzKSB7XG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICA8U25hY2tiYXJQcm92aWRlciBtYXhTbmFjaz17M30gYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ2NlbnRlcicgfX0+XG4gICAgICAgIDxTdG9yZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdmFsdWUsIHNldFZhbHVlLCBpc0FkbWluLCBzZXRJc0FkbWluLCB1c2VySWQsIHNldFVzZXJJZCB9fT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9Lz5cbiAgICAgICAgPC9TdG9yZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgICA8L1NuYWNrYmFyUHJvdmlkZXI+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKVxufVxuLy8gYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ2NlbnRlcicgfX1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFwb2xsb0NsaWVudCIsIkFwb2xsb1Byb3ZpZGVyIiwiSW5NZW1vcnlDYWNoZSIsIlN0b3JlQ29udGV4dCIsIlNuYWNrYmFyUHJvdmlkZXIiLCJjbGllbnQiLCJ1cmkiLCJjYWNoZSIsImNyZWRlbnRpYWxzIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidmFsdWUiLCJzZXRWYWx1ZSIsImlzQWRtaW4iLCJzZXRJc0FkbWluIiwidXNlcklkIiwic2V0VXNlcklkIiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwidmVydGljYWwiLCJob3Jpem9udGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./utils/StoreContext.tsx":
/*!********************************!*\
  !*** ./utils/StoreContext.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StoreContext\": () => (/* binding */ StoreContext),\n/* harmony export */   \"ProductQuantity\": () => (/* binding */ ProductQuantity)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StoreContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\nconst ProductQuantity = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9TdG9yZUNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1DLFlBQVksZ0JBQUdELG9EQUFhLEVBQWxDO0FBRUEsTUFBTUUsZUFBZSxnQkFBR0Ysb0RBQWEsRUFBckMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xpYnJvYmFrdS11aS8uL3V0aWxzL1N0b3JlQ29udGV4dC50c3g/M2Y3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgU3RvcmVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFF1YW50aXR5ID0gY3JlYXRlQ29udGV4dCgpXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiU3RvcmVDb250ZXh0IiwiUHJvZHVjdFF1YW50aXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/StoreContext.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "notistack":
/*!****************************!*\
  !*** external "notistack" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("notistack");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();