/**
 * Represents a Tree object.
 */
class Tree {

    /**
     * Creates an instance of Tree.
     * @param leaf - The type of leaf.
     */
    constructor(public leaf: string) {
        this.leaf = leaf;
    }

    /**
     * Moves the leaf.
     */
    public moveLeaf(direction: string) {
        console.log(`The ${this.leaf} is moving to the ${direction}`);
    }

}

// Create a new Tree object with a green leaf
let tree1 = new Tree("Green leaf");

// Print the type of leaf of tree1
console.log(tree1.leaf);

tree1.moveLeaf("left")

