let o = {
  m: function() {
    let self = this;
    console.log("Now method o.m() is running: ")
    console.log("\t", this === o);
    f();

    function f() {
      console.log("Function f() is running: ")
      console.log("\t", this === o);
      console.log("\t", self === o);
    }
  },
};

o.m();
