//Callback functions - functions that can be called as an argument of another function

//"main" function
function greet(name, callback){
    console.log(`Hi ${name}`);
    callback();
}

//callback function
function callMe(){
    console.log("Callback function.");
}

//Calllng both functions.
greet("Nesta", callMe);

