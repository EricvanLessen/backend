const promises = [
  // A promise that resolves with the value 'Resolved'
  Promise.resolve('Resolved'),
  // A promise that rejects with an error
  Promise.reject(new Error('Rejected')),
  // A promise that resolves with the value 'Another resolved'
  Promise.resolve('Another resolved')
];

// Promise.allSettled() returns a promise that settles when all input promises have settled
Promise.allSettled(promises)
  // Use the then() method to handle the settled results
  .then(results => {
    // Iterate over each result in the results array
    results.forEach(result => {
      // Check if the status of the promise is 'fulfilled'
      if (result.status === 'fulfilled') {
        // Log the resolved value
        console.log('Resolved:', result.value);
      }
      // Check if the status of the promise is 'rejected'
      else if (result.status === 'rejected') {
        // Log the rejection reason (error)
        console.log('Rejected:', result.reason);
      }
    });
  });