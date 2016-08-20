## Map API

```
Map.prototype.get(key): any
Map.prototype.set(key, value): this
Map.prototype.has(key): boolean
Map.prototype.delete(key): boolean
Map.prototype.size: number
Map.prototype.clear(): void
Map.prototype.entries(): Iterable<[any, any]>
Map.prototype.forEach((value, key, collection) => void, thisArg?): void
Map.prototype.keys(): Iterable<any>
Map.prototype[Symbol.iterator](): Iterable<any, any>
```
## When to use map over object

1. need keys that are not strings
2. need ordered keys.
3. need dynamic keys. [keys only known in runtime]
