function printArray(a) {
  let len = a.length
  if (len === 0) {
    console.log("This is an empty array.");
  } else {
    let i = 0;
    do{
      console.log(a[i]);
    } while (++i < len);
  }
}

function main() {
  let arr = ['el_1', 2, "element_3", "element four"];
  printArray(arr);
}

main();
