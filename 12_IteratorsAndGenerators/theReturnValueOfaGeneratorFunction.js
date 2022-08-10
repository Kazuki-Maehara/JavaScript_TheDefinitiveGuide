function* oneAndDone() {
  yield 1;
  return "done";
}

// The return value does not appear in normal iteration.
let result = [...oneAndDone()];
console.log(result);


// But it is available if you explicitly call next().
let generator = oneAndDone();
console.log(generator.next());
console.log(generator.next());
// If the generator is already done, the return value is not returned again.
console.log(generator.next());
