// A function to compute the absolute value.
function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
}
console.log(abs(10) === abs(-10))

// Compute the sum of the elements of an array
function sum(array) {
  let sum = 0;
  for (let x of array) {
    sum += x;
  }
  return sum;
}
primes = [1, 2, 3, 4, 5];
console.log(sum(primes));

// A function to compute factorials
function factorial(n) {
  let product = 1;
  while (n>1) {
    product *= n;
    n--;
  }
  return product;
}
console.log(factorial(4));


// Another version using a different loop
function factorial2(n) {
  let i, product = 1;
  for (i=2; i<=n; i++) {
    product *= i;
  }
  return product;
}
console.log(factorial2(5));
