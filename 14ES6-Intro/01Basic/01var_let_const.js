// var :no reason to use

// let : allow it to reassign
// const: do not allow it to reassign

const money=25;
// money=50;///error
const rich=money+50;
console.log(rich);

let count=0;
count=count+10;
console.log(count);


const numbers=[1,2,3,4,5];
// numbers=[1,2,35,6,7,8];//error
console.log(numbers);
numbers[1]=55;
numbers.push(6,99,122);
console.log(numbers);


//object
const student={
    name:'sakib',
    age:25,
    class:10,
};


console.log(student);
// student={
//     name:"new"
// }
// console.log(student);//error
student.age=45;
console.log(student);


//loop
// for(const i=0;i<10;i++){
//     console.log(i);
// }//error
// const sum=0;
let sum=0;
for(let i=0;i<10;i++){  
    // sum=sum+i;//error
    const num=i;///no error
    sum=sum+num;

}
console.log(sum);