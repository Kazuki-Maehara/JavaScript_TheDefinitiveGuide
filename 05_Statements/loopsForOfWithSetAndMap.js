let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];

for (let word of wordSet) {
  unique.push(word);
}

console.log(unique);


let m = new Map([[1, "one"], [2, "two"], [3, "three"]]);
for (let [key, value] of m) {
  console.log(key, value);
}
