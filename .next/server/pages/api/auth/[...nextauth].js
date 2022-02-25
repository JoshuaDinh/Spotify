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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/spotify":
/*!**********************************************!*\
  !*** external "next-auth/providers/spotify" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/spotify");

/***/ }),

/***/ "spotify-web-api-node":
/*!***************************************!*\
  !*** external "spotify-web-api-node" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("spotify-web-api-node");

/***/ }),

/***/ "(api)/./lib/spotify.js":
/*!************************!*\
  !*** ./lib/spotify.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"LOGIN_URL\": () => (/* binding */ LOGIN_URL)\n/* harmony export */ });\n/* harmony import */ var spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! spotify-web-api-node */ \"spotify-web-api-node\");\n/* harmony import */ var spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0__);\n\nconst scopes = [\n    \"user-read-email\",\n    \"playlist-read-private\",\n    \"playlist-read-collaborative\",\n    \"streaming\",\n    \"user-read-private\",\n    \"user-read-playback-state\",\n    \"user-modify-playback-state\",\n    \"user-read-currently-playing\",\n    \"user-follow-read\", \n].join(\",\");\nconst params = {\n    scope: scopes\n};\nconst queryParamString = new URLSearchParams(params);\nconst LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;\nconst spotifyApi = new (spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0___default())({\n    clientId: \"9592cae3c2b9476a9ecde2f40d829c2f\",\n    clientSecret: \"2466f5e61c4841338e57ad9b6c1f1f06\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spotifyApi);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc3BvdGlmeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdEO0FBRWhELEtBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDZCxDQUFpQjtJQUNqQixDQUF1QjtJQUN2QixDQUE2QjtJQUM3QixDQUFXO0lBQ1gsQ0FBbUI7SUFDbkIsQ0FBMEI7SUFDMUIsQ0FBNEI7SUFDNUIsQ0FBNkI7SUFDN0IsQ0FBa0I7QUFDcEIsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBRztBQUVWLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDZEMsS0FBSyxFQUFFSCxNQUFNO0FBQ2YsQ0FBQztBQUVELEtBQUssQ0FBQ0ksZ0JBQWdCLEdBQUcsR0FBRyxDQUFDQyxlQUFlLENBQUNILE1BQU07QUFFbkQsS0FBSyxDQUFDSSxTQUFTLElBQUksdUNBQXVDLEVBQUVGLGdCQUFnQixDQUFDRyxRQUFRO0FBRXJGLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLEdBQUcsQ0FBQ1QsNkRBQWEsQ0FBQyxDQUFDO0lBQ3BDVSxRQUFRLEVBQUVDLGtDQUFpQztJQUMzQ0csWUFBWSxFQUFFSCxrQ0FBcUM7QUFDckQsQ0FBQztBQUVELGlFQUFlRixVQUFVLEVBQUM7QUFFTCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9zcG90aWZ5LmpzPzlkZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwb3RpZnlXZWJhUEkgZnJvbSBcInNwb3RpZnktd2ViLWFwaS1ub2RlXCI7XG5cbmNvbnN0IHNjb3BlcyA9IFtcbiAgXCJ1c2VyLXJlYWQtZW1haWxcIixcbiAgXCJwbGF5bGlzdC1yZWFkLXByaXZhdGVcIixcbiAgXCJwbGF5bGlzdC1yZWFkLWNvbGxhYm9yYXRpdmVcIixcbiAgXCJzdHJlYW1pbmdcIixcbiAgXCJ1c2VyLXJlYWQtcHJpdmF0ZVwiLFxuICBcInVzZXItcmVhZC1wbGF5YmFjay1zdGF0ZVwiLFxuICBcInVzZXItbW9kaWZ5LXBsYXliYWNrLXN0YXRlXCIsXG4gIFwidXNlci1yZWFkLWN1cnJlbnRseS1wbGF5aW5nXCIsXG4gIFwidXNlci1mb2xsb3ctcmVhZFwiLFxuXS5qb2luKFwiLFwiKTtcblxuY29uc3QgcGFyYW1zID0ge1xuICBzY29wZTogc2NvcGVzLFxufTtcblxuY29uc3QgcXVlcnlQYXJhbVN0cmluZyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocGFyYW1zKTtcblxuY29uc3QgTE9HSU5fVVJMID0gYGh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXV0aG9yaXplPyR7cXVlcnlQYXJhbVN0cmluZy50b1N0cmluZygpfWA7XG5cbmNvbnN0IHNwb3RpZnlBcGkgPSBuZXcgU3BvdGlmeVdlYmFQSSh7XG4gIGNsaWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfSUQsXG4gIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xJRU5UX1NFQ1JFVCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzcG90aWZ5QXBpO1xuXG5leHBvcnQgeyBMT0dJTl9VUkwgfTtcbiJdLCJuYW1lcyI6WyJTcG90aWZ5V2ViYVBJIiwic2NvcGVzIiwiam9pbiIsInBhcmFtcyIsInNjb3BlIiwicXVlcnlQYXJhbVN0cmluZyIsIlVSTFNlYXJjaFBhcmFtcyIsIkxPR0lOX1VSTCIsInRvU3RyaW5nIiwic3BvdGlmeUFwaSIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIk5FWFRfUFVCTElDX0NMSUVOVF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/spotify.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/spotify */ \"next-auth/providers/spotify\");\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_spotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/spotify */ \"(api)/./lib/spotify.js\");\n\n\n\nasync function refreshAccessToken(token) {\n    try {\n        _lib_spotify__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setAccessToken(token.accessToken);\n        _lib_spotify__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setRefreshToken(token.refreshToken);\n        //   Send both values back to spotify and refresh for valid token\n        const { body: refreshedToken  } = await _lib_spotify__WEBPACK_IMPORTED_MODULE_2__[\"default\"].refreshAccessToken();\n        console.log(\"REFRESHED TOKEN IS\", refreshedToken);\n        return {\n            ...token,\n            accessToken: refreshedToken.access_token,\n            accessTokenExpires: Date.now + refreshedToken.expires_in * 1000,\n            refreshToken: refreshedToken.refresh_token ?? token.refreshToken\n        };\n    } catch (error) {\n        console.error(error);\n        return {\n            ...token,\n            error: \"RefreshAccessTokenError\"\n        };\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: \"9592cae3c2b9476a9ecde2f40d829c2f\",\n            clientSecret: \"2466f5e61c4841338e57ad9b6c1f1f06\",\n            authorization: _lib_spotify__WEBPACK_IMPORTED_MODULE_2__.LOGIN_URL\n        })\n    ],\n    secret: process.env.JWT_SECRET,\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        async jwt ({ token , account , user  }) {\n            // initial sign in\n            if (account && user) {\n                return {\n                    ...token,\n                    accessToken: account.access_token,\n                    refreshToken: account.refresh_token,\n                    username: account.providerAccountId,\n                    accessTokenExpires: account.expires_at * 1000\n                };\n            }\n            //   Return previous token if the access token has not expired\n            if (Date.now() < token.accessTokenExpires) {\n                console.log(\"EXISTING ACCESS TOKEN IS VALID\");\n                return token;\n            }\n            //   If access token is expired - retrieve new token\n            console.log(\"ACCESS TOKEN HAS EXPIRED, REFRESHING...\");\n            return refreshAccessToken;\n        },\n        async session ({ session , token  }) {\n            session.user.accessToken = token.accessToken;\n            session.user.refreshToken = token.refreshToken;\n            session.user.username = token.username;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUN5QjtBQUNHO2VBRTdDSSxrQkFBa0IsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDeEMsR0FBRyxDQUFDLENBQUM7UUFDSEgsbUVBQXlCLENBQUNHLEtBQUssQ0FBQ0UsV0FBVztRQUMzQ0wsb0VBQTBCLENBQUNHLEtBQUssQ0FBQ0ksWUFBWTtRQUU3QyxFQUFpRTtRQUNqRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUVDLGNBQWMsRUFBQyxDQUFDLEdBQUcsS0FBSyxDQUFDVCx1RUFBNkI7UUFDcEVVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQW9CLHFCQUFFRixjQUFjO1FBQ2hELE1BQU0sQ0FBQyxDQUFDO2VBQ0hOLEtBQUs7WUFDUkUsV0FBVyxFQUFFSSxjQUFjLENBQUNHLFlBQVk7WUFDeENDLGtCQUFrQixFQUFFQyxJQUFJLENBQUNDLEdBQUcsR0FBR04sY0FBYyxDQUFDTyxVQUFVLEdBQUcsSUFBSTtZQUMvRFQsWUFBWSxFQUFFRSxjQUFjLENBQUNRLGFBQWEsSUFBSWQsS0FBSyxDQUFDSSxZQUFZO1FBQ2xFLENBQUM7SUFDSCxDQUFDLENBQUMsS0FBSyxFQUFFVyxLQUFLLEVBQUUsQ0FBQztRQUNmUixPQUFPLENBQUNRLEtBQUssQ0FBQ0EsS0FBSztRQUNuQixNQUFNLENBQUMsQ0FBQztlQUFJZixLQUFLO1lBQUVlLEtBQUssRUFBRSxDQUF5QjtRQUFDLENBQUM7SUFDdkQsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZXBCLGdEQUFRLENBQUMsQ0FBQztJQUN2QixFQUFpRDtJQUNqRHFCLFNBQVMsRUFBRSxDQUFDO1FBQ1ZwQixrRUFBZSxDQUFDLENBQUM7WUFDZnFCLFFBQVEsRUFBRUMsa0NBQWlDO1lBQzNDRyxZQUFZLEVBQUVILGtDQUFxQztZQUNuREssYUFBYSxFQUFFekIsbURBQVM7UUFDMUIsQ0FBQztJQUVILENBQUM7SUFDRDBCLE1BQU0sRUFBRU4sT0FBTyxDQUFDQyxHQUFHLENBQUNNLFVBQVU7SUFDOUJDLEtBQUssRUFBRSxDQUFDO1FBQUNDLE1BQU0sRUFBRSxDQUFRO0lBQUMsQ0FBQztJQUMzQkMsU0FBUyxFQUFFLENBQUM7Y0FDSkMsR0FBRyxFQUFDLENBQUMsQ0FBQzdCLEtBQUssR0FBRThCLE9BQU8sR0FBRUMsSUFBSSxFQUFDLENBQUMsRUFBRSxDQUFDO1lBQ25DLEVBQWtCO1lBQ2xCLEVBQUUsRUFBRUQsT0FBTyxJQUFJQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLENBQUM7dUJBQ0gvQixLQUFLO29CQUNSRSxXQUFXLEVBQUU0QixPQUFPLENBQUNyQixZQUFZO29CQUNqQ0wsWUFBWSxFQUFFMEIsT0FBTyxDQUFDaEIsYUFBYTtvQkFDbkNrQixRQUFRLEVBQUVGLE9BQU8sQ0FBQ0csaUJBQWlCO29CQUNuQ3ZCLGtCQUFrQixFQUFFb0IsT0FBTyxDQUFDSSxVQUFVLEdBQUcsSUFBSTtnQkFDL0MsQ0FBQztZQUNILENBQUM7WUFDRCxFQUE4RDtZQUM5RCxFQUFFLEVBQUV2QixJQUFJLENBQUNDLEdBQUcsS0FBS1osS0FBSyxDQUFDVSxrQkFBa0IsRUFBRSxDQUFDO2dCQUMxQ0gsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBZ0M7Z0JBQzVDLE1BQU0sQ0FBQ1IsS0FBSztZQUNkLENBQUM7WUFDRCxFQUFvRDtZQUNwRE8sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBeUM7WUFDckQsTUFBTSxDQUFDVCxrQkFBa0I7UUFDM0IsQ0FBQztjQUNLb0MsT0FBTyxFQUFDLENBQUMsQ0FBQ0EsT0FBTyxHQUFFbkMsS0FBSyxFQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2pDbUMsT0FBTyxDQUFDSixJQUFJLENBQUM3QixXQUFXLEdBQUdGLEtBQUssQ0FBQ0UsV0FBVztZQUM1Q2lDLE9BQU8sQ0FBQ0osSUFBSSxDQUFDM0IsWUFBWSxHQUFHSixLQUFLLENBQUNJLFlBQVk7WUFDOUMrQixPQUFPLENBQUNKLElBQUksQ0FBQ0MsUUFBUSxHQUFHaEMsS0FBSyxDQUFDZ0MsUUFBUTtZQUV0QyxNQUFNLENBQUNHLE9BQU87UUFDaEIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IFNwb3RpZnlQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9zcG90aWZ5XCI7XG5pbXBvcnQgc3BvdGlmeUFwaSwgeyBMT0dJTl9VUkwgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3Nwb3RpZnlcIjtcblxuYXN5bmMgZnVuY3Rpb24gcmVmcmVzaEFjY2Vzc1Rva2VuKHRva2VuKSB7XG4gIHRyeSB7XG4gICAgc3BvdGlmeUFwaS5zZXRBY2Nlc3NUb2tlbih0b2tlbi5hY2Nlc3NUb2tlbik7XG4gICAgc3BvdGlmeUFwaS5zZXRSZWZyZXNoVG9rZW4odG9rZW4ucmVmcmVzaFRva2VuKTtcblxuICAgIC8vICAgU2VuZCBib3RoIHZhbHVlcyBiYWNrIHRvIHNwb3RpZnkgYW5kIHJlZnJlc2ggZm9yIHZhbGlkIHRva2VuXG4gICAgY29uc3QgeyBib2R5OiByZWZyZXNoZWRUb2tlbiB9ID0gYXdhaXQgc3BvdGlmeUFwaS5yZWZyZXNoQWNjZXNzVG9rZW4oKTtcbiAgICBjb25zb2xlLmxvZyhcIlJFRlJFU0hFRCBUT0tFTiBJU1wiLCByZWZyZXNoZWRUb2tlbik7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRva2VuLFxuICAgICAgYWNjZXNzVG9rZW46IHJlZnJlc2hlZFRva2VuLmFjY2Vzc190b2tlbixcbiAgICAgIGFjY2Vzc1Rva2VuRXhwaXJlczogRGF0ZS5ub3cgKyByZWZyZXNoZWRUb2tlbi5leHBpcmVzX2luICogMTAwMCwgLy8gMSBob3VyIGFzIDM2MDAgcmV0dXJucyBmcm9tIHNwb3RpZnkgQVBJXG4gICAgICByZWZyZXNoVG9rZW46IHJlZnJlc2hlZFRva2VuLnJlZnJlc2hfdG9rZW4gPz8gdG9rZW4ucmVmcmVzaFRva2VuLCAvL1VzZSByZWZyZXNoIHRva2VuIGlmIGF2YWlsYWJsZSwgb3RoZXJ3aXNlIHN1ZSBmYWxsYmFja1xuICAgIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmV0dXJuIHsgLi4udG9rZW4sIGVycm9yOiBcIlJlZnJlc2hBY2Nlc3NUb2tlbkVycm9yXCIgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XG4gIC8vIENvbmZpZ3VyZSBvbmUgb3IgbW9yZSBhdXRoZW50aWNhdGlvbiBwcm92aWRlcnNcbiAgcHJvdmlkZXJzOiBbXG4gICAgU3BvdGlmeVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DTElFTlRfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMSUVOVF9TRUNSRVQsXG4gICAgICBhdXRob3JpemF0aW9uOiBMT0dJTl9VUkwsXG4gICAgfSksXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcbiAgXSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxuICBwYWdlczogeyBzaWduSW46IFwiL2xvZ2luXCIgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIGFjY291bnQsIHVzZXIgfSkge1xuICAgICAgLy8gaW5pdGlhbCBzaWduIGluXG4gICAgICBpZiAoYWNjb3VudCAmJiB1c2VyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4udG9rZW4sXG4gICAgICAgICAgYWNjZXNzVG9rZW46IGFjY291bnQuYWNjZXNzX3Rva2VuLFxuICAgICAgICAgIHJlZnJlc2hUb2tlbjogYWNjb3VudC5yZWZyZXNoX3Rva2VuLFxuICAgICAgICAgIHVzZXJuYW1lOiBhY2NvdW50LnByb3ZpZGVyQWNjb3VudElkLFxuICAgICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJlczogYWNjb3VudC5leHBpcmVzX2F0ICogMTAwMCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIC8vICAgUmV0dXJuIHByZXZpb3VzIHRva2VuIGlmIHRoZSBhY2Nlc3MgdG9rZW4gaGFzIG5vdCBleHBpcmVkXG4gICAgICBpZiAoRGF0ZS5ub3coKSA8IHRva2VuLmFjY2Vzc1Rva2VuRXhwaXJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVYSVNUSU5HIEFDQ0VTUyBUT0tFTiBJUyBWQUxJRFwiKTtcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfVxuICAgICAgLy8gICBJZiBhY2Nlc3MgdG9rZW4gaXMgZXhwaXJlZCAtIHJldHJpZXZlIG5ldyB0b2tlblxuICAgICAgY29uc29sZS5sb2coXCJBQ0NFU1MgVE9LRU4gSEFTIEVYUElSRUQsIFJFRlJFU0hJTkcuLi5cIik7XG4gICAgICByZXR1cm4gcmVmcmVzaEFjY2Vzc1Rva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIHNlc3Npb24udXNlci5hY2Nlc3NUb2tlbiA9IHRva2VuLmFjY2Vzc1Rva2VuO1xuICAgICAgc2Vzc2lvbi51c2VyLnJlZnJlc2hUb2tlbiA9IHRva2VuLnJlZnJlc2hUb2tlbjtcbiAgICAgIHNlc3Npb24udXNlci51c2VybmFtZSA9IHRva2VuLnVzZXJuYW1lO1xuXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJTcG90aWZ5UHJvdmlkZXIiLCJzcG90aWZ5QXBpIiwiTE9HSU5fVVJMIiwicmVmcmVzaEFjY2Vzc1Rva2VuIiwidG9rZW4iLCJzZXRBY2Nlc3NUb2tlbiIsImFjY2Vzc1Rva2VuIiwic2V0UmVmcmVzaFRva2VuIiwicmVmcmVzaFRva2VuIiwiYm9keSIsInJlZnJlc2hlZFRva2VuIiwiY29uc29sZSIsImxvZyIsImFjY2Vzc190b2tlbiIsImFjY2Vzc1Rva2VuRXhwaXJlcyIsIkRhdGUiLCJub3ciLCJleHBpcmVzX2luIiwicmVmcmVzaF90b2tlbiIsImVycm9yIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiTkVYVF9QVUJMSUNfQ0xJRU5UX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJzZWNyZXQiLCJKV1RfU0VDUkVUIiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJqd3QiLCJhY2NvdW50IiwidXNlciIsInVzZXJuYW1lIiwicHJvdmlkZXJBY2NvdW50SWQiLCJleHBpcmVzX2F0Iiwic2Vzc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();