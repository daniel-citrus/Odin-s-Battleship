/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  background: rgb(26, 26, 26);\n}\n\n.boards {\n  display: flex;\n  flex-flow: row nowrap;\n  gap: 20px;\n}\n.boards #current,\n.boards #opponent {\n  height: 200px;\n  width: 200px;\n  display: grid;\n  grid-template: repeat(10, 1fr)/repeat(10, 1fr);\n}\n.boards div {\n  border: 1px solid white;\n}\n.boards [data-ship=Battleship] {\n  background: orange;\n}\n.boards [data-ship=Submarine] {\n  background: yellow;\n}\n.boards [data-ship=Destroyer] {\n  background: green;\n}\n.boards [data-ship=Cruiser] {\n  background: red;\n}\n.boards [data-ship=Carrier] {\n  background: blue;\n}\n.boards [data-status=hit] {\n  background: red;\n}\n.boards [data-status=miss] {\n  background: rgb(121, 121, 121);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://super-template/./src/style/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = [];\r\n\r\n  // return the list of modules as css string\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n      content += cssWithMappingToString(item);\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n      return content;\r\n    }).join(\"\");\r\n  };\r\n\r\n  // import a list of modules into the list\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n    var alreadyImportedModules = {};\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n      list.push(item);\r\n    }\r\n  };\r\n  return list;\r\n};\n\n//# sourceURL=webpack://super-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://super-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://super-template/./src/style/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n  return result;\r\n}\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n    identifiers.push(identifier);\r\n  }\r\n  return identifiers;\r\n}\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n  return updater;\r\n}\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n      var _index = getIndexByIdentifier(_identifier);\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n\r\n/* istanbul ignore next  */\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target);\r\n\r\n    // Special case to return head of iframe instead of iframe itself\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n    memo[target] = styleTarget;\r\n  }\r\n  return memo[target];\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n  target.appendChild(style);\r\n}\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n  css += obj.css;\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n  var sourceMap = obj.sourceMap;\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  }\r\n\r\n  // For old IE\r\n  /* istanbul ignore if  */\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction domAPI(options) {\r\n  if (typeof document === \"undefined\") {\r\n    return {\r\n      update: function update() {},\r\n      remove: function remove() {}\r\n    };\r\n  }\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/display.js":
/*!********************************!*\
  !*** ./src/scripts/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildBoard: () => (/* binding */ buildBoard),\n/* harmony export */   buildHitBoard: () => (/* binding */ buildHitBoard),\n/* harmony export */   resetBoard: () => (/* binding */ resetBoard)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/scripts/index.js\");\nconst playerBoard = document.getElementById('current');\r\nconst hitBoard = document.getElementById('opponent');\r\n\r\n\r\n\r\n\r\nfunction buildBoard(boardArray) {\r\n    for (let row in boardArray) {\r\n        for (let col in boardArray[row]) {\r\n            const coords = boardArray[row][col];\r\n            const cell = buildCell(row, col, false, shipStatus(coords));\r\n            cell.dataset.ship = coords.ship.name;\r\n            playerBoard.appendChild(cell);\r\n        }\r\n    }\r\n}\r\n\r\nfunction buildHitBoard(boardArray) {\r\n    for (let row in boardArray) {\r\n        for (let col in boardArray[row]) {\r\n            const coords = boardArray[row][col];\r\n            const cell = buildCell(row, col, true, shipStatus(coords));\r\n            hitBoard.appendChild(cell);\r\n        }\r\n    }\r\n}\r\n\r\n/**\r\n * @param {*} coords - board array cell object\r\n * @returns {string}\r\n */\r\nfunction shipStatus(coords) {\r\n    const hit = coords.hit;\r\n    const ship = coords.ship ? true : false;\r\n\r\n    if (hit === null) {\r\n        return 'unhit';\r\n    } else if (hit) {\r\n        return ship ? 'hit' : 'miss';\r\n    } else {\r\n        return 'miss';\r\n    }\r\n}\r\n\r\nfunction buildCell(x, y, attackable = false, status = 'unhit') {\r\n    const cell = document.createElement('div');\r\n\r\n    cell.classList.add('cell');\r\n    cell.dataset.x = x;\r\n    cell.dataset.y = y;\r\n    cell.dataset.status = status;\r\n\r\n    if (attackable) {\r\n        cell.addEventListener('click', () => {\r\n            attackCell(cell);\r\n        });\r\n    }\r\n\r\n    return cell;\r\n}\r\n\r\nfunction attackCell(cell) {\r\n    const x = cell.dataset.x;\r\n    const y = cell.dataset.y;\r\n\r\n    const result = _index__WEBPACK_IMPORTED_MODULE_0__.attack(x, y);\r\n    let cellStatus;\r\n\r\n    // already hit\r\n    if (result === null) {\r\n        cellStatus = 'unhit';\r\n    }\r\n\r\n    if (result) {\r\n        cellStatus = 'hit';\r\n    } else {\r\n        cellStatus = 'miss';\r\n    }\r\n\r\n    cell.dataset.status = cellStatus;\r\n}\r\n\r\nfunction resetBoard() {\r\n    const cells = document.querySelectorAll(`.board .cell`);\r\n\r\n    for (let cell of cells) {\r\n        cell.dataset.status = 'unhit';\r\n        cell.dataset.ship = false;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://super-template/./src/scripts/display.js?");

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\n/* const Ship = require('./ship'); */\r\n\r\n\r\nclass Gameboard {\r\n    constructor() {\r\n        this.board = this.#createBoard();\r\n    }\r\n\r\n    // 5 types of ships, each type denoted by map key\r\n    #shipTypes = new Map([\r\n        [\r\n            0,\r\n            {\r\n                length: 5,\r\n                name: 'Carrier',\r\n            },\r\n        ],\r\n        [\r\n            1,\r\n            {\r\n                length: 4,\r\n                name: 'Battleship',\r\n            },\r\n        ],\r\n        [\r\n            2,\r\n            {\r\n                length: 3,\r\n                name: 'Cruiser',\r\n            },\r\n        ],\r\n        [\r\n            3,\r\n            {\r\n                length: 4,\r\n                name: 'Submarine',\r\n            },\r\n        ],\r\n        [\r\n            4,\r\n            {\r\n                length: 2,\r\n                name: 'Destroyer',\r\n            },\r\n        ],\r\n    ]);\r\n\r\n    get hasShips() {\r\n        for (let row in this.board) {\r\n            for (let col in this.board[row]) {\r\n                if (this.board[row][col].ship !== false) {\r\n                    return true;\r\n                }\r\n            }\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    // No ships on board or all ships are destroyed\r\n    get allShipsDestroyed() {\r\n        for (let row in this.board) {\r\n            for (let col in this.board[row]) {\r\n                if (\r\n                    this.board[row][col].ship !== false &&\r\n                    !this.board[row][col].hit\r\n                ) {\r\n                    return false;\r\n                }\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n\r\n    /**\r\n     * Add ship to board if it fits on the given coordinates\r\n     * @param {number} x board x coordinate\r\n     * @param {number} y board y coordinate\r\n     * @param {number} type ship type by number\r\n     * @param {boolean} direction vertical or horizontal placement\r\n     */\r\n    addShip(x, y, type, direction) {\r\n        const shipType = this.#shipTypes.get(type);\r\n\r\n        if (!shipType) {\r\n            return false;\r\n        }\r\n\r\n        const length = shipType.length;\r\n        const name = shipType.name;\r\n\r\n        if (!this.#shipFits(x, y, length, direction)) {\r\n            return false;\r\n        }\r\n\r\n        const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, length);\r\n\r\n        for (let i = 0; i < length; i++) {\r\n            if (direction === 'vertical') {\r\n                this.board[x + i][y].ship = ship;\r\n            } else if (direction === 'horizontal') {\r\n                this.board[x][y + i].ship = ship;\r\n            }\r\n        }\r\n\r\n        return true;\r\n    }\r\n\r\n    #shipFits(x, y, length, direction) {\r\n        const maxCoord = this.board.length - 1;\r\n        // depending on the direction, check if ship will go over the boundary\r\n        if (direction === 'vertical') {\r\n            const endX = x + length - 1;\r\n\r\n            if (endX > maxCoord) {\r\n                return false;\r\n            }\r\n        } else if (direction === 'horizontal') {\r\n            const endY = y + length - 1;\r\n\r\n            if (endY > maxCoord) {\r\n                return false;\r\n            }\r\n        }\r\n\r\n        for (let i = 0; i < length; i++) {\r\n            if (direction === 'vertical') {\r\n                if (this.board[x + i][y].ship) {\r\n                    return false;\r\n                }\r\n            } else if (direction === 'horizontal') {\r\n                if (this.board[x][y + i].ship) {\r\n                    return false;\r\n                }\r\n            }\r\n        }\r\n\r\n        return true;\r\n    }\r\n\r\n    /**\r\n     * Attack coordinates\r\n     * @param {number} x\r\n     * @param {number} y\r\n     * @returns {*} true - successful attack, false - missed, null - already hit\r\n     */\r\n    attack(x, y) {\r\n        const target = this.board[x][y];\r\n\r\n        if (target.hit !== null) {\r\n            return null;\r\n        }\r\n\r\n        this.board[x][y].hit = true;\r\n\r\n        if (target.ship) {\r\n            target.ship.hit();\r\n            return true;\r\n        }\r\n\r\n        return false;\r\n    }\r\n\r\n    clearShips() {\r\n        const row = this.board.length;\r\n        const col = this.board[0].length;\r\n\r\n        for (let r = 0; r < row; r++) {\r\n            for (let c = 0; c < col; c++) {\r\n                this.board[r][c].ship = false;\r\n                this.board[r][c].hit = null;\r\n            }\r\n        }\r\n    }\r\n\r\n    #createBoard(size = 10) {\r\n        const board = [];\r\n\r\n        for (let x = 0; x < size; x++) {\r\n            const row = [];\r\n            for (let y = 0; y < size; y++) {\r\n                row.push({\r\n                    ship: false,\r\n                    hit: null,\r\n                });\r\n            }\r\n            board.push(row);\r\n        }\r\n\r\n        return board;\r\n    }\r\n\r\n    getBoard() {\r\n        return this.board;\r\n    }\r\n\r\n    // Hit all cells on the board\r\n    hitAllCells() {\r\n        for (let row in this.board) {\r\n            for (let col in this.board[row]) {\r\n                this.board[row][col].hit = true;\r\n            }\r\n        }\r\n    }\r\n\r\n    randomizeBoard() {\r\n        for (const [id, ship] of this.#shipTypes) {\r\n            let x = this.#getRandomInt(this.board.length);\r\n            let y = this.#getRandomInt(this.board.length);\r\n            let orientation = this.#randomOrientation();\r\n\r\n            while (!this.addShip(x, y, id, orientation)) {\r\n                x = this.#getRandomInt(this.board.length);\r\n                y = this.#getRandomInt(this.board.length);\r\n                orientation = this.#randomOrientation();\r\n            }\r\n        }\r\n    }\r\n\r\n    #getRandomInt(max) {\r\n        return Math.floor(Math.random() * max);\r\n    }\r\n\r\n    #randomOrientation() {\r\n        if (this.#getRandomInt(2)) {\r\n            return 'horizontal';\r\n        }\r\n\r\n        return 'vertical';\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\r\n/* module.exports = Gameboard; */\r\n\n\n//# sourceURL=webpack://super-template/./src/scripts/gameboard.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attack: () => (/* binding */ attack)\n/* harmony export */ });\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ \"./src/style/style.scss\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/scripts/display.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\r\n\r\n\r\n\r\nconst player = new _player__WEBPACK_IMPORTED_MODULE_2__.Player();\r\nconst opponent = new _player__WEBPACK_IMPORTED_MODULE_2__.Player();\r\nplayer.board.randomizeBoard();\r\nopponent.board.randomizeBoard();\r\n_display__WEBPACK_IMPORTED_MODULE_1__.buildBoard(player.board.board);\r\n_display__WEBPACK_IMPORTED_MODULE_1__.buildHitBoard(player.board.board);\r\n\r\nfunction attack(x, y) {\r\n    return player.board.attack(x, y);\r\n}\r\n\r\n// game loop\r\n// set current player: 1\r\n// attack player 2\r\n// check if all ships on player 2 have been sunk\r\n// if all sunk, player 1 wins\r\n// else switch current player\r\n// if mode is 'computer,' auto attack for computer\r\n\r\nfunction startGame() {}\r\nfunction playerWins() {}\r\n\n\n//# sourceURL=webpack://super-template/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Computer: () => (/* binding */ Computer),\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/scripts/gameboard.js\");\n/* const Gameboard = require('./gameboard'); */\r\n\r\n\r\nclass Player {\r\n    constructor() {\r\n        this.type = 'player';\r\n        this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    }\r\n}\r\n\r\nclass Computer extends Player {\r\n    constructor() {\r\n        super();\r\n        this.type = 'computer';\r\n    }\r\n}\r\n\r\n\r\n/* module.exports = { Player, Computer }; */\r\n\n\n//# sourceURL=webpack://super-template/./src/scripts/player.js?");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\r\n    constructor(name, length) {\r\n        this.length = length;\r\n        this.name = name;\r\n        this.hits = 0;\r\n    }\r\n\r\n    get hasSunk() {\r\n        return this.hits >= this.length;\r\n    }\r\n\r\n    hit() {\r\n        if (this.hasSunk) {\r\n            return false;\r\n        }\r\n\r\n        this.hits++;\r\n        return true;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\r\n/* module.exports = Ship; */\r\n\n\n//# sourceURL=webpack://super-template/./src/scripts/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;