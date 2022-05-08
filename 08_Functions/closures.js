let scope = "global scope";

function checkscope() {
  let scope = "local scope";
  function f() { return scope; }
  return f();
}

console.log("Closure context: ", checkscope());
console.log("Global context: ", scope);


function checkscope2() {
  let scope = "local scope";
  function f() { return scope; }
  return f;
}


console.log("Closure context2: ", checkscope2()());
console.log("Global context: ", scope);
