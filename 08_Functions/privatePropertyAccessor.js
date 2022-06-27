function addPrivateProperty(o, name, predicate) {
  // This is the property value.
  let value;

  // The getter method simply returns the value.
  o[`get${name}`] = function() { return value; };

  // The setter method stores the value or throws an exception if
  // the predicate rejects the value.
  o[`set${name}`] = function(v) {
    if (predicate && !predicate(v)) {
      throw new TypeError(`set${name}: invalid value ${v}`)
    } else {
      value = v;
    }
  };
}

// The following code demonstrates the addPrivateProperty() method.
// Here is an empty object.
let o = {};

// Add property accessor methods getName and setName()
// Ensure that only string values are allowed.
addPrivateProperty(o, "Name", x => typeof x === "string");


// Set the property value.
o.setName("Frank");

console.log(o.getName());

// Raise ERROR
// o.setName(0);
