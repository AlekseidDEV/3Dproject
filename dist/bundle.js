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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_helpers_inputvalid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/helpers/inputvalid */ \"./src/modules/helpers/inputvalid.js\");\n\r\n\r\n\r\n\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_0__.calc)()\r\n\r\n;(0,_modules_helpers_inputvalid__WEBPACK_IMPORTED_MODULE_1__.inputValid)(\"#form1\")\r\n;(0,_modules_helpers_inputvalid__WEBPACK_IMPORTED_MODULE_1__.inputValid)(\"#form2\")\n\n//# sourceURL=webpack://3dproject/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calc: () => (/* binding */ calc)\n/* harmony export */ });\nconst calc = () => {\r\n    const calcBlock = document.querySelector('.calc-block')\r\n\r\n\r\n    calcBlock.addEventListener('input', (e) => {\r\n       if(e.target.localName === 'input'){\r\n            e.target.value = e.target.value.replace(/\\D/g, '')\r\n       }\r\n    })\r\n}\n\n//# sourceURL=webpack://3dproject/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/helpers/inputvalid.js":
/*!*******************************************!*\
  !*** ./src/modules/helpers/inputvalid.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inputValid: () => (/* binding */ inputValid)\n/* harmony export */ });\nconst inputValid = (selector) => {\r\n    const blockInputs = document.querySelector(selector)\r\n    const inputs = blockInputs.querySelectorAll('input')\r\n\r\n    let textRegexp = /[^а-яА-Я\\s-]+/g\r\n    let emailRegexp = /[^a-zA-Z0-9@\\-_.!~*']+/g\r\n    let telRegexp = /[^\\d()\\-+]/g\r\n    let messRegexp = /[^а-яА-Я0-9\\s-_.!~*'\"]+/g\r\n\r\n    inputs.forEach((input) => {\r\n        input.addEventListener('input', (e) => {\r\n            if(input.getAttribute('type') === 'text'){\r\n                input.value = e.target.value.replace(textRegexp, '')\r\n            } else if(input.getAttribute('type') === 'email'){\r\n                input.value = e.target.value.replace(emailRegexp, '')\r\n            } else if(input.getAttribute('type') === 'tel'){\r\n                input.value = e.target.value.replace(telRegexp, '')\r\n            } else{\r\n                input.value = e.target.value.replace(messRegexp, '')\r\n            }\r\n        })\r\n\r\n        // input.addEventListener('blur', (e) => {\r\n        //     if(input.getAttribute('type') === 'text'){\r\n        //         console.log(e.target);\r\n        //     }\r\n        // })\r\n    })\r\n}\n\n//# sourceURL=webpack://3dproject/./src/modules/helpers/inputvalid.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;