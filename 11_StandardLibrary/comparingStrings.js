// A basic comparator for sorting in the user's locale.
// Never sort human-readable strings without passing something like this:
const collator = new Intl.Collator().compare;
let result = ["a", "z", "A", "Z"].sort(collator);
console.log(result);


// Filenames often include numbers, so we should sort those specially
const filenameOrder =  new Intl.Collator(undefined, { numeric: true}).compare;
result = ["page10", "page9"].sort(filenameOrder);
console.log(result);


// Find all strings that loosely match a target string.
const fuzzyMatcher = new Intl.Collator(undefined, {
  sensitivity: "base",
  ignorePunctuation: true
}).compare;
let strings = ["food", "fool", "Foo Bar"];
result = strings.findIndex(s => fuzzyMatcher(s, "foobar") === 0);
console.log(result);


// Before 1994, CH and LL were treated as separate letters in Spain.
const modernSpanish = Intl.Collator("es-ES").compare;
const traditionalSpanish = Intl.Collator("es-ES-u-co-trad").compare;
let palabras = ["luz", "llama", "como", "chico"];
result = palabras.sort(modernSpanish);
console.log(result);

result = palabras.sort(traditionalSpanish);
console.log(result);
