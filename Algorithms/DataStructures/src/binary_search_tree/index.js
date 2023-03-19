var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BinarySearchTree;
}());
var tree = new BinarySearchTree(4);
tree.left = new BinarySearchTree(3);
tree.right = new BinarySearchTree(5);
tree.right.right = new BinarySearchTree(6);
console.log(tree);
