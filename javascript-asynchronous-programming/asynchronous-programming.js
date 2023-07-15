// callbacks
function fetchData(callback) {
    setTimeout(() => {
      const data = { name: 'John', age: 30 };
      callback(data);
    }, 1000);
  }
  
  function process(data) {
    console.log('Processing data:', data);
  }
  
  fetchData(process);

  
// events
const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('data', (data) => {
  console.log('Received data:', data);
});

setTimeout(() => {
  const data = { name: 'John', age: 30 };
  emitter.emit('data', data);
}, 1000);


// promises
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: 'John', age: 30 };
        resolve(data);
      }, 1000);
    });
  }
  
  fetchData()
    .then((data) => {
      console.log('Received data:', data);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });

    
// async/await
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: 'John', age: 30 };
        resolve(data);
      }, 1000);
    });
  }
  
  async function process() {
    try {
      const data = await fetchData();
      console.log('Received data:', data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  process();
  