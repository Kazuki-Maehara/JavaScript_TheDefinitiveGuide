// Start with an empty array.
let a = [];
// And add element to it.
a[0] = "zero";

a[1] = "one";

console.log(a);
// Add a value at the end. a = ["two"]
a.push("two");
// And more.
a.push("three", "four");

console.log(a);


// a now has no element at index 2.
delete a[2];
// no array index 2 is defined.
console.log(2 in a);

// "delete" does not affect array length.
console.log(a.length);
console.log(a);
