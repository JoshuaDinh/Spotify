"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_middleware",{

/***/ "(middleware)/./pages/_middleware.js":
/*!******************************!*\
  !*** ./pages/_middleware.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middleware\": function() { return /* binding */ middleware; }\n/* harmony export */ });\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/jwt */ \"./node_modules/next-auth/jwt/index.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"./node_modules/next/server.js\");\n\n\nasync function middleware(req) {\n    // Create token if user is logged in\n    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n        req,\n        secret: process.env.JWT_SECRET\n    });\n    const { pathname  } = req.nextUrl;\n    // Allow request if the following is true..\n    //1) It is a request for next-auth session & provider fetching\n    //2) The token exists\n    if (pathname.includes(\"/api/auth\") || token) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.next();\n    }\n    // 3) Redirect user to login if they dont have token and are requesting a protected route\n    if (!token && pathname !== \"/login\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.redirect(\"/login\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vcGFnZXMvX21pZGRsZXdhcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNFO0FBRW5DLGVBQWVFLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFLENBQUM7SUFDckMsRUFBb0M7SUFDcEMsS0FBSyxDQUFDQyxLQUFLLEdBQUcsS0FBSyxDQUFDSix1REFBUSxDQUFDLENBQUM7UUFBQ0csR0FBRztRQUFFRSxNQUFNLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxVQUFVO0lBQUMsQ0FBQztJQUVwRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxHQUFHTixHQUFHLENBQUNPLE9BQU87SUFFaEMsRUFBMkM7SUFDM0MsRUFBOEQ7SUFDOUQsRUFBcUI7SUFFckIsRUFBRSxFQUFFRCxRQUFRLENBQUNFLFFBQVEsQ0FBQyxDQUFXLGVBQUtQLEtBQUssRUFBRSxDQUFDO1FBQzVDLE1BQU0sQ0FBQ0gsMERBQWlCO0lBQzFCLENBQUM7SUFDRCxFQUF5RjtJQUV6RixFQUFFLEdBQUdHLEtBQUssSUFBSUssUUFBUSxLQUFLLENBQVEsU0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQ1IsOERBQXFCLENBQUMsQ0FBUTtJQUN2QyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fbWlkZGxld2FyZS5qcz81MzNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFRva2VuIH0gZnJvbSBcIm5leHQtYXV0aC9qd3RcIjtcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEpIHtcbiAgLy8gQ3JlYXRlIHRva2VuIGlmIHVzZXIgaXMgbG9nZ2VkIGluXG4gIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyByZXEsIHNlY3JldDogcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCB9KTtcblxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSByZXEubmV4dFVybDtcblxuICAvLyBBbGxvdyByZXF1ZXN0IGlmIHRoZSBmb2xsb3dpbmcgaXMgdHJ1ZS4uXG4gIC8vMSkgSXQgaXMgYSByZXF1ZXN0IGZvciBuZXh0LWF1dGggc2Vzc2lvbiAmIHByb3ZpZGVyIGZldGNoaW5nXG4gIC8vMikgVGhlIHRva2VuIGV4aXN0c1xuXG4gIGlmIChwYXRobmFtZS5pbmNsdWRlcyhcIi9hcGkvYXV0aFwiKSB8fCB0b2tlbikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xuICB9XG4gIC8vIDMpIFJlZGlyZWN0IHVzZXIgdG8gbG9naW4gaWYgdGhleSBkb250IGhhdmUgdG9rZW4gYW5kIGFyZSByZXF1ZXN0aW5nIGEgcHJvdGVjdGVkIHJvdXRlXG5cbiAgaWYgKCF0b2tlbiAmJiBwYXRobmFtZSAhPT0gXCIvbG9naW5cIikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QoXCIvbG9naW5cIik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZXRUb2tlbiIsIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJ0b2tlbiIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwicGF0aG5hbWUiLCJuZXh0VXJsIiwiaW5jbHVkZXMiLCJuZXh0IiwicmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./pages/_middleware.js\n");

/***/ })

});