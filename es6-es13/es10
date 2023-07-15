// ES10 (ES2019)

// Array.prototype.flat() & Array.prototype.flatMap()
const arr1 = [1, 2, [3, 4]];
arr1.flat(); // [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat(); // [1, 2, 3, 4, [5, 6]]
// Pass in a number in flat, representing the flattening depth
arr2.flat(2); // [1, 2, 3, 4, 5, 6]

let arr = ["water", "", "fish"]

arr.map(s => s.split(""))
// [["w", "a", "t", "e", "r"], [""], ["f", "i", "s", "h"]

arr.flatMap(s => s.split(''));
// ["w", "a","t","e","r", "", "f", "i", "s", "h"]


/**
 * String.prototype.trimStart() & String.prototype.trimEnd()
 * The trimStart() method removes spaces from the beginning of 
 * the string, and trimLeft() is an alias for this method.
 */
const greeting = ' Hello world! ';
console.log(greeting);
// expected output: " Hello world! ";
console.log(greeting.trimStart());
// expected output: "Hello world! ";


/**
 * The trimEnd() method removes spaces from the end of the string, and trimRight() is an alias for this method.
 */
const greeting = '   Hello world!   ';
console.log(greeting);
// expected output: "   Hello world!   ";
console.log(greeting.trimEnd());
// expected output: "   Hello world!";


// Object.fromEntries()
// Convert a list of key-value pairs to an object.
const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  const obj = Object.fromEntries(entries);
  console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }


/**
 * String.prototype.matchAll
 * The matchAll() method returns an iterator over all results of matching a 
 * string against the regular expression, including capturing groups.
 */
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)];
console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]
console.log(array[1]);
// expected output: Array ["test2", "e", "st2", "2"]


// BigInt
const theBiggestInt = 9007199254740991n;
const alsoHuge = BigInt(9007199254740991);
// ↪ 9007199254740991n
const hugeString = BigInt("9007199254740991");
// ↪ 9007199254740991n
const hugeHex = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n
const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111");
// ↪ 9007199254740991n


