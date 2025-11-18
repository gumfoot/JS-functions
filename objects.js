/*
Object - can store multiple data in key-value pairs.
Name: "Nesta"
Age: 26
Key - Name, Age
Value - "Nesta", 26

const objectName = {
    key1 : value1,
    key2 : value2,
    key3 : value3,
    keyN : valueN,
};
Key-value pairs are reffered to as properties of the object.
So key1 : value1 are properties of object objectName.
*/
//Properties can be accessed using their keys.
//dot notation
const dog = {
    name: "Rocky",
    age: 10,
};
console.log(dog.name);
console.log(dog.age);

//Bracket notation
const cat = {
    name: "Luna",
    age: 5,
};
console.log(cat["name"]);

//Object operations
//Objects can be modified, added or deleted.
//Object modification
const person = {
    name : "Nesta",
    hobby: "Dancing"
};
person.hobby = "Video games"; //modification
console.log(person.hobby);

//Object property addition
const student = {
    name : "Dean",
    age : 22,
}
//added properties
student.hobby = "Golfing";
student.home = "Nairobi";

console.log(student);

//Object property deletion
const superHero = {
    name : "Tony Stark",
    alter : "Iron Man",
    universe : "Marvel",
}
delete superHero.universe;
console.log(superHero);


//Object Methods
//Methods - functions assigned as a value for an object key.
const human = {
    name : "Tim Drake",
    age : 16,
    greet : function sayHi(){
        console.log("Tim says hi");
    }
}
human.greet(); //calling the object method(function as a value)

//Nested objects - objects that contain other objects.
const homoSapien = {
    name : "Jason Todd",
    age : 28,
    speak : function greet(){
        console.log("Jason says hi");
    },
    //object as a value for an object key(Nested objects)
    marks : {
        Science : 80,
        Math : 70,
        Kiswahili : 65,
        Geography : 75,
    },
}

homoSapien.marks.English = 85;
homoSapien.marks.Kiswahili = 79;
delete homoSapien.marks.Geography;
homoSapien.speak();
console.log(homoSapien.marks);

/*function to create a simple flash card
function flashCard(){

    const questAns = {
        question : "What is the capital city of Kenya?",
        answer : "Nairobi",
    };
    console.log(questAns);
}
flashCard();
*/
//Attempt 2
function flashCard(){

    return  {
        question : "What is the capital city of Kenya?",
        answer : "Nairobi",
    };
    
}

let card = flashCard();
console.log(card);