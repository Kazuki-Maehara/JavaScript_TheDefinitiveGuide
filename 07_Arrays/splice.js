let a = [1, 2, 3, 4, 5, 6, 7, 8, ];

console.log(a.splice(4));
console.log(a.splice(1, 2));
console.log(a.splice(1, 1));

a = [1, 2, 3, 4, 5, ];
console.log(a.splice(2, 0, "a", "b", ));
console.log(a.splice(2, 2, [1, 2], 3, ));
console.log(a);
