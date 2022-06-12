// Return the sum of the elemtns of an iterable object a.
// The elements of a must all be numbers.
function sum(a) {
  let total = 0;
  // Throws TypeError if a is not iterable.
  for(let element of a) {
    if (typeof element !== "number") {
      throw new TypeError("sum(): elements must be numbers");
    }
    total += element;
  }
  return total;
}

let output;
output = sum([1, 2, 3,]);
console.log(output);

// !TypeError: 1 is not iterable.
// output = sum(1, 2, 3,);

// !TypeError: element 2 is not a number.
// sum([1, 2, "3",]);
