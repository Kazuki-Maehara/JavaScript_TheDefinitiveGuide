// An array of letters.
let letters = [..."Hello world"];
let string = "";
for (let letter of letters) {
  string += letter;
}
// We reassembled the original text
console.log(string);


let everyother = "";
for (let [index, letter] of letters.entries()) {
  // letters at even indexes
  if (index % 2 === 0) everyother += letter;
}
console.log(everyother);


let uppercase = "";
// Note arrow function syntax here.
letters.forEach(letter => {
  uppercase += letter.toUpperCase();
});
console.log(uppercase);

let voewls = "";
// For each index in the array.
for (let i=0; i < letters.length; i++) {
  // Get the element at that index.
  let letter  = letters[i];
  // Use a regular expression test.
  if(/[aeiou]/.test(letter)) {
    // If it is a voewl, remember it.
    voewls += letter;
  }
}

console.log(voewls);
