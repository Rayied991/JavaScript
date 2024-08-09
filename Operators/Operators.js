/*
Operators are used to perform some operation
on data. 
*/
/*
Categories of Operators->
1.Arithmetic Operators(+,-,*,/)
->Modulus(%)-> a % b-> return remainder
->Exponentiation(**)->a**b->a^b->2^3=2*2*2=8
->Increment
->Decrement
*/
let a=5;
let b=2;
let c = a+b;
console.log("Value of a :",a, " & Value of b :",b);
console.log("a+b = ",c);
console.log("a-b = ",a - b);
console.log("a*b = ",a * b);
console.log("a/b = ",a / b);
console.log("a % b = ",a % b);//Modulus
console.log("a ** b = ",a ** b);//Exponentiation
/*Till now all operator works on 2 operands they always
needed a and also b. */
/* These are the operator which works with
one operands which are known as ->
Unary Operators(Increment(++), Decrement(--))
A++ = A+1 //Increment
A-- =A-1 //Decrement

*/

//Unary Operator
console.log("Unary Operator");
console.log("a :",a);
a++;//6
console.log("a :",a);
console.log("b :",b);
b--;
console.log("b :",b);

/*
a++(post-increment)
++a(pre-increment)
a—(post-decrement)
--a(pre-decrement)
*/
 console.log("++b : ",++b);//2
 console.log("b++ : ",b++);//2
 console.log("b : ",b);//3

 console.log("--a:",--a);//5
 console.log("a--:",a--);//5
 console.log("a:",a);//4

 /*Assignment Operators(=,+=,-=,*=,%=,**=)
 it used to assign values*/
 console.log("Assignment Operators");
 a +=4;//a=a+4
 console.log("a:",a);//8
 a -=1;//a=a-1
 console.log("a:",a);//7
 a *=2;//a=a*2
 console.log("a:",a);//14
 a /=4;//a=a/4
 console.log("a:",a);//3.5
 b %=4;//b=b%4
 console.log("b:",b);//3
 a **=4;//a=a**4
 console.log("a:",a);//150.0625

 //Comparison Operators(>,>=,<,<=)-> [Values to compare]
 /* Equal to(==)
 Not equal to (!=)
 Equal to & type (===)
 Not equal to & type(!==)*/
 console.log("Comparison Operators");
 console.log("a == b:", a == b);//150.0625 == 3 -> false
 console.log("5 == 5 :", 5 == 5); //true
 console.log("a != b:", a != b);//150.0625 != 3 -> true
 console.log("5 != 5 :", 5 != 5); //false


 //Problem->
 let p1=5;//number
 let p2="5";//string
 let p3="6";//string
 console.log("5==5", p1 ==p2);//true->possible because-> string implicitly convert ->number  then compare number with number
 console.log("5==5", p1 ==p3);//false
 console.log("5==5", p2 ==p3);//false
 //In some cases we don't want string and number equally compares
 //for that time we use Equal to & type(===)
//  ==-> checks only value
// ===->checks value and also datatype

console.log("Equal to & type / Stricter version of equal to");
console.log("5===5", p1 ===p2);//false
console.log("5!==5", p1 !==p2);//true


let m=6;
let n=3;
console.log("m>n:",m > n);//true
console.log("m>=n:",m >= n);//true
console.log("m<n:",m < n);//false
console.log("m<=n:",m <= n);//false

//Logical Operators>by evaluating Multiple expression give a final answer(True/false)
/* Logical And(&&)-> we will get true if both value is true
Logical Or (||)
Logical Not(!)
*/

console.log("Logical AND");
let cond1=m>n;
let cond2=m === 6;
let cond3= n === 6;
console.log("cond1 && cond2:", cond1 && cond2);//true
console.log("cond1 && !cond2:", cond1 && !cond2);//false
console.log("cond1 && cond3:", cond1 && cond3);//false

console.log("Logical OR");
console.log("cond1 || cond2:", m < n || m === 6);//true
console.log("cond1 || cond2:", m < n || n === 6);//false


console.log("Logical Not");
console.log("!m<n:",!(m<n));//true
console.log("!m>n:",!(m>n));//false




