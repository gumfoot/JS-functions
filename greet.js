//exported function

export function greetUser(name){
    return `Wagwan, ${name}`
}


//exported variable
export let age = 30;

//renaming in module(this file!)

export{
     greetUser as newGreetUser,
     age as newage,
};

//default export
export default function(num1, num2){
    return num1 + num2;
};

//can only have one default export in a file.
