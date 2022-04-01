let square = {
  area: function() { return this.side * this.side },
  side: 10,
};
console.log(square.area());

let sh_square = {
  area() { return this.side * this.side },
  side: 100,
};
console.log(sh_square.area());

console.log("-------------------------------");

const METHOD_NAME = "m";
const symbol = Symbol();
let weirdMethods = {
  "method with spaces"(x) { return x + 1; },
  [METHOD_NAME](x) { return x + 2; },
  [symbol](x) { return x + 3; },
};

console.log(weirdMethods["method with spaces"](1));
console.log(weirdMethods[METHOD_NAME](1));
console.log(weirdMethods[symbol](1));
