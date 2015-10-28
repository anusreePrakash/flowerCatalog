var http = require('http');
var fs = require('fs');

var handleRequest = function(request,response){
	var loadImage = request.url;
	
	var file=fs.readFileSync("/Users/anusree/my_webpage.html/flower/flowercatalog.html")
	response.write(file);

	response.end();
}



var server = http.createServer(handleRequest);
server.listen(4040);
