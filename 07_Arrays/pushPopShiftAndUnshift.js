let stack = [];
stack.push(1, 2);
console.log(stack);
stack.pop();
console.log(stack);
stack.push(3);
console.log(stack);
stack.pop();
console.log(stack);
stack.push([4, 5]);
console.log(stack);
stack.pop();
stack.pop();
console.log(stack);



let queue = [];
queue.push(1, 2);
console.log(queue);
queue.shift();
console.log(queue);
queue.push(3);
console.log(queue);
queue.shift();
queue.shift();
console.log(queue);


let arr = [];
arr.unshift(1);
arr.unshift(2);
console.log("\"arr\" is: ", arr);

arr =[];
arr.unshift(1, 2);
console.log("Now \"arr\" is: ", arr);
