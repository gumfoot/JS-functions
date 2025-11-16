//Function - Independent block of code that performs a specific task. 
//function expression - a way to store functions in variables.


//function functionName(function, parameter(s)){
//       body of code;
//}
// functionName(argument);



//function
function greetUser(name){ //name is a parameter. - argument placeholder
    console.log(`Hello, ${name}!`);
}

greetUser("Nesta");//"Nesta" is an argument.
greetUser("Moses");
greetUser("Nick"); //Passing different arguments to function.
greetUser("Ian");


//function expression
let getPI = function(){
    console.log("PI is 3.142!");
}

getPI();

function addNumbers(num1, num2){ //multiple arguments one function.

}

function findSquare(num){
    console.log("Executing...");
    return num * num; //return statement - terminates the function.
}
let square = findSquare(16); //store value in square variable.
console.log(`Square: ${square}`);
