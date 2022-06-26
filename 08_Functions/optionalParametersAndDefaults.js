// Append the names of the enumerable properties of object o to the
// array a, and return a. If a is omitted, create and return a new array.
function getPropertyNames(o, a) {
  // if undefined, use a new array.
  if ( a === undefined ) a =[];
  for (let property in o ) a.push(property);
  return a;
}

// getPropertyNames() can be invoked with one or two arguments:
let o = {x: 1}, p = {y:2, z: 3};
let a = getPropertyNames(o);
console.log(a);
let b = getPropertyNames(p, a);
console.log(b);
