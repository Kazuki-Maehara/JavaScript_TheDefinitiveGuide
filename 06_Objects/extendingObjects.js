let target = {x: 1}, source = {y: 2, z: 3};
for (let key of Object.keys(source)) {
  target[key] = source[key];
}

console.log(target);
let temp = {};
for (let key of Object.keys(target)) {
  temp[key] = target[key];
}
let o = target;
let defaults = {x: "a", y: "b", z: "c" };
o = Object.assign(o, defaults);
console.log(" ----- o = Object.assign(o, defaults) ----- ");
console.log(o);

o = temp;

o = Object.assign({}, defaults, o);
console.log(" ----- o = Object.assign({}, defaults, o) ---- ");
console.log(o);

o = {...defaults, ...o};
console.log(" ----- o = {...defaults, ...o} ----- ");
console.log(o);
