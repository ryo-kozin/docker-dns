const http = require('http');
const serverPort = process.env.SERVER_PORT || 'NoPort';
const serverName = process.env.SERVER_NAME || 'NoName';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`<h1>Hello from Node.js - ${serverName}</h1>`);
});

server.listen(serverPort, () => {
  console.log(`Server ${serverName} is listening on port ${serverPort}`);
});
