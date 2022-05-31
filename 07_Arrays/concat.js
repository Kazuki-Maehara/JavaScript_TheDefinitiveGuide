let arr = [1, 2, 3];

console.log(arr.concat(4, 5));

// arrays are flattened
console.log(arr.concat([4, 5], [6, 7]));

// but not nested arrays
console.log(arr.concat(4, [5, [6, 7]]));

// the original array is unmodified
console.log(arr);
