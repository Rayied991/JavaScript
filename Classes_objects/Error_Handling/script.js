let a=5;
let b=10;
console.log("a = ",a);
console.log("a = ",b);
console.log("a+b = ",a+b);
try{
    console.log("a+b = ",a + c); //error-> because of this error rest of the code do not get executed
} catch(err){//err is an error object
    console.log(err);
}
//we should use error-handling
// using try-catch rest of the code didn't stopped 
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);
console.log("a+b = ",a+b);