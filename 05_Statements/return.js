function square(x) { return x*x; }  // A function that has a return statement
console.log(square(2));


// let o = {x: 1, y: null, z: 3};
function displayObject(o) {
  // Return immediately if the argument is null or undefined.
  if (!o) return;

  console.log("This line would not be executed.")
}

let obj = null;
console.log(displayObject(obj));
