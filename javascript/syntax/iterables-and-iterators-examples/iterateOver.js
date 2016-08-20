function iterateOver(...args) {
  let index = 0;
  let iterable = {
    [Symbol.iterator]() {
      let iterator = {
        next() {
          if (index < args.length) {
            return { value: args[index++], done: false };
          }
          return { done: true };
        }
      }
      return iterator;
    }
  }
  return iterable;
}

for( let x of iterateOver('hello', 'world')) {
  console.log(x);
}
