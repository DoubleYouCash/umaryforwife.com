/* Import Libraries */
const http = require('http');


/* Start Webserver */
const server = http.createServer()
const port = 8080
server.listen(port);

console.log('Started server running on http://localhost: ' + port);