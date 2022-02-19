
let username = undefined;


if (username == null)
  username = "John Doe";

console.log(username);

let address = undefined;
if (!address) {
  address = "";
  message = "Please specify a mailing address.";
}
console.log(message);


let n = 10;

if (n == 1)
  console.log("You have 1 new message.");
else
  console.log(`You have ${n} new messages.`);


let i = j = 1;
let k = 2;
if (i === j)
  if (j === k)
    console.log("i equals k");
else
  console.log("i doesn't equal j");   // WRONG!!

if (i === j)
  if (j === k) {
    console.log("i equals k");
  } else {    // What a difference the location of a curly brace makes!
    console.log("i doesn't equal j");
  }
