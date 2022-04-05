
let o = { x: 1, y:2, z:3 };
o.propertyIsEnumerable("toString");


console.log(" ----- Normal for-in loop. -----")
for (let p in o) {
  console.log(p);
}


console.log(" ----- Skip inherited properties. -----")
for (let p in o) {
  if (!o.hasOwnProperty(p)) continue;
  console.log(p);
}


console.log(" ----- Skip all methods. -----")
for (let p in o) {
  if (typeof o[p] === "function") continue;
  console.log(p);
}
