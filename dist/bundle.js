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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n\r\n\r\n\r\n\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__.modalMenu)()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.modalWind)()\r\n\n\n//# sourceURL=webpack://3dproject/./src/index.js?");

/***/ }),

/***/ "./src/modules/helpers/animate.js":
/*!****************************************!*\
  !*** ./src/modules/helpers/animate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({timing, draw, duration}) => {\r\n    let start = performance.now();\r\n    \r\n  requestAnimationFrame(function animate(time) {\r\n    \r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress);\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n\r\n  });\r\n}\n\n//# sourceURL=webpack://3dproject/./src/modules/helpers/animate.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modalMenu: () => (/* binding */ modalMenu)\n/* harmony export */ });\nconst modalMenu = () => {\r\n    const btnMenu = document.querySelector('.menu')\r\n    const menu = document.querySelector('menu')\r\n    const closeMenu = document.querySelector('.close-btn')\r\n\r\n    const openMenu = (e) => {\r\n        if(e.target.closest('.menu')){\r\n            menu.classList.add('active-menu')\r\n        } else if(e.target === closeMenu){\r\n            menu.classList.remove('active-menu')\r\n        } else if(e.target.closest('li')){\r\n            // smoothScroll()\r\n        }\r\n    }\r\n\r\n    btnMenu.addEventListener('click', openMenu)\r\n    menu.addEventListener('click', openMenu)\r\n}\n\n//# sourceURL=webpack://3dproject/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modalWind: () => (/* binding */ modalWind)\n/* harmony export */ });\n/* harmony import */ var _helpers_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/animate */ \"./src/modules/helpers/animate.js\");\n\r\n\r\nconst modalWind = () => {\r\n    const btnPopup = document.querySelectorAll('.popup-btn')\r\n    const popup = document.querySelector('.popup')\r\n\r\n    const startAnimate = () => {\r\n        if(window.innerWidth < 768){\r\n            popup.style.transform = 'translate(0px, 0px)'\r\n        } else{\r\n            (0,_helpers_animate__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 300, \r\n                timing(timeFraction){\r\n                    return timeFraction\r\n                },\r\n                draw(progress){\r\n                  popup.style.transform = `translate(${-(100 + (-100 *  progress))}%)`\r\n                } \r\n              })\r\n        }\r\n    }\r\n\r\n    const openModal = (e) => {\r\n        if(e.target.localName === 'button'){\r\n            popup.style.display = 'block'\r\n            startAnimate()\r\n        } else if(e.target.className === 'popup-close'){\r\n            popup.style.display = 'none'\r\n        } else if(e.target === popup){\r\n            popup.style.display = 'none'\r\n        }\r\n    }\r\n\r\n    btnPopup.forEach((btn) => {\r\n        btn.addEventListener('click', openModal)\r\n    })\r\n    popup.addEventListener('click', openModal)\r\n}\n\n//# sourceURL=webpack://3dproject/./src/modules/modal.js?");

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