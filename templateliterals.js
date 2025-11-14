//Understanding substitution strings and template literals

//template literals
function findProduct(num1, num3){
    return num1 * num3;

}

console.log(`The product is ${findProduct(7, 9)}`);

//substitution strings
function findSum(num1, num3){
    return num1 + num3;
}

console.log("The sum of the two numbers is %d", 4 + 7);
