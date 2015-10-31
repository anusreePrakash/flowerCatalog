var http = require('http');
var fs = require('fs');

var display = function(url){
	var file = url == "/" ? "./flowercatalog.html" : "." +url;
	var content = fs.readFileSync(file);
	return content;
}

var handleRequest = function(request,response){
	console.log(request.url);
	// var loadImage = request.url;
	
	// var file=fs.readFileSync("/Users/anusree/my_webpage.html/flower/flowercatalog.html")
	// response.write(file);

	response.end(display(request.url));
};
var server = http.createServer(handleRequest);
server.listen(4004)