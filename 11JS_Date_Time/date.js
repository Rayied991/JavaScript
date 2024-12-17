const today=new Date(); 
console.log("Today's date is: ",today);
const today2=new Date("2062-10-19");    
console.log("Today's date 2062 is: ",today2);

console.log(today2.getMonth());
console.log(today2.getDay());

const specificDate=new Date(2091,0,26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate);
console.log(specificDate.toLocaleString());
console.log(specificDate.toLocaleString('en-GB'));

//date to second
//unix epochs
