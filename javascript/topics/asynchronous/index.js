import path from 'path'
import fs from 'fs'
import fsp from 'fs-promise'
import assert from 'assert'

const csvFilePath = path.join(__dirname, 'file.csv')
const csvPathFile = path.join(__dirname, 'path.txt')
// Javascript Asynchronous Operation
//
// callback, promise, async-await
//
// callback and promise are two different ways to do same thing.
// while async-await now is just a syntax sugar over promise
//
// 1. an callback example

fs.readFile(csvFilePath, (err, data) => {
  if (err) {
    // deal with err
    throw err
  } else {
    assert.equal(
      data.toString('utf-8').trim(),
      'asynchronous'
    )
  }
})

// 2. an promise example
fsp.readFile(csvFilePath)
  .then(data => {
    assert.equal(
      data.toString('utf-8').trim(),
      'asynchronous'
    )
  })
  .catch(err => {
    // deal with err
  })

// 3. an async-await example

async function readFile (path) {
  try {
    const data = await fsp.readFile(path)
    assert.equal(
      data.toString('utf-8').trim(),
      'asynchronous'
    )
  } catch (err) {
    // deal with err
  }
}

readFile(csvFilePath)

// Sometimes, you need to wrap an callback example with promise, how?

function readFileAsPromise (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

readFileAsPromise(csvFilePath)
  .then(data => {
    assert.equal(
      data.toString('utf-8').trim(),
      'asynchronous'
    )
  })
  .catch(err => {
    // deal with err
  })

  // async-await is just syntax sugar for promise.
  // look at the codes below, think about generator function definition as async and
  // yield inside generator as await. It's just the same except some details

  function runGenerator(g) {
    let ret
    const it = g()
    const iterate = val => {
      ret = it.next(val)
      if (!ret.done) {
        if ('then' in ret.value) {
          ret.value.then(iterate)
        }
        else {
          setTimeout(() => {
            iterate(ret.value)
          }, 0)
        }
      }
    }
    iterate()
  }

  function* getFiles() {
    const result1 = yield readFileAsPromise(csvPathFile)
    const filename = result1.toString('utf-8').trim()
    const result2 = yield readFileAsPromise(path.join(__dirname, filename))
    const data = result2.toString('utf-8').trim()
    assert.equal(data, 'asynchronous')
  }

  runGenerator(getFiles)
