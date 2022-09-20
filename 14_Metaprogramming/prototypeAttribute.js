Object.getPrototypeOf({});
Object.getPrototypeOf([]);
Object.getPrototypeOf(() => {});


let p = {x: 1};
let o = Object.create(p);
console.log(p.isPrototypeOf(o));
console.log(Object.prototype.isPrototypeOf(p));
console.log(Object.prototype.isPrototypeOf(o));

o = {x: 1};
p = {y: 2};
Object.setPrototypeOf(o, p);
console.log(o.y);
let a = [1, 2, 3];
Object.setPrototypeOf(a, p);
console.log(a.join);

p = {z: 3};
o = {
  x: 1,
  y: 2,
  __proto__: p
};
console.log(o.z);
