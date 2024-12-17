//for loop

// for (first;second ; third;){
// step-1: loop variable declaration
// step-2:condition
// step-3:increment/decrement

// }
for(let num=0;num<5;num++){
    console.log(num);

}


for(let i=1;i<=10;i++){
    if(i%2 ===0){
        console.log("Even Number:",i);
    }
    else if(i%2 !==0){
        console.log("Odd Number:",i);
    }
}
//another way
//even
for(let i=0;i<=10;i=i+2){
    console.log(i);
}
//odd
for(let i=1;i<=10;i=i+2){
    console.log(i);
}

//sum
let sum=0;
for (i=11;i<=20;i++){
    sum+=i;

}
console.log("Sum:",sum);

//incremental for
for (let index = 0; index < 10; index++) {
    console.log("Index:",index);
    
}

//decremental for
for(let i=10;i>=0;i--){
    console.log(i); 
}