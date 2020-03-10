const ssh2 = require('ssh2').Client;

var client = new ssh2();

client.on('ready',function(){
  console.log('connected')
}).connect({
  host : '91.219.32.5',
  port : 22,
  username : 'sessiondrop',
  password :'lhjgyenm353355'
});
