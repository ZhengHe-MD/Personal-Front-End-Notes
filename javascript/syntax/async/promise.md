## [example 1](https://www.youtube.com/watch?v=2d7s3spWAzo)

``` javascript
// loadImage.js
// polyfill babel
import 'babelify/polify';

function loadImage(url) {
  return new Promise((resolve, reject) => {
    let image = new Image();

    image.onload = function() {
      resolve(image);
    }

    image.onerror = function() {
      let message = `Could not load image at ${url}`;
      callback(new Error(message));
    }

    image.src = url;
  });
}

export default loadImage;
```

``` javascript
import loadImage from './load-image';

let addImg = ... // see callback.md

Promise.all([
  loadImage('images/cat1.jpg'),
  loadImage('images/cat2.jpg'),
  loadImage('images/cat3.jpg')
]).then((images) => {
  images.forEach(img => addImg(img.src));
})
```
