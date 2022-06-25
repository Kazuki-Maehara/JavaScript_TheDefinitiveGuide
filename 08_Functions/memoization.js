// Return a memoized version of f,
// it only works if arguments to f all have distinct string representations.
function memoize(f) {
  // Value cache stored in the closure.
  const cache = new Map();

  return function(...args) {
    // Create a string version of the arguments to use as a cache key.
    let key = args.length + args.join("+");
    console.log(key);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      let result = f.apply(this, args);
      cache.set(key, result);
      return result;
    }
  };
}

// Return the Greatest Common Divisor of two integers using the Euclidian algorithm.
function gcd(a, b) {
  if (a < b) {
    [a, b] = [b, a];
  }
  while (b !== 0) {
    [a, b] = [b, a%b];
  }
  return a;
}

const gcdmemo = memoize(gcd);
let result = gcdmemo(85, 187);
console.log(result);

// Note that when we write a recursive function that we will be memoizing,
// we typically want to recurse to the memoized version, not the original.
const factorial = memoize(function(n) {
  return (n <= 1) ? 1 : n * factorial(n-1);
});
result = factorial(5);
console.log(result);
