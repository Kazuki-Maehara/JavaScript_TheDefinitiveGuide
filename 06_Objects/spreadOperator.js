let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };
let rect = { ...position, ...dimensions };

console.log(rect.x + rect.y + rect.width + rect.height);

let o = { x: 1 };
let p = { x: 0, ...o };
console.log("The value from object o overrides the initial value:")
console.log(p.x)

let q = { ...o, x: 2 };
console.log("The value 2 overrides the previous value from o.")
console.log(q.x)

o = Object.create({ x: 1 });
p = { ...o };
console.log("\"o\" inherits the property \"x\"");
console.log(p.x);
