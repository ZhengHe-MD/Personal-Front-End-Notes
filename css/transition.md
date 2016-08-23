# Transition

## Syntax

```
.element {
  transition: [property] [duration] [ease] [delay]
}
```

### example

```
.element {
  transition: opacity 300ms ease-in-out 1s;
}
```

## Animatable Properties, [see](http://oli.jp/2010/css-animatable-properties/)

* font-size
* background-color
* width
* left
* ...

## Not Animatable Properties

* display
* font-family
* position

## Performant Properties

* position
* scale
* rotation
* opacity

**note**: basically these properties are **transform** properties. They don't cause a repaint of the elements and reflow of the layouts. [see](http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)

## Trigger the transition

1. Hover pseudo class
2. Class changes

### [example](http://codepen.io/devtips/pen/xOdodB/)
