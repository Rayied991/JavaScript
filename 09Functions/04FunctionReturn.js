function tenTimes(number){
    const result=number*10;
    return result;

    // console.log(result);//unreachable code

}

function cutHalf(number){
    const half=number/2;
    return half;
}

function doMath(num1,num2){
    const add=num1+num2;
    const sub=num1-num2;
    const mul=num1*num2;
    const div=num1/num2;
    const mod=num1%num2;
    const all=add+sub+mul+div+mod;
    return all;
}

function isEven(number){
    if(number%2 ===0){
        return true;
    }
    else{
        return false;
    }
}
function isOdd(number){
    if(number%2 !== 0){
        return true;
    }
    else{
        return false;
    }
}

let tenX=tenTimes(5);
let half=cutHalf(20);
console.log(tenX);
console.log(half);
let math=doMath(50,20);
console.log(math);

console.log(isEven(110));
console.log(isEven(5));
console.log(isOdd(5));
console.log(isOdd(22));
