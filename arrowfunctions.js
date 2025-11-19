/* 
concise syntax for writing function expressions.
before: 
        let variable = function(parameters){
            body of function
        }
        variable()

after:
        let variable = (parameters) => {
                body of function
            }
        variable()
*/

//before
const addsAndLogs = function(a, b, c){
    return a + b + c;
}
console.log(addsAndLogs(1, 2, 3));

//after
const addAndLog = (a, b, c) => {
    return a + b + c; 
}
console.log(addAndLog(1, 2, 3));

//With no arguments
//before 
let greet = function(){
    return "Hello, World"
}
console.log(greet());

//after 
let greets = () => "Hello, World";
console.log(greets());

//With one argument
//before 
let giveSquare = function(x){
    return x * x;
}
console.log(giveSquare(5));

//after(no need for parenthesis)
let printSquare = x => x * x;
console.log(printSquare(5));

/* 
DO NOT list with arrow functions:
1. Use arrow functions to create methods in objects.
2. Use them as constructors.
*/

//function to find square root of a given number
let sqroot = y => Math.sqrt(y);
console.log(sqroot(16));