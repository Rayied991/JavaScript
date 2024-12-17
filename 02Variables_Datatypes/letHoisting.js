// Let hoisting->Variables defined with var are hoisted to the top and can be initialized at any time.
// Meaning: You can use the variable before it is declared:


//var carName;
//carName=undefined;
//carName="volvo";
carName = "Volvo";
var carName;

console.log(carName);
// Variables defined with let are also hoisted to the top of the block, but not initialized.
// Using a let variable before it is declared will result in a ReferenceError


// let carName2;->in let this not happened

carName2 = "Saab";
let carName2="volvo" ;
console.log(carName2);

//var carName2;->assigns a default value
//let carName2;->cannot assign a default value[for let this is temporal dead zone]
//js concept-> if a variable has no default value it cannot be accessed,assigned

