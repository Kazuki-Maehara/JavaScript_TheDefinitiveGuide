let a  = [1, 2, 3, 4, 5];

// the value 3 appears at index 2
console.log(a.findIndex(x => x === 3));

// no negative numbers in the array
console.log(a.findIndex(x => x < 0));

// this is a multiple of 5
console.log(a.find(x => x % 5 === 0));

// no multiples of 7 in the array
console.log(a.find(x => x % 7 === 0));
