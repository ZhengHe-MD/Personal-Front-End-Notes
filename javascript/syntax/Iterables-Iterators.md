## Iterating language constructs

1. Destructuring via an Array pattern
2. for-of loop
3. Array.from()
4. Spread operator(...)
5. Constructors of Maps and Sets
6. Promise.all(), Promise.race()
7. yield*

## Implementing iterables

### interfaces

```
interface Iterable {
  [System.iterator](): Iterator;
}

interfaces IteratorResult {
  value: any;
  done: boolean;
}

interface Iterator {
  next(): IteratorResult,
  return?(value?: any): IteratorResult
};
```
