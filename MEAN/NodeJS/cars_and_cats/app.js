var http = require('http');
var fs = require('fs');
var port = 7077;

var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);

    var file;

    var urlArr = request.url.split("/");

    switch(urlArr[1]) {
        case 'images':
            file = urlArr[1] + '/' + urlArr[2];
            serveJPG(file, response);
            break;
        case 'stylesheets':
            file = urlArr[1] + '/' + urlArr[2];
            serveCSS(file, response);
            break;
        default:
            file = "views/";
            switch(request.url){
                case "/cars":
                    file += "cars.html";
                    serveHTML(file, response);
                    break;
                case "/cats":
                    file += "cats.html";
                    serveHTML(file, response);
                    break;
                case "/cars/new":
                    file += "newcars.html";
                    serveHTML(file, response);
                    break;
                default:
                    serve404(response);
            }
    }
});

//: Helper functions for rendering certain types of files
    // For HTML files
function serveHTML(file, response) {
    fs.readFile(file, 'utf8', function (errors, contents){
        if (errors) {console.log(errors);}
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
    });
}
    // For stylesheets
function serveCSS(file, response) {
    fs.readFile(file, 'utf8', function (errors, contents){
        if (errors) {console.log(errors);}
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(contents);
        response.end();
    });
}
    // For images
function serveJPG(file, response) {
    fs.readFile(file, function (errors, contents){
        if (errors) {console.log(errors);}
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
}
    // 404 message
function serve404(response) {
    response.writeHead(404);
    response.end("File not found!!!");
}

server.listen(port);
console.log(`Running in localhost at port ${port}`);
