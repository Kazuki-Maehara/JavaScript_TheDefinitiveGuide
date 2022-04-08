let o = { x: 1 };

console.log("----- For \"in\" check -----");
console.log("x" in o);
console.log("y" in o);
console.log("toString" in o);


console.log("----- For \"hasOwnProperty\" check -----");
console.log(o.hasOwnProperty("x"));
console.log(o.hasOwnProperty("y"));
console.log(o.hasOwnProperty("toString"));


console.log("----- For \"propertyIsEnumerable\" check -----");
console.log(o.propertyIsEnumerable("x"));
console.log(o.propertyIsEnumerable("toString"));
console.log(Object.prototype.propertyIsEnumerable("toString"));



console.log("----- For \"!==\" check -----");
console.log(o.x !== undefined);
console.log(o.y !== undefined);
console.log(o.toString !== undefined);

o = { x: undefined };
console.log("o.x !== undefined: ", o.x !== undefined);
console.log("o.y !== undefined: ", o.y !== undefined);
console.log("\"x\" in o: ", "x" in o);
console.log("\"y\" in o: ", "y" in o);
console.log("delete o.x: "); delete o.x;
console.log("\"x\" in o: ", "x" in o);
