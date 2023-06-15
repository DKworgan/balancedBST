# Binary Search Tree
- This project explores sorting data, storing it in a binary search tree, and related features.
- The sorting algorithm used is Mergesort.
- The main class with encompassing all the methods and the tree is `Tree`.

## Features
- `constructor(arr)` takes the unsorted arr, calls `buildTree(arr)` and assigns return val to `root`.
- `buildTree(arr)` takes in an unsorted array, sorts it with MergeSort, then returns the highest level root node. 
- `sortedArrToBST(arr,start,end)` used in buildTree to establish the binary search tree after the arr has been sorted.
- `insert(val)` takes a val and assigns it to an appropriate  leaf node.
- `deleteNode(root, k)` deletes any node from the tree and re-attaches children, if any.
- `find(val)` returns the node where the value is found.
- `levelOrder()` console.log() the nodes in level order.
- `preOrder(node)` console.log() the nodes in pre order 
- `inOrder(node)` console.log() the nodes in in-order 
- `postOrder(node)` console.log() the nodes in post-order 
- `depth(val)` returns the depth of the val node in the tree.
- `height(node)` returns the height of the val node in the tree.
- `isBalanced()` checks if the tree is balanced. If the distance between the leaf nodes is greater than 1, the tree would be deemed unbalanced.
- `reBalance()` re-balances the tree using build tree.
- `inOrderArrOfTree(node, arr = [])` returns `arr` which includes the nodes of the tree in in-order successions.