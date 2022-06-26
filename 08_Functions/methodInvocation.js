
// An object literal
let calculator = {
  operand1: 1,
  operand2: 2,
  // We're using method shorthand syntax for this function.
  // Note the use of the this keyword to refer to the containing object.
  add() {
    this.result = this.operand1 + this.operand2;
  },
  add2() {
    this.result = this.result + 1;
  },
  add3() {
    this.result = this.operand1 + this.operand2;
  },
}

console.log(calculator.add());
console.log(calculator.result);
console.log(calculator.add2());
console.log(calculator.result);
console.log(calculator["add3"]());
console.log(calculator.result);
