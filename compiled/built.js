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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_meyer_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/meyer.css */ \"./styles/meyer.css\");\n/* harmony import */ var _styles_meyer_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_meyer_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar fileInput = document.querySelector('#file');\nvar fileInputLabel = document.querySelector('.file-input-label');\nvar image = document.querySelector('.image');\nvar imageIsInit = false;\nvar modifierButtons = document.querySelectorAll('.modifier');\nvar appliedModifiers = [];\n\nvar changeImage = function changeImage() {\n  var newFile = document.querySelector('#file').files[0];\n  var newImage = document.querySelector('.image');\n  var reader = new FileReader();\n  reader.addEventListener('load', function () {\n    newImage.src = reader.result;\n  }, false);\n\n  if (newImage) {\n    reader.readAsDataURL(newFile);\n    image.style.display = 'block';\n    fileInput.style.display = 'none';\n    fileInputLabel.style.display = 'none';\n    imageIsInit = true;\n  }\n};\n\nvar cssTransform = function cssTransform(modifier, transform) {\n  if (appliedModifiers.includes(modifier)) {\n    image.style.transform = image.style.transform.replace(transform, '');\n    appliedModifiers = appliedModifiers.filter(function (appliedModifier) {\n      return appliedModifier !== modifier;\n    });\n  } else {\n    image.style.transform += transform;\n    appliedModifiers.push(modifier);\n  }\n\n  console.log(modifier);\n};\n\nvar cssFilter = function cssFilter(modifier, filter) {\n  if (appliedModifiers.includes(modifier)) {\n    image.style.filter = image.style.filter.replace(filter, '');\n    appliedModifiers = appliedModifiers.filter(function (appliedModifier) {\n      return appliedModifier !== modifier;\n    });\n  } else {\n    image.style.filter += filter;\n    appliedModifiers.push(modifier);\n  }\n\n  console.log(modifier);\n};\n\nvar imageModifers = function imageModifers(event) {\n  if (imageIsInit) {\n    var modifier = event.target.innerHTML.toLowerCase();\n\n    switch (modifier) {\n      case 'invert':\n        cssFilter(modifier, 'invert(100%)');\n        break;\n\n      case 'grayscale':\n        cssFilter(modifier, 'grayscale(100%)');\n        break;\n\n      case 'hue':\n        cssFilter(modifier, 'hue-rotate(90deg)');\n        break;\n\n      case 'contrast':\n        cssFilter(modifier, 'contrast(200%)');\n        break;\n\n      case 'saturate':\n        cssFilter(modifier, 'saturate(200%)');\n        break;\n\n      case 'sepia':\n        cssFilter(modifier, 'sepia(100%)');\n        break;\n\n      case 'brighten':\n        cssFilter(modifier, 'brightness(2)');\n        break;\n\n      case 'darken':\n        cssFilter(modifier, 'brightness(0.5)');\n        break;\n\n      case 'uglify':\n        cssFilter(modifier, 'brightness(2) saturate(300%) hue-rotate(45deg)');\n        break;\n\n      case 'flip x':\n        cssTransform(modifier, 'scaleX(-1)');\n        break;\n\n      case 'flip y':\n        cssTransform(modifier, 'scaleY(-1)');\n        break;\n\n      case 'skew left':\n        cssTransform(modifier, 'skewY(-10deg)');\n        break;\n\n      case 'skew right':\n        cssTransform(modifier, 'skewY(10deg)');\n        break;\n\n      default:\n        console.log('No Case');\n        break;\n    }\n  }\n};\n\nfileInput.addEventListener('change', changeImage, false);\nmodifierButtons.forEach(function (element) {\n  element.addEventListener('click', imageModifers, false);\n});\n\n//# sourceURL=webpack:///./src/main.js?");

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