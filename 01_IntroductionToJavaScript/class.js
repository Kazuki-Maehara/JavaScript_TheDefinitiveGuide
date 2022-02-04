// By convention, class names are capitalized.
class Point {

  // Constructor function to initialize new instances.
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  // Method to compute distance from origin to point.
  distance() {
    return Math.sqrt(
      this.x * this.x +
      this.y * this.y
    );
  }
}

// Use the Point() constructor function with "new" to create Point objects.
let p = new Point(3, 4);
console.log(p.distance());
console.dir(p, {depth: 1});
