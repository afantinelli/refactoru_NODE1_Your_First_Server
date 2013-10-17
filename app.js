//Part 1 //
// var http = require('http');
// http.createServer(function (req, res) {
  // res.writeHead(200, {'Content-Type': 'text/plain'});
  // res.end('Hello World');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');


//Part 2 //
// 1) changed the res.end(...) to a string of HTML - res.end('<h1>Hello World</h1>')
// 2 & 3) when I ran node app.js, the output on the browser was just raw HTML (<h1>Hello World</h1>) - I did expect this because the 
//Content-Type was set to text/plain and not text/HTML
// 4) the output changed when I set the Content-Type to text/HTML from text/plain by displaying on the browser the actual HTML page and not the
//raw HTML 

//Part 3 //
var fs = require('fs');
var http = require('http');

console.log(__dirname)

var server = http.createServer(function (req, res) {

//var dataFile = fs.readFileSync(__dirname + '/data.txt')



        fs.readFile(__dirname + '/data.txt', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                  res.end(data);
        }); 

                //res.writeHead(200, {'Content-Type': 'text/html'});
                  //res.end(dataFile);
})

server.listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');






