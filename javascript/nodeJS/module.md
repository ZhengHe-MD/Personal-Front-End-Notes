# ES5 module system: require

## what does require do

example module:

  ```
  var greet = function() {
    console.log('Hello!');
  };
  module.exports = greet;
  ```

what require do is to wrap the module you write with:

  ```
  var fn = (function (exports, require, module, __filename, __dirname) {
    var greet = function() {
      console.log('Hello!');
    };
    module.exports = greet;
  });

  fn(module.exports, require, module, filename, dirname);
  return module.exports;
  ```

Therefore, we should know that:
1. **require** itself is a module that implements nodeJS's module system. It's not provided by the language itself
2. the object returned by require is **module.exports**. **require** pass a object called **module** to our javascript module file, and the **exports** property of module object will be modified by our javascript code. In the end, the the **exports** property of **module** object is returned by **require**.

## what can we export ?

1. straightly export any object you want to export:

  ```
  module.exports = function() {}
  ```

2. export an object

  ```
  var obj1 = 1;
  var obj2 = 2;
  module.exports = { obj1, obj2 };
  ```

3. add any object to module.exports

  ```
  module.exports.obj1 = 1;
  module.exports.obj2 = 2;
  ```

## don't use exports

* **exports** inside a module is a reference to module.exports. You can only use it in the third way:

  ```
  exports.obj1 = 1;
  exports.obj2 = 2;
  ```

  You can't assign another object to exports, because it will cause **exports** pointing to another object instead of **module.exports**, which is returned by **require**

## ES6 module system
