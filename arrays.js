/* 
Arrays - objects that can store multiple values at once.
const marks = [90, 80, 70, 45];
const cars = ["Hyundai", "Mazda", "Toyota"];
Types
const emptyArray = [];
const mixedData = [35, "Banana", true];
*/

//Accessing elements of an array
const numbers = [10, 30, 45, 60];
console.log(numbers[2]);
//indexing alwasy starts from 0

//Adding an element to an array
//Two methods; push() and slice()
//push() adds an element at the end of an array.
const digits = [10, 20, 30, 40, 50];
digits.push(60);
console.log(digits);

//unshift() adds an element at the beginning of the array.
const num =[10, 20, 30, 40, 50];
num.unshift(60, 70);
console.log(num);

//Changing elements of an array
//Can be done by accessing the index value.
const dailyActivities = ["wake up", "eat", "shower", "leave"];
dailyActivities [3] = "Get lift"
console.log(dailyActivities);

//Removing elements from an array
//Use the splice() method
//array.splice(startIndex, deleteCount);
//array.splice(startIndex, deleteCount, item1, item2) - deletes items from the starting index and adds new items to that index.
const nums = [10, 20, 30, 40, 50];
nums.splice(1, 3,);
console.log(nums);

//pop() - removes the last element of an array and returns it.
//pop() does not have any parameters.
const numbs = [10, 20, 30, 40, 50];
let removed = numbs.pop();
console.log(removed);
console.log(numbs);


function sumArray(){
    const dig = [10, 20, 30, 40];
    return dig[0] + dig[1] + dig[2] + dig[3];
}
console.log(sumArray());
