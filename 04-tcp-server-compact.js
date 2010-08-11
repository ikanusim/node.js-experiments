var net = require('net');

net.createServer(function(c) {
  c.write('hello');
  c.end();
}).listen(8001);
