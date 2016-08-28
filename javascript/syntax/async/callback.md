
``` javascript
// load-image-callbacked.js
function loadImage(url, callback) {
  let image = new Image();

  image.onload = function() {
    callback(null, image);
  }

  image.onerror = function() {
    let message = `Could not load image at ${url}`;
    callback(new Error(message));
  }

  image.src = url;
}

export default loadImage;
```

``` javascript
import loadImageCallbacked from './load-image-callbacked';

let addImg = (src) => {
  let imgElement = document.createElement('img');
  imgElement.src = src;
  document.body.appendChild(imgElement);
}

loadImageCallbacked('images/cat1.jpg', (error, img1) => {
  if (error) throw error;
  addImg(img1.src);
  loadImageCallbacked('images/cat2.jpg', (error, img2) => {
    if (error) throw error;
    addImg(img2.src);
    loadImageCallbacked('images/cat3.jpg', (error, img3) => {
      if (error) throw error;
      addImg(img3.src);
    })
  })
})
```

* images are not loaded in a parallel way.
* **christmas tree of doom**, **pyramid**
