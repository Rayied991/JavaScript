//while loop
// let number=1;
// while(number<=10){
//     console.log(number);
//     number++;
// }
let num=50;
while(num<=100){
    console.log(num);
    num++;
}
let num1=1;
 let sum=0;
while(num1<=10){
    console.log(num1);
    sum+=num1;
    num1++;
}
console.log("Sum:",sum);

let num2=1;
while(num2<=10){
    console.log(num2);
    if(num2 % 2 === 0){
        console.log("Even Number:",num2);
    }
    else if(num2 % 2 !== 0){
        console.log("Odd Number:",num2);
    }
    num2++;
}