const http = require('http');
const wallet = require('../Exercise-1/modules/wallet');
// const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if(req.url === '/deposit'){
    wallet.depositAmount(100);
    res.end("Deposit request received");
  }
  else if(req.url === '/address'){
    wallet.getAddress();
    res.end("Address request received")
  }
  else{
    res.end('This is the main page');
    console.log(`reqest url ${req.url}`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});