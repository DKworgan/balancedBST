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

    constructor(arr) {
        this.root = this.buildTree(arr);
    }

    buildTree(arr) {
        //sort arr then turn into BST
        //passing in empty helper arr for mergeSort
        let helperArr = [];
        let len = arr.length;

        sortPackage.topDownMergeSort(arr, helperArr, arr.length);
        let rootNode = this.sortedArrToBST(arr, 0, len - 1);

        return rootNode;
    }

    sortedArrToBST(arr, start, end) {
        if (start > end) {
            return null;
        }

        let mid = Math.floor((start + end) / 2);
        let node = new Node(arr[mid]);
        node.left = this.sortedArrToBST(arr, start, mid - 1);
        node.right = this.sortedArrToBST(arr, mid + 1, end);

        return node;
    }
}

let sortMeArr = [7, 2, 5, 11, 13, 57, 48, 63, 12, 1, 6, 4321];

let bst = new Tree(sortMeArr);