let [x, y] = [1, 2];
[x, y] = [x + 1, y + 1];
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);

// Convert [x, y] coordinates to [r, theta] polar coordinates
function toPollar(x, y) {
  return [Math.sqrt(x*x + y*y), Math.atan2(y, x)];
}

// Convert polar to Cartesian coordinates
function toCartesian(r, theta) {
  return [Math.round(r * Math.cos(theta)), Math.round(r * Math.sin(theta))];
}

let [r, theta] = toPollar(1.0, 1.0);
[x, y] = toCartesian(r, theta);
console.log(x, y);

let o = { x: 1, y: 2 };
for(const [name, value] of Object.entries(o)) {
  console.log(name, value);
}

[x, y] = [1];
console.log(x, y);
[x, y] = [1, 2, 3];
console.log(x, y);
[,x,,y] = [1, 2, 3, 4];
console.log(x, y);

[x, ...y] = [1, 2, 3, 4,];
console.log(x, y);

let [a, [b, c]] = [1, [2, 2.5], 3];
console.log(a, b, c);

let [first, ...rest] = "Hello";
console.log(first, rest);

transparent = { R: 0.0, G: 0.0, B: 0.0, A: 1.0 };
let {R, G, B} = transparent;
console.log(R, G, B);

const { cos: cosine, sin: sine } = Math;
console.log(sine(Math.PI/2));
console.log(cosine(0));
// console.log(Math.round(tan(Math.PI/4)));

let points = [{x: 1, y: 2}, {x: 3, y:4}];
let [{x: x1, y: y1}, {x: x2, y: y2}] = points;
console.log(x1 === 1 && y1 == 2 && x2 === 3 && y2 ===4);

points = {p1: [1, 2], p2: [3, 4]};
let {p1: [i1, j1], p2: [i2, j2]} = points;
console.log(i1 === 1 && j1 == 2 && i2 === 3 && j2 ===4);
