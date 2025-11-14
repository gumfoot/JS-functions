/* 
Switch...case statements. - executes different blocks of code based on the expression given.

switch(expression){
    case value1:
        code to be executed;
        break;

    case value2:
        code to be executed;
        break;

    case value3:
        code to be executed;
        break;
    
    default: (if no block has been executed)
        code to be executed;
    
}
*/

let day = 1;
switch(day){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break; 
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7 :
        console.log("Saturday");
        break;
    
    default:
        console.log("There are only 7 days in a week.")
}

function getGrade(grade){
    switch (grade){
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Average")
            break;
        case "D":
            console.log("Less than average")
            break;
        case "E":
            console.log("Wewe kuja na mzazi.")
            break;
        default:
            console.log("No such grade exists.")
    }
}
 getGrade("E")

function getSeasons(season){
switch(season){
    case 1:
        return "Summer";
        break;
    case 2:
        return "Autumn";
        break;
    case 3:
        return "Winter";
        break;
    case 4:
        return "Spring";
    default:
        return "There are only 4 seasons.";
    
}
}
console.log(getSeasons(3))

function trafficSign(color){
    switch(color){
        case "Red":
        console.log(`${color} means stop.`);
        break;

        case "Amber":
        console.log(`${color} means get ready to move/slow down.`);
        break;

        case "Green":
        console.log(`${color} means go.`)
        break;

        default:
            console.log("No such color.");


    }
}
 trafficSign("Amber")

function basicCalculator(num1, num2, op){
    switch(num1, num2, op){
        case "+":
        return num1 + num2;
        break;

        case "-":
        return num1 - num2;
        break;

        case "*":
        return num1 * num2;
        break;
        
        case "/":
        return num1 / num2;
        break;

        default:
        return "Invalid operator"


    }
}
console.log(basicCalculator(44, 3, "/"))

