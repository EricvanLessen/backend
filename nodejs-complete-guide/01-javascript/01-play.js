const yourName = "Eric";
let yourAge = 30;
let hasHobbies = true;

yourAge = 31

// named function by storing the anonymous function in a variable
const summarizeUser0ld = function (userName, userAge, userHasHobby) {
    return (
        "name is " +
        userName + 
        ", age is " +
        userAge +
        " and the user has hobbies: " +
        userHasHobby
    );
}

// new function name attached arrow function
// in general: use arrow functions
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        "name is " +
        userName + 
        ", age is " +
        userAge +
        " and the user has hobbies: " +
        userHasHobby
    );
}

// short form of an arrow function
const add = (a,b) => a + b

// short form of an arrow function
// just one argument
// omitt the parentheses 
const addTwo = a => a + 2

console.log(summarizeUser(yourName, yourAge, hasHobbies));
console.log(add(1,2));
console.log(addTwo(5));

// person object
const person = {
    name: 'Max',
    age: 29,
    // this refers to the object, if greet 
    // is a method of the object like so
    greet(){
        console.log(`Hi I am ${this.name}`)
    }
};

console.log(person);
person.greet();

const hobbies = ['Sport', 'Cooking'];

// loop over array
for(let hobby of hobbies){
    console.log(hobby);
}

// transform an array
// returns a new array
// map takes a function that is executed on every element
console.log(hobbies.map(hobby => {return `Cool ${hobby}`}));

// old array
console.log(hobbies);

// add new element to the array
hobbies.push('Programming');

// the const value is a pointer and has not changed
// only the content in the object has changed
// we are editing what const hobbies is pointing at
console.log(hobbies);

// rest and spread operator
// copy elements
const copiedArray0 = hobbies.slice();
console.log(copiedArray0);

// nest array
const nestedArray = [hobbies];
console.log(nestedArray);

// pull out array elements with spread and add to new array
const copiedArray = [...hobbies];
console.log(copiedArray);

// pull out person elements from the object and add them to a new object
const copiedPerson = {...person};
console.log(copiedPerson);

// rest operator, the opposite

// not flexible
const toArray0 = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};
console.log(toArray0(1,2,3));

// rest operator is flexible
const toArray = (...args) => {
    return args;
};
console.log(toArray(1, 2, 3, 4));

// dot dot dot ... same operator used 
// to pull or to merge properties
// that depends on the direction

// destructuring: access properties by name or position
// and drop unused data in that specific code snippet

// pass or use the object
const printName0 = (person) => {
    console.log(person.name);
};

printName0(person);

// pass or use the object properties after destructuring
const printName = ({ name, age }) => {
    console.log(name, age);
};

// destructuring out of a function
printName(person);
const {name, age} = person;
console.log(name, age);

// desctructuring by position in arrays
const hobbies1 = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies1;
console.log(hobby1, hobby2);

const fetchData0 = callback => {
    setTimeout(()=>{
        callback(`Done`);
    }, 1500)
}

// asynchronous code, node recognizes the callback function 
// and moves on to the next line, Node is unblocking
// putting callbacks in callbacks like this may lead to callback hell
setTimeout(()=>{
    console.log(`Timer is done`);
    fetchData0(text => {
        console.log(text);
    });
}, 2000);

// synchronous, we see this before the asynchronous code
console.log(`Hello`);
console.log(`Hi`);

// lets use promises to the avoid callback hell
const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Done in promise!`);
        }, 1500)
    });
    return promise;
};

setTimeout(()=>{
    console.log(`Timer prepares promise`);
    fetchData().then(text => {
        console.log(text);
        return fetchData()
    }).then(text => {
        console.log(text);
        return fetchData()
    })
}, 2000);
