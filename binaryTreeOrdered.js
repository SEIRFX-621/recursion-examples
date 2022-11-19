"use strict";

class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            // tree is empty, we need to add a root to begin
            this.root = newNode;
        } else {
            this.innerAdd(this.root, newNode);
        }
    }

    innerAdd(currentNode, newNode) {
        if (currentNode.value > newNode.value) {
            // in a binary tree, values that are greater than their parent node will be added to the left, values that are less than the parent node value are added to the right
            if (currentNode.left === null) {
                // nothing on left, so we can add our new node here
                currentNode.left = newNode;
            } else {
                // use recursion to repeat the node adding process at one level deeper, because our current node already had a value assigned to left
                this.innerAdd(currentNode.left, newNode);
            }
        } else {
            // value is less than current node, so we add this to the right
            if (currentNode.right === null) {
                // current node has no value assigned to right, so we can add our new node here
                currentNode.right = newNode;
            } else {
                // current node does have a value on right, so we will use recursion to repeat the process one level deeper to the right
                this.innerAdd(currentNode.right, newNode);
            }
        }
    }

    showValuesInOrder() {
        // will traverse our tree console logging all values in order starting at root
        this.innerShowOrdered(this.root);
    }

    innerShowOrdered(node) {
        if (node) {
            this.innerShowOrdered(node.left);
            console.log(node.value);
            this.innerShowOrdered(node.right);
        }
    }

    showPreOrder() {
        this.innerShowPreOrder(this.root);
    }

    innerShowPreOrder(node) {
        if (node) {
            console.log(node.value);
            this.innerShowOrdered(node.left);
            this.innerShowOrdered(node.right);
        }
    }
}

const bTree = new BinaryTree();
let n = 10;// we will add 10 nodes to our binary tree
while (n > 0) {
    const newValue = Math.floor(Math.random() * 100);
    console.log(`Adding ${newValue} to tree`)
    bTree.add(newValue);
    n--;
}
console.log('Showing tree values in the order they are stored in the tree')
bTree.showPreOrder();
console.log('Showing tree values in order')
bTree.showValuesInOrder();


