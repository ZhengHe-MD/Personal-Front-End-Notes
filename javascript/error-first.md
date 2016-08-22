## Error-First Callback

* Error-first callbacks are callbacks take an error object as their first parameter. (null if no error, otherwise will contain an object defining the error. This is a standard so we know in what order to place our parameters for our callbacks)

* example

```
var fs = require('fs');

var greet = fs.readFile(
  __dirname + '/greet.txt',
  'utf8',
  function(err, data) {
    console.log(data);
  }
)
```
