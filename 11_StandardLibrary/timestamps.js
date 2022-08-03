let d = new Date();


console.log(new Date());
d.setTime(d.getTime() + 30000);
console.log(d);

let startTime = Date.now();
// for (let i = 0; i < 10000000; i++) /* notiong */;
setTimeout(
  () =>{
    let endTime = Date.now();
    console.log(`Spline reticulation took ${endTime - startTime}ms.`);
  },
  3000,
);
