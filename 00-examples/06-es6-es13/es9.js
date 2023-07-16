/**
 * ES9 (ES2018)
 * await loop
 * In an asynchronous function, it is sometimes necessary to use an asynchronous (non-synchronous) 
 * function within a synchronous for loop.
 * The for loop itself is still synchronous, and the entire for loop will be executed before the 
 * asynchronous function in the loop is completed, and then the asynchronous functions inside will 
 * be executed one by one. ES9 added asynchronous iterators, allowing await to be used with for loops 
 * to step through asynchronous operations.
 */

async function process(array) {
    for await (const i of array) {
      doSomething(i);
    }
  }

/**
 * promise.finally()
 * Whether it is success (.then()) or failure (.catch()), the part that will be executed after the Promise.
 */
function process() {
    process1()
    .then(process2)
    .then(process3)
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      console.log(`it must execut no matter success or fail`);
    });
  }

// Rest & Spread
const myObject = {
    a: 1,
    b: 2,
    c: 3
  };
  const { a, ...r } = myObject;
  // a = 1
  // r = { b: 2, c: 3 }
  
  // Can also be used in function input parameters
  function restObjectInParam({ a, ...r }) {
      console.log(a); // 1
      console.log(r); // {b: 2, c: 3}
  }
  
  restObjectInParam({
    a: 1,
    b: 2,
    c: 3
  });


  

