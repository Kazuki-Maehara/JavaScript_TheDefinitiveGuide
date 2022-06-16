function max(first=-Infinity, ...rest) {
  // Start by assuming the first arg is biggest
  let maxValue = first;

  for (let n of rest) {
    if (n > maxValue) {
      maxValue = n;
    }
  }
  // Return the biggest
  return maxValue;
}

let v = max(1 ,10, 1000, 12, -3, 5);
console.log(v);
