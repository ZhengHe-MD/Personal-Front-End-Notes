class HashTable {

  constructor() {
    this.memory = [];
  }

  hashKey(key) {
    var hash = 0;
    for (var index = 0; index < key.length; index++) {
      // Oh look– magic.
      var code = key.charCodeAt(index);
      hash = ((hash << 5) - hash) + code | 0;
    }
    return hash;
  }

  get(key) {
    // We start by turning our key into an address.
    var address = this.hashKey(key);
    // Then we simply return whatever is at that address.
    return this.memory[address];
  }

  set(key, value) {
    // Again we start by turning the key into an address.
    var address = this.hashKey(key);
    // Then just set the value at that address.
    this.memory[address] = value;
  }

  remove(key) {
    // As always, we hash the key to get an address.
    var address = this.hashKey(key);
    // Then, if it exists, we `delete` it.
    if (this.memory[address]) {
      delete this.memory[address];
    }
  }

}
