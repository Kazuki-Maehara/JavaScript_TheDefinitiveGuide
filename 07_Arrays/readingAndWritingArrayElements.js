let a = ["world"];
let value = a[0];
a[1] = 3.14;
let i = 2;
a[i] = 3;
a[i + 1] = "hello";
a[a[i]] = a[0];
console.log(a);

console.log("Length: ", a.length);

// Create a plain object.
let o = {};
// Index it with an integer.
o[1] = "one";
// Numeric and string property names are teh same.
console.log(o["1"]);

// This creates a property named "-1.23".
a[-1.23] = true;
// This the 1001st elemtns of the array.
a["1000"] = 0;
a[1.000] = 1;

console.log(a);
console.log(a[17]);
console.log(a[-1]);
