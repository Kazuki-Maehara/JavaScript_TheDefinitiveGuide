// Note that the assignDescriptors property is added to Object with
// Object.defineProperty() so that the new fnction can be created as
// a non-enumerable property like Object.assign().
Object.defineProperty(Object, "assignDescriptors", {
  // Match the attributes of Object.assign()
  writable: true,
  enumerable: false,
  configurable: true,
  // The function that is the value of the assignDescriptors property.
  value: function(target, ...sources) {
    for (let source of sources) {
      for (let name of Object.getOwnPropertyNames(source)) {
        let desc = Object.getOwnPropertyDescriptor(source, name);
        Object.defineProperty(target, name, desc);
      }

      for (let symbol of Object.getOwnPropertySymbols(source)) {
        let desc = Object.getOwnPropertyDescriptor(source, symbol);
        Object.defineProperty(target, symbol, desc);
      }
    }
    return target;
  }
});

let o = {c: 1, get count()  {return this.c++; }};
let p = Object.assign({}, o);
let q = Object.assignDescriptors({}, o);
console.log(p.count);
console.log(p.count);
console.log(q.count);
console.log(q.count);
