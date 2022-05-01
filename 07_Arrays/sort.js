let a = ["banana", "cherry", "apple"];
a.sort();
console.log(a)

let arr = [33, 4, 1111, 222];
arr.sort();
console.log(arr);

arr.sort(function(a, b) {
  return a-b;
});
console.log(arr);

arr.sort((a, b) => b-a);
console.log(arr);


let arr2 = ["ant", "Bug", "cat", "Dog"];
arr2.sort();
console.log("Case-sensitive sort:");
console.log(arr2);

arr2.sort(function(s, t) {
  let a = s.toLowerCase();
  let b = t.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});
console.log("Case-insensitive sort:");
console.log(arr2);
