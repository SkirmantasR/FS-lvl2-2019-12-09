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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/App */ \"./src/js/App.js\");\n\r\n\r\nnew _js_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().start();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs_Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/Logger */ \"./src/js/libs/Logger.js\");\n/* harmony import */ var _libs_Validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/Validation */ \"./src/js/libs/Validation.js\");\n/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/math */ \"./src/js/utils/math.js\");\n\r\n\r\n\r\n\r\nclass App {\r\n  constructor() {\r\n    const logContainer = document.querySelector('.js-log');\r\n    this.add = _utils_math__WEBPACK_IMPORTED_MODULE_2__[\"add\"];\r\n    this.subtract = _utils_math__WEBPACK_IMPORTED_MODULE_2__[\"subtract\"];\r\n    this.multiply = _utils_math__WEBPACK_IMPORTED_MODULE_2__[\"multiply\"];\r\n    this.divide = _utils_math__WEBPACK_IMPORTED_MODULE_2__[\"divide\"];\r\n    this.input1 = document.querySelector('.js-operand-1');\r\n    this.input2 = document.querySelector('.js-operand-2');\r\n    this.btn = document.querySelector('.btn.btn-primary');\r\n    this.jsOperator = document.querySelector('.js-operator');\r\n    this.logger = new _libs_Logger__WEBPACK_IMPORTED_MODULE_0__[\"default\"](logContainer);\r\n  }\r\n\r\n  start () {\r\n    this.btn.addEventListener('click',  () => {\r\n      let a = this.input1.value, b = this.input2.value;\r\n      let validate1 = new _libs_Validation__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Input one', a)\r\n        .isNumber()\r\n        .length(1, 16)\r\n        .notEmpty();\r\n      let validate2 = new _libs_Validation__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Input two', b)\r\n        .isNumber()\r\n        .length(1, 16)\r\n        .notEmpty();\r\n      let errors = validate1.getErrors().concat(validate2.getErrors());\r\n      if (errors.length > 0) this.logger.logErrors(errors);\r\n      else this.logger.logAnswer(this[this.jsOperator.value](Number(a), Number(b)))\r\n    });\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/js/App.js?");

/***/ }),

/***/ "./src/js/libs/Logger.js":
/*!*******************************!*\
  !*** ./src/js/libs/Logger.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Logger; });\nclass Logger{\r\n    constructor(container){\r\n        this.container = container;\r\n    }\r\n    logErrors(msgArr) {\r\n        this.container.innerHTML = '<h3 class=\"text-danger\">Error:</h3>';\r\n        msgArr.forEach(msg => {\r\n            this.container.innerHTML += `<div class=\"text-danger\">${msg}</div>`;\r\n        });\r\n    }\r\n    \r\n    logAnswer(ans) {\r\n        this.container.innerHTML = `<h3 class=\"text-success\">Answer is: ${ans}</h3>`;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/libs/Logger.js?");

/***/ }),

/***/ "./src/js/libs/Validation.js":
/*!***********************************!*\
  !*** ./src/js/libs/Validation.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Validation {\r\n  constructor(name, value) {\r\n    this.name = name;\r\n    this.value = value;\r\n    this.errors = [];\r\n  }\r\n  isNumber() {\r\n    if (isNaN(this.value)) this.errors.push(`${this.name}: value is not numerical.`);\r\n    return this;\r\n  }\r\n  length(min, max) {\r\n    if (this.value.length < min || this.value.length > max)\r\n      this.errors.push(`${this.name}: must be between ${min} and ${max}.`);\r\n    return this;\r\n  }\r\n  notEmpty() {\r\n    if (this.value == '') this.errors.push(`${this.name}: must not be empty.`);\r\n    return this;\r\n  }\r\n  getErrors() {\r\n    return this.errors;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Validation);\n\n//# sourceURL=webpack:///./src/js/libs/Validation.js?");

/***/ }),

/***/ "./src/js/utils/math.js":
/*!******************************!*\
  !*** ./src/js/utils/math.js ***!
  \******************************/
/*! exports provided: add, subtract, multiply, divide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subtract\", function() { return subtract; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"multiply\", function() { return multiply; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"divide\", function() { return divide; });\nconst add = (a, b) =>  a + b;\r\n\r\nconst subtract = (a, b) =>  a - b;\r\n\r\nconst multiply = (a, b) =>  a * b;\r\n\r\nconst divide = (a, b) =>  a / b;\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/utils/math.js?");

/***/ })

/******/ });