let o = {s: "", n: 0, a: [true, false, null]};
let s = JSON.stringify(o);

let copy = JSON.parse(s);

console.log(copy);
