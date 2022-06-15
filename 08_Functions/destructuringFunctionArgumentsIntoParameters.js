function vectorAdd(v1, v2) {
  return [v1[0] + v2[0], v1[1] + v2[1]];
}

let output = vectorAdd([1, 2], [3, 4]);
console.log(output);


// Unpack 2 arguments into 4 parameters.
function vectorAdd2([x1, y1], [x2, y2]) {
  return [x1 + x2, y1 + y2];
}

output = vectorAdd2([1, 2], [3, 4]);
console.log(output);

// Multiply the vector {x, y} by a scalar value.
function vectorMultiply({x, y}, scalar) {
  return { x: x*scalar, y: y*scalar };
}

output = vectorMultiply({x: 1, y: 2}, 2);
console.log(output);

function vectorAdd3(
  {x: x1, y: y1},
  {x: x2, y: y2},
) {
  return {x: x1 + x2, y: y1 + y2};
}

output = vectorAdd3({x: 1, y: 2}, {x: 1, y: 2});
console.log(output);

// Multiply the vector {x, y} or {x, y, z} by a scalar value.
function vectorMultiply2({x, y, z=0}, scalar) {
  return { x: x*scalar, y: y*scalar, z: z*scalar};
}

output = vectorMultiply2({x: 1, y: 2}, 2);
console.log(output);


function arraycopy({from, to=from, n=from.length, fromIndex=0, toIndex=0}) {
  let valuesToCopy = from.slice(fromIndex, fromIndex + n);
  to.splice(toIndex, 0, ...valuesToCopy);
  return to;
}

let a = [1, 2, 3, 4, 5], b = [9, 8, 7, 6, 5];
output = arraycopy({from: a, n: 3, to: b, toIndex: 4});
console.log(output);


// This function expects an array argument. The first two elements of that
// array are unpacked into the x and y parameters. Any remaining elemtns
// are stored in the coords array. And any arguments after the first array
// are packed into the rest array.
function f([x, y, ...coords], ...rest) {
  // Spread operator here.
  return [x+y, ...rest, ...coords];
}

output = f([1, 2, 3, 4], 5, 6);
console.log(output);


// Multiply the vector {x, y} or {x, y, z} by a scalar value, retain other props.
function vectorMultiply3({x, y, z=0, ...props}, scalar) {
  return { x: x*scalar, y: y*scalar, z: z*scalar, ...props };
}

output = vectorMultiply3({x: 1, y: 2, w: -1}, 2);
console.log(output);
