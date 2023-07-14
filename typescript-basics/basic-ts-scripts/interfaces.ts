function printNameNoInterface(stark) {
    console.log(stark.name);
}

printNameNoInterface({name: "Eddard"});

// how to avoid not getting errors when compiling 
// printName({house: "Dracarys"});

// we use an interface, blueprints of objects
// interfaces will not appear in the JS file
interface Stark {
    name: string; // must be passed
    age?: number; // optional property
}

// we pass a Stark, it has a name per definition
// all interface properties must be covered
function printName(stark: Stark) {
    console.log(stark.name);
}

printName({name: "Eddard"});