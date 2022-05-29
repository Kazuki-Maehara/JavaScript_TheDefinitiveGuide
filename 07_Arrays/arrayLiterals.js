// An array with no elements.
let empty = [];
console.log(empty);

// An array with 5 numeric elements.
let primes = [2, 3, 5, 7, 11];
console.log(primes);

// 3 elements of various types and trailling comma.
let misc = [1.1, true, "a",];
console.log(misc);

// The value in an array literal need not be constants; they may be arbitrary expressions.
let base = 1024;
let table = [base+0,base+1,base+2,base+3,];
console.log(table);

let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];
console.log(b);

// Elements at indexes 0 and 2. No element at index 1.
let count = [1, ,3];
console.log(count);

// An array with no elements but a length of 2.
// Array literal syntax allows an optional trailing comma, so "[,,]" has a length of 2, not 3.
let undefs = [,,];
console.log(undefs.length);
