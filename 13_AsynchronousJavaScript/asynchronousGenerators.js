// A Promise-based wrapper around setTimeout() that we can use await with.
// Return a Promise that fulfills in the specified number of milliseconds.
function elapsedTime(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// An async generator function that increments a counter and yields it
// a specified (or infinite) number of times at a specified interval.
async function* clock(interval, max=Infinity) {
  for (let count = 1; count <= max; count++) {
    await elapsedTime(interval);
    yield count;
  }
}


// A test function that uses the async generator with for/await.
async function test() {
  for await (let tick of clock(300, 10)) {
    console.log(tick);
  }
}

test();
