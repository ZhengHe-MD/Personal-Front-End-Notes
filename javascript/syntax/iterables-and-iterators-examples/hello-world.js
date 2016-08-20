let helloworld = {
  [Symbol.iterator]() {
    let step = 0;
    let iterator = {
      next() {
        if (step <= 2) {
          step = step + 1;
        }
        switch (step) {
          case 1:
            return { value: 'hello', done: false };
          case 2:
            return { value: 'world', done: false };
          default:
            return { value: undefined, done: true };
        }
      }
    };
    return iterator;
  }
}

for (let x of helloworld) {
  console.log(x);
}
