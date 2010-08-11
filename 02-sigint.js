sys = require('sys');

setInterval(function() {
  sys.puts('hello');
}, 500);

process.addListener('SIGINT', function() {
  sys.puts('good bye');
  process.exit(0);
});
