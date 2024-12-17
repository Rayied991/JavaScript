//default value->if value/argument not given,take this as default
function add(num1=99,num2=0){
    const res=num1+num2;
    console.log("Num1:",num1,"Num2:",num2,"Result:",res);
    return res;
}

// const sum=add(10);
const sum=add();

function fullName(first,last=''){
    const fullName=first+" "+last;
    console.log("First name:",first,"Last name:",last,"Full name:",fullName);
    return fullName;
}

function friends(numbs=[]){

}

function Person(human={}){

}


fullName();



