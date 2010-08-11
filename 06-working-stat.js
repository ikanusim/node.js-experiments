var stat = require('fs').stat,
    puts = require('sys').puts;

stat('06-working-stat.js', function(err, stats) {
  puts(stats.mtime);
});
