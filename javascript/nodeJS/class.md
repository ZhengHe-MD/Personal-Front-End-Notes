## ES5 class: prototype-chain

**note** use ```util.inherits``` to explain

* es5 - example

```
var util = require('util');

function Person() {
  this.firstname = 'Samuel';
  this.lastname = 'Plod';
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.firstname} ${this.lastname}`);
}

function Policeman() {
  Person.call(this); // [A]
  this.badgeNumber = 1234;
}

util.inherits(Policeman, Person);

var officer = new Policeman();
officer.greet();
```

### takeaways
1. Without line [A], policeman will only have **Person.prototype** attached to itself (util.inherits specific).
2. With line [A], policeman will also have property **firstname** and **lastname**.
3. When we want an class to inherit another base class, we have to make it inherit both its properties and its prototype.

## ES6 class: just syntax-sugar

* es6 - example

```
'use strict';

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
  }
}
```

### takeaways
1. ES6 - class syntax is just a syntax sugar over the ES5 prototype-chain. Under the hood, its the same thing.
2. Anything put inside constructor will become properties of the ```object```.
3. Anything put outside constructor will become properties of the ```object.prototype```.
