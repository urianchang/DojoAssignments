var http = require('http');
var fs = require('fs');
var port = 6789;

var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);

    var file;

    switch(request.url){
        case "/":
            file = "index.html";
            break;
        case "/ninjas":
            file = "ninjas.html";
            break;
        case "/dojos/new":
            file = "dojos.html";
            break;
        default:
            file = null;
            break;
    }

    if (file !== null) {
        fs.readFile(`views/${file}`, 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    } else {
        response.writeHead(404);
        response.end('File not found!!!');
    }

});

server.listen(port);
console.log(`Running in localhost at port ${port}`);
