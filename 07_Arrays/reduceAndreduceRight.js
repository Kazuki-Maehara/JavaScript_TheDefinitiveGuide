let a  = [1, 2, 3, 4, 5];

// the sum of the values
console.log(a.reduce((x, y) => x + y, 0));

// the product of the values
console.log(a.reduce((x, y) => x * y, 1));

// the largest of the values
console.log(a.reduce((x, y) => (x > y) ? x : y));


let a2 = [2, 3, 4];

// Compute 2^(3^4). Exponentiation has right-to-left precedence
console.log(a2.reduceRight((acc, val) => Math.pow(val, acc)));
