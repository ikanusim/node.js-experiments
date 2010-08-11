// does not work, promises have been removed from node.js
// "A promise is an event emitter that emits an event for success or error

var stat = require('fs').stat,
    puts = require('sys').puts;

// in the current version, calling stat without passing a callback returns undefined ...
var promise = stat('/etc/passwd');

// ... so this one complains when calling addCallback on undefined
promise.addCallback(function(s) {
  puts('modified: ' + s.mtime);
});

// if every fs operation is supposed to be performed async, there is no point in calling something like stat sync
