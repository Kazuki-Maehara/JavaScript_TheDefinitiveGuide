class Glob {
  constructor(glob) {
    this.glob = glob;


    // We implement glob matching using RegExp internally.
    // ? matches any one character except /, and * matches zero or more
    // of those characters. We use capturing groups around each.
    let regexpText =  glob.replace("?", "([^/])").replace("*", "([^/]*)");

    // We use the u flag to get Unicode-aware matching.
    // Globs are intended to match entire strings, so we use the ^ and $
    // anchors and do not implement search() or matchAll() since they
    // are not useful with patterns like this.
    this.regexp = new RegExp(`^${regexpText}$`, "u");
  }

  toString() { return this.glob; }

  [Symbol.search](s) { return s.search(this.regexp); }
  [Symbol.match](s) { return s.match(this.regexp); }
  [Symbol.replace](s, replacement) {
    return s.replace(this.regexp, replacement);
  }
}

let pattern = new Glob("docs/*.txt");
console.log("docs/js.txt".search(pattern));
console.log("docs/js.html".search(pattern));
let match = "docs/js.txt".match(pattern);
console.log(match[0]);
console.log(match[1]);
console.log(match.index);

console.log("docs/js.txt".replace(pattern, "web/$1.html"));
