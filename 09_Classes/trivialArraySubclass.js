// A trivial Array subclass that adds getters for the first and last elements.
class EZArray extends Array {
  get first() { return this[0]; }
  get last() { return this[this.length - 1]; }
}

let a = new EZArray();
console.log(a);
let result;
result = a instanceof EZArray;
console.log(result);

result = a instanceof Array;
console.log(result);

a.push(1, 2, 3, 4,);
console.log(a);
console.log("Popped: ", a.pop());

console.log("First: ", a.first);
console.log("Last: ", a.last);

console.log(Array.isArray(a));
console.log(EZArray.isArray(a));


console.log(Array);
console.log(EZArray.constructor);
