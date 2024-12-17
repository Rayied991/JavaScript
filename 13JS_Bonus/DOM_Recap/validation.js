const number='23';
if(typeof number === 'number'){
    console.log('number');      
}
else{
    console.log('not a number');
}

const numbers=[123,456,789];
const student={ name:"av",age:21};
// console.log(typeof numbers);
console.log(typeof student);

console.log(Array.isArray(numbers));
console.log(Array.isArray(student));
console.log(isNaN(56));
console.log(isNaN({}));
console.log(isNaN([]));