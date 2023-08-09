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