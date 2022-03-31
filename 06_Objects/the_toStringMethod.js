let s = {x: 1, y: 1}.toString();
console.log(s);

let point = {
  x: 1,
  y: 2,
  toString: function() { return `(${this.x}, ${this.y})`; }
}
console.log(point.toString());

// The same result will be made
console.log(String(point));
