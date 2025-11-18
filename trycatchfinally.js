/* 
try...catch...finally blocks are used to handle exceptions (errors)
Types of errors;
    1. Syntax error - "spelling mistakes"
    2. Runtime errors - occurs during execution of program. Also called exceptions.

try...catch statement used to handle exceptions.

try{
    body of try - main code
}
catch(error){
    body of catch - catch statements
}
*/

let numerator = 100, denominator = 'a';
try {
    console.log(numerator/denominator);
    console.log(a);
}
catch(error){
    console.log("Error caught!");
    console.log("The error is: ", error);
}

//try...catch...finally statements can also be used to handle exceptions
//The finally block executes both when code runs successfully and/or if an error occurs.
/* 
try{
    body of try
}
catch(error){
    body of catch
}
finally (){
    code that get execited either way
}
*/

let numer = 100, denom = 'a';
try{
    console.log(numer/denom);
    console.log(a);
}
catch(error){
    console.log("An error occured");
    console.log('Error: ', error);
}
finally{
    console.log("This will be executed every time.")
}