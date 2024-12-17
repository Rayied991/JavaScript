//block scope
function add(a,b){
    const total=a+b;
    console.log(a,b);
    if(b>5){
        const sum=25+a+b;

    }
    else{
        const sum=10+a+b;
        var curr=sum;
    }
    // hoisting concept:for var variable does not follow block scope
    
    // console.log(curr);//no error
    // console.log(sum);//error
    return total;

}
// console.log(a,b);//error
// console.log(total);//error
add(5,3);