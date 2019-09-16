/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/coldAjax.js":
/*!*************************!*\
  !*** ./src/coldAjax.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  req: function req(coldAjaxMethod, coldAjaxUrl, coldAjaxProcessor, data) {\n    var coldHttpRequest = new XMLHttpRequest();\n\n    function loading() {\n      if (!coldHttpRequest) {\n        alert(\"Request Failed!\");\n      }\n\n      coldHttpRequest.onreadystatechange = processRequest;\n      coldHttpRequest.open(coldAjaxMethod, coldAjaxUrl, true);\n\n      if (data) {\n        coldHttpRequest.send(data);\n      } else {\n        coldHttpRequest.send();\n      }\n    }\n\n    function processRequest() {\n      if (coldHttpRequest.readyState == XMLHttpRequest.DONE) {\n        if (coldHttpRequest.status === 200) {\n          var _data = coldHttpRequest.responseText;\n          var resp = _data;\n          coldAjaxProcessor(resp);\n        } else {\n          var _resp = \"Failed Request!\";\n          coldAjaxProcessor(_resp);\n        }\n      }\n    }\n\n    loading();\n  }\n});\n\n//# sourceURL=webpack:///./src/coldAjax.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_meyer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/meyer.css */ \"./styles/meyer.css\");\n/* harmony import */ var _styles_meyer_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_meyer_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _coldAjax_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coldAjax.js */ \"./src/coldAjax.js\");\n\n\n\nvar server = \"http://155.138.147.77:3000/\";\nvar resp = \"http://155.138.147.77/js-image-editor/\";\nvar fileInput = document.querySelector(\"#file\"),\n    fileInputLabel = document.querySelector(\".file-input-label\"),\n    image = document.querySelector(\".image\"),\n    imageIsInit = false,\n    modifierButtons = document.querySelectorAll(\".modifier\"),\n    appliedModifiers = [];\n\nvar changeImage = function changeImage() {\n  var data = new FormData();\n  data.append(\"file_name\", fileInput.files[0]);\n  _coldAjax_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].req(\"POST\", server + \"upload\", response, data);\n};\n\nvar response = function response(data) {\n  var newImage = data.split(\":\")[1];\n  image.src = resp + \"upload/\" + newImage;\n  image.style.display = \"block\";\n  fileInput.style.display = \"none\";\n  fileInputLabel.style.display = \"none\";\n  imageIsInit = true;\n};\n\nvar imageModifers = function imageModifers() {\n  if (imageIsInit) {\n    var modifier = event.target.innerHTML.toLowerCase();\n\n    switch (modifier) {\n      case \"invert\":\n        cssFilter(modifier, \"invert(100%)\");\n        break;\n\n      case \"grayscale\":\n        cssFilter(modifier, \"grayscale(100%)\");\n        break;\n\n      case \"hue\":\n        cssFilter(modifier, \"hue-rotate(90deg)\");\n        break;\n\n      case \"contrast\":\n        cssFilter(modifier, \"contrast(200%)\");\n        break;\n\n      case \"saturate\":\n        cssFilter(modifier, \"saturate(200%)\");\n        break;\n\n      case \"sepia\":\n        cssFilter(modifier, \"sepia(100%)\");\n        break;\n\n      case \"brighten\":\n        cssFilter(modifier, \"brightness(2)\");\n        break;\n\n      case \"darken\":\n        cssFilter(modifier, \"brightness(0.5)\");\n        break;\n\n      case \"uglify\":\n        cssFilter(modifier, \"brightness(2) saturate(300%) hue-rotate(45deg)\");\n        break;\n\n      case \"flip x\":\n        cssTransform(modifier, \"scaleX(-1)\");\n        break;\n\n      case \"flip y\":\n        cssTransform(modifier, \"scaleY(-1)\");\n        break;\n\n      case \"skew left\":\n        cssTransform(modifier, \"skewY(-10deg)\");\n        break;\n\n      case \"skew right\":\n        cssTransform(modifier, \"skewY(10deg)\");\n        break;\n    }\n  }\n};\n\nvar cssFilter = function cssFilter(modifier, filter) {\n  if (appliedModifiers.includes(modifier)) {\n    image.style.filter = image.style.filter.replace(filter, \"\");\n    appliedModifiers = appliedModifiers.filter(function (appliedModifier) {\n      return appliedModifier !== modifier;\n    });\n  } else {\n    image.style.filter += filter;\n    appliedModifiers.push(modifier);\n  }\n\n  console.log(modifier);\n};\n\nvar cssTransform = function cssTransform(modifier, transform) {\n  if (appliedModifiers.includes(modifier)) {\n    image.style.transform = image.style.transform.replace(transform, \"\");\n    appliedModifiers = appliedModifiers.filter(function (appliedModifier) {\n      return appliedModifier !== modifier;\n    });\n  } else {\n    image.style.transform += transform;\n    appliedModifiers.push(modifier);\n  }\n\n  console.log(modifier);\n};\n\nfileInput.addEventListener(\"change\", changeImage, false);\nmodifierButtons.forEach(function (element) {\n  element.addEventListener(\"click\", imageModifers, false);\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ }),

/***/ "./styles/meyer.css":
/*!**************************!*\
  !*** ./styles/meyer.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/meyer.css?");

/***/ })

/******/ });