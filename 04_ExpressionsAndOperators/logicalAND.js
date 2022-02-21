let x = 0;
let y = 0;
console.log(x === 0 && y === 0);

let o = {x: 2};
let p = null;

console.log(o && o.x);
console.log(p && p.x);

function invokedOrNot() {
  console.log("This function is invoked correctly.");
}

let a = "some string";
let b = "some string";
if (a === b) invokedOrNot();
(a === b) && invokedOrNot();
