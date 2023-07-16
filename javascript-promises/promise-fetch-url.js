// Function to fetch data from a URL using the Fetch API
function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          // Check if the response was successful (status 200)
          if (response.ok) {
            // Parse the response JSON data
            return response.json();
          } else {
            // Handle non-successful response
            throw new Error('Error: ' + response.status);
          }
        })
        .then(data => {
          // Resolve the promise with the fetched data
          resolve(data);
        })
        .catch(error => {
          // Reject the promise with the error
          reject(error);
        });
    });
  }
  
  // Usage example
  fetchData('https://api.example.com/data')
    .then(data => {
      console.log('Fetched data:', data);
    })
    .catch(error => {
      console.error('An error occurred:', error);
    });
  