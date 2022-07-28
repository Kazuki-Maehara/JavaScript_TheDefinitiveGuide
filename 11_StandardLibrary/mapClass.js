let m = new Map();
let n = new Map([
  ["one", 1],
  ["two", 2],
]);

console.log(m);
console.log(n);


let result = 0;
result = m.size;
console.log(result);

m.set("one", 1);
m.set("two", 2);
console.log(m.size);
m.set("one", true);

console.log(m.get("two"));
console.log(m.get("three"));

console.log(m.has("one"));

console.log(m.has(true));

console.log(delete("one"));

console.log(m);

console.log(m.delete("three"));
m.clear();
console.log(m);

n.set("three", 3).set("four", 4).set("five", 5);
console.log(n);

let k = new Map();
k.set({}, 1);
k.set({}, 2);
console.log(m);

console.log(m.get({}));
m.set(m, undefined);
console.log(m.has(m));
console.log(m.get(m));

console.log([...n]);
console.log([...n.keys()]);
console.log([...n.values()]);
console.log([...n.entries()]);
