import sortAlg from "./sort.js";

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
        //root = buildTree(arr);
    }
}

function buildTree(arr) {
    //sort arr then turn into BST
    //sortAlg();
}



let sortMeArr = [7, 2, 5, 11, 13, 57, 48, 63, 12, 1, 6, 4321];
let emptyArr = [];
sortAlg(sortMeArr, emptyArr, sortMeArr.length);