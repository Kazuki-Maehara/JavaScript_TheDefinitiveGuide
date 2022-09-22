// A trivial Array subclass that adds getters for the first and last elements.
class EZArray extends Array {
  get first() { return this[0]; }
  get last() { return this[this.length - 1]; }
}

let e = new EZArray(1, 2, 3);
let f = e.map(x => x*x);
console.log(e.last);
console.log(f.last);

class EZArray2 extends Array {
  static get [Symbol.species]() { return Array; }
  get first() { return this[0]; }
  get last() { return this[this.length -1]; }
}

e = new EZArray2(1, 2,3);
f = e.map(x => x -1);
console.log(e.last);
console.log(f.last);
