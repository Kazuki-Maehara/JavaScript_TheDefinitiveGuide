function* smallNumbers() {
  console.log("next() invoked the first time; argument discarded");
  let y1 = yield 1;
  console.log("next() invoked a second time with argument", y1);
  let y2 = yield 2;
  console.log("next() invoked a third time with argument", y2);
  let y3 = yield 3;
  console.log("next() invoked a fourth time with argument", y3);
  return 4;
}

let g = smallNumbers();
console.log("generator created; nocode runs yet");
let n1 = g.next("a");
console.log("generator yielded", n1.value)
let n2 = g.next("b");
console.log("generator yielded", n2.value)
let n3 = g.next("c");
console.log("generator yielded", n3.value)
let n4 = g.next("d");
console.log("generator returned", n4.value)
