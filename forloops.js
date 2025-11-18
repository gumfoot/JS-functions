/*
For loops
for(initialization; condition; increment/decrement){
    code
}
*/

let sum = 0;
for (let i = 1; i <= 10; i++){

    sum = sum + i;
}
console.log(sum);

//for...in loops - iterates over keys of an object

const cars = {
        make : "Toyota",
        model : "Corolla",
        yom : 2017,
}

for (let key in cars){
    console.log(cars[key]);
}