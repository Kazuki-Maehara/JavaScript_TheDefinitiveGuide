setTimeout(() => { console.log("go!"); }, 300);
setTimeout(() => { console.log("set..."); }, 200);
setTimeout(() => { console.log("Ready..."); }, 100);

// Once a second: clear the console and print the current time.
let clock = setInterval(() => {
  console.clear();
  console.log(new Date().toLocaleTimeString());
}, 1000);

// After 10 seconds: stop the repeating code above.
setTimeout(() => { clearInterval(clock); }, 10000);
