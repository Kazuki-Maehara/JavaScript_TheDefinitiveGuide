// A generator function that yields a range of integers.

function* range(from, to) {
  for (let i = from; i <= to; i++) {
    yield i;
  }
}

let gen = range(1, 4);
for (let num of gen) {
  console.log(num);
}
