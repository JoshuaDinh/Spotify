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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Player_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Player.module.css */ \"./components/Player/Player.module.css\");\n/* harmony import */ var _Player_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Player_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useSongInfo */ \"./hooks/useSongInfo.js\");\n/* harmony import */ var _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useSpotify */ \"./hooks/useSpotify.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_songAtom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/songAtom */ \"./atoms/songAtom.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Player = function() {\n    var ref11, ref1, ref2, ref3;\n    _s();\n    var spotifyApi = (0,_hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var ref4 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)(), session = ref4.data;\n    var ref5 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_7__.currentTrackIdState), 2), currentTrackId = ref5[0], setCurrentTrackId = ref5[1];\n    var ref6 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_7__.isPlayingState), 2), isPlaying = ref6[0], setIsPlaying = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50), volume = ref7[0], setVolume = ref7[1];\n    // Custom Hook to retrieve song details\n    var songInfo = (0,_hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    //Use song details to get player controls\n    var fetchCurrentSong = function() {\n        var _ref = _asyncToGenerator(_Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, ref8, ref9, ref10, currentTrack, playbackState;\n            return _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (songInfo) {\n                            _ctx.next = 17;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        ;\n                        _ctx.next = 5;\n                        return spotifyApi.getMyCurrentPlayingTrack();\n                    case 5:\n                        currentTrack = _ctx.sent;\n                        console.log(\"Now Playing: \".concat((ref = currentTrack.body) === null || ref === void 0 ? void 0 : ref.item));\n                        setCurrentTrackId((ref8 = currentTrack.body) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.item) === null || ref9 === void 0 ? void 0 : ref9.id);\n                        _ctx.next = 10;\n                        return spotifyApi.getMyCurrentPlaybackState();\n                    case 10:\n                        playbackState = _ctx.sent;\n                        setIsPlaying((ref10 = playbackState.body) === null || ref10 === void 0 ? void 0 : ref10.is_playing);\n                        _ctx.next = 17;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(error);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    14\n                ]\n            ]);\n        }));\n        return function fetchCurrentSong() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (spotifyApi.getAccessToken() && !currentTrackId) {\n            fetchCurrentSong();\n            setVolume(50);\n        }\n    }, [\n        currentTrackId,\n        spotifyApi,\n        session\n    ]);\n    var handleplayPause = function() {\n        var _ref = _asyncToGenerator(_Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n                            if (data.body.is_playing) {\n                                spotifyApi.pause();\n                            }\n                        });\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleplayPause() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // const handleplayPause = async () => {\n    //   try {\n    //     const data = await spotifyApi\n    //       .getMyCurrentPlaybackState()\n    //       .then((res) => res.json());\n    //   } catch (error) {}\n    // };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"\".concat((_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().player), \"  bg-gradient-to-b from-black to-gray-900\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().leftContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().image),\n                        src: (ref11 = songInfo === null || songInfo === void 0 ? void 0 : songInfo.album.images) === null || ref11 === void 0 ? void 0 : (ref1 = ref11[0]) === null || ref1 === void 0 ? void 0 : ref1.url,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().wrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : songInfo.name\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : (ref2 = songInfo.artists) === null || ref2 === void 0 ? void 0 : (ref3 = ref2[0]) === null || ref3 === void 0 ? void 0 : ref3.name\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().centerContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.SwitchHorizontalIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().button)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.RewindIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().button)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this),\n                    isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.PauseIcon, {\n                        onClick: handlePlayPause,\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().innerButton)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.PlayIcon, {\n                        onClick: handlePlayPause,\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().innerButton)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.FastForwardIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().button)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.ReplyIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().button)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, _this));\n};\n_s(Player, \"v+QqXDiMDjMy7o0B3Ru9YmXmz9o=\", false, function() {\n    return [\n        _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCLEdBQWpCQSxRQUFRLENBQUV5QyxPQUFPLGNBQWpCekMsSUFBaUIsS0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsV0FBakJBLElBQWlCLENBQUcsQ0FBQyx3QkFBckJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsUUFBT3VDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJbkNiLENBQUc7Z0JBQUNDLFNBQVMsRUFBRXpDLDJFQUFzQjs7Z0dBQ25DWSwwRUFBb0I7d0JBQUM2QixTQUFTLEVBQUV6QyxrRUFBYTs7Ozs7O2dHQUM3Q1csZ0VBQVU7d0JBQUM4QixTQUFTLEVBQUV6QyxrRUFBYTs7Ozs7O29CQUNuQ29CLFNBQVMsK0VBQ1BaLCtEQUFTO3dCQUFDa0QsT0FBTyxFQUFFQyxlQUFlO3dCQUFFbEIsU0FBUyxFQUFFekMsdUVBQWtCOzs7Ozs0R0FFakVTLDhEQUFRO3dCQUFDaUQsT0FBTyxFQUFFQyxlQUFlO3dCQUFFbEIsU0FBUyxFQUFFekMsdUVBQWtCOzs7Ozs7Z0dBRWxFTyxxRUFBZTt3QkFBQ2tDLFNBQVMsRUFBRXpDLGtFQUFhOzs7Ozs7Z0dBQ3hDVSwrREFBUzt3QkFBQytCLFNBQVMsRUFBRXpDLGtFQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0MsQ0FBQztHQWhGS2EsTUFBTTs7UUFDU1gseURBQVU7UUFDSEMsdURBQVU7UUFFUUMsa0RBQWM7UUFHeEJBLGtEQUFjO1FBSS9CSCwwREFBVzs7O0tBWHhCWSxNQUFNO0FBa0ZaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QbGF5ZXIvUGxheWVyLmpzPzMyYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9QbGF5ZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHVzZVNvbmdJbmZvIGZyb20gXCIuLi8uLi9ob29rcy91c2VTb25nSW5mb1wiO1xuaW1wb3J0IHVzZVNwb3RpZnkgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVNwb3RpZnlcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IGlzUGxheWluZ1N0YXRlLCBjdXJyZW50VHJhY2tJZFN0YXRlIH0gZnJvbSBcIi4uLy4uL2F0b21zL3NvbmdBdG9tXCI7XG5pbXBvcnQge1xuICBGYXN0Rm9yd2FyZEljb24sXG4gIFBhdXNlSWNvbixcbiAgUGxheUljb24sXG4gIFJlcGx5SWNvbixcbiAgUmV3aW5kSWNvbixcbiAgU3dpdGNoSG9yaXpvbnRhbEljb24sXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcblxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xuICBjb25zdCBzcG90aWZ5QXBpID0gdXNlU3BvdGlmeSgpO1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcblxuICBjb25zdCBbY3VycmVudFRyYWNrSWQsIHNldEN1cnJlbnRUcmFja0lkXSA9IHVzZVJlY29pbFN0YXRlKFxuICAgIGN1cnJlbnRUcmFja0lkU3RhdGVcbiAgKTtcbiAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVJlY29pbFN0YXRlKGlzUGxheWluZ1N0YXRlKTtcbiAgY29uc3QgW3ZvbHVtZSwgc2V0Vm9sdW1lXSA9IHVzZVN0YXRlKDUwKTtcblxuICAvLyBDdXN0b20gSG9vayB0byByZXRyaWV2ZSBzb25nIGRldGFpbHNcbiAgY29uc3Qgc29uZ0luZm8gPSB1c2VTb25nSW5mbygpO1xuXG4gIC8vVXNlIHNvbmcgZGV0YWlscyB0byBnZXQgcGxheWVyIGNvbnRyb2xzXG4gIGNvbnN0IGZldGNoQ3VycmVudFNvbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFzb25nSW5mbykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3VycmVudFRyYWNrID0gYXdhaXQgc3BvdGlmeUFwaS5nZXRNeUN1cnJlbnRQbGF5aW5nVHJhY2soKTtcbiAgICAgICAgY29uc29sZS5sb2coYE5vdyBQbGF5aW5nOiAke2N1cnJlbnRUcmFjay5ib2R5Py5pdGVtfWApO1xuICAgICAgICBzZXRDdXJyZW50VHJhY2tJZChjdXJyZW50VHJhY2suYm9keT8uaXRlbT8uaWQpO1xuICAgICAgICBjb25zdCBwbGF5YmFja1N0YXRlID0gYXdhaXQgc3BvdGlmeUFwaS5nZXRNeUN1cnJlbnRQbGF5YmFja1N0YXRlKCk7XG4gICAgICAgIHNldElzUGxheWluZyhwbGF5YmFja1N0YXRlLmJvZHk/LmlzX3BsYXlpbmcpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzcG90aWZ5QXBpLmdldEFjY2Vzc1Rva2VuKCkgJiYgIWN1cnJlbnRUcmFja0lkKSB7XG4gICAgICBmZXRjaEN1cnJlbnRTb25nKCk7XG4gICAgICBzZXRWb2x1bWUoNTApO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRUcmFja0lkLCBzcG90aWZ5QXBpLCBzZXNzaW9uXSk7XG5cbiAgY29uc3QgaGFuZGxlcGxheVBhdXNlID0gYXN5bmMgKCkgPT4ge1xuICAgIHNwb3RpZnlBcGkuZ2V0TXlDdXJyZW50UGxheWJhY2tTdGF0ZSgpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLmJvZHkuaXNfcGxheWluZykge1xuICAgICAgICBzcG90aWZ5QXBpLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gY29uc3QgaGFuZGxlcGxheVBhdXNlID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIHRyeSB7XG4gIC8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgc3BvdGlmeUFwaVxuICAvLyAgICAgICAuZ2V0TXlDdXJyZW50UGxheWJhY2tTdGF0ZSgpXG4gIC8vICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAvLyB9O1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnBsYXllcn0gIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ibGFjayB0by1ncmF5LTkwMGB9XG4gICAgPlxuICAgICAgey8qIExlZnQgc2lkZSBvZiBQbGF5ZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRDb250YWluZXJ9PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9XG4gICAgICAgICAgc3JjPXtzb25nSW5mbz8uYWxidW0uaW1hZ2VzPy5bMF0/LnVybH1cbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgIDxoMz57c29uZ0luZm8/Lm5hbWV9PC9oMz5cbiAgICAgICAgICA8cD57c29uZ0luZm8/LmFydGlzdHM/LlswXT8ubmFtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogQ2VudGVyIG9mIFBsYXllciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyQ29udGFpbmVyfT5cbiAgICAgICAgPFN3aXRjaEhvcml6b250YWxJY29uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gLz5cbiAgICAgICAgPFJld2luZEljb24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSAvPlxuICAgICAgICB7aXNQbGF5aW5nID8gKFxuICAgICAgICAgIDxQYXVzZUljb24gb25DbGljaz17aGFuZGxlUGxheVBhdXNlfSBjbGFzc05hbWU9e3N0eWxlcy5pbm5lckJ1dHRvbn0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UGxheUljb24gb25DbGljaz17aGFuZGxlUGxheVBhdXNlfSBjbGFzc05hbWU9e3N0eWxlcy5pbm5lckJ1dHRvbn0gLz5cbiAgICAgICAgKX1cbiAgICAgICAgPEZhc3RGb3J3YXJkSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IC8+XG4gICAgICAgIDxSZXBseUljb24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJ1c2VTb25nSW5mbyIsInVzZVNwb3RpZnkiLCJ1c2VTZXNzaW9uIiwidXNlUmVjb2lsU3RhdGUiLCJpc1BsYXlpbmdTdGF0ZSIsImN1cnJlbnRUcmFja0lkU3RhdGUiLCJGYXN0Rm9yd2FyZEljb24iLCJQYXVzZUljb24iLCJQbGF5SWNvbiIsIlJlcGx5SWNvbiIsIlJld2luZEljb24iLCJTd2l0Y2hIb3Jpem9udGFsSWNvbiIsIlBsYXllciIsInNvbmdJbmZvIiwic3BvdGlmeUFwaSIsInNlc3Npb24iLCJkYXRhIiwiY3VycmVudFRyYWNrSWQiLCJzZXRDdXJyZW50VHJhY2tJZCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsInZvbHVtZSIsInNldFZvbHVtZSIsImZldGNoQ3VycmVudFNvbmciLCJjdXJyZW50VHJhY2siLCJwbGF5YmFja1N0YXRlIiwiZ2V0TXlDdXJyZW50UGxheWluZ1RyYWNrIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJpdGVtIiwiaWQiLCJnZXRNeUN1cnJlbnRQbGF5YmFja1N0YXRlIiwiaXNfcGxheWluZyIsImVycm9yIiwiZ2V0QWNjZXNzVG9rZW4iLCJoYW5kbGVwbGF5UGF1c2UiLCJ0aGVuIiwicGF1c2UiLCJkaXYiLCJjbGFzc05hbWUiLCJwbGF5ZXIiLCJsZWZ0Q29udGFpbmVyIiwiaW1nIiwiaW1hZ2UiLCJzcmMiLCJhbGJ1bSIsImltYWdlcyIsInVybCIsImFsdCIsIndyYXBwZXIiLCJoMyIsIm5hbWUiLCJwIiwiYXJ0aXN0cyIsImNlbnRlckNvbnRhaW5lciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoYW5kbGVQbGF5UGF1c2UiLCJpbm5lckJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Player/Player.js\n");

/***/ })

});