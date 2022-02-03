let a = { b: null };

console.log(a.b?.c.d);

a = { b: {} };
console.log(a.b?.c?.d);


let x;
let index = 0;

try {
  console.log(x[index++]);
} catch(e) {
  console.log(index);
}
console.log(x?.[index++]);
console.log(index);
try{
  console.log(x[index++]);
} catch(e) {
  console.log('TypeError arose');
}
