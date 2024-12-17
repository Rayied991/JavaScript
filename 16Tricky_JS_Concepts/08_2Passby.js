//pass by value and reference
let num1=5;
let num2=7;
function multiply(a,b){
    a=27;
    const res=a*b;
    return res;

}
/**
 * if any primitive type passed by function parameter inside function change the value then
 * in outside value will not be changed.[pass by value]
 * 
 */
console.log(num1,num2)
const out=multiply(num1,num2);
console.log(out)
console.log(num1)

let student1={name:"rahul",partner:"shubham"};
let student2={name:"shubham",partner:"rahul"};
function makeMovie(c1,c2){
    c1.name="Anik";
    c2.partner="Anik";


}
console.log(student1,student2)//no change
makeMovie(student1,student2);
console.log(student1,student2)//changed
/**
 * if any Non- primitive type passed by function parameter inside function change the value then
 * in outside value will be changed.[pass by reference]
 */
/**
 * Will be using pass by value when any data won't be changed while using function->we will be using pass by value.
 * will be using pass by reference when function changes will reflect on object then we will use pass by reference 
 */


