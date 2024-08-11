//String is a sequence of character used to represent text

//Create String
let str= "Rayied";//way-1
let str2= "Hussain";
//In strings we have in-build functions/Methods and properties(length-internal variable).
console.log("Length of str = ",str);
console.log("Length of str2 = ",str2);

//string behaves like at object->str[position]

//fetch the character using individual position
//string indices
// console.log(str[0]);
// console.log(str[1]);
for (let i=0;i<=str.length-1;i++){
    console.log(str[i]);
}

//Template literals->Special type of strings
//Create String-way02
let SpecialString=`This is a template literals`;//backticks
console.log(SpecialString);
console.log(typeof(SpecialString));

//we have to create string why backticks instead of double/single quotes?

let obj={
    item: "pen",
    price: 10
};
console.log("The cost of ",obj.item, " is ",obj.price, " tk");//way-1 to print in one line
//in template literals-> we can write variables and also string
let output=`The cost of ${obj.item} is ${obj.price}`;//simpler version called string interpolation(values will be calculated in runtime)
console.log(output);

let m=`calculate ${1+2+3}`;//step-1->value calculated ; step-2: it became part of the string
console.log(m);

//Escape characters(\n)-> next line
console.log("ABCDE\nFGHIJKL");
// \t-> tab space
console.log("ABCDE\tFGHIJKL");

let str3="ABCDE\nFGHIJKL";
let str4="ABCDE\tFGHIJKL";
console.log(str3.length);
console.log(str4.length);

// To replace all matches, use a regular expression with a /g flag (global match):
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "Google");
console.log(newText);


//String Primitives and String objects
const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log(eval(s2.valueOf())); // returns the number 4


//JavaScript Strings as Objects
let y = new String("John");
console.log(typeof y);



