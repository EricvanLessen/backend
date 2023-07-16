function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: 'John', age: 30 };
        resolve(data);
      }, 1000);
    });
  }
  
  function processData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const processedData = `${data.name} is ${data.age} years old.`;
        resolve(processedData);
      }, 2000);
    });
  }
  
  function displayResult(result) {
    console.log(result);
  }
  
  fetchData()
    .then(data => processData(data))
    .then(processedData => displayResult(processedData))
    .catch(error => console.error('An error occurred:', error));
  