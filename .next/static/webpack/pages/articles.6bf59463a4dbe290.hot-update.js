"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/articles",{

/***/ "./public/images/articles/create modal component in react using react portals.png":
/*!****************************************************************************************!*\
  !*** ./public/images/articles/create modal component in react using react portals.png ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"src\":\"/_next/static/media/create modal component in react using react portals.97baf15b.png\",\"height\":720,\"width\":1280,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcreate+modal+component+in+react+using+react+portals.97baf15b.png&w=8&q=70\",\"blurWidth\":8,\"blurHeight\":5});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvaW1hZ2VzL2FydGljbGVzL2NyZWF0ZSBtb2RhbCBjb21wb25lbnQgaW4gcmVhY3QgdXNpbmcgcmVhY3QgcG9ydGFscy5wbmciLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLENBQUMsMlJBQTJSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvY3JlYXRlIG1vZGFsIGNvbXBvbmVudCBpbiByZWFjdCB1c2luZyByZWFjdCBwb3J0YWxzLnBuZz8wY2E2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9tZWRpYS9jcmVhdGUgbW9kYWwgY29tcG9uZW50IGluIHJlYWN0IHVzaW5nIHJlYWN0IHBvcnRhbHMuOTdiYWYxNWIucG5nXCIsXCJoZWlnaHRcIjo3MjAsXCJ3aWR0aFwiOjEyODAsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRm1lZGlhJTJGY3JlYXRlK21vZGFsK2NvbXBvbmVudCtpbityZWFjdCt1c2luZytyZWFjdCtwb3J0YWxzLjk3YmFmMTViLnBuZyZ3PTgmcT03MFwiLFwiYmx1cldpZHRoXCI6OCxcImJsdXJIZWlnaHRcIjo1fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/images/articles/create modal component in react using react portals.png\n"));

/***/ }),

/***/ "./src/pages/articles.js":
/*!*******************************!*\
  !*** ./src/pages/articles.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Layout */ \"./src/components/Layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_images_articles_tweet_suicide_detection_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/images/articles/tweet-suicide-detection.png */ \"./public/images/articles/tweet-suicide-detection.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_images_articles_create_loading_screen_in_react_js_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/images/articles/create loading screen in react js.jpg */ \"./public/images/articles/create loading screen in react js.jpg\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/images/articles/create modal component in react using react portals.png */ \"./public/images/articles/create modal component in react using react portals.png\");\n\n\n\n\n\n\n\n\n\n\n\nconst FramerImage = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.motion)((next_image__WEBPACK_IMPORTED_MODULE_7___default()));\n_c = FramerImage;\nconst Article = (param)=>{\n    let { img, title, date, link } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link,\n                target: \"_blank\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: date\n            }, void 0, false, {\n                fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = Article;\nconst FeaturedArticles = (param)=>{\n    let { img, title, time, summary, link } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl\"\n            }, void 0, false, {\n                fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link,\n                target: \"_blank\",\n                className: \"w-full inline-block cursor-pointer overflow-hidden rounded-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FramerImage, {\n                    src: img,\n                    alt: title,\n                    className: \"w-full h-auto\",\n                    whileHover: {\n                        scale: 1.05\n                    },\n                    transition: {\n                        duration: 0.2\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: link,\n                target: \"_blank\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"capitalize text-2xl font-bold my-2 mt-4 hover:underline\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-sm mb-2\",\n                children: summary\n            }, void 0, false, {\n                fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"text-primary font-semibold\",\n                children: time\n            }, void 0, false, {\n                fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, undefined);\n};\n_c2 = FeaturedArticles;\nconst articles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Yu Sun | Articles Page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"any description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"w-full mb-16 flex flex-col items-center justify-center overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"pt-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            text: \"Words Can Change The World!\",\n                            className: \"mb-16\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                            lineNumber: 59,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"grid grid-cols-2 gap-16\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticles, {\n                                    title: \"Leveraging Natural Language Processing for Suicidal Tweet Detection\",\n                                    summary: \"Implemented Logistic Regression and NLTK sentiment analysis.  Utilized Tfidf Vectorizer and TF-IDF for efficient textual data processing and feature extraction.  Demonstrated expertise in the Sklearn for machine learning implementation.  Developed a high-accuracy suicide ideation detection model, achieving 93% accuracy.\",\n                                    time: \"10 mins read\",\n                                    link: \"https://medium.com/p/4114c10f7432/edit\",\n                                    img: _public_images_articles_tweet_suicide_detection_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FeaturedArticles, {\n                                    title: \"Leveraging Natural Language Processing for Suicidal Tweet Detection\",\n                                    summary: \"Implemented Logistic Regression and NLTK sentiment analysis.  Utilized Tfidf Vectorizer and TF-IDF for efficient textual data processing and feature extraction.  Demonstrated expertise in the Sklearn for machine learning implementation.  Developed a high-accuracy suicide ideation detection model, achieving 93% accuracy.\",\n                                    time: \"10 mins read\",\n                                    link: \"https://medium.com/p/4114c10f7432/edit\",\n                                    img: _public_images_articles_create_loading_screen_in_react_js_jpg__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n                                }, void 0, false, {\n                                    fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                            lineNumber: 60,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-bold text-4xl w-full text-center my-16 mt-32\",\n                            children: \"All Articles\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                            lineNumber: 82,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Article, {\n                                title: \"Form Validation In Reactjs: Build A Resuable Custom Hook For Inputs and Error Handling\",\n                                date: \"March 23, 2024\",\n                                link: \"/\",\n                                img: _public_images_articles_create_modal_component_in_react_using_react_portals_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                                lineNumber: 84,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                            lineNumber: 83,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/Yu/Code/projects/Portfolio/src/pages/articles.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (articles);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"FramerImage\");\n$RefreshReg$(_c1, \"Article\");\n$RefreshReg$(_c2, \"FeaturedArticles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0aWNsZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0c7QUFDd0I7QUFDWjtBQUNaO0FBQ2dFO0FBQzlEO0FBQzJEO0FBQ25EO0FBQ3FFO0FBRzVHLE1BQU1VLGNBQWNGLHNEQUFNQSxDQUFDRixtREFBS0E7S0FBMUJJO0FBRU4sTUFBTUMsVUFBVTtRQUFDLEVBQUNDLEdBQUcsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBQztJQUNyQyxxQkFDSSw4REFBQ0M7OzBCQUNHLDhEQUFDWixrREFBSUE7Z0JBQUNhLE1BQU1GO2dCQUFNRyxRQUFPOzBCQUNyQiw0RUFBQ0M7OEJBQUlOOzs7Ozs7Ozs7OzswQkFFVCw4REFBQ087MEJBQU1OOzs7Ozs7Ozs7Ozs7QUFHbkI7TUFUTUg7QUFZTixNQUFNVSxtQkFBbUI7UUFBQyxFQUFDVCxHQUFHLEVBQUVDLEtBQUssRUFBRVMsSUFBSSxFQUFFQyxPQUFPLEVBQUVSLElBQUksRUFBQztJQUN2RCxxQkFDSSw4REFBQ0M7UUFBR1EsV0FBVTs7MEJBQ1YsOERBQUNDO2dCQUFJRCxXQUFVOzs7Ozs7MEJBRWYsOERBQUNwQixrREFBSUE7Z0JBQUNhLE1BQU1GO2dCQUFNRyxRQUFPO2dCQUN6Qk0sV0FBVTswQkFFTiw0RUFBQ2Q7b0JBQVlnQixLQUFLZDtvQkFBS2UsS0FBS2Q7b0JBQU9XLFdBQVU7b0JBQ3pDSSxZQUFZO3dCQUFDQyxPQUFNO29CQUFJO29CQUN2QkMsWUFBWTt3QkFBQ0MsVUFBUztvQkFBRzs7Ozs7Ozs7Ozs7MEJBR2pDLDhEQUFDM0Isa0RBQUlBO2dCQUFDYSxNQUFNRjtnQkFBTUcsUUFBTzswQkFDckIsNEVBQUNDO29CQUFHSyxXQUFVOzhCQUEyRFg7Ozs7Ozs7Ozs7OzBCQUU3RSw4REFBQ21CO2dCQUFFUixXQUFVOzBCQUFnQkQ7Ozs7OzswQkFDN0IsOERBQUNIO2dCQUFLSSxXQUFVOzBCQUE4QkY7Ozs7Ozs7Ozs7OztBQUcxRDtNQXBCTUQ7QUFzQk4sTUFBTVksV0FBVztJQUNmLHFCQUNFOzswQkFDSSw4REFBQ2hDLGtEQUFJQTs7a0NBQ0QsOERBQUNZO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNxQjt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7Ozs7Ozs7OzBCQUdyQyw4REFBQ0M7Z0JBQUtiLFdBQVU7MEJBQ1osNEVBQUNyQiwwREFBTUE7b0JBQUNxQixXQUFVOztzQ0FDZCw4REFBQ3RCLGdFQUFZQTs0QkFBQ29DLE1BQUs7NEJBQThCZCxXQUFVOzs7Ozs7c0NBQzNELDhEQUFDZTs0QkFBR2YsV0FBVTs7OENBQ1YsOERBQUNIO29DQUNHUixPQUFNO29DQUNOVSxTQUFRO29DQUlSRCxNQUFLO29DQUNMUCxNQUFLO29DQUNMSCxLQUFLUCwyRkFBcUJBOzs7Ozs7OENBRTlCLDhEQUFDZ0I7b0NBQ0dSLE9BQU07b0NBQ05VLFNBQVE7b0NBSVJELE1BQUs7b0NBQ0xQLE1BQUs7b0NBQ0xILEtBQUtMLHFHQUFRQTs7Ozs7Ozs7Ozs7O3NDQUdyQiw4REFBQ1k7NEJBQUdLLFdBQVU7c0NBQW9EOzs7Ozs7c0NBQ2xFLDhEQUFDZTtzQ0FDRyw0RUFBQzVCO2dDQUNHRSxPQUFNO2dDQUNOQyxNQUFLO2dDQUNMQyxNQUFLO2dDQUNMSCxLQUFLSCx1SEFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFyQztBQUVBLCtEQUFld0IsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYXJ0aWNsZXMuanM/ZjVjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBBbmltYXRlZFRleHQgZnJvbSAnQC9jb21wb25lbnRzL0FuaW1hdGVkVGV4dCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB0d2VldFN1aWNpZGVEZXRlY3Rpb24gZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvdHdlZXQtc3VpY2lkZS1kZXRlY3Rpb24ucG5nXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgYXJ0aWNsZTIgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvY3JlYXRlIGxvYWRpbmcgc2NyZWVuIGluIHJlYWN0IGpzLmpwZ1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgYXJ0aWNsZTMgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvYXJ0aWNsZXMvY3JlYXRlIG1vZGFsIGNvbXBvbmVudCBpbiByZWFjdCB1c2luZyByZWFjdCBwb3J0YWxzLnBuZ1wiO1xuXG5cbmNvbnN0IEZyYW1lckltYWdlID0gbW90aW9uKEltYWdlKTtcblxuY29uc3QgQXJ0aWNsZSA9ICh7aW1nLCB0aXRsZSwgZGF0ZSwgbGlua30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9J19ibGFuaycgPlxuICAgICAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxzcGFuPntkYXRlfTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICApXG59XG5cblxuY29uc3QgRmVhdHVyZWRBcnRpY2xlcyA9ICh7aW1nLCB0aXRsZSwgdGltZSwgc3VtbWFyeSwgbGlua30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPSdyZWxhdGl2ZSBjb2wtc3Bhbi0xIHctZnVsbCBwLTQgYmctbGlnaHQgYm9yZGVyIGJvcmRlci1zb2xpZCBib3JkZXItZGFyayByb3VuZGVkLTJ4bCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIC1yaWdodC0zIC16LTEwIHctWzEwMSVdIGgtWzEwMyVdIHJvdW5kZWQtWzIuNXJlbV0gYmctZGFyayByb3VuZGVkLWJyLTN4bFwiPjwvZGl2PlxuXG4gICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9J19ibGFuaycgXG4gICAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBpbmxpbmUtYmxvY2sgY3Vyc29yLXBvaW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHJvdW5kZWQtbGcnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZyYW1lckltYWdlIHNyYz17aW1nfSBhbHQ9e3RpdGxlfSBjbGFzc05hbWU9J3ctZnVsbCBoLWF1dG8nIFxuICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7c2NhbGU6MS4wNX19XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjowLjJ9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPXtsaW5rfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdjYXBpdGFsaXplIHRleHQtMnhsIGZvbnQtYm9sZCBteS0yIG10LTQgaG92ZXI6dW5kZXJsaW5lJz57dGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gbWItMlwiPntzdW1tYXJ5fTwvcD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmb250LXNlbWlib2xkXCI+e3RpbWV9PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgIClcbn1cblxuY29uc3QgYXJ0aWNsZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+WXUgU3VuIHwgQXJ0aWNsZXMgUGFnZTwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiYW55IGRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT0ndy1mdWxsIG1iLTE2IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbic+XG4gICAgICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT0ncHQtMTYnPlxuICAgICAgICAgICAgICAgIDxBbmltYXRlZFRleHQgdGV4dD1cIldvcmRzIENhbiBDaGFuZ2UgVGhlIFdvcmxkIVwiIGNsYXNzTmFtZT0nbWItMTYnIC8+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMiBnYXAtMTYnPlxuICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWRBcnRpY2xlcyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTGV2ZXJhZ2luZyBOYXR1cmFsIExhbmd1YWdlIFByb2Nlc3NpbmcgZm9yIFN1aWNpZGFsIFR3ZWV0IERldGVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5PVwiSW1wbGVtZW50ZWQgTG9naXN0aWMgUmVncmVzc2lvbiBhbmQgTkxUSyBzZW50aW1lbnQgYW5hbHlzaXMuIFxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbGl6ZWQgVGZpZGYgVmVjdG9yaXplciBhbmQgVEYtSURGIGZvciBlZmZpY2llbnQgdGV4dHVhbCBkYXRhIHByb2Nlc3NpbmcgYW5kIGZlYXR1cmUgZXh0cmFjdGlvbi4gXG4gICAgICAgICAgICAgICAgICAgICAgICBEZW1vbnN0cmF0ZWQgZXhwZXJ0aXNlIGluIHRoZSBTa2xlYXJuIGZvciBtYWNoaW5lIGxlYXJuaW5nIGltcGxlbWVudGF0aW9uLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIERldmVsb3BlZCBhIGhpZ2gtYWNjdXJhY3kgc3VpY2lkZSBpZGVhdGlvbiBkZXRlY3Rpb24gbW9kZWwsIGFjaGlldmluZyA5MyUgYWNjdXJhY3kuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU9XCIxMCBtaW5zIHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cImh0dHBzOi8vbWVkaXVtLmNvbS9wLzQxMTRjMTBmNzQzMi9lZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZz17dHdlZXRTdWljaWRlRGV0ZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWRBcnRpY2xlcyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTGV2ZXJhZ2luZyBOYXR1cmFsIExhbmd1YWdlIFByb2Nlc3NpbmcgZm9yIFN1aWNpZGFsIFR3ZWV0IERldGVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5PVwiSW1wbGVtZW50ZWQgTG9naXN0aWMgUmVncmVzc2lvbiBhbmQgTkxUSyBzZW50aW1lbnQgYW5hbHlzaXMuIFxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbGl6ZWQgVGZpZGYgVmVjdG9yaXplciBhbmQgVEYtSURGIGZvciBlZmZpY2llbnQgdGV4dHVhbCBkYXRhIHByb2Nlc3NpbmcgYW5kIGZlYXR1cmUgZXh0cmFjdGlvbi4gXG4gICAgICAgICAgICAgICAgICAgICAgICBEZW1vbnN0cmF0ZWQgZXhwZXJ0aXNlIGluIHRoZSBTa2xlYXJuIGZvciBtYWNoaW5lIGxlYXJuaW5nIGltcGxlbWVudGF0aW9uLiBcbiAgICAgICAgICAgICAgICAgICAgICAgIERldmVsb3BlZCBhIGhpZ2gtYWNjdXJhY3kgc3VpY2lkZSBpZGVhdGlvbiBkZXRlY3Rpb24gbW9kZWwsIGFjaGlldmluZyA5MyUgYWNjdXJhY3kuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU9XCIxMCBtaW5zIHJlYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cImh0dHBzOi8vbWVkaXVtLmNvbS9wLzQxMTRjMTBmNzQzMi9lZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZz17YXJ0aWNsZTJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsIHctZnVsbCB0ZXh0LWNlbnRlciBteS0xNiBtdC0zMlwiPkFsbCBBcnRpY2xlczwvaDI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRm9ybSBWYWxpZGF0aW9uIEluIFJlYWN0anM6IEJ1aWxkIEEgUmVzdWFibGUgQ3VzdG9tIEhvb2sgRm9yIElucHV0cyBhbmQgRXJyb3IgSGFuZGxpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT1cIk1hcmNoIDIzLCAyMDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCIvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZz17YXJ0aWNsZTN9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFydGljbGVzOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJBbmltYXRlZFRleHQiLCJMYXlvdXQiLCJMaW5rIiwidHdlZXRTdWljaWRlRGV0ZWN0aW9uIiwiSW1hZ2UiLCJhcnRpY2xlMiIsIm1vdGlvbiIsImFydGljbGUzIiwiRnJhbWVySW1hZ2UiLCJBcnRpY2xlIiwiaW1nIiwidGl0bGUiLCJkYXRlIiwibGluayIsImxpIiwiaHJlZiIsInRhcmdldCIsImgyIiwic3BhbiIsIkZlYXR1cmVkQXJ0aWNsZXMiLCJ0aW1lIiwic3VtbWFyeSIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImFsdCIsIndoaWxlSG92ZXIiLCJzY2FsZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInAiLCJhcnRpY2xlcyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIm1haW4iLCJ0ZXh0IiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/articles.js\n"));

/***/ })

});