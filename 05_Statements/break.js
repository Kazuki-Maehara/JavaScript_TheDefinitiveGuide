let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 8;

for (let i = 0; i < a.length; i++) {
  if (a[i] === target) break;
  console.log(a[i]);
}


let matrix = [
  [1, 2, 3,],
  ["it is not a number", 5, 2, 2, 4,],
  [10, 10, 10,],
];

// Now sum all the numbers in the matrix.
let sum = 0, success = false;

// Start with a labeled statement that we can break out of if errors occur
computeSum: if (matrix) {
  for (let x = 0; x < matrix.length; x++) {
    let row = matrix[x];
    if (!row) break computeSum;
    for (let y = 0; y < row.length; y++){
      let cell = row[y];
      if (isNaN(cell)) break computeSum;
      sum += cell;
    }
  }
  success = true;
}

console.log(sum, success);

// The break statements jump here. If we arrive here with success == false
// then there was something wrong with the matrix we were given.
// Otherwise, sum contains the sum of all cells of the matrix.
