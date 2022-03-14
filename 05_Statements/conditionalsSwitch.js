let n = 2;


switch(n) {
  // Start here if n === 1
  case 1:
    console.log("Execute code block #1");
    break; // Stop here
  // Start here if n === 2
  case 2:
    console.log("Execute code block #2");
    break; // Stop here
  // Start here if n === 3
  case 3:
    console.log("Execute code block #3");
    break; // Stop here
  // If all else fails...
  default:
    console.log("Execute code block #4");
    break; // Stop here
}

function convert(x) {
  switch(typeof x) {
    case "number":
      return x.toString(16);
    case "string":
      return '"' + x + '"';
    default:
      return String(x);
  }
}

console.log(convert(15));
