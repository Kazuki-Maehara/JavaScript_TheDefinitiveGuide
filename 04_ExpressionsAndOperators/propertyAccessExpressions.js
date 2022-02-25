let o = {x: 1, y: {z: 3}};
let a = [o, 4, [5, 6]];

console.log(o.x);
console.log(o.y.z);
console.log(o["x"]);
console.log(a[1]);
console.log(a[2]["1"]);
console.log(a[0].x)
