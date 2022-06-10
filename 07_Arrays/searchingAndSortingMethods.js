let a = [0, 1, 2, 1, 0];

// a[1] is 1.
console.log(a.indexOf(1));

// a[3] is 1.
console.log(a.lastIndexOf(1));

// no element has value 3.
console.log(a.indexOf(3));


// Find all occurrences of a value x in an array a and return an array
// of matching indexes.
function findall(a, x) {
  let results = [],             // The array of indexes we'll return.
      len = a.length,           // The length of the array to be searched.
      pos = 0;                  // The position to search from.

  while (pos < len) {
    pos = a.indexOf(x, pos);    // While more elements is search...
    if (pos === -1) break;      // Search
    results.push(pos);          // Otherwise, store index in array.
    pos = pos + 1;              // And start next search at next element
  }

  return results;               // Return array of indexes.
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 5, 8];
let res = findall(arr, 5);
console.log(res);
