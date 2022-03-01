let n = 2;

if (n === 1) {
  console.log("Execute code block #1");
} else if (n === 2) {
  console.log("Execute code block #2");
} else if (n === 3) {
  console.log("Execute code block #3");
} else {
  console.log("If all else fails, execute block #4");
}


if (n === 1) {
  console.log("Execute code block #1");
}
else {
  if (n === 2) {
    console.log("Execute code block #2");
  }
  else {
    if (n === 3) {
      console.log("Execute code block #3");
    }
    else {
      console.log("If all else fails, execute block #4");
    }
  }
}
