const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected to Node.js server');

    // Send a message to the connected client every 5 seconds
    setInterval(() => {
        console.log('Node.js server sending message to client');
        ws.send('Message from Node.js');
    }, 5000);

    // Print messages received from the client
    ws.on('message', (data) => {
        if (data instanceof Buffer) {
            data = data.toString(); // Convert Buffer to string
        }
        console.log('Node.js server received:', data);
    });
});

// Delayed connection to Python server as a client
setTimeout(() => {
    const wsClient = new WebSocket('ws://localhost:9090');
  
    wsClient.on('open', () => {
      console.log('Connected to Python server');
  
      // Send a message to the Python server every 5 seconds
      setInterval(() => {
        console.log('Node.js client sending message to Python server');
        wsClient.send('Message from Node.js client');
      }, 5000);
    });
  
    wsClient.on('message', (data) => {
        wsClient.on('message', (data) => {
        if (data instanceof Buffer) {
            data = data.toString(); // Convert Buffer to string
        }
        console.log('Node.js client received:', data);
        });

      });
      
  }, 10000); // 10-second delay
