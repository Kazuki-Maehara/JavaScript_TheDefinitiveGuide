let splitted = "1, 2, 3,\n4, 5".split(/\s*,\s*/);

console.log(splitted);


let htmlTag = /<([^>]+)>/;
splitted = "Testing<br/>1,2,3,".split(htmlTag);
console.log(splitted);
