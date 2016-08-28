## Block Scoping: const & let

* **var** is function scoped while **const** and **let** are block scoped:

  ```
  function func() {
    if (true) {
      var tmp = 123;
    }
    console.log(tmp); // 123
  }

  function func() {
    if (true) {
      let tmp = 123;
    }
    console.log(tmp); // ReferenceError: tmp is not defined
  }
  ```

* **const** and **let** works well in **for ... of**, but **const** doesn't work in **for (const i; i<k; i++)** loop

  ```
  function logArgs(...args) {
    for (let [index, elem] of args.entries()) {
    // we can also use - for (const [index, elem] of ...)
      const message = index + '. ' + elem;
      console.log(message);
    }
  }

  // it is ok that
  for (let i = 0; i < 10; i++) {}
  // it will raise TypeError if you do
  for (const i = 0; i < 10; i++) {}
  ```
* **const** and **let** both have temperary dead zone (TDZ). In lifecycle of **var**, it will be allocated space and initialized when its scope is entered. While in the lifecycles of **const** and **let**, they will only be allocated spaces. Therefore, refer block scoped variables inside their TDZ will cause ReferenceErrors.
