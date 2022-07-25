let now = new Date();

console.log(now);


let epoch = new Date(0);
console.log(epoch);


let century = new Date(
  2100,
  0,
  1,
  2, 3, 4, 5,
);

console.log(century);

century = new Date(Date.UTC(2100, 0, 1));
console.log(century);


let d = new Date();
d.setFullYear(d.getFullYear() + 1);
console.log(d);
