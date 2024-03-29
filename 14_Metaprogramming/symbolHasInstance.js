// Define an object as a "type" we can use with instanceof
let uint8 = {
  [Symbol.hasInstance](x) {
    return Number.isInteger(x) && x >= 0 && x <= 255;
  }
};

console.log(128 instanceof uint8);
console.log(256 instanceof uint8);
console.log(Math.PI instanceof uint8);
