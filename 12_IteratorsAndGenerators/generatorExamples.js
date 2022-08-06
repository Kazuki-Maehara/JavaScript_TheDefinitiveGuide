function* fibonacciSequence() {
  let x = 0, y = 1;
  for(;;) {
    yield y;
    [x, y] = [y, x+y];
  }
}

// Return the nth Fibonacci number.
function fibonacci(n) {
  for (let f of fibonacciSequence()) {
    if (n-- <= 0) return f;
  }
}

console.log(fibonacci(20));


// Yield the first n elements of the specified iterable object.
function* take(n, iterable) {
  let it = iterable[Symbol.iterator](); // Get iterator for iterable object.
  while(n-- > 0) {          // Loop n times:
    let next = it.next();   // Get the next item from the iterator.
    if (next.done) return;  // If there are no more values, return early
    else yield next.value;  // Otherwise, yield the value
  }
}

// An array of the first 5 Fibonacci number.s
let result = [...take(5, fibonacciSequence())];
console.log(result);


// Given an array of iterables, yield their elements in interleaved order.
function* zip(...iterables) {
  // Get an iterator for each iterable.
  let iterators = iterables.map(i => i[Symbol.iterator]());
  let index = 0;
  while(iterators.length > 0) {
    if (index >= iterators.length) {
      index = 0;
    }
    let item = iterators[index].next();
    if (item.done) {
      iterators.splice(index, 1);
    }
    else {
      yield item.value;
      index++;
    }
  }
}

// Interleave three iterable objects.
result = [...zip("vwxyz", "ab", [0])];
console.log(result);
