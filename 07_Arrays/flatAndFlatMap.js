let arr = [1, [2, 3]];
console.log(arr.flat());

let arr2 = [1, [2, [3]]];
console.log(arr2.flat());


let arr3 = [1, [2, [3, [4]]]];
console.log("THe original array: ", arr3);

console.log(arr3.flat(1));
console.log(arr3.flat(2));
console.log(arr3.flat(3));
console.log(arr3.flat(4));
