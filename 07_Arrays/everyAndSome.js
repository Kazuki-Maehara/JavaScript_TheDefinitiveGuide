let a  = [1, 2, 3, 4, 5];

// all values are < 10
console.log(a.every(x => x <10));

// not all values are even
console.log(a.every(x => x % 2 === 0));

// a has some even numbers
console.log(a.some(x => x % 2 === 0));

// a has no non-numbers
console.log(a.some(x => isNaN(x)));
