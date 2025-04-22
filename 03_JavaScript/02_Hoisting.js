// Due to Memory Creation phase of Global Execution context, we can see the the body of function
console.log(runFn);

let x = 2;
var y = 3;

function runFn(num) {
  console.log(`Hi from function, num : ${num}`);
}

runFn(10);
console.log(`Value of x: ${x}`);
console.log(`Value of y: ${y}`);

// runFn(10) has popped from stack, but again new local execution context created for runFn(8)
console.log(runFn(8));

// Hoisting for var and let
console.log(`value of a: ${a}`);
// console.log(`value of b: ${b}`);  // throws an error
// console.log(`value of c: ${c}`); // throws an error

var a = "Hey";
let b = "Hello";
const c = "namaste";
