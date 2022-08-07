// A generator function that yields the set of one digit (base-10) primes.
function * oneDigitPrimes() {   // Invoking this function does not run the code
  yield 2;                      // but just returns a generator object. Calling
  yield 3;                      // the next() method of that generator runs
  yield 4;                      // the code until a yield statement provides
  yield 7;                      // the return value for the next() method.
}

// When we invoke the generator function, we get a generator.
let primes = oneDigitPrimes();

// A generator is an iterator object that iterates the yielded values.
let p = console.log;
p(primes.next().value);
p(primes.next().value);
p(primes.next().value);
p(primes.next().value);

p(primes.next().done);


const seq = function*(from, to) {
  for (let i = from; i <= to; i++) yield i;
};

p([...seq(3, 5)]);

let o = {
  x: 1, y: 2, z: 3,
  // A generator that yields each of the keys of this object.
  *g() {
    for (let key of Object.keys(this)) {
      yield key;
    }
  }
};

p([...o.g()]);
