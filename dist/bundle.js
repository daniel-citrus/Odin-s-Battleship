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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  background: rgb(26, 26, 26);\n  color: white;\n}\n\n.boards {\n  display: flex;\n  flex-flow: row nowrap;\n  gap: 20px;\n}\n\n.board {\n  display: flex;\n  flex-flow: column nowrap;\n  gap: 5px;\n}\n.board #current,\n.board #opponent {\n  height: 200px;\n  width: 200px;\n  display: grid;\n  grid-template: repeat(10, 1fr)/repeat(10, 1fr);\n}\n.board div {\n  border: 1px solid white;\n}\n.board [data-ship=Battleship],\n.board [data-ship=Submarine],\n.board [data-ship=Destroyer],\n.board [data-ship=Cruiser],\n.board [data-ship=Carrier] {\n  background: blue;\n}\n.board [data-status=hit] {\n  background: red;\n}\n.board [data-status=miss] {\n  background: rgb(121, 121, 121);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://super-template/./src/style/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://super-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://super-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

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

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://super-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/display.js":
/*!********************************!*\
  !*** ./src/scripts/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attackCell: () => (/* binding */ attackCell),\n/* harmony export */   buildBoard: () => (/* binding */ buildBoard),\n/* harmony export */   buildHitBoard: () => (/* binding */ buildHitBoard),\n/* harmony export */   gameover: () => (/* binding */ gameover),\n/* harmony export */   resetBoard: () => (/* binding */ resetBoard),\n/* harmony export */   setCurrentPlayer: () => (/* binding */ setCurrentPlayer)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/scripts/index.js\");\nconst currentPlayer = document.querySelector('.currentPlayer');\nconst playerBoard = document.getElementById('current');\nconst hitBoard = document.getElementById('opponent');\n\nconst currentLose = document.querySelector('#current+button');\nconst otherLose = document.querySelector('#opponent+button');\n\n\n\n\ncurrentLose.addEventListener('click', () => {\n    _index__WEBPACK_IMPORTED_MODULE_0__.currentLose();\n});\notherLose.addEventListener('click', () => {\n    _index__WEBPACK_IMPORTED_MODULE_0__.otherLose();\n});\n\nfunction buildBoard(boardArray) {\n    playerBoard.textContent = '';\n\n    for (let row in boardArray) {\n        for (let col in boardArray[row]) {\n            const coords = boardArray[row][col];\n            const cell = buildCell(row, col, false, cellStatus(coords));\n            cell.dataset.ship = coords.ship.name;\n            playerBoard.appendChild(cell);\n        }\n    }\n}\n\nfunction buildHitBoard(boardArray) {\n    hitBoard.textContent = '';\n\n    for (let row in boardArray) {\n        for (let col in boardArray[row]) {\n            const coords = boardArray[row][col];\n            const cell = buildCell(row, col, true, cellStatus(coords));\n            hitBoard.appendChild(cell);\n        }\n    }\n}\n\n/**\n * @param {*} coords - board array cell object\n * @returns {string}\n */\nfunction cellStatus(coords) {\n    const hit = coords.hit;\n    const ship = coords.ship ? true : false;\n\n    if (hit === null) {\n        return 'unhit';\n    } else if (hit) {\n        return ship ? 'hit' : 'miss';\n    } else {\n        return 'miss';\n    }\n}\n\nfunction buildCell(x, y, attackable = false, status = 'unhit') {\n    const cell = document.createElement('div');\n\n    cell.classList.add('cell');\n    cell.dataset.x = x;\n    cell.dataset.y = y;\n    cell.dataset.status = status;\n\n    if (attackable) {\n        cell.addEventListener('click', () => {\n            attackCell(x, y);\n        });\n    }\n\n    return cell;\n}\n\nfunction attackCell(x, y) {\n    const result = _index__WEBPACK_IMPORTED_MODULE_0__.attack(x, y);\n\n    /* if (result === false) {\n        console.log('miss');\n    } else if (result === null) {\n        console.log('already hit');\n    } else {\n        console.log('hit');\n    } */\n\n    if (!result) {\n        return;\n    }\n\n    const cell = getCell(x, y);\n    cell.dataset.status = 'hit';\n}\n\nfunction gameover(winner) {\n    console.log(`${winner} has won!`);\n}\n\nfunction getCell(x, y) {\n    return hitBoard.querySelector(`.cell[data-x='${x}'][data-y='${y}']`);\n}\n\nfunction resetBoard() {\n    const cells = document.querySelectorAll(`.board .cell`);\n\n    for (let cell of cells) {\n        cell.dataset.status = 'unhit';\n        cell.dataset.ship = false;\n    }\n}\n\n/**\n * Update text content of current player element\n * @param {string} player\n */\nfunction setCurrentPlayer(player) {\n    currentPlayer.textContent = player;\n}\n\n\n//# sourceURL=webpack://super-template/./src/scripts/display.js?");

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\n/* const Ship = require('./ship'); */\n\n\nclass Gameboard {\n    constructor() {\n        this.board = this.#createBoard();\n    }\n\n    // 5 types of ships, each type denoted by map key\n    #shipTypes = new Map([\n        [\n            0,\n            {\n                length: 5,\n                name: 'Carrier',\n            },\n        ],\n        [\n            1,\n            {\n                length: 4,\n                name: 'Battleship',\n            },\n        ],\n        [\n            2,\n            {\n                length: 3,\n                name: 'Cruiser',\n            },\n        ],\n        [\n            3,\n            {\n                length: 4,\n                name: 'Submarine',\n            },\n        ],\n        [\n            4,\n            {\n                length: 2,\n                name: 'Destroyer',\n            },\n        ],\n    ]);\n\n    get hasShips() {\n        for (let row in this.board) {\n            for (let col in this.board[row]) {\n                if (this.board[row][col].ship !== false) {\n                    return true;\n                }\n            }\n        }\n\n        return false;\n    }\n\n    // No ships on board or all ships are destroyed\n    get allShipsDestroyed() {\n        for (let row in this.board) {\n            for (let col in this.board[row]) {\n                if (\n                    this.board[row][col].ship !== false &&\n                    !this.board[row][col].hit\n                ) {\n                    return false;\n                }\n            }\n        }\n        return true;\n    }\n\n    /**\n     * Add ship to board if it fits on the given coordinates\n     * @param {number} x board x coordinate\n     * @param {number} y board y coordinate\n     * @param {number} type ship type by number\n     * @param {boolean} direction vertical or horizontal placement\n     */\n    addShip(x, y, type, direction) {\n        const shipType = this.#shipTypes.get(type);\n\n        if (!shipType) {\n            return false;\n        }\n\n        const length = shipType.length;\n        const name = shipType.name;\n\n        if (!this.#shipFits(x, y, length, direction)) {\n            return false;\n        }\n\n        const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, length);\n\n        for (let i = 0; i < length; i++) {\n            if (direction === 'vertical') {\n                this.board[x + i][y].ship = ship;\n            } else if (direction === 'horizontal') {\n                this.board[x][y + i].ship = ship;\n            }\n        }\n\n        return true;\n    }\n\n    #shipFits(x, y, length, direction) {\n        const maxCoord = this.board.length - 1;\n        // depending on the direction, check if ship will go over the boundary\n        if (direction === 'vertical') {\n            const endX = x + length - 1;\n\n            if (endX > maxCoord) {\n                return false;\n            }\n        } else if (direction === 'horizontal') {\n            const endY = y + length - 1;\n\n            if (endY > maxCoord) {\n                return false;\n            }\n        }\n\n        for (let i = 0; i < length; i++) {\n            if (direction === 'vertical') {\n                if (this.board[x + i][y].ship) {\n                    return false;\n                }\n            } else if (direction === 'horizontal') {\n                if (this.board[x][y + i].ship) {\n                    return false;\n                }\n            }\n        }\n\n        return true;\n    }\n\n    /**\n     * Attack coordinates\n     * @param {number} x\n     * @param {number} y\n     * @returns {*} true - successful attack, false - missed, null - already hit\n     */\n    attack(x, y) {\n        const target = this.board[x][y];\n\n        if (target.hit !== null) {\n            return null;\n        }\n\n        this.board[x][y].hit = true;\n\n        if (!target.ship) {\n            return false;\n        }\n\n        target.ship.hit();\n        return true;\n    }\n\n    clearShips() {\n        const row = this.board.length;\n        const col = this.board[0].length;\n\n        for (let r = 0; r < row; r++) {\n            for (let c = 0; c < col; c++) {\n                this.board[r][c].ship = false;\n                this.board[r][c].hit = null;\n            }\n        }\n    }\n\n    #createBoard(size = 10) {\n        const board = [];\n\n        for (let x = 0; x < size; x++) {\n            const row = [];\n            for (let y = 0; y < size; y++) {\n                row.push({\n                    ship: false,\n                    hit: null,\n                });\n            }\n            board.push(row);\n        }\n\n        return board;\n    }\n\n    getBoard() {\n        return this.board;\n    }\n\n    // Hit all cells on the board\n    hitAllCells() {\n        for (let row in this.board) {\n            for (let col in this.board[row]) {\n                this.board[row][col].hit = true;\n            }\n        }\n    }\n\n    randomizeBoard() {\n        for (const [id, ship] of this.#shipTypes) {\n            let x = this.#getRandomInt(this.board.length);\n            let y = this.#getRandomInt(this.board.length);\n            let orientation = this.#randomOrientation();\n\n            while (!this.addShip(x, y, id, orientation)) {\n                x = this.#getRandomInt(this.board.length);\n                y = this.#getRandomInt(this.board.length);\n                orientation = this.#randomOrientation();\n            }\n        }\n    }\n\n    #getRandomInt(max) {\n        return Math.floor(Math.random() * max);\n    }\n\n    #randomOrientation() {\n        if (this.#getRandomInt(2)) {\n            return 'horizontal';\n        }\n\n        return 'vertical';\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n/* module.exports = Gameboard; */\n\n\n//# sourceURL=webpack://super-template/./src/scripts/gameboard.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attack: () => (/* binding */ attack),\n/* harmony export */   currentLose: () => (/* binding */ currentLose),\n/* harmony export */   otherLose: () => (/* binding */ otherLose)\n/* harmony export */ });\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ \"./src/style/style.scss\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/scripts/display.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n\n\n\n\n/*\n\ninitial setup\n    display current player board\n    display hit board (attacks opponent)\n \n attack hitboard\n    update opponent board\n    \n    if direct hit\n        check if all ships destroyed\n            if yes\n                current player wins\n                return\n    \n    switch players\n*/\n\nlet currentPlayer = 0; // 0 = Player, 1 = Opponent\nlet gamemode = 'computer'; // computer or player\nlet player = new _player__WEBPACK_IMPORTED_MODULE_2__.Player();\nlet opponent = new _player__WEBPACK_IMPORTED_MODULE_2__.Computer();\nconst players = [player, opponent];\n\nplayer.board.randomizeBoard();\nopponent.board.randomizeBoard();\n\nfunction currentLose() {\n    players[currentPlayer].board.hitAllCells();\n    refreshBoards();\n}\nfunction otherLose() {\n    players[otherPlayer()].board.hitAllCells();\n    refreshBoards();\n}\n\nrefreshBoards();\n\nfunction refreshBoards() {\n    _display__WEBPACK_IMPORTED_MODULE_1__.setCurrentPlayer(`Player ${currentPlayer + 1}`);\n    _display__WEBPACK_IMPORTED_MODULE_1__.buildBoard(players[currentPlayer].board.board);\n    _display__WEBPACK_IMPORTED_MODULE_1__.buildHitBoard(players[otherPlayer()].board.board);\n}\n\nfunction gameover() {}\n\nfunction otherPlayer() {\n    return currentPlayer === 0 ? 1 : 0;\n}\n\nfunction switchPlayers() {\n    currentPlayer = otherPlayer();\n    _display__WEBPACK_IMPORTED_MODULE_1__.setCurrentPlayer(`Player ${currentPlayer + 1}`);\n    _display__WEBPACK_IMPORTED_MODULE_1__.buildBoard(players[currentPlayer].board.board);\n    _display__WEBPACK_IMPORTED_MODULE_1__.buildHitBoard(players[otherPlayer()].board.board);\n}\n\nfunction attack(x, y) {\n    const status = players[otherPlayer()].board.attack(x, y);\n\n    if (status) {\n        if (players[otherPlayer()].board.allShipsDestroyed) {\n            _display__WEBPACK_IMPORTED_MODULE_1__.gameover(`Player ${currentPlayer + 1}`);\n        }\n    }\n    // player attacked and missed\n    else if (status === false) {\n        if (gamemode === 'computer') {\n            refreshBoards();\n            computerAttack(players[otherPlayer()], players[currentPlayer]);\n        } else {\n            switchPlayers();\n        }\n    }\n\n    return status;\n}\n\nconst delay = (ms) => {\n    return new Promise((res) => setTimeout(res, ms));\n};\n\nfunction randomNumber(min, max) {\n    return Math.floor(Math.random() * (max - min + 1) + min);\n}\n\nasync function computerAttack(computer, opponent) {\n    let status = true;\n\n    while (status) {\n        await delay(randomNumber(500, 1150));\n        let { x, y } = computer.randomAttack(opponent);\n        status = opponent.board.attack(x, y);\n        refreshBoards();\n    }\n}\n\n\n//# sourceURL=webpack://super-template/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Computer: () => (/* binding */ Computer),\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/scripts/gameboard.js\");\n/* const Gameboard = require('./gameboard'); */\n\n\nclass Player {\n    constructor() {\n        this.type = 'player';\n        this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n}\n\nclass Computer extends Player {\n    constructor() {\n        super();\n        this.hits = []; // coordinates of ship hits\n        this.misses = []; // coordinates of misses\n        this.type = 'computer';\n    }\n\n    randomAttack(opponent) {\n        const board = opponent.board.board;\n        const dim = board.length;\n\n        let x, y;\n\n        do {\n            x = this.#getRandomInt(dim);\n            y = this.#getRandomInt(dim);\n        } while (board[x][y].hit);\n\n        return { x, y };\n    }\n\n    smartAttack() {}\n\n    #getRandomInt(max) {\n        return Math.floor(Math.random() * max);\n    }\n}\n\n\n/* module.exports = { Player, Computer }; */\n\n\n//# sourceURL=webpack://super-template/./src/scripts/player.js?");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n    constructor(name, length) {\n        this.length = length;\n        this.name = name;\n        this.hits = 0;\n    }\n\n    get hasSunk() {\n        return this.hits >= this.length;\n    }\n\n    hit() {\n        if (this.hasSunk) {\n            return false;\n        }\n\n        this.hits++;\n        return true;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n/* module.exports = Ship; */\n\n\n//# sourceURL=webpack://super-template/./src/scripts/ship.js?");

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