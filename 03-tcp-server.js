var net = require('net');

var s = net.createServer();
s.addListener('connection', function(c) {
  c.write('hello');
  c.end();
});

s.listen(8001);
