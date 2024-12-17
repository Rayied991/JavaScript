



function odd2(arr) {//way-2
    let odds=[];
    for(const num of arr){
        if(num % 2 === 1){
            odds.push(num);
        }
    }
    let sum=0;
    for(const num of odds){
        sum+=num;
    }
    const len=odds.length;
    console.log(sum,len);
    const avg=sum/len;
    return avg;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(odd2(arr));
