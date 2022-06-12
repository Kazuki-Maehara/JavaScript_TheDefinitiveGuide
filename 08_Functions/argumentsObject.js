function max() {
  // Start by assuming the first arg is biggest
  let maxValue = -Infinity;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxValue) maxValue = arguments[i];
  }
  // Return the biggest
  return maxValue;
}

let v = max(1 ,10, 1000, 12, -3, 5, 12345);
console.log(v);
