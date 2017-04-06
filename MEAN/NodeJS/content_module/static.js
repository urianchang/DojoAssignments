var fs = require('fs');

module.exports = function(request, response) {
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
        case 'scripts':
            file = urlArr[1] + '/' + urlArr[2];
            serveJS(file, response);
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
}

//: Helper functions for rendering certain types of files
    // For HTML files
function serveHTML(file, response) {
    fs.readFile(file, 'utf8', function (err, contents){
        if (err) {console.log(err);}
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(contents);
        response.end();
    });
}
    // For stylesheets
function serveCSS(file, response) {
    fs.readFile(file, 'utf8', function (err, contents){
        if (err) {console.log(err);}
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(contents);
        response.end();
    });
}
    // For JPG images
function serveJPG(file, response) {
    fs.readFile(file, function (err, contents){
        if (err) {console.log(err);}
        response.writeHead(200, {'Content-Type': 'image/jpg'});
        response.write(contents);
        response.end();
    });
}
    // For JavaScript files
function serveJS(file, response) {
    fs.readFile(file, function(err, contents) {
        if (err) {console.log(err);}
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        response.write(contents);
        response.end();
    });
}
    // 404 message
function serve404(response) {
    response.writeHead(404);
    response.end("File not found!!!");
}
