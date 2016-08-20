# Background

## System Events and Custom Events

* system events come from C++ Core libuv.
* custom events come from Javascript Core event emitter. Javascript doesn't have the concept of event. It fakes event with codes.

## Basic Event Emitter

```
function Emitter() {
  this.events = {};
}

Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
  if(this.events[type]) {
    this.events[type].forEach(function(listener) {
      this.events[type].forEach(function(listener) {
        listener();
      })
    })
  }
}
// you can use it like this
var emitter = new Emitter();
emitter.on('greet', () => console.log('greet1'));
emitter.on('greet', () => console.log('greet2'));
emitter.emit('greet');
```
