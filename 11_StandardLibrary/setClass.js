let s = new Set();

console.log(s.size);
console.log(s.add(1));
console.log(s.add(1));
console.log(true);
console.log(s.size);
console.log(s.add([1, 2, 3,]));

console.log(s.delete(1));

console.log(s.delete("test"));

console.log(s.size);
console.log(s.clear());
console.log(s.size);

let oneDigitPrimes = new Set([2, 3, 5, 7]);
let result = oneDigitPrimes.has(2);
console.log(result);

result = oneDigitPrimes.has(4);
console.log(result);

result = oneDigitPrimes.has("5");
console.log(result);

let sum = 0;
for (let p of oneDigitPrimes) {
  sum += p;
}
console.log(sum);

let product = 1;
oneDigitPrimes.forEach( n => { product *= n; });
console.log(product);
