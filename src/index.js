const sortPackage = require("./sort.js");

class Node {
    data;
    left;
    right;

    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
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

    insert(val) {
        let tempBol = true;
        let tempRoot = this.root;
        let tempNode = new Node(val);
        console.log("hi");

        while (tempBol) {

            //no need to insert to avoid duplication
            if (tempRoot.data == val) {
                return;
            }

            if (val > tempRoot.data) {
                if (tempRoot.right != null) {
                    tempRoot = tempRoot.right;

                } else {
                    tempRoot.right = tempNode;
                    tempBol = false;

                }

            } else if (val < tempRoot.data) {
                if (tempRoot.left != null) {
                    tempRoot = tempRoot.left;

                } else {
                    tempRoot.left = tempNode;
                    tempBol = false;
                }
            }

        }
        //console.log(tempNode);
    }

    delete(val) {
        let tempNode = this.root;
        let tempBol = false;
        let direction;

        while (!tempBol) {
            if (val == tempNode.left.data) {
                tempBol = true;
                direction = "left";
                console.log(tempNode.left);
                return;

            } else if (val == tempNode.right.data) {
                tempBol = true;
                direction = "right";
                console.log(tempNode.right);
                return;
            }

            if (val < tempNode.data) {
                tempNode = tempNode.left;

            } else {
                tempNode = tempNode.right;
            }
        }

    }
}


const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

let sortMeArr = [7, 2, 5, 11, 13, 57, 48, 63, 12, 1, 6, 4321];

let bst = new Tree(sortMeArr);
bst.delete(2);
/*

TESTING PURPOSES
bst.insert(50);
prettyPrint(bst.root);
*/