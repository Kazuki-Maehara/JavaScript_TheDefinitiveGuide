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


let uniqueInteger = (function() {
  let counter = 0;
  return function() { return counter++;  }
}());
console.log(uniqueInteger());
console.log(uniqueInteger());
console.log(uniqueInteger());

console.log("---- counter() -----");
function counter() {
  let n = 0;
  return {
    count: function() { return n++ },
    reset: function() { n = 0; },
  };
}

let c = counter(), d = counter();
console.log("c.count()");
console.log(c.count());
console.log("d.count()");
console.log(d.count());
console.log("c.reset()");
c.reset();
console.log("c.count()");
console.log(c.count());
console.log("d.count()");
console.log(d.count());
console.log("d was not reset!");


console.log("----- counter2() -----");
function counter2(n) {
  return {
    // Property getter method returns and increments private counter var.
    get count() { return n++; },
    // Property setter doesn't allow the value of n to decrease.
    set count(m) {
      if (m > n) n = m;
      else throw Error("count can only be set to a large value");
    }
  };
}

c = counter2(1000);
console.log(c.count);
console.log(c.count);
c.count = 2000;
console.log(c.count);
console.log("Error: count can only be set to a larger value");
c.count = 2000;
