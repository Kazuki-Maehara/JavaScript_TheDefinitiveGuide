console.log(1234n, 0b111111n, 0o7777n, 0x0000000000000000n);

console.log(BigInt(Number.MAX_SAFE_INTEGER));

console.log(BigInt("1" + "0".repeat(100)));

console.log(1000n + 2000n);

console.log(2000n * 3000n);


console.log(3000n / 997n);
console.log(3000n % 997n);

console.log((2n ** 131071n) - 1n);


console.log(1 < 2n);
console.log(2 > 1n);
console.log(0 == 0n);
console.log(0 === 0n);
