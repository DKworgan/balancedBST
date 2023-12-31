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

eval("const sortPackage = __webpack_require__(/*! ./sort.js */ \"./src/sort.js\");\n\nclass Node {\n    data;\n    left;\n    right;\n\n    constructor(data, left = null, right = null) {\n        this.data = data;\n        this.left = left;\n        this.right = right;\n    }\n}\n\nclass Tree {\n    root;\n\n    constructor(arr) {\n        this.root = this.buildTree(arr);\n    }\n\n    buildTree(arr) {\n        //sort arr then turn into BST\n        //passing in empty helper arr for mergeSort\n        let helperArr = [];\n        let len = arr.length;\n\n        sortPackage.topDownMergeSort(arr, helperArr, arr.length);\n        let rootNode = this.sortedArrToBST(arr, 0, len - 1);\n\n        return rootNode;\n    }\n\n    sortedArrToBST(arr, start, end) {\n        if (start > end) {\n            return null;\n        }\n\n        let mid = Math.floor((start + end) / 2);\n        let node = new Node(arr[mid]);\n        node.left = this.sortedArrToBST(arr, start, mid - 1);\n        node.right = this.sortedArrToBST(arr, mid + 1, end);\n\n        return node;\n    }\n\n    insert(val) {\n        let tempBol = true;\n        let tempRoot = this.root;\n        let tempNode = new Node(val);\n\n        while (tempBol) {\n\n            //no need to insert to avoid duplication\n            if (tempRoot.data == val) {\n                return;\n            }\n\n            if (val > tempRoot.data) {\n                if (tempRoot.right != null) {\n                    tempRoot = tempRoot.right;\n\n                } else {\n                    tempRoot.right = tempNode;\n                    tempBol = false;\n\n                }\n\n            } else if (val < tempRoot.data) {\n                if (tempRoot.left != null) {\n                    tempRoot = tempRoot.left;\n\n                } else {\n                    tempRoot.left = tempNode;\n                    tempBol = false;\n                }\n            }\n\n        }\n        //console.log(tempNode);\n    }\n    /*\n        - if node has no children, make parent node's reference to it null.\n        - if node has 1 child, make parent node's reference be for the child.\n        - if node has 2 children, delete parent's node reference to it and insert both nodes using insert function.\n    */\n    deleteNode(root, k) {\n\n        if (root === null) {\n            return root;\n        }\n\n        if (root.data > k) {\n            root.left = this.deleteNode(root.left, k);\n            console.log(root.data);\n            return root;\n\n        } else if (root.data < k) {\n            root.right = this.deleteNode(root.right, k);\n            console.log(root.data);\n            return root;\n        }\n\n\n\n        // If one of the children is empty\n        let succParent;\n        let succ;\n        if (root.left === null) {\n            let temp = root.right;\n            root = null;\n            return temp;\n\n        } else if (root.right === null) {\n            let temp = root.left;\n            root = null;\n            return temp;\n        }\n\n        // If both children exist\n\n        else {\n            succParent = root;\n\n            // Find successor\n            succ = root.right;\n            while (succ.left !== null) {\n                succParent = succ;\n                succ = succ.left;\n            }\n        }\n\n        if (succParent !== root) {\n            succParent.left = succ.right;\n        } else {\n            succParent.right = succ.right;\n        }\n\n        // Copy Successor Data to root\n        root.data = succ.data;\n\n        // Delete Successor and return root\n        succ = null;\n        return root;\n    }\n\n    find(val) {\n\n        if (this.root.data == val) {\n            return this.root;\n        }\n\n        let found = false;\n        let tempNode = this.root;\n        while (!found) {\n\n            if (this.root.data > val) {\n                tempNode = tempNode.left;\n            } else {\n                tempNode = tempNode.right;\n            }\n\n            if (tempNode.data == val) {\n                return tempNode;\n            }\n        }\n    }\n\n\n    // traverses the tree using the breadth first method, and returns the nodes to the function\n    // passed into levelOrder.\n    levelOrder() {\n        let current;\n        let queue = [];\n        queue.push(this.root);\n\n        while (queue.length > 0) {\n            current = queue.shift();\n\n            if (current.left !== null) {\n                queue.push(current.left);\n            }\n            if (current.right !== null) {\n                queue.push(current.right);\n            }\n            console.log(current.data);\n        }\n    }\n\n    preOrder(node) {\n        if (node == null) {\n            return;\n        }\n        console.log(node.data);\n        this.preOrder(node.left);\n        this.preOrder(node.right);\n\n    }\n\n    inOrder(node) {\n        if (node == null) {\n            return;\n        }\n        this.inOrder(node.left);\n        console.log(node.data);\n        this.inOrder(node.right);\n    }\n\n    postOrder(node) {\n        if (node == null) {\n            return;\n        }\n        this.postOrder(node.left);\n        this.postOrder(node.right);\n        console.log(node.data);\n    }\n\n    depth(val) {\n        let tempNode = this.root;\n        let height = 0;\n        let found = false;\n\n        if (tempNode.data == val) {\n            return 0;\n        }\n\n        while (!found) {\n            if (tempNode.data > val) {\n                height++;\n                tempNode = tempNode.left;\n            } else {\n                height++;\n                tempNode = tempNode.right;\n            }\n\n            if (tempNode.data == val) {\n                return height;\n            }\n\n        }\n    }\n\n    height(node) {\n        if (node === null) {\n            return 0;\n        }\n        let leftHeight = this.height(node.left);\n        let rightHeight = this.height(node.right);\n\n        return Math.max(leftHeight, rightHeight) + 1;\n    }\n\n    isBalanced() {\n        let leftHeight = this.height(this.root.left);\n        let rightHeight = this.height(this.root.right);\n\n        if ((leftHeight - rightHeight) > 1 || (leftHeight - rightHeight) < -1) {\n            return false;\n        } else {\n            return true;\n        }\n    }\n\n    //helper method for rebalance\n    inOrderArrOfTree(node, arr = []) {\n        if (node == null) {\n            return;\n        }\n        this.inOrderArrOfTree(node.left);\n        arr.push(node.data);\n        this.inOrderArrOfTree(node.right);\n    }\n\n    reBalance() {\n        let arrOfTree = [];\n        this.inOrderArrOfTree(this.root, arrOfTree);\n        this.buildTree(arrOfTree);\n    }\n}\n\n\n\n\nconst prettyPrint = (node, prefix = \"\", isLeft = true) => {\n    if (node === null) {\n        return;\n    }\n    if (node.right !== null) {\n        prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n    }\n    console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.data}`);\n    if (node.left !== null) {\n        prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n    }\n};\n\nlet sortMeArr = [7, 2, 5, 11, 13, 57, 48, 63, 12, 1, 6, 4321];\n\nlet bst = new Tree(sortMeArr);\nbst.insert(3);\nbst.insert(4);\nbst.insert(8);\nbst.levelOrder();\nbst.reBalance();\nprettyPrint(bst.root);\n\n/*\n\nTESTING PURPOSES\nbst.insert(50);\nprettyPrint(bst.root);\n*/\n\n//# sourceURL=webpack://binarysearchtree/./src/index.js?");

/***/ }),

/***/ "./src/sort.js":
/*!*********************!*\
  !*** ./src/sort.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   topDownMergeSort: () => (/* binding */ topDownMergeSort)\n/* harmony export */ });\nfunction topDownMergeSort(arr1, arr2, n) {\n    copyArray(arr1, 0, n, arr2);\n    topDownSplitMerge(arr2, 0, n, arr1);\n}\n\nfunction copyArray(arr1, iBegin, iEnd, arr2) {\n    for (let k = iBegin; k < iEnd; k++) {\n        arr2[k] = arr1[k];\n    }\n}\n\nfunction topDownSplitMerge(arr2, iBegin, iEnd, arr1) {\n    if (iEnd - iBegin <= 1) {\n        return;\n    }\n\n    let iMiddle = Math.ceil((iEnd + iBegin) / 2);\n    topDownSplitMerge(arr1, iBegin, iMiddle, arr2);\n    topDownSplitMerge(arr1, iMiddle, iEnd, arr2);\n    topDownMerge(arr2, iBegin, iMiddle, iEnd, arr1);\n}\n\nfunction topDownMerge(arr1, iBegin, iMiddle, iEnd, arr2) {\n    let i = iBegin, j = iMiddle;\n\n    for (let k = iBegin; k < iEnd; k++) {\n        if (i < iMiddle && (j >= iEnd || arr1[i] <= arr1[j])) {\n            arr2[k] = arr1[i];\n            i = i + 1;\n        } else {\n            arr2[k] = arr1[j];\n            j = j + 1;\n        }\n    }\n}\n\n\n\n\n\n//# sourceURL=webpack://binarysearchtree/./src/sort.js?");

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