/* 
Method - function defined within an object.

const dog = {
    name : "Rocky",
    age : 10,

    //object method
    bark : function(){
        console.log("ruff!");
    },
}

dog.bark();  //calling(accessing) the object method.
*/
//Syntax to access method
//objectName.methodKey();

//this keyword - access property of the same object.
const cat = {
    name : "Fluffy",
    sound : "purrs.",
    makesSound : function(){
        return `${this.name} ${this.sound} `
    },

}
console.log(cat.makesSound());

//this only works on an object if a function is called as a method of that object.

//You can add a new method to an object even after it has been defined.
const boy = {
    name : "Kratos",
    job : "God of War!",
}

boy.greet = function(){
    return `My name is ${this.name} and I am the ${this.job}`;

}
console.log(boy);
console.log(boy.greet());
