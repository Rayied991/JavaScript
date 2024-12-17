const diff=(x,y)=> x - y;

const multiply = (first,second,third)=> first * second * third;

//for 1 parameter/single parameter
const getAge= (person)=> person.age;//implicit return
const student={name:'sakib',age:25};
const Age=getAge(student);
console.log(Age);


const getThird=numbers=>numbers[2];
const third=getThird([1,2,3,4,5]);
console.log(third);

const doubleIt=number=>number*2;
const result=doubleIt(5);
console.log(result);

//no parameter
const getPi=()=>Math.PI;
const pi=getPi();
console.log(pi);

///Large arrow function.if you want to get anything returned 
// from this function .then you have to use return keyword. 
const doMath=(x,y)=>{
    //explicit return
    const sum=x+y;
    const diff=x-y;
    const result=sum*diff;
    return result;
}

const result2=doMath(10,5);
console.log(result2);