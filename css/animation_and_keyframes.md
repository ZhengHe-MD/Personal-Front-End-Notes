# Keyframes

## Syntax

```
@keyframes [name] {
  from {
    [styles];
  }
  to {
    [styles];
  }
}
```

### example

```
@keyframes myframes {
  from {
    height: 200px;
    background: orange;
  }
  to {
    height: 400px;
    background: pink;
  }
}
```

**note**: keyframes should be put in the root of your css file.

# Animation

## Syntax

```
.element {
  animation: [name] [duration] [timing-function] [delay]
  [iteration-count] [direction] [fill-mode] [play-state]
}

.element {
  animation: myframes 2s ease-in-out 0s infinite normal
  forwards paused;
}
```

### [example](http://codepen.io/devtips/pen/Krqrwq/)
