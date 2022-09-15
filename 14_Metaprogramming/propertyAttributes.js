// Start with no properties at all.
let o = {};

// Add a non-enumerable data property x with value 1.
Object.defineProperty(o, "x", {
  value : 1,
  writable: true,
  enumerable: false,
  configurable: true,
});

const print = console.log;
// Check that the property is there but is not-enumerable.
print(o.x);
print(Object.keys(o));

// Now modify the property x so that it is read-only.
Object.defineProperty(o, "x", { writable: false });

// Try to change the value of the property.
o.x = 2;
print(o.x);


// The property is still configurable, so we can change its value like this.
Object.defineProperty(o, "x", {value: 2});
print(o.x);


// Now change x from a data property to an accessor property.
Object.defineProperty(o, "x", { get: function() { return 0; } });
print(o.x);


let p = Object.defineProperties({}, {
  x: { value: 1, writable: true, enumerable: true, configurable: true },
  y: { value: 1, writable: true, enumerable: true, configurable: true },
  r: {
    get() { return Math.sqrt(this.x*this.x + this.y*this.y); },
    enumerable: true,
    configurable: true
  }
});
print(p.r);
