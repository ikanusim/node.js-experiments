var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.write("Hello\r\n");
  res.write("World\r\n");
  res.end();
}).listen(8001);
