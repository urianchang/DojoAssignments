var http = require('http');
var port = 7077;
var static_contents = require('./static');

var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    static_contents(request, response);
});

server.listen(port);
console.log(`Running in localhost at port ${port}`);
