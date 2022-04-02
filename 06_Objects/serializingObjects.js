
let o = {x: 1, y: {z: [false, null, ""]}};

let s = JSON.stringify(o);
console.log(s);


let p = JSON.parse(s);
console.log(p);
