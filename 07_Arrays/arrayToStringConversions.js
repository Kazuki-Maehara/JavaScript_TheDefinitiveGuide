let a = [1, 2, 3];
console.log(a.join());
console.log(a.join(" "));
console.log(a.join(""));

// An array of length 10 with no elements
let b = new Array(10);
// Next line will create a string of 9 hyphens.
console.log(b.join("-"));

console.log(Array.isArray([]));
console.log(Array.isArray({}));
