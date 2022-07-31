// One or more Unicode alphabetic characters between word boundaries.
const words = /\b\p{Alphabetic}+\b/gu;
const text = "This is a naive test of the matchAll() method.";

for (let word of text.matchAll(words)) {
  console.log(`Found '${word[0]}' at index ${word.index}.`);
}
