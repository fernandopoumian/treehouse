var router = require("./router.js");

//Problem: We need a simple way to look at a user's badge count and JavaScript points from a web browser
//Solition: Use Node.js to perform the profile look ups and serve our template via HTTP


//1. Create a web server

var http = require('http');

var port = process.env.PORT || 1337;

http.createServer(function(request, response) {

    router.home(request, response);
    router.user(request, response);
    //response.end();

    //response.end('Hello World\n');
}).listen(port, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
