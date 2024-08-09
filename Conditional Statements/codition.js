//Conditional Statement

// let age=25;
let mode = "dark";
let color;
//if block
// if(mode === "dark"){
//     color="black";
// }
// if (mode === "light"){
//     color= "white";
// }

// console.log(color);

// if(age > 18){
//     console.log("You can vote");
// }

// if (age < 18){
//     console.log("You cannot vote");
// }

//if-else
if (mode === "dark"){
    color="black";
}
else{
    color= "white";
}
console.log(color);

let age=25;
if(age > 18){
    console.log("You can vote");
}

else{
    console.log("You cannot vote");
}

//to write else we needed at least one if

//Check odd or even
console.log("Odd or even");
let num=11;
if (num % 2 === 0){
    console.log(num," is even");
}
else{
    console.log(num," is odd");
}

//syntax -> rules

// else-if statement 
if(age < 18){
    console.log("Junior");
}
else if(age > 60){
    console.log("Senior");
}
else{
    console.log("Middle");
}

//if i check only condition nothing else its ok
// if (mode === "dark") console.log(mode);//its not professional workflow(not recommended)