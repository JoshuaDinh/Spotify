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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Player_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Player.module.css */ \"./components/Player/Player.module.css\");\n/* harmony import */ var _Player_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Player_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useSongInfo */ \"./hooks/useSongInfo.js\");\n/* harmony import */ var _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useSpotify */ \"./hooks/useSpotify.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/recoil.js\");\n/* harmony import */ var _atoms_songAtom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../atoms/songAtom */ \"./atoms/songAtom.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/solid */ \"./node_modules/@heroicons/react/solid/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Player = function() {\n    var ref11, ref1, ref2, ref3;\n    _s();\n    var spotifyApi = (0,_hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var ref4 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)(), session = ref4.data;\n    var ref5 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_7__.currentTrackIdState), 2), currentTrackId = ref5[0], setCurrentTrackId = ref5[1];\n    var ref6 = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState)(_atoms_songAtom__WEBPACK_IMPORTED_MODULE_7__.isPlayingState), 2), isPlaying = ref6[0], setIsPlaying = ref6[1];\n    var ref7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50), volume1 = ref7[0], setVolume = ref7[1];\n    // Custom Hook to retrieve song details\n    var songInfo = (0,_hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    //Use song details to get player controls\n    var fetchCurrentSong = function() {\n        var _ref = _asyncToGenerator(_Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, ref8, ref9, ref10, currentTrack, playbackState;\n            return _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (songInfo) {\n                            _ctx.next = 17;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        ;\n                        _ctx.next = 5;\n                        return spotifyApi.getMyCurrentPlayingTrack();\n                    case 5:\n                        currentTrack = _ctx.sent;\n                        console.log(\"Now Playing: \".concat((ref = currentTrack.body) === null || ref === void 0 ? void 0 : ref.item));\n                        setCurrentTrackId((ref8 = currentTrack.body) === null || ref8 === void 0 ? void 0 : (ref9 = ref8.item) === null || ref9 === void 0 ? void 0 : ref9.id);\n                        _ctx.next = 10;\n                        return spotifyApi.getMyCurrentPlaybackState();\n                    case 10:\n                        playbackState = _ctx.sent;\n                        setIsPlaying((ref10 = playbackState.body) === null || ref10 === void 0 ? void 0 : ref10.is_playing);\n                        _ctx.next = 17;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(error);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    14\n                ]\n            ]);\n        }));\n        return function fetchCurrentSong() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (spotifyApi.getAccessToken() && !currentTrackId) {\n            fetchCurrentSong();\n            setVolume(50);\n        }\n    }, [\n        currentTrackId,\n        spotifyApi,\n        session\n    ]);\n    //Handles Volume controls\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (volume1 > 0 && volume1 > 100) {\n            debouncedAdjustVolume(volume1);\n        }\n    }, [\n        volume1\n    ]);\n    var debouncedAdjustVolume = useCallback(function() {\n        debouncedAdjustVolume(function(volume) {\n            spotifyApi.setVolume(volume);\n        }, 500);\n    });\n    // Handles Playing and pausing of current track\n    var handlePlayPause = function() {\n        var _ref = _asyncToGenerator(_Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_joshuadinh_Desktop_Spotify_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        spotifyApi.getMyCurrentPlaybackState().then(function(data) {\n                            if (data.body.is_playing) {\n                                spotifyApi.pause();\n                                setIsPlaying(false);\n                            } else {\n                                spotifyApi.play();\n                                setIsPlaying(true);\n                            }\n                        });\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handlePlayPause() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"\".concat((_Player_module_css__WEBPACK_IMPORTED_MODULE_10___default().player), \"  bg-gradient-to-b from-black to-gray-900\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_10___default().leftContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_10___default().image),\n                        src: (ref11 = songInfo === null || songInfo === void 0 ? void 0 : songInfo.album.images) === null || ref11 === void 0 ? void 0 : (ref1 = ref11[0]) === null || ref1 === void 0 ? void 0 : ref1.url,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_10___default().wrapper),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : songInfo.name\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: songInfo === null || songInfo === void 0 ? void 0 : (ref2 = songInfo.artists) === null || ref2 === void 0 ? void 0 : (ref3 = ref2[0]) === null || ref3 === void 0 ? void 0 : ref3.name\n                            }, void 0, false, {\n                                fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_10___default().centerContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.SwitchHorizontalIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_10___default().button)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.RewindIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_10___default().button)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, _this),\n                    isPlaying ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.PauseIcon, {\n                        onClick: handlePlayPause,\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_10___default().innerButton)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.PlayIcon, {\n                        onClick: handlePlayPause,\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_10___default().innerButton)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.FastForwardIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_10___default().button)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.ReplyIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_10___default().button)\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_10___default().rightContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.VolumeOffIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_10___default().button),\n                        onClick: function() {\n                            return volume1 > 0 && setVolume(volume1 - 10);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"range\",\n                        min: 0,\n                        max: 100,\n                        onChange: function(e) {\n                            setVolume(Number(e.target.value));\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_9__.VolumeUpIcon, {\n                        className: (_Player_module_css__WEBPACK_IMPORTED_MODULE_10___default().button),\n                        onClick: function() {\n                            return volume1 < 100 && setVolume(volume1 + 10);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/joshuadinh/Desktop/Spotify/components/Player/Player.js\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, _this));\n};\n_s(Player, \"7UAFUZ99Zwp4rQjTVJ5nntN+sj4=\", false, function() {\n    return [\n        _hooks_useSpotify__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_6__.useRecoilState,\n        _hooks_useSongInfo__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\nvar _c;\n$RefreshReg$(_c, \"Player\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BsYXllci9QbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDSDtBQUNTO0FBQ0Y7QUFDSDtBQUNMO0FBQ21DO0FBT3pDO0FBQ3lDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUUsR0FBSyxDQUFDaUIsTUFBTSxHQUFHLFFBQ2YsR0FEcUIsQ0FBQztxQkEwRVJDLElBQWlCOztJQXpFN0IsR0FBSyxDQUFDQyxVQUFVLEdBQUdmLDZEQUFVO0lBQzdCLEdBQUssQ0FBcUJDLElBQVksR0FBWkEsMkRBQVUsSUFBdEJlLE9BQU8sR0FBS2YsSUFBWSxDQUE5QmdCLElBQUk7SUFFWixHQUFLLENBQXVDZixJQUUzQyxrQkFGMkNBLHNEQUFjLENBQ3hERSxnRUFBbUIsT0FEZGMsY0FBYyxHQUF1QmhCLElBRTNDLEtBRnNCaUIsaUJBQWlCLEdBQUlqQixJQUUzQztJQUNELEdBQUssQ0FBNkJBLElBQThCLGtCQUE5QkEsc0RBQWMsQ0FBQ0MsMkRBQWMsT0FBeERpQixTQUFTLEdBQWtCbEIsSUFBOEIsS0FBOUNtQixZQUFZLEdBQUluQixJQUE4QjtJQUNoRSxHQUFLLENBQXVCTCxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxHQUFoQ3lCLE9BQU0sR0FBZXpCLElBQVksS0FBekIwQixTQUFTLEdBQUkxQixJQUFZO0lBRXhDLEVBQXVDO0lBQ3ZDLEdBQUssQ0FBQ2lCLFFBQVEsR0FBR2YsOERBQVc7SUFFNUIsRUFBeUM7SUFDekMsR0FBSyxDQUFDeUIsZ0JBQWdCO2tMQUFHLFFBQVEsV0FBSSxDQUFDO2dCQUlKQyxHQUFpQixFQUMzQkEsSUFBaUIsUUFFdEJDLEtBQWtCLEVBSnpCRCxZQUFZLEVBR1pDLGFBQWE7Ozs7NEJBTGxCWixRQUFROzs7Ozs7OytCQUVrQkMsVUFBVSxDQUFDWSx3QkFBd0I7O3dCQUF4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LG1FQUFhOzs7Ozs7Z0dBQ3hDUSwrREFBUzt3QkFBQ3NDLFNBQVMsRUFBRTlDLG1FQUFhOzs7Ozs7Ozs7Ozs7d0ZBSXBDNkMsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFOUMsMkVBQXFCOztnR0FDbENXLG1FQUFhO3dCQUNabUMsU0FBUyxFQUFFOUMsbUVBQWE7d0JBQ3hCK0QsT0FBTyxFQUFFLFFBQVE7NEJBQUZ2QyxNQUFNLENBQU5BLE9BQU0sR0FBRyxDQUFDLElBQUlDLFNBQVMsQ0FBQ0QsT0FBTSxHQUFHLEVBQUU7Ozs7Ozs7Z0dBRW5EMEMsQ0FBSzt3QkFDSkMsSUFBSSxFQUFDLENBQU87d0JBQ1pDLEdBQUcsRUFBRSxDQUFDO3dCQUNOQyxHQUFHLEVBQUUsR0FBRzt3QkFDUkMsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQyxFQUFLLENBQUM7NEJBQ2hCOUMsU0FBUyxDQUFDK0MsTUFBTSxDQUFDRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSzt3QkFDakMsQ0FBQzs7Ozs7O2dHQUVGNUQsZ0VBQVk7d0JBQ1hnQyxTQUFTLEVBQUU5QyxtRUFBYTt3QkFDeEIrRCxPQUFPLEVBQUUsUUFBUTs0QkFBRnZDLE1BQU0sQ0FBTkEsT0FBTSxHQUFHLEdBQUcsSUFBSUMsU0FBUyxDQUFDRCxPQUFNLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5RCxDQUFDO0dBaEhLVCxNQUFNOztRQUNTYix5REFBVTtRQUNIQyx1REFBVTtRQUVRQyxrREFBYztRQUd4QkEsa0RBQWM7UUFJL0JILDBEQUFXOzs7S0FYeEJjLE1BQU07QUFrSFosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BsYXllci9QbGF5ZXIuanM/MzJiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL1BsYXllci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgdXNlU29uZ0luZm8gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZVNvbmdJbmZvXCI7XG5pbXBvcnQgdXNlU3BvdGlmeSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlU3BvdGlmeVwiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgaXNQbGF5aW5nU3RhdGUsIGN1cnJlbnRUcmFja0lkU3RhdGUgfSBmcm9tIFwiLi4vLi4vYXRvbXMvc29uZ0F0b21cIjtcbmltcG9ydCB7XG4gIEZhc3RGb3J3YXJkSWNvbixcbiAgUmVwbHlJY29uLFxuICBSZXdpbmRJY29uLFxuICBTd2l0Y2hIb3Jpem9udGFsSWNvbixcbiAgVm9sdW1lT2ZmSWNvbixcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xuaW1wb3J0IHsgUGxheUljb24sIFBhdXNlSWNvbiwgVm9sdW1lVXBJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIjtcblxuY29uc3QgUGxheWVyID0gKCkgPT4ge1xuICBjb25zdCBzcG90aWZ5QXBpID0gdXNlU3BvdGlmeSgpO1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcblxuICBjb25zdCBbY3VycmVudFRyYWNrSWQsIHNldEN1cnJlbnRUcmFja0lkXSA9IHVzZVJlY29pbFN0YXRlKFxuICAgIGN1cnJlbnRUcmFja0lkU3RhdGVcbiAgKTtcbiAgY29uc3QgW2lzUGxheWluZywgc2V0SXNQbGF5aW5nXSA9IHVzZVJlY29pbFN0YXRlKGlzUGxheWluZ1N0YXRlKTtcbiAgY29uc3QgW3ZvbHVtZSwgc2V0Vm9sdW1lXSA9IHVzZVN0YXRlKDUwKTtcblxuICAvLyBDdXN0b20gSG9vayB0byByZXRyaWV2ZSBzb25nIGRldGFpbHNcbiAgY29uc3Qgc29uZ0luZm8gPSB1c2VTb25nSW5mbygpO1xuXG4gIC8vVXNlIHNvbmcgZGV0YWlscyB0byBnZXQgcGxheWVyIGNvbnRyb2xzXG4gIGNvbnN0IGZldGNoQ3VycmVudFNvbmcgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFzb25nSW5mbykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3VycmVudFRyYWNrID0gYXdhaXQgc3BvdGlmeUFwaS5nZXRNeUN1cnJlbnRQbGF5aW5nVHJhY2soKTtcbiAgICAgICAgY29uc29sZS5sb2coYE5vdyBQbGF5aW5nOiAke2N1cnJlbnRUcmFjay5ib2R5Py5pdGVtfWApO1xuICAgICAgICBzZXRDdXJyZW50VHJhY2tJZChjdXJyZW50VHJhY2suYm9keT8uaXRlbT8uaWQpO1xuICAgICAgICBjb25zdCBwbGF5YmFja1N0YXRlID0gYXdhaXQgc3BvdGlmeUFwaS5nZXRNeUN1cnJlbnRQbGF5YmFja1N0YXRlKCk7XG4gICAgICAgIHNldElzUGxheWluZyhwbGF5YmFja1N0YXRlLmJvZHk/LmlzX3BsYXlpbmcpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzcG90aWZ5QXBpLmdldEFjY2Vzc1Rva2VuKCkgJiYgIWN1cnJlbnRUcmFja0lkKSB7XG4gICAgICBmZXRjaEN1cnJlbnRTb25nKCk7XG4gICAgICBzZXRWb2x1bWUoNTApO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRUcmFja0lkLCBzcG90aWZ5QXBpLCBzZXNzaW9uXSk7XG5cbiAgLy9IYW5kbGVzIFZvbHVtZSBjb250cm9sc1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2b2x1bWUgPiAwICYmIHZvbHVtZSA+IDEwMCkge1xuICAgICAgZGVib3VuY2VkQWRqdXN0Vm9sdW1lKHZvbHVtZSk7XG4gICAgfVxuICB9LCBbdm9sdW1lXSk7XG5cbiAgY29uc3QgZGVib3VuY2VkQWRqdXN0Vm9sdW1lID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRlYm91bmNlZEFkanVzdFZvbHVtZSgodm9sdW1lKSA9PiB7XG4gICAgICBzcG90aWZ5QXBpLnNldFZvbHVtZSh2b2x1bWUpO1xuICAgIH0sIDUwMCk7XG4gIH0pO1xuXG4gIC8vIEhhbmRsZXMgUGxheWluZyBhbmQgcGF1c2luZyBvZiBjdXJyZW50IHRyYWNrXG4gIGNvbnN0IGhhbmRsZVBsYXlQYXVzZSA9IGFzeW5jICgpID0+IHtcbiAgICBzcG90aWZ5QXBpLmdldE15Q3VycmVudFBsYXliYWNrU3RhdGUoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5ib2R5LmlzX3BsYXlpbmcpIHtcbiAgICAgICAgc3BvdGlmeUFwaS5wYXVzZSgpO1xuICAgICAgICBzZXRJc1BsYXlpbmcoZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3BvdGlmeUFwaS5wbGF5KCk7XG4gICAgICAgIHNldElzUGxheWluZyh0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnBsYXllcn0gIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ibGFjayB0by1ncmF5LTkwMGB9XG4gICAgPlxuICAgICAgey8qIExlZnQgc2lkZSBvZiBQbGF5ZXIgIFRyYWNrIGRldGFpbHMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRDb250YWluZXJ9PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9XG4gICAgICAgICAgc3JjPXtzb25nSW5mbz8uYWxidW0uaW1hZ2VzPy5bMF0/LnVybH1cbiAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgIDxoMz57c29uZ0luZm8/Lm5hbWV9PC9oMz5cbiAgICAgICAgICA8cD57c29uZ0luZm8/LmFydGlzdHM/LlswXT8ubmFtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBDZW50ZXIgb2YgUGxheWVyIEN1cnJlbnQgVHJhY2sgQ29udHJvbHMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlckNvbnRhaW5lcn0+XG4gICAgICAgIDxTd2l0Y2hIb3Jpem9udGFsSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IC8+XG4gICAgICAgIDxSZXdpbmRJY29uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gLz5cbiAgICAgICAge2lzUGxheWluZyA/IChcbiAgICAgICAgICA8UGF1c2VJY29uIG9uQ2xpY2s9e2hhbmRsZVBsYXlQYXVzZX0gY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJCdXR0b259IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPFBsYXlJY29uIG9uQ2xpY2s9e2hhbmRsZVBsYXlQYXVzZX0gY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJCdXR0b259IC8+XG4gICAgICAgICl9XG4gICAgICAgIDxGYXN0Rm9yd2FyZEljb24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSAvPlxuICAgICAgICA8UmVwbHlJY29uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogUmlnaHQgc2lkZSBvZiBQbGF5ZXIgLSBWb2x1bWUgY29udHJvbHMgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0Q29udGFpbmVyfT5cbiAgICAgICAgPFZvbHVtZU9mZkljb25cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdm9sdW1lID4gMCAmJiBzZXRWb2x1bWUodm9sdW1lIC0gMTApfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICBtYXg9ezEwMH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldFZvbHVtZShOdW1iZXIoZS50YXJnZXQudmFsdWUpKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8Vm9sdW1lVXBJY29uXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvbHVtZSA8IDEwMCAmJiBzZXRWb2x1bWUodm9sdW1lICsgMTApfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJ1c2VTb25nSW5mbyIsInVzZVNwb3RpZnkiLCJ1c2VTZXNzaW9uIiwidXNlUmVjb2lsU3RhdGUiLCJpc1BsYXlpbmdTdGF0ZSIsImN1cnJlbnRUcmFja0lkU3RhdGUiLCJGYXN0Rm9yd2FyZEljb24iLCJSZXBseUljb24iLCJSZXdpbmRJY29uIiwiU3dpdGNoSG9yaXpvbnRhbEljb24iLCJWb2x1bWVPZmZJY29uIiwiUGxheUljb24iLCJQYXVzZUljb24iLCJWb2x1bWVVcEljb24iLCJQbGF5ZXIiLCJzb25nSW5mbyIsInNwb3RpZnlBcGkiLCJzZXNzaW9uIiwiZGF0YSIsImN1cnJlbnRUcmFja0lkIiwic2V0Q3VycmVudFRyYWNrSWQiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJ2b2x1bWUiLCJzZXRWb2x1bWUiLCJmZXRjaEN1cnJlbnRTb25nIiwiY3VycmVudFRyYWNrIiwicGxheWJhY2tTdGF0ZSIsImdldE15Q3VycmVudFBsYXlpbmdUcmFjayIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwiaXRlbSIsImlkIiwiZ2V0TXlDdXJyZW50UGxheWJhY2tTdGF0ZSIsImlzX3BsYXlpbmciLCJlcnJvciIsImdldEFjY2Vzc1Rva2VuIiwiZGVib3VuY2VkQWRqdXN0Vm9sdW1lIiwidXNlQ2FsbGJhY2siLCJoYW5kbGVQbGF5UGF1c2UiLCJ0aGVuIiwicGF1c2UiLCJwbGF5IiwiZGl2IiwiY2xhc3NOYW1lIiwicGxheWVyIiwibGVmdENvbnRhaW5lciIsImltZyIsImltYWdlIiwic3JjIiwiYWxidW0iLCJpbWFnZXMiLCJ1cmwiLCJhbHQiLCJ3cmFwcGVyIiwiaDMiLCJuYW1lIiwicCIsImFydGlzdHMiLCJjZW50ZXJDb250YWluZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5uZXJCdXR0b24iLCJyaWdodENvbnRhaW5lciIsImlucHV0IiwidHlwZSIsIm1pbiIsIm1heCIsIm9uQ2hhbmdlIiwiZSIsIk51bWJlciIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Player/Player.js\n");

/***/ })

});