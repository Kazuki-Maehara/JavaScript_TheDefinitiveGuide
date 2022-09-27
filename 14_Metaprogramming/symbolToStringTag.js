console.log({}.toString());

let print = console.log;

print(Object.prototype.toString.call([]));
print(Object.prototype.toString.call(/./));
print(Object.prototype.toString.call(() => {}));
print(Object.prototype.toString.call(""));
print(Object.prototype.toString.call(0));
print(Object.prototype.toString.call(false));


function classof(o) {
  return Object.prototype.toString.call(o).slice(8, -1);
}

print(classof(null));
print(undefined);
print(1);
print(10n**100n);
print("");
print(false);
print(Symbol());
print({});
print([]);
print(/./);
print(() => {});
print(new Map());
print(new Set());
print(new Date());


class Range {
  get [Symbol.toStringTag]() { return "Range"; }
}

let r = new Range();
Object.prototype.toString.call(r);
print(classof(r));
