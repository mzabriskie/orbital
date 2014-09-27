var server = require('pushstate-server');
var minimist = require('minimist');
var argv = minimist(process.argv.slice(2));

server.start({
	port: argv.p || 3000,
	directory: './public'
});
