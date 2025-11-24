//Makes it easier to assign array values and object properties to distinct variables.
//Object destructuring
const person = {
    name : "Nesta",
    age : 26,
    gender : "Male",
}
//Destructuring
let {name, age, gender} = person;
console.log(name);
console.log(age);
console.log(gender);

//Array destructuring
const arrValue = ["one", "two", "three", "four"];
let[x, y, z] = arrValue;
console.log(y);

//Skip items
const arrayValue = ['one', 'two', 'three'];
let [a, ,c] = arrayValue;
console.log(a, c);

//Assigning remaining elements to a variable
//Use ... operator
const arrayVals = ['one', 'two', 'three'];
let [d, ...e] = arrayVals;
console.log(e);
//spread operator(...) cannot come before a comma. Has to be last thing.

//Assigning default values
let arrVal = [10];
let [f = 5, g = 7] = arrVal;
console.log(f); //takes assigned value
console.log(g); //takes default value
