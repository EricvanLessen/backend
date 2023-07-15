/*
  In the code below, we have an array `promises` that contains three asynchronous 
  operations represented by `fetch` requests. We use the `Promise.any()` method to 
  handle these promises. The `Promise.any()` method returns a new promise that is 
  fulfilled with the value of the first resolved promise in the iterable. If none of 
  the promises resolve, it is rejected with a `PromiseAggregateError` containing an 
  array of rejection reasons. 
  By using `Promise.any()`, we can streamline our asynchronous workflows and focus on 
  the first successful result or completion of any promise, while still having the 
  ability to handle errors when needed.
*/

const promises = [
    fetch('https://api.example.com/data1'), // Asynchronous operation 1
    fetch('https://api.example.com/data2'), // Asynchronous operation 2
    fetch('https://api.example.com/data3')  // Asynchronous operation 3
  ];
  
  Promise.any(promises)
    .then(result => {
      console.log('Promise resolved with result:', result);
    })
    .catch(error => {
      console.log('All promises were rejected:', error);
    });
  


/*
 During development, we can use the logical operators ||, && and ?? (Nullish coalescing operator) 
 proposed in ES2020 to solve some problems.
 And ES2021 will propose ||= , &&= , ??= , the concept is similar to += :
*/
let b = 2
b += 1 
// equal to b = b + 1
let a = null
a ||= 'some random text'  // a become to'some random text'
// equal a = a || 'some random text'
let c = 'some random texts'
c &&= null  // c become to null
// equal to c = c && null
let d = null
d ??= false  // d become to false
// equal to d = d ?? false


// WeakRef
/*
    A WeakRef object holds a weak reference to an object, known as its target or referent. 
    A weak reference to an object is one that does not prevent the object from being reclaimed 
    by the garbage collector.

    In contrast, normal (or strong) references hold objects in memory, and when an object no 
    longer has any strong references, the JavaScript engine’s garbage collector may destroy 
    the object and reclaim its memory. If this happens, you will no longer be able to get the 
    object from the weak reference.
*/