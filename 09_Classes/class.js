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

  // Here are example uses of this new Range class.
let r = new Range(1, 3);
console.log(r);

console.log(r.includes(2));
console.log(r.toString());
console.log([...r]);


r = Range.parse('(1...10)');
console.log(r);
