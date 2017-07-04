首先看两个函数
1. \_createClass: 该函数用于设置 **class method**, **static method**, 以及 **getter** 和 **setter**。

```javascript
var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()
```

2. \_classCallCheck: 该函数用于在没有用 **new** 来创建实例的时候抛错。
```javascript
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}
```

示例：

```javascript
class Person {
  constructor(height, weight, gender) {
    this.height = height;
    this.weight = weight;
    this.gender = gender;
  }

  isMan() {
    return this.gender === 'man';
  }

  isWoman () {
    return !this.isMan()
  }

  static isHealthy (height, weight) {
    return (height - weight) > 105;
  }

  get gender () {
    return this.gender
  }

  set gender (gender) {
    this.gender = gender;
  }
}
```
会被transpile成

```javascript
var Person = function () {
  function Person(height, weight, gender) {
    _classCallCheck(this, Person);

    this.height = height;
    this.weight = weight;
    this.gender = gender;
  }

  _createClass(Person, [{
    key: 'isMan',
    value: function isMan() {
      return this.gender === 'man';
    }
  }, {
    key: 'isWoman',
    value: function isWoman() {
      return !this.isMan();
    }
  }, {
    key: 'gender',
    get: function get() {
      return this.gender;
    },
    set: function set(gender) {
      this.gender = gender;
    }
  }], [{
    key: 'isHealthy',
    value: function isHealthy(height, weight) {
      return height - weight > 105;
    }
  }]);

  return Person;
}();
```
