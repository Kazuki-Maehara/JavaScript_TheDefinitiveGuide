let sum = 0;
for (let i of [1, 2, 3,]) {
  sum += i;
}
console.log(sum);


let chars = [..."abcd"];
let data = [1, 2, 3, 4, 5,];
console.log(Math.max(data));

console.log(chars);


let purpleHaze = Uint8Array.of(255, 0, 255, 128);
let [r, g, b, a] = purpleHaze;
console.log(r, g, b, a);


let m = new Map([["one", 1], ["two", 2]]);
for (let [k, v] of m) console.log(k, v);

console.log([...m]);
console.log([...m.entries()]);
console.log([...m.keys()]);
console.log([...m.values()]);
