function fetchData(callback) {
    setTimeout(() => {
      const data = { name: 'John', age: 30 };
      callback(null, data);
    }, 1000);
  }
  
  function processData(data, callback) {
    setTimeout(() => {
      const processedData = `${data.name} is ${data.age} years old.`;
      callback(null, processedData);
    }, 2000);
  }
  
  function displayResult(result) {
    console.log(result);
  }
  
  fetchData((error, data) => {
    if (error) {
      console.error('Error fetching data:', error);
      return;
    }
  
    processData(data, (error, processedData) => {
      if (error) {
        console.error('Error processing data:', error);
        return;
      }
  
      displayResult(processedData);
    });
  });
  