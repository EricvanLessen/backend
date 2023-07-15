var Tree = (function () {
    function Tree(leaf) {
        this.leaf = leaf;
        this.leaf = leaf;
    }
    Tree.prototype.moveLeaf = function () {
        console.log("The " + this.leaf + " is moving to the right");
    };
    return Tree;
}());
var tree1 = new Tree("Green leaf");
console.log(tree1.leaf);
//# sourceMappingURL=class_definition.js.map