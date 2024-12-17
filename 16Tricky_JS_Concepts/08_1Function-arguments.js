function sum(a,b,c){//parameters
    console.log(arguments);
    console.log(typeof arguments);
    //array like objects:arguments 
    const args=[...arguments];//convert to array
    console.log(args);
    args.push(100);
    console.log(args);
    const total=a+b+c;
    return total;

}
// console.log(arguments);
const total=sum(45,85,12,55,67,88);///arguments
// console.log(total)
console.log(typeof total)
console.log( total.length)