//ES6 allows for default provision of values for function parameters.
//They are called when the function is called. No need to pass arguments.
//Example

//Default params
let sum = (x = 4, y = 5,) => x + y;
console.log(sum());

//when we pass an argument to x and y
let result = sum(10, 3);
console.log(result);

//when we pass an argument to one param(x)
let anotherResult = sum(7);
console.log(anotherResult);

//can pass one param as a default of another
let add = (x = 1, y = x, z = y + x) => x + y + z;
console.log(add());
