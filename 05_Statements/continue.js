let data = [1, 2, 3, null, 4, undefined, 5];
let total = 0;

for (let i = 0; i < data.length; i++) {
  if (!data[i]) continue;
  total += data[i];
}

console.log(total);
