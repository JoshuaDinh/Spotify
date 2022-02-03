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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Player_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Player.module.css */ \"./components/Player/Player.module.css\");\n/* harmony import */ var _Player_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Player_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useSongInfo */ \"./hooks/useSongInfo.js\");\n/* harmony import */ var _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useSpotify */ \"./hooks/useSpotify.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_songAtom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/songAtom */ \"./atoms/songAtom.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Player = function() {\n    var ref11, ref1, ref2, ref3;\n    _s();\n    var spotifyApi = (0,_hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var ref4 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)(), session = ref4.data;\n    var ref5 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_7__.currentTrackIdState), 2), currentTrackId = ref5[0], setCurrentTrackId = ref5[1];\n    var ref6 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_7__.isPlayingState), 2), isPlaying = ref6[0], setIsPlaying = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50), volume = ref7[0], setVolume = ref7[1];\n    // Custom Hook to retrieve song details\n    var songInfo = (0,_hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    //Use song details to get player controls\n    var fetchCurrentSong = function() {\n        var _ref = _asyncToGenerator(_Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, ref8, ref9, ref10, currentTrack, playbackState;\n            return _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (songInfo) {\n                            _ctx.next = 17;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        ;\n                        _ctx.next = 5;\n                        return spotifyApi.getMyCurrentPlayingTrack();\n                    case 5:\n                        currentTrack = _ctx.sent;\n                        console.log(\"Now Playing: \".concat((ref = currentTrack.body) === null || ref === void 0 ? void 0 : ref.item));\n                        setCurrentTrackId((ref8 = currentTrack.body) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.item) === null || ref9 === void 0 ? void 0 : ref9.id);\n                        _ctx.next = 10;\n                        return spotifyApi.getMyCurrentPlaybackState();\n                    case 10:\n                        playbackState = _ctx.sent;\n                        setIsPlaying((ref10 = playbackState.body) === null || ref10 === void 0 ? void 0 : ref10.is_playing);\n                        _ctx.next = 17;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(error);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    14\n                ]\n            ]);\n        }));\n        return function fetchCurrentSong() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (spotifyApi.getAccessToken() && !currentTrackId) {\n            fetchCurrentSong();\n            setVolume(50);\n        }\n    }, [\n        currentTrackId,\n        spotifyApi,\n        session\n    ]);\n    var handlePlayPause = function() {\n        var _ref = _asyncToGenerator(_Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n                            if (data.body.is_playing) {\n                                spotifyApi.pause();\n                                setIsPlaying(false);\n                            } else {\n                                spotifyApi.play();\n                            }\n                        });\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handlePlayPause() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // const handleplayPause = async () => {\n    //   try {\n    //     const data = await spotifyApi\n    //       .getMyCurrentPlaybackState()\n    //       .then((res) => res.json());\n    //   } catch (error) {}\n    // };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"\".concat((_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().player), \"  bg-gradient-to-b from-black to-gray-900\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().leftContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().image),\n                        src: (ref11 = songInfo === null || songInfo === void 0 ? void 0 : songInfo.album.images) === null || ref11 === void 0 ? void 0 : (ref1 = ref11[0]) === null || ref1 === void 0 ? void 0 : ref1.url,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().wrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : songInfo.name\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : (ref2 = songInfo.artists) === null || ref2 === void 0 ? void 0 : (ref3 = ref2[0]) === null || ref3 === void 0 ? void 0 : ref3.name\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().centerContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.SwitchHorizontalIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().button)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.RewindIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().button)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, _this),\n                    isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.PauseIcon, {\n                        onClick: handlePlayPause,\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().innerButton)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.PlayIcon, {\n                        onClick: handlePlayPause,\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().innerButton)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.FastForwardIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().button)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.ReplyIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_9___default().button)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, _this));\n};\n_s(Player, \"v+QqXDiMDjMy7o0B3Ru9YmXmz9o=\", false, function() {\n    return [\n        _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsYUFBUkEsUUFBUSxLQUFSQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLElBQWpCQSxJQUFpQixHQUFqQkEsUUFBUSxDQUFFMEMsT0FBTyxjQUFqQjFDLElBQWlCLEtBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLFdBQWpCQSxJQUFpQixDQUFHLENBQUMsd0JBQXJCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLFFBQU93QyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSW5DYixDQUFHO2dCQUFDQyxTQUFTLEVBQUUxQywyRUFBc0I7O2dHQUNuQ1ksMEVBQW9CO3dCQUFDOEIsU0FBUyxFQUFFMUMsa0VBQWE7Ozs7OztnR0FDN0NXLGdFQUFVO3dCQUFDK0IsU0FBUyxFQUFFMUMsa0VBQWE7Ozs7OztvQkFDbkNvQixTQUFTLCtFQUNQWiwrREFBUzt3QkFBQ21ELE9BQU8sRUFBRXRCLGVBQWU7d0JBQUVLLFNBQVMsRUFBRTFDLHVFQUFrQjs7Ozs7NEdBRWpFUyw4REFBUTt3QkFBQ2tELE9BQU8sRUFBRXRCLGVBQWU7d0JBQUVLLFNBQVMsRUFBRTFDLHVFQUFrQjs7Ozs7O2dHQUVsRU8scUVBQWU7d0JBQUNtQyxTQUFTLEVBQUUxQyxrRUFBYTs7Ozs7O2dHQUN4Q1UsK0RBQVM7d0JBQUNnQyxTQUFTLEVBQUUxQyxrRUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTNDLENBQUM7R0FuRkthLE1BQU07O1FBQ1NYLHlEQUFVO1FBQ0hDLHVEQUFVO1FBRVFDLGtEQUFjO1FBR3hCQSxrREFBYztRQUkvQkgsMERBQVc7OztLQVh4QlksTUFBTTtBQXFGWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUGxheWVyL1BsYXllci5qcz8zMmIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vUGxheWVyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB1c2VTb25nSW5mbyBmcm9tIFwiLi4vLi4vaG9va3MvdXNlU29uZ0luZm9cIjtcbmltcG9ydCB1c2VTcG90aWZ5IGZyb20gXCIuLi8uLi9ob29rcy91c2VTcG90aWZ5XCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBpc1BsYXlpbmdTdGF0ZSwgY3VycmVudFRyYWNrSWRTdGF0ZSB9IGZyb20gXCIuLi8uLi9hdG9tcy9zb25nQXRvbVwiO1xuaW1wb3J0IHtcbiAgRmFzdEZvcndhcmRJY29uLFxuICBQYXVzZUljb24sXG4gIFBsYXlJY29uLFxuICBSZXBseUljb24sXG4gIFJld2luZEljb24sXG4gIFN3aXRjaEhvcml6b250YWxJY29uLFxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XG5cbmNvbnN0IFBsYXllciA9ICgpID0+IHtcbiAgY29uc3Qgc3BvdGlmeUFwaSA9IHVzZVNwb3RpZnkoKTtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgY29uc3QgW2N1cnJlbnRUcmFja0lkLCBzZXRDdXJyZW50VHJhY2tJZF0gPSB1c2VSZWNvaWxTdGF0ZShcbiAgICBjdXJyZW50VHJhY2tJZFN0YXRlXG4gICk7XG4gIGNvbnN0IFtpc1BsYXlpbmcsIHNldElzUGxheWluZ10gPSB1c2VSZWNvaWxTdGF0ZShpc1BsYXlpbmdTdGF0ZSk7XG4gIGNvbnN0IFt2b2x1bWUsIHNldFZvbHVtZV0gPSB1c2VTdGF0ZSg1MCk7XG5cbiAgLy8gQ3VzdG9tIEhvb2sgdG8gcmV0cmlldmUgc29uZyBkZXRhaWxzXG4gIGNvbnN0IHNvbmdJbmZvID0gdXNlU29uZ0luZm8oKTtcblxuICAvL1VzZSBzb25nIGRldGFpbHMgdG8gZ2V0IHBsYXllciBjb250cm9sc1xuICBjb25zdCBmZXRjaEN1cnJlbnRTb25nID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc29uZ0luZm8pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUcmFjayA9IGF3YWl0IHNwb3RpZnlBcGkuZ2V0TXlDdXJyZW50UGxheWluZ1RyYWNrKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGBOb3cgUGxheWluZzogJHtjdXJyZW50VHJhY2suYm9keT8uaXRlbX1gKTtcbiAgICAgICAgc2V0Q3VycmVudFRyYWNrSWQoY3VycmVudFRyYWNrLmJvZHk/Lml0ZW0/LmlkKTtcbiAgICAgICAgY29uc3QgcGxheWJhY2tTdGF0ZSA9IGF3YWl0IHNwb3RpZnlBcGkuZ2V0TXlDdXJyZW50UGxheWJhY2tTdGF0ZSgpO1xuICAgICAgICBzZXRJc1BsYXlpbmcocGxheWJhY2tTdGF0ZS5ib2R5Py5pc19wbGF5aW5nKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3BvdGlmeUFwaS5nZXRBY2Nlc3NUb2tlbigpICYmICFjdXJyZW50VHJhY2tJZCkge1xuICAgICAgZmV0Y2hDdXJyZW50U29uZygpO1xuICAgICAgc2V0Vm9sdW1lKDUwKTtcbiAgICB9XG4gIH0sIFtjdXJyZW50VHJhY2tJZCwgc3BvdGlmeUFwaSwgc2Vzc2lvbl0pO1xuXG4gIGNvbnN0IGhhbmRsZVBsYXlQYXVzZSA9IGFzeW5jICgpID0+IHtcbiAgICBzcG90aWZ5QXBpLmdldE15Q3VycmVudFBsYXliYWNrU3RhdGUoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5ib2R5LmlzX3BsYXlpbmcpIHtcbiAgICAgICAgc3BvdGlmeUFwaS5wYXVzZSgpO1xuICAgICAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3BvdGlmeUFwaS5wbGF5KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gY29uc3QgaGFuZGxlcGxheVBhdXNlID0gYXN5bmMgKCkgPT4ge1xuICAvLyAgIHRyeSB7XG4gIC8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgc3BvdGlmeUFwaVxuICAvLyAgICAgICAuZ2V0TXlDdXJyZW50UGxheWJhY2tTdGF0ZSgpXG4gIC8vICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICAvLyAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAvLyB9O1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnBsYXllcn0gIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ibGFjayB0by1ncmF5LTkwMGB9XG4gICAgPlxuICAgICAgey8qIExlZnQgc2lkZSBvZiBQbGF5ZXIgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRDb250YWluZXJ9PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9XG4gICAgICAgICAgc3JjPXtzb25nSW5mbz8uYWxidW0uaW1hZ2VzPy5bMF0/LnVybH1cbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgIDxoMz57c29uZ0luZm8/Lm5hbWV9PC9oMz5cbiAgICAgICAgICA8cD57c29uZ0luZm8/LmFydGlzdHM/LlswXT8ubmFtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7LyogQ2VudGVyIG9mIFBsYXllciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyQ29udGFpbmVyfT5cbiAgICAgICAgPFN3aXRjaEhvcml6b250YWxJY29uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gLz5cbiAgICAgICAgPFJld2luZEljb24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSAvPlxuICAgICAgICB7aXNQbGF5aW5nID8gKFxuICAgICAgICAgIDxQYXVzZUljb24gb25DbGljaz17aGFuZGxlUGxheVBhdXNlfSBjbGFzc05hbWU9e3N0eWxlcy5pbm5lckJ1dHRvbn0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8UGxheUljb24gb25DbGljaz17aGFuZGxlUGxheVBhdXNlfSBjbGFzc05hbWU9e3N0eWxlcy5pbm5lckJ1dHRvbn0gLz5cbiAgICAgICAgKX1cbiAgICAgICAgPEZhc3RGb3J3YXJkSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IC8+XG4gICAgICAgIDxSZXBseUljb24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJ1c2VTb25nSW5mbyIsInVzZVNwb3RpZnkiLCJ1c2VTZXNzaW9uIiwidXNlUmVjb2lsU3RhdGUiLCJpc1BsYXlpbmdTdGF0ZSIsImN1cnJlbnRUcmFja0lkU3RhdGUiLCJGYXN0Rm9yd2FyZEljb24iLCJQYXVzZUljb24iLCJQbGF5SWNvbiIsIlJlcGx5SWNvbiIsIlJld2luZEljb24iLCJTd2l0Y2hIb3Jpem9udGFsSWNvbiIsIlBsYXllciIsInNvbmdJbmZvIiwic3BvdGlmeUFwaSIsInNlc3Npb24iLCJkYXRhIiwiY3VycmVudFRyYWNrSWQiLCJzZXRDdXJyZW50VHJhY2tJZCIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsInZvbHVtZSIsInNldFZvbHVtZSIsImZldGNoQ3VycmVudFNvbmciLCJjdXJyZW50VHJhY2siLCJwbGF5YmFja1N0YXRlIiwiZ2V0TXlDdXJyZW50UGxheWluZ1RyYWNrIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJpdGVtIiwiaWQiLCJnZXRNeUN1cnJlbnRQbGF5YmFja1N0YXRlIiwiaXNfcGxheWluZyIsImVycm9yIiwiZ2V0QWNjZXNzVG9rZW4iLCJoYW5kbGVQbGF5UGF1c2UiLCJ0aGVuIiwicGF1c2UiLCJwbGF5IiwiZGl2IiwiY2xhc3NOYW1lIiwicGxheWVyIiwibGVmdENvbnRhaW5lciIsImltZyIsImltYWdlIiwic3JjIiwiYWxidW0iLCJpbWFnZXMiLCJ1cmwiLCJhbHQiLCJ3cmFwcGVyIiwiaDMiLCJuYW1lIiwicCIsImFydGlzdHMiLCJjZW50ZXJDb250YWluZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5uZXJCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Player/Player.js\n");

/***/ })

});