let t = {
  x: 1,
  y: 2
};
let p = new Proxy(t, {});
console.log(p.x);
delete p.y;

console.log(t.y);
p.z = 3;
console.log(t.z);


function accessTheDatabase() {
  return 42;
}
let {
  proxy,
  revoke
} = Proxy.revocable(accessTheDatabase, {});
console.log(proxy());
revoke();

try {
  console.log(proxy());
} catch (err) {
  console.log(err.name + ":" + err.message);
}
