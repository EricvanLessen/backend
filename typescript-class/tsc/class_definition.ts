class Tree {


    constructor(public leaf:string){

        this.leaf = leaf;

    }


    public moveLeaf(){


        console.log(`The ${this.leaf} is moving to the right`);

    }

}


let tree1 = new Tree("Green leaf");


console.log(tree1.leaf);


