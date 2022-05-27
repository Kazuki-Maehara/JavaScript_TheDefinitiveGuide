let a = {};

// Add properties to make it "array-like"
let i = 0;
while (i < 10) {
  a[i] = i * i;
  i++;
}
a.length = i;


// Now iterate through it as if it were a real array.
let total = 0;
for (let j = 0; j < a.length; j++) {
  total += a[j];
}

console.log(total);

let arrayLike = {
    "0": "a",
    "1": "b",
    "2": "c",
    length: 3
};

console.log(Array.prototype.join.call(arrayLike, "+"));
console.log(Array.prototype.map.call(arrayLike, x => x.toUpperCase()));
console.log(Array.prototype.slice.call(arrayLike, 0));
console.log(Array.from(arrayLike));


let s = "test";
console.log(s.charAt(0));
console.log(s[1]);

console.log(Array.prototype.join.call("JavaScript", " "));
