let bytes = new Uint8Array(16);
let pattern = new Uint8Array([0, 1, 2, 3,]);

bytes.set(pattern);
console.log(bytes);
bytes.set(pattern, 4);
console.log(bytes);
bytes.set([0, 1, 2, 3,], 8);
console.log(bytes);
bytes.slice(0, 12);
console.log(bytes);

let ints = new Int16Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]);
let last3 = ints.subarray(ints.length-3, ints.length);
console.log(last3);

ints[9] = -1;
console.log(last3);

console.log(last3.buffer);
console.log(
  last3.buffer === ints.buffer
);

console.log(last3.byteOffset);
console.log(last3.byteLength);
console.log(last3.buffer.byteLength);


bytes = new Uint8Array(8);
bytes[0] = 16;
console.log(bytes.buffer[0]);
bytes.buffer[1] = 255;
console.log(bytes.buffer);

console.log(bytes[1]);


bytes = new Uint8Array(16);
ints = new Uint32Array(bytes.buffer);
let floats = new Float64Array(bytes.buffer);
console.log(bytes);
console.log(ints);
console.log(floats);
