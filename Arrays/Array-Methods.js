//Array Methods
//2 types of methods
// 1.changed the Array
// 2.do not change the array instead a newarray is returned

//Push method->add to end
//Pop method->delete from end and return
//toString method->converts array to string
//Concat method->joins multiple arrays & return  result
//unshift method->add to start
//shift method->delete from start & return
//slice method->returns a piece of the array
//splice method->change original array(add,remove,replace)

let foodItems=["Potato","apple","lichi","tomato"];
foodItems.push("Chips");
foodItems.push("Sandwich","Burger");
console.log(foodItems);
let deletedItem=foodItems.pop();
console.log(foodItems);
console.log("Deleted ",deletedItem);

//toString()
let converted=foodItems.toString();
console.log(foodItems.toString());
console.log("Original array is : ",typeof foodItems);
console.log("After using toString is : ",typeof converted);

let marks=[97,86,77,54,35];
let cv=marks.toString();
console.log(typeof cv);

//Concat method


let marvelHeroes=["Thor","Spiderman","Ironman"];
let dcHeroes=["Superman","Batman"];

let heroes=marvelHeroes.concat(dcHeroes);
console.log(heroes);
console.log(marvelHeroes);
console.log(dcHeroes);

//unshift method
console.log(marvelHeroes);
marvelHeroes.unshift("Antman");
console.log(marvelHeroes);//added at the start

//shift method
let deleted=marvelHeroes.shift();
console.log(marvelHeroes);
console.log("Deleted value is : ",deleted);//deleted 1st value

//Slice Method
let newheroes=["Thor","Spiderman","Ironman","Superman","Batman","Dr.Strange"];
console.log(newheroes);

console.log(newheroes.slice(1,3));
console.log(newheroes.slice(1));

//Splice Method
let arr=[1,2,3,4,5,6,7];
//element add
arr.splice(2,0,101);
console.log(arr);

//delete
arr.splice(3,1);
console.log(arr);

//replace
arr.splice(3,1,102);
console.log(arr);

arr.splice(3);//delete all element after index 3
console.log(arr);

arr.splice();
console.log(arr);//no change in original array

