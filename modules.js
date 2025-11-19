/*
Modules - files that contain code to perform a specific task.
You can only access exported functions, objects etc from the module.
To import functions, objects etc from a module, they need to be wrapped around '{}'.
You can import multiple objects as well.
Modules always use strict mode.
*/

//Importing multiple objects
import {greetUser, age} from "./greet.js"

let displayName = greetUser("Nesta");
console.log(displayName);
console.log("You're getting closer to", age );

/* 
Renaming in the module(export file)
export {
    function1 as newName1,
    function2 as newName2,
};
When you want to import the newly named function, 
import {newName1, newName2} from "filepath".
*/
import {newGreetUser, newage} from "./greet.js";

console.log(newage);
console.log(newGreetUser("Raiden"));

/* 
Renaming in the import file(this file!)
import{function1 as newName1, function2 as newName2, variable as newVariable}
*/
import {greetUser as newNewGreetUser, age as newNewAge} from "./greet.js";
console.log(newNewGreetUser("Sub-Zero"));
console.log(newNewAge);

//Importing a default function
import banana from "./greet.js";
console.log(banana(9, 4));

//banana is not in greet.js but becomes the default export name.
