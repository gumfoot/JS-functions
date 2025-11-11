//String
console.log("Hello, World!");

//number
console.log(4);

//boolean
let isGrasping = true;
console.log(isGrasping);

let isImpossible = false;
console.log(isImpossible);

//null
let emptyValue= null;
console.log(emptyValue);

//undefined
let notAssigned;
console.log(notAssigned);

//object
let human= {
    name: "Alice",
    age: 46,
}
console.log(human);





//String
console.log(typeof("Hello, World!"));

//number
console.log(typeof(4));

//boolean
let grasping = true;
console.log(typeof(grasping));
let impossible = false;
console.log(typeof(impossible));

//null
let emptyVal= null;
console.log(typeof(emptyVal));

//undefined
let notAssign;
console.log(typeof(notAssign));

//object
let humanBeing= {
    name: "Alice",
    age: 46,
}
console.log(typeof(humanBeing));


function catStrings (str1, str2){
    return `${str1} ${str2}`;
}

let stringCombo = catStrings ("Hello, ", "World");
console.log(stringCombo);