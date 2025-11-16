/* 
Hoisting - behaviour in which a function or variable can be used before declaration.
Types: Variable hoisting
       Function hoisting

When hoisting using var, value is undefined by default.

console.log(message)
var message;


When hoisting with let or const, there is no default value.

console.log(message)
let message = "Hi!";

Function hoisting
greetUser();

function greetUser(){
    console.log("Hey");
}

