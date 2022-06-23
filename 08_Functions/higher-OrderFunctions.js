// This higher-order function is a function that operates on functions, taking one or more
// functions as arguments and returning a new function.

function not(f) {
  return function(...args) {
    // console.log(args);
    // console.log(this);
    let result = f.apply(this, args);
    return !result;
  };
}

const even = (x, y, z) => {
   console.log(x, y, z);
   return x % 2 ===0;

 };
const odd = not(even);
let result = [1, 1, 3, 5, 5,].every(odd);
console.log(result);

console.log("-----------------------");


// Return a function that expects an array argument and applies f to
// each element, returning the array of return values,
// Contrast this with the map() function from earlier.
const map = function(a, ...args) {return a.map(...args)};

function mapper(f) {
  return a => map(a, f);
}

const increment = x => x+1;
const incrementAll = mapper(increment);
result = incrementAll([1, 2, 3]);
console.log(result);


console.log("-----------------------");
// Return a new function that computes f(g(...)).
// The returned function h passes all of its arguments to g, then passes
// the return value of g to f, then returns the return value of f.
// Both f and g are invoked with the same this value as h was invoked with.
function compose(f, g) {
  return function(...args) {
    // We use call for f because we're passing a single value and
    // apply for g because we're passing an array of values.
    return f.call(this, g.apply(this, args));
  }
}

const sum = (x, y) => x+y;
const square = x => x*x;
result = compose(square, sum)(2, 3)
console.log(result);
