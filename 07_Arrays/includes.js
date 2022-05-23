let a = [1, true, 3, NaN];

// true
console.log(a.includes(true));

// false
console.log(a.includes(2));

// true
console.log(a.includes(NaN));

// indexOf can't find NaN
console.log(a.indexOf(NaN));
