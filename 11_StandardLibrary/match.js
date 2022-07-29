// A very simple URL parsing RegExp

let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
let text = "Visit my blog at http://www.example.com/~david";
let match = text.match(url);
let fullurl, protocol, host, path;

if (match !== null) {
  fullurl = match[0];
  protocol = match[1];
  host = match[2];
  path = match[3];
}

console.log(
  "Full URL:", fullurl,
  "Protocol:", protocol,
  "Host:", host,
  "Path:", path,
);


url = /(?<protocol>\w+):\/\/(?<host>[\w.]+)\/(?<path>\S*)/;
match = text.match(url);

console.log(
  "Full URL:", fullurl,
  "Protocol:", protocol,
  "Host:", host,
  "Path:", path,
);


let vowel = /[aeiou]/y;
console.log("test".match(vowel));
console.log(vowel.lastIndex);
vowel.lastIndex = 1;

console.log("test".match(vowel)[0]);
console.log(vowel.lastIndex);

console.log("test".match(vowel));
console.log(vowel.lastIndex);
