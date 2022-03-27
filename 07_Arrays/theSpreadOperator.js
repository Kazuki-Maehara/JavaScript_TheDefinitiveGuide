let a =[1, 2, 3];
let b = [0, ...a, 4];
console.log(b);

let original = [1, 2, 3];
let copy = [...original];
copy[0] = "changed";
console.log(original[0]);

let digits = [...'0123456789ABCDEF'];
console.log(digits);

let letters = [..."hello world"];
distinct_letters = [...new Set(letters)];
console.log(distinct_letters);
