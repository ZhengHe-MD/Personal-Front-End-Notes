let natural = {
  [Symbol.iterator]() {
    let pointer = -1;
    let iterator = {
      next() {
        pointer = pointer + 1;
        return { value: pointer, done: false };
      }
    }
    return iterator;
  },
};

for (let x of natural) {
  console.log(x);
  if (x >= 10) {
    break;
  }
}
