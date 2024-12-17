//Parameter
function square(number){
    console.log("Number:",number);
    const sq=number*number;
    console.log(`Square of ${number} is :`,sq);
}
// console.log("Value:",number);#error cannot access outside function


function add(a,b){
    const sum=a+b;
    console.log(`Sum of ${a} & ${b} is :`,sum);

}
function addAll(a,b,c,d,e){
    const sum=a+b+c+d+e;
    console.log(`Sum of ${a},${b},${c},${d} & ${e} is :`,sum);

}


square(4);
square(5);
square(10);
add(5,71);
add(65,31);
addAll(3,4,6,7,1);