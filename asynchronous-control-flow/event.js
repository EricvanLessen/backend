const EventEmitter = require('events');

// Create a custom event emitter
class MyEmitter extends EventEmitter {}

// Create an instance of the custom event emitter
const myEmitter = new MyEmitter();

// Register an event listener
myEmitter.on('customEvent', (arg1, arg2) => {
  console.log('Event emitted with arguments:', arg1, arg2);
});

// Emit the custom event
myEmitter.emit('customEvent', 'Hello', 'World');
