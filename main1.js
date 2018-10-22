import * as d3 from "d3";

var http = require('http');
var d3 = require("d3");
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
    d3.json('./test.json', (data) => {
        console.log(data);
    })
}).listen(1337, "127.0.0.1");
console.log('Server running at http://127.0.0.1:1337/');