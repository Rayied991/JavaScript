for(let i=0;i<15;i++){
    console.log(i);
    if(i>=10){
        break;
    }
}

let n=54;
while (n>25){
    if(n < 50){
        break;
    }
    console.log(n);
        n--;
}

//continue->skip rest of the code for this iteration
//break->I am done.loop end.

for(let i=1;i<10;i++){
    if(i %2 !==0){
        continue;

    }
    console.log(i);
}


let m=0;
while(m<50){
    m++;
    if(m%5 !== 0){
            continue;
    }
    console.log(m);
   
}