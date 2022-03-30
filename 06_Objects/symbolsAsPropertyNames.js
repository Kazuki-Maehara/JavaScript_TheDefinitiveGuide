const extension = Symbol("my extension symbol");
let o = {
  [extension]: { /* extension data stored in this object */ },
};

console.log("This expression, o[extension].x, won't conflict with other properties of \"o\".")
o[extension].x = "Something!";
console.log(o[extension].x);
