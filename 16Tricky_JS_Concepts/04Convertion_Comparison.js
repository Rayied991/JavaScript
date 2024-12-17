// == vs ===

// const first =2;
// const second = '2';

//always use ===
//equal comparison doesn't work on  non-primitive
const first ='0';
const second = false;

// if(first == second){
if(first === second){
    console.log("both are equal")
}
else{
    console.log("both are not equal")
}

//type conversion/type casting/Implicit type conversion
//type coercion

//non-primitive[they didn't check value but  they check reference]
const a=[];
// const b=[];//not equal for non-primitive
const b=a;

if(a===b){
    console.log("both are equal")
}
else{
    console.log("both are not equal")
}

