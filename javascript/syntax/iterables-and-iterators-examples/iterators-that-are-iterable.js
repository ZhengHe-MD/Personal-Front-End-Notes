function iterateOver(...args) {
  let index = 0
  let iterable = {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      while (index < args.length) {
        return { value: args[index++], done: false };
      }
      return { done: true };
    }
  }
  return iterable;
}

for( let x of iterateOver('hello', 'world')) {
  console.log(x);
}
