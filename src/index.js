const sortPackage = require("./sort.js");

class Node {
    data;
    left;
    right;

    constructor(data, left = null, right = null) {
        this.data = data;
    }
}

class Tree {
    root;

    buildTree(arr) {
        //sort arr then turn into BST
        //passing in empty helper arr for mergeSort
        let helperArr = [];
        sortPackage.topDownMergeSort(arr, helperArr, arr.length);
        return arr;
    }

    constructor(arr) {
        this.root = this.buildTree(arr);
    }


}

let sortMeArr = [7, 2, 5, 11, 13, 57, 48, 63, 12, 1, 6, 4321];

let bst = new Tree(sortMeArr);
/*
let emptyArr = [];
sortPackage.topDownMergeSort(sortMeArr, emptyArr, sortMeArr.length);
console.log(sortMeArr);
*/