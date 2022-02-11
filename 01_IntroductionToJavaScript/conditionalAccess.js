let book = {
  topic: "JavaScript",
  edition: 7,
};

console.log(book.topic);
console.log(book["edition"]);
console.log(book.author = "Flanagan");
console.log(book.contents = {});

console.log(book.contentx?.ch01?.sec01)
// console.log(book.contentx.ch01.sec01)

let primes = [2, 3, 5, 999];
console.log(primes[0]);
console.log(primes.length)
console.log(primes[primes.length - 1])
