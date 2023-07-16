// create buffers

// class constructor
const buffer1 = new Buffer(size);

// Buffer.from method
const buffer2 = Buffer.from(array);

// Buffer.alloc method
const buffer3 = Buffer.alloc(size);

// read write
const buffer4 = Buffer.alloc(4);
buffer[0] = 0x48; // Write data to the buffer
console.log(buffer4[0]); // Read data from the buffer

// conversion to string
const buffer5 = Buffer.from('Hello', 'utf8');
console.log(buffer5.toString('hex')); // Convert to hexadecimal string
console.log(buffer5.toString('base64')); // Convert to base64 string

// slicing
const buffer6 = Buffer.from('Hello World');
const slicedBuffer = buffer6.slice(0, 5); // Create a new buffer from index 0 to 4
console.log(slicedBuffer.toString()); // Output: Hello

// concatenate
const buffer7 = Buffer.from('Hello');
const buffer8 = Buffer.from('World');
const concatenatedBuffer = Buffer.concat([buffer7, buffer8]);
console.log(concatenatedBuffer.toString()); // Output: HelloWorld

// file reading
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

fs.readFile(filePath, (error, data) => {
  if (error) {
    console.error('An error occurred:', error);
    return;
  }

  const buffer9 = Buffer.from(data);
  console.log(buffer9.toString());
});





