const http = require('http');

// anonymous function
const server = http.createServer(function(req, res){
    console.log(req);
});

server.listen(3000);