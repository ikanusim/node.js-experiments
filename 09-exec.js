var sys = require('sys'),
    exec = require('child_process').exec,
    child;

child = exec('ruby 09-exec.rb', function(error, stdout, stderr) {
  sys.print('stdout: ' + stdout);
  sys.print('stderr: ' + stderr);
  if (error != null) {
    console.log('exec error: ' + error);
  }
});
