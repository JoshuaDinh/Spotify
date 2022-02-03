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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Player_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Player.module.css */ \"./components/Player/Player.module.css\");\n/* harmony import */ var _Player_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Player_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useSongInfo */ \"./hooks/useSongInfo.js\");\n/* harmony import */ var _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useSpotify */ \"./hooks/useSpotify.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_songAtom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/songAtom */ \"./atoms/songAtom.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Player = function() {\n    var ref11, ref1, ref2, ref3;\n    _s();\n    var spotifyApi = (0,_hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var ref4 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)(), session = ref4.data;\n    var ref5 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_7__.currentTrackIdState), 2), currentTrackId = ref5[0], setCurrentTrackId = ref5[1];\n    var ref6 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_7__.isPlayingState), 2), isPlaying = ref6[0], setIsPlaying = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50), volume = ref7[0], setVolume = ref7[1];\n    // Custom Hook to retrieve song details\n    var songInfo = (0,_hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    //Use song details to get player controls\n    var fetchCurrentSong = function() {\n        var _ref = _asyncToGenerator(_Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, ref8, ref9, ref10, currentTrack, playbackState;\n            return _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (songInfo) {\n                            _ctx.next = 17;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        ;\n                        _ctx.next = 5;\n                        return spotifyApi.getMyCurrentPlayingTrack();\n                    case 5:\n                        currentTrack = _ctx.sent;\n                        console.log(\"Now Playing: \".concat((ref = currentTrack.body) === null || ref === void 0 ? void 0 : ref.item));\n                        setCurrentTrackId((ref8 = currentTrack.body) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.item) === null || ref9 === void 0 ? void 0 : ref9.id);\n                        _ctx.next = 10;\n                        return spotifyApi.getMyCurrentPlaybackState();\n                    case 10:\n                        playbackState = _ctx.sent;\n                        setIsPlaying((ref10 = playbackState.body) === null || ref10 === void 0 ? void 0 : ref10.is_playing);\n                        _ctx.next = 17;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(error);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    14\n                ]\n            ]);\n        }));\n        return function fetchCurrentSong() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (spotifyApi.getAccessToken() && !currentTrackId) {\n            fetchCurrentSong();\n            setVolume(50);\n        }\n    }, [\n        currentTrackId,\n        spotifyApi,\n        session\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"\".concat((_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().player), \"  bg-gradient-to-b from-black to-gray-900\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().leftContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().image),\n                        src: (ref11 = songInfo === null || songInfo === void 0 ? void 0 : songInfo.album.images) === null || ref11 === void 0 ? void 0 : (ref1 = ref11[0]) === null || ref1 === void 0 ? void 0 : ref1.url,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().wrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : songInfo.name\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : (ref2 = songInfo.artists) === null || ref2 === void 0 ? void 0 : (ref3 = ref2[0]) === null || ref3 === void 0 ? void 0 : ref3.name\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().centerContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.SwitchHorizontalIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().button)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.RewindIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().button)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, _this),\n                    isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.PauseIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().button)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.PlayIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().button)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.FastForwardIcon, {}, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.ReplyIcon, {}, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, _this));\n};\n_s(Player, \"v+QqXDiMDjMy7o0B3Ru9YmXmz9o=\", false, function() {\n    return [\n        _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUywrRUFDUFosK0RBQVM7d0JBQUM4QixTQUFTLEVBQUV0QyxrRUFBYTs7Ozs7NEdBRWxDUyw4REFBUTt3QkFBQzZCLFNBQVMsRUFBRXRDLGtFQUFhOzs7Ozs7Z0dBRW5DTyxxRUFBZTs7Ozs7Z0dBQ2ZHLCtEQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlsQixDQUFDO0dBakVLRyxNQUFNOztRQUNTWCx5REFBVTtRQUNIQyx1REFBVTtRQUVRQyxrREFBYztRQUd4QkEsa0RBQWM7UUFJL0JILDBEQUFXOzs7S0FYeEJZLE1BQU07QUFtRVosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BsYXllci9QbGF5ZXIuanM/MzJiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1BsYXllci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgdXNlU29uZ0luZm8gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVNvbmdJbmZvXCI7XG5pbXBvcnQgdXNlU3BvdGlmeSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlU3BvdGlmeVwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgaXNQbGF5aW5nU3RhdGUsIGN1cnJlbnRUcmFja0lkU3RhdGUgfSBmcm9tIFwiLi4vLi4vYXRvbXMvc29uZ0F0b21cIjtcbmltcG9ydCB7XG4gIEZhc3RGb3J3YXJkSWNvbixcbiAgUGF1c2VJY29uLFxuICBQbGF5SWNvbixcbiAgUmVwbHlJY29uLFxuICBSZXdpbmRJY29uLFxuICBTd2l0Y2hIb3Jpem9udGFsSWNvbixcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xuXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNwb3RpZnlBcGkgPSB1c2VTcG90aWZ5KCk7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuXG4gIGNvbnN0IFtjdXJyZW50VHJhY2tJZCwgc2V0Q3VycmVudFRyYWNrSWRdID0gdXNlUmVjb2lsU3RhdGUoXG4gICAgY3VycmVudFRyYWNrSWRTdGF0ZVxuICApO1xuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlUmVjb2lsU3RhdGUoaXNQbGF5aW5nU3RhdGUpO1xuICBjb25zdCBbdm9sdW1lLCBzZXRWb2x1bWVdID0gdXNlU3RhdGUoNTApO1xuXG4gIC8vIEN1c3RvbSBIb29rIHRvIHJldHJpZXZlIHNvbmcgZGV0YWlsc1xuICBjb25zdCBzb25nSW5mbyA9IHVzZVNvbmdJbmZvKCk7XG5cbiAgLy9Vc2Ugc29uZyBkZXRhaWxzIHRvIGdldCBwbGF5ZXIgY29udHJvbHNcbiAgY29uc3QgZmV0Y2hDdXJyZW50U29uZyA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXNvbmdJbmZvKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBjdXJyZW50VHJhY2sgPSBhd2FpdCBzcG90aWZ5QXBpLmdldE15Q3VycmVudFBsYXlpbmdUcmFjaygpO1xuICAgICAgICBjb25zb2xlLmxvZyhgTm93IFBsYXlpbmc6ICR7Y3VycmVudFRyYWNrLmJvZHk/Lml0ZW19YCk7XG4gICAgICAgIHNldEN1cnJlbnRUcmFja0lkKGN1cnJlbnRUcmFjay5ib2R5Py5pdGVtPy5pZCk7XG4gICAgICAgIGNvbnN0IHBsYXliYWNrU3RhdGUgPSBhd2FpdCBzcG90aWZ5QXBpLmdldE15Q3VycmVudFBsYXliYWNrU3RhdGUoKTtcbiAgICAgICAgc2V0SXNQbGF5aW5nKHBsYXliYWNrU3RhdGUuYm9keT8uaXNfcGxheWluZyk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNwb3RpZnlBcGkuZ2V0QWNjZXNzVG9rZW4oKSAmJiAhY3VycmVudFRyYWNrSWQpIHtcbiAgICAgIGZldGNoQ3VycmVudFNvbmcoKTtcbiAgICAgIHNldFZvbHVtZSg1MCk7XG4gICAgfVxuICB9LCBbY3VycmVudFRyYWNrSWQsIHNwb3RpZnlBcGksIHNlc3Npb25dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnBsYXllcn0gIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ibGFjayB0by1ncmF5LTkwMGB9XG4gICAgPlxuICAgICAgey8qIExlZnQgc2lkZSBvZiBQbGF5ZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRDb250YWluZXJ9PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9XG4gICAgICAgICAgc3JjPXtzb25nSW5mbz8uYWxidW0uaW1hZ2VzPy5bMF0/LnVybH1cbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgIDxoMz57c29uZ0luZm8/Lm5hbWV9PC9oMz5cbiAgICAgICAgICA8cD57c29uZ0luZm8/LmFydGlzdHM/LlswXT8ubmFtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogQ2VudGVyIG9mIFBsYXllciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyQ29udGFpbmVyfT5cbiAgICAgICAgPFN3aXRjaEhvcml6b250YWxJY29uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gLz5cbiAgICAgICAgPFJld2luZEljb24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSAvPlxuICAgICAgICB7aXNQbGF5aW5nID8gKFxuICAgICAgICAgIDxQYXVzZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxQbGF5SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IC8+XG4gICAgICAgICl9XG4gICAgICAgIDxGYXN0Rm9yd2FyZEljb24gLz5cbiAgICAgICAgPFJlcGx5SWNvbiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJ1c2VTb25nSW5mbyIsInVzZVNwb3RpZnkiLCJ1c2VTZXNzaW9uIiwidXNlUmVjb2lsU3RhdGUiLCJpc1BsYXlpbmdTdGF0ZSIsImN1cnJlbnRUcmFja0lkU3RhdGUiLCJGYXN0Rm9yd2FyZEljb24iLCJQYXVzZUljb24iLCJQbGF5SWNvbiIsIlJlcGx5SWNvbiIsIlJld2luZEljb24iLCJTd2l0Y2hIb3Jpem9udGFsSWNvbiIsIlBsYXllciIsInNvbmdJbmZvIiwic3BvdGlmeUFwaSIsInNlc3Npb24iLCJkYXRhIiwiY3VycmVudFRyYWNrSWQiLCJzZXRDdXJyZW50VHJhY2tJZCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsInZvbHVtZSIsInNldFZvbHVtZSIsImZldGNoQ3VycmVudFNvbmciLCJjdXJyZW50VHJhY2siLCJwbGF5YmFja1N0YXRlIiwiZ2V0TXlDdXJyZW50UGxheWluZ1RyYWNrIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJpdGVtIiwiaWQiLCJnZXRNeUN1cnJlbnRQbGF5YmFja1N0YXRlIiwiaXNfcGxheWluZyIsImVycm9yIiwiZ2V0QWNjZXNzVG9rZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJwbGF5ZXIiLCJsZWZ0Q29udGFpbmVyIiwiaW1nIiwiaW1hZ2UiLCJzcmMiLCJhbGJ1bSIsImltYWdlcyIsInVybCIsImFsdCIsIndyYXBwZXIiLCJoMyIsIm5hbWUiLCJwIiwiYXJ0aXN0cyIsImNlbnRlckNvbnRhaW5lciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Player/Player.js\n");

/***/ })

});