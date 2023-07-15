/** 
 * 1. Class
 * JavaScript is a language that uses a prototype chain.
 * In the early days, concepts like object-oriented were made 
 * through the prototype chain, which was quite complicated. 
 * Class is finally introduced in ES6.
*/

class Animal {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
    // This is a property on the prototype chain
    toString() {
      console.log('name:' + this.name + ', color:' + this.color);
 
    }
  }
 
 var animal = new Animal('myDog', 'yellow');
 animal.toString(); 
 
 console.log(animal.hasOwnProperty('name')); //true
 console.log(animal.hasOwnProperty('toString')); // false
 console.log(animal.__proto__.hasOwnProperty('toString')); // true
 
 class Cat extends Animal {
  constructor(action) {
    super('cat','white');
    this.action = action;
  }
  toString() {
    console.log(super.toString());
  }
 }
 
 var cat = new Cat('catch')
 cat.toString();
 
 console.log(cat instanceof Cat); // true
 console.log(cat instanceof Animal); // true


 /**
  * 2. module
  * Each module has its own namespace to avoid conflicts, 
  * using import and export to import and export. 
  * Basically treat .js files as modules.
  * 
  * 3. Arrow function
  * () => {…}, which is short for function. 
  * Most importantly, he can make sure it’s always directed at himself，
  * No more writing var self = this, var that = this, etc.!
*/

const add = (a, b) => { return a + b};
const res = add(1, 2); // 3
const minus = (a, b) => a - b;
const res1 = minus(5, 1); // 4


/**
 * template literal
 * In the past, combinations of long strings were concatenated using the + sign.
 * It’s poorly readable, with template strings it’s much easier to read.
 */
const firstName = 'water';
const lastName = 'fish';
// not use template literal
const name1 = 'Hello, My name is' + firstName + ', ' + lastName;
// use template literal
const nameWithLiteralString = `Hello, My name is ${firstName}, ${lastName}`;


// destructuring assignment
const arr = [1, 2, 3, 4, 5];
const [one, two, three] = arr;
console.log(one); // 1
console.log(two); // 2

// To skip certain values
const [first,,,,last] = arr;
console.log(first); // 1
console.log(last); // 5

// Objects can also be destructurized and assigned
const student = { 
    name: 'waterfish', 
    age: 28,
};
const {name2, age2, city} = student;
console.log(name2); // "waterfish"
console.log(age2); // "28"

// spread operator
const arr1= ['A', 'B'];
const arr2= ['0', ...arr1, '1', '2'];
conslog.log(arr2); // ["0", "A", "B", "1", "2"]


/**
 * It is represented by three dots (…), Array can be extended, if it is Object, 
 * it will be extended according to key-value. Object property shorthand. 
 * This value can be omitted if the field names that make up the object are the 
 * same as the variables in the previous paragraphs.
 * */ 

const name3 = 'waterfish', age3 = 28;

// Before ES6, we must write like this
const customer = {
    name: name3,
    age: age3,
} // // {name: 'waterfish', age: 28}

// After ES6, we can do it
const newCustomer = {
    name3,
    age3,
} // // {name: 'waterfish', age: 28}


/**
 * Promise
 * Promise is a solution to asynchronous (non-synchronous) writing, which is more 
 * elegant than the original callback writing.Using Promise can solve hell callback.
 */
const waitSecond = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
});
waitSecond.then( () => {
    console.log('hello after 1 second.'); 
    // output this line after 1 second
    return waitSecond;
}).then( () => {
    console.log('World after 2 sceond.');
    // output this line after 2second
})

