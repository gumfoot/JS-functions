//Spread operator(...)
//Used to expand/spread out ("opens up") elements of an array, object or string.
//Like unzipping a bag and pouring everything out.

//Spread inside an array
let fruits = ["Apple", "Banana", "Cherry"];
//adding fruits without ... operator
let fruits1 = ["Lemon", fruits, "Lime", "Grape"];
//adding fruits using the ... operator
let fruits2 = ["Lemon", ...fruits, "Lime", "Grape"];

console.log(fruits1, fruits2);

//Cloning an array using ... operator
let array = [10, 20, 30, 40, 50];
let array2 = array;
array2.push(60); //change in one variable reflects in th other since they reference the same array.
console.log(array, array2);
//To change one without using the other, we use the ... operator
let arr = [10, 20, 30, 40, 50];
let arr2 = [...arr];
arr.push(60);
console.log(arr, arr2);

//Spread operator with object
let obj1 = {x : 1, y : 2};
let obj2 = {z : 3};

let obj3 = {...obj1, ...obj2}; //used ... to expand objects 1 and 2 into object 3.
let obj4 = {obj1, obj2};

console.log(obj3, obj4);

//Rest parameter - when ... operator is used as a parameter.
//Using rest parameters will output as array elements.
let printArray = function (...args){
    console.log(args);
}
printArray(3);
printArray(4, 5, 6);
printArray(7, 8, 9, "Ten")

