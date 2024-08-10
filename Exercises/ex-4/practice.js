/*
Task-1
Get user to input a number using prompt . check if the number
is a multiple of 5 or not.


*/
let num= prompt("Enter a number:");
if (num % 5 ==0){
    console.log(num," is a multiple of 5");
}
else{
    console.log(num," is not a multiple of 5");
}


// Task-2

let grade;
let score=prompt("Enter score");
if(score>=90 && score<=100){
    grade="A";
}
else if(score>=80 && score<=89 ){
    grade="B";
}
else if (score>=70 && score<=79){
    grade="C";
}
else if(score>=60 && score<=69){
    grade = "D";
}
else{
    grade ="F";
}
console.log("Grade is:",grade);


