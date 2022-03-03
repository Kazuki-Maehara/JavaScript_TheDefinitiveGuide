let o = {x: 1, y:2, z:3};

let keys = "";
for (let k of Object.keys(o)) {
  keys += k;
}
console.log(keys);


let sum = 0;
for (let v of Object.values(o)) {
  sum += v;
}
console.log(sum);


let pairs = "";
for (let [k, v] of Object.entries(o)) {
  pairs += k + v;
}
console.log(pairs);
