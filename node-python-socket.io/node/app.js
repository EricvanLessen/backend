const io = require('socket.io')(8080);

io.on('connection', (socket) => {
  console.log('Python client connected to Node.js server');

  setInterval(() => {
    console.log('Node.js server sending message to Python client');
    socket.emit('message', 'Message from Node.js server');
  }, 5000);

  socket.on('message', (data) => {
    console.log('Node.js server received:', data);
  });
});
