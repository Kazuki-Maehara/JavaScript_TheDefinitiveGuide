// the array has no elements
console.log([].length);

// highest index is 2, length is 3
console.log(["a", "b", "c"].length);

// Start with a 5-element array.
a = [1, 2, 3, 4, 5];
// a is now [1, 2, 4]
a.length = 3;
console.log(a);

// Delete all elements. a is [].
a.length = 0;
console.log(a);

// Length is 5, but no elements, like new Array(5)
a.length = 5;
console.log(a);
