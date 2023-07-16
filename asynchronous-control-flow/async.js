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
  
  async function fetchDataAndProcess() {
    try {
      const data = await fetchData();
      const processedData = await processData(data);
      displayResult(processedData);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  fetchDataAndProcess();
  