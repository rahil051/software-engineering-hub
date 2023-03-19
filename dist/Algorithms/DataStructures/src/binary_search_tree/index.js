class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
const tree = new BinarySearchTree(4);
tree.left = new BinarySearchTree(3);
tree.right = new BinarySearchTree(5);
tree.right.value.right = new BinarySearchTree(6);
console.log(tree);
//# sourceMappingURL=index.js.map