/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const sortPackage = __webpack_require__(/*! ./sort.js */ \"./src/sort.js\");\n\nclass Node {\n    data;\n    left;\n    right;\n\n    constructor(data, left = null, right = null) {\n        this.data = data;\n    }\n}\n\nclass Tree {\n    root;\n\n    buildTree(arr) {\n        //sort arr then turn into BST\n        //passing in empty helper arr for mergeSort\n        let helperArr = [];\n        sortPackage.topDownMergeSort(arr, helperArr, arr.length);\n        return arr;\n    }\n\n    constructor(arr) {\n        this.root = this.buildTree(arr);\n        console.log(this.root);\n    }\n\n\n}\n\nlet sortMeArr = [7, 2, 5, 11, 13, 57, 48, 63, 12, 1, 6, 4321];\n\nlet bst = new Tree(sortMeArr);\n/*\nlet emptyArr = [];\nsortPackage.topDownMergeSort(sortMeArr, emptyArr, sortMeArr.length);\nconsole.log(sortMeArr);\n*/\n\n//# sourceURL=webpack://binarysearchtree/./src/index.js?");

/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   topDownMergeSort: () => (/* binding */ topDownMergeSort)\n/* harmony export */ });\nfunction topDownMergeSort(arr1, arr2, n) {\n    copyArray(arr1, 0, n, arr2);\n    topDownSplitMerge(arr2, 0, n, arr1);\n}\n\nfunction copyArray(arr1, iBegin, iEnd, arr2) {\n    for (let k = iBegin; k < iEnd; k++) {\n        arr2[k] = arr1[k];\n    }\n}\n\nfunction topDownSplitMerge(arr2, iBegin, iEnd, arr1) {\n    if (iEnd - iBegin <= 1) {\n        return;\n    }\n\n    let iMiddle = Math.ceil((iEnd + iBegin) / 2);\n    topDownSplitMerge(arr1, iBegin, iMiddle, arr2);\n    topDownSplitMerge(arr1, iMiddle, iEnd, arr2);\n    topDownMerge(arr2, iBegin, iMiddle, iEnd, arr1);\n}\n\nfunction topDownMerge(arr1, iBegin, iMiddle, iEnd, arr2) {\n    let i = iBegin, j = iMiddle;\n\n    for (let k = iBegin; k < iEnd; k++) {\n        if (i < iMiddle && (j >= iEnd || arr1[i] <= arr1[j])) {\n            arr2[k] = arr1[i];\n            i = i + 1;\n        } else {\n            arr2[k] = arr1[j];\n            j = j + 1;\n        }\n    }\n}\n\n\n// example\n//let ranArr = [112, 123, 12, 31, 123, 141, 234, 1211, 2, 3];\n//let emptyArr = [];\n//topDownMergeSort(ranArr, emptyArr, ranArr.length);\n\n\n//# sourceURL=webpack://binarysearchtree/./src/sort.js?");

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