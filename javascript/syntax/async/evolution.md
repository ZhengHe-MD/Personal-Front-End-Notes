## sync read json

``` javascript
function readJSONSync(filename) {
  return JSON.parse(fs.readFileSync(filename, 'utf-8'));
}
```

* error bubbles up and can be handled easily.

## async read json 1

``` javascript
function readJSON(filename, callback) {
  fs.readFile(filename, 'utf8', function (err, res) {
    if (err) return callback(err);
    callback(null, JSON.parse(res));
  });
}
```

* Conflates the input with the output and relies on pure convention that if it is an error, the first argument in callback should be error object itself, if it is the expected result, the first argument should be null while the second argument should be the result.
* Doesn't work with control flow primitives like for loop.
* Doesn't handle errors. JSON.parse error (invalid json file) will be bubbled up to the global scope.

## async read json 2

``` javascript
function readJSON(filename, callback) {
  fs.readFile(filename, 'utf8', function (err, res) {
    if (err) return callback(err);
    try {
      callback(null, JSON.parse(res));
    } catch (ex) {
      callback(ex);
    }
  });
}
```

* Conflates the input with the ouput.
* Doesn't work with control flow primitives.
* Handle errors in JSON.parse.
* Double handles errors in the callback when JSON.parse throw an error.

## async read json 3

``` javascript
function readJSON(filename, callback) {
  fs.readFile(filename, 'utf8', function (err, res) {
    if (err) return callback(err);
    try {
      res = JSON.parse(res);
    } catch (ex) {
      return callback(ex);
    }
    callback(null, res);
  });
}
```

* Conflates the input with the output.
* Doesn't work with control flow primitives.
* But it does handle errors.

## async read json with Promise A

``` javascript
function readFile(filename, enc) {
  return new Promise((fullfil, reject) => {
    fs.readFile(filename, enc, (err, res) => {
      if (err) reject(err);
      else fullfill(res);
    });
  });
}

function readJSON(filename) {
  return new Promise((fullfill, reject) => {
    readFile(filename, 'utf8').done(res => {
      try {
        fullfill(JSON.parse(res));
      } catch (ex) {
        reject(ex);
      }
    }, reject);
  })
}
```

* Doesn't conflate input with output. readJSON just take the filename without the callback.
* Doesn't work with control flow primitives.
* Requires extra work to handle errors.

## async read json with Promise B

``` javascript
function readJSON(filename) {
  return readFile(filename, 'utf8').then(res => JSON.parse(res)); // or .then(JSON.parse)
}
```

* Doesn't conflate input with output
* Doesn't work with control flow primitives
* Handles errors.

## generator json

``` javascript
var readJSONSync = function (filename) {
  return JSON.parse(fs.readFileSync(filename, 'utf8'));
}
var readJSON = async(function* (filename) {
  return JSON.parse(yield readFile(filename, 'utf8'));
})
```

* Doesn't conflate input with output
* Works with control flow primitives
* Handles errors
* Looks asynchronous

### What can we do with generator json

1. A sequence of operations

  ``` javascript
  var get = async(function* () {
    var left = yield readJSON('left.json');
    var right = yield readJSON('right.json');
    return { left, right };
  });

  // parallel operations
  var get = async(function* () {
    var left = readJSON('left.json');
    var right = readJSON('right.json');
    return { left: yield left, right: yield right };
  });
  ```

2. Try/catch

  ``` javascript
  var tryGet = async(function* (key, defaultValue) {
    var result
    try {
      result = yield get(key)
    } catch (ex) {
      result = defaultValue
    }
    return result
  })
  ```

3. For loop

  ``` javascript
  var uploadDocuments = async(function* (documents) {
    for (var document of documents) {
      yield upload(document);
    }
  });

  // parallel
  var uploadDocumentsParallel = async(function* (documents) {
    var operations = []
    for (var document of documents) {
      operations.push(upload(document))
    }
    for (var operation of operations) {
      yield operation
    }
  });
  ```

### How it works

* **yield something** is an expression
* A generator can be manually operated via .next(value)

  ``` javascript
  function* demo() {
    var res = yield 10;
    assert(res === 32);
    return 42;
  }

  var d = demo();
  var resA = d.next();
  // => { value: 10, done: false }
  var resB = d.next(32);
  // => { value: 42, done: true }
  // d.next() - THROWS!!
  ```

* A generator can be send an exception via .throw(error)

  ``` javascript
  var sentinel = new Error('foo');
  function* demo() {
    try {
      yield 10;
    } catch (ex) {
      assert(ex === sentinel);
    }
  }

  var d = demo();
  d.next();
  // => { value: 10, done: false }
  d.throw(sentinel);
  ```
* putting all together

  ``` javascript
  function async(makeGenerator) {
    return function() {
      var generator = makeGenerator.apply(this, arguments);

      function handle(result) {
        if (result.done) return result.value

        return result.value.then(function (res) {
          return handle(generator.next(res))
        }, function (err) {
          return handle(generator.throw(err))
        })
      }

      return handle(generator.next())
    }
  }
  ```

## Reference
[Forbes Lindesay: Promises and Generators: control flow utopia -- JSConf EU 2013](https://www.youtube.com/watch?v=qbKWsbJ76-s)
