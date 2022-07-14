
class Range {
  constructor(from ,to) {
    // Store the start and end points (state) of this new range object.
    // These are noninherited properties that are unique to this object.
    this.from = from;
    this.to = to;

  }


  static parse(s) {
    let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
    if (!matches) {
      throw new TypeError(`Cannot parse Range from "${s}".`);
    }
    console.log(matches);
    return new Range(parseInt(matches[1]), parseInt(matches[2]));
  }

  // Return true if x is in the range, flase otherwise.
  // This method works for textual and Date ranges as well as numeric.
  includes(x) { return this.from <= x && x <= this.to; }

  // A generator function that makes instances of the class iterable.
  // Note that it only works for numeric ranges.
  *[Symbol.iterator]() {
    for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }

  // Return a string representation of the range.
  toString() { return `${this.from}...${this.to}`; }

}



// This is the constructor function for our subclass.
function Span(start, span) {
  if (span >= 0) {
    this.from = start;
    this.to = start + span;
  } else {
    this.to = start;
    this.from = start + span;
  }
}

// Ensure that the Span prototype inherits from the Range prototype.
Span.prototype = Object.create(Range.prototype);

// We don't want to inherit Range.prototype.constructor, so we
// define our own constructor property.
Span.prototype.constructor = Span;

// By defining its own toString() method, Span overrides the toString()
// medhod that it would otherwise inherit from Range.
Span.prototype.toString = function() {
  return `${this.from}...+${this.to - this.from}`;
};


let s = new Span(1, 15);
console.log(s);

console.log(s.includes(2));
console.log(s.toString());
console.log([...s]);


s = Range.parse('(1...10)');
console.log(s);
