var name = require('./package.jsoon').name
require('productionize')(name)

var server = require('./lib/servers')
var port = process.env.PORT || 5000
server().listen(port)
console.log('second working stage');
console.log('working with on port ' + port);
console.log(name, 'listening on port', port)
console.log('hello');