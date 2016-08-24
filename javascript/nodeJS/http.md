```
var http = require('http');

http.createServer(function(req, res) {

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world\n');

}).listen(1337, '127.0.0.1')
```
* ```http.createServer``` will create an event emitter that listening to 'request' event.
* ```http.createServer``` takes a callback to fire when 'request' event was emitted.
* inside the callback, you have to write the header and body yourself.
* when we visit 'http://localhost:1337', browser will send two requests to server, one for
the document and another for the favicon. Since we only have one callback, the server will
just return plain text for both requests.

* example

```
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

  res.writeHead(200, { 'Content-Type': 'text/html' });
  var html = fs.readFileSync(__dirname + '/index.htm');
  res.end(html);

}).listen(1337, '127.0.0.1')

// index.htm
<html>
  <head></head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

* use template

```
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

  res.writeHead(200, { 'Content-Type': 'text/html' });
  var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
  var message = 'Hello world...';
  html = html.replace('{Message}', message);
  res.end(html);

}).listen(1337, '127.0.0.1')

// index.htm
<html>
  <head></head>
  <body>
    <h1>{message}</h1>
  </body>
</html>
```

* read file asynchronously

```
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(__dirname + '/index.htm').pipe(res);
}).listen(1337, '127.0.0.1');
```

* respond with json

```
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  var obj = {
    firstname: 'John',
    lastname: 'Doe'
  };
  res.end(JSON.stringify(obj));
})
```

* respond with route

```
http.createServer(function(req, res) {
  if (req.url === '/') {
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
  } else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    ...
  } else {
    res.writeHead(404);
    res.end();  
  }
})
```
