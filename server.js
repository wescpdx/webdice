var http = require("http");

var myServer = {};
myServer.start = function(route) {
	http.createServer(function(request, response) {
      route(request);
	  response.writeHead(200, {"Content-Type": "text/plain"});
	  response.write("Hello World");
	  response.end();
	}).listen(8888);

	console.log("Server has started.");
}

module.exports = myServer;
