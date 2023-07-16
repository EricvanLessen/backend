# Socket.IO App

This is a small Socket.IO app that demonstrates real-time communication between a server and a client using the Socket.IO library. The server is built using Express.js, and the client-side code is written in HTML and JavaScript.

## Server

The server-side code is contained in the `app.js` file. It sets up an Express.js application with middleware for handling requests, serving static files, and error handling. It also configures CORS (Cross-Origin Resource Sharing) to allow communication between the server and the client running on different ports.

Socket.IO is initialized on a separate port (4000) and configured to enable CORS for the client running on port 3000. When a client connects to the server, it emits a message to that client only. It also listens for messages from the client and logs them to the console.

To start the server, run the following command:

```bash
nodemon bin/www
```

## Client

The client-side code is written in Jade (Pug) and is contained in the `index.jade` file. It extends a layout file and displays a welcome message. It also includes the Socket.IO client library from a CDN and establishes a connection with the server.

Once the connection is established, the client listens for messages from the server and logs them to the console. It also emits a message to the server with the content "Hello from client".

To run the client, open the `index.html` file in a web browser.

## Usage

1. Start the server by running the command `nodemon bin/www`.

2. Open the client in a web browser by navigating to `http://localhost:3000`.

3. Open the browser console to see the messages exchanged between the server and the client.

## Dependencies

The following dependencies are required for running this app:

- Express.js: The web application framework for the server.
- Socket.IO: The library for enabling real-time communication between the server and the client.

You can install the dependencies by running the command:

```bash
npm install
```

## Contributing

Contributions to this Socket.IO app are welcome! If you find any issues or have suggestions for improvements, please consider submitting a pull request.

## License

This project is licensed under the [MIT License](LICENSE).