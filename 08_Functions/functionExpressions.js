// This function expression defines a function that squares its argument.
// Note that we assign it to a variable.
const square = function(x) { return x; };

// Function expressions can include names ,which is useful for recursion.
const f = function fact(x) {
  if (x <= 1) return 1;
  else return x*fact(x-1);
};

// Function expressions can also be used as arguments to other functions.
let arr = [3, 2, 1,].sort(function(a,b) { return a - b; });

// Function expressions are sometimes defined and immediately invoked.
let tensquared = (function(x) { return x*x } (10) );

console.log("Square of 3: ", square(3));
console.log("Factorial of 3: ", f(3));
console.log(arr);
console.log(tensquared);
