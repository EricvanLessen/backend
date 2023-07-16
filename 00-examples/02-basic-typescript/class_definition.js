/**
 * Represents a Tree object.
 */
var Tree = /** @class */ (function () {
    /**
     * Creates an instance of Tree.
     * @param leaf - The type of leaf.
     */
    function Tree(leaf) {
        this.leaf = leaf;
        this.leaf = leaf;
    }
    /**
     * Moves the leaf.
     */
    Tree.prototype.moveLeaf = function (direction) {
        console.log("The ".concat(this.leaf, " is moving to the ").concat(direction));
    };
    return Tree;
}());
// Create a new Tree object with a green leaf
var tree1 = new Tree("Green leaf");
// Print the type of leaf of tree1
console.log(tree1.leaf);
tree1.moveLeaf("left");
