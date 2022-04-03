let o = {
  // An ordinary data property
  dataProp: 15,

  // An accessor property defined as a pair of functions.
  get accessorProp() { return this.dataProp; },
  set accessorProp(value) { this.dataProp = value; },
};
console.log("accessProp: ", o.accessorProp);
o.accessorProp = 20;
console.log("changed accessProp: ", o.accessorProp);


let p = {
  // x and y are regular read-write data properties.
  x: 1.0,
  y: 1.0,

  // r is a read-write accessor property with getter and setter.
  // Don't forget to put a comma after accessor methods.
  get r() { return Math.hypot(this.x, this.y); },
  set  r(newvalue) {
    let oldvalue = Math.hypot(this.x, this.y);
    let ratio = newvalue / oldvalue;
    this.x *= ratio;
    this.x *= ratio;
  },

  // theta is a read-only accessor property with getter only.
  get theta() { return Math.atan2(this.y, this.x); },
};

console.log("p.r: ", p.r);
console.log("p.theta", p.theta);

let q = Object.create(p);
q.x = 3; q.y = 4;
console.log("q.r: ", q.r);
console.log("q.theta", q.theta);


// This object generates strictly increasing serial numbers
const serialnum = {
  // This data property holds the next serial number.
  // The _ in the property name hints that it is for internal use only.
  _n: 0,

  // Return the current value and increment it.
  get next() { return this._n++; },

  // Set a new value of n, but only if it is larger than a current value.
  set next(n) {
    if (n > this._n) this._n = n;
    else throw new Error("serial number can only be set to a larger value");
  },
};

serialnum.next = 10;
console.log("serialnum.next: ", serialnum.next);
console.log("serialnum.next: ", serialnum.next);


// This object has accessor properties that return random numbers.
// The expression "random.octet", for example, yields a random number
// between 0 and 255 each time it is evaluate.

const random = {
  get octet() { return Math.floor(Math.random() * 256); },
  get uint16() { return Math.floor(Math.random()*65536); },
  get int16() { return Math.floor(Math.random()*65536) - 32768; },
};

console.log("octet(): ", random.octet);
console.log("octet(): ", random.uint16);
console.log("octet(): ", random.int16);
