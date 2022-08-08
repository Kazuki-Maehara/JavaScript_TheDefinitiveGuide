let iterable = [99];

let iterator = iterable[Symbol.iterator]();
for (let result = iterator.next(); !result.done; result = iterator.next()) {
  console.log(result.value);
}


let list = [1, 2, 3, 4, 5, ];
let iter = list[Symbol.iterator]();
let head = iter.next().value;
let tail = [...iter];

console.log(head);
console.log(tail);
