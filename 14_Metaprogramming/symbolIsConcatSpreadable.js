let arraylike = {
  length: 1,
  0: 1,
  [Symbol.isConcatSpreadable]: true
};

console.log([].concat(arraylike));


class NonSpreadableArray extends Array {
  get [Symbol.isConcatSpreadable]() { return false; }
}
let a = new NonSpreadableArray(1, 2, 3);
console.log([].concat(a).length);
