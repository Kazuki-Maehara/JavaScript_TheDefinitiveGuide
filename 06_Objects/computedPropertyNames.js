const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }

let o = {};
o[PROPERTY_NAME] = 1;
o[computePropertyName()] = 2;


console.log("o.p1 + o.p2")
console.log(o.p1 + o.p2);

let p = {
  [PROPERTY_NAME]: 3,
  [computePropertyName()]: 4,
};

console.log("p.p1 + p.p2")
console.log(p.p1 + p.p2);
