//Arithmetic operators
let x =10;
let y = 6;

//Addition
console.log("Addition:x + 3 is ", x + 3);

//Subtraction
console.log("Subtraction:x - 3 is ", x - 3);

//Division
console.log("Division:x / 2 is: ", x / 2 );

// Remainder 
console.log("Remainder: The remainder is", x % 3)

//Increment 
console.log("Increment: The increment is" , ++x);

//Decrement
console.log("Decrement: Decrement is:", --y);
//if used as a prefix, the value of x is increased by 1, then displayed.
//If used as postfix, the original value is displayed, then x increases by 1.

//Exponention(Power)
console.log(`Exponention: Exponention is: ${x ** 5}`);

//Assignment operators
let z= 4;
//Addition assignment operator
z+= 5;
console.log(z);

//Subtraction assignment operator
z-= 2
console.log("z-=, z =", z);

//Multiplication assignment operator
z*= 3
console.log ("z*= 3, z=", z);

//Division assignment operator
z/=7;
console.log(z);

//Comparison operators - compare two values and returns boolean value

const a= 5, b= 3, c= 9;
console.log(a > c);//false
console.log(b < a);//true
console.log(b == a);//false
console.log(a != c);//true


//Logical operators
//AND &&, OR ||, NOT !
let o= 2;
console.log((o == 2) && (o < 1));//false
console.log((o == 2) && (o > 1));//true

console.log((o == 2) || (o < 1));//true
console.log((o == 2) || (o > 1));//true
console.log((o == 3) || (o < 1));//false

console.log(!(o == 2));//false
console.log(!(o > 5));//true


