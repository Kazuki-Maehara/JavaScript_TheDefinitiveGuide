let y = 3;

function plus1(x) {
  return x + 1;
}

console.log(plus1(y))


let square = function(x) {
  return x * x;
};

console.log(square(y))

plus1 = x => x + 1;
square = x => x * x;
console.log(plus1(y))
console.log(square(y))

let a = [];
a.push(1, 2, 3);
console.log(a.reverse());


let points =[
  {x:0, y:0},
  {x:4, y:3},
];

points.dist = function() {
  let p1 = this[0];
  let p2 = this[1];
  let a = p2.x - p1.x;
  let b = p2.y - p1.y;
  return Math.sqrt(a*a + b*b);
};

console.log(points.dist());
