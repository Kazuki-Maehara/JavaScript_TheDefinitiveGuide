let a = [5, 4, 3, 2, 1];

// values less tahn 3
console.log(a.filter(x => x < 3));

// every other value
console.log(a.filter((x, i) => i % 2 === 0));
