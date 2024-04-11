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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_helpers_inputvalid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/helpers/inputvalid */ \"./src/modules/helpers/inputvalid.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_scrolllink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scrolllink */ \"./src/modules/scrolllink.js\");\n/* harmony import */ var _modules_tab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tab */ \"./src/modules/tab.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendform */ \"./src/modules/sendform.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__.timer)('20 april 2024')\r\n\r\n;(0,_modules_helpers_inputvalid__WEBPACK_IMPORTED_MODULE_0__.inputValid)(\"#form1\")\r\n;(0,_modules_helpers_inputvalid__WEBPACK_IMPORTED_MODULE_0__.inputValid)(\"#form2\")\r\n;(0,_modules_helpers_inputvalid__WEBPACK_IMPORTED_MODULE_0__.inputValid)(\"#form3\")\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__.modalMenu)()\r\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.modalWind)()\r\n;(0,_modules_scrolllink__WEBPACK_IMPORTED_MODULE_4__.scrollLink)()\r\n;(0,_modules_tab__WEBPACK_IMPORTED_MODULE_5__.tabFunc)()\r\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__.sliderFunc)(['.portfolio-content', '.portfolio-item', 'portfolio-item-active', 'dot', 'dot-active', '.prev', '.next', 2000])\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__.calcFunc)(890)\r\n;(0,_modules_sendform__WEBPACK_IMPORTED_MODULE_8__.sendForm)('form1')\r\n;(0,_modules_sendform__WEBPACK_IMPORTED_MODULE_8__.sendForm)('form2')\r\n;(0,_modules_sendform__WEBPACK_IMPORTED_MODULE_8__.sendForm)('form3')\r\n\r\n\n\n//# sourceURL=webpack://3dproject/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calcFunc: () => (/* binding */ calcFunc)\n/* harmony export */ });\n/* harmony import */ var _helpers_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/animate */ \"./src/modules/helpers/animate.js\");\n\r\n\r\nconst calcFunc = (price = 100) => {\r\n    const calcBlock = document.querySelector('.calc-block')\r\n    const calcSelect = calcBlock.querySelector('.calc-type')\r\n    const calcSquare = calcBlock.querySelector('.calc-square')\r\n    const calcCount = calcBlock.querySelector('.calc-count')\r\n    const calcDay = calcBlock.querySelector('.calc-day')\r\n    const spanTotal = calcBlock.querySelector('#total')\r\n\r\n\r\n    const countCalc = () => {\r\n        const typeCalcValue = +calcSelect.value\r\n        const typeSquareValue = +calcSquare.value\r\n\r\n        let typeDayValue = 1\r\n        let typeCountValue = 1\r\n        let totalValue = 0\r\n\r\n        if(calcCount.value > 1){\r\n            typeCountValue += (+calcCount.value / 10)\r\n        }\r\n\r\n        if(calcDay.value && calcDay.value < 5){\r\n            typeDayValue = 1.5\r\n        } else if(calcDay.value && calcDay.value < 10){\r\n            typeDayValue = 2\r\n        }\r\n\r\n        if(typeCalcValue && typeSquareValue){\r\n            totalValue = price * typeCalcValue * typeSquareValue * typeCountValue * typeDayValue\r\n        } else{\r\n            totalValue = 0\r\n        }\r\n\r\n        (0,_helpers_animate__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 400, \r\n            timing(timeFraction){\r\n                return timeFraction\r\n            },\r\n            draw(progress){\r\n                if(typeCalcValue && typeSquareValue){\r\n                    spanTotal.textContent = Math.floor(totalValue * progress)\r\n                }\r\n            } \r\n          })\r\n    }\r\n\r\n    calcBlock.addEventListener('input', (e) => {\r\n        if(e.target === calcSelect || e.target === calcSquare \r\n        || e.target === calcCount || e.target === calcDay){\r\n            countCalc()\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack://3dproject/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/helpers/animate.js":
/*!****************************************!*\
  !*** ./src/modules/helpers/animate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animate: () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({timing, draw, duration}) => {\r\n    let start = performance.now();\r\n    \r\n  requestAnimationFrame(function animate(time) {\r\n    \r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) timeFraction = 1;\r\n\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress);\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n\r\n  });\r\n}\n\n//# sourceURL=webpack://3dproject/./src/modules/helpers/animate.js?");

/***/ }),

/***/ "./src/modules/helpers/inputvalid.js":
/*!*******************************************!*\
  !*** ./src/modules/helpers/inputvalid.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inputValid: () => (/* binding */ inputValid)\n/* harmony export */ });\nconst inputValid = (selector) => {\r\n    const blockInputs = document.querySelector(selector)\r\n    const inputs = blockInputs.querySelectorAll('input')\r\n\r\n    const calcBlock = document.querySelector('.calc-block')\r\n\r\n    let textRegexp = /[^а-яА-Я\\s-]+/g\r\n    let emailRegexp = /[^a-zA-Z0-9@\\-_.!~*']+/g\r\n    let telRegexp = /[^\\d()\\-+]/g\r\n    let messRegexp = /[^а-яА-Я0-9\\s-_.!~*'\"]+/g\r\n\r\n    inputs.forEach((input) => {\r\n        input.addEventListener('input', (e) => {\r\n            input.removeAttribute('style')\r\n            \r\n            if(input.getAttribute('type') === 'text'){\r\n                input.value = e.target.value.replace(textRegexp, '')\r\n            } else if(input.getAttribute('type') === 'email'){\r\n                input.value = e.target.value.replace(emailRegexp, '')\r\n            } else if(input.getAttribute('type') === 'tel'){\r\n                input.value = e.target.value.replace(telRegexp, '')\r\n            } else{\r\n                input.value = e.target.value.replace(messRegexp, '')\r\n            }\r\n        })\r\n\r\n        input.addEventListener('blur', (e) => {\r\n            if(input.getAttribute('type') === 'text'){\r\n                e.target.value = e.target.value.trim()\r\n                .replace(/\\s+/g, ' ')\r\n                .replace(/[-_]*/, '')\r\n                .replace(/( |^)[а-я]/g, (x) => {\r\n                    return x.toUpperCase();\r\n                });\r\n            } else {\r\n                e.target.value = e.target.value.replace(/[-_]*/, '')\r\n            }\r\n        })\r\n    })\r\n\r\n    calcBlock.addEventListener('input', (e) => {\r\n        if(e.target.localName === 'input'){\r\n             e.target.value = e.target.value.replace(/\\D/g, '')\r\n        }\r\n     })\r\n}\n\n//# sourceURL=webpack://3dproject/./src/modules/helpers/inputvalid.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modalMenu: () => (/* binding */ modalMenu)\n/* harmony export */ });\n/* harmony import */ var _smoothscroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smoothscroll */ \"./src/modules/smoothscroll.js\");\n\r\n\r\nconst modalMenu = () => {\r\n    const btnMenu = document.querySelector('.menu')\r\n    const menu = document.querySelector('menu')\r\n    const closeMenu = document.querySelector('.close-btn')\r\n\r\n    const openMenu = (e) => {\r\n        e.preventDefault()\r\n        if(e.target.closest('.menu')){\r\n            menu.classList.add('active-menu')\r\n        } else if(e.target === closeMenu){\r\n            menu.classList.remove('active-menu')\r\n        } else if(e.target.closest('li')){\r\n            menu.classList.remove('active-menu')\r\n            ;(0,_smoothscroll__WEBPACK_IMPORTED_MODULE_0__.smoothScroll)(e.target.hash)\r\n        }\r\n    }\r\n\r\n    btnMenu.addEventListener('click', openMenu)\r\n    menu.addEventListener('click', openMenu)\r\n}\n\n//# sourceURL=webpack://3dproject/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modalWind: () => (/* binding */ modalWind)\n/* harmony export */ });\n/* harmony import */ var _helpers_animate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/animate */ \"./src/modules/helpers/animate.js\");\n\r\n\r\nconst modalWind = () => {\r\n    const btnPopup = document.querySelectorAll('.popup-btn')\r\n    const popup = document.querySelector('.popup')\r\n\r\n    const startAnimate = () => {\r\n        if(window.innerWidth < 768){\r\n            // popup.style.transform = 'translate(0px, 0px)'\r\n        } else{\r\n            (0,_helpers_animate__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 300, \r\n                timing(timeFraction){\r\n                    return timeFraction\r\n                },\r\n                draw(progress){\r\n                  popup.style.transform = `translate(${-(100 + (-100 *  progress))}%)`\r\n                } \r\n              })\r\n        }\r\n    }\r\n\r\n    const openModal = (e) => {\r\n        if(e.target.matches('.popup-btn')){\r\n            popup.style.display = 'block'\r\n            startAnimate()\r\n        } else if(e.target.className === 'popup-close'){\r\n            popup.style.display = 'none' \r\n        } else if(e.target === popup){\r\n            popup.style.display = 'none'\r\n        }\r\n    }\r\n\r\n    btnPopup.forEach((btn) => {\r\n        btn.addEventListener('click', openModal)\r\n    })\r\n    popup.addEventListener('click', openModal)\r\n}\n\n//# sourceURL=webpack://3dproject/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/scrolllink.js":
/*!***********************************!*\
  !*** ./src/modules/scrolllink.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrollLink: () => (/* binding */ scrollLink)\n/* harmony export */ });\nconst scrollLink = () => {\r\n    const link = document.querySelector('main > a')\r\n\r\n    link.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n            document.querySelector(e.target.closest('a').hash).scrollIntoView({\r\n                behavior: \"smooth\",\r\n                block: \"start\",\r\n            })\r\n    })\r\n}\n\n//# sourceURL=webpack://3dproject/./src/modules/scrolllink.js?");

/***/ }),

/***/ "./src/modules/sendform.js":
/*!*********************************!*\
  !*** ./src/modules/sendform.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendForm: () => (/* binding */ sendForm)\n/* harmony export */ });\nconst sendForm = (idForm) => {\r\n    const form = document.getElementById(idForm)\r\n    const preload = document.querySelector('.preloader')\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            headers: {\r\n                'Content-Type': 'multipart/form-data'\r\n            },\r\n            body: data\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    const validInput = (inputs) => {\r\n        let succes = false\r\n\r\n        succes = Array.from(inputs).every((input) => {\r\n            if (input.value === '') {\r\n                input.style.border = '3px solid red'\r\n                input.style.color = 'red'\r\n                input.value = 'заполните поле'\r\n\r\n                return false\r\n            } else {\r\n                return true\r\n            }\r\n        })\r\n\r\n        return succes\r\n    }\r\n\r\n    const dataPreporation = (e) => {\r\n        e.preventDefault()\r\n        const formData = new FormData(e.target)\r\n        const allInputs = e.target.querySelectorAll('input')\r\n\r\n        preload.style.display = 'flex'\r\n\r\n        if (validInput(allInputs)) {\r\n            sendData(formData)\r\n                .then(() => {\r\n                    preload.style.display = 'none'\r\n                    allInputs.forEach((input) => {\r\n                        input.value = ''\r\n                    })\r\n                    alert('форма успешно отправлена')\r\n                })\r\n        } else {\r\n            alert('заполните поля')\r\n        }\r\n    }\r\n\r\n    form.addEventListener('submit', dataPreporation)\r\n}\n\n//# sourceURL=webpack://3dproject/./src/modules/sendform.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sliderFunc: () => (/* binding */ sliderFunc)\n/* harmony export */ });\nconst sliderFunc = ([sliderClass, slidesClass, slideActive = 'portfolio-item-active', dotClass, dotActive = 'dot-active', prevLink, nextLink, time]) => {\r\n    const slider = document.querySelector(sliderClass)\r\n    const slides = document.querySelectorAll(slidesClass)\r\n\r\n    let count = 0\r\n    let interval\r\n    let arrDots\r\n\r\n    const addDots = () => {\r\n        const dotWrapper = slider.querySelector('.portfolio-dots')\r\n\r\n        for (let dot = 0; dot <= slides.length - 1; dot++) {\r\n            const newDots = document.createElement('li')\r\n\r\n            dotWrapper.append(newDots)\r\n        }\r\n\r\n        arrDots = dotWrapper.querySelectorAll('li')\r\n\r\n        arrDots.forEach((dot, index) => {\r\n            if (index === 0) {\r\n                dot.classList.add(dotClass, dotActive)\r\n            } else {\r\n                dot.classList.add(dotClass)\r\n            }\r\n        })\r\n    }\r\n\r\n    const prev = (arrElem, activeClass, index) => {\r\n        arrElem[index].classList.remove(activeClass)\r\n    }\r\n\r\n    const next = (arrElem, activeClass, index) => {\r\n        arrElem[index].classList.add(activeClass)\r\n    }\r\n\r\n    const autoSlider = () => {\r\n        prev(arrDots, dotActive, count)\r\n        prev(slides, slideActive, count)\r\n        count++\r\n\r\n        if (count >= slides.length) {\r\n            count = 0\r\n        }\r\n\r\n        next(arrDots, dotActive, count)\r\n        next(slides, slideActive, count)\r\n    }\r\n\r\n    const changeSlider = (e) => {\r\n        e.preventDefault()\r\n\r\n        prev(arrDots, dotActive, count)\r\n        prev(slides, slideActive, count)\r\n\r\n        if (e.target.matches(prevLink)) {\r\n            count--\r\n        } else if (e.target.matches(nextLink)) {\r\n            count++\r\n        } else if (e.target.matches('.dot')) {\r\n            arrDots.forEach((dot, index) => {\r\n                if (e.target === dot) {\r\n                    count = index\r\n                }\r\n            })\r\n        }\r\n\r\n        if (count < 0) {\r\n            count = slides.length - 1\r\n        }\r\n\r\n        if (count >= slides.length) {\r\n            count = 0\r\n        }\r\n\r\n        next(arrDots, dotActive, count)\r\n        next(slides, slideActive, count)\r\n    }\r\n\r\n    const startSlider = () => {\r\n        if (slider && slides) {\r\n            addDots()\r\n            interval = setInterval(autoSlider, time)\r\n\r\n            slider.addEventListener('click', changeSlider)\r\n            slider.addEventListener('mouseover', (e) => {\r\n                if (e.target.matches('.dot') || e.target.matches('.portfolio-btn')) {\r\n                    clearInterval(interval)\r\n                }\r\n            })\r\n            slider.addEventListener('mouseleave', (e) => {\r\n                if (e.target.matches('.dot') || e.target.matches('.portfolio-btn')) {\r\n                    interval = setInterval(autoSlider, time)\r\n                }\r\n            }, true)\r\n\r\n        } else {\r\n            throw new Error('Передан не верный селектор в модуль слайдера, исправь пожалуста :)')\r\n        }\r\n    }\r\n\r\n    startSlider()\r\n}\n\n//# sourceURL=webpack://3dproject/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/smoothscroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothscroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   smoothScroll: () => (/* binding */ smoothScroll)\n/* harmony export */ });\nconst smoothScroll = (id) => {\r\n    const blockScroll = document.querySelector(id)\r\n\r\n    blockScroll.scrollIntoView({\r\n        behavior: \"smooth\",\r\n        block: \"start\",\r\n    })\r\n}\n\n//# sourceURL=webpack://3dproject/./src/modules/smoothscroll.js?");

/***/ }),

/***/ "./src/modules/tab.js":
/*!****************************!*\
  !*** ./src/modules/tab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tabFunc: () => (/* binding */ tabFunc)\n/* harmony export */ });\nconst tabFunc = () => {\r\n    const tabPanel = document.querySelector('.service-header')\r\n    const tabsBtn = document.querySelectorAll('.service-header-tab')\r\n    const tabs = document.querySelectorAll('.service-tab')\r\n    \r\n    const changeTab = (e) => {\r\n        if(e.target.closest('.service-header-tab')){\r\n            tabsBtn.forEach((btn, index) => {\r\n                if(btn === e.target.closest('.service-header-tab')){\r\n                    btn.classList.add('active')\r\n                    tabs[index].classList.remove('d-none')\r\n                } else{\r\n                    btn.classList.remove('active')\r\n                    tabs[index].classList.add('d-none')\r\n                }\r\n            })\r\n        }\r\n    }\r\n\r\n    tabPanel.addEventListener('click', changeTab)\r\n}\n\n//# sourceURL=webpack://3dproject/./src/modules/tab.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   timer: () => (/* binding */ timer)\n/* harmony export */ });\nconst timer = (deadline) => {\r\nconst timerHours = document.getElementById('timer-hours')\r\nconst timerMinutes = document.getElementById('timer-minutes')\r\nconst timerSeconds = document.getElementById('timer-seconds')\r\nconst timerDay = document.getElementById('timer-day')\r\n\r\nlet interval\r\n\r\nconst getTime = () => {\r\n    let dateStop = new Date(deadline).getTime()\r\n    let dateNow = new Date().getTime()\r\n    let timeRemaining = (dateStop - dateNow) / 1000\r\n\r\n    let days = Math.floor(timeRemaining / 60 / 60 / 24)\r\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24)\r\n    let minutes = Math.floor((timeRemaining / 60) % 60)\r\n    let seconds = Math.floor(timeRemaining % 60)\r\n\r\n    return {timeRemaining, days, hours, minutes, seconds}\r\n}\r\n\r\nconst updateClock = () => {\r\n    const {timeRemaining, days, hours, minutes, seconds} = getTime()\r\n\r\n    timerHours.textContent = hours < 10 ? `0${hours}` : hours\r\n    timerMinutes.textContent = minutes < 10 ? `0${minutes}` : minutes\r\n    timerSeconds.textContent = seconds < 10 ? `0${seconds}` : seconds\r\n    timerDay.textContent = days < 10 ? `0${days}` : days\r\n\r\n    if(timeRemaining < 0){\r\n        clearInterval(interval)\r\n        timerHours.textContent = '00'\r\n        timerMinutes.textContent = '00'\r\n        timerSeconds.textContent = '00'\r\n        timerDay.textContent = '00'\r\n    }\r\n}\r\n\r\ninterval = setInterval(updateClock, 1000)\r\n}\r\n\n\n//# sourceURL=webpack://3dproject/./src/modules/timer.js?");

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