const http = require('http');

function rqListener(req, res) {
    console.log(req);
}

// no parenthesis here
// execute rqListener when a request comes
const server = http.createServer(rqListener);

server.listen(3000);