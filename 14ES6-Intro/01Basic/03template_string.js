const first='Md.';
const last='Rahim';
const greet="have a nice day";
const name=first+" "+last+" "+greet;
console.log(name);

const a=10;
const b=20;
// const res="The sum of " +a+' and '+b+" is "+(a+b);///make it suitable
// string literal
const res=`The sum of ${a} and ${b} is ${a+b}`;
console.log(res);

// const email=`Hi John\n`+
// `cool\n`+
// 'new guy';
// console.log(email);


const challenge=`John Doe
cool
boy`;
console.log(challenge);

const numbers=[1,2,3,4,5];
const sumd=`The sum of ${numbers[0]} and ${numbers[1]} is ${numbers[0]+numbers[1]}`;
console.log(sumd);

const student={
    name:'sakib',
age:25};
const intro=`My name is ${student.name} and I am ${student.age} years old.`;
console.log(intro);