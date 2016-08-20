## Util.inherits

* example

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

### take aways
1. Without line [A], policeman will only have **Person.prototype** attached to itself (util.inherits specific).
2. With line [A], policeman will also have property **firstname** and **lastname**.
