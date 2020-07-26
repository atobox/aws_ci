var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
//  console.log(_dirname +  "req.url);
  if(req.url.indexOf('.html') != -1)  {
    fs.readFile(__dirname + req.url, function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }

  if(req.url.indexOf('.txt') != -1)  {
    fs.readFile(__dirname + req.url, function(err, data) {
      res.writeHead(200, {'Content-Type': 'text'});
      res.write(data);
      res.end();
    });
  }
  
  if(req.url.indexOf('.css') != -1)  {
    fs.readFile(__dirname + req.url, function (err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }

  if(req.url.indexOf('.jpg') != -1)  {
    fs.readFile(__dirname + req.url, function (err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpg'});
      res.write(data);
      res.end();
    });
  }

  if(req.url.indexOf('.png') != -1)  {
    fs.readFile(__dirname + req.url, function (err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }

}).listen(8080);

/*
let add = (() => {
  let count = 0;
  return () => ++count;
  
})();

add();

add();

add();

console.log(add());
*/