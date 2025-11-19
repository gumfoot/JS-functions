/* 
Throw statements are used to handle user-defined exceptions.(runtime errors)

throw expression(value of the exception);

When used with try...catch, syntax is;
try{
    body of try
    throw exception; (exits and goes to the catch block)
}
catch(error){
    body of catch 
}

*/
let number = 30;
try{
    if(number > 50){
        console.log("Success");
    }
    else{
        throw new Error("The number is low");
    }
    //this will not execute if throw executes.
    console.log("hello");
}
catch(error){
    console.log("Error caught!");
    console.log("Error message: ", error);
}