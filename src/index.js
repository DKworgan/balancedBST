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
    /*
        - if node has no children, make parent node's reference to it null.
        - if node has 1 child, make parent node's reference be for the child.
        - if node has 2 children, delete parent's node reference to it and insert both nodes using insert function.
    */
    deleteNode(root, k) {

        if (root === null) {
            return root;
        }

        if (root.data > k) {
            root.left = this.deleteNode(root.left, k);
            console.log(root.data);
            return root;

        } else if (root.data < k) {
            root.right = this.deleteNode(root.right, k);
            console.log(root.data);
            return root;
        }



        // If one of the children is empty
        let succParent;
        let succ;
        if (root.left === null) {
            let temp = root.right;
            root = null;
            return temp;

        } else if (root.right === null) {
            let temp = root.left;
            root = null;
            return temp;
        }

        // If both children exist

        else {
            succParent = root;

            // Find successor
            succ = root.right;
            while (succ.left !== null) {
                succParent = succ;
                succ = succ.left;
            }
        }

        if (succParent !== root) {
            succParent.left = succ.right;
        } else {
            succParent.right = succ.right;
        }

        // Copy Successor Data to root
        root.key = succ.key;

        // Delete Successor and return root
        succ = null;
        return root;
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

bst.deleteNode(bst.root, 63);
prettyPrint(bst.root);


/*

TESTING PURPOSES
bst.insert(50);
prettyPrint(bst.root);
*/