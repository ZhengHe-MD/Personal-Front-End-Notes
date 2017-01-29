```javascript
class Person {
  constructor (height, weight) {
    this.height = height
    this.weight = weight
  }
}

class Man extends Person {
  constructor (height, weight) {
    super(height, weight)
    this.gender = 'male'
  }
}
```

transpile to

```javascript
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass)
  }
  // setup prototype chain
  // the second argument ensures that constructor of the instance of
  // subClass will be subClass itself, instead of the superClass.
  subClass.prototype = Object.create(
    superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }
  )
  if (superClass) {
    // setPrototypeOf is basically make subClass.__proto__ = superClass
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : subClass.__proto__ = superClass
  }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function")
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

var Person = function Person(height, weight) {
  // if we call a function with a new keyword, it will basically do three things
  // 1. a brand new object is created (aka, constructed) out of thin air
  // 2. the newly constructed object is [[Prototype]]-linked
  // 3. the newly constructed object is set as the this binding for that function call
  // 4. unless the function returns its own alternate object, the new-invoked function call will automatically return the newly constructed object.
  _classCallCheck(this, Person)

  this.height = height
  this.weight = weight
}

var Man = function (_Person) {
  // setup prototype chain
  _inherits(Man, _Person);

  function Man(height, weight) {
    _classCallCheck(this, Man);

    var _this = _possibleConstructorReturn(this, (
      Man.__proto__ ||
      Object.getPrototypeOf(Man)).call(this, height, weight)
    );

    _this.gender = 'male';
    return _this;
  }

  return Man;
}(Person);
```
