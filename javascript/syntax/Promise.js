let promiseCount = 0

function testPromise() {
  const thisPromiseCount = ++promiseCount;
  console.log('Started: Sync code started');
  const p1 = new Promise((resolve, reject) => {
    console.log('Promise Started: Async code started');
    setTimeout(() => {
      resolve(this.PromiseCount);
      // reject('internal error');
    }, Math.random() * 2000 + 1000);
  });

  p1
    .then(val => console.log('Promise Fulfilled: Async code terminated'))
    .catch(reason => console.log(`Promise Rejected: Async code terminated, error ${reason}`));

  console.log('Promise made: Sync code terminated');
}

testPromise();
// testPromise();
