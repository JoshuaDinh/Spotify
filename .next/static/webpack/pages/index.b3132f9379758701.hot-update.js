"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Player/Player.js":
/*!*************************************!*\
  !*** ./components/Player/Player.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Player_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Player.module.css */ \"./components/Player/Player.module.css\");\n/* harmony import */ var _Player_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Player_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useSongInfo */ \"./hooks/useSongInfo.js\");\n/* harmony import */ var _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useSpotify */ \"./hooks/useSpotify.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_songAtom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/songAtom */ \"./atoms/songAtom.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Player = function() {\n    var ref11, ref1, ref2, ref3;\n    _s();\n    var spotifyApi = (0,_hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var ref4 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)(), session = ref4.data;\n    var ref5 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_7__.currentTrackIdState), 2), currentTrackId = ref5[0], setCurrentTrackId = ref5[1];\n    var ref6 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_7__.isPlayingState), 2), isPlaying = ref6[0], setIsPlaying = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50), volume = ref7[0], setVolume = ref7[1];\n    // Custom Hook to retrieve song details\n    var songInfo = (0,_hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    //Use song details to get player controls\n    var fetchCurrentSong = function() {\n        var _ref = _asyncToGenerator(_Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, ref8, ref9, ref10, currentTrack, playbackState;\n            return _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (songInfo) {\n                            _ctx.next = 17;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        ;\n                        _ctx.next = 5;\n                        return spotifyApi.getMyCurrentPlayingTrack();\n                    case 5:\n                        currentTrack = _ctx.sent;\n                        console.log(\"Now Playing: \".concat((ref = currentTrack.body) === null || ref === void 0 ? void 0 : ref.item));\n                        setCurrentTrackId((ref8 = currentTrack.body) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.item) === null || ref9 === void 0 ? void 0 : ref9.id);\n                        _ctx.next = 10;\n                        return spotifyApi.getMyCurrentPlaybackState();\n                    case 10:\n                        playbackState = _ctx.sent;\n                        setIsPlaying((ref10 = playbackState.body) === null || ref10 === void 0 ? void 0 : ref10.is_playing);\n                        _ctx.next = 17;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(error);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    14\n                ]\n            ]);\n        }));\n        return function fetchCurrentSong() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (spotifyApi.getAccessToken() && !currentTrackId) {\n            fetchCurrentSong();\n            setVolume(50);\n        }\n    }, [\n        currentTrackId,\n        spotifyApi,\n        session\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"\".concat((_Player_module_css__WEBPACK_IMPORTED_MODULE_8___default().player), \"  bg-gradient-to-b from-black to-gray-900\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_8___default().image),\n                    src: (ref11 = songInfo === null || songInfo === void 0 ? void 0 : songInfo.album.images) === null || ref11 === void 0 ? void 0 : (ref1 = ref11[0]) === null || ref1 === void 0 ? void 0 : ref1.url,\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_8___default().wrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                            children: songInfo === null || songInfo === void 0 ? void 0 : songInfo.name\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: songInfo === null || songInfo === void 0 ? void 0 : (ref2 = songInfo.artists) === null || ref2 === void 0 ? void 0 : (ref3 = ref2[0]) === null || ref3 === void 0 ? void 0 : ref3.name\n                        }, void 0, false, {\n                            fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this));\n};\n_s(Player, \"v+QqXDiMDjMy7o0B3Ru9YmXmz9o=\", false, function() {\n    return [\n        _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BsYXllci9QbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0g7QUFDUztBQUNGO0FBQ0g7QUFDTDtBQUNtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFFLEdBQUssQ0FBQ1MsTUFBTSxHQUFHLFFBQ2YsR0FEcUIsQ0FBQztxQkFnRFJDLElBQWlCOztJQS9DN0IsR0FBSyxDQUFDQyxVQUFVLEdBQUdQLDZEQUFVO0lBQzdCLEdBQUssQ0FBcUJDLElBQVksR0FBWkEsMkRBQVUsSUFBdEJPLE9BQU8sR0FBS1AsSUFBWSxDQUE5QlEsSUFBSTtJQUVaLEdBQUssQ0FBdUNQLElBRTNDLGtCQUYyQ0Esc0RBQWMsQ0FDeERFLGdFQUFtQixPQURkTSxjQUFjLEdBQXVCUixJQUUzQyxLQUZzQlMsaUJBQWlCLEdBQUlULElBRTNDO0lBQ0QsR0FBSyxDQUE2QkEsSUFBOEIsa0JBQTlCQSxzREFBYyxDQUFDQywyREFBYyxPQUF4RFMsU0FBUyxHQUFrQlYsSUFBOEIsS0FBOUNXLFlBQVksR0FBSVgsSUFBOEI7SUFDaEUsR0FBSyxDQUF1QkwsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsR0FBaENpQixNQUFNLEdBQWVqQixJQUFZLEtBQXpCa0IsU0FBUyxHQUFJbEIsSUFBWTtJQUV4QyxFQUF1QztJQUN2QyxHQUFLLENBQUNTLFFBQVEsR0FBR1AsOERBQVc7SUFFNUIsRUFBeUM7SUFDekMsR0FBSyxDQUFDaUIsZ0JBQWdCO2tMQUFHLFFBQVEsV0FBSSxDQUFDO2dCQUlKQyxHQUFpQixFQUMzQkEsSUFBaUIsUUFFdEJDLEtBQWtCLEVBSnpCRCxZQUFZLEVBR1pDLGFBQWE7Ozs7NEJBTGxCWixRQUFROzs7Ozs7OytCQUVrQkMsVUFBVSxDQUFDWSx3QkFBd0I7O3dCQUF4REYsWUFBWTt3QkFDbEJHLE9BQU8sQ0FB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Tl9FLy4vY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyLmpzPzMyYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9QbGF5ZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHVzZVNvbmdJbmZvIGZyb20gXCIuLi8uLi9ob29rcy91c2VTb25nSW5mb1wiO1xuaW1wb3J0IHVzZVNwb3RpZnkgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVNwb3RpZnlcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IGlzUGxheWluZ1N0YXRlLCBjdXJyZW50VHJhY2tJZFN0YXRlIH0gZnJvbSBcIi4uLy4uL2F0b21zL3NvbmdBdG9tXCI7XG5cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcbiAgY29uc3Qgc3BvdGlmeUFwaSA9IHVzZVNwb3RpZnkoKTtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgY29uc3QgW2N1cnJlbnRUcmFja0lkLCBzZXRDdXJyZW50VHJhY2tJZF0gPSB1c2VSZWNvaWxTdGF0ZShcbiAgICBjdXJyZW50VHJhY2tJZFN0YXRlXG4gICk7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VSZWNvaWxTdGF0ZShpc1BsYXlpbmdTdGF0ZSk7XG4gIGNvbnN0IFt2b2x1bWUsIHNldFZvbHVtZV0gPSB1c2VTdGF0ZSg1MCk7XG5cbiAgLy8gQ3VzdG9tIEhvb2sgdG8gcmV0cmlldmUgc29uZyBkZXRhaWxzXG4gIGNvbnN0IHNvbmdJbmZvID0gdXNlU29uZ0luZm8oKTtcblxuICAvL1VzZSBzb25nIGRldGFpbHMgdG8gZ2V0IHBsYXllciBjb250cm9sc1xuICBjb25zdCBmZXRjaEN1cnJlbnRTb25nID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc29uZ0luZm8pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUcmFjayA9IGF3YWl0IHNwb3RpZnlBcGkuZ2V0TXlDdXJyZW50UGxheWluZ1RyYWNrKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBOb3cgUGxheWluZzogJHtjdXJyZW50VHJhY2suYm9keT8uaXRlbX1gKTtcbiAgICAgICAgc2V0Q3VycmVudFRyYWNrSWQoY3VycmVudFRyYWNrLmJvZHk/Lml0ZW0/LmlkKTtcbiAgICAgICAgY29uc3QgcGxheWJhY2tTdGF0ZSA9IGF3YWl0IHNwb3RpZnlBcGkuZ2V0TXlDdXJyZW50UGxheWJhY2tTdGF0ZSgpO1xuICAgICAgICBzZXRJc1BsYXlpbmcocGxheWJhY2tTdGF0ZS5ib2R5Py5pc19wbGF5aW5nKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3BvdGlmeUFwaS5nZXRBY2Nlc3NUb2tlbigpICYmICFjdXJyZW50VHJhY2tJZCkge1xuICAgICAgZmV0Y2hDdXJyZW50U29uZygpO1xuICAgICAgc2V0Vm9sdW1lKDUwKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50VHJhY2tJZCwgc3BvdGlmeUFwaSwgc2Vzc2lvbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMucGxheWVyfSAgYmctZ3JhZGllbnQtdG8tYiBmcm9tLWJsYWNrIHRvLWdyYXktOTAwYH1cbiAgICA+XG4gICAgICB7LyogTGVmdCBzZWN0aW9uIG9mIFBsYXllciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfVxuICAgICAgICAgIHNyYz17c29uZ0luZm8/LmFsYnVtLmltYWdlcz8uWzBdPy51cmx9XG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICA8aDM+e3NvbmdJbmZvPy5uYW1lfTwvaDM+XG4gICAgICAgICAgPHA+e3NvbmdJbmZvPy5hcnRpc3RzPy5bMF0/Lm5hbWV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwidXNlU29uZ0luZm8iLCJ1c2VTcG90aWZ5IiwidXNlU2Vzc2lvbiIsInVzZVJlY29pbFN0YXRlIiwiaXNQbGF5aW5nU3RhdGUiLCJjdXJyZW50VHJhY2tJZFN0YXRlIiwiUGxheWVyIiwic29uZ0luZm8iLCJzcG90aWZ5QXBpIiwic2Vzc2lvbiIsImRhdGEiLCJjdXJyZW50VHJhY2tJZCIsInNldEN1cnJlbnRUcmFja0lkIiwiaXNQbGF5aW5nIiwic2V0SXNQbGF5aW5nIiwidm9sdW1lIiwic2V0Vm9sdW1lIiwiZmV0Y2hDdXJyZW50U29uZyIsImN1cnJlbnRUcmFjayIsInBsYXliYWNrU3RhdGUiLCJnZXRNeUN1cnJlbnRQbGF5aW5nVHJhY2siLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIml0ZW0iLCJpZCIsImdldE15Q3VycmVudFBsYXliYWNrU3RhdGUiLCJpc19wbGF5aW5nIiwiZXJyb3IiLCJnZXRBY2Nlc3NUb2tlbiIsImRpdiIsImNsYXNzTmFtZSIsInBsYXllciIsImNvbnRhaW5lciIsImltZyIsImltYWdlIiwic3JjIiwiYWxidW0iLCJpbWFnZXMiLCJ1cmwiLCJhbHQiLCJ3cmFwcGVyIiwiaDMiLCJuYW1lIiwicCIsImFydGlzdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Player/Player.js\n");

/***/ })

});