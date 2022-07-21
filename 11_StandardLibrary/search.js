let result = 0;

result = "JavaScript".search(/script/ui);

console.log(result);

result = "Python".search(/script/ui);
console.log(result);

result = "JavaScript is funny".search(/[Jj]ava[Ss]cript\sis\s(fun\w*)/ui);
console.log(result);
