/*
Variable scope - determines where variable can be accessed within the code.
Can be declared in different scopes:
Global
Local(function)
Block-level

Local(Function) scoped - variable only accessible within the function.
They are called local variables
function greet(){
    let message = "Hello"; - local variable
    console.log(message);
} 
greet();


Global scoped - can be accessed both inside and outside of a function.

let message = "Hello"; //- global variable
function greet(){
    console.log("Local:", message);
}
greet();
console.log("Global:", message);
If a variable is used without declaration, it becomes a global variable.


Blocked scope - accessible only within block they are in, could be smaller than function block.

function getScope(){
    let message = "Hello"; //- local variable

    if (true){
        let message = "Hi"; //- block-scoped(within if block) 
        console.log("Block-scoped:", message); //- inner scope
        }

    console.log("Local-scoped:", message) //- outer scope

}

getScope();