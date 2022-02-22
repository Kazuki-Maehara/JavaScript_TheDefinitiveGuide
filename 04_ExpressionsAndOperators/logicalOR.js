// If maxWidth is truthy, use that. Otherwise, look for a value in
// the preferences object. If that is not truethy, use a hardcoded constant.
let maxWidth = null;
let preferences = {};
preferences.maxWidth = null;
let max = maxWidth || preferences.maxWidth || 500;
console.log(max);



let p = 1;
let q = 0;
// DeMorgan's Laws
console.log(
  !(p && q) === (!p || !q)
)
console.log(
  !(p || q) === (!p && !q)
)
