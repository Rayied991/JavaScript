//odd
for (let i=0;i <20;i++){
    if(i%2 === 1){
        console.log(i);
    }
}
//odd
for (let i=0;i <20;i++){
    if(i%2 !== 0){
        console.log(i);
    }
}
//odd
for (let i=1;i <20;i+=2){   
    console.log(i);
    
}

//list of numbers divisible by 5 and 3
for(let i=1;i<=100;i++){
    if(i%5 === 0 && i%3 === 0){
        console.log(i);
    }
}

//sum of the numbers divisible by 3
let s=0;
for(let i=1;i<=20;i++){
    if(i%3 === 0){
        console.log(i);
        s+=i;
        // console .log(s);
    }   
}
console.log(s);