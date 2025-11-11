/*
Syntax of an "if" statement:
if(condition){
    body
} 
*/
const number = 100;
if (number > 50){
    console.log("This number is greater than 50.")
}

/* Syntax of an "else" statement
if (condition){
    body
}
else {
    body
    }
 */

const digit = 5;
if(digit > 10){
    console.log("This number is greater than 10");
    console.log("Way to go!")
}
else{
    console.log("This number is lesser than 10")
}

/* 
else if - used to check for multiple conditions.
if(condition 1){
    body
}
else if(condition 2){
    body
    }
else if(condition 3){
    body
}
else{
    body
    }
*/
let passMark = 90;
if (passMark > 100 || passMark < 0){
    console.log("Invalid marks") //Always check invalid inputs before normal logic.
}
else if (passMark >= 60){
    console.log("You passed!");
    console.log("Congratulations!");
}
else if(passMark == 40){
    console.log("You tried yo best.");
}
else if(passMark <= 39){
    console.log("God Bless You");
}
else {
    console.log("Missing marks");
}

/* 
Nested "if" statements - an "if" statement inside another "if" statement.
*/
let marks;
if(marks >= 50){
    if (marks >= 85){
        console.log("Distinction!");
        console.log("Congrats!");
    }
    else{
        console.log("Yay. You passed.");
    }
}
else{
    console.log("You should probably try again.");
}



function passOrFail(mark){
    if (mark >= 40){
        return "Pass";
    }
    else {
        return "Fail";
    }

}

console.log(passOrFail(34));