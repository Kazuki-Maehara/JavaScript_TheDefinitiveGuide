/*
// A Range of object represents a range of numbers {x: from <= x <= to}
// Range defines a has() method for testing whether a given number is a member
// of the range. Range is iterable and iterates all integers within the range.
*/
class Range {
  constructor (from, to) {
    this.from = from;
    this.to = to;
  }

  // Make a Range act like a Set of numbers
  has(x) { return typeof x === "number" && this.from <= x <=this.to; }

  // Return string representation of the range using set notation
  toString() { return `{ x | ${this.from} <= x <= ${this.to} }`; }

  // Make a Range iterable by returning an iterator object.
  // Note that the name of this method is a special symbol, not a string.
  [Symbol.iterator]() {
    // Each iterator instance must iterate the range independently of others.
    // So we need a state variable to track our location in the iteration.
    // We start at the first integer >= from.
    let next = Math.ceil(this.from);
    let last = this.to;
    return {
      // This next() method is what makes this an iterator object.
      // It must return an iterator result object.
      next() {
        return (next <= last) // If we haven't returned last value yet
        ? { value: next++}    // return next value and increment it
        : { done: true};      // otherwise indicate that we're done.
      },

      // As a convenience, we make the iterator itself iterable.
      [Symbol.iterator]() { return this; }
    };
  }
}

for (let x of new Range(1, 10)) console.log(x);
console.log([...new Range(-2, 2)]);


// Return an iterable object that iterates the result of applying f()
// to each value from the source iterable.
function map(iterable, f) {
  let iterator = iterable[Symbol.iterator]();
  return {      // This object is both iterator and iterable
    [Symbol.iterator]() { return this; },
    next() {
      let v = iterator.next();
      if (v.done) {
        return v;
      } else {
        return {value: f(v.value) };
      }
    }
  };
}

// Map a range of integers to their squares and convert to an array.
console.log([...map(new Range(1, 4), x => x*x)]);


// Return an iterable object that filters the specified iterable,
// iterating only those elements for which the predicate returns true.
function filter(iterable, predicate) {
  let iterator = iterable[Symbol.iterator]();
  return {      // This object is both iterator and iterable.
    [Symbol.iterator]() {return this; },
    next() {
      for(;;) {
        let v = iterator.next();
        if (v.done || predicate(v.value)) {
          return v;
        }
      }
    }
  };
}

// Filter a range so we're left with only even numbers.
console.log([...filter(new Range(1, 10), x => x % 2 === 0)]);


function words(s) {
  var r = /\s+|$/g;
  r.lastIndex = s.match(/[^ ]/).index;
  return {
    [Symbol.iterator]() { return this;},
    next() {
      let start = r.lastIndex;
      if (start < s.length) {
        let match = r.exec(s);
        if (match) {
          return { value: s.substring(start, match.index) };
        }
      }
      return { done: true };
    }
  };
}

console.log([...words(" abc def   ghi!")])
