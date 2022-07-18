// Import the entire status object, with all of its functions.
const stats = require('./nodeExports.js');

let data = [1, 3, 5, 7, 9,];

// We've got more functions than we need, but they're neatly.
// organized into a convenient 'stats'namespace.
let average = stats.mean(data);
console.log(average);


// Alternatively, we can use idiomatic destructuring assignment to import
// exactly the functions we want directly into the local namespace:
const { stddev } = require('./nodeExports');


// This is nice and succince, though we lose a bit of context
// without the 'stats' prefix as a namespace for the stddev() function.
let sd = stddev(data);
console.log(sd);
