class Person {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    dance() : void{
        console.log(this.name + " is dancing");
    }
}

var bran = new Person("Bran");
bran.dance()

class AwesomePerson extends Person {
    dance() : void{
        console.log("SO AWESOME!");
        super.dance();
    }
}

var robb = new AwesomePerson("Robb");
robb.dance()
