// Return the largest prime smaller than n, using the sieve of Eratosthenes.

function sieve(n) {
  let a = new Uint8Array(n+1);
  let max = Math.floor(Math.sqrt(n));
  let p = 2;
  while( p <= max) {
    for (let i = 2*p; i <= n; i += p) {
      a[i] = 1;
      console.log("i: ",i , " p: ", p);
    }
    while(a[++p]) /* empty */;
  }

  while(a[n]) n--;
  return n;
}

console.log(sieve(25));
