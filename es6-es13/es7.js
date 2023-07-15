// ES7 (ES2016)

/**
 * Array.prototype.includes()
 * It is used to determine whether the array contains the specified value, and if so,
 * returns true; otherwise, returns false.
 * Like the previous indexOf usage, it can be considered as returning a Boolean value, 
 * which is more semantically clear.
 */

const arr = [1, 2, 3, 4, 5];
arr.include(3); // true

if (arr.include(3)) {  }
// ... Equivalent to the previous writing of indexOf
arr.indexOf(3); // 2 (return its array position)
// If you want to write it in the if, you must add `> -1`, which is not as clear as the include in ES7 in terms of semantics
if (arr.indexOf(3) > -1) {  }

// exponentiation operator
console.log(2**10); // 1024
// equal to
console.log(Math.pow(2, 10)); // 1024



