book = {
	author: "kazuki",
	"main title": "JavaScript",
}

console.log(delete book.author);
console.log(delete book["main title"]);

console.log(delete book.author);
console.log(delete book["main title"]);


let o = {x: 1};
console.log(delete o.x);
console.log(delete o.x);
console.log(delete o.toString);
console.log(delete 1);

globalThis.x = 1;
console.log("deleting global variable: ", delete x);

