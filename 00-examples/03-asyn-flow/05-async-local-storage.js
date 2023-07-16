/*

In this example, we first create an instance of Async Local Storage using the AsyncLocalStorage class 
from the async_hooks module. We define two functions: setData and getData. The setData function sets 
the provided data in the Async Local Storage, while the getData function retrieves the data from the 
Async Local Storage.
We then define the performOperation function, which simulates an asynchronous operation. Inside this 
function, we retrieve the data from the Async Local Storage using getData and perform some operation 
on it. After a delay of 1 second, we update the data in the Async Local Storage using setData.
Finally, in the main function, we set the initial data in the Async Local Storage and log it. We then 
call the performOperation function, which performs the asynchronous operation and updates the data. 
After the operation completes, we retrieve the final data from the Async Local Storage and log it.
Async Local Storage allows us to store and retrieve data in a context-specific manner, ensuring that 
each asynchronous operation has access to its own isolated data. This is particularly useful in scenarios
where we need to propagate context or state across asynchronous boundaries.

 */

const { AsyncLocalStorage } = require('async_hooks');

// Create an instance of Async Local Storage
const asyncLocalStorage = new AsyncLocalStorage();

// Function to set data in the Async Local Storage
function setData(data) {
  asyncLocalStorage.enterWith(data);
}

// Function to get data from the Async Local Storage
function getData() {
  return asyncLocalStorage.getStore();
}

// Function to perform an asynchronous operation
async function performOperation() {
  const data = getData();
  console.log('Data from Async Local Storage:', data);

  // Simulate an asynchronous operation
  return new Promise((resolve) => {
    setTimeout(() => {
      const newData = 'Updated Data';
      setData(newData);
      console.log('Updated Data:', newData);
      resolve();
    }, 1000);
  });
}

// Usage example
async function main() {
  const initialData = 'Initial Data';
  setData(initialData);
  console.log('Initial Data:', initialData);

  await performOperation();

  const finalData = getData();
  console.log('Final Data:', finalData);
}

main().catch((error) => {
  console.error('An error occurred:', error);
});
