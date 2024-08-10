//Loops  are used to execute a piece of code  again && again.


// console.log("For loops");//print 5 times
// console.log("For loops");//print 5 times
// console.log("For loops");//print 5 times
// console.log("For loops");//print 5 times
// console.log("For loops");//print 5 times
//not a good practice - here comes loops

//Print 1 to 5 times
for (let i=1;i<=5;i++){//if here use var instead of let-> then we will get output from outside the scope
    // console.log("For loops");//5 time execute
    console.log("i = ",i);
}
// console.log(i);//outside of block scope

//calculate sum of 1-n numbers
let sum=0;
let n=5;
for(let count=1;count<=n;count++){
    sum=sum+count;
}
console.log("Sum=",sum);//sum=15

console.log("Loop Has ended");

/*
Statement of for loop:
3 statement->
1.	Initialization(let i=1;)
2.	stopping condition(i<=5;)
3.	Updation(i++)
We initialize one time & update and check condition everytime until it mets stopping condition.

*/

//Infinite Loop
// for(j=1;j>=0;j++){
//     console.log(j);
// }

