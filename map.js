/* 
Map - lets us store values in key/value pairs similar to objects.
Unlike objects, maps can contain objects, functions and other data types as keys.
*/

//Creating a map - new Map();
let map = new Map();
console.log(map);

//Inserting item to a map - .set(key, value)
let map1 = new Map()
//adding key-value pairs
map1.set("info", {name: "Jack", age: 26})
console.log(map1);

//Accessing elements in a map - use the get() method
let map2 = new Map();
//insert key-value pairs
map2.set("info", {name: "Jack", age: 26})
//access items
console.log(map2.get("info"));

//Deleting elements in a map - clear() and delete() methods.
let map3 = new Map();
map3.set("age", 25);
map3.set(1, "one");
map3.set(true, "This is true");
map3.delete(1);
console.log(map3);
map3.clear;

//Iterating through a map - for...of loop or forEach() method.
let map4 = new Map();
map4.set("Name", "Jack")
map4.set("Age", 4);

for(let [key, value] of map4){
    console.log(`Key: ${key}, Value: ${value}`)
}

