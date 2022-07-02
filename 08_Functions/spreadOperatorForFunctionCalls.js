// This function takes a function and returns a wrapped version.
function timed(f) {
  // Collect args into a rest parameter array.
  return function(...args) {
    console.log(`Entering function ${f.name}`);
    let startTime = Date.now();
    try {
      // Pass all of our arguments to the wrapped function.
      // Spread the args back out again.
      return f(...args);
    }
    finally {
      // Before we return the wrapped return value, print elapsed time.
      console.log(`Exiting ${f.name} after ${Date.now()-startTime}ms`);
    }
  };
}


// Compute the sum of the numbers between 1 and n by brute force.
function benchmark(n) {
  let sum = 0;
  for (let i = 1; i <= n; ++i) sum += i;
  return sum;
}

// Now invoke the timed version of that test function.
let v = timed(benchmark)(1000000000);
console.log(v);
