// Create web server
// Create a web server that listens for incoming requests on port 3000. When a request is received, the server should respond with the following:
// A status code of 200
// A Content-Type of text/plain
// The body of the response should be "Hello, World!"

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});